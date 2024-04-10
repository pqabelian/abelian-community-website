---
outline: deep
---

# AMD (Advanced Micro Devices) Graphics Card Issue

## AMD Graphics Card Hardware Requirements Issue

### <Badge type="warning" text="QUESTION" /> What is the minimum model of AMD graphics card required by ABEL?

::: info <Badge type="tip" text="ANSWER" />
In the actual ABEL mining process, as the 4K block height increases, the usage of GPU memory will gradually increase as well. The current formula for EPOCH calculation is (in bytes):

`epoch no. = (height - 56000)/4000`

Starting from EPOCH 41, graphics cards with 6GB of VRAM have been practically found unsuitable for mining ABEL. It is recommended to use graphics cards with 8GB of VRAM or even larger memory capacities, no other restrictions have been imposed.
:::