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

---

### <Badge type="warning" text="QUESTION" /> AMD graphics card mining error: "No OpenCL platforms found"
When using AMD graphics cards for mining, the error log when running abelminer is:

```text
No OpenCL platforms found
Error: No usable mining devices found
```

::: info <Badge type="tip" text="ANSWER" />
This issue generally occurs because abelminer cannot find the OpenCL driver for AMD graphics card. Try the following methods on various platforms to resolve it:

**Windows**

> 1. Go to the [AMD official website](https://www.amd.com/zh-cn/support/download/drivers.html) and select your corresponding operating system and graphics card model to download and install the driver;
> 2. Download the Windows installer from the mining pool website, follow the prompts to install it, then find and run "Abelian GPU Mining Pool Client" -> "AMD graphics card Fix" in the start menu to fix it;
> 3. Run the desktop shortcut Abelian GPU Mining Pool Client (Abelminer_Launcher.exe) to start mining.

**Linux**

> 1. Go to the [AMD official website](https://www.amd.com/zh-cn/support/download/drivers.html) and select your corresponding operating system and graphics card model to download and install the driver;
> 2. Read the user guide documentation on the mining pool website and use the mining pool's helper script (abelminingscript.sh) to mine;
> 3. If you are using the command line to run abelminer for mining, AMD graphics cards need to add parameters "-G --cl-nobin".

:::

---