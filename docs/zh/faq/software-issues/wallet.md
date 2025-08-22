---
outline: deep
---

# Abelian 钱包常见问题解答

## 桌面钱包经典版问题

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

### <Badge type="warning" text="QUESTION" /> 为什么桌面钱包的余额不对（或显示为零）？

::: info <Badge type="tip" text="ANSWER" />
因为重新导入钱包账号时没有填写正确的地址数导致余额不对（或显示为零）.

请在导入时填写大于交易次数的数值，如果不清楚交易次数，请参考[用户指引](/zh/guide/wallet/desktop-wallet-legacy#导入-abel-钱包账户)的方法估算，或者填写一个比较大的数值。（例如：100）

注意：余额只有在切换钱包中的标签时才会更新。
:::

---

### <Badge type="warning" text="QUESTION" /> Windows 版本的桌面钱包无法运行（abelwallet 程序不存在，或者运行它们没有日志）如何解决？

::: info <Badge type="tip" text="ANSWER" />
桌面钱包程序 abelwallet.exe 可能会被 Windows Defender 当作病毒误杀，请在安装完成之后，在 “Windows 安全中心 -> 病毒和威胁防护 -> 保护历史记录“ 中 “允许” 提示的威胁。

推荐在 “病毒和威胁防护-设置 -> 排除项” 中添加安装目录的路径。
:::

---

### <Badge type="warning" text="QUESTION" /> Windows 版本的桌面钱包能否修改数据目录到其他位置？

::: info <Badge type="tip" text="ANSWER" />
按照下面的步骤修改桌面钱包数据的存储位置：

1. 关闭桌面钱包
2. 系统属性 --> 高级 --> 环境变量 --> 新增用户环境变量：
    - 变量名: ABELWALLET_HOME
    - 变量值: (输入某个文件夹的完整路径)
3. 将 `C:\Users\<USERNAME>\AppData\Roaming\Abelian Wallet` 路径下的以下文件移动到新路径：
    - Abewallet
    - ans-cache.json
    - config.json
    - state.json
4. 重启系统再运行桌面钱包
:::

---

### <Badge type="warning" text="QUESTION" /> 升级桌面钱包 Legacy 后，出现 “service not ready” 的错误

我有一个旧版本的桌面钱包，但当我升级到 桌面钱包 Legacy v4.2.2 并导入助记词到后，它运行的日志显示错误信息： "service not ready, please ensure the abewallet service is running and synced to the latest height."

::: info <Badge type="tip" text="ANSWER" /> 
要将桌面钱包 Legacy 从 v4.1.1 或更早版本升级到 v4.2.2，您应首先需要删除旧版桌面钱包的数据目录：`%USERPROFILE%\AppData\Roaming\Abelian Wallet`。

然后再升级到 v4.2.2，在使用助记词导入钱包账户时，请务必查看 [用户手册文档中的注意事项部分](/zh/guide/wallet/desktop-wallet-legacy.html#导入-abel-钱包账户)。
:::

---

## 过期桌面钱包经典版问题

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

---

### <Badge type="warning" text="QUESTION" /> 为什么桌面钱包升级后 abec 和 abewallet 还是旧版本？

::: info <Badge type="tip" text="ANSWER" />
这是桌面钱包的一个历史bug，将会在 4.1.0 版本修复。

临时解决方法：

- 请先删除下面的目录：
```
# Windows:
C:\Users\<USERNAME>\AppData\Roaming\Abelian Wallet\dist
# Linux:
~/.config/Abelian Wallet/dist
# macOS:
/Users/<USER_NAME>/Library/Application Support/Abelian Wallet/dist
```

- 再重新安装新版本的桌面钱包。
:::

---

### <Badge type="warning" text="QUESTION" /> Windows 版本的桌面钱包无法运行（abec 和 abelwallet 程序不存在，或者运行它们没有日志）如何解决？

::: info <Badge type="tip" text="ANSWER" />
桌面钱包程序（abec.exe 和 abelwallet.exe）会被 Windows Defender 当作病毒误杀，请在安装完成之后，在 “Windows 安全中心 -> 病毒和威胁防护 -> 保护历史记录“ 中 “允许” 提示的威胁。

推荐在 “病毒和威胁防护-设置 -> 排除项” 中添加安装目录的路径。
:::

---

## 桌面钱包专业版（MLP）问题

### <Badge type="warning" text="QUESTION" /> 桌面钱包专业版生成的钱包地址支持 Maxpool 挖矿吗？

::: info <Badge type="tip" text="ANSWER" />
桌面钱包专业版（MLP）生成的钱包地址目前还不支持作为 maxpool 矿池的挖矿地址，后续会升级矿池支持新的地址格式，具体支持的时间请关注 [官方 Discord 频道](https://discord.gg/Rrb33mC3Kc) 的公告。
:::

---

### <Badge type="warning" text="QUESTION" /> 桌面钱包专业版支持与移动钱包和交易所转账吗？
::: info <Badge type="tip" text="ANSWER" />
桌面钱包专业版（MLP）目前还不能与移动钱包（Abelian Pro）进行转账交易。

而交易所方面，目前正在沟通升级中，升级完成后 [官方 Discord 频道](https://discord.gg/Rrb33mC3Kc) 和交易所都会发布公告。
:::

---

## 移动/手机钱包 Abelian Pro 问题

### <Badge type="warning" text="QUESTION" /> Abelian Pro 通过助记词导入账户后余额为零或者余额数字不对

::: info <Badge type="tip" text="ANSWER" />
因为移动钱包 Pro 版本默认导入的钱包地址数量为 5 个，但是桌面钱包可能已经产生了多笔交易，地址数量已经超过了5个。

推荐解决方法：将桌面钱包的余额转账到移动钱包。
:::

---

### <Badge type="warning" text="QUESTION" /> Abelian Pro 更新后底部导航栏消失，切换钱包帐号的列表是空的

::: info <Badge type="tip" text="ANSWER" />
此问题发生在 v1.0.5 版本，如果此后的版本仍有此问题，可以参考下面的解决方法。

如果更新移动钱包 Pro 后，发现导航栏不见了，并且无法切换账户（因为 bug 导致即使有账户也无法显示），可以进行以下操作：

1. 先备份当前账户私钥；
2. 然后创建一个新账户，这时列表中只剩下新账户，但这个时候底部导航栏会显示出来；
3. 再点击底部导航栏 “设置 -> 网络” 切换到 “Testnet” 再切换回 “Mainnet” 就可以显示钱包帐户列表了。
:::

---

## 钱包其他问题

### <Badge type="warning" text="QUESTION" /> 如何获取钱包长地址？（用于 ABEL 挖矿）

::: info <Badge type="tip" text="ANSWER" />
移动钱包点右上角三点会弹出菜单，选择 **导出长地址**。

移动钱包 Pro 点击右上角头像，再点击 **账户详情**，此页面有显示长地址。

桌面钱包获取长地址步骤：

1. 点击 **启动服务（Start service）** 开启同步；
2. 点击 **RECEIVE** 标签页；
3. 点击界面中 **...** （三个点图标），在下拉菜单中选择 **Add address**（新创建的钱包需要执行此步骤，否则跳过此步骤）；
4. 点击 **...** 之后的 **书页** 图标，在下拉菜单中选择已有的钱包地址，下面一行 **Adress:** 后面以 **00000000** 开头的这串字符就是长地址。
:::

---

### <Badge type="warning" text="QUESTION" /> 经典和MLP钱包地址的格式有何区别？

::: info <Badge type="tip" text="ANSWER" />
经典（Legacy）和多层隐私（MLP）钱包的长地址主要区别为占用字符数不同，而短地址是由地址前缀+地址隐私类型+长地址 HASH 组成，通过前缀+隐私类型就能直观的做出区别，详细文档请查看[此链接](/zh/guide/abel-address-format)。
:::

---

### <Badge type="warning" text="QUESTION" /> 移动钱包 Abelian Pro 相对于桌面钱包 Legacy/Pro 没有的功能有哪些？

::: info <Badge type="tip" text="ANSWER" />
移动钱包 Abelian Pro 相对与桌面钱包 Legacy/Pro 使用起来更加便捷，随时随地可以使用，无需同步数据，但仍然缺少一些重要的功能，包括如下三点：

1. 完全私密的钱包地址
   - 桌面钱包经典版仅支持创建 Legacy 地址；
   - 桌面钱包专业版（MLP）支持创建 Abelian 多层隐私（Pseudo-Private 和 Fully-private）地址，其中 Fully-private 地址具有最高的隐私性，适合注重隐私交易的用户；
   - 移动钱包 Abelian Pro 移动钱包支持 Pseudo-Private 地址，新版本也将逐渐推荐用户从 Legacy 地址迁移至 MLP 地址。

2. 一键迁移功能
   - 桌面钱包 Legacy 提供一键迁移功能，可以将账户中所有 ABEL 从 Legacy 账户转移到 MLP 账户，简化了账户管理；
   - 移动钱包 Abelian Pro 没有一键迁移功能。

3. 高级交易选项
   - 桌面钱包专业版提供更高级的交易选项和设置，适合需要复杂交易的用户。
   - 移动钱包 Abelian Pro 的交易选项较为基础，适合日常使用。

这些功能差异使得桌面钱包更适合需要高级功能和更高隐私性的用户，而移动钱包则更适合日常便捷使用。
:::
