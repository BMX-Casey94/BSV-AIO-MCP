---
title: "Short paths, uneven connections"
date: 2026-10-07
slug: short-paths-uneven-connections
url: https://craigwright.net/short-paths-uneven-connections
themes: [networking, governance-decentralisation]
---

# Short paths, uneven connections
**Date:** 2026-10-07 | **URL:** https://craigwright.net/short-paths-uneven-connections | **Source:** craigwright.net research article

## Core thesis
The article argues that the number of nodes tells how large a network sample is, while the connections reveal routes between nodes, the concentration of links, and the evidence needed to explain how that structure arose. It is a new account of the author’s 2018 paper with Marco Alberto Javarone, using three historical samples of Bitcoin and Bitcoin Cash, and it limits what a topology measurement can support. The page says it discusses historical samples and preliminary findings, and that the follow-on study it sketches is a proposed research design rather than a report of new results.

## Key arguments and claims
- The opening image is two networks with the same number of machines. In one, each machine connects only to its immediate neighbours around a ring. In the other, additional links join distant parts of that ring. The inventory is unchanged, but a message may have a much shorter route. Counting machines is said to leave open the question of how they are connected.
- The 2018 paper, *From Bitcoin to Bitcoin Cash: a network analysis*, approached that question through three historical samples. Bitcoin was observed in April 2016; Bitcoin Cash in August and December 2017. The reported datasets contained 7,025, 963 and 1,454 nodes respectively. They were partial observations collected through connected machines and address discovery.
- In an unweighted graph, shortest-path distance counts the fewest links between two nodes. Clustering asks how densely the neighbours of a node are connected to one another. The article says these quantities capture different aspects of proximity: local connectedness and the routes across the wider structure.
- The small-world model of Duncan Watts and Steven Strogatz is cited, with a link to the Nature article, for the claim that strong local clustering can coexist with short characteristic paths, and that in their construction rewiring some connections supplies shortcuts while much of the local structure survives. The page text does not state a year for that paper.
- The samples had reported average shortest paths of roughly 1.7–1.8 links and clustering coefficients of roughly 0.49–0.58. The 2018 paper treated these as suggestive of small-world behaviour and left comparison with matched random graphs for further investigation. These measurements are said to describe the sampled graphs at their historical observation dates.
- Network models are presented as candidate mechanisms. The article cites Barabási and Albert’s preferential-attachment model, linking to arXiv cond-mat/9910332, for a growing network that favours links to nodes that already have many connections, so that success in attracting links can reinforce itself as new nodes arrive. The page text does not state a year in prose.
- Bianconi and Barabási’s fitness-based framework is cited, linking to arXiv cond-mat/0011224. It allows nodes to differ in their ability to compete for connections, so that a sufficiently attractive newcomer can gain ground despite arriving later. Fitness is called a modelling parameter; applying it to machines requires an account of which resources or behaviours it represents.
- The 2018 paper proposed resource-dependent fitness as a possible explanation for uneven outgoing connectivity. The article says it did not estimate node fitness or identify a causal effect of resources on connections.
- Clauset, Shalizi and Newman’s work on empirical power laws is cited, linking to arXiv 0706.1062, for a distinction among parameter estimation, goodness-of-fit testing and comparison with competing distributions. A fitted curve alone cannot complete those steps. The 2018 paper explicitly called for further goodness-of-fit analysis. Its proposed growth mechanism remains a hypothesis.
- A follow-on study could separate three tasks: document what the observation method can see and what a recorded connection means; collect comparable observations over time; and test whether measured changes in resources help explain changes in connectivity after accounting for alternative mechanisms. The page calls this a proposed research design, rather than a report of new results.
- A node-level graph cannot, by itself, identify the people or organisations operating its nodes. An assessment of independent control needs additional evidence about operators and the decisions being studied. A route containing few links leaves transmission and processing time unspecified. Turning graph distance into a performance assessment requires measurements of those delays, the workload and the relevant operating conditions. A security assessment must also say which failures or adversarial actions it considers.
- The methodological lesson stated is to record the observed network, examine its structure, test explanations for that structure, and then ask which operational questions the measurements can support.
- Bibliographic claim: Marco Alberto Javarone and Craig Steven Wright (2018), *From Bitcoin to Bitcoin Cash: a network analysis*, CryBlock ’18, 1st Workshop on Cryptocurrencies and Blockchains for Distributed Systems, Munich, 15 June 2018, DOI 10.1145/3211933.3211947. The page links to arXiv:1804.02350v2. This explanatory article was published on 7 October 2026.

## How Craig reasons (his model/logic)
He separates a count of machines from the arrangement of their links, then reports two measurements — shortest paths and clustering — only as descriptions of three partial historical samples. Preferential attachment and fitness are introduced as candidate mechanisms, and resource-dependent fitness is left as a hypothesis the 2018 paper did not estimate or identify as a cause. Goodness-of-fit is named as unfinished work. Graph distance is then refused as a stand-in for operator identity, delay or security unless those further facts are measured. The page marks the follow-on design as a proposal.

## Where this contradicts BTC-mainstream logic
The article does not set up an explicit contrast with BTC-mainstream positions.

## Notable quotes
- "Counting machines leaves an important engineering question open: how are they connected?"
- "A fitted curve alone cannot complete those steps."
- "A node-level graph cannot, by itself, identify the people or organisations operating its nodes."

## Connections
The page names the related article “Four clocks inside proof of work”, written up in this folder as [four-clocks-of-proof-of-work.md](four-clocks-of-proof-of-work.md). Its stated source is Javarone and Wright (2018), with the Watts and Strogatz, Barabási and Albert, Bianconi and Barabási, and Clauset, Shalizi and Newman works linked in the text. The page does not cite another essay in the local corpus.

*Summary of the author's own account; claims are his and have not been independently verified.*
