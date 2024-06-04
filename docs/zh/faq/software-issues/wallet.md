---
outline: deep
---

# Abelian 钱包常见问题解答

## 桌面钱包相关问题

### <Badge type="warning" text="QUESTION" /> Windows桌面钱包无法启动，日志是：
```txt
[INF] ABEC: Version 0.12.5
[INF] ABEC: Loading block database from 'C:\Users\username\AppData\Roaming\Abelian Wallet\Abec\mainnet\blocks_ffldb'
[ERR] ABEC: file missing [file=MANIFEST-000000]: file missing [file=MANIFEST-000000]
[INF] ABEC: Shutdown complete
```

::: info <Badge type="tip" text="ANSWER" />
驱动器C盘上的空间是否已满？

请[查看此页面](/zh/faq/software-issues/fullnode.html#如何将-mainnet-数据移至另一个位置)，然后按照步骤将 miannet 数据移动到另一个位置。
:::

---

### <Badge type="warning" text="QUESTION" /> 日志显示错误信息为："Database corruption detected"
```txt
[INF] ABEC: Loading block database from 'C:\Users\username\AppData\Roaming\Abelian Wallet\Abec\mainnet\blocks_ffldb'
[WRN] ABDB: Database corruption detected: metadata claims file 29, offset 18494396, but witness data is at file 0, offset 0
[ERR] ABEC: metadata claims file 29, offset 18494396, but witness data is at file 0, offset 0
```

::: info <Badge type="tip" text="ANSWER" />
这是 mainnet 数据库损坏。您需要删除 "C:\Users\\[用户名]\AppData\Roaming\Abelian Wallet\Abec\mainnet" 文件夹，然后重新同步。

请[查看此页面](/zh/downloads/mainnet-db)，按照步骤下载最新的主网数据，然后重新同步。
:::

### <Badge type="warning" text="QUESTION" /> 转账时报错："allowed max number 5"
```txt
Failed calling RPC: serviceGroup=abewallet, accountName=brac, networkName=mainnet, method=sendtoaddressesabe, error={"code":-32603,"message":"pqringctTransferTxGen: the input number 11 exceeds the allowed max number 5"}.
```

::: info <Badge type="tip" text="ANSWER" />
请尝试减少转账的 ABEL 数量，直到不出现次错误信息为止。
:::

---

### <Badge type="warning" text="QUESTION" /> 运行桌面钱包报错：“missing address manager namespace”

::: info <Badge type="tip" text="ANSWER" />
关于命名空间问题。根据我们团队的测试（Windows 10 和 Ubuntu 22.04），这个问题只出现在虚拟机上，而不是物理（裸机）系统上。

你的 CPU 需要支持 SSE4 和 AVX2 扩展。如果你正在使用虚拟机，请确保传递宿主指令集。

:::

---

### <Badge type="warning" text="QUESTION" /> 为什么桌面钱包的余额不对（或显示为0）？

::: info <Badge type="tip" text="ANSWER" />
因为重新导入钱包账号时没有填写正确的地址数导致余额不对（或显示为零）.

请在导入时填写大于交易次数的数值，如果不清楚交易次数，请填写一个比较大的数值。（例如：100）

注意：余额只有在切换钱包中的标签时才会更新。
:::

---

## 移动钱包(Pro) 相关问题

### <Badge type="warning" text="QUESTION" /> 移动钱包 Pro 通过助记词导入账户后余额为零或者余额数字不对

::: info <Badge type="tip" text="ANSWER" />
因为移动钱包 Pro 版本默认导入的钱包地址数量为 5 个，但是桌面钱包可能已经产生了多笔交易，地址数量已经超过了5个。

推荐解决方法：将桌面钱包的余额转账到移动钱包。
:::

---

## 钱包其他问题

### <Badge type="warning" text="QUESTION" /> 如何获取钱包长地址？（用于 ABEL m挖矿）

::: info <Badge type="tip" text="ANSWER" />
移动钱包点右上角三点会弹出菜单，选择 **导出长地址**。

移动钱包 Pro 点击右上角头像，再点击 **账户详情**，此页面有显示长地址。

桌面钱包获取长地址步骤：

1. 点击 **abec** 和 **abewallet** 同步；
2. 点击 **RECEIVE** 标签页；
3. 点击界面中 **...** （三个点图标），在下拉菜单中选择 **Add address**（新创建的钱包需要执行此步骤，否则跳过此步骤）；
4. 点击 **...** 之后的 **书页** 图标，在下拉菜单中选择已有的钱包地址，下面一行 **Adress:** 后面以 **00000000** 开头的这串字符就是长地址。
:::