---
outline: deep
---

# Abelian 移动钱包用户手册

> [!NOTE]
> Abelian 移动钱包的使用手册即将提供。此处我们提供了一份逐步指南，讲解如何将您的账户从 Abelian 桌面钱包迁移到 Abelian 移动钱包。

除了 Abelian 桌面钱包，我们现在还为 iOS 和 Android 设备提供了 Abelian 移动应用程序。然而，由于技术挑战，我们尚未能够移植恢复私钥所需的后量子密码学密钥生成组件，该组件能从一个 24 词助记词列表中恢复私钥。因此，遗憾的是，我们尚未能够在移动应用程序上支持直接账户恢复。换句话说，Abelian 桌面钱包和移动应用程序尚未兼容。抱歉！

话虽如此，如果您有一些技术背景，您实际上可以按照以下步骤导出现有钱包的私钥，并将这些私钥导入到 Abelian 移动应用程序中。下面，我将解释它是如何工作的，以及您如何完成这个过程。

难度级别：高级

## 您需要准备

1. Abelian 轻量钱包（CLI） v0.12.5（备注：低版本不支持下面的一些命令）
   - 下载：请访问官方网站 [Abelian 下载页面](/zh/downloads/latest#abelian-轻量钱包-cli)
   - 教程：请查看  [Abelian 轻量钱包（CLI） 手册](/zh/guide/wallet/cli-wallet-lite)

2. Abelian 移动应用

## 从桌面钱包迁移到移动应用

### 步骤 1：运行 Abelian 轻量钱包（CLI）

使用 24 词助记词列表运行 Abelian 轻量钱包（CLI）来导入您的钱包账户。

输入恢复钱包地址的最大数量的正确数字很重要。如果您忘记了这个数字，可以打开桌面钱包，让 **abec** 完成同步，然后进行一次向您自己的钱包地址的转账交易。进行转账后，打开 **abewallet** 服务日志窗口并阅读日志。日志中应该有一行提到了钱包地址数量。通常，每次恢复账户时，都会创建一个新的钱包地址，因此，恢复的最大地址数量会增加一。同样，每次进行转账交易时，都会创建一个新的钱包地址，因此，恢复的最大地址数量也会增加一。但每次接收一些代币时，不会创建新的钱包地址，因此地址数量不会增加。

例如：当我们创建一个新的钱包账户时，地址数量是 1。然后，如果我恢复这个钱包账户两次，并且还进行了 3 次转账，则钱包地址的数量是 1+2+3=6。

以下是运行 Abelian 轻量钱包（CLI）的示例（以 macOS 版本为例）：

```shell
./start_abewallet.sh -A /Users/abelian/Documents/wallet_migrate --walletpass=MYPUBLICPASSPHRASE
```

在这个示例中，我将以下的 **abewallet.conf** 文件放置在 **/Users/abelian/Documents/wallet_migrate** 下。我连接的远程 **abec** 位于亚洲。如果这个 **abec** 对您不起作用，您可以参考[手册](https://download.pqabelian.io/release/docs/Abelian%20Lite%20CLI%20Wallet%20Manual.pdf)，并相应地更改 **abewallet.conf** 中的远程 **abec** 设置。

**修改 /Users/abelian/Documents/wallet_migrate/abewallet.conf 文件的内容**

```ini
[Application Options]
rpcconnect=42.200.174.30
cafile=/Users/abelian/Documents/abec_certs/abec_rpc_tm.cert
rpcuser=localuser
rpcpass=localpass
abecrpcuser=wgMURUUtK7o7pFgTg87D8GuSGg4=
abecrpcpass=biPPQXARkhtzQw3wV1NWAxuS6Vg=
```

### 步骤2：导出私钥

使用 **abewalletctl** 运行以下一系列指令（使用上面的示例，假设要恢复的钱包地址数量是 6）：

```shell
./start_abewalletctl.sh -c /Users/abelian/Documents/wallet_migrate/rpc.cert --rpcuser=localuser --rpcpass=localpass walletunlock MYPRIVATEPASSPHRASE 600
```

```shell
./start_abewalletctl.sh -c /Users/abelian/Documents/wallet_migrate/rpc.cert --rpcuser=localuser --rpcpass=localpass exportaddresskeyrandseed 0 6
```

在上面的 **exportaddresskeyrandseed** 指令中，0 6 指定了索引从 0 到 5 的钱包地址将打印出它们的 **Rand Seed Keys**。

如果以上步骤顺利进行，我们将看到 6 组 **Rand Seed Keys**，每个密钥都是要导入到 Abelian 移动应用作为新账户的**私钥**。

### 步骤3: 导入私钥

将 **Rand Seeds** 作为新账户的**私钥**导入移动钱包应用程序。

完成！