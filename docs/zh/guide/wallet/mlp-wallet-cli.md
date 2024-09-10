---
outline: deep
---

# Abelian 多层隐私钱包 CLI 手册
## 简介
本文档旨在提供全面的安装步骤，以便成功安装和配置Abelian多层隐私钱包（abewalletmlp），一个新的命令行界面（CLI）钱包。

此钱包将为您提供了前所未有的交易隐私和安全性控制，它具有两种创新型的钱包地址：

1)**全隐私地址**：此功能确保您的交易无法追踪，您的钱包余额保持机密，以便提供最大的安全性和匿名性

2)**伪匿名地址**：类似于比特币的隐私模型，它允许公开可见的币值和可追踪的交易，同时具有更低的交易费用和更快的交易速度


同时，告别传统钱包中的“可恢复钱包的最大数量”限制，通过使用abewalletmlp，您可以使用24个助记词恢复所有钱包地址，简化了钱包管理。此外，abewalletmlp引入了一系列进一步增强您体验的关键特性。

**关键特性：**

- **灵活的隐私级别**：根据您的隐私需求可选择全隐私和伪匿名钱包地址
- **简化恢复**：通过助记词恢复所有钱包地址，不再有限制
- **无缝转账**：轻松在全隐私和伪匿名钱包之间转账ABELs

使用abewalletmlp，享受增强的隐私、更快的交易、更低的交易费用，并灵活管理您的隐私。

_Abelian官方下载页面位于[下载页面](https://pqabelian.io/download)。同时，若与矿工、开发者和用户进一步互动，可访问官方[Discord 频道](https://discord.gg/cPUhCmsw)。_


# 操作步骤

## 前提条件
1.所有的操作都需通过命令行界面（CLI）执行。对于Linux或macOS，请打开终端；对于Windows，请打开PowerShell或您喜欢的任何shell应用程序

2.Abec全节点（软件包 abec-v1.0.0）已安装，并且已同步最新的区块链数据已。此外，请下载最新的Abelian多层隐私钱包（CLI）（软件包 abewalletmlp-v1.0.1）。以下为不同平台的下载链接：

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

## 安装
请将已下载的两个软件包（abec 和 abewalletmlp）解压并移动到指定目录`~/abel/` 中：

```shell
$ ls ~/abel
abec-macos-amd64-v1.0.0 abewalletmlp-macos-amd64-v1.0.1
$ ls ~/abel/abec-macos-amd64-v1.0.0
abec abectl start_abec.sh start_abectl.sh ...
$ ls ~/abel/abewalletmlp-macos-amd64-v1.0.1
abewalletmlp abewalletmlpctl start_abecwalletmlp.sh start_abewalletmlpctl.sh ...
```

然后进入目录 `~/abel/abec-macos-amd64-v1.0.0` 并执行以下命令：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abec.sh
```

```txt [Windows]
$ .\abec.exe
```
:::

随后请按 Control+C 键以终止命令的执行。通过此操作，我们创建了一个 `abec` 的配置文件夹，其位置如下：
_注意：Control+C 键有且只可以按一次，直到命令完全执行_

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

同样的，请进入目录 `~/abel/abewalletmlp-macos-amd64-v1.0.1` 并执行命令：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlp.sh --create
```

```txt [Windows]
$ .\abewalletmlp.exe --create
```
:::

随后请按 Control+C 键以终止命令的执行。通过此操作，我们创建了一个 `abewalletmlp`  的配置文件夹，其位置如下：

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

1）如果您在macOS系统上执行上述命令时，遇到`‘xxx’已损坏，无法打开`的弹窗提示，请执行以下命令：
```shell
$ xattr -d com.apple.quarantine /path/to/xxx
```

2）如果出现`‘xxx’无法打开，因为无法验证开发者`的弹窗提示，请进行如下设置：

  a)前往 `系统偏好设置`

  b)选择 `安全性与隐私`

  c)点击 `通用` 标签

  d)找到相关未验证的应用程序选项，然后点击`允许打开`以继续打开`xxx`


## 创建钱包

