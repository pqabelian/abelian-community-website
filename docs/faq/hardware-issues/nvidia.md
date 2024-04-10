---
outline: deep
---

# NVIDIA Graphics Card Issue

## NVIDIA Graphics Card Hardware Requirements Issue

### <Badge type="warning" text="QUESTION" /> What is the minimum model of NVIDIA graphics card required by ABEL?

::: info <Badge type="tip" text="ANSWER" />
In the actual ABEL mining process, as the 4K block height increases, the usage of GPU memory will gradually increase as well. The current formula for EPOCH calculation is (in bytes):

`epoch no. = (height - 56000)/4000`

Starting from EPOCH 41, it has been practically tested that graphics cards with 6GB of VRAM are no longer suitable for mining ABEL. It is recommended to use graphics cards with 8GB of VRAM or even larger.

No other restrictions have been made, but community users have reported that the RTX3050 8G graphics card has a problem with insufficient computing power, so entry-level graphics cards are also not recommended.
:::