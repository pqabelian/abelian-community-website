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

请[查看此页面](/faq/software-issues/fullnode.html#how-to-move-mainnet-data-to-another-location)，然后按照步骤将 miannet 数据移动到另一个位置。
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

请[查看此页面](/downloads/mainnet-db)，按照步骤下载最新的主网数据，然后重新同步。
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

## 移动钱包(Pro) 相关问题

### <Badge type="warning" text="QUESTION" /> 移动钱包 Pro 通过助记词导入账户后余额为零或者余额数字不对

::: info <Badge type="tip" text="ANSWER" />
因为移动钱包 Pro 版本默认导入的钱包地址数量为 5 个，但是桌面钱包可能已经产生了多笔交易，地址数量已经超过了5个。

推荐解决方法：将桌面钱包的余额转账到移动钱包。
:::