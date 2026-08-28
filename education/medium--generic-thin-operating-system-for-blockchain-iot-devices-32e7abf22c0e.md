---
title: "Generic Thin Operating  System for Blockchain IOT Devices"
era: medium
date: 2019-02-03
slug: generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e
themes: [micropayments, networking, scaling-throughput, security-economics]
source_summary: summaries-medium/generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e.md
url: https://medium.com/@craig_10243/generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e
---

# Generic Thin Operating  System for Blockchain IOT Devices — core principles

- **Thin devices, chain control.** An IoT device needs no embedded instructions: it holds only cryptographic primitives and the ability to retrieve programs securely from an external repository such as a DHT, with the blockchain as control channel, audit log and payment rail. A device that holds no instructions cannot be reverse-engineered.
- **Sensors watch the ledger, not a command server.** Devices send to and monitor the blockchain directly and never interact with a command system; monitor keys are derived keys, so an external attacker cannot even learn which keys are in use. There is no central command system to compromise.
- **UTXO state drives physical logic.** Device actions are gated on-chain: an auto-feeder dispenses only when an XOR truth table over the dogs' RFID collars holds and a valid UTXO confirms the previous related UTXO was spent — feeding counts, times and allocations become auditable ledger records.
- **Rotate secrets per interaction.** Control agents cycle secret values (puzzle solutions versus random numbers) with the device, so each command epoch uses fresh cryptographic material; secret-sharing calculations are among the device's primitives.
- **Machine traffic is the fee base.** Tens of billions of devices each making many small transactions and saving and accessing data keep miners profitable as the subsidy declines — volume, not congestion, funds security. This is the economic case for unbounded blocks.
- **Costed data creates information markets.** The big issue in IoT is valuing data: when data has a price, a micropayment rail on every device lets an IFTTT-class automation market exist without any company in control.
- **One ledger, one curve.** The architecture runs entirely on Bitcoin's elliptic-curve security and single ledger rather than on bespoke IoT tokens or chains.
