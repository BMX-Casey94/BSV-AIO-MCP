# Migration Plan: IBM Sarama → franz-go (`github.com/twmb/franz-go`)

**Repo:** `merkle-service` (BSV merkle-proof pipeline)
**Source library:** `github.com/IBM/sarama v1.50.1`
**Target library:** `github.com/twmb/franz-go` (`pkg/kgo`, `pkg/kadm`, `pkg/kerr`, `pkg/kmsg`) — already present in `go.mod` as an indirect dependency
**Template:** teranode's completed migration in `util/kafka/`, hardened across PRs #611, #633, #636, #638, #660, #527, #683, #720.

> **Warning carried over from teranode:** franz-go is **not** a drop-in client-library swap. The library moves several responsibilities that Sarama handled implicitly (config defaulting, batch sizing, partitioner nil-key handling, consumer recovery) onto the application. Each of these was a production incident in teranode. This plan pre-empts every one of those incidents instead of rediscovering them.

---

## 1. Executive summary

### Scope
merkle-service consumes from and produces to seven Kafka topics (`subtree`, `subtree-dlq`, `block`, `callback`, `callback-dlq`, `subtree-work`, `subtree-work-dlq`) across four consumer services (block-processor, subtree-worker, subtree-fetcher, callback-delivery) and ~10 producer call sites. The entire surface is funnelled through two thin wrappers:

- `internal/kafka/producer.go` — `Producer` wrapping `sarama.SyncProducer` (used everywhere via `Publish` / `PublishWithHashKey`).
- `internal/kafka/consumer.go` — `Consumer` wrapping `sarama.ConsumerGroup` with a `consumerGroupHandler` (Setup/Cleanup/ConsumeClaim), manual `MarkMessage`-on-success offset commits, and an `exitFunc(1)` crash-guard (F-053) when the consume goroutine exits while the context is still live.

This narrow waist is the single biggest asset for the migration: almost all business code calls `Publish`/`PublishWithHashKey` and a `MessageHandler` callback. The one leak is the handler signature:

```go
type MessageHandler func(ctx context.Context, msg *sarama.ConsumerMessage) error
```

`*sarama.ConsumerMessage` propagates into `internal/block/processor.go`, `internal/block/subtree_worker.go`, `internal/subtree/processor.go`, and `internal/callback/delivery.go`. Removing this `sarama` type from the public handler contract is the principal cross-cutting edit.

### Why this is not a drop-in swap
Teranode's iteration history (see §2) proves five non-obvious behavioural differences, four of which merkle-service is **highly exposed** to:

