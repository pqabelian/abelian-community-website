---
outline: deep
---

# Abelian 工作量證明（PoW）挖礦常見問題

## 概述

我們很感謝這些提問，並很高興藉此機會回應這些問題，同時分享更多關於 Abelian 專案混合工作量證明（PoW）路徑規劃的資訊。

在 Aconcagua 分叉之後，Abelian 網路現在同時運行兩種抗量子 PoW 挖礦演算法：ABEL-ETHash 和 ABEL-Nakamoto。共識協議會動態平衡這兩種演算法，大約一半的區塊使用 ABEL-ETHash 挖掘，另一半使用 ABEL-Nakamoto 挖掘。

Abelian 團隊長期以來的目標一直是透過賦予社群共同建設、發展和保護網路及其應用程式的能力，來最大化去中心化和安全性。

為此：
- **ABEL-ETHash** 設計為對 GPU 友善。雖然 CPU 仍然可以挖礦並獲得 ABEL 獎勵，但典型的 GPU 效能比 CPU 高出 100 倍以上。相比之下，FPGA 或 ASIC 對於此演算法並不具備相當的成本效益。
- **ABEL-Nakamoto** 針對 FPGA 或 ASIC 挖礦進行最佳化。FPGA（初期）以及後續的專用 ASIC 最適合用於此演算法的高效挖礦。

---

### <Badge type="warning" text="QUESTION" /> FPGA 挖礦是暫時的工程階段還是長期的挖礦方式？

::: info <Badge type="tip" text="ANSWER" />

專案的 FPGA/ASIC 研發工作專注於 ABEL-Nakamoto 挖礦。透過開源 ABEL-Nakamoto 程式碼，我們旨在支援並鼓勵社群為此演算法開發抗量子挖礦硬體。這些工作不適用於 ABEL-ETHash。

:::

---

### <Badge type="warning" text="QUESTION" /> ABEL-Nakamoto 演算法是否已經確定，還是可能為了硬體相容性而改變？

::: info <Badge type="tip" text="ANSWER" />

ABEL-Nakamoto 演算法在 Aconcagua 分叉期間成功部署。如其名稱所示，它是直接從比特幣原始 Nakamoto PoW 演算法衍生而來的抗量子改良版本。因此，現有的比特幣挖礦硬體與 ABEL-Nakamoto 不相容。未來沒有計劃改變這種不相容性——任何對演算法本身的變更都需要硬分叉，而抗量子性是 Abelian 的基本且強制性要求。

引入這種混合/雙重挖礦方式是刻意為之：它允許網路同時利用對 GPU 友善和對 ASIC 友善的運算資源，從而實現更高程度的去中心化和安全性。Abelian 專案打算長期維持這種雙重挖礦模式。我們強烈鼓勵社群貢獻 GPU 資源進行 ABEL-ETHash 挖礦，同時邀請硬體建造者為 ABEL-Nakamoto 挖礦開發 FPGA 和 ASIC 解決方案。

:::

---

### <Badge type="warning" text="QUESTION" /> 專案是否會將挖礦營運交給社群和第三方製造商？

::: info <Badge type="tip" text="ANSWER" />

是的，我們完全確認我們對去中心化的承諾。Abelian 專案最不希望看到的就是大部分算力來自核心團隊本身。我們的挖礦路徑規劃刻意朝著最大化去中心化和抗量子安全性的方向設計：我們積極邀請社群貢獻算力並獲得 ABEL 獎勵作為回報。

實際上，ABEL-ETHash 挖礦已經由個人礦工驅動，截至目前為止，來自全球 32 個國家的 GPU 顯示卡正在參與挖礦。

對於 ABEL-Nakamoto，專用的礦池伺服器 <https://abel-nakamoto.xyz> 現已上線。首批 20 台專為 ABEL-Nakamoto 設計的限量版研發挖礦機將很快推出。我們熱烈歡迎社群硬體建造者加入我們，共同開發抗量子挖礦機，以進一步去中心化 ABEL-Nakamoto 挖礦。

:::

---

### <Badge type="warning" text="QUESTION" /> ABEL-Nakamoto 是否有官方認可的 ASIC 開發路徑？

::: info <Badge type="tip" text="ANSWER" />

有興趣為 ABEL-Nakamoto 建造 ASIC 機器的建造者應參考我們開源儲存庫中的參考實作：
<https://github.com/pqabelian/abec/tree/main/blockchain/consensus>

我們期待與社群持續合作，以加強網路的安全性和去中心化。

:::
