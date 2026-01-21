---
outline: deep
---

# Abelian Proof-of-Work (PoW) Mining FAQ

## Overview

We appreciate these questions and are happy to take this opportunity to address them while sharing more about the Abelian project's Hybrid Proof-Work (PoW) roadmap.

Following the Aconcagua Fork, the Abelian network now operates with two quantum-resistant PoW mining algorithms running simultaneously: ABEL-ETHash and ABEL-Nakamoto. The consensus protocol dynamically balances the two, with approximately half of all blocks mined using ABEL-ETHash and the other half using ABEL-Nakamoto.

The Abelian team's long-standing goal has been to maximize decentralization and security by empowering the community to build, grow, and secure the network and its applications together.

To that end:
- **ABEL-ETHash** is designed to be GPU-friendly. While CPUs can still mine and earn ABEL rewards, a typical GPU outperforms a CPU by 100x or more. In contrast, FPGAs or ASICs do not offer comparable cost-effectiveness for this algorithm.
- **ABEL-Nakamoto** is optimized with FPGA or ASIC mining in mind. FPGAs (initially) and later dedicated ASICs make the most sense for efficient mining on this algorithm.

---

### Is FPGA mining a temporary engineering phase or a long-term mining approach? <sup style="font-size: 0.6em;">`QUESTION`</sup>

::: info <span style="font-size: 1.2em;">`Answer`</span>

The project's FPGA/ASIC research and development efforts are focused exclusively on ABEL-Nakamoto mining. By open-sourcing the ABEL-Nakamoto code, we aim to support and encourage the community to develop quantum-resistant mining hardware for this algorithm. These efforts do not apply to ABEL-ETHash.

:::

---

### Is the ABEL-Nakamoto algorithm locked in, or could it change for hardware compatibility? <sup style="font-size: 0.6em;">`QUESTION`</sup>

::: info <span style="font-size: 1.2em;">`Answer`</span>

The ABEL-Nakamoto algorithm was successfully deployed during the Aconcagua Fork. As its name suggests, it is a quantum-resistant adaptation derived directly from Bitcoin's original Nakamoto PoW algorithm. As a result, existing Bitcoin mining hardware is not compatible with ABEL-Nakamoto. There are no plans to alter this incompatibility in the future—any change to the algorithm itself would require a hard fork and quantum resistance is the fundamental and mandatory requirement for Abelian.

The introduction of this hybrid/dual-mining approach is intentional: it allows the network to harness both GPU-friendly and ASIC-friendly computational resources, thereby achieving a higher degree of decentralization and security. The Abelian project intends to maintain this dual-mining model long-term. We strongly encourage the community to contribute GPU resources to ABEL-ETHash mining while inviting hardware builders to develop FPGA and ASIC solutions for ABEL-Nakamoto mining.

:::

---

### Will the project hand over mining operations to the community and third-party manufacturers? <sup style="font-size: 0.6em;">`QUESTION`</sup>

::: info <span style="font-size: 1.2em;">`Answer`</span>

Yes, we fully affirm our commitment to decentralization. The last thing the Abelian project wants is for the majority of computational power to come from the core team itself. Our mining roadmap is deliberately designed in the direction of maximizing decentralization and quantum-resistant security: we actively invite the community to contribute hash power and earn ABEL rewards in return.

In practice, ABEL-ETHash mining is already driven by individual miners, and as of this writing, with GPU cards participating from 32 countries around the world.

For ABEL-Nakamoto, the dedicated mining pool server at <https://abel-nakamoto.xyz> is now live. The first batch of 20 limited-edition R&D mining machines exclusive for ABEL-Nakamoto will be available soon. We warmly invite community hardware builders to join us in developing quantum-resistant mining machines to further decentralize ABEL-Nakamoto mining.

:::

---

### Is there an officially recognized ASIC development pathway for ABEL-Nakamoto? <sup style="font-size: 0.6em;">`QUESTION`</sup>

::: info <span style="font-size: 1.2em;">`Answer`</span>

Builders interested in creating ASIC machines for ABEL-Nakamoto should refer to the reference implementation in our open-source repository:
<https://github.com/pqabelian/abec/tree/main/blockchain/consensus>

We look forward to continued collaboration with the community to strengthen the network's security and decentralization.

:::