---
outline: deep
---

# Abelian 多层隐私钱包 CLI 手册

本文档描述了如何运行 Abelian 多层隐私钱包 CLI（abewalletmlp）。

所有操作都通过命令行界面（CLI）进行。在 Linux 或 macOS 上，请打开终端；在 Windows 上，请打开 PowerShell 或任何你喜欢的 shell 应用程序。

官方 Abelian 下载页面位于 [下载页面](https://pqabelian.io/download)。要与其他矿工、开发者和用户互动，请访问官方 Discord 服务器 [Discord 频道](https://discord.gg/cPUhCmsw)。

## 安装

在 [下载页面](https://pqabelian.io/download) 下载最新发布的预编译二进制文件，截至本文撰写时，最新的 abec 版本是 1.0.0，而最新的 abewalletmlp 版本是 1.0.1。不同平台的下载链接如下（请以 pqabelian.io 下载页面最新版本为准，示例仅为参考）：

- Windows：<br>
  [abec-windows-amd64-v1.0.0.zip](https://download.pqabelian.io/release/abec/abec-windows-amd64-v1.0.0.zip)，<br>
  [abewalletmlp-windows-amd64-v1.0.1.zip](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v1.0.1.zip)
- MacOS（Intel）：<br>
  [abec-macos-amd64-v1.0.0.tar.gz](https://download.pqabelian.io/release/abec/abec-macos-amd64-v1.0.0.tar.gz)，<br>
  [abewalletmlp-macos-amd64-v1.0.1.tar.gz](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v1.0.1.tar.gz)
- MacOS（Apple Silicon）：<br>
  [abec-macos-arm64-v1.0.0.tar.gz](https://download.pqabelian.io/release/abec/abec-macos-arm64-v1.0.0.tar.gz)，<br>
  [abewalletmlp-macos-arm64-v1.0.1.tar.gz](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v1.0.1.tar.gz)
- Linux（x86_64）：<br>
  [abec-linux-amd64-v1.0.0.tar.gz](https://download.pqabelian.io/release/abec/abec-linux-amd64-v1.0.0.tar.gz)，<br>
  [abewalletmlp-linux-amd64-v1.0.1.tar.gz](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v1.0.1.tar.gz)
- Linux（arm）：<br>
  [abec-linux-arm64-v1.0.0.tar.gz](https://download.pqabelian.io/release/abec/abec-linux-arm64-v1.0.0.tar.gz)，<br>
  [abewalletmlp-linux-arm64-v1.0.1.tar.gz](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v1.0.1.tar.gz)

解压它们并移动到文件夹 `~/abel/` 中：

```shell
$ ls ~/abel
abec-macos-amd64-v1.0.0 abewallet-macos-amd64-v1.0.1
$ ls ~/abel/abec-macos-amd64-v1.0.0
abec abectl start_abec.sh start_abectl.sh ...
$ ls ~/abel/abewalletmlp-macos-amd64-v1.0.1
abewalletmlp abewalletmlpctl start_abecwalletmlp.sh start_abewalletmlpctl.sh ...
```

然后进入 `~/abel/abec-macos-amd64-v1.0.0` 并运行

::: code-group

```txt [macOS 和 Linux]
$ sh start_abec.sh
```

```txt [Windows]
$ .\abec.exe
```
:::

然后按 control+C 停止它。通过这样做，我们创建了一个 `abec` 的配置文件夹，位置如下：

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abec
```

```txt [MacOS]
~/Library/Application Support/Abec
```

```txt [Linux]
~/.abec
```
:::

然后进入 `~/abel/abewalletmlp-macos-amd64-v1.0.1` 并运行

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlp.sh --create
```

```txt [Windows]
$ .\abewalletmlp.exe --create
```
:::

然后按 control+C 停止它。通过这样做，我们创建了一个 `abewalletmlp` 的配置文件夹，位置如下：

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abewallet
```

```txt [MacOS]
~/Library/Application Support/Abewallet
```

```txt [Linux]
~/.abewallet
```
:::

如果你在 macOS 上运行上述命令时，出现“‘xxx’已损坏，无法打开”的提示，请运行以下命令：

```shell
$ xattr -d com.apple.quarantine /path/to/xxx
```

如果出现“‘xxx’无法打开，因为无法验证开发者”的提示，请前往 `系统偏好设置 -> 安全性与隐私 -> 通用` 并点击 `仍然允许`。

## 创建钱包

接下来，我们将介绍如何创建钱包，进入 `~/abel/abewalletmlp-macos-amd64-v1.0.1` 并运行

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlp.sh --create
```

```txt [Windows]
$ .\abewalletmlp.exe --create
```
:::

请按照提示输入并记录助记词，以下是一个示例：

```text
Enter the private passphrase for your new wallet: 
Confirm passphrase: 
Enter the public passphrase for your new wallet: 
Confirm passphrase: 
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: no
Your wallet's generation seed is: 
a6c5b1d91853571b96c40136259c3ec56188cc4204bbc326fc63559e7a78917162ebd5755ac1368a5f759202bbfb65f902f3967bdc4b57f893a249045e570614
Your wallet's crypto version is:  1
Your wallet's mnemonic list is: 
finger,bronze,trophy,split,jar,enough,recipe,silk,budget,dust,pride,crystal,cabbage,tunnel,anxiety,kite,success,someone,frame,they,cheese,interest,host,tissue
IMPORTANT: Keep the version and seed in a safe place as you
will NOT be able to restore your wallet without it.
Please keep in mind that anyone who has access
to the seed can also restore your wallet thereby
giving them access to all your funds, so it is
imperative that you keep it in a secure location.
Once you have stored the seed in a safe and secure location, enter "OK" to continue: OK
Creating the wallet...
2024-08-12 13:05:58.553 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

`公共密码短语`将在运行 abewalletmlp 时使用，而 `私有密码短语`将用于解锁钱包以生成新地址或转移 ABEL 代币。

请注意，相比于 `abewalletlegacy`，没有生成初始地址，我们稍后将解释如何生成一个作为挖矿地址或收款地址。

***非常重要：请将助记词列表保存在安全的地方。助记词列表可以用于恢复钱包，在使用相同钱包时安装到另一台机器上。***

## 生成地址

进入 `~/abel/abewalletmlp-macos-amd64-v1.0.1` 并运行 abewalletmlp：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```

```txt [Windows]
$ .\abewallet.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```
:::

注意：
1. `--rpcuser=[rpcuser]` 和 `--rpcpass=[rpcpass]` 参数的作用：
  - rpcuser：abec 用户名，用于访问 abec RPC 接口
  - rpcpass：abec 密码，用于访问 abec RPC 接口

2. 分析操作钱包的日志：
```text
[INF] ABEW: Version 1.0.1
[INF] RPCS: Listening on 127.0.0.1:18665
[INF] ABEW: Chain server RPC TLS is disabled
[INF] ABEW: Attempting RPC client connection to localhost:18667
[INF] RPCS: Listening on [::1]:18665
[INF] CHNS: Established connection to RPC server localhost:18667
[INF] WLLT: Opened wallet
[INF] WLLT: Catching up block hashes to height 388630, this might take a while
[INF] WLLT: Done catching up block hashes
[INF] TMGR: Current sync height 388631, hash 46de0ac172d8b8f136db543edf412365c218ad7492628642c06dbe2ddfaf9d0e
```
- `Established connection to RPC server` 表示已连接到 abec RPC 接口；
- `Opened wallet` 表示钱包已运行；
- `Current sync height` 表示钱包已开始同步区块，并显示当前同步高度。

然后通过**私有**密码短语解锁钱包：

```shell
# 解锁钱包
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] walletunlock [your private passphrase] [expire time in second]

# 生成一个具有完全隐私级别的地址
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] generateaddressabe 1 1
# 输出生成的钱包地址（JSON 格式）
[
  {
    "addr": "0001000000010104eeb57aa5e203bd1794c3661114de89a1b9506f5db14e0cab9831f9c944427c97dbddf31e97bc604f7220077ab7b01d01d9e5d943f136964803838784aea5c76efe141585d239c1f8123b68a1b2f9d7e52fdc9fd566e65d9e96bf8b3d4d527947d26c7b2639febacbc463083dc34d68e2d09e56b64f7e411ebb3b585bda06d00b7be7c2219..."
  }
]

# 生成一个具有假名级别的地址
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] generateaddressabe 1 2
# 输出生成的钱包地址（JSON 格式）
[
  {
    "addr": "0001000000020209099f1427fe710ed6bb8905b87f8722b69d735c0bf6ab088da1e4b439db0ea95045ccb57a13fb9f4c09b2b820f6abb3a6636c146e00bb3a4cd4ecb5b1f6c81c60893c6104a94ba2fa864655126d7e02466302b37603af606aa4ff62b81b182fd25c94aad20dde997fcbbdd044a8c04d50e40f8a18179de74ed0419e5de6355f759450e962..."
  }
]

```

## 配置

打开 `abec` 的配置文件，默认位置如下：

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abec\abec.conf
```

```txt [MacOS]
~/Library/Application Support/Abec/abec.conf
```

```txt [Linux]
~/.abec/abec.conf
```
:::

并根据需要进行以下更改：

- 设置 `rpclisten=1.2.3.4:8667`，这将指示 `abec` 监听所有接口上的 8667 端口。
- 设置 `externalip=1.2.3.4`，这将广播你的 IP 地址（例如 1.2.3.4），以便其他 Abel 节点找到并连接你。这需要你知道你的公共 IP，如果你在内网，还需要在路由器中配置端口转发。
- 设置 `enablegetwork=1` 和 `rpclistengetwork=:8668`，这将允许 GPU 客户端 `abelminer` 连接到你的节点。
- 设置 `miningaddr=0001000000010104eeb57aa5e203bd1794c3661114de89a1b9506f5db14e0cab9831f9c944427c97dbddf31e97bc604f7220077ab7b01d01d9e5d943f136964803838784aea5c76efe141585d239c1f8123b68a1b2f9d7e52fdc9fd566e65d9e96bf8b3d4d527947d26c7b2639febacbc463083dc34d68e2d09e56b64f7e411ebb3b585bda06d00b7be7c2219...`，如果你是矿工，这将允许挖矿补贴被挖到指定地址。

此时，节点已准备好访问 Abelian 网络。此外，可以从配置文件中获取本地节点的端点，这将被 `abewalletmlp` 使用：

- `rpcuser=[rpcuser]`
- `rpcpass=[rpcpass]`

然后，打开 `abewalletmlp` 的配置文件，默认位置如下：

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abewallet\abewallet.conf
```

```txt [MacOS]
~/Library/Application Support/Abewallet/abewallet.conf
```

```txt [Linux]
~/.abewallet/abewallet.conf
```
:::

并根据需要进行以下更改：

- 设置 `rpcconnect=[abec.conf 中的 rpclisten]`
- 设置 `abecrpcuser=[abec.conf 中的 rpcuser]`
- 设置 `abecrpcpass=[abec.conf 中的 rpcpass]`

## 运行 Abelian 节点

进入 `~/abel/abec-macos-amd64-v1.0.0` 并运行如下命令：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abec.sh
```

```txt [Windows]
$ .\abec.exe
```
:::

上述命令将使本地节点连接到 Abelian 网络并开始同步区块链数据。同步过程可能需要一些时间。

## 运行钱包

进入 `~/abel/abewalletmlp-macos-amd64-v1.0.1` 并运行如下命令：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```

```txt [Windows]
$ .\abewalletmlp.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```
:::

注意：以下假设运行命令为 `sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]`，但你可以根据需要进行设置。

## 钱包操作

在 `~/abel/abewalletmlp-macos-amd64-v1.0.1` 文件夹中有一个名为 `start_abewalletmlpctl.sh` 的脚本文件，它封装了可执行文件 `abewalletmlpctl`，你可以使用它与钱包进行交互。

### 1. 查询余额

运行以下命令查询钱包余额：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] getbalancesabe
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] getbalancesabe
```
:::

### 2. 解锁钱包

如在[生成地址](#生成地址)中所示，当需要对钱包进行敏感操作时，你需要先解锁钱包。运行以下命令解锁钱包：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] walletunlock [your private passphrase] [expire time in second]
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] walletunlock [your private passphrase] [expire time in second]
```
:::

### 3. 转账

如在[生成地址](#生成地址)中所见，完全隐私地址会非常长，如果直接将地址放入命令行会超过长度限制。

相反，你需要在 `abec` 的配置文件夹中创建一个名为 `arg1` 的文件，并将一个或两个接收者的地址和金额放入其中。格式如下：

```text
[
    {
        "address":"...",
        "amount":700000000
    },
    {
        "address":"...",
        "amount":500000000
    }
]
```

注意：金额的单位是 Neutrino（1 ABE = 10,000,000 Neutrino）。

然后，你可以通过以下命令进行转账：

::: code-group

```txt [macOS 和 Linux]
$ DYLD_LIBRARY_PATH="./lib" ./abewalletmlpctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe -
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe -
```
:::

此命令支持特定模式的自定义需求，例如：

::: code-group

```txt [macOS 和 Linux]
$ DYLD_LIBRARY_PATH="./lib" ./abewalletmlpctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe - 0 1 1000 ""  true true
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe - 0 1 1000 "" true true
```
:::

上述命令将指示 `abewalletmlp` 创建一个交易，其中交易费用将指定为 1000 Neutrino，消耗假名地址上的代币，并在有找零时将假名地址设为找零地址。

通过将第三个参数设置为 `1`，可以允许使用第四个参数指定交易费用，以上示例将交易费用设置为 1000 Neutrino。

通过将第五个参数设置为 `true`，将指示钱包在创建交易时消耗假名地址上的代币。当设置为 `false` 时，将消耗完全隐私地址上的代币。如果没有设置，可能会消耗任何代币。

通过将第六个参数设置为 `true`，将指示钱包使用假名地址作为找零地址，当设置为 `false` 时，将使用完全隐私地址作为找零地址，这也是默认设置。

## 恢复钱包

在恢复钱包之前，请先准备以下信息：

- 当前钱包的助记词列表
- 查询当前钱包的余额
- 在当前钱包关闭时备份**配置文件夹**。请将文件夹复制到其他安全的地方。这与公共和私有密码短语一起，可以在助记词不如预期时帮助回滚到当前钱包。

**配置文件夹**路径：

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abewallet
```

```txt [MacOS]
~/Library/Application Support/Abewallet
```

```txt [Linux]
~/.abewallet
```
:::

完成准备工作后，删除 abewalletmlp 配置文件夹中的 `logs/` 和 `mainnet/` 文件夹，并运行：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlp.sh --create
```

```txt [Windows]
$ .\abewalletmlp.exe --create
```
:::

以下是一个示例：

```text
Enter the private passphrase for your new wallet: 
Confirm passphrase: 
Enter the public passphrase for your new wallet: 
Confirm passphrase: 
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: yes
Enter the crypto version:1
Enter existing wallet mnemonic: finger,bronze,trophy,split,jar,enough,recipe,silk,budget,dust,pride,crystal,cabbage,tunnel,anxiety,kite,success,someone,frame,they,cheese,interest,host,tissue
Creating the wallet...
2024-08-12 16:42:40.047 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

恢复钱包后，请检查是否按预期恢复：

1. 配置钱包并将其连接到 abec 节点，以便它可以同步 Abelian 网络中的所有资产。
2. 同步完成后，查询并检查余额是否符合预期。

## 从 Abelian CLI 钱包 (abewalletlegacy) 迁移

**请注意，迁移过程并非无损。此过程将创建多个交易，这意味着您需要支付相应的交易费用。**

为了本节的目的，假设您使用[**abewalletlegacy 版本 1.0.0**](https://pqabelian.io/download) 并拥有资产，并且已阅读 [abewalletlegacy 手册](https://download.pqabelian.io/release/docs/Abelian%20CLI%20Wallet%20Manual.pdf)。

基于上述假设，您应该知道 `abewalletlegacy` 的配置文件夹：

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abewallet
```

```txt [MacOS]
~/Library/Application Support/Abewallet
```

```txt [Linux]
~/.abewallet
```
:::

这与 `abewalletmlp` 使用的配置文件夹相同。

为了顺利迁移，我们假设用户使用两台电脑（分别命名为 PC1 和 PC2）执行以下步骤，路径以 MacOS 为例：

1. 在一台电脑（称为 `PC1`）上，使用 `abewalletlegacy` 恢复钱包并同步数据，如 [abewalletlegacy 手册](https://download.pqabelian.io/release/docs/Abelian%20CLI%20Wallet%20Manual.pdf) 中所述，然后将配置文件夹备份到其他安全的地方。这与公共和私有密码短语一起，可以在助记词不如预期时帮助回滚到当前钱包。

2. 在另一台电脑（称为 `PC2`）上，[安装](#安装) 并 [创建](#创建钱包) 一个新的 `abewalletmlp` 钱包，然后按照 [生成地址](#生成地址) 中的描述生成地址。此步骤生成的地址将用作后续迁移的接收地址。

    您可以生成多个地址，尤其是选择完全隐私地址时，多个地址将有助于提高您的隐私。

    例如，通过 `sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] generateaddressabe 5 1` 生成 5 个完全隐私地址：

    ```json
    [
      {
        "addr":"abe...add1"
      },
      {
        "addr":"abe...add2"
      },
      {
        "addr":"abe...add3"
      },
      {
        "addr":"abe...add4"
      },
      {
        "addr":"abe...add5"
      }
    ]
    ```

3. 在 `PC1` 上，通过 `sh start_abewalletlegacyctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] listmaturetxoabe` 查询所有可花费的币。例如，结果如下：

    ```json
    [
      {
        ...
        "Amount":1000000,
        ...
        "UTXOStr":"abe...abe01",
      },
      {
        ...
        "Amount":2000000,
        ...
        "UTXOStr":"abe...abe02",
      },
      {
        ...
        "Amount":3000000,
        ...
        "UTXOStr":"abe...abe03",
      },
      ...
      {
        ...
        "Amount":9000000,
        ...
        "UTXOStr":"abe...abe09",
      }
    ]
    ```

4. 根据您的需求，使用前一步结果中的 `UTXOHashStr` 和 `Amount` 将币分组，每组不超过 5 个。例如，以下分组：

    ```text
    Group1
    Total Amount: 15000000
    UTXOStr List: abe...abe01,abe...abe02,abe...abe03,abe...abe04,abe...abe05

    Group2
    Total Amount: 30000000
    UTXOStr List: abe...abe06,abe...abe07,abe...abe08,abe...abe09
    ```

5. 在 `PC1` 上，**对于每个分组**，就像通常的转账一样，修改文件 `~/Library/Application Support/Abec/arg1` 以指定迁移地址和金额，并创建一个迁移交易。

    例如，对于前一步中的第一个分组，文件内容将更改为：

    ```json
    [
      {
        "address":"abe...add1",
        "amount":14500000,
      }
    ]
    ```

    然后通过 `sh start_abewalletlegacyctl.sh sendtoaddressesabe - 0 1 500000 abe...abe01,abe...abe02,abe...abe03,abe...abe04,abe...abe05` 创建一个迁移交易。

    上述命令将指示 `abewalletlegacy` 创建一个交易，消耗第一个分组中的代币，生成一个币，生成的币地址指向 `abe...add1`，金额为 14500000，指定的交易费用为 500000。

    注意，消耗的代币总额等于交易费用加上生成的代币金额，即 `15000000 = 14500000 + 500000`。

6. 等待交易打包到区块中，然后在 `PC2` 上检查 `abewalletmlp` 的余额是否符合预期。