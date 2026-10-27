---
title: "The work around the quantum circuit"
date: 2026-10-21
slug: the-work-around-the-quantum-circuit
url: https://craigwright.net/the-work-around-the-quantum-circuit
themes: [quantum-scepticism]
---

# The work around the quantum circuit
**Date:** 2026-10-21 | **URL:** https://craigwright.net/the-work-around-the-quantum-circuit | **Source:** craigwright.net research article

## Core thesis
The article argues that a faster quantum routine becomes a practical gain when the work surrounding it can deliver a useful, sufficiently reliable answer at a competitive cost, and that this surrounding work belongs inside the comparison. Moving from what can be computed to what the completed result is worth, it says, requires evidence about the system that connects those questions.

## Key arguments and claims
- Craig S. Wright (2026), *From Quantum Speedup to Practical Advantage*, *Innovative Journal of Applied Science*, 3(5), article 55. The article says the publisher identifies it as a Mini-Review, published 14 October 2026, and links to https://www.ijas.meteorpub.com/1/article/view/182 and to an open-access PDF at https://www.ijas.meteorpub.com/1/article/download/182/83. This commentary is dated 21 October 2026. The article says the mini-review separates four questions: what can be computed, how efficiently an algorithm operates, what a reliable machine must do, and what the completed result is worth.
- The article says a quantum state has a mathematical description whose size can grow exponentially with its number of qubits, and that measurement gives access to particular outcomes. The mini-review, as this article reports it, treats Grover’s search algorithm and Shor’s factoring algorithm as genuine algorithmic achievements, and explains why the size of a state space does not supply a freely readable collection of all possible answers. A proposed application must identify its output: a sample, an estimate of an observable, a candidate solution or some other specified result. Estimating an average to a stated accuracy may require repeated measurements. A candidate solution may need a separate check. The article says a useful comparison carries those requirements into both the quantum and classical routes.
- Deliberately hypothetical calculation with matching inputs, output requirements and reliability. The article says these are invented timings, not measurements of a processor or an estimate for a particular algorithm. Both routes spend 20 seconds on common preparation and checking. The classical route then spends 80 seconds on its computational routine, for a total of 100 seconds. A quantum routine takes four seconds, and its route also needs 90 seconds of additional state preparation, repeated sampling and readout. Assume these stages run sequentially and that none is already included in the common 20 seconds or the four-second routine: the total becomes 114 seconds. The computational routine is twenty times faster; the complete route takes fourteen per cent longer. If the additional work were smaller, reusable or overlapped with other stages, the conclusion could change. A setup cost incurred once for a batch has a different effect from a cost incurred for every answer. A benchmark should report the batch size and the reuse it assumes.
- Tomislav Begušić, Johnnie Gray and Garnet Kin-Lic Chan (2024), *Fast and converged classical simulations of evidence for the utility of quantum computing before fault tolerance*, *Science Advances*, 10, eadk4321; the article links to DOI 10.1126/sciadv.adk4321. As the article reports that study: observables from a particular 127-qubit kicked-Ising experiment; approximate classical methods reproduced the studied observables faster than the quantum experiment and could converge beyond its reported experimental accuracy. The article says the result concerns specified observables and circuits, does not establish that every quantum computation can be replaced efficiently, and does show why exceeding a brute-force classical method is an incomplete comparison when a more suitable classical method can answer the actual question. A benchmark therefore needs a date, a workload, an accuracy target and an account of the methods considered. Improvements on either side can change the result.
- The article says the mini-review rejects a categorical impossibility claim about scalable fault tolerance. It recognises Google Quantum AI and Collaborators’ below-threshold quantum-memory experiments as substantive progress, while distinguishing a demonstrated memory from the complete operations required by an application-scale computer. The sources box identifies that paper as *Quantum error correction below the surface code threshold*, *Nature*, 638 (2025), 920–926, published online 9 December 2024; the article links to https://www.nature.com/articles/s41586-024-08449-y. An assessment, the article says, has to leave room for evidence that changes its premises.
- Proposed evaluation, which the article calls explanatory analysis. Start with a named task and an explicit acceptance test. Record preparation, compilation, calibration, correction or mitigation, sampling, decoding and verification where they apply. Identify which costs are shared, repeated or amortised. Compare elapsed time, energy and financial cost separately before making an economic judgment, because they measure different consequences. If an exact classical calculation is too expensive, the evaluation still needs a justified way to assess the required output. The sources box says the article reports no new hardware experiment, commercial speedup or general impossibility result.

## How Craig reasons (his model/logic)
The article takes a mini-review’s four questions as the frame, then uses an invented serial timing to show a routine that is faster while the complete route is longer. A 2024 classical-simulation paper supplies the reason a brute-force classical baseline can be the wrong comparator, limited to the observables and circuits that paper studied. Google Quantum AI’s memory experiments are admitted as progress and kept distinct from an application-scale computer. The close is a measurement list — time, energy and financial cost kept separate — and an acceptance test for the output when an exact classical check is too expensive. The timings are labelled as invented, and no new hardware result is claimed.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "A faster quantum routine becomes a practical gain when the work surrounding it can deliver a useful, sufficiently reliable answer at a competitive cost."
- "The computational routine is twenty times faster; the complete route takes fourteen per cent longer."
- "An assessment has to leave room for evidence that changes its premises."

## Connections
The article cites the 14 October 2026 mini-review, Begušić, Gray and Chan (2024) and Google Quantum AI and Collaborators (*Nature*, 638 (2025), 920–926). Its related-research link points to `too-new-to-judge.html` on the same site; that page was not fetched. No file under `summaries/` is cited by this article.

*Summary of the author's own account; claims are his and have not been independently verified.*
