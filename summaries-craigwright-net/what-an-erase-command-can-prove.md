---
title: "What an erase command can prove"
date: 2026-10-18
slug: what-an-erase-command-can-prove
url: https://craigwright.net/what-an-erase-command-can-prove
themes: [security-economics, audit-accounting]
---

# What an erase command can prove
**Date:** 2026-10-18 | **URL:** https://craigwright.net/what-an-erase-command-can-prove | **Source:** craigwright.net research article

## Core thesis
The article argues that an erasure claim needs a defined target, a recovery threat, and evidence that the operation reached the relevant storage. A successful completion message, it says, answers only part of that question. The decision to release a device depends on which uncertainty the procedure has actually reduced.

## Key arguments and claims
- The laboratory scene is hypothetical. A technician runs an erasure tool, receives a successful completion message, and records the drive as ready for reuse. The article says what the laboratory has learned depends on the relationship between the command, the physical storage, and the information it intended to remove.
- It cites Craig Wright, Dave Kleiman and Shyaam Sundhar R.S. (2008), *Overwriting Hard Drive Data: The Great Wiping Controversy*, ICISS 2008, Lecture Notes in Computer Science 5352, pp. 243–257, doi:10.1007/978-3-540-89862-7_21. The article says the paper examined claims about recovering overwritten hard-drive data and the supposed need for many overwrite passes, and that the publisher's abstract identifies head positioning and residual magnetic information as central to that debate. It says the paper belongs to a particular technological setting, and that a claim about magnetic recording cannot become a guarantee about every device that presents a familiar disk interface. The sources note says this account of the 2008 paper is limited to its public publisher record and abstract.
- Peter Gutmann's 1996 secure-deletion paper, and what the article calls the later commentary and epilogue, is used for a related distinction. The article says the well-known 35-pass sequence combined patterns aimed at several recording technologies, and that the epilogue rejects treating the entire sequence as a universal ritual irrespective of the encoding actually used. It says his further commentary separates magnetic media from solid-state drives: repeating a host-level write does not establish that every earlier physical location was reached, because the flash translation layer can place new writes elsewhere while older physical contents remain outside the address space exposed to ordinary software.
- Michael Wei, Laura M. Grupp, Frederick E. Spada and Steven Swanson are cited for a 2011 USENIX study of SSD sanitisation (FAST 2011, as the sources note names it). The article says they inspected raw flash contents after applying erasure techniques, rather than relying only on what the drive returned through its normal interface. In their tested devices, it says, built-in sanitisation commands could work, but some implementations were incorrect; overwriting the entire visible address space twice usually succeeded, yet did not always do so; and the hard-drive-oriented individual-file techniques they examined failed to sanitise those SSDs. These are described as historical findings limited to the tested hardware and methods. The article says they do not supply a failure rate for present-day drives.
- NIST SP 800-88 Revision 2, which the article says was published in September 2025, doi:10.6028/NIST.SP.800-88r2, is described as framing sanitisation around making recovery infeasible at a specified level of effort, and as distinguishing verification of an operation's outcome from validation of whether that outcome adequately protects the target data. The article says a successful status can leave the choice or scope of the method unresolved. It says Sections 4.5.1–4.5.2 address completion, errors, anomalies and suitability, and that Revision 2 does not require elaborate post-erasure content sampling unless organisational policy requires it.
- On cryptographic erasure, the article says Sections 3.2.2–3.2.3 require attention to prior plaintext storage and all relevant key copies. Removing one key, it says, cannot support a complete confidentiality claim while another usable copy survives. The history of encryption and key management becomes part of the erasure assessment.
- Returning to the hypothetical record of a device identifier, elapsed time and the word "successful", the article says those fields may be accurate while still leaving the release decision difficult to audit. It treats the next question as where an additional unit of checking changes the decision. If the uncertainty is an inaccessible storage region, another observation of the same visible region may add little. If it is an unexamined implementation, a longer runtime alone supplies no direct evidence about that implementation. The article calls this an inference from the distinctions above, not a new measured result.
- A useful comparative study, as the article describes it, would state the device and firmware population, the target data, the permitted recovery effort and the acceptance rule before testing; record incomplete operations and ambiguous outcomes alongside successful ones; and compare total effort with the assurance actually established. It says no such new experiment is reported. The sources note calls the laboratory example and proposed comparison explanatory analysis, not a new experiment or a device-specific erasure procedure. The page date in that note is 18 October 2026.

## How Craig reasons (his model/logic)
The article carries one question through changing hardware. It starts from a completion message, limits the 2008 paper to the magnetic-recording debate described in its public abstract, uses Gutmann to tie a method to the encoding and medium it assumed, uses the 2011 flash study to separate the host interface from the storage beneath it, and uses NIST to separate a completed operation from an adequate one. The closing inference is about where further checking would change a release decision. Each source is fenced to the claim the article says it can support.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "An erasure claim needs a defined target, a recovery threat and evidence that the operation reached the relevant storage."
- "A familiar operation name does not preserve the underlying hardware."
- "A successful status can therefore leave the choice or scope of the method unresolved."

## Connections
The article cites Wright, Kleiman and Sundhar R.S. (2008), Gutmann's 1996 paper and subsequent epilogues, Wei et al. (FAST 2011) and NIST SP 800-88 Revision 2. On the same site it links [The time before discovery](the-time-before-discovery.md) and [The work after the code](the-work-after-the-code.md). No matching essay was found in the earlier Substack and Medium corpus.

*Summary of the author's own account; claims are his and have not been independently verified.*
