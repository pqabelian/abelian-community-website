---
outline: deep
---

# NVIDIA（英伟达）显卡问题

## NVIDIA 显卡硬件配置问题

### <Badge type="warning" text="QUESTION" /> ABEL 所需要的 NVIDIA 显卡最低配置是什么型号？

::: info <Badge type="tip" text="ANSWER" />
实际 ABEL 挖矿过程中，随着 4K 区块高度增长相应的也会逐渐提高显卡显存的占用，当前 EPOCH 的计算公式为（单位字节）：

`epoch no. = (height - 56000)/4000`

自 EPOCH 41 开始 6GB 显存的显卡实测已经不适用于挖 ABEL，推荐使用 8GB 显存甚至更大显存的显卡。

其他方面并未做限制，但社区用户反馈 RTX3050 8G 显卡有算力过低的问题，所以也不建议使用入门级显卡。
:::