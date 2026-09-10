# Patent prior-art concept map

Navigation layer over the 272 Wright-as-named-inventor patent families pinned in this corpus (96 with full specification text, 176 catalogue-only). Priority dates span 2011-10-28 to 2024-08-14. Each family has a summary card at `patent://family/<KEY>`; families with pinned full text also resolve `patent://family/<KEY>/full`.

Licensing posture (verified 2026-09-10): no verifiable BSV licensing programme covering any family was found; every card carries the standing no-coverage-found advisory. This map routes to ideas, not to licence grants. This is not legal advice.

## Theme index

- **key-management** (40) — Keys, wallets, threshold signing, seed and secret handling
- **digital-signatures** (53) — Signature schemes, signing protocols, verification of signatures
- **cryptography-primitives** (41) — Hashes, elliptic-curve constructions, proof systems, obfuscation
- **privacy** (19) — Confidentiality, anonymity, zero-knowledge and data-hiding techniques
- **payments** (43) — Payments, transfers, micropayments, fee and channel mechanics
- **tokens** (30) — Tokenisation, digital assets, exchanges and asset transfer
- **smart-contracts** (38) — Contract execution, logic gates, compilation to script, automation
- **data-integrity** (32) — Integrity proofs, attestation, tamper evidence, Merkle structures
- **storage** (33) — Registries, records, distributed storage and retrieval
- **networking** (32) — Node communication, propagation, peer and overlay networking
- **messaging** (12) — Messaging and communication protocols over blockchain transactions
- **identity** (13) — Identity, authentication and authorisation of parties
- **certificates-credentials** (8) — Certificates, credentials and attestation chains
- **access-control** (40) — Access control for devices, services and data
- **iot** (13) — Internet-of-things device control and telemetry
- **mining-consensus** (14) — Mining, consensus, proof-of-work, puzzles and rewards
- **oracles** (6) — External data feeds and oracle mechanisms
- **voting** (5) — Voting, ballots and governance mechanisms
- **gaming** (4) — Games, lotteries and chance-based applications
- **genomics** (1) — Genomic and biometric data applications
- **physically-unclonable-functions** (5) — PUFs and hardware-rooted identity
- **miscellaneous** (17) — Families not matched by the theme rules

## key-management

