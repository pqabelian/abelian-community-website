---
outline: deep
---

# NVIDIA（英偉達）顯示卡問題

## NVIDIA 顯示卡硬體配置問題

### ABEL 所需要的 NVIDIA 顯示卡最低配置是什麼型號？ <sup style="font-size: 0.6em;">`問題`</sup>

::: info <span style="font-size: 1.2em;">`解答`</span>
實際 ABEL 採礦過程中，隨著 4K 區塊高度成長相應的也會逐漸提高顯示卡顯存的佔用，當前 EPOCH 的計算公式為（單位位元組）：

`epoch no. = (height - 56000)/4000`

自 EPOCH 41 開始 6GB 顯示卡實測已經不適用於挖 ABEL，建議使用 8GB 顯示卡甚至更大顯存的顯示卡。

其他方面並未作限制，但社群用戶回饋 RTX3050 8G 顯示卡有算力過低的問題，因此也不建議使用入門級顯示卡。
:::