接下来，我们将介绍如何创建钱包。
请进入目录 `~/abel/abewalletmlp-macos-amd64-v1.0.1` 并执行命令：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlp.sh --create
```

```txt [Windows]
$ .\abewalletmlp.exe --create
```
:::

请按照提示，输入相关密码、记录助记词列表，以下是一个示例：

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

`私有密码短语（private passphrase）`用于解锁钱包，以便生成新的地址或转移ABEL代币；`公共密码短语（public passphrase）`将在启动`abewalletmlp`时被使用。

与`abewalletlegacy`不同，系统不会自动生成初始地址。我们将在后续内容中解释如何手动创建一个地址，该地址可以作为挖矿地址或收款地址使用。

***非常重要：请将助记词列表保存在安全的地方。助记词列表可以用于恢复钱包，在使用相同钱包时安装到另一台机器上。***


## 生成地址

首先，请进入目录 `~/abel/abewalletmlp-macos-amd64-v1.0.1` 以便运行程序`abewalletmlp`：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```

```txt [Windows]
$ .\abewalletmlp.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```
:::

**注意：**
1. `--rpcuser=[rpcuser]` 和 `--rpcpass=[rpcpass]` 参数的作用：
   
- rpcuser：作为与Abec的RPC连接的用户名，需要使用此参数来确保钱包能够正确验证并连接到abec
- rpcpass：作为与Abec的RPC连接的密码，需要使用此参数来确保钱包能够正确验证并连接到abec

2. 钱包操作的日志分析：
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
- `Established connection to RPC server` 表示已连接到 Abec RPC 接口
- `Opened wallet` 表示钱包在运行中
- `Current sync height` 表示钱包已开始同步区块，并显示当前同步高度

然后，使用**私有**密码短语以便解锁钱包：

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

本节配置分为两部分，一部分修改'abec'配置文件，另外一部分配置'abewalletmlp’配置文件：

第一部分，请首先打开 `abec` 的配置文件，默认目录文件位置如下：

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

其次，根据本身需求配置如下内容：

- 设置RPC监听本地IP地址及端口：设置`rpclisten=xxx.xxx.xxx.xxx:8667`为您**本地IP地址及端口为8667**，例如rpclisten=192.168.1.1:8667，这将指导`abec`在网络接口上监听所有的8667端口。
  _备注：可以通过访问在线服务来查询您的本地IP地址，例如在浏览器中访问 http://ifconfig.me 或 http://icanhazip.com_
  
- 设置外部访问地址为公网地址：设置 `externalip=xxx.xxx.xxx.xxx`，这将广播您的公网IP地址，以便其他 `abec`节点找到并连接。
  _备注：若查询你的公网IP地址，请咨询您的ISP和路由器厂商_
  
- 设置 `enablegetwork=1` 和 `rpclistengetwork=:8668`，这将允许 GPU 客户端 `abelminer` 连接到您的节点。
  
- 若您是矿工，可设置`miningaddr`为您的钱包地址，以确保挖矿所得的补贴自动转入您指定的地址，例如`miningaddr=0001000000010104eeb57aa5e203bd1794c3661114de89a1b9506f5db14e0cab9831f9c944427c97dbddf31e97bc604f7220077ab7b01d01d9e5d943f136964803838784aea5c76efe141585d239c1f8123b68a1b2f9d7e52fdc9fd566e65d9e96bf8b3d4d527947d26c7b2639febacbc463083dc34d68e2d09e56b64f7e411ebb3b585bda06d00b7be7c2219...`


此时，节点已具备访问 Abelian 网络的准备。


_此外，您也可以从配置文件中记录本地节点的登录用户名`rpcuser`和密码`rpcpass`，这将用于 `abewalletmlp` 的登录：

- `rpcuser=[rpcuser]`
- `rpcpass=[rpcpass]`_


第二部分，若需设置您的钱包连接到`abec`，以便同步最新区块高度，请配置操作如下：

1）请打开 `abewalletmlp` 的配置文件，其默认目录为：

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

2)修改配置文件’abec.conf‘ 内如如下：

- 设置 `rpcconnect=[C:\Users\<USER_NAME>\AppData\Local\Abec\abec.conf文件中的 rpclisten]`
- 设置 `abecrpcuser=[C:\Users\<USER_NAME>\AppData\Local\Abec\abec.conf 文件中的 rpcuser]`
- 设置 `abecrpcpass=[C:\Users\<USER_NAME>\AppData\Local\Abec\abec.conf文件中的 rpcpass]`


## 运行 Abelian 节点

请进入目录 `~/abel/abec-macos-amd64-v1.0.0` 以便执行如下命令：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abec.sh
```

```txt [Windows]
$ .\abec.exe
```
:::

上述命令的目的是将使本地节点连接到 Abelian 网络并同步最新区块链数据
**注意：区块数据同步过程需要一些时间，请耐心等待。**


## 运行钱包

当 `abec` 完成最新区块链数据的同步后，请进入目录 `~/abel/abewalletmlp-macos-amd64-v1.0.1` 并执行如下命令：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```

