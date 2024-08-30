---
title: 由此开始
outline: deep
---

# 部署指南

## 1. 安装

有三个软件组件：**abec**、**abewallet** 和 **abectl**。它们被打包成两个压缩文件下载，例如对于运行在 x86 架构上的 macOS（例如 Intel 芯片），文件名类似于 **abec-macos-amd64-v1.0.0.tar.gz** 和 **abewalletmlp-macos-amd64-v1.0.1.tar.gz**。更多信息可以在 Discord 中找到。

解压这两个文件，你将得到两个文件夹，类似于 **abec-macos-amd64-v1.0.0/** 和 **abewalletmlp-macos-amd64-v1.0.1/**。为了简化下面的描述，让我们将这两个文件夹放在名为 **abel/** 下的 **Documents** 文件夹中。类似于：

```txt
1. ~/Documents/abel/abec-macos-amd64-v1.0.0/
2. ~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/
```

**abec** 和 **abectl** 位于 ```~/Documents/abel/abec-macos-amd64-v1.0.0/```，而 **abewallet** 位于 ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/```。

要运行这些软件，我们使用终端（适用于 macOS 和 Linux）或 PowerShell（适用于 Windows）。

打开一个“终端”或“PowerShell”，进入 ~/Documents/abel/abec-macos-amd64-v1.0.0/ 文件夹，然后运行

::: code-group

```txt [Windows]
abec
```

```txt [macOS / Linux]
./start_abec.sh
```

:::

然后按 control+C。我们通过此操作创建 **配置目录** 的位置到：

::: code-group

```txt [Windows]
C:\\Users\\[username]\\AppData\\Local\\Abec
```

```txt [macOS]
/Users/[username]/Library/Application Support/Abec
```

```txt [Linux]
/home/[username]/.abec
```

::: 

接下来，打开另一个 “终端” 或 “PowerShell”，进入 ~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/ 目录，然后运行

::: code-group

```txt [Windows]
abewallet --create
```

```txt [macOS / Linux]
./start_abewallet.sh --create
```

::: 

然后按 control+C。我们通过此操作创建 **配置目录** 的位置到：

::: code-group

```txt [Windows]
C:\\Users\\username\\AppData\\Local\\Abewallet
```

```txt [macOS]
/Users/username/Library/Application Support/Abewallet
```

```txt [Linux]
/home/username/.abewallet
```

::: 

**注意**：在 macOS 和 Linux 上，如果显示 ```xxx: Permission denied```（xxx：权限被拒绝），你可能需要运行 ```chmod 777 xxx```。

**注意**：在 macOS（M1 芯片 / arm64）上，如果显示 ```'xxx' is damaged and can't be opened```（xxx已损坏，无法打开），请打开“终端”并运行：
`xattr -d com.apple.quarantine path/to/xxx`。

**注意**：在 macOS 上，如果显示 ```'xxx' cannot be opened because the developer cannot be verified```（无法打开xxx，因为无法验证开发者），请前往 ```系统偏好设置 -> 安全性与隐私 -> 通用```，并点击```总是允许```。

## 2. 创建钱包

要创建钱包，请前往 ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/``` 并运行

::: code-group

```txt [Windows]
abewallet --create
```

```txt [macOS / Linux]
./start_abewallet.sh --create
```

::: 

这里有一个示例。

```txt
./start_abewallet.sh --create
Enter the private passphrase for your new wallet:
Confirm passphrase:
Enter the public passphrase for your new wallet:
Confirm passphrase:
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]:
Your wallet generation seed is:
afe0f025646cde3eee099db9215f8cdb212ed0e06730fd0087e9d1ff5565fd53
the crypto version is 0
Your wallet mnemonic list is:
quiz,always,announce,silver,social,buyer,return,crisp,rice,april,tobacco,rent,base,half,light,toward,wonder,aerobic,whip,physical,vocal,real,vocal,leg
IMPORTANT: Keep the version and seed in a safe place as you
will NOT be able to restore your wallet without it.
Please keep in mind that anyone who has access
to the seed can also restore your wallet thereby
giving them access to all your funds, so it is
imperative that you keep it in a secure location.
Once you have stored the seed in a safe and secure location, enter "OK" to continue: OK
Creating the wallet...
Please remember the initial address:
00000000005a38589d86427698e3ec735335b368899ed6e0239c4285bbc4e370f4ea4e6d2ac1f1555b53f8df7c30e13d4bccc3b6d56763ec279620d9f131fb68089cb8ef18885950f84e56bf78d1780a5cac57d0888dabd669f86f85e7055afabae6a332fa000b3c6ee6a09751ce41ad7de4e...
```

**公钥**将在运行 abewallet 时使用，而**私钥**将用于解锁钱包（因此用于花费转账 ABEL 代币）。这些密钥并不相同，并且需要严格保密。

**重要提示**：将加密版本和助记词列表保存在安全的地方，并且还要记住你恢复同一个钱包的次数。助记词列表可以在将来丢失钱包、安装另一台矿机时使用相同的钱包，或升级挖矿软件时用于恢复钱包。

**初始地址**将来会被用作你的挖矿地址或支付地址。

**重要提示**：所有这些信息都应该记录下来，即公钥、私钥、加密版本、助记词列表、初始地址，以及同一个钱包被恢复的次数。

## 3. 配置全节点 - abec

进入 abec 的配置文件夹，并按照下面的说明修改配置文件 **abec.conf**。

### 3.1 监听指定端口

Abelian 全节点（即 abec）的默认监听端口是 8666。如果您希望使用其他端口（范围在[1025-65535]之间），例如18666，您可以通过在 abec.conf 中添加以下内容来指定它。

```txt
listen=:18666
```

### 3.2 广播您的（挖矿）节点
您可以通过广播您的 IP 地址让主网上的其他 Abelian 节点知道您的存在。如果您有一个公共 IP 或者已经在您的路由器上设置了 IP 转发，这将是可行的。您可以在 abec.conf 配置文件中指定您的外部 IP 地址（例如1.2.3.4）：

```txt
externalip=1.2.3.4
```

如果您使用的是其他监听端口（例如18666）而不是默认端口（8666），您还需要指定端口：

```
externalip=1.2.3.4:18666
```

如果您的节点位于路由器后面，您也可以通过在 abec.conf 中添加以下内容来启用 UPnP。

```
upnp=1
```

### 3.3 RPC 参数值

为了让您的 ABEL 钱包（abewallet），连接到 abec，您需要知道 abec.conf 中的参数 rpcuser 和 rpcpass 的值。

```
rpcuser = [rpcuser]
rpcpass = [rpcpass]
```

您可以保留这些自动生成的 rpcuser 和 rpcpass 值不变。

### 3.4 挖矿地址

如果您想运行一个全节点并且同时作为挖矿节点（我认为您确实想这样做），您需要将您钱包的初始地址填写到 abec.conf 中的 miningaddr 选项。

```
miningaddr = [您的初始钱包地址]
```

## 4. 配置钱包 - abewallet

您的 ABEL 钱包（abewallet）需要连接到全节点（abec）。在位于 abewallet 配置文件夹下的 abewallet.conf 文件中配置以下选项：

```
abecrpcuser= [rpcuser in abec.conf]
abecrpcpass= [rpcpass in abec.conf]
```

`[abec.conf 中的 rpcuser]` 和 `[abec.conf 中的 rpcpass]` 分别对应的是 abec.conf 文件中 rpcuser 和 rpcpass 的值。此设置将允许 abewallet 连接到 abec。

此外，为了让 abectl（abewallet 控制台）稍后与 abewallet 交互，我们需要在 abewallet.conf 中设置以下选项：
```
rpcuser= [username]
rpcpass= [password]
```

***注意***：换句话说，abewallet.conf 中的 abecrpcuser / abecrpcpass 对应于 abec.conf 中的 rpcuser / rpcpassword，分别用于在 abec 和 abewallet 之间建立安全的 RPC 通信渠道。而 abewallet.conf 中的rpcuser / rpcpass 将用于 abectl（将要介绍）和 abewallet 之间建立安全的 RPC 通信渠道。

除了上述配置外，如果您在不同的机器上运行 abec 和 abewallet，您还需要进行以下几项配置。

### 4.1 在不同的机器上运行 abec 和 abewallet

在 **abec.conf** 中添加以下选项：

```
rpclisten=[IP地址:端口]
```

如果只有一个本地网络 IP 地址，或者为了简单起见，可以是 0.0.0.0，这意味着监听所有 IP 地址的端口。

接下来，在 abewallet.conf 中添加以下选项，以指定远程全节点（abec）的IP地址和端口。

```
rpcconnect=[IP地址:端口]
```

IP 地址和端口分别是 abec 的 IP 地址和监听端口。如果没有指定端口，默认端口（8667）将被使用。

最后，从远程完整节点abec的配置文件夹复制 rpc.cert 文件，并将该文件存储为 ```~/Documents/abel/rpc.cert```，并在 abewallet.conf 中设置 cafile 选项为

```
cafile=~/Documents/abel/rpc.cert
```

## 5. 运行（挖矿）全节点 - abec
Go to ```~/Documents/abel/abec-macos-amd64-v1.0.0/``` and run a full node (abec):
进入 ```~/Documents/abel/abec-macos-amd64-v1.0.0/``` 并运行一个全节点（abec）：

::: code-group

```txt [Windows]
abec --generate
```

```txt [macOS / Linux]
./start_abec.sh --generate
```

:::

上述命令还会使 abec 开始挖矿。如果您不想挖矿，而是只想将 abec 作为一个全节点运行：

::: code-group

```txt [Windows]
abec
```

```txt [macOS / Linux]
./start_abec.sh
```

:::

示例：

```shell
./start_abec.sh --generate
2022-08-08 12:08:46.663 [INF] ABEC: Version 0.11.0
2022-08-08 12:08:46.664 [INF] ABEC: Loading block database from '/Users/username/Library/Application Support/Abec/data/mainnet/blocks_ffldb'
2022-08-08 12:08:46.720 [INF] ABEC: Block database loaded
2022-08-08 12:08:49.731 [INF] CHAN: Loading block index...
2022-08-08 12:08:50.087 [INF] CHAN: Chain state (height 48598, hash 00000000016f90d388ddae2c66cb2c665d6ffaaf09b9213ff037f2ec169e7796, totaltx 48643, work 1111339015394973)
2022-08-08 12:08:50.106 [INF] MINR: CPU miner started
2022-08-08 12:08:50.106 [INF] RPCS: RPC server listening on [::1]:8667
2022-08-08 12:08:50.106 [INF] RPCS: RPC server listening on 127.0.0.1:8667
2022-08-08 12:08:50.119 [INF] AMGR: Loaded 686 addresses from file '/Users/username/Library/Application Support/Abec/data/mainnet/peers.json'
2022-08-08 12:08:50.123 [INF] CMGR: 39 addresses found from DNS seed dnsseed.theabelian.net
2022-08-08 12:08:50.120 [INF] CMGR: Server listening on 0.0.0.0:8666
2022-08-08 12:08:50.120 [INF] CMGR: Server listening on [::]:8666
```

## 6. 运行钱包 - abewallet
Go to ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/```  and run the wallet (abewallet):
进入 ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/``` 并运行钱包（abewallet）：

::: code-group

```txt [Windows]
abewallet --walletpass=[您的公钥]
```

```txt [macOS / Linux]
./start_abewallet.sh --walletpass=[您的公钥]
```

:::

示例：

```shell
./start_abewallet.sh --walletpass=123456
2022-08-08 12:36:05.427 [INF] ABEW: Version 0.11.0
2022-08-08 12:36:05.438 [INF] RPCS: Listening on 127.0.0.1:8665
2022-08-08 12:36:05.438 [INF] RPCS: Listening on [::1]:8665
2022-08-08 12:36:05.439 [INF] ABEW: Attempting RPC client connection to localhost:8667
2022-08-08 12:36:06.270 [INF] WLLT: Opened wallet
2022-08-08 12:36:06.527 [INF] CHNS: Established connection to RPC server localhost:8667
2022-08-08 12:36:17.462 [INF] WLLT: Catching up block hashes to height 48610, this might take a while
2022-08-08 12:36:18.203 [INF] TMGR: Current sync height 1
2022-08-08 12:36:20.069 [INF] TMGR: Current sync height 2
2022-08-08 12:36:20.659 [INF] TMGR: Current sync height 3
2022-08-08 12:36:21.273 [INF] TMGR: Current sync height 4
2022-08-08 12:36:22.446 [INF] TMGR: Current sync height 5
2022-08-08 12:36:23.013 [INF] TMGR: Current sync height 6
2022-08-08 12:36:23.629 [INF] TMGR: Current sync height 7
2022-08-08 12:36:25.184 [INF] TMGR: Current sync height 8
```

***注意***：一个钱包就足够了。您只需要将同一个钱包的挖矿地址添加到您每台挖矿机的 abec.conf 中，并将 abewallet 连接到其中的任何一个。您的 ABEL 钱包的总余额将会自动从 Abelian 区块链中汇总。

## 7. 使用 abectl（控制台钱包）操作 abewallet

在 abec 文件夹中，还有另一个可执行文件名为 start_abectl.sh（macOS 和 Linux）或 abectl（Windows）。这个可执行文件可以用来检查您的钱包余额，进行转账等操作。

### 7.1 检查余额

运行以下命令来检查您的钱包余额，其中用户名和密码应该与我们在 abewallet.conf 中配置的 rpcuser 和 rpcpass 选项相同。

::: code-group

```txt [Windows]
abectl --rpcuser=[username] --rpcpass=[password] --wallet getbalancesabe
```

```txt [macOS / Linux]
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --wallet getbalancesabe
```

:::

示例：

```shell
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --wallet getbalancesabe
{"current_time":"2022-05-26 23:08:07.730291 +0800 HKT m=+10.601777429","current_height":12051,"current_block_hash":"00000000734e4c08b4422954da4df52c42fa1b3466e340ac332ad037f9a15ad5","total_balance":103424,"spendable_balance":102400,"freeze_balance":1024}
```

### 7.2 如果 Abectl 和 Abewallet 在不同的机器上

当运行abectl时，我们需要指定远程abewallet的IP地址和端口。为此，我们使用参数 `--rpcserver=[IP地址:端口]`。

要获取远程 abewallet 的 RPC 证书，您需要从 abewallet 的配置文件夹复制文件 rpc.cert，并将其粘贴到运行 abectl 的机器的任何位置，并在运行 abectl 时添加参数 `--rpccert=[证书位置]`。

::: code-group

```txt [Windows]
abectl --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
```

```txt [macOS / Linux]
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
```

:::


示例：

```shell
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --rpcserver=192.168.1.3:8665 --rpccert=/home/username/rpc.cert --wallet getbalancesabe
{"current_time":"2022-05-26 23:08:07.730291 +0800 HKT m=+10.601777429","current_height":12051,"current_block_hash":"00000000734e4c08b4422954da4df52c42fa1b3466e340ac332ad037f9a15ad5","total_balance":103424,"spendable_balance":102400,"freeze_balance":1024}
```

### 7.3 解锁

在您发送交易或生成新地址之前，您应该先解锁钱包。

::: code-group

```txt [Windows]
abectl --rpcuser=[rpc username] --rpcpass=[rpc password] --wallet unlockwallet [private passphrase] [timeout]
```

```txt [macOS / Linux]
./start_abectl.sh --rpcuser=[rpc username] --rpcpass=[rpc password] --wallet unlockwallet [private passphrase] [timeout]
```

:::

**注意**：超时的单位是秒。

示例：

```shell
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --wallet unlockwallet 123456 240
```

这意味着用密码 123456 解锁钱包需要240秒。

### 7.4 生成新钱包地址

生成一个新地址（用于接收 ABEL 代币）

::: code-group

```txt [Windows]
abectl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
```

```txt [macOS / Linux]
./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
```

:::

### 7.5 恢复钱包

如果您想恢复一个钱包，请删除 Abewallet 配置文件夹中的 ```logs/ 和 mainnet/``` 文件夹，然后运行

::: code-group

```txt [Windows]
abewallet --create
```

```txt [macOS / Linux]
./start_abewallet.sh --create
```

:::

示例：

```shell
$ ./start_abewallet.sh --create
Enter the private passphrase for your new wallet:
Confirm passphrase:
Enter the public passphrase for your new wallet:
Confirm passphrase:
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: y
Enter the crypto version is:0
Enter existing wallet mnemonic: biology,hazard,sudden,dignity,drop,jealous,butter,believe,answer,enter,practice,scorpion,health,tunnel,rival,vault,neutral,season,proof,must,path,steel,final,female
Please input the max No. of address to recover :5
Creating the wallet...
2022-05-07 19:55:01.548 [INF] WLLT: The addresses with No. in [0, 5] have been restored.
2022-05-07 19:55:02.282 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

***注意***：恢复的最大地址数量是钱包被恢复的次数。

## 8. 升级挖矿软件

如果您已经运行了挖矿软件套件的某个版本（比如 v0.10.1），您可以按照以下步骤升级到最新版本（本文举例的版本为 v0.11.0）。

停止运行旧版本的 abec 和 abewallet。

下载并解压两个压缩文件，例如针对运行在 x86 架构（比如 Intel 芯片 macOS 的 **abec-macos-amd64-v1.0.0.tar.gz** 和 **abewalletmlp-macos-amd64-v1.0.1.tar.gz**。

To ease the description below, let's put these two folders under a folder called **abel/** under **Documents**. Something like:
为了简化以下描述，让我们将这两个文件夹放在 Documents 下命名为 **abel/** 的文件夹中。像这样：

```txt
1. ~/Documents/abel/abec-macos-amd64-v1.0.0/
2. ~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/
```

### 8.1 运行新版本的 abec
按如下方式进入 abec 的配置文件夹：

::: code-group

```txt [Windows]
C:\\Users\\[username]\\AppData\\Local\\Abec
```

```txt [macOS]
/Users/[username]/Library/Application Support/Abec
```

```txt [Linux]
/home/[username]/.abec
```

:::

注释掉 abec.conf 中的所有 addpeer 选项。例如：

```txt
;addpeer = 18.117.106.180:8666
;addpeer = 3.145.81.196:8666
;addpeer = 3.66.221.224:8666
;addpeer = 3.120.150.60:8666
```

进入 ```~/Documents/abel/abec-macos-amd64-v1.0.0/```，并运行：

::: code-group

```txt [Windows]
abec --generate
```

```txt [macOS / Linux]
./start_abec.sh --generate
```

:::

### 8.2 运行新版本的 abewallet
这部分有点复杂，因为我们需要删除旧版本 abewallet 的配置文件夹，并在运行新版本的 abewallet 之前恢复您的钱包。

删除 abewallet 配置文件夹：

::: code-group

```txt [Windows]
C:\\Users\\username\\AppData\\Local\\Abewallet
```

```txt [macOS]
/Users/username/Library/Application Support/Abewallet
```

```txt [Linux]
/home/username/.abewallet
```

:::

进入 ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/```，并运行：

::: code-group

```txt [Windows]
abewallet --create
```

```txt [macOS / Linux]
./start_abewallet.sh --create
```

:::

按control+C。我们通过此操作来重新创建**配置文件夹**。

进入配置文件夹并在 **abewallet.conf** 文件中配置以下参数：

```
abecrpcuser= [rpcuser in abec.conf]
abecrpcpass= [rpcpass in abec.conf]
```

`[abec.conf 中的 rpcuser]` 和 `[abec.conf 中的 rpcpass]` 分别对应的是 abec.conf 文件中的 rpcuser 和 rpcpass 参数的值。这两个选项将允许 abewallet 连接到 abec。

此外，为了让 ***abectl***（abewallet 控制台）稍后与 abewallet 交互，我们需要在 abewallet.conf 中设置以下选项：

```
rpcuser= [username]
rpcpass= [password]
```

***注意***：换句话说，abewallet.conf 中的 abecrpcuser / abecrpcpass 对应于 abec.conf 中的 rpcuser / rpcpassword，分别用于在 abec 和a bewallet 之间建立安全的 RPC 通信渠道。而 abewallet.conf 中的rpcuser / rpcpass 将用于在 abectl（将要介绍）和 abewallet 之间建立安全的 RPC 通信渠道。

接下来，进入 ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/```，并恢复钱包：

::: code-group

```txt [Windows]
abewallet --create
```

```txt [macOS / Linux]
./start_abewallet.sh --create
```

:::

示例：

```shell
$ ./start_abewallet.sh --create
Enter the private passphrase for your new wallet:
Confirm passphrase:
Enter the public passphrase for your new wallet:
Confirm passphrase:
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: y
Enter the crypto version is:0
Enter existing wallet mnemonic: biology,hazard,sudden,dignity,drop,jealous,butter,believe,answer,enter,practice,scorpion,health,tunnel,rival,vault,neutral,season,proof,must,path,steel,final,female
Please input the max No. of address to recover :5
Creating the wallet...
2022-05-07 19:55:01.548 [INF] WLLT: The addresses with No. in [0, 5] have been restored.
2022-05-07 19:55:02.282 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

***注意***：恢复的最大地址数量是钱包被恢复的次数。

最后，运行钱包（abewallet）：

::: code-group

```txt [Windows]
abewallet --walletpass=[您的公钥]
```

```txt [macOS / Linux]
./start_abewallet.sh --walletpass=[您的公钥]
```

:::

示例：

```shell
./start_abewallet.sh --walletpass=123456
2022-08-08 12:36:05.427 [INF] ABEW: Version 0.11.0
2022-08-08 12:36:05.438 [INF] RPCS: Listening on 127.0.0.1:8665
2022-08-08 12:36:05.438 [INF] RPCS: Listening on [::1]:8665
2022-08-08 12:36:05.439 [INF] ABEW: Attempting RPC client connection to localhost:8667
2022-08-08 12:36:06.270 [INF] WLLT: Opened wallet
2022-08-08 12:36:06.527 [INF] CHNS: Established connection to RPC server localhost:8667
2022-08-08 12:36:17.462 [INF] WLLT: Catching up block hashes to height 48610, this might take a while
2022-08-08 12:36:18.203 [INF] TMGR: Current sync height 1
2022-08-08 12:36:20.069 [INF] TMGR: Current sync height 2
2022-08-08 12:36:20.659 [INF] TMGR: Current sync height 3
2022-08-08 12:36:21.273 [INF] TMGR: Current sync height 4
2022-08-08 12:36:22.446 [INF] TMGR: Current sync height 5
2022-08-08 12:36:23.013 [INF] TMGR: Current sync height 6
2022-08-08 12:36:23.629 [INF] TMGR: Current sync height 7
2022-08-08 12:36:25.184 [INF] TMGR: Current sync height 8
```

## 8.3 运行新版本的 abectl

进入 ```~/Documents/abel/abec-macos-amd64-v1.0.0/```，并运行以下命令以检查余额：

::: code-group

```txt [Windows]
abectl --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
```

```txt [macOS / Linux]
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
```

:::