1. **`ProducerBatchMaxBytes` is a hard cap, not a flush trigger** (#660). Sarama's `Flush.Bytes` was an eager-flush threshold; franz's equivalent rejects any record bigger than the cap with `MESSAGE_TOO_LARGE`. merkle-service's `MaxMessageBytes = 10 MiB` is a *cap-raise* today; mapped naively it stays correct, but any legacy flush-style value piped into `ProducerBatchMaxBytes` silently breaks production.
2. **Typed-nil partitioner key skews all traffic to partition 0** (#527). Sarama's hash partitioner and franz's default partitioner both branch on `Key == nil`. A non-nil-but-empty key (or a typed-nil interface) defeats round-robin. merkle-service always sets `Key` today, but the rule (`pass raw []byte, let nil stay nil`) must be enforced in the franz port.
3. **The consumer goroutine must treat client-closed as *recover-and-continue*, not *exit*** (#636/#638). merkle-service's existing F-053 crash-guard (`consumer.go:125-130`) will turn franz's self-healing reconnect into a **crash-loop** unless `IsClientClosed()` / `kgo.ErrClientClosed` is handled as `continue`, not goroutine exit.
4. **No implicit config defaults** (#633). Sarama's `NewConfig()` supplied consumer timeouts for free; constructing franz options directly requires explicit `SessionTimeout`/`HeartbeatInterval`/`RebalanceTimeout`/`FetchMaxWait`.
5. **Manual offset commit is record-tracked, not channel-marked** (consumer findings). `session.MarkMessage` is replaced by tracking `*kgo.Record`s and calling `CommitOffsets`/`CommitOffsetsSync` with `EpochOffset{Epoch: r.LeaderEpoch, Offset: r.Offset + 1}`.

### Recommended approach: **adapt `internal/kafka` in place** (do NOT port teranode's `util/kafka` wholesale)

**Recommendation:** Rewrite the internals of `internal/kafka/producer.go` and `internal/kafka/consumer.go` to use `kgo.Client`, preserving the existing `Producer` / `Consumer` / `MessageHandler` public API shape (with the handler signature changed from `*sarama.ConsumerMessage` to a small merkle-owned `*Message` type). Mine teranode's `util/kafka/` for *patterns and gotcha fixes*, not as a library to import.

**Rationale (grounded in the teranode findings):**

- Teranode's `util/kafka/` is explicitly **not self-contained for reuse**. The producer embeds adaptive backpressure (a 512-sample ring buffer, `slowOngoing` state machine, `producerMetricsHook` cooldown throttling) and the consumer is hard-wired to teranode's `ulogger`, `errors` package, in-memory-kafka fallback, and URL-config parser (`NewKafkaConsumerGroupFromURL`, `validateTimeoutConfig`). Importing it drags in teranode's entire config/metrics stack.
- The findings estimate only **~200 LOC** of teranode's producer is genuinely reusable (the `kgo.Opt` construction, TLS builder, `clampBatchMaxBytes` logic, `Flush`/`Close` sequence); **~600 LOC** is teranode-specific tuning merkle-service does not need.
- merkle-service uses a **synchronous** producer (`SyncProducer`/`SendMessage`). It does not need teranode's hand-rolled async batching loop, adaptive linger, or slow-transfer hooks at all. `ProduceSync` maps 1:1 onto the existing synchronous semantics.
- The findings recommend the **arcade abstraction pattern** (a neutral `Broker`/`Message` interface with a `franzBroker` adapter) over a raw teranode port. merkle-service already *has* that abstraction — its `Producer`/`Consumer`/`MessageHandler` wrappers are the equivalent of arcade's `Broker` interface. We keep them and swap the adapter underneath.

**What to copy verbatim from teranode:** the `clampBatchMaxBytes` 1 MiB-default logic (#660), the explicit consumer-timeout defaults (#633), the `IsClientClosed`-as-continue loop (#636), the `closeMu`+`closed` idempotent-close guard (#720), and the `testcontainers`/Redpanda perf-harness conventions (#720).

---

## 2. Gotcha catalogue

Every subtle franz-vs-sarama difference mined from teranode's fix-up PRs. Exposure rated for merkle-service.

| # | Trap | What Sarama did implicitly | How franz differs | Fix (port from teranode) | merkle exposure |
|---|------|----------------------------|-------------------|--------------------------|-----------------|
| **G1** | **`MESSAGE_TOO_LARGE` from `flush_bytes` → `ProducerBatchMaxBytes` mis-map** | `Producer.Flush.Bytes` was a *flush trigger* ("once N bytes buffered, flush"); Sarama still sent batches/records far larger than this. | `kgo.ProducerBatchMaxBytes` is a **hard maximum** on the produce batch. A legacy value like 64/1024 makes every normal record exceed the cap → broker rejects with `MESSAGE_TOO_LARGE`. | #660 (`4c5ad1c190`): `defaultBatchMaxBytes = 1_048_576` (1 MiB = broker `max.message.bytes` default). `clampBatchMaxBytes`: if requested ≤ 1 MiB return the 1 MiB default; only honour values that *explicitly exceed* 1 MiB (clamp to `math.MaxInt32`). #633 was the inferior interim (min 512). Guard with a real-broker regression test. | **HIGH** |
| **G2** | **Typed-nil partitioner key → all traffic to partition 0** | `var key sarama.ByteEncoder; msg.Key = key` makes a *typed-nil* interface (non-nil interface, nil data). Sarama's `msg.Key != nil` check passes → hashes an empty key → every keyless message to partition 0 (hot partition, no spread). | `kgo.Record.Key` is plain `[]byte`; franz's default partitioner branches on `Key == nil` (nil → sticky/round-robin; non-nil → hash). A typed-nil or empty `[]byte` defeats round-robin identically. | #527 (`59a55d7ef`): never pre-declare/wrap a possibly-absent key. In franz simply write `Key: msgBytes.Key` as raw `[]byte` so nil stays a true nil. #611 carried this forward deliberately. | **HIGH** |
| **G3** | **Consumer goroutine silently exits on recovery (`IsClientClosed`)** | `for { group.Consume(ctx,…); if ctx.Err()!=nil {return} }` — `Consume()` returns on every rebalance/session-end and the loop re-joins. Recovery is implicit; the goroutine only exits when the outer ctx is cancelled. | `PollFetches` returns a `Fetches` whose `IsClientClosed()` is true when the client was closed (including by the app's own recovery). Treating that as terminal makes the goroutine `return` permanently → Running pod, zero consumption. | #636 (`17b52e54d`): treat `IsClientClosed()` / `kgo.ErrClientClosed` as a **recovery** signal — log, sleep ~100 ms, `continue`. Do not model franz on Sarama's `Setup()` callback. | **HIGH** (the existing F-053 `exitFunc(1)` guard at `consumer.go:125-130` would turn franz recovery into a crash-loop) |
| **G4** | **Don't reimplement consumer recovery / no watchdog needed** | App owns the recovery loop; teams layered watchdogs/timeouts on top to catch wedged `Consume()`. | `kgo.Client` reconnects, refreshes metadata, retries fetches and rebalances natively. A watchdog is dead weight and (per G3) actively harmful. | #638 (`3293d3c04`): deleted the entire watchdog (~700 LOC). Idiom: loop on `PollFetches`; on `Errors()` return only for `context.Canceled \|\| kgo.ErrClientClosed`, else log+continue and let the client self-heal. Also: capture+nil the cancel func under a mutex; create the internal ctx in `Start()`, not inside the goroutine. | **MED** (merkle has no watchdog; the cancel-func race hardening *is* applicable — `consumer.go` stores `c.cancel` from inside `Start` without a mutex) |
| **G5** | **No implicit config defaults on direct construction** | `sarama.NewConfig()` set sane consumer timeouts (session, heartbeat, rebalance, max-processing) automatically. | Constructing franz options directly has no defaulting; zero/negative timeouts produce invalid `kgo` options. | #633 (`4cd1ee053`): apply explicit defaults — `MaxProcessingTime 100ms`, `SessionTimeout 10s`, `HeartbeatInterval 3s`, `RebalanceTimeout 60s`, plus `FetchMaxWait 100ms`. (Constraint: session ≥ 3× heartbeat.) | **MED** |
| **G6** | **Topic-exists detection: typed error, not string match** | `CreateTopic` error matched on the string `TOPIC_ALREADY_EXISTS`. | franz returns typed `kerr.TopicAlreadyExists` on **both** the call error and the per-topic `resp.Err`. | #633: `errors.Is(err, kerr.TopicAlreadyExists)` on both; on already-exists, run `AlterTopicConfigs` to keep `retention.ms`/`delete.retention.ms` current rather than failing. Use `kadm.Client`. | **MED** (only the integration test creates topics via `NewClusterAdmin`) |
| **G7** | **Manual offset commit is record-tracked, not channel-marked** | `session.MarkMessage(msg,"")` auto-tracked offsets; offsets implicitly committed. | `DisableAutoCommit()` + track `*kgo.Record`; commit `map[topic]map[partition]kgo.EpochOffset{Epoch: r.LeaderEpoch, Offset: r.Offset + 1}` via `CommitOffsets` (async) or `CommitOffsetsSync` (shutdown/rebalance). | Consumer findings + teranode `kafka_consumer.go ~554-575`. To preserve F-030 (commit only on success), commit each record's `Offset+1` **only after** the handler returns nil. | **HIGH** (core at-least-once invariant F-030/F-031) |
| **G8** | **Async producer two-phase shutdown + detached-ctx final drain** | Sarama's input channel blocks for backpressure; `Close()` drains internally; single `closed` notion. | A hand-rolled async loop races a single `closed` flag (drop in-flight vs. race channel close); parent-ctx cancel can drop buffered work. | #683 (`9ae239e94`): split `shuttingDown` (reject new Publishes) from `closed` (drained); final `Flush` on a fresh `context.Background()` 5 s timeout so cancellation doesn't drop buffered work. Hook callbacks must fire **after** releasing the hook mutex (lock-ordering deadlock). | **LOW** (merkle is sync-only; the two-phase-shutdown idea applies only if an async producer is ever added) |
| **G9** | **`kgo.Client.Close()` not app-guarded → double-close** | `ConsumerGroup.Close()` is idempotent; single Consume lifecycle rarely double-closes. | App-managed `kgo.Client.Close()` can be called twice (explicit `Close()` + goroutine defer). | #720 (`d2a509847`): `closeMu sync.Mutex` + `closed bool` + a single `closeClient()` helper; both paths call it. | **MED** (merkle's `Consumer.Stop()`→`group.Close()` and `Producer.Close()` are unguarded against double-close today) |
| **G10** | **Drop the `go-metrics` `UseNilMetrics` init hack** | Sarama needed a global `init()` setting `metrics.UseNilMetrics = true` to dodge a go-metrics memory leak (sarama #1321). | franz-go has no go-metrics dependency. | #611 (`e3bfc0bab`): no hack needed; delete it if present. (merkle-service does not appear to set this — verify and drop if found.) | **LOW** |
| **G11** | **`Key`/`Value` are raw `[]byte`, no encoder interface** | `sarama.StringEncoder` / `sarama.ByteEncoder` wrappers. | `kgo.Record{Topic, Key, Value}` takes plain `[]byte`. | #611: build `&kgo.Record{Topic, Key: keyBytes, Value: valueBytes}`; pass `[]byte` directly (this is also what keeps G2 fixed). | **HIGH** (every produce call site) |

---

## 3. Target architecture

### 3.1 Producer (synchronous, mirrors current `SyncProducer`)

Keep the `Producer` struct and its `Publish` / `PublishWithHashKey` / `Close` surface. Swap the guts to a single `*kgo.Client` using `ProduceSync`.

```go
package kafka

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"math"
	"sync"
	"time"

	"github.com/twmb/franz-go/pkg/kgo"

	"github.com/bsv-blockchain/merkle-service/internal/metrics"
)

const defaultBatchMaxBytes int32 = 1_048_576 // 1 MiB — broker max.message.bytes default (teranode #660)

// clampBatchMaxBytes ports teranode #660 verbatim: legacy flush-style values
// (<= 1 MiB) are treated as "use the safe default", NOT as a hard cap, so a
// small config never produces MESSAGE_TOO_LARGE. Only an explicit value above
// 1 MiB is honoured as a real batch-size override.
func clampBatchMaxBytes(requested int) int32 {
	if requested <= int(defaultBatchMaxBytes) {
		return defaultBatchMaxBytes
	}
	if requested > math.MaxInt32 {
		return math.MaxInt32
	}
	return int32(requested)
}

type Producer struct {
	client  *kgo.Client
	topic   string
	logger  *slog.Logger
	closeMu sync.Mutex // teranode #720 idempotent close
	closed  bool
}

func NewProducer(brokers []string, topic string, logger *slog.Logger) (*Producer, error) {
	opts := []kgo.Opt{
		kgo.SeedBrokers(brokers...),
		kgo.DefaultProduceTopic(topic),
		// G1: hard cap, fed through the 1 MiB-default clamp. merkle's old
		// MaxMessageBytes was 10 MiB (an intentional cap-raise) -> honoured as a
		// real override because it exceeds 1 MiB.
		kgo.ProducerBatchMaxBytes(clampBatchMaxBytes(10 * 1024 * 1024)),
		// WaitForAll -> AllISRAcks (strongest consistency; preserves merkle's
		// RequiredAcks=WaitForAll semantics).
		kgo.RequiredAcks(kgo.AllISRAcks()),
		// merkle uses sarama.NewHashPartitioner. franz's default partitioner
		// already hashes a non-nil key and round-robins a nil key — exactly the
		// behaviour we want (see G2). Do NOT use ManualPartitioner here: teranode
		// uses it because it pre-computes partitions; merkle relies on key-hash
		// partitioning, so leave the default partitioner in place.
		kgo.RecordRetries(3),     // sarama Producer.Retry.Max = 3
		kgo.ProducerLinger(0),    // synchronous semantics: no added linger
	}
	// NOTE: idempotent writes stay ENABLED (franz default) because AllISRAcks +
	// retries can otherwise duplicate. teranode disables idempotency for
	// throughput; merkle prefers correctness. Only call kgo.DisableIdempotentWrite()
	// if a broker rejects idempotent producers.

	client, err := kgo.NewClient(opts...)
	if err != nil {
		return nil, fmt.Errorf("failed to create producer for topic %s: %w", topic, err)
	}
	return &Producer{client: client, topic: topic, logger: logger}, nil
}

func (p *Producer) Publish(key string, value []byte) error {
	rec := &kgo.Record{
		Topic: p.topic,
		Value: value, // G11: raw []byte, no encoder
	}
	// G2: only set Key when non-empty; never assign a typed/empty key.
	if key != "" {
		rec.Key = []byte(key)
	}

	start := time.Now()
	res := p.client.ProduceSync(context.Background(), rec)
	err := res.FirstErr()
	metrics.ObserveKafkaProduce(p.topic, len(value), time.Since(start), err)
	if err != nil {
		return fmt.Errorf("failed to publish to %s: %w", p.topic, err)
	}

	r, _ := res.First()
	p.logger.Debug("published message", "topic", p.topic, "partition", r.Partition, "offset", r.Offset, "key", key)
	return nil
}

// PublishWithHashKey is unchanged: it still SHA256-hashes the key to a hex
// string and calls Publish. The key-hashing -> partition mapping is preserved
// because franz hashes the (non-nil) key bytes.
func (p *Producer) PublishWithHashKey(key string, value []byte) error {
	hash := sha256.Sum256([]byte(key))
	return p.Publish(fmt.Sprintf("%x", hash[:8]), value)
}

func (p *Producer) Close() error {
	p.closeMu.Lock() // G9
	defer p.closeMu.Unlock()
	if p.closed {
		return nil
	}
	p.closed = true
	// Flush buffered records on a detached, bounded context (teranode #683 drain
	// pattern) before closing connections.
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := p.client.Flush(ctx); err != nil {
		p.logger.Warn("producer flush on close", "topic", p.topic, "error", err)
	}
	p.client.Close()
	return nil
}
```

> **Note on `HashPartitionKey` / `Int32FromHash`:** these helpers in `producer.go` stay as-is. franz hashes the key bytes itself, so `Int32FromHash` is only needed if a call site ever switches to `ManualPartitioner` (it should not).

### 3.2 Consumer (manual-commit-on-success, mirrors current F-030/F-031/F-053 semantics)

This is where the franz/Sarama gap is widest. The `consumerGroupHandler` (Setup/Cleanup/ConsumeClaim) disappears entirely, replaced by a `PollFetches` loop. The crash-guard stays but must only fire on a *true* unexpected exit, never on franz's recovery-close (G3/G4).

```go
// MessageHandler now takes a merkle-owned *Message instead of *sarama.ConsumerMessage.
// This removes the sarama type from the public contract (the only sarama leak
// into business code). Define a tiny struct mirroring the fields handlers use.
type Message struct {
	Topic     string
	Partition int32
	Offset    int64
	Key       []byte
	Value     []byte
	Timestamp time.Time
}

type MessageHandler func(ctx context.Context, msg *Message) error

type Consumer struct {
	client   *kgo.Client
	groupID  string
	topics   []string
	handler  MessageHandler
	logger   *slog.Logger
	ready    chan struct{}

	cancelMu sync.Mutex          // G4: guard the cancel func
	cancel   context.CancelFunc
	wg       sync.WaitGroup

	closeMu sync.Mutex           // G9
	closed  bool
}

func NewConsumer(brokers []string, groupID string, topics []string, handler MessageHandler, logger *slog.Logger) (*Consumer, error) {
	opts := []kgo.Opt{
		kgo.SeedBrokers(brokers...),
		kgo.ConsumerGroup(groupID),
		kgo.ConsumeTopics(topics...),
		// F-031: start fresh groups at the OLDEST offset (sarama.OffsetOldest).
		kgo.ConsumeResetOffset(kgo.NewOffset().AtStart()),
		// G7: manual commit so we only advance offsets on handler success (F-030).
		kgo.DisableAutoCommit(),
		// G5: explicit timeout defaults sarama gave for free (session >= 3x heartbeat).
		kgo.SessionTimeout(10 * time.Second),
		kgo.HeartbeatInterval(3 * time.Second),
		kgo.RebalanceTimeout(60 * time.Second),
		kgo.FetchMaxWait(100 * time.Millisecond),
		// merkle used NewBalanceStrategyRoundRobin; franz's default group balancer
		// is cooperative-sticky. Set kgo.Balancers(kgo.RoundRobinBalancer()) only
		// if exact round-robin parity is required for compatibility with an
		// existing running group (mixed-balancer groups fail to join).
	}
	client, err := kgo.NewClient(opts...)
	if err != nil {
		return nil, fmt.Errorf("failed to create consumer group %s: %w", groupID, err)
	}
	return &Consumer{client: client, groupID: groupID, topics: topics, handler: handler, logger: logger, ready: make(chan struct{})}, nil
}

func (c *Consumer) Start(parent context.Context) error {
	// G4: create the cancel context in Start (not inside the goroutine) under lock.
	ctx, cancel := context.WithCancel(parent)
	c.cancelMu.Lock()
	c.cancel = cancel
	c.cancelMu.Unlock()

	c.wg.Add(1)
	go func() {
		defer c.wg.Done()
		// F-053 crash-guard PRESERVED, but only fires on genuine unexpected exit.
		defer func() {
			if ctx.Err() == nil {
				c.logger.Error("consumer goroutine exited without context cancel; crashing process so k8s restarts the pod")
				exitFunc(1)
			}
		}()

		var uncommitted []*kgo.Record
		commitTicker := time.NewTicker(time.Minute)
		defer commitTicker.Stop()
		signalReady := func() { /* close c.ready once, after first successful poll */ }

		for {
			if ctx.Err() != nil {
				c.commit(ctx, uncommitted) // final commit-on-success of drained records
				return
			}
			fetches := c.client.PollFetches(ctx)

			// G3/G4: client-closed and context-cancel are RECOVERY/shutdown, not
			// a fatal goroutine exit. Never let these reach the crash-guard.
			if fetches.IsClientClosed() {
				return // ctx is cancelled in our shutdown path; guard sees ctx.Err()!=nil
			}
			if errs := fetches.Errors(); len(errs) > 0 {
				fatal := false
				for _, e := range errs {
					if errors.Is(e.Err, context.Canceled) || errors.Is(e.Err, kgo.ErrClientClosed) {
						fatal = true
						break
					}
					metrics.IncKafkaConsumerError(e.Topic, metrics.KafkaErrorBroker)
					c.logger.Error("franz fetch error", "topic", e.Topic, "error", e.Err)
				}
				if fatal {
					return
				}
				continue // let the client self-heal (G4)
			}

			signalReady() // first healthy poll == "ready"

			// F-030: commit ONLY records whose handler returned nil. On the first
			// handler error, stop processing this partition's remaining records so
			// a later success can't advance past the failed offset.
			abort := false
			fetches.EachPartition(func(p kgo.FetchTopicPartition) {
				if abort {
					return
				}
				for _, rec := range p.Records {
					m := toMessage(rec)
					metrics.ObserveKafkaConsumed(m.Topic, c.groupID, len(m.Value))
					gauge := metrics.KafkaInFlight(m.Topic, c.groupID)
					gauge.Inc()
					start := time.Now()
					err := c.handler(ctx, m)
					gauge.Dec()
					outcome := metrics.OutcomeSuccess
					if err != nil {
						outcome = metrics.OutcomeHandlerError
					}
					metrics.ObserveKafkaHandle(m.Topic, outcome, time.Since(start))
					if err != nil {
						metrics.IncKafkaConsumerError(m.Topic, metrics.KafkaErrorHandler)
						c.logger.Error("failed to handle message, leaving offset uncommitted",
							"topic", m.Topic, "partition", m.Partition, "offset", m.Offset, "error", err)
						abort = true // stop this poll; do not track this or later records
						return
					}
					uncommitted = append(uncommitted, rec)
				}
			})

			select {
			case <-commitTicker.C:
				c.commit(ctx, uncommitted)
				uncommitted = uncommitted[:0]
			default:
			}
		}
	}()

	<-c.ready
	c.logger.Info("consumer ready", "topics", c.topics)
	return nil
}

// commit ports teranode kafka_consumer.go ~554-575: build EpochOffset{Epoch,
// Offset+1} per (topic,partition) and CommitOffsetsSync. Sync commit on the
// commit path guarantees the offset is durable before we forget the records.
func (c *Consumer) commit(ctx context.Context, recs []*kgo.Record) {
	if len(recs) == 0 {
		return
	}
	offsets := make(map[string]map[int32]kgo.EpochOffset)
	for _, r := range recs {
		if offsets[r.Topic] == nil {
			offsets[r.Topic] = make(map[int32]kgo.EpochOffset)
		}
		// last-write-wins per partition: records are in offset order, so the
		// final record's Offset+1 is the correct commit point.
		offsets[r.Topic][r.Partition] = kgo.EpochOffset{Epoch: r.LeaderEpoch, Offset: r.Offset + 1}
	}
	if err := c.client.CommitOffsetsSync(ctx, offsets, nil); err != nil {
		c.logger.Error("offset commit failed", "error", err)
	}
}

func (c *Consumer) Stop() error {
	c.cancelMu.Lock() // G4: capture+nil under lock
	cancel := c.cancel
	c.cancel = nil
	c.cancelMu.Unlock()
	if cancel != nil {
		cancel()
	}
	c.wg.Wait()
	return c.closeClient()
}

func (c *Consumer) closeClient() error { // G9
	c.closeMu.Lock()
	defer c.closeMu.Unlock()
	if c.closed {
		return nil
	}
	c.closed = true
	c.client.Close()
	return nil
}
```

> **F-030 fidelity note:** Sarama re-delivered from the *exact* uncommitted offset on the next session. With franz, leaving an offset uncommitted means redelivery from the last *committed* offset on the next poll/rebalance. To match Sarama's per-message stall semantics precisely, the franz loop must **not** advance (track) any record at or after the first failing record in a partition — exactly what the `abort` flag enforces above. This preserves the "deliberately stall the partition until the underlying problem resolves" contract (subtree-worker/block-processor) and the "republish-then-succeed" contract (subtree-fetcher/callback-delivery, which return nil and let the offset advance).

---

## 4. Call-site migration inventory

The two wrappers absorb almost all of the change; business call sites are touched only where they reference the `sarama.ConsumerMessage` type via `MessageHandler`.

### Producers

| File | Current sarama use | franz equivalent | Work required |
|------|--------------------|------------------|---------------|
| `internal/kafka/producer.go` | `NewSyncProducer`, `NewConfig`, `NewHashPartitioner`, `WaitForAll`, `MaxMessageBytes=10MiB`, `ProducerMessage`, `StringEncoder`, `ByteEncoder`, `SendMessage`, `Close` | `kgo.NewClient` (`SeedBrokers`, `DefaultProduceTopic`, `ProducerBatchMaxBytes(clamp)`, `AllISRAcks`, default partitioner, `RecordRetries(3)`), `kgo.Record`, `ProduceSync`+`FirstErr`, `Flush`+`Close` | Rewrite internals per §3.1. Apply **G1** clamp, **G2** nil-key rule, **G9** close guard, **G11** raw bytes. Public API unchanged. |
| `internal/block/processor.go` | `PublishWithHashKey(subtreeHash, payload)` → `subtree-work`; `Publish` BLOCK_PROCESSED callback | unchanged call site | None (uses wrapper). Verify partition spread after switch. |
| `internal/block/subtree_worker.go` | 3 producers: callback `PublishWithHashKey(msg.PartitionKey())`, retry `Publish`, dlq `Publish` | unchanged | None. |
| `internal/subtree/processor.go` | 3 producers: callback, retry, dlq via `PublishWithHashKey`/`Publish` | unchanged | None. |
| `internal/callback/delivery.go` | 2 producers: retry `PublishWithHashKey`, dlq (4-attempt durable loop) | unchanged | None. The 4-attempt DLQ loop already wraps `Publish`; keep it. |
| `internal/p2p/client.go` (per test) | subtree + block producers via wrapper | unchanged | None. |

### Consumers

| File | Current sarama use | franz equivalent | Work required |
|------|--------------------|------------------|---------------|
| `internal/kafka/consumer.go` | `NewConsumerGroup`, `NewConfig` (`OffsetOldest` F-031, `Return.Errors` F-053, RoundRobin), `ConsumerGroupHandler` (Setup/Cleanup/ConsumeClaim), `MarkMessage`, `group.Errors()`, `Consume`, `Close`, `ConsumerError`, `exitFunc(1)` guard | `kgo.NewClient` (`ConsumerGroup`, `ConsumeTopics`, `ConsumeResetOffset(AtStart)`, `DisableAutoCommit`, timeout defaults), `PollFetches`, `EachPartition`, `CommitOffsetsSync`, `IsClientClosed`/`kgo.ErrClientClosed`, `Close` | Rewrite per §3.2. Apply **G3/G4** (recovery-as-continue + cancel-mutex), **G5** timeout defaults, **G7** record-tracked commit, **G9** close guard. Preserve **F-030/F-031/F-053**. Change `MessageHandler` signature to `*Message`. |
| `internal/block/processor.go` (handler, line ~180) | `*sarama.ConsumerMessage` (`.Value`, `.Topic`, `.Partition`, `.Offset`) | `*kafka.Message` | Change handler signature; field access maps 1:1. |
| `internal/block/subtree_worker.go` (handler, ~224-319) | `*sarama.ConsumerMessage` (`.Value`) | `*kafka.Message` | Change signature; `.Value` access unchanged. |
| `internal/subtree/processor.go` (handler, ~260-396) | `*sarama.ConsumerMessage` (`.Value`) | `*kafka.Message` | Change signature. |
| `internal/callback/delivery.go` (handler, ~265-320) | `*sarama.ConsumerMessage` (`.Value`, `.Offset` for dedup key) | `*kafka.Message` | Change signature; keep `.Offset` for the dedup key. |

### Admin / topic creation

| File | Current sarama use | franz equivalent | Work required |
|------|--------------------|------------------|---------------|
| `internal/kafka/kafka_integration_test.go` | `NewClusterAdmin`, `TopicDetail`, `CreateTopic` | `kadm.NewClient(kgoClient)`, `kadm.Client.CreateTopic`, **G6** `kerr.TopicAlreadyExists` on err *and* resp, then `AlterTopicConfigs` | Rewrite topic setup; idempotent create. |

---

## 5. Test migration strategy

merkle-service uses **hand-rolled mocks** of sarama interfaces (no `sarama/mocks` library), split into producer mocks, consumer fakes, and `//go:build integration` real-broker tests. franz-go has **no test-friendly `SyncProducer`/`ConsumerGroup` interface to mock** — so the strategy mirrors teranode's #683/#720 conclusion: **mock at the wrapper seam for unit tests, use a real broker (testcontainers Redpanda) for the franz code path.**

### 5.1 Producer unit tests — re-seam, don't mock `kgo.Client`

Today `NewTestProducer(sp sarama.SyncProducer, …)` injects a mock implementing the 10-method `sarama.SyncProducer` interface (`mockSyncProducer`, `failingSyncProducer`, `failNext` counters in `processor_test.go`, `handle_message_test.go`, `delivery_test.go`, `subtree/processor_test.go`, `p2p/client_test.go`).

**Approach:** introduce a tiny internal `publisher` interface and make `Producer` embed it, so tests inject a recorder/spy instead of a `kgo.Client`:

```go
// internal/kafka/producer.go
type publisher interface {
	publish(key string, value []byte) error
}
// real impl wraps kgo.Client.ProduceSync; Producer.Publish delegates to it.
```

- `NewTestProducer` keeps its role (the seam) but accepts the `publisher` spy instead of `sarama.SyncProducer`.
- The spy records `(topic, key, value)` tuples. Crucially, `Value` is already `[]byte` in franz — tests drop the `sarama.ByteEncoder.Encode()` call and compare bytes directly before `json.Unmarshal`.
- `failNext`/`failAt` failure-injection counters port verbatim onto the spy.
- Delete the 10-method transaction stubs (`BeginTxn`, `CommitTxn`, `IsTransactional`, `TxnStatus`, …) — franz needs none of them.

### 5.2 Consumer unit tests — replace Claim/Session fakes with `*Message` slices

`consumer_test.go` uses `fakeClaim` (a `Messages()` channel) and `fakeSession` (records `MarkMessage` calls) to assert F-030 (mark only succeed-before-error), F-031 (`OffsetOldest`), F-053 (`Return.Errors=true`), and clean ctx-cancel exit.

**Approach:** extract the per-record processing logic (handler call + abort-on-error + record-tracking) into a pure helper that takes a `[]*kafka.Message` (or `[]*kgo.Record`) and returns the slice of records to commit:

```go
func processRecords(ctx, handler, recs) (committable []*kgo.Record, abortErr error)
```

- This makes the F-030 invariant unit-testable **without a broker and without `PollFetches`**: feed records, assert only succeed-before-error records are returned as committable.
- F-031 / config invariants: assert on the `[]kgo.Opt` builder (extract a `consumerOpts(...)` func, mirroring teranode's pattern of an extracted `newConsumerConfig`) — verify `ConsumeResetOffset(AtStart)` and `DisableAutoCommit` are present.
- F-053: assert that the crash-guard still calls `exitFunc(1)` when the goroutine exits with `ctx.Err()==nil`, **and add a regression test that it does NOT fire on `IsClientClosed()` during a live context** (the G3 trap).
- Clean ctx-cancel exit: assert final `commit` is called and the goroutine returns.

### 5.3 Integration + perf tests — adopt teranode's testcontainers harness (#720)

`kafka_integration_test.go` (`//go:build integration`, real broker at `localhost:9092`) round-trips produce/consume, ordering, offset management.

**Approach (from #720, `d2a509847`):**
- Port the `kafkatest`-style helper: `MustStartEnv` spins a single-node `redpandadata/redpanda:v24.3.1` testcontainer with a `t.Cleanup` teardown; `TopicURL` builds the broker address. Use a shared container via `sync.Once` for the suite (the `kafka_bench_test.go` pattern).
- Gate perf paths behind `testing.Short()` so `go test -short` skips them.
- Add a **`flush_bytes`/batch-size regression test** (teranode's `flush_bytes_regression_test.go`) producing a normal-sized record with the 10 MiB cap to prove **G1** never regresses to `MESSAGE_TOO_LARGE`.
- Use the real broker (not the in-memory fake) for any test that must exercise franz batching, partitioning, and rebalance — the in-memory path does not exercise the real franz code (#720 rationale).

### 5.4 Handler-signature ripple

Every handler test (`handle_message_test.go`, `subtree_worker_handle_message_test.go`, `delivery_handle_message_test.go`, `processor_test.go`) constructs a `*sarama.ConsumerMessage`. Replace with `&kafka.Message{Topic, Partition, Offset, Key, Value, Timestamp}`. Field names map 1:1, so this is a mechanical rename plus dropping the encoder wrappers.

---

## 6. Phased execution plan

Each phase is independently compilable, testable, and reviewable. The **"pre-empts"** column maps each teranode fix-up PR to the phase where merkle-service must apply the fix up-front rather than rediscover the bug.

| Phase | Work | Independently testable? | Pre-empts (teranode PR → gotcha) |
|-------|------|--------------------------|----------------------------------|
| **P0 — Dependency & scaffolding** | Promote `franz-go` from indirect to direct in `go.mod`; add `kadm`, `kerr`. Add the `internal/kafka/kafkatest` testcontainers harness (Redpanda, `MustStartEnv`, `TopicURL`, `sync.Once`, `-short` gating). Keep sarama in place. | `go build ./...` + harness smoke test. | #720 → harness/perf conventions (G9 test infra) |
| **P1 — Producer migration** | Rewrite `producer.go` internals to `kgo.Client`/`ProduceSync` per §3.1. Keep `Producer`/`Publish`/`PublishWithHashKey`/`Close` API. Re-seam `NewTestProducer` to a `publisher` spy. Port producer unit tests + `flush_bytes` regression test. | Unit tests (spy) + integration round-trip on the harness. | #611 → raw-bytes producer (G11); #527 → nil-key (G2); #660 → 1 MiB clamp (G1); #633 → topic-create typed errors if producer creates topics (G6); #683 → detached-ctx flush-on-close (G8 partial); #720 → idempotent `Close` (G9) |
| **P2 — Handler-type decoupling** | Introduce `kafka.Message`; change `MessageHandler` to `func(ctx, *kafka.Message) error`. Update the four handlers (`block/processor.go`, `block/subtree_worker.go`, `subtree/processor.go`, `callback/delivery.go`) and their tests to the new type. Consumer still sarama internally (adapt `ConsumeClaim` to build `*kafka.Message` from `*sarama.ConsumerMessage`). | Full unit suite compiles & passes with sarama still underneath — isolates the type change from the franz consumer rewrite. | (none new; de-risks P3) |
| **P3 — Consumer migration** | Rewrite `consumer.go` to `kgo.Client`+`PollFetches`+`CommitOffsetsSync` per §3.2. Apply timeout defaults, manual-commit-on-success, recovery-as-continue, cancel-mutex, idempotent close. Preserve F-030/F-031/F-053. Replace Claim/Session fakes with the `processRecords` pure-helper tests + G3 crash-guard regression. | Unit tests (pure helper + opt builder + crash-guard) + integration consume/redelivery/ordering on the harness. | #636 → `IsClientClosed`-as-continue (G3); #638 → no watchdog + cancel-func race hardening (G4); #633 → consumer timeout defaults (G5); #660-style commit semantics (G7); #720 → idempotent `Close` (G9) |
| **P4 — Admin / topic creation** | Migrate `kafka_integration_test.go` topic setup to `kadm.Client`; handle `kerr.TopicAlreadyExists` on err+resp, `AlterTopicConfigs` for retention. | Integration test creates/recreates topics idempotently. | #633 → typed topic-exists + AlterTopicConfigs (G6) |
| **P5 — Delete sarama** | Remove `github.com/IBM/sarama` import everywhere; `go mod tidy`; delete the `go-metrics UseNilMetrics` init if present; grep for any residual `sarama.` symbol. | `go build ./...`, `grep -r 'IBM/sarama'` returns nothing, full unit suite green. | #611 → drop `UseNilMetrics` hack (G10) |
| **P6 — End-to-end verification** | Run `make test-e2e-postgres`, `internal/e2e`, and `test/scale` (~92k txids/sec). Compare partition distribution, redelivery on induced handler error, rebalance under replica scale-up/down, and at-least-once after broker bounce. | See §7 verification matrix. | All — production validation |

> **Ordering rationale:** P2 (type decoupling) is deliberately *between* producer and consumer migration so the disruptive `MessageHandler` signature change lands while the consumer still runs on battle-tested sarama — the franz consumer rewrite (P3) then changes only the wrapper internals, not the business handlers. P5 (delete sarama) is gated last so any rollback before then is a one-line dependency revert.

---

## 7. Risks & verification

### 7.1 At-least-once delivery (F-030/F-031)
- **Risk:** franz commits from the last *committed* offset, not Sarama's exact uncommitted offset. A bug in the `abort`/record-tracking logic could either drop work (commit past a failure) or replay excessively.
- **Mitigation:** `DisableAutoCommit` + commit-only-succeed-before-error + `CommitOffsetsSync` on the commit tick and on shutdown. Track records strictly in poll order; never track a record at/after the first failure in a partition.
- **Verify:** the `processRecords` pure-helper unit test (P3) asserts only succeed-before-error records are committable. Integration test: inject a handler error mid-partition, restart the consumer, assert the failed offset and everything after is redelivered.

### 7.2 Ordering & partitioning (G2)
- **Risk:** franz's default partitioner vs. sarama's `NewHashPartitioner` could distribute differently; a typed-nil/empty key would skew to one partition.
- **Mitigation:** keep `PublishWithHashKey` (SHA256→hex key, always non-empty) so franz hashes a stable key; only set `rec.Key` when non-empty (G2).
- **Verify:** integration test publishing N messages across distinct hash keys and asserting spread across all partitions (no partition-0 hot spot); assert same key → same partition across runs.

### 7.3 Rebalance behaviour (G3/G4/G5)
- **Risk:** franz's default cooperative-sticky balancer differs from sarama round-robin; a running group cannot mix balancers. Recovery-as-exit would crash-loop.
- **Mitigation:** set `kgo.Balancers(kgo.RoundRobinBalancer())` *only if* joining an existing round-robin group; otherwise let franz self-heal. Treat `IsClientClosed`/`kgo.ErrClientClosed`/`context.Canceled` as continue/shutdown, never as the F-053 crash trigger.
- **Verify:** integration test scales consumer replicas up and down mid-consumption; assert no crash-guard fire (`exitFunc` not called), no duplicate-beyond-at-least-once, group rejoins. Add the explicit G3 regression unit test (crash-guard must NOT fire on `IsClientClosed` during a live ctx).

### 7.4 Config translation table (`sarama.Config` → `kgo.Opt`)

| sarama setting (current value) | kgo equivalent | Notes / gotcha |
|--------------------------------|----------------|----------------|
| `Producer.RequiredAcks = WaitForAll` | `kgo.RequiredAcks(kgo.AllISRAcks())` | strongest consistency, matches WaitForAll |
| `Producer.Partitioner = NewHashPartitioner` | franz **default** partitioner (key-hash) | do **not** use `ManualPartitioner` (that's teranode's pre-computed-partition path); **G2** |
| `Producer.Retry.Max = 3` | `kgo.RecordRetries(3)` | sync producer retries |
| `Producer.Return.Successes = true` | n/a | `ProduceSync` returns results directly |
| `Producer.MaxMessageBytes = 10 MiB` | `kgo.ProducerBatchMaxBytes(clampBatchMaxBytes(10*1024*1024))` | **G1** — 10 MiB > 1 MiB default so honoured as a real cap; broker `message.max.bytes` must be ≥ this |
| (sync, no linger) | `kgo.ProducerLinger(0)` | preserve synchronous semantics |
| (idempotency: sarama on by default with WaitForAll) | franz idempotent writes **on** by default — keep | do not blindly copy teranode's `DisableIdempotentWrite()` (throughput choice); correctness preferred here (**G8** context) |
| `Consumer.Offsets.Initial = OffsetOldest` (F-031) | `kgo.ConsumeResetOffset(kgo.NewOffset().AtStart())` | preserve F-031 |
| `Consumer.Return.Errors = true` (F-053) | inherent — `fetches.Errors()` always returns errors | drain via the poll loop; keep crash-guard |
| `Consumer.Group.Rebalance.GroupStrategies = RoundRobin` | franz default cooperative-sticky; `kgo.Balancers(kgo.RoundRobinBalancer())` only if needed | **G3/G4** — mixed balancers can't co-join a group |
| (sarama implicit) session timeout | `kgo.SessionTimeout(10*time.Second)` | **G5** — no franz default on direct construction |
| (sarama implicit) heartbeat | `kgo.HeartbeatInterval(3*time.Second)` | **G5** — session ≥ 3× heartbeat |
| (sarama implicit) rebalance timeout | `kgo.RebalanceTimeout(60*time.Second)` | **G5** |
| (sarama implicit) max processing / fetch wait | `kgo.FetchMaxWait(100*time.Millisecond)` | **G5** |
| manual `session.MarkMessage` | `kgo.DisableAutoCommit()` + `CommitOffsetsSync(EpochOffset{LeaderEpoch, Offset+1})` | **G7** |
| `NewClusterAdmin` / `CreateTopic` | `kadm.Client.CreateTopic` + `errors.Is(err, kerr.TopicAlreadyExists)` + `AlterTopicConfigs` | **G6** |

### 7.5 Verification matrix
- **Unit:** `go test ./internal/kafka/... ./internal/block/... ./internal/subtree/... ./internal/callback/...` — F-030 (commit-on-success), F-031 (offset-reset opt), F-053 (crash-guard fires on true exit, NOT on `IsClientClosed`), nil-key partitioning, `clampBatchMaxBytes`.
- **Integration (`-tags integration` / Redpanda harness):** round-trip produce/consume, ordering within partition, redelivery on handler error, idempotent topic create, `MESSAGE_TOO_LARGE` regression, partition spread.
- **End-to-end:** `make test-e2e-postgres` and `internal/e2e` for the full P2P→Kafka→stages pipeline.
- **Scale:** `test/scale` at ~92k txids/sec — confirm no throughput regression, balanced partition load, no zombie consumer (broker reports the group as Stable, not Empty), no `exitFunc` crash-loop, and at-least-once preserved across an induced broker bounce.

---

### Appendix: teranode references
- Producer/consumer franz patterns: `teranode/util/kafka/` (`kafka_consumer.go ~289-575`, producer opts builder, `clampBatchMaxBytes`).
- PRs: #611 `e3bfc0bab` (initial franz), #633 `4cd1ee053` (config compat / interim clamp / topic-exists), #636 `17b52e54d` (consumer recovery), #638 `3293d3c04` (delete watchdog / cancel-race), #660 `4c5ad1c190` (1 MiB batch default), #527 `59a55d7ef` (typed-nil key), #683 `9ae239e94` (async shutdown race / detached-ctx drain), #720 `d2a509847` (idempotent close / testcontainers harness).
