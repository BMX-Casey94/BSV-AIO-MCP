---
title: 'How to make a brain wallet'
date: 2019-03-27
slug: how-to-make-a-brain-wallet-a8040b7c1993
url: https://medium.com/@craig_10243/how-to-make-a-brain-wallet-a8040b7c1993
themes: [wallets-keys, security-economics, btc-critique]
---

# How to make a brain wallet
**Date:** 2019-03-27 | **URL:** https://medium.com/@craig_10243/how-to-make-a-brain-wallet-a8040b7c1993
**Subtitle:** In the past, a concept known as a brain wallet was common. It is something that has a lot of value and yet has been overlooked because of…

## Core thesis
Brain wallets — condemned by the Bitcoin wiki and Core — can be "completely secure" if entropy is matched to the value stored and the *process* of deriving the key is itself kept secret. Craig puts money behind the claim: he publishes the construction clues and even the hash pipeline for a live brain wallet holding 50 BTC (then ~USD250,000), and guarantees nobody will take a single coin, mocking the security-maximalist "high priests" of the industry.

## Key arguments and claims
- "A brain wallet is not a password and should never be treated as one"; security should be proportional — "If you are storing millions of dollars in a single key, then a simple 12-word brain wallet is a very bad idea. If you are storing USD50 worth of value, not many people are going to seek to crack your passphrase."
- Against absolutism: "the cranks in the industry love to tell you that you must have perfect security for everything. Seeking such an end is completely wrong"; "Right now, we still cannot crack 20-character passwords with a few special characters, not in reasonable times. And by reasonable times I mean decades."
- The challenge wallet: a key controlling 50 bitcoin "before any split", never spent; clues involve transposing footnote numbers (1547 → 1754), a Roman numeral (XXX = 30) summed to 1784, the All England Law Reports for that year, note 13 of a case chosen via knowledge that "Earl Cowper translated the Iliad" and "had a relationship with the Newton family".
- The derivation formula: "the first 80 words of the first book I transposed with seven sentences from the reference at point 13 followed by nine sentences of the second image. Every sixth word is deleted from the second, as is every eighth word from the third."
- Hash pipeline revealed: start with SHA512, split the output; hash the first 256 bits with SHA1 and the second 256 bits with RipeMD160; concatenate and hash into the key with SHA256. "Everyone assumes that it must just be hashed using SHA256. Well the assumption is not correct."
- Claims superiority: "there is more entropy in such a simple scheme than there is in any deterministic wallet created by Core."
- Worked example with "Who is John Galt?": hash each word alternately with SHA1/SHA256 (H1–H4), then compute SHA256[SHA512(H1||H2||H3||H4)] — "the process itself is part of the secret".
- Taunt-as-proof: "Run through every combination you can find as you won't be stealing; I'm telling you, it's a prize"; he links the rya.nc brainwallet-cracking paper and the Defcon brainwallet-cracker announcement, dismissing their authors as "high priests protecting the security of everything through their magic numbers".

## How Craig reasons (his model/logic)
Risk-based security economics rather than binary safe/unsafe thinking: entropy requirements scale with value at risk and with realistic attacker effort ("decades"). The method is constructive proof by public bounty — he stakes 50 BTC on his construction — combined with obscurity-as-a-layer reasoning (secret process plus secret source texts). Rhetorically it is adversarial and theatrical: literary puzzles (Cowper, Newton, the Iliad, Atlas Shrugged) double as both the key material and a display of erudition aimed at belittling "monkeys" and "cranks".

## Where this contradicts BTC-mainstream logic
- Directly defies the Bitcoin wiki's injunction against human-generated passphrases and the community consensus (post-Defcon brainwallet-cracking demos) that brain wallets are categorically broken.
- Attacks BIP32-style deterministic/HD wallet orthodoxy by claiming his hand-rolled scheme has more entropy "than... any deterministic wallet created by Core".
- Rejects the security community's perfect-security absolutism in favour of economic proportionality — heresy to the "assume state-level attackers" posture common in BTC custody discourse.
- Implicitly endorses security-through-obscurity as a valid layer, contradicting the open-security/Kerckhoffs-principle instincts of mainstream cryptography culture.

## Notable quotes
- "A brain wallet is not a password and should never be treated as one."
- "The strength of a brain wallet should be related to the information and value being stored."
- "There is more entropy in such a simple scheme than there is in any deterministic wallet created by Core."
- "Run through every combination you can find as you won't be stealing; I'm telling you, it's a prize."
- "The process itself is part of the secret."

## Connections
Links out to the rya.nc "Cracking Cryptocurrency Brainwallets" paper and the 2015 Defcon brainwallet-cracker Reddit thread as the orthodoxy he is rebutting. The anti-Core custody critique complements the same week's protocol essays ("Forks as a demerger", "Peer-to-peer digital electronic cash"); the 50 BTC "before any split" phrasing nods to the BCH/BSV fork era in which the post sits.
