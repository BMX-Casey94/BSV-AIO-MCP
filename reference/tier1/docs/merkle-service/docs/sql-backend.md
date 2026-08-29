# SQL Store Backend

The merkle-service supports running its persistent stores against a SQL
database as an alternative to Aerospike. Aerospike remains the default and the
recommended production backend; SQL is for deployments where running Aerospike
is not an option.

## Selecting the backend

Set `store.backend` in `config.yaml` (or the `STORE_BACKEND` env var):

```yaml
store:
  backend: sql           # aerospike (default) | sql
  sql:
    driver: postgres     # postgres | sqlite
    dsn: "postgres://user:pass@host:5432/merkle?sslmode=disable"
    sweeperInterval: 60s
    maxOpenConns: 25
    maxIdleConns: 5
```

When `store.backend: sql` the `aerospike:` block is ignored. When
`store.backend: aerospike` (or unset) the `store.sql` block is ignored.

## Supported drivers

| Driver     | DSN example                                                       |
|------------|-------------------------------------------------------------------|
| `postgres` | `postgres://user:pass@host:5432/merkle?sslmode=disable`           |
| `sqlite`   | `file:/var/lib/merkle.db` or `:memory:` for tests                 |

PostgreSQL is the production target. SQLite is primarily for tests and
lightweight single-node deployments (no network exposure, no multi-writer).

## Migrations

Schema migrations live under `internal/store/sql/migrations/`, are embedded
into the binary via `go:embed`, and are applied automatically on startup.
A `schema_migrations` table tracks applied versions; concurrent service
start-ups are serialized with `pg_advisory_lock` on PostgreSQL and
`BEGIN IMMEDIATE` on SQLite.

Because migrations are idempotent and serialized, rolling restarts are safe:
new binaries that add a migration will apply it on their first start, and
older binaries running against the new schema will continue to work provided
the migration was additive.

## TTL expiry

Aerospike's record TTL (via `nsup-period`) is emulated by an `expires_at`
column on every TTL-bearing table plus a per-process sweeper goroutine that
runs `DELETE … WHERE expires_at < now()` in bounded-size batches every
`store.sql.sweeperInterval`.

Tune the interval based on workload:

- **Heavy short-TTL traffic** (callback_dedup with second-scale TTLs): 15–30s.
- **Default**: 60s is fine.
- **Large tables where deletes are expensive**: 2–5m.

The sweeper logs at debug level — set `logLevel: debug` to see row counts.

## Operational notes

- Connection pool: tune `maxOpenConns` / `maxIdleConns` to match your DB's
  `max_connections` budget across all running service instances.
- Backups: ordinary PostgreSQL `pg_dump` / PITR works. No Aerospike-specific
  considerations.
- Migration downgrade: not supported automatically. If you need to revert a
  schema change, restore from backup and run the older binary.

## Running the PostgreSQL e2e suite

Runs every store against a real PostgreSQL 16 container via testcontainers.
Requires Docker on the host.

```bash
make test-e2e-postgres
```

If your environment lacks a `docker0` bridge (some rootless / hardened
setups) the testcontainers reaper will fail to start; disable it:

```bash
TESTCONTAINERS_RYUK_DISABLED=true make test-e2e-postgres
```

CI runs this target automatically on every PR.
