---
title: ABEL 代幣經濟學
description: ABEL 是 Abelian 主網原生代幣的符號，在每個區塊的建立過程中被挖掘出來。
head:
  - - meta
    - name: keywords
      content: Abelian Tokenomics, ABEL Tokenomics, ABEL 代幣經濟學, quantum resistant blockchain, 抗量子區塊鏈, 後量子時代, 抗量子技術, 量子安全
---

# ABEL 代幣經濟學

## ABEL 代幣經濟學

Abelian 區塊鏈的主網於 2022 年 4 月啟動。ABEL 是 Abelian 主網原生代幣的符號，在每個區塊的建立過程中被挖掘出來。

## 供應量

**總供應量**：2.2518 億 ABEL 或 2<sup>51</sup>−1 Neutrinos，其中 1 ABEL = 10,000,000 Neutrinos。

**預挖**：創世區塊中預挖了 2,058 萬枚 ABEL，占總代幣供應量的 9.14%。這些代幣將用於募資、社群建設和市場推廣。

剩餘的 2.046 億枚 ABEL（占總代幣供應量的 90.86%）將透過社群挖礦產生。
- 區塊產生頻率設定為 256 秒。
- 總共設有 10 個時代（era）。第一個時代由 400,000 個區塊定義，剩下的 9 個時代由 800,000 個區塊定義。因此，預計挖掘總時間約為 61.66 年。
- 在第一個時代，每個區塊的獎勵是 256 ABEL，期間將創造 1.024 億 ABEL。
- 第一個時代的區塊獎勵是 256 ABEL。第二個時代的起始區塊獎勵是 64 ABEL。隨後的時代獎勵減半，直到達到 0.25 ABEL（例如，第三個時代的獎勵是 32 ABEL）。
- 在 PoW 難度調整方面，Abelian 引入了難度平滑演算法（DSA），即使在算力波動顯著時也能快速調整。每 200 個區塊構成一個槽。每個槽開始時，根據前 20 個槽的加權算力調整 PoW 難度，這 20 個槽構成一個紀元（epoch），共有 4,000 個區塊。有關 DSA 的更多資訊，請參閱 <https://download.pqabelian.io/release/docs/abelian_difficulty_smoothing_algorithm_whitepaper.pdf> 或簡要摘要 <https://www.pqabelian.io/blog/exploring-the-abelian-difficulty-smoothing-algorithm-dsa>

![ABEL 供應量圖表](/tokenomics/ABEL-Supply.png)

## 參考連結

- [AIP0012 - 代幣釋放計劃](https://github.com/pqabelian/aips/blob/master/aips/aip0012/aip0012_v002.pdf)