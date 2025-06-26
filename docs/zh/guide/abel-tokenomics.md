---
title: ABEL 代币经济学
description: ABEL 是 Abelian 主网原生代币的符号，在每个区块的创建过程中被挖掘出来。
head:
  - - meta
    - name: keywords
      content: Abelian Tokenomics, ABEL Tokenomics, ABEL 代币经济学, quantum resistant blockchain, 抗量子区块链, 后量子时代, 抗量子技术, 量子安全
---

# ABEL 代币经济学

## ABEL 代币经济学

Abelian 区块链的主网于 2022 年 4 月启动。ABEL 是 Abelian 主网原生代币的符号，在每个区块的创建过程中被挖掘出来。

## 供应量

**总供应量**：2.2518 亿 ABEL 或 2<sup>51</sup>−1 Neutrinos，其中 1 ABEL = 10,000,000 Neutrinos。

**预挖**：创世区块中有 2058 万 ABEL，占总供应量的 9.14%。这些代币用于募资、社区发展和市场营销。

其余的 2.046 亿 ABEL（占总供应量的 90.86%）将由社区挖掘。
- 区块产生频率设定为 256 秒。
- 总共有 10 个时代。第一个时代由 400,000 个区块定义，剩下的 9 个时代由 800,000 个区块定义。因此，预计挖掘总时间约为 61.66 年。
- 在第一个时代，每个区块的奖励是 256 ABEL，期间将创造 1.024 亿 ABEL。
- 第一个时代的区块奖励是 256 ABEL。第二个时代的起始区块奖励是 64 ABEL。随后的时代奖励减半，直到达到 0.25 ABEL（例如，第三个时代的奖励是 32 ABEL）。
- 在 PoW 难度调整方面，Abelian 引入了难度平滑算法（DSA），即使在算力波动显著时也能快速调整。每 200 个区块构成一个槽。每个槽开始时，根据前 20 个槽的加权算力调整 PoW 难度，这些槽构成一个纪元，共有 4,000 个区块。有关 DSA 的更多信息，请参阅 <https://download.pqabelian.io/release/docs/abelian_difficulty_smoothing_algorithm_whitepaper.pdf> 或简要总结 <https://www.pqabelian.io/blog/exploring-the-abelian-difficulty-smoothing-algorithm-dsa>

![ABEL 供应量图表](/tokenomics/ABEL-Supply.png)

## 参考链接

- [AIP0012 - 代币释放计划](https://github.com/pqabelian/aips/blob/master/aips/aip0012/aip0012_v002.pdf)