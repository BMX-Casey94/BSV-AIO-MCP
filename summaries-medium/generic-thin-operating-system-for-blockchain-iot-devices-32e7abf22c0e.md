---
title: 'Generic Thin Operating  System for Blockchain IOT Devices'
date: 2019-02-03
slug: generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e
url: https://medium.com/@craig_10243/generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e
themes: [micropayments, networking, scaling-throughput, security-economics]
---

# Generic Thin Operating  System for Blockchain IOT Devices
**Date:** 2019-02-03 | **URL:** https://medium.com/@craig_10243/generic-thin-operating-system-for-blockchain-iot-devices-32e7abf22c0e
**Subtitle:** Continuing the series of posts related towards concepts that an entrepreneur could develop into a profitable business and company, we will…

## Core thesis
Part of a series pitching blockchain business ideas an entrepreneur could build, this essay proposes a "thin" generic operating system for IoT devices that is controlled through the Bitcoin blockchain rather than by embedded software, based on nChain patent WO 2017/187397 A1. Devices carry no instructions of their own; they securely retrieve programs from external repositories (DHTs) using cryptographic keys, with the blockchain acting as control channel, audit log and payment rail. Craig concludes that tens of billions of such devices generating "many small transactions" will keep miners profitable — his recurring economic case for unbounded on-chain scaling.

## Key arguments and claims
- IoT devices "may be extremely small and contain only limited processing and memory capacity", so a generic, minimal OS loadable into any device with strong security is needed; interfacing IoT to "the Bitcoin-blockchain protocol" achieves control plus payment processing.
- "The Metanet is the network of everything": "Sensors send to and watch the blockchain. They do not ever interact directly with a command system", and monitor keys are derived keys so "an external attacker would not even know what keys are used".
- Key elements: a purposefully thin OS; upgradeability because device-specific function "is not hard-coded into the device, but rather loaded in from a secure repository such as a DHT"; management by autonomous agents; blockchain interfacing for payments; "Robust security (based on the Bitcoin ECC)".
- A "blockchain IOT device" (BID) "does not contain its own instructions embedded, and does not 'know' what it does or how to do it; it only contains a way to securely retrieve instructions" — its embedded actions are limited to cryptographic calculations, fetching instructions from a DHT, and simple physical actions like toggling switches.
- All BID communications are encrypted per "invention #42" (EP3268914B1), yielding "(i) greater security from hacking (ii) simple universal software-upgrade protocols (iii) device agnosticism"; secret-sharing-protocol calculations are among the device's primitives.
- Worked example: Carol's dogs Archimedes and Bertrand wear RFID collars; an auto-feeder BID uses an XOR truth table (dispense only if exactly one dog is present), checks "a valid UTXO indicating that the previous related UTXO has been spent" to guarantee the feeding event was recorded, then rotates secret values S1/S2 (puzzle solutions vs random numbers) with a control agent.
- The blockchain is "not only as the control mechanism but also to record information" — feeding counts, times, which dog ate, maximum allocations — giving cryptographic security and auditability.
- Commercial framing: "The big issue in IOT is valuing data — trust me when I say, people start to set the value of data and create information where there is a cost."
- Market claim: "With 50 billion IOT devices expected to be online in the next 5 years, there is an opportunity"; the system "can easily port anything that IFTTT does, but without a company in control".
- Miner economics: "50 billion machines each making many small transactions and saving and accessing data to and from the ledger… I think the miners will be just fine."

## How Craig reasons (his model/logic)
Patent-exposition mode: he walks through his own nChain patent claims, translating legal-technical language into an architecture sketch, then grounds it with a concrete toy example (the dog feeder with its XOR truth table) before zooming out to market size and miner revenue. The logic is security-by-removal — a device that holds no instructions cannot be reverse-engineered — combined with his signature argument that costed data and machine-generated fee volume, not scarcity, secure the network.

## Where this contradicts BTC-mainstream logic
- Contradicts the small-block orthodoxy that non-monetary data and machine traffic do not belong on-chain: he wants billions of devices reading and writing the ledger directly, with miners paid by volume rather than by a congested fee market.
- Contradicts the "blockchain is only a settlement layer" view (used to justify Lightning): here the chain is a real-time control and sensor-monitoring plane for physical devices.
- Contradicts the trustlessness-purist framing of "no company in control": his disintermediated IFTTT alternative is built on patented nChain methods and hierarchical derived keys — control is relocated into key management and IP, not abolished.
- Contradicts the era's "IoT needs its own token/chain" trend (IOTA etc.): everything runs on the one Bitcoin ledger and ECC.

## Notable quotes
- "The Metanet is the network of everything."
- "Sensors send to and watch the blockchain. They do not ever interact directly with a command system."
- "the BID does not contain its own instructions embedded, and does not 'know' what it does or how to do it; it only contains a way to securely retrieve instructions."
- "The big issue in IOT is valuing data — trust me when I say, people start to set the value of data and create information where there is a cost."
- "we can easily port anything that IFTTT does, but without a company in control."
- "50 billion machines each making many small transactions and saving and accessing data to and from the ledger… I think the miners will be just fine."

## Connections
Explicitly a member of his entrepreneur/business-ideas series and an early public use of "Metanet" (developed further in "The start of Metanet", 14 Feb 2019). Built on nChain patents WO 2017/187397 A1 (IoT OS), EP3268914B1 ("invention #42", secure split-key/secret sharing — see "Secure wallet systems", 10 Feb 2019) and WO 2017145009A1 (XOR logic).