- **WO2017145002** — Personal device security using elliptic curve cryptography for secret sharing (2016; full text pinned). An electronic device and a separate key device each hold an elliptic-curve master key pair (the embodiment names secp256k1).
- **WO2017145004** — Universal tokenisation system for blockchain-based cryptocurrencies (2016; full text pinned). An issuer creates a token by allocating a quantity of cryptocurrency and building a pay-to-script-hash (P2SH) transaction whose redeem script contains metadata in a public-key slot, plus the user’s and issuer’s public…
- **WO2017145007** — System and method for controlling asset-related actions via a blockchain (2016; full text pinned). An asset is associated with private keys (optionally derived as sub-keys from a controller via a shared generator value and a common secret) and with an off-chain computing agent.
- **WO2017145010** — Secure multiparty loss resistant storage and transfer of cryptographic keys for blockchain based systems in conjunction with a wallet management system (2016; full text pinned). In the illustrative wallet set-up, a private key is split with Shamir’s secret sharing (example: 2-of-3).
- **WO2017145016** — Determining a common secret for the secure exchange of information and hierarchical, deterministic cryptographic keys (2016; full text pinned). Each node registers an elliptic-curve master key pair using a shared curve and generator (the text names secp256k1 as used by Bitcoin).
- **WO2017145021** — Method and system for efficient transfer of cryptocurrency associated with a payroll on a blockchain that leads to An Automated payroll method and system based on smart contracts (2016; full text pinned). On a transfer request, a generator value is formed from a string associated with the first node that identifies the second user or the purpose of the derived key (tax withheld, superannuation, mortgage, college fund,…
- **WO2017145048** — Cryptographic method and system for secure extraction of data from a blockchain (2016; full text pinned). Each element of an organisational structure is given a public/private key pair.
- **WO2017145049** — Consolidated blockchain-based data transfer control method and system (2016; full text pinned). Public addresses of entities are classified by identifiers of a first type arranged as a tree that links parent and child entities.
- **WO2017187397** — Operating system for blockchain iot devices (2016; full text pinned). A Blockchain IoT Device (BID) is a thin control component on (or talking to) a networked device that has an IP address and its own public–private key pair.
- **US12323516** — Computer-implemented system and method for time release encryption over a (2017; full text pinned). An agent generates an encryption key pair and a short successive-squaring time-lock puzzle on the private key.
- **WO2019034951** — Threshold digital signature method and system (2017; full text pinned). Each node independently chooses a polynomial of degree k−1 with its secret as the free term and privately sends evaluations to the others (joint random secret sharing).
- **WO2019034986** — Computer-implemented method of generating a threshold vault (2017; full text pinned). Each node picks a degree-(k−1) polynomial with its secret as the free term and privately sends evaluations to the others, plus elliptic-curve point multiplications of those values (and optionally of coefficients) so…
- **WO2019038634** — Computer-implemented system and method for highly secure, high speed encryption and transmission of data (2017; full text pinned). Two nodes each hold an elliptic-curve master key pair.
- **EP3721582** — Blockchain-implemented security systems and methods for blinded outcome (2017; full text pinned). In an initialisation phase both parties generate n secrets and publish only elliptic-curve points (secret × G).
- **WO2019142075** — Computer implemented method and system for obtaining digitally signed data (2018; full text pinned). First participants hold second data (a message, its hash, or a blockchain transaction) that second participants must not see.
- **WO2019166916** — Computer implemented voting process and system (2018; full text pinned). Shares of a first common secret (in the embodiment, shares of a signed blockchain transaction, i.e.
- **EP3763098** — Methods and systems for controlling access to, and integrity of, resources on a (2018; full text pinned). Participating nodes hold shares of a collective key pair (p, P) and each also has a one-time nodal pair (q_i, Q_i).
- **EP3777013** — Computer implemented method and system for transferring access to a digital (2018; full text pinned). Four parties — client, exchange, trusted third party (TTP) and escrow — each hold an elliptic-curve key pair and a dealer-free share xn of a group private key x that never exists in one place.
- **WO2019220298** — Method and system for communicating a secret (2018; full text pinned). Sender and recipient agree a shared third secret C, for example a hash of block height concatenated with a master-key shared secret.
- **EP4557197** — Computer-implemented system and methods for off-chain exchange of transactions (2018; full text pinned). Participants are ordered at random and exchange keys: each makes two key pairs plus an ephemeral pair for encrypted neighbour channels, then builds a 2-of-2 address α with one neighbour and a Diffie–Hellman address β…
- **EP3824593** — Computer-implemented system and method for controlling processing steps of (2018; full text pinned). Nodes sit in cyclically-ordered sets; each set has an initiator, and the initiators themselves form a second cycle (a two-dimensional structure).
- **WO2020058806** — Computer implemented system and method for sharing a common secret (2018; full text pinned). Each node has an asymmetric key pair on a common (typically elliptic-curve) system.
- **WO2020084418** — Computer implemented system and method for distributing shares of digitally signed data (2018; full text pinned). A message hash is signed with ECDSA to produce (r, s).
- **WO2020157596** — Computer implemented system and method for determining or verifying location (2019; catalogue only).
- **WO2020229947** — Methods and devices for public key management using a blockchain (2019; full text pinned). A certificate authority authenticates a requester and creates a certification transaction signed by the CA: one output is a CA-controlled P2PKH (or a multi-sig that lets other parties revoke), and a second OP_RETURN (or…
- **WO2021053425** — Multi-criteria blockchain protocol (2019; catalogue only).
- **WO2021105795** — Provably fair games using a blockchain (2019; full text pinned). An oracle collects user seed data items, a sequence of public keys (from users and/or the oracle), and a list of game elements of the same length as the key sequence.
- **WO2021130557** — Mapping keys to a blockchain overlay network (2019; full text pinned). A first software module reads the overlay graph (nodes = data-storage transactions, edges = overlay links).
- **WO2021176283** — Method of generating a public key (2020; catalogue only).
- **WO2022037869** — Threshold signatures (2020; catalogue only).
- **WO2022042969** — Bio-extracted seed (2020; full text pinned). One or more biometric readings (for example a live fingerprint, optionally with liveness detection) are aligned to a reference frame and partitioned into sectors.
- **WO2022042970** — Bio-locked seed (2020; catalogue only).
- **WO2022238071** — Wallet application instantiation, keys derivation for signing blockchain transactions using a puf device (2021; catalogue only).
- **WO2023036528** — Generating shared cryptographic keys (2021; catalogue only).
- **WO2023036534** — Generating shared cryptographic keys (2021; catalogue only).
- **WO2023156105** — Blockchain transaction (2022; catalogue only).
- **WO2024052065** — Determining shared secrets using a blockchain (2022; catalogue only).
- **WO2024115139** — Computer implemented methods and systems for public key infrastructure and identity verification (2022; catalogue only).
- **WO2024175461** — Computer-implemented methods and systems (2023; catalogue only).
- **WO2025026717** — Shared secrets using blockchain (2023; catalogue only).

## digital-signatures

- **WO2017145016** — Determining a common secret for the secure exchange of information and hierarchical, deterministic cryptographic keys (2016; full text pinned). Each node registers an elliptic-curve master key pair using a shared curve and generator (the text names secp256k1 as used by Bitcoin).
- **WO2017145047** — Blockchain-implemented method for control and distribution of digital content (2016; full text pinned). The first user deposits cryptocurrency to a common P2SH address that needs both users’ signatures to spend.
- **WO2017178955** — Computer-implemented methods and systems for validating tokens for blockchain-based cryptocurrencies (2016; full text pinned). An issuer tokenises a quantity of cryptocurrency by locking it to a P2SH redeem script that embeds contract metadata (type, pointer, hash) plus user and issuer public keys.
- **WO2019034951** — Threshold digital signature method and system (2017; full text pinned). Each node independently chooses a polynomial of degree k−1 with its secret as the free term and privately sends evaluations to the others (joint random secret sharing).
- **WO2019034986** — Computer-implemented method of generating a threshold vault (2017; full text pinned). Each node picks a degree-(k−1) polynomial with its secret as the free term and privately sends evaluations to the others, plus elliptic-curve point multiplications of those values (and optionally of coefficients) so…
- **WO2019049022** — Improved time lock technique for securing a resource on a blockchain (2017; catalogue only).
- **WO2019142075** — Computer implemented method and system for obtaining digitally signed data (2018; full text pinned). First participants hold second data (a message, its hash, or a blockchain transaction) that second participants must not see.
- **WO2019166916** — Computer implemented voting process and system (2018; full text pinned). Shares of a first common secret (in the embodiment, shares of a signed blockchain transaction, i.e.
- **EP3777013** — Computer implemented method and system for transferring access to a digital (2018; full text pinned). Four parties — client, exchange, trusted third party (TTP) and escrow — each hold an elliptic-curve key pair and a dealer-free share xn of a group private key x that never exists in one place.
- **EP3777023** — Computer-implemented system and method suitable for increasing the security of (2018; full text pinned). A prover generates two secp256k1 key pairs and a compensation key ck = sk2 · sk1⁻¹ mod n, plus a non-interactive zero-knowledge proof (Fiat–Shamir transform of a sigma protocol) that ck really links the two public keys,…
- **WO2020079534** — Computer-implemented system and method including public key combination verification (2018; full text pinned). Point addition P3 = P1 + P2 is computed off-chain.
- **WO2020084418** — Computer implemented system and method for distributing shares of digitally signed data (2018; full text pinned). A message hash is signed with ECDSA to produce (r, s).
- **WO2020157596** — Computer implemented system and method for determining or verifying location (2019; catalogue only).
- **WO2020165669** — Computer implemented method and system for pseudo-random data generation (2019; catalogue only).
- **WO2020229947** — Methods and devices for public key management using a blockchain (2019; full text pinned). A certificate authority authenticates a requester and creates a certification transaction signed by the CA: one output is a CA-controlled P2PKH (or a multi-sig that lets other parties revoke), and a second OP_RETURN (or…
- **EP4184856** — Blockchain transaction comprising runnable code for hash-based verification (2019; full text pinned). An “r-puzzle” puts a reference r-part (or a hash of r, optionally concatenated with extra data d) into runnable code on a first transaction.
- **WO2021005474** — Computer-implemented system and method for facilitating transactions associated with a blockchain using a network identifier for participating entities (2019; catalogue only).
- **WO2021053427** — Cryptographically linked identities (2019; full text pinned). A recorded blockchain transaction holds a registered value that is a one-way function of a first secret value.
- **WO2021053425** — Multi-criteria blockchain protocol (2019; catalogue only).
- **WO2021059098** — Partitioning a request into transactions for a blockchain (2019; catalogue only).
- **WO2021079224** — Data structure for efficiently verifying data (2019; catalogue only).
- **WO2021084348** — Request and response protocol using blockchain transactions (2019; catalogue only).
- **WO2021105795** — Provably fair games using a blockchain (2019; full text pinned). An oracle collects user seed data items, a sequence of public keys (from users and/or the oracle), and a list of game elements of the same length as the key sequence.
- **WO2021165757** — Adapting connections of a layered network (2020; catalogue only).
- **WO2021165758** — Layered network (2020; catalogue only).
- **WO2021213920** — Method for implementing a digital coin system using a blockchain (2020; catalogue only).
- **WO2021229334** — Computer-implemented systems and methods for efficient and secure processing, access and transmission of data via a blockchain (2020; catalogue only).
- **WO2021249715** — Custom transaction scripts (2020; catalogue only).
- **WO2021249716** — Generating blockchain addresses (2020; catalogue only).
- **WO2021249717** — File verification system and method (2020; catalogue only).
- **WO2022002526** — Electronic document signatures (2020; catalogue only).
- **WO2022037868** — Digital signatures (2020; catalogue only).
- **WO2022037869** — Threshold signatures (2020; catalogue only).
- **WO2022069133** — Authentication system and method (2020; full text pinned). A PUF module (optionally an “expanded PUF”: a weak base PUF plus a hash transform that folds a secondary challenge with the primary response) produces a response from a challenge.
- **WO2022106211** — Node versioning (2020; catalogue only).
- **WO2022135809** — Transaction signature flags (2020; catalogue only).
- **WO2022135812** — Multisignature transactions (2020; catalogue only).
- **WO2022200193** — Improved methods & systems for signature verification in blockchain-implemented data applications (2021; catalogue only).
- **WO2022238065** — Multi-party blockchain address scheme (2021; catalogue only).
- **WO2022238066** — Multi-party blockchain address scheme (2021; catalogue only).
- **WO2022238067** — Multi-party blockchain address scheme (2021; catalogue only).
- **WO2022238071** — Wallet application instantiation, keys derivation for signing blockchain transactions using a puf device (2021; catalogue only).
- **WO2023041270** — Generating blockchain transactions (2021; catalogue only).
- **WO2023117274** — Signature-based atomic swap (2021; catalogue only).
- **WO2023186445** — Communication system, method and computer program (2022; catalogue only).
- **WO2023233029** — Methods and systems for distributing and validating alerts in a distributed computing system (2022; catalogue only).
- **WO2024110272** — Linking actor's events (2022; catalogue only).
- **WO2024175461** — Computer-implemented methods and systems (2023; catalogue only).
- **WO2024194058** — Digital signature algorithm for verification of redacted data (2023; catalogue only).
- **WO2024223213** — Blockchain synchronisation protocol (2023; catalogue only).
- **WO2024256138** — Versioned transactions (2023; catalogue only).
- **WO2025002709** — Multi-signature transactions (2023; catalogue only).
- **WO2025002735** — Blockchain transaction (2023; catalogue only).

## cryptography-primitives

- **WO2017145002** — Personal device security using elliptic curve cryptography for secret sharing (2016; full text pinned). An electronic device and a separate key device each hold an elliptic-curve master key pair (the embodiment names secp256k1).
- **WO2017145010** — Secure multiparty loss resistant storage and transfer of cryptographic keys for blockchain based systems in conjunction with a wallet management system (2016; full text pinned). In the illustrative wallet set-up, a private key is split with Shamir’s secret sharing (example: 2-of-3).
- **WO2017145016** — Determining a common secret for the secure exchange of information and hierarchical, deterministic cryptographic keys (2016; full text pinned). Each node registers an elliptic-curve master key pair using a shared curve and generator (the text names secp256k1 as used by Bitcoin).
- **WO2017145048** — Cryptographic method and system for secure extraction of data from a blockchain (2016; full text pinned). Each element of an organisational structure is given a public/private key pair.
- **WO2017187398** — Implementing logic gate functionality using a blockchain (2016; full text pinned). A first transaction locks coin with a locking script (optionally P2SH) that contains opcodes selected to implement a chosen gate’s truth table.
- **WO2017195161** — A method and system for verifying ownership of a digital asset using a distributed hash table and a peer-to-peer distributed ledger (2016; full text pinned). A first hash (H1) is taken of the software executable and a second hash (H2) of licence-related data plus the software; H2 is the DHT key and D1 plus H1 are the value, optionally with a location pointer.
- **EP3607516** — Method and system for secure data record distribution using a blockchain (2017; full text pinned). Input nodes each hold a share of a group private key e (unknown to any one of them) and obtain a group public key Q of the output nodes.
- **US12452033** — Blockchain for general computation (2017; full text pinned). A requester posts a task and a bounty.
- **US12323516** — Computer-implemented system and method for time release encryption over a (2017; full text pinned). An agent generates an encryption key pair and a short successive-squaring time-lock puzzle on the private key.
- **WO2019034951** — Threshold digital signature method and system (2017; full text pinned). Each node independently chooses a polynomial of degree k−1 with its secret as the free term and privately sends evaluations to the others (joint random secret sharing).
- **WO2019034986** — Computer-implemented method of generating a threshold vault (2017; full text pinned). Each node picks a degree-(k−1) polynomial with its secret as the free term and privately sends evaluations to the others, plus elliptic-curve point multiplications of those values (and optionally of coefficients) so…
- **WO2019038634** — Computer-implemented system and method for highly secure, high speed encryption and transmission of data (2017; full text pinned). Two nodes each hold an elliptic-curve master key pair.
- **EP3721582** — Blockchain-implemented security systems and methods for blinded outcome (2017; full text pinned). In an initialisation phase both parties generate n secrets and publish only elliptic-curve points (secret × G).
- **EP3769466** — Computer-implemented system and method for enabling zero-knowledge proof (2018; full text pinned). The prover represents the statement as an arithmetic circuit and commits to wire values with Pedersen commitments (individually or batched).
- **EP3776867** — Computer-implemented methods and systems relating to arithmetic coding for (2018; full text pinned). A file encoding the circuit is parsed into symbols: arithmetic operators and wire identifiers (inputs/outputs of gates).
- **EP3777023** — Computer-implemented system and method suitable for increasing the security of (2018; full text pinned). A prover generates two secp256k1 key pairs and a compensation key ck = sk2 · sk1⁻¹ mod n, plus a non-interactive zero-knowledge proof (Fiat–Shamir transform of a sigma protocol) that ck really links the two public keys,…
- **WO2019220298** — Method and system for communicating a secret (2018; full text pinned). Sender and recipient agree a shared third secret C, for example a hash of block height concatenated with a master-key shared secret.
- **EP3824610** — Accumulator-based protocol for the distribution of tasks across different (2018; full text pinned). A manager publishes trapdoor s and accumulation-tree parameters.
- **WO2020058806** — Computer implemented system and method for sharing a common secret (2018; full text pinned). Each node has an asymmetric key pair on a common (typically elliptic-curve) system.
- **WO2020079534** — Computer-implemented system and method including public key combination verification (2018; full text pinned). Point addition P3 = P1 + P2 is computed off-chain.
- **WO2020084418** — Computer implemented system and method for distributing shares of digitally signed data (2018; full text pinned). A message hash is signed with ECDSA to produce (r, s).
- **WO2020208491** — Computer implemented method and system for knowledge proof in blockchain transactions (2019; catalogue only).
- **WO2020212796** — Computer implemented method and system for encrypting data (2019; catalogue only).
- **WO2020229925** — Systems and methods for mining on a proof-of-work blockchain network (2019; full text pinned). A committee of three or more independent trusted nodes generates, for each new block cycle, a set of collision-resistant multiparty computational challenges and allocates a different challenge to each miner, optionally…
- **EP4184856** — Blockchain transaction comprising runnable code for hash-based verification (2019; full text pinned). An “r-puzzle” puts a reference r-part (or a hash of r, optionally concatenated with extra data d) into runnable code on a first transaction.
- **US20240243918** — Knowledge proof (2019; catalogue only).
- **WO2021053427** — Cryptographically linked identities (2019; full text pinned). A recorded blockchain transaction holds a registered value that is a one-way function of a first secret value.
- **WO2021130557** — Mapping keys to a blockchain overlay network (2019; full text pinned). A first software module reads the overlay graph (nodes = data-storage transactions, edges = overlay links).
- **WO2022042969** — Bio-extracted seed (2020; full text pinned). One or more biometric readings (for example a live fingerprint, optionally with liveness detection) are aligned to a reference frame and partitioned into sectors.
- **WO2022069132** — Physically unclonable functions (2020; full text pinned). In a set-up phase a party applies one or more challenges to a PUF module and stores, in a data store (a blockchain publication medium or a trusted third-party server), response data for each response — the raw response…
- **WO2022214255** — Blockchain-implemented hash function (2021; catalogue only).
- **WO2023036528** — Generating shared cryptographic keys (2021; catalogue only).
- **WO2023036534** — Generating shared cryptographic keys (2021; catalogue only).
- **WO2023174629** — Improved hill cipher encryption based on blockchain (2022; catalogue only).
- **WO2023174633** — Computer implemented methods & systems for improved security, encryption and communication of data (2022; catalogue only).
- **WO2023180000** — Set shuffling (2022; catalogue only).
- **WO2023227529** — Hash masks (2022; catalogue only).
- **WO2024088916** — Blockchain-enabled broadcast encryption (2022; catalogue only).
- **WO2025026718** — Proving data belongs to a set (2023; catalogue only).
- **WO2025026724** — Encoding data sets (2023; catalogue only).
- **WO2026037597** — Cryptographic proof of data knowledge (2024; catalogue only).

## privacy

- **WO2017145002** — Personal device security using elliptic curve cryptography for secret sharing (2016; full text pinned). An electronic device and a separate key device each hold an elliptic-curve master key pair (the embodiment names secp256k1).
- **WO2017145016** — Determining a common secret for the secure exchange of information and hierarchical, deterministic cryptographic keys (2016; full text pinned). Each node registers an elliptic-curve master key pair using a shared curve and generator (the text names secp256k1 as used by Bitcoin).
- **WO2017145047** — Blockchain-implemented method for control and distribution of digital content (2016; full text pinned). The first user deposits cryptocurrency to a common P2SH address that needs both users’ signatures to spend.
- **EP3607516** — Method and system for secure data record distribution using a blockchain (2017; full text pinned). Input nodes each hold a share of a group private key e (unknown to any one of them) and obtain a group public key Q of the output nodes.
- **EP4207024** — Computer-implemented system and method for performing transaction mixing on a (2017; full text pinned). The claimed Group Random Exchange of the second type randomises n users (n > 2) into a cycle and elects an initiator.
- **US12323516** — Computer-implemented system and method for time release encryption over a (2017; full text pinned). An agent generates an encryption key pair and a short successive-squaring time-lock puzzle on the private key.
- **WO2019038634** — Computer-implemented system and method for highly secure, high speed encryption and transmission of data (2017; full text pinned). Two nodes each hold an elliptic-curve master key pair.
- **EP3902201** — Methods and devices for increasing entropy of a blockchain using blinded (2017; full text pinned). Blinded Outcome Diversification runs among at least four participating nodes.
- **EP3721582** — Blockchain-implemented security systems and methods for blinded outcome (2017; full text pinned). In an initialisation phase both parties generate n secrets and publish only elliptic-curve points (secret × G).
- **WO2019142075** — Computer implemented method and system for obtaining digitally signed data (2018; full text pinned). First participants hold second data (a message, its hash, or a blockchain transaction) that second participants must not see.
- **US11694198** — System and method for transferring resources using a blockchain (2018; full text pinned). Group Random Exchange Late Reveal randomises participating nodes into a cycle and elects an initiator who holds a private ks (with public Ps).
- **EP4376361** — SYSTEMS AND METHODS FOR RANDOM DIFFERENTIAL RELAY AND NETWORK CODING (2018; full text pinned). A Diffusion Mixer Protocol has two stages.
- **EP3769466** — Computer-implemented system and method for enabling zero-knowledge proof (2018; full text pinned). The prover represents the statement as an arithmetic circuit and commits to wire values with Pedersen commitments (individually or batched).
- **WO2019220298** — Method and system for communicating a secret (2018; full text pinned). Sender and recipient agree a shared third secret C, for example a hash of block height concatenated with a master-key shared secret.
- **EP3797502** — Systems and methods of propagating data packets in a network of nodes (2018; full text pinned). The Diffusion Mixer Protocol has two stages.
- **EP4557197** — Computer-implemented system and methods for off-chain exchange of transactions (2018; full text pinned). Participants are ordered at random and exchange keys: each makes two key pairs plus an ephemeral pair for encrypted neighbour channels, then builds a 2-of-2 address α with one neighbour and a Diffie–Hellman address β…
- **WO2020058806** — Computer implemented system and method for sharing a common secret (2018; full text pinned). Each node has an asymmetric key pair on a common (typically elliptic-curve) system.
- **WO2023148042** — Blockchain based privacy enhanced outsourced data storage (2022; catalogue only).
- **WO2024235543** — Data obfuscation (2023; catalogue only).

## payments

- **WO2017145003** — Blockchain-based exchange with tokenisation (2016; full text pinned). An invitation is encoded as metadata (entities to exchange and conditions) placed in a redeem script together with the inviter’s public key and a third-party public key (escrow or token issuer).
- **WO2017145004** — Universal tokenisation system for blockchain-based cryptocurrencies (2016; full text pinned). An issuer creates a token by allocating a quantity of cryptocurrency and building a pay-to-script-hash (P2SH) transaction whose redeem script contains metadata in a public-key slot, plus the user’s and issuer’s public…
- **WO2017145017** — Methods and systems for the efficient transfer of entities on a blockchain (2016; full text pinned). Users publish invitations (offers or requests) whose metadata state the entities to be exchanged and conditions such as rates, quantity bounds, deadline or location.
- **WO2017145018** — A method and system for the secure transfer of entities on a blockchain (2016; full text pinned). A user builds a script (typically a P2SH redeem script) that embeds invitation metadata — what is offered, a geographical location condition, and the user’s public key — then hashes the script and publishes both script…
- **WO2017145020** — Methods and systems for efficient transfer of entities on a peer-to-peer distributed ledger using the blockchain (2016; full text pinned). A user invitation is encoded as metadata (entity, conditions such as price ranges, exchange rate, deadline, geography) in a redeem script together with the user’s public key and a third-party (escrow) public key; the…
- **WO2017145021** — Method and system for efficient transfer of cryptocurrency associated with a payroll on a blockchain that leads to An Automated payroll method and system based on smart contracts (2016; full text pinned). On a transfer request, a generator value is formed from a string associated with the first node that identifies the second user or the purpose of the derived key (tax withheld, superannuation, mortgage, college fund,…
- **WO2017145047** — Blockchain-implemented method for control and distribution of digital content (2016; full text pinned). The first user deposits cryptocurrency to a common P2SH address that needs both users’ signatures to spend.
- **WO2017178956** — A method for secure peer-to-peer communication on a blockchain (2016; full text pinned). An initiator publishes a first blockchain transaction whose redeem script holds the initiator’s public key and metadata: a hash of an off-chain invitation (stored in a DHT) plus a pointer to its location, locking an…
- **WO2018020372** — Blockchain-implemented system and method (2016; full text pinned). Alice posts a payment transaction whose output can be unlocked either by Bob’s signature plus a secret X that only she initially knows (hashed in the locking script), or by a 2-of-2 of Alice and Bob.
- **WO2018020389** — Blockchain implemented method and system (2016; full text pinned). A merchant mints machine-executable smart contracts as coloured-coin tokens: a minting transaction pays to a 1-of-3 CHECKMULTISIG script whose “public keys” are metadata pointing at the off-chain contract (for example…
- **US12354090** — Blockchain-based method and system for specifying the recipient of an (2016; full text pinned). An oracle, triggered by an off-chain condition (for example a dividend date), walks the chain from an issuance (“anchor”) transaction to the current UTXO set for the token, then builds an incomplete distribution…
- **EP3574464** — Computer implemented method and system (2017; full text pinned). Each buyer creates three Bitcoin transactions.
- **EP3607516** — Method and system for secure data record distribution using a blockchain (2017; full text pinned). Input nodes each hold a share of a group private key e (unknown to any one of them) and obtain a group public key Q of the output nodes.
- **EP4207024** — Computer-implemented system and method for performing transaction mixing on a (2017; full text pinned). The claimed Group Random Exchange of the second type randomises n users (n > 2) into a cycle and elects an initiator.
- **EP3902201** — Methods and devices for increasing entropy of a blockchain using blinded (2017; full text pinned). Blinded Outcome Diversification runs among at least four participating nodes.
- **WO2019106512** — Computer-implemented systems and methods for enhanced bitcoin wallets (2017; full text pinned). A process-execution component (an interpreter, described as a plug-in or embedded add-on) sits in a digital or cryptocurrency wallet.
- **US11694198** — System and method for transferring resources using a blockchain (2018; full text pinned). Group Random Exchange Late Reveal randomises participating nodes into a cycle and elects an initiator who holds a private ks (with public Ps).
- **EP3769466** — Computer-implemented system and method for enabling zero-knowledge proof (2018; full text pinned). The prover represents the statement as an arithmetic circuit and commits to wire values with Pedersen commitments (individually or batched).
- **EP3777013** — Computer implemented method and system for transferring access to a digital (2018; full text pinned). Four parties — client, exchange, trusted third party (TTP) and escrow — each hold an elliptic-curve key pair and a dealer-free share xn of a group private key x that never exists in one place.
- **EP3777023** — Computer-implemented system and method suitable for increasing the security of (2018; full text pinned). A prover generates two secp256k1 key pairs and a compensation key ck = sk2 · sk1⁻¹ mod n, plus a non-interactive zero-knowledge proof (Fiat–Shamir transform of a sigma protocol) that ck really links the two public keys,…
- **EP3782104** — Computer-implemented methods and systems for controlling tasks implemented by a (2018; full text pinned). Non-supervisory nodes sit in a cycle with a supervisor.
- **EP4557197** — Computer-implemented system and methods for off-chain exchange of transactions (2018; full text pinned). Participants are ordered at random and exchange keys: each makes two key pairs plus an ephemeral pair for encrypted neighbour channels, then builds a 2-of-2 address α with one neighbour and a Diffie–Hellman address β…
- **EP3824593** — Computer-implemented system and method for controlling processing steps of (2018; full text pinned). Nodes sit in cyclically-ordered sets; each set has an initiator, and the initiators themselves form a second cycle (a two-dimensional structure).
- **WO2020128814** — Computer-implemented systems and methods for controlling or enforcing performance of transfers conducted over a blockchain (2018; catalogue only).
- **WO2020165676** — Computer-implemented systems and methods for implementing transfers over a blockchain network (2019; catalogue only).
- **WO2021005474** — Computer-implemented system and method for facilitating transactions associated with a blockchain using a network identifier for participating entities (2019; catalogue only).
- **WO2021059090** — Time-locked blockchain transactions and related blockchain technology (2019; catalogue only).
- **WO2021059091** — Time-locked blockchain transactions and related blockchain technology (2019; catalogue only).
- **WO2021070106** — Methods and devices for secure symbiotic mining (2019; full text pinned). In one embodiment the non-mining node builds a candidate block containing a source transaction (output to itself) and a miner transaction that spends that output to the miner.
- **WO2021181177** — Blockchain transaction double spend proof (2020; full text pinned). The first party builds a transaction spending a previously submitted output, then signs a combination of that transaction (or its identifier) and one or more time indicators — a timestamp and/or current block height —…
- **WO2021239345** — Probabilistic membership test for blockchain transaction outputs (2020; full text pinned). A transmitting entity (typically a blockchain node) builds a Bloom or Cuckoo filter that encodes identifiers of spent outputs — those spent by transactions in its ordered unpublished set and, optionally, those in the…
- **WO2021254703** — Agreements on the blockchain (2020; catalogue only).
- **WO2022022928** — Blockchain based tax mechanism (2020; catalogue only).
- **WO2022028791** — Connecting to the blockchain network (2020; full text pinned). An internet server (web or mail) keeps connections to multiple blockchain nodes and acts as a gateway.
- **WO2023156105** — Blockchain transaction (2022; catalogue only).
- **WO2024110153** — Payment channel aggregator (2022; catalogue only).
- **WO2024110166** — Payment channel aggregator (2022; catalogue only).
- **WO2024126027** — Computer-implemented methods and systems (2022; catalogue only).
- **WO2024193952** — Determining a system state using a blockchain (2023; catalogue only).
- **WO2024193954** — Determining a system state using a blockchain (2023; catalogue only).
- **WO2024193969** — Determining a system state using a blockchain (2023; catalogue only).
- **WO2025108656** — Double-spend checks (2023; catalogue only).
- **EP4629150** — Computer-implemented methods and systems (2024; full text pinned). Users register with a matching platform.

## tokens

- **WO2017145003** — Blockchain-based exchange with tokenisation (2016; full text pinned). An invitation is encoded as metadata (entities to exchange and conditions) placed in a redeem script together with the inviter’s public key and a third-party public key (escrow or token issuer).
- **WO2017145004** — Universal tokenisation system for blockchain-based cryptocurrencies (2016; full text pinned). An issuer creates a token by allocating a quantity of cryptocurrency and building a pay-to-script-hash (P2SH) transaction whose redeem script contains metadata in a public-key slot, plus the user’s and issuer’s public…
- **WO2017145005** — Blockchain implemented counting system and method for use in secure voting and distribution (2016; full text pinned). A computing resource called the Manager (an oracle or bot) runs in parallel with the blockchain and treats the ledger as the non-erasable tape of a Turing machine.
- **WO2017145007** — System and method for controlling asset-related actions via a blockchain (2016; full text pinned). An asset is associated with private keys (optionally derived as sub-keys from a controller via a shared generator value and a common secret) and with an off-chain computing agent.
- **WO2017145008** — Tokenisation method and system for implementing exchanges on a blockchain (2016; catalogue only).
- **WO2017145009** — A method and system for securing computer software using a distributed hash table and a blockchain (2016; full text pinned). A node hashes the software executable to H1, hashes licence-related data D1 together with the executable (or H1) to H2 — H2 may be a Merkle-tree top hash over licence leaves such as D1, the executable, user public keys…
- **WO2017145017** — Methods and systems for the efficient transfer of entities on a blockchain (2016; full text pinned). Users publish invitations (offers or requests) whose metadata state the entities to be exchanged and conditions such as rates, quantity bounds, deadline or location.
- **WO2017145018** — A method and system for the secure transfer of entities on a blockchain (2016; full text pinned). A user builds a script (typically a P2SH redeem script) that embeds invitation metadata — what is offered, a geographical location condition, and the user’s public key — then hashes the script and publishes both script…
- **WO2017145019** — Registry and automated management method for blockchain-enforced smart contracts (2016; full text pinned). The formal contract is stored off-chain (for example in a DHT).
- **WO2017145020** — Methods and systems for efficient transfer of entities on a peer-to-peer distributed ledger using the blockchain (2016; full text pinned). A user invitation is encoded as metadata (entity, conditions such as price ranges, exchange rate, deadline, geography) in a redeem script together with the user’s public key and a third-party (escrow) public key; the…
- **WO2017145021** — Method and system for efficient transfer of cryptocurrency associated with a payroll on a blockchain that leads to An Automated payroll method and system based on smart contracts (2016; full text pinned). On a transfer request, a generator value is formed from a string associated with the first node that identifies the second user or the purpose of the derived key (tax withheld, superannuation, mortgage, college fund,…
- **WO2017178955** — Computer-implemented methods and systems for validating tokens for blockchain-based cryptocurrencies (2016; full text pinned). An issuer tokenises a quantity of cryptocurrency by locking it to a P2SH redeem script that embeds contract metadata (type, pointer, hash) plus user and issuer public keys.
- **WO2017178956** — A method for secure peer-to-peer communication on a blockchain (2016; full text pinned). An initiator publishes a first blockchain transaction whose redeem script holds the initiator’s public key and metadata: a hash of an off-chain invitation (stored in a DHT) plus a pointer to its location, locking an…
- **US12346416** — Method and system for verifying integrity of a digital asset using a (2016; catalogue only).
- **WO2018020372** — Blockchain-implemented system and method (2016; full text pinned). Alice posts a payment transaction whose output can be unlocked either by Bob’s signature plus a secret X that only she initially knows (hashed in the locking script), or by a 2-of-2 of Alice and Bob.
- **WO2018020389** — Blockchain implemented method and system (2016; full text pinned). A merchant mints machine-executable smart contracts as coloured-coin tokens: a minting transaction pays to a 1-of-3 CHECKMULTISIG script whose “public keys” are metadata pointing at the off-chain contract (for example…
- **US12354090** — Blockchain-based method and system for specifying the recipient of an (2016; full text pinned). An oracle, triggered by an off-chain condition (for example a dividend date), walks the chain from an issuance (“anchor”) transaction to the current UTXO set for the token, then builds an incomplete distribution…
- **WO2018078584** — Systems and methods for implementing deterministic finite automata (dfas) via a blockchain (2016; full text pinned). A DFA’s current state is recorded as an unspent transaction output whose locking script carries a data portion (metadata, label, identifier, tag, or key) that identifies that state in a stored transition table.
- **EP3574464** — Computer implemented method and system (2017; full text pinned). Each buyer creates three Bitcoin transactions.
- **US12395318** — Blockchain-based atomic swap with veiled secret value exchange (2018; catalogue only).
- **WO2019220317** — Improved systems and methods for storage, generation and verification of tokens used to control access to a resource (2018; full text pinned). A client and server share a one-way function chain (typically a hash chain).
- **WO2021053426** — Allocation of a digital asset using blockchain transactions (2019; catalogue only).
- **WO2021059054** — Divisible tokens (2019; catalogue only).
- **WO2021140376** — Single-use tokens (2020; catalogue only).
- **WO2022022928** — Blockchain based tax mechanism (2020; catalogue only).
- **WO2022058134** — Commensal token system (2020; catalogue only).
- **WO2022136022** — Blockchain related verification method and system (2020; catalogue only).
- **WO2023285045** — Message exchange system (2021; catalogue only).
- **WO2023160921** — Data exchange attestation method (2022; catalogue only).
- **EP4629150** — Computer-implemented methods and systems (2024; full text pinned). Users register with a matching platform.

## smart-contracts

- **WO2017145003** — Blockchain-based exchange with tokenisation (2016; full text pinned). An invitation is encoded as metadata (entities to exchange and conditions) placed in a redeem script together with the inviter’s public key and a third-party public key (escrow or token issuer).
- **WO2017145004** — Universal tokenisation system for blockchain-based cryptocurrencies (2016; full text pinned). An issuer creates a token by allocating a quantity of cryptocurrency and building a pay-to-script-hash (P2SH) transaction whose redeem script contains metadata in a public-key slot, plus the user’s and issuer’s public…
- **WO2017145005** — Blockchain implemented counting system and method for use in secure voting and distribution (2016; full text pinned). A computing resource called the Manager (an oracle or bot) runs in parallel with the blockchain and treats the ledger as the non-erasable tape of a Turing machine.
- **WO2017145006** — Agent-based turing complete transactions integrating feedback within a blockchain system (2016; full text pinned). An off-chain computing resource (called the Manager, oracle or bot) runs in parallel with the blockchain and treats the ledger as a Turing machine’s non-erasable tape.
- **WO2017145007** — System and method for controlling asset-related actions via a blockchain (2016; full text pinned). An asset is associated with private keys (optionally derived as sub-keys from a controller via a shared generator value and a common secret) and with an off-chain computing agent.
- **WO2017145017** — Methods and systems for the efficient transfer of entities on a blockchain (2016; full text pinned). Users publish invitations (offers or requests) whose metadata state the entities to be exchanged and conditions such as rates, quantity bounds, deadline or location.
- **WO2017145018** — A method and system for the secure transfer of entities on a blockchain (2016; full text pinned). A user builds a script (typically a P2SH redeem script) that embeds invitation metadata — what is offered, a geographical location condition, and the user’s public key — then hashes the script and publishes both script…
- **WO2017145019** — Registry and automated management method for blockchain-enforced smart contracts (2016; full text pinned). The formal contract is stored off-chain (for example in a DHT).
- **WO2017145020** — Methods and systems for efficient transfer of entities on a peer-to-peer distributed ledger using the blockchain (2016; full text pinned). A user invitation is encoded as metadata (entity, conditions such as price ranges, exchange rate, deadline, geography) in a redeem script together with the user’s public key and a third-party (escrow) public key; the…
- **WO2017178956** — A method for secure peer-to-peer communication on a blockchain (2016; full text pinned). An initiator publishes a first blockchain transaction whose redeem script holds the initiator’s public key and metadata: a hash of an off-chain invitation (stored in a DHT) plus a pointer to its location, locking an…
- **WO2017187395** — A method and system for controlling the performance of a contract using a distributed hash table and a peer-to-peer distributed ledger (2016; catalogue only).
- **WO2017187396** — Implementing logic gate functionality using a blockchain (2016; full text pinned). A first (“priming”) transaction locks cryptocurrency with a locking script that implements a chosen truth table.
- **WO2017187397** — Operating system for blockchain iot devices (2016; full text pinned). A Blockchain IoT Device (BID) is a thin control component on (or talking to) a networked device that has an IP address and its own public–private key pair.
- **WO2017187398** — Implementing logic gate functionality using a blockchain (2016; full text pinned). A first transaction locks coin with a locking script (optionally P2SH) that contains opcodes selected to implement a chosen gate’s truth table.
- **WO2018020372** — Blockchain-implemented system and method (2016; full text pinned). Alice posts a payment transaction whose output can be unlocked either by Bob’s signature plus a secret X that only she initially knows (hashed in the locking script), or by a 2-of-2 of Alice and Bob.
- **WO2018020389** — Blockchain implemented method and system (2016; full text pinned). A merchant mints machine-executable smart contracts as coloured-coin tokens: a minting transaction pays to a 1-of-3 CHECKMULTISIG script whose “public keys” are metadata pointing at the off-chain contract (for example…
- **WO2018078584** — Systems and methods for implementing deterministic finite automata (dfas) via a blockchain (2016; full text pinned). A DFA’s current state is recorded as an unspent transaction output whose locking script carries a data portion (metadata, label, identifier, tag, or key) that identifies that state in a stored transition table.
- **US12327241** — Computer-implemented system and method for determining the state of a machine (2017; full text pinned). A state (or tag) of the contract is hashed into metadata, placed in an “information public key”, and combined with the public key of the agent assigned to spend the UTXO for that state, typically as a 1-of-2 P2SH…
- **US12423682** — Computer-implemented system and method for generating and extracting user (2017; full text pinned). A deterministic finite automaton that implements a smart contract also scores fulfilment and publishes a reputation transaction: a dust P2SH output whose metadata holds contract type, attributable information (address…
- **US11411740** — Duplicating smart contracts with termination condition (2017; catalogue only).
- **US12452033** — Blockchain for general computation (2017; full text pinned). A requester posts a task and a bounty.
- **US12323516** — Computer-implemented system and method for time release encryption over a (2017; full text pinned). An agent generates an encryption key pair and a short successive-squaring time-lock puzzle on the private key.
- **HK40017307** — System and method for compiling high-level language code into a script (2017; catalogue only).
- **WO2019008531** — Method for controlling the flow execution of a generated script of a blockchain transaction (2017; full text pinned). An automated process (optionally a compiler from a high-level language) receives or derives a data item that decides how many times a pre-stored code portion is copied into a transaction script, and at which locations.
- **WO2019106512** — Computer-implemented systems and methods for enhanced bitcoin wallets (2017; full text pinned). A process-execution component (an interpreter, described as a plug-in or embedded add-on) sits in a digital or cryptocurrency wallet.
- **EP3725031** — System and method for authenticating off-chain data based on proof verification (2017; full text pinned). A cryptographically protected session is opened with a computing entity (data source).
- **EP3740917** — Computer-implemented decision making system and method (2018; full text pinned). Each participant supplies a set of first public keys, one per option on their factor; each key is xG for a secret option x, using the homomorphic property of elliptic-curve scalar multiplication.
- **EP3776867** — Computer-implemented methods and systems relating to arithmetic coding for (2018; full text pinned). A file encoding the circuit is parsed into symbols: arithmetic operators and wire identifiers (inputs/outputs of gates).
- **EP3782104** — Computer-implemented methods and systems for controlling tasks implemented by a (2018; full text pinned). Non-supervisory nodes sit in a cycle with a supervisor.
- **EP3824610** — Accumulator-based protocol for the distribution of tasks across different (2018; full text pinned). A manager publishes trapdoor s and accumulation-tree parameters.
- **EP3824593** — Computer-implemented system and method for controlling processing steps of (2018; full text pinned). Nodes sit in cyclically-ordered sets; each set has an initiator, and the initiators themselves form a second cycle (a two-dimensional structure).
- **US12182541** — In-script functions within a blockchain transaction (2019; catalogue only).
- **US20260012369** — Digital contracts using blockchain transactions (2019; catalogue only).
- **WO2021048661** — Blockchain transactions including portions of code in different languages for complex validation (2019; full text pinned). A first transaction already on the chain has a Script locking script and, in the same or another output (OP_RETURN, OP_PUSHDATA, or OP_DROP), a portion of Turing-complete, non-stack code.
- **WO2021165754** — Smart contracts (2020; catalogue only).
- **WO2024052053** — Blockchain state machine (2022; catalogue only).
- **WO2024052066** — Blockchain state machine (2022; catalogue only).
- **EP4629150** — Computer-implemented methods and systems (2024; full text pinned). Users register with a matching platform.

## data-integrity

- **WO2017145009** — A method and system for securing computer software using a distributed hash table and a blockchain (2016; full text pinned). A node hashes the software executable to H1, hashes licence-related data D1 together with the executable (or H1) to H2 — H2 may be a Merkle-tree top hash over licence leaves such as D1, the executable, user public keys…
- **WO2017145048** — Cryptographic method and system for secure extraction of data from a blockchain (2016; full text pinned). Each element of an organisational structure is given a public/private key pair.
- **WO2017145049** — Consolidated blockchain-based data transfer control method and system (2016; full text pinned). Public addresses of entities are classified by identifiers of a first type arranged as a tree that links parent and child entities.
- **WO2017178955** — Computer-implemented methods and systems for validating tokens for blockchain-based cryptocurrencies (2016; full text pinned). An issuer tokenises a quantity of cryptocurrency by locking it to a P2SH redeem script that embeds contract metadata (type, pointer, hash) plus user and issuer public keys.
- **US12346416** — Method and system for verifying integrity of a digital asset using a (2016; catalogue only).
- **US12327241** — Computer-implemented system and method for determining the state of a machine (2017; full text pinned). A state (or tag) of the contract is hashed into metadata, placed in an “information public key”, and combined with the public key of the agent assigned to spend the UTXO for that state, typically as a 1-of-2 P2SH…
- **US12423682** — Computer-implemented system and method for generating and extracting user (2017; full text pinned). A deterministic finite automaton that implements a smart contract also scores fulfilment and publishes a reputation transaction: a dust P2SH output whose metadata holds contract type, attributable information (address…
- **EP3725031** — System and method for authenticating off-chain data based on proof verification (2017; full text pinned). A cryptographically protected session is opened with a computing entity (data source).
- **EP3763098** — Methods and systems for controlling access to, and integrity of, resources on a (2018; full text pinned). Participating nodes hold shares of a collective key pair (p, P) and each also has a one-time nodal pair (q_i, Q_i).
- **US20240297794** — Verification of data fields of blockchain transactions (2019; catalogue only).
- **WO2021048662** — Genetic data in transactions (2019; full text pinned). An electronic document (itself optionally stored in a source transaction) contains pointers — each a transaction identifier, and for target data optionally a hyperlink with anchor content — to destination transactions.
- **WO2021165755** — Attestation service for use with a blockchain network (2020; catalogue only).
- **WO2021165756** — Distributed database (2020; full text pinned). The network is layered: a core of blockchain miners and storage nodes, an intermediate layer of database nodes that are not miners, and an outer client layer.
- **WO2021181177** — Blockchain transaction double spend proof (2020; full text pinned). The first party builds a transaction spending a previously submitted output, then signs a combination of that transaction (or its identifier) and one or more time indicators — a timestamp and/or current block height —…
- **WO2021239345** — Probabilistic membership test for blockchain transaction outputs (2020; full text pinned). A transmitting entity (typically a blockchain node) builds a Bloom or Cuckoo filter that encodes identifiers of spent outputs — those spent by transactions in its ordered unpublished set and, optionally, those in the…
- **WO2022100945** — Merkle proof entity (2020; catalogue only).
- **WO2022100946** — Merkle proof entity (2020; catalogue only).
- **WO2022167165** — Blockchain tree structure (2021; full text pinned). A tree creator still writes each child as a transaction that carries a data payload, its own transaction identifier, and a signature under the parent’s key.
- **WO2022268429** — Multi-level blockchain (2021; full text pinned). Users build ML transactions made of carrier pairs: an input and an output at the same index, the output holding secondary-chain data (raw or hashed, often after OP_RETURN) and the input holding a signature that signs…
- **WO2023285050** — Blockchain blocks & proof-of-existence (2021; catalogue only).
- **WO2023285052** — Blockchain blocks & proof-of-existence (2021; catalogue only).
- **WO2023285053** — Blockchain blocks & proof-of-existence (2021; catalogue only).
- **WO2023285054** — Blockchain blocks & proof-of-existence (2021; catalogue only).
- **WO2023072778** — Sharded merkle tree (2021; catalogue only).
- **WO2023160921** — Data exchange attestation method (2022; catalogue only).
- **WO2024156510** — Proof and verification of data storage (2023; catalogue only).
- **WO2024165258** — Blockchain transaction verification (2023; catalogue only).
- **WO2024194061** — Computer-implemented system and method for tree-based data verification, communication and integrity solutions (2023; catalogue only).
- **WO2025082703** — Timestamps (2023; catalogue only).
- **WO2025093209** — Merkle path retrieval (2023; catalogue only).
- **WO2025119666** — Method and system for enabling verification of data (2023; catalogue only).
- **WO2026037597** — Cryptographic proof of data knowledge (2024; catalogue only).

## storage

- **WO2013059871** — Registry (2011; catalogue only).
- **WO2017145001** — Reactive and pre-emptive security system for the protection of computer networks & systems (2016; full text pinned). A data manager maintains a centralised database of traffic data from a community of subscribed users and classifies traffic as normal or attacker using signatures, anomalies, blacklists, scan behaviour, and optionally…
- **WO2017145009** — A method and system for securing computer software using a distributed hash table and a blockchain (2016; full text pinned). A node hashes the software executable to H1, hashes licence-related data D1 together with the executable (or H1) to H2 — H2 may be a Merkle-tree top hash over licence leaves such as D1, the executable, user public keys…
- **WO2017145019** — Registry and automated management method for blockchain-enforced smart contracts (2016; full text pinned). The formal contract is stored off-chain (for example in a DHT).
- **WO2017145049** — Consolidated blockchain-based data transfer control method and system (2016; full text pinned). Public addresses of entities are classified by identifiers of a first type arranged as a tree that links parent and child entities.
- **WO2017163220** — Methods and Systems for Recording Multiple Transactions on a Blockchain (2016; catalogue only).
- **WO2017187395** — A method and system for controlling the performance of a contract using a distributed hash table and a peer-to-peer distributed ledger (2016; catalogue only).
- **WO2017195161** — A method and system for verifying ownership of a digital asset using a distributed hash table and a peer-to-peer distributed ledger (2016; full text pinned). A first hash (H1) is taken of the software executable and a second hash (H2) of licence-related data plus the software; H2 is the DHT key and D1 plus H1 are the value, optionally with a location pointer.
- **US20240211469** — System and method for distributing data records using a blockchain (2017; catalogue only).
- **EP3643046** — Methods and systems for a consistent distributed memory pool in a blockchain (2017; full text pinned). A distributed mempool (DMP) of specialised mempool nodes implements a DHT.
- **US12483417** — Computer-implemented system and method enabling secure storage of a large (2017; full text pinned). Miners periodically sample confirmed transactions (optionally with a distribution that favours depth).
- **EP3776867** — Computer-implemented methods and systems relating to arithmetic coding for (2018; full text pinned). A file encoding the circuit is parsed into symbols: arithmetic operators and wire identifiers (inputs/outputs of gates).
- **EP3785204** — Maintaining blocks of a blockchain in a partitioned blockchain network (2018; full text pinned). Each node joins one or more shards.
- **US20250286727** — Computer implemented system and method for storing data on a blockchain (2018; catalogue only).
- **WO2021033134** — Blockchain database management system (2019; catalogue only).
- **WO2021048662** — Genetic data in transactions (2019; full text pinned). An electronic document (itself optionally stored in a source transaction) contains pointers — each a transaction identifier, and for target data optionally a hyperlink with anchor content — to destination transactions.
- **WO2021048663** — Sharing data via transactions of a blockchain (2019; catalogue only).
- **WO2021048665** — Storing a program on a blockchain (2019; catalogue only).
- **WO2021059057** — Computer implemented method and system for storing certified data on a blockchain (2019; catalogue only).
- **WO2021130557** — Mapping keys to a blockchain overlay network (2019; full text pinned). A first software module reads the overlay graph (nodes = data-storage transactions, edges = overlay links).
- **WO2021165756** — Distributed database (2020; full text pinned). The network is layered: a core of blockchain miners and storage nodes, an intermediate layer of database nodes that are not miners, and an outer client layer.
- **WO2022069134** — Physically unclonable functions storing response values on a blockchain (2020; catalogue only).
- **WO2022069135** — Physically unclonable functions storing response values on a data store (2020; catalogue only).
- **WO2022167165** — Blockchain tree structure (2021; full text pinned). A tree creator still writes each child as a transaction that carries a data payload, its own transaction identifier, and a signature under the parent’s key.
- **WO2022175001** — Puf and blockchain based iot event recorder and method (2021; catalogue only).
- **WO2022268429** — Multi-level blockchain (2021; full text pinned). Users build ML transactions made of carrier pairs: an input and an output at the same index, the output holding secondary-chain data (raw or hashed, often after OP_RETURN) and the input holding a signature that signs…
- **WO2023148042** — Blockchain based privacy enhanced outsourced data storage (2022; catalogue only).
- **WO2023169865** — Translucent blockchain database (2022; catalogue only).
- **WO2023208623** — Methods & systems for synchronising and controlling state within computer-implemented environments (2022; catalogue only).
- **WO2024032994** — Blockchain-implemented database overlay, verification and indexing system (2022; catalogue only).
- **WO2024156510** — Proof and verification of data storage (2023; catalogue only).
- **WO2024170308** — Computer-implemented solutions for recording data relating to multiple components of an item (2023; catalogue only).
- **WO2025026712** — Storage overlay network (2023; catalogue only).

## networking

- **WO2017145001** — Reactive and pre-emptive security system for the protection of computer networks & systems (2016; full text pinned). A data manager maintains a centralised database of traffic data from a community of subscribed users and classifies traffic as normal or attacker using signatures, anomalies, blacklists, scan behaviour, and optionally…
- **WO2017187395** — A method and system for controlling the performance of a contract using a distributed hash table and a peer-to-peer distributed ledger (2016; catalogue only).
- **US20240413991** — Computer-implemented system and method for fault resistant multi-node (2017; catalogue only).
- **US11902441** — Systems and methods for parallel verification of blockchain transactions (2017; full text pinned). A node first checks block-level criteria (syntax, proof-of-work, timestamp, size, coinbase rules, and the like).
- **US20250005542** — Method and system for selectively using network coding for propagating (2017; full text pinned). A node decides it is a bottleneck when its in-links (fan-in) exceed its out-links (fan-out), either at the moment a first transaction arrives or as averages over time.
- **EP3643046** — Methods and systems for a consistent distributed memory pool in a blockchain (2017; full text pinned). A distributed mempool (DMP) of specialised mempool nodes implements a DHT.
- **US12301660** — Fast propagation of recent transactions over a blockchain network (2017; full text pinned). A subset of nodes (“merchant” or specialised network nodes) form an overlay.
- **EP4376361** — SYSTEMS AND METHODS FOR RANDOM DIFFERENTIAL RELAY AND NETWORK CODING (2018; full text pinned). A Diffusion Mixer Protocol has two stages.
- **EP3785204** — Maintaining blocks of a blockchain in a partitioned blockchain network (2018; full text pinned). Each node joins one or more shards.
- **EP3797502** — Systems and methods of propagating data packets in a network of nodes (2018; full text pinned). The Diffusion Mixer Protocol has two stages.
- **EP4557197** — Computer-implemented system and methods for off-chain exchange of transactions (2018; full text pinned). Participants are ordered at random and exchange keys: each makes two key pairs plus an ephemeral pair for encrypted neighbour channels, then builds a 2-of-2 address α with one neighbour and a Diffie–Hellman address β…
- **WO2020208580** — Methods and devices for propagating blocks in a blockchain network (2019; catalogue only).
- **WO2021084347** — Communication protocol using blockchain transactions (2019; full text pinned). An IoT-style first network has bridging nodes (each also a blockchain node) that control devices.
- **WO2021165756** — Distributed database (2020; full text pinned). The network is layered: a core of blockchain miners and storage nodes, an intermediate layer of database nodes that are not miners, and an outer client layer.
- **WO2021165757** — Adapting connections of a layered network (2020; catalogue only).
- **WO2021165758** — Layered network (2020; catalogue only).
- **WO2021228528** — Multi-layer communication network (2020; full text pinned). IoT (layered-network) nodes sit in an ordered stack: a core of master nodes, each connected to blockchain nodes; one or more intermediate layers; and a device layer of end devices.
- **WO2021239345** — Probabilistic membership test for blockchain transaction outputs (2020; full text pinned). A transmitting entity (typically a blockchain node) builds a Bloom or Cuckoo filter that encodes identifiers of spent outputs — those spent by transactions in its ordered unpublished set and, optionally, those in the…
- **WO2021239354** — Filtering blockchain transactions (2020; full text pinned). A transmitting party (for example a court or other authority) builds one or more probabilistic filters (Bloom or Cuckoo are described) that encode whitelist or blacklist sets, and sends the filters to a receiving party…
- **WO2022028791** — Connecting to the blockchain network (2020; full text pinned). An internet server (web or mail) keeps connections to multiple blockchain nodes and acts as a gateway.
- **WO2022167165** — Blockchain tree structure (2021; full text pinned). A tree creator still writes each child as a transaction that carries a data payload, its own transaction identifier, and a signature under the parent’s key.
- **WO2023006573** — Forming peer-to-peer connections using blockchain (2021; catalogue only).
- **WO2023020764** — Coordinating peer-to-peer data transfer using blockchain (2021; catalogue only).
- **WO2023020768** — Coordinating peer-to-peer data transfer using blockchain (2021; catalogue only).
- **WO2023208623** — Methods & systems for synchronising and controlling state within computer-implemented environments (2022; catalogue only).
- **WO2023227340** — Coordinating peer-to-peer data transfer using blockchain (2022; catalogue only).
- **WO2023227381** — Coordinating peer-to-peer data transfer using blockchain (2022; catalogue only).
- **WO2024032994** — Blockchain-implemented database overlay, verification and indexing system (2022; catalogue only).
- **WO2024175324** — Propagating blockchain messages (2023; catalogue only).
- **WO2024175325** — Propagating blockchain messages (2023; catalogue only).
- **WO2024175456** — Propagating blockchain messages (2023; catalogue only).
- **WO2025026712** — Storage overlay network (2023; catalogue only).

## messaging

- **US12354090** — Blockchain-based method and system for specifying the recipient of an (2016; full text pinned). An oracle, triggered by an off-chain condition (for example a dividend date), walks the chain from an issuance (“anchor”) transaction to the current UTXO set for the token, then builds an incomplete distribution…
- **WO2021176284** — Method of generating a hash-based message authentication code (2020; catalogue only).
- **WO2022028791** — Connecting to the blockchain network (2020; full text pinned). An internet server (web or mail) keeps connections to multiple blockchain nodes and acts as a gateway.
- **WO2023285045** — Message exchange system (2021; catalogue only).
- **WO2023227467** — Blockchain-based message journaling (2022; catalogue only).
- **WO2024110170** — Communication protocol (2022; catalogue only).
- **WO2024175324** — Propagating blockchain messages (2023; catalogue only).
- **WO2024175325** — Propagating blockchain messages (2023; catalogue only).
- **WO2024175456** — Propagating blockchain messages (2023; catalogue only).
- **WO2024179740** — Message brokering (2023; catalogue only).
- **WO2024179750** — Message brokering (2023; catalogue only).
- **WO2024179807** — Message brokering (2023; catalogue only).

## identity

- **US12423682** — Computer-implemented system and method for generating and extracting user (2017; full text pinned). A deterministic finite automaton that implements a smart contract also scores fulfilment and publishes a reputation transaction: a dust P2SH output whose metadata holds contract type, attributable information (address…
- **WO2020229949** — Methods and devices for registering and authenticating miner identity in a blockchain network (2019; full text pinned). The miner first broadcasts a validity-check transaction (VCT) with an arbitrary spendable input, a first output paid to an address the miner controls, and a second OP_RETURN output carrying the miner identifier (a…
- **WO2020229950** — Methods and devices for recording work history and proving reputation in a blockchain network (2019; full text pinned). A miner first publishes a validity-check transaction (VCT) with its identifier public key PK_ID in an OP_RETURN output and a spendable output it controls; spending that output revokes the identity.
- **WO2021053427** — Cryptographically linked identities (2019; full text pinned). A recorded blockchain transaction holds a registered value that is a one-way function of a first secret value.
- **WO2021094854** — Multi factor authentication using blockchain transactions (2019; catalogue only).
- **WO2021105816** — Methods and devices for automated digital certificate verification (2019; full text pinned). A certificate authority builds a certification transaction: an input signed with the CA key, a first output (P2PKH) to a CA-controlled certification-transaction key, and a second OP_RETURN (or similar) output carrying…
- **WO2021176284** — Method of generating a hash-based message authentication code (2020; catalogue only).
- **WO2022042969** — Bio-extracted seed (2020; full text pinned). One or more biometric readings (for example a live fingerprint, optionally with liveness detection) are aligned to a reference frame and partitioned into sectors.
- **WO2022069132** — Physically unclonable functions (2020; full text pinned). In a set-up phase a party applies one or more challenges to a PUF module and stores, in a data store (a blockchain publication medium or a trusted third-party server), response data for each response — the raw response…
- **WO2022069133** — Authentication system and method (2020; full text pinned). A PUF module (optionally an “expanded PUF”: a weak base PUF plus a hash transform that folds a secondary challenge with the primary response) produces a response from a challenge.
- **WO2023156099** — Identity-linked blockchain addresses (2022; catalogue only).
- **WO2024115139** — Computer implemented methods and systems for public key infrastructure and identity verification (2022; catalogue only).
- **WO2025168298** — Computer-implemented methods and systems for authentication and/or proof of decryption (2024; catalogue only).

## certificates-credentials

- **WO2017195161** — A method and system for verifying ownership of a digital asset using a distributed hash table and a peer-to-peer distributed ledger (2016; full text pinned). A first hash (H1) is taken of the software executable and a second hash (H2) of licence-related data plus the software; H2 is the DHT key and D1 plus H1 are the value, optionally with a location pointer.
- **US12483417** — Computer-implemented system and method enabling secure storage of a large (2017; full text pinned). Miners periodically sample confirmed transactions (optionally with a distribution that favours depth).
- **WO2020229947** — Methods and devices for public key management using a blockchain (2019; full text pinned). A certificate authority authenticates a requester and creates a certification transaction signed by the CA: one output is a CA-controlled P2PKH (or a multi-sig that lets other parties revoke), and a second OP_RETURN (or…
- **WO2020229949** — Methods and devices for registering and authenticating miner identity in a blockchain network (2019; full text pinned). The miner first broadcasts a validity-check transaction (VCT) with an arbitrary spendable input, a first output paid to an address the miner controls, and a second OP_RETURN output carrying the miner identifier (a…
- **WO2021084347** — Communication protocol using blockchain transactions (2019; full text pinned). An IoT-style first network has bridging nodes (each also a blockchain node) that control devices.
- **WO2021105816** — Methods and devices for automated digital certificate verification (2019; full text pinned). A certificate authority builds a certification transaction: an input signed with the CA key, a first output (P2PKH) to a CA-controlled certification-transaction key, and a second OP_RETURN (or similar) output carrying…
- **WO2021181178** — Revoking access to a network (2020; full text pinned). Each bridging node and device has a certificate stored in its own certificate transaction on the blockchain.
- **WO2022069132** — Physically unclonable functions (2020; full text pinned). In a set-up phase a party applies one or more challenges to a PUF module and stores, in a data store (a blockchain publication medium or a trusted third-party server), response data for each response — the raw response…

## access-control

- **WO2017145001** — Reactive and pre-emptive security system for the protection of computer networks & systems (2016; full text pinned). A data manager maintains a centralised database of traffic data from a community of subscribed users and classifies traffic as normal or attacker using signatures, anomalies, blacklists, scan behaviour, and optionally…
- **WO2017145009** — A method and system for securing computer software using a distributed hash table and a blockchain (2016; full text pinned). A node hashes the software executable to H1, hashes licence-related data D1 together with the executable (or H1) to H2 — H2 may be a Merkle-tree top hash over licence leaves such as D1, the executable, user public keys…
- **WO2017145010** — Secure multiparty loss resistant storage and transfer of cryptographic keys for blockchain based systems in conjunction with a wallet management system (2016; full text pinned). In the illustrative wallet set-up, a private key is split with Shamir’s secret sharing (example: 2-of-3).
- **WO2017145019** — Registry and automated management method for blockchain-enforced smart contracts (2016; full text pinned). The formal contract is stored off-chain (for example in a DHT).
- **WO2017145047** — Blockchain-implemented method for control and distribution of digital content (2016; full text pinned). The first user deposits cryptocurrency to a common P2SH address that needs both users’ signatures to spend.
- **WO2017187396** — Implementing logic gate functionality using a blockchain (2016; full text pinned). A first (“priming”) transaction locks cryptocurrency with a locking script that implements a chosen truth table.
- **WO2017187397** — Operating system for blockchain iot devices (2016; full text pinned). A Blockchain IoT Device (BID) is a thin control component on (or talking to) a networked device that has an IP address and its own public–private key pair.
- **WO2017195161** — A method and system for verifying ownership of a digital asset using a distributed hash table and a peer-to-peer distributed ledger (2016; full text pinned). A first hash (H1) is taken of the software executable and a second hash (H2) of licence-related data plus the software; H2 is the DHT key and D1 plus H1 are the value, optionally with a location pointer.
- **US12026703** — Blockchain-implemented method and system for access control on remote internet- (2016; catalogue only).
- **US12301573** — Accessing an internet of things device using blockchain metadata (2016; catalogue only).
- **WO2019106512** — Computer-implemented systems and methods for enhanced bitcoin wallets (2017; full text pinned). A process-execution component (an interpreter, described as a plug-in or embedded add-on) sits in a digital or cryptocurrency wallet.
- **US20240064008** — Computer implemented method and system for transferring control of a digital (2018; catalogue only).
- **EP3763098** — Methods and systems for controlling access to, and integrity of, resources on a (2018; full text pinned). Participating nodes hold shares of a collective key pair (p, P) and each also has a one-time nodal pair (q_i, Q_i).
- **WO2019220317** — Improved systems and methods for storage, generation and verification of tokens used to control access to a resource (2018; full text pinned). A client and server share a one-way function chain (typically a hash chain).
- **EP3824610** — Accumulator-based protocol for the distribution of tasks across different (2018; full text pinned). A manager publishes trapdoor s and accumulation-tree parameters.
- **US12531743** — Computer-implemented system and method for transferring access to digital (2018; catalogue only).
- **WO2020079534** — Computer-implemented system and method including public key combination verification (2018; full text pinned). Point addition P3 = P1 + P2 is computed off-chain.
- **WO2020110025** — Systems and methods for efficient and secure processing, accessing and transmission of data via a blockchain network (2018; catalogue only).
- **WO2021048663** — Sharing data via transactions of a blockchain (2019; catalogue only).
- **WO2021079225** — Method of using a blockchain (2019; catalogue only).
- **WO2021084347** — Communication protocol using blockchain transactions (2019; full text pinned). An IoT-style first network has bridging nodes (each also a blockchain node) that control devices.
- **WO2021181178** — Revoking access to a network (2020; full text pinned). Each bridging node and device has a certificate stored in its own certificate transaction on the blockchain.
- **WO2021228528** — Multi-layer communication network (2020; full text pinned). IoT (layered-network) nodes sit in an ordered stack: a core of master nodes, each connected to blockchain nodes; one or more intermediate layers; and a device layer of end devices.
- **WO2021239354** — Filtering blockchain transactions (2020; full text pinned). A transmitting party (for example a court or other authority) builds one or more probabilistic filters (Bloom or Cuckoo are described) that encode whitelist or blacklist sets, and sends the filters to a receiving party…
- **WO2021249716** — Generating blockchain addresses (2020; catalogue only).
- **WO2021249717** — File verification system and method (2020; catalogue only).
- **WO2022037879** — Alert account (2020; catalogue only).
- **WO2022069136** — Verification system and method (2020; catalogue only).
- **WO2022136022** — Blockchain related verification method and system (2020; catalogue only).
- **WO2022167165** — Blockchain tree structure (2021; full text pinned). A tree creator still writes each child as a transaction that carries a data payload, its own transaction identifier, and a signature under the parent’s key.
- **WO2022214264** — Uniform resource identifier (2021; catalogue only).
- **WO2022218629** — Blockchain based system and method (2021; catalogue only).
- **WO2022238066** — Multi-party blockchain address scheme (2021; catalogue only).
- **WO2022238067** — Multi-party blockchain address scheme (2021; catalogue only).
- **WO2023072774** — Methods and systems for distributed blockchain functionalities (2021; catalogue only).
- **WO2023073103** — Methods and systems for distributed blockchain functionalities (2021; catalogue only).
- **WO2024110282** — Access control using transactions (2022; catalogue only).
- **WO2024246109** — Portable boot loader using blockchain (2023; catalogue only).
- **WO2025002735** — Blockchain transaction (2023; catalogue only).
- **WO2025108650** — Secure computing environment using blockchain (2023; catalogue only).

## iot

- **WO2017145006** — Agent-based turing complete transactions integrating feedback within a blockchain system (2016; full text pinned). An off-chain computing resource (called the Manager, oracle or bot) runs in parallel with the blockchain and treats the ledger as a Turing machine’s non-erasable tape.
- **WO2017187396** — Implementing logic gate functionality using a blockchain (2016; full text pinned). A first (“priming”) transaction locks cryptocurrency with a locking script that implements a chosen truth table.
- **WO2017187397** — Operating system for blockchain iot devices (2016; full text pinned). A Blockchain IoT Device (BID) is a thin control component on (or talking to) a networked device that has an IP address and its own public–private key pair.
- **WO2017187398** — Implementing logic gate functionality using a blockchain (2016; full text pinned). A first transaction locks coin with a locking script (optionally P2SH) that contains opcodes selected to implement a chosen gate’s truth table.
- **US12301573** — Accessing an internet of things device using blockchain metadata (2016; catalogue only).
- **EP3782104** — Computer-implemented methods and systems for controlling tasks implemented by a (2018; full text pinned). Non-supervisory nodes sit in a cycle with a supervisor.
- **WO2020208580** — Methods and devices for propagating blocks in a blockchain network (2019; catalogue only).
- **WO2021084347** — Communication protocol using blockchain transactions (2019; full text pinned). An IoT-style first network has bridging nodes (each also a blockchain node) that control devices.
- **WO2021181177** — Blockchain transaction double spend proof (2020; full text pinned). The first party builds a transaction spending a previously submitted output, then signs a combination of that transaction (or its identifier) and one or more time indicators — a timestamp and/or current block height —…
- **WO2021181178** — Revoking access to a network (2020; full text pinned). Each bridging node and device has a certificate stored in its own certificate transaction on the blockchain.
- **WO2021228528** — Multi-layer communication network (2020; full text pinned). IoT (layered-network) nodes sit in an ordered stack: a core of master nodes, each connected to blockchain nodes; one or more intermediate layers; and a device layer of end devices.
- **WO2022175001** — Puf and blockchain based iot event recorder and method (2021; catalogue only).
- **WO2022238071** — Wallet application instantiation, keys derivation for signing blockchain transactions using a puf device (2021; catalogue only).

## mining-consensus

- **US11902441** — Systems and methods for parallel verification of blockchain transactions (2017; full text pinned). A node first checks block-level criteria (syntax, proof-of-work, timestamp, size, coinbase rules, and the like).
- **US12452033** — Blockchain for general computation (2017; full text pinned). A requester posts a task and a bounty.
- **US20250005542** — Method and system for selectively using network coding for propagating (2017; full text pinned). A node decides it is a bottleneck when its in-links (fan-in) exceed its out-links (fan-out), either at the moment a first transaction arrives or as averages over time.
- **US12483417** — Computer-implemented system and method enabling secure storage of a large (2017; full text pinned). Miners periodically sample confirmed transactions (optionally with a distribution that favours depth).
- **US12346902** — Rewarded puzzle solution (2017; catalogue only).
- **EP3785204** — Maintaining blocks of a blockchain in a partitioned blockchain network (2018; full text pinned). Each node joins one or more shards.
- **WO2020229949** — Methods and devices for registering and authenticating miner identity in a blockchain network (2019; full text pinned). The miner first broadcasts a validity-check transaction (VCT) with an arbitrary spendable input, a first output paid to an address the miner controls, and a second OP_RETURN output carrying the miner identifier (a…
- **WO2020229950** — Methods and devices for recording work history and proving reputation in a blockchain network (2019; full text pinned). A miner first publishes a validity-check transaction (VCT) with its identifier public key PK_ID in an OP_RETURN output and a spendable output it controls; spending that output revokes the identity.
- **WO2020229922** — Systems and methods for non-parallelised mining on a proof-of-work blockchain network (2019; full text pinned). Miners agree a common, timestamp-ordered set S of exactly N transactions (plus a reward transaction) so they attempt identical candidate blocks.
- **WO2020229925** — Systems and methods for mining on a proof-of-work blockchain network (2019; full text pinned). A committee of three or more independent trusted nodes generates, for each new block cycle, a set of collision-resistant multiparty computational challenges and allocates a different challenge to each miner, optionally…
- **WO2021048661** — Blockchain transactions including portions of code in different languages for complex validation (2019; full text pinned). A first transaction already on the chain has a Script locking script and, in the same or another output (OP_RETURN, OP_PUSHDATA, or OP_DROP), a portion of Turing-complete, non-stack code.
- **WO2021070106** — Methods and devices for secure symbiotic mining (2019; full text pinned). In one embodiment the non-mining node builds a candidate block containing a source transaction (output to itself) and a miner transaction that spends that output to the miner.
- **WO2022268429** — Multi-level blockchain (2021; full text pinned). Users build ML transactions made of carrier pairs: an input and an output at the same index, the output holding secondary-chain data (raw or hashed, often after OP_RETURN) and the input holding a signature that signs…
- **WO2022268430** — Tiered consensus (2021; catalogue only).

## oracles

- **WO2017145005** — Blockchain implemented counting system and method for use in secure voting and distribution (2016; full text pinned). A computing resource called the Manager (an oracle or bot) runs in parallel with the blockchain and treats the ledger as the non-erasable tape of a Turing machine.
- **WO2017145006** — Agent-based turing complete transactions integrating feedback within a blockchain system (2016; full text pinned). An off-chain computing resource (called the Manager, oracle or bot) runs in parallel with the blockchain and treats the ledger as a Turing machine’s non-erasable tape.
- **WO2017145007** — System and method for controlling asset-related actions via a blockchain (2016; full text pinned). An asset is associated with private keys (optionally derived as sub-keys from a controller via a shared generator value and a common secret) and with an off-chain computing agent.
- **EP3574464** — Computer implemented method and system (2017; full text pinned). Each buyer creates three Bitcoin transactions.
- **EP3725031** — System and method for authenticating off-chain data based on proof verification (2017; full text pinned). A cryptographically protected session is opened with a computing entity (data source).
- **WO2021105795** — Provably fair games using a blockchain (2019; full text pinned). An oracle collects user seed data items, a sequence of public keys (from users and/or the oracle), and a list of game elements of the same length as the key sequence.

## voting

- **WO2017145005** — Blockchain implemented counting system and method for use in secure voting and distribution (2016; full text pinned). A computing resource called the Manager (an oracle or bot) runs in parallel with the blockchain and treats the ledger as the non-erasable tape of a Turing machine.
- **WO2017145006** — Agent-based turing complete transactions integrating feedback within a blockchain system (2016; full text pinned). An off-chain computing resource (called the Manager, oracle or bot) runs in parallel with the blockchain and treats the ledger as a Turing machine’s non-erasable tape.
- **EP3740917** — Computer-implemented decision making system and method (2018; full text pinned). Each participant supplies a set of first public keys, one per option on their factor; each key is xG for a secret option x, using the homomorphic property of elliptic-curve scalar multiplication.
- **WO2019166916** — Computer implemented voting process and system (2018; full text pinned). Shares of a first common secret (in the embodiment, shares of a signed blockchain transaction, i.e.
- **WO2020229950** — Methods and devices for recording work history and proving reputation in a blockchain network (2019; full text pinned). A miner first publishes a validity-check transaction (VCT) with its identifier public key PK_ID in an OP_RETURN output and a spendable output it controls; spending that output revokes the identity.

## gaming

- **WO2021105795** — Provably fair games using a blockchain (2019; full text pinned). An oracle collects user seed data items, a sequence of public keys (from users and/or the oracle), and a list of game elements of the same length as the key sequence.
- **WO2021105796** — Provably fair games using a blockchain (2019; catalogue only).
- **WO2024193952** — Determining a system state using a blockchain (2023; catalogue only).
- **WO2024193954** — Determining a system state using a blockchain (2023; catalogue only).

## genomics

- **WO2021048662** — Genetic data in transactions (2019; full text pinned). An electronic document (itself optionally stored in a source transaction) contains pointers — each a transaction identifier, and for target data optionally a hyperlink with anchor content — to destination transactions.

## physically-unclonable-functions

- **WO2022069133** — Authentication system and method (2020; full text pinned). A PUF module (optionally an “expanded PUF”: a weak base PUF plus a hash transform that folds a secondary challenge with the primary response) produces a response from a challenge.
- **WO2022069134** — Physically unclonable functions storing response values on a blockchain (2020; catalogue only).
- **WO2022069135** — Physically unclonable functions storing response values on a data store (2020; catalogue only).
- **WO2022069137** — Challenge-response protocol based on physically unclonable functions (2020; catalogue only).
- **WO2022175001** — Puf and blockchain based iot event recorder and method (2021; catalogue only).

## miscellaneous

- **SG11202010346T** — Computer-implemented systems and methods for using a blockchain to perform an (2018; catalogue only).
- **WO2020178752** — Method of using a blockchain (2019; catalogue only).
- **WO2023072948** — Methods and systems for distributed blockchain functionalities (2021; catalogue only).
- **WO2023072955** — Methods and systems for distributed blockchain functionalities (2021; catalogue only).
- **WO2023072959** — Methods and systems for distributed blockchain functionalities (2021; catalogue only).
- **WO2023104405** — Blockchain script engine (2021; catalogue only).
- **WO2023117230** — Blockchain transaction (2021; catalogue only).
- **WO2023156101** — Blockchain transaction (2022; catalogue only).
- **WO2024041862** — Blockchain transaction (2022; catalogue only).
- **WO2024041866** — Blockchain transaction (2022; catalogue only).
- **WO2024052322** — Methods and systems for improved communications across a blockchain network (2022; catalogue only).
- **WO2024175458** — Sending and receiving blockchain data (2023; catalogue only).
- **WO2024189003** — Computer-implemented methods and systems for obtaining or using svd-based assets on a blockchain (2023; catalogue only).
- **WO2024189006** — Computer-implemented methods and systems for obtaining or using svd-based assets on a blockchain (2023; catalogue only).
- **WO2024199877** — Block production (2023; catalogue only).
- **WO2025021475** — Computer-implemented methods and systems (2023; catalogue only).
- **WO2025131380** — Deterrent blockchain transaction (2023; catalogue only).
