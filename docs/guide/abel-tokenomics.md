---
title: ABEL Tokenomics
description: ABEL is the symbol of the native token of the Abelian Mainnet, and is mined during the creation of each block.
head:
  - - meta
    - name: keywords
      content: Abelian Tokenomics, ABEL Tokenomics, quantum resistant blockchain, post quantum, quantum resistant, quantum safe
---

# ABEL Tokenomics

## ABEL Tokenomics

The Mainnet of Abelian Blockchain was launched in April 2022. ABEL is the symbol of the native token of the Abelian Mainnet, and is mined during the creation of each block.

## Supply

**Total supply:** 225.18 million ABELs or 2<sup>51</sup>−1 Neutrinos where 1 ABEL = 10,000,000 Neutrinos.

**Pre-mined:** 20.58 million ABELs in the Genesis Block, accounting for 9.14% of the total supply. These tokens are allocated for fundraising, community development, and marketing.

The remaining 204.6 million ABELs (90.86% of total supply) will be mined by the community.
- The block frequency is set to 256 seconds.
- There is a total of 10 eras. The first era is defined by 400,000 blocks, while the remaining 9 eras are defined by 800,000 blocks each. Hence, the total expected mining period is approximately 61.66 years.
- In the first era, each block reward is 256 ABELs, resulting in 102.4 million ABELs created during this period.
- The block reward for the first era is 256 ABELs. The starting block reward for the second era is 64 ABELs. Subsequent eras halve the reward until it reaches 0.25 ABELs (e.g., the reward for the third era is 32 ABELs).
- On the PoW difficulty adjustment, Abelian has introduced a Difficulty Smoothing Algorithm (DSA) for rapid adjustment even during significant hashrate fluctuations. Every 200 blocks constitute one slot. At the beginning of each slot, the PoW difficulty is adjusted based on the weighted hashrate of the previous 20 slots, which constitute one epoch, which has 4,000 blocks. For more information about DSA, please refer to <https://download.pqabelian.io/release/docs/abelian_difficulty_smoothing_algorithm_whitepaper.pdf> or a short summary at <https://www.pqabelian.io/blog/exploring-the-abelian-difficulty-smoothing-algorithm-dsa>

![ABEL Supply Chart](/tokenomics/ABEL-Supply.png)

## Reference link

- [AIP0012 - Token Release Schedule](https://github.com/pqabelian/aips/blob/master/aips/aip0012/aip0012_v002.pdf)