```txt [Windows]
$ .\abewalletmlp.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```
:::

注意：接下来的命令执行示例将统一展示为： `sh start_abewalletmlp.sh --rpcuser=rpcuser --rpcpass=rpcpass --walletpass=your public passphrase`
_请您根据实际情况设置账号密码_

## 钱包操作

在 `~/abel/abewalletmlp-macos-amd64-v1.0.1` 目录下，存在一个名为 `start_abewalletmlpctl.sh` 的脚本文件。该脚本封装了 `abewalletmlpctl` 可执行文件，用于实现与钱包的交互功能

### 1. 查询余额

请进入目录`~/abel/abewalletmlp-macos-amd64-v1.0.1` ，执行以下命令以便查询您的钱包余额：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] getbalancesabe
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] getbalancesabe
```
:::

### 2. 解锁钱包

如在[生成地址](#生成地址)中所示，进行转账、恢复钱包等操作前，需要先解锁钱包。请执行命令以便解锁钱包：：

::: code-group

```txt [macOS 和 Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] walletunlock [your private passphrase] [expire time in second]
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] walletunlock [your private passphrase] [expire time in second]
```
:::

### 3. 转账

如在[生成地址](#生成地址)中所展示的，完全隐私的地址通常非常长，如果直接在命令行中使用这些地址，可能会超出命令行的长度限制。因此，您需要在 `abec` 的配置文件夹中创建一个名为 `arg1` 的文件，并将一个或多个接收者的地址及相应的金额写入该文件中。
具体的格式如下所示：


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

_注意：金额的单位是 Neutrino（1 ABE 等于 1000,0000 Neutrinos）。_

接着，您可以通过执行以下命令来完成转账操作：

::: code-group

```txt [macOS 和 Linux]
$ DYLD_LIBRARY_PATH="./lib" ./abewalletmlpctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe -
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe -
```
:::

此命令支持按照特定模式定制化需求，例如：

::: code-group

```txt [macOS 和 Linux]
$ DYLD_LIBRARY_PATH="./lib" ./abewalletmlpctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe - 0 1 1000 ""  true true
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe - 0 1 1000 "" true true
```
:::

上述命令例子为 `abewalletmlp` 创建一个交易，其中交易费用将指定为 1000 Neutrinos，消耗假名地址上的代币，并在有找零时将假名地址设为找零地址，同时：

  -当设置第三个参数为 `1`时，则第四个参数用来设定交易费用。上面示例命令中，交易费用被设定为 1000 Neutrinos。

  -当设置第六个参数为 `true`时，这表示在创建交易时，钱包将使用假名地址上的代币。如果设置为 `false`，则表示将使用完全隐私地址上的代币。如果未设置此参数，钱包将默认使用任何一个地址上的代币。

  -当设置第七个参数设置为 `true`时，这表示在交易中将使用假名地址作为找零地址。如果设置为 `false`，则表示将使用完全隐私地址作为找零地址，这也是默认的设置。


## 恢复钱包

在进行钱包恢复操作之前，请确保您已经准备以下必要的信息：

-您当前钱包的助记词列表

-查询并记录当前钱包的余额

-在关闭当前钱包之前，对整个**配置文件夹**进行备份。请将该文件夹复制并保存到一个安全的位置。

_注意：备份的配置文件夹，连同您的公共和私有密码短语，可以在助记词无法如预期工作时，帮助您恢复到当前的钱包状态_


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

完成以上所有准备工作后，请删除 `abewalletmlp` 配置文件夹中的 `logs/` 和 `mainnet/` 文件夹，并执行如下命令：

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

钱包恢复操作完成后，请按照如下操作，检查钱包是否恢复成功:

1) 配置钱包`abewalletmlp`并将其连接到 `abec` 节点，以确保它能够同步 Abelian 网络中的所有资产。
   
2)区块数据同步完成后，查询并核实余额是否与您的预期相符。


## 从 Abelian CLI 钱包 (abewalletlegacy) 迁移

**注意，此迁移过程将会创建多个交易，这意味着您需要支付相应的交易费用**

本迁移操作指南，假设您已使用[**abewalletlegacy 版本 1.0.0**](https://pqabelian.io/download) 并拥有资产，按照 [abewalletlegacy 手册](https://download.pqabelian.io/release/docs/Abelian%20CLI%20Wallet%20Manual.pdf)进行`abewalletlegacy`正常使用

基于上述假设，您应该知道 `abewalletlegacy` 的配置文件夹位于：

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

这与 `abewalletmlp` 所使用的配置文件夹相同。

本次钱包迁移，我们是假设用户在两台电脑上操作（分别命名为 PC1 和 PC2），以下以MacOS 操作系统为例进行说明：

1. 在一台电脑（我们称之为`PC1`）上，按照 [abewalletlegacy 手册](https://download.pqabelian.io/release/docs/Abelian%20CLI%20Wallet%20Manual.pdf) 中所说的，已同步最新的区块高度并通过 `abewalletlegacy` 正常使用您的钱包。请将配置文件夹备份到一个安全的位置。

_注意：备份的配置文件夹，连同您的公共和私有密码短语，可以在助记词无法如预期工作时，帮助您恢复到当前的钱包状态
_

2.在另一台电脑（我们称之为 `PC2`）上，首先[安装](#安装) 并 [创建](#创建钱包) 一个新的 `abewalletmlp` 钱包，然后根据 [生成地址](#生成地址) 中的指南生成地址。此步骤中生成的地址将作为后续迁移过程中的接收地址。

   _您可以选择生成多个地址，特别是当您选择使用完全隐私地址时，这样做将有助于增强您的隐私保护。_
   
   例如，可通过命令 `sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] generateaddressabe 5 1` 一次性生成 5 个完全隐私地址：

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

3. 在 `PC1` 上，可执行命令 `sh start_abewalletlegacyctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] listmaturetxoabe` 查询所有可花费的币，

   例如，查询结果可能如下：

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

**注意：**

1）假设查询到您的钱包中有20个可花费的交易输出（TXO），每个TXO都有其唯一的标识符（例如：UTXOStr01, ..., UTXOStr20）。

2）由于每次交易只能使用5个TXO，因此需要将这20个TXO分成4组（Group 1, Group 2, Group 3, Group 4），以便后续创建4笔交易。
【例如，Group 1 对应的TXO为UTXOStr01、UTXOStr02、UTXOStr03、UTXOStr04、UTXOStr05】。

3）对于每一组的交易输出（TXO），需要将该组TXO的总金额一次性转移到新的钱包地址中。这要求您首先指定新交易的钱包接收地址和总金额，接着从钱包中选择对应组的TXO（例如：UTXOStr01, ..., UTXOStr20），最后是执行交易命令，以便将这些TXO转移到新的接收地址上。

例如，对于第一组（Group 1），您需要在arg1文件中指定新钱包的接收地址和总金额（总金额应为这5个TXO的总金额减去相应的交易费用）， 并在命令’sh start_abewalletlegacyctl.sh sendtoaddressesabe‘ 中指定 UTXOStr01,UTXOStr02,UTXOStr03,UTXOStr04,UTXOStr05 这5个交易输出（TXO）和交易费用。

_请确保在执行这些操作时，正确无误地输入TXO的标识符和目标地址，并仔细核对交易金额和交易费用，以确保交易的准确性和安全性。_

4. 在 `PC1` 上，根据步骤三查询结果的 `UTXOHashStr` 和 `Amount` 将币分组，每组不超过 5 个UTX。例如，分组如下：

    ```text
    Group1
    Total Amount: 15,000,000
    UTXOStr List: abe...abe01,abe...abe02,abe...abe03,abe...abe04,abe...abe05

    Group2
    Total Amount: 30000000
    UTXOStr List: abe...abe06,abe...abe07,abe...abe08,abe...abe09
    ```

5. 在 `PC1` 上，在每个分组转账前，需修改文件 `~/Library/Application Support/Abec/arg1` 来指定钱包的接收地址和转账金额，以便创建迁移交易。

    例如，对于前一步中的第一个分组，文件接收地址和转账总金额可修改为：

    ```json
    [
      {
        "address":"abe...add1",
        "amount":14500000,
      }
    ]
    ```

6. 接下来，在 `PC1` 终端上执行命令 `sh start_abewalletlegacyctl.sh sendtoaddressesabe - 0 1 500000 abe...abe01,abe...abe02,abe...abe03,abe...abe04,abe...abe05` 以创建一个迁移交易。

    通过上述命令，`abewalletlegacy` 创建了一笔迁移交易，使用第一组中的代币，生成新的代币。新生成的代币将发送到地址 abe...add1，金额为 1450,0000，交易中指定的交易费用为 50,0000。

    _注意，消耗的代币总金额等于生成的代币金额加上交易费用，即 `1500,0000 = 1450,0000 + 50,0000`。_

7. 等待交易打包到区块之后，请在 `PC2` 终端上检查 `abewalletmlp` 钱包的余额是否与您的预期相符。
