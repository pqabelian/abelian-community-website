---
outline: deep
---

# AMD（超微）显卡问题

## AMD 显卡硬件配置问题

### <Badge type="warning" text="QUESTION" /> ABEL 所需要的 AMD 显卡最低配置是什么型号？

::: info <Badge type="tip" text="ANSWER" />
实际 ABEL 挖矿过程中，随着 4K 区块高度增长相应的也会逐渐提高显卡显存的占用，当前 EPOCH 的计算公式为（单位字节）：

`epoch no. = (height - 56000)/4000`

自 EPOCH 41 开始 6GB 显存的显卡实测已经不适用于挖 ABEL，推荐使用 8GB 显存甚至更大显存的显卡，其他方面并未做限制。
:::

---

### <Badge type="warning" text="QUESTION" /> AMD 显卡挖矿时报错：“No OpenCL platforms found”
使用 AMD 显卡挖矿时，运行 abelminer 报错日志为：

```text
No OpenCL platforms found
Error: No usable mining devices found
```

::: info <Badge type="tip" text="ANSWER" />
出现这个问题一般是因为 abelminer 未找到 AMD 显卡的 OpenCL 驱动，在各平台尝试以下方法解决：

**Windows**

> 1. 前往 [AMD 官网网站](https://www.amd.com/zh-cn/support/download/drivers.html) 选择自己对应的操作系统和显卡型号来下载并安装驱动程序；
> 2. 在矿池网站下载 Windows 安装程序，根据提示安装之后，在开始菜单中找到并运行 “Abelian GPU Mining Client” -> “AMD graphics card Fix” 来修复；
> 3. 运行桌面快捷方式 Abelian GPU Mining Client（Abelminer_Launcher.exe） 来运行挖矿程序。

**Linux**

> 1. 前往 [AMD 官网网站](https://www.amd.com/zh-cn/support/download/drivers.html) 选择自己对应的操作系统和显卡型号来下载并安装驱动程序；
> 2. 阅读矿池网站的用户指引文档，使用矿池的助手脚本（abelminingscript.sh）来挖矿；
> 3. 如果自己是使用命令行来运行 abelminer 挖矿，AMD 显卡则需要加上参数 "-G --cl-nobin"。

:::

---