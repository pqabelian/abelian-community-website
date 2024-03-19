---
title: Get Started
outline: deep
---

# 开始

## 1. 安装
有三个软件：** abec **，** abewallet **和** abectl **。它们在两个压缩文件中下载，类似于** abec-macos-amd64-v0.11.11.11.0.tar.gz **和** ** abewallet-macos-amd64-v0.11.11.11.11.tar.gz **，用于MacOS在MacOS上X86体系结构（例如英特尔芯片）。更多信息可以在不和谐中找到。

解开两个文件，您将获得两个文件夹，例如** Abec-Macos-AMD64-V0.11.0/**和** Abewallet-Macos-Amd64-V0.11.11.0/**。为了简化下面的描述，让我们将这两个文件夹放在一个名为** Abel/**的文件夹下，**文件** **。就像是：

```shell
1. ~/Documents/abel/abec-macos-amd64-v0.11.0/
2. ~/Documents/abel/abewallet-macos-amd64-v0.11.0/
```

**abec** and **abectl** are in ```~/Documents/abel/abec-macos-amd64-v0.11.0/``` and ***abewallet*** is in ```~/Documents/abel/abewallet-macos-amd64-v0.11.0/```.

要运行这些软件，我们使用终端（用于MACOS和Linux）或PowerShell（用于Windows）。

打开终端 / powershell， go to ```~/Documents/abel/abec-macos-amd64-v0.11.1/```, and run

```shell
# macOS and Linux
./start_abec.sh
# Windows
abec
```

然后按Control+c。通过这样做，我们创建一个位于以下位置的**配置文件夹**

- Windows: C:\\Users\\[username]\\AppData\\Local\\Abec
- macOS: /Users/[username]/Library/Application Support/Abec
- Linux: /home/[username]/.abec

接下来，打开另一个终端 / powershell， go to ```~/Documents/abel/abewallet-macos-amd64-v0.11.0/```, and run

```shell
# macOS and Linux
./start_abewallet.sh --create
# Windows
abewallet --create
```

然后按Control+c。通过这样做，我们创建一个位于以下位置的**配置文件夹**

- Windows: C:\\Users\\username\\AppData\\Local\\Abewallet
- macOS: /Users/username/Library/Application Support/Abewallet
- Linux: /home/username/.abewallet

**Note:** On macOS and Linux, you may need to run ```chmod 777 xxx``` if it says ```xxx: Permission denied```. 

**Note**: On macOS (M1 chip / arm64), if it says ```'xxx' is damaged and can't be opened```, open a Terminal and run  
`xattr -d com.apple.quarantine path/to/xxx`.

**Note**: On macOS, if it says ```'xxx' cannot be opened because the developer cannot be verified```, go to ```System Preferences -> Security & Privacy -> General``` and click ```allow anyway```. 

## 2. Create a wallet
To create a wallet, go to ```~/Documents/abel/abewallet-macos-amd64-v0.11.1/``` and run

```shell
# macOS and Linux
./start_abewallet.sh --create
# Windows
abewallet --create
```

Here is an example.

```shell
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

在运行AbeWallet时，将使用**公共密码**，并且**私有密码**将用于解锁钱包（因此要花费转移Abel代币）。这些密码应不同，并严格安全。

**重要：**保留**加密版**和** mnemonic列表**在安全的地方，还要记住您恢复了同一钱包的次数。助记符列表将来可以用于恢复钱包，以防您丢失钱包，在使用同一钱包时安装另一台采矿机，或升级采矿软件。

**初始地址**将稍后用作您的采矿地址或付款地址。

**重要：**所有这些信息都应被复制，即公共密码，私人密码，加密版，助记符列表，初始地址以及相同钱包已恢复的次数。

## 3. 配置 -  ABEC
转到ABEC的配置文件夹，然后在配置文件** abec.conf **中进行更改。

### 3.1 听特定的端口
Abelian节点的默认收听端口（即ABEC）为8666。如果您想使用其他端口（例如[1025-65535]在[1025-65535]中），例如18666，则可以通过将以下内容添加到ABEC中来指定它。conf。

```
listen=:18666
```

### 3.2 广播您的（采矿）节点
您可以通过广播您的IP地址来使Mainnet上的其他Abelian节点知道您的存在。如果您有公共IP或在路由器上已经设置了一些IP转发，则可以使用。为此，您可以在Abec.conf中指定外部IP（例如1.2.3.4）：

```
externalip=1.2.3.4
```

如果您使用的是其他一些清单端口（例如18666）而不是默认端口（8666），则需要指定端口：

```
externalip=1.2.3.4:18666
```

如果您的节点位于路由器后面，则可以通过在Abec.conf中添加以下内容启用UPNP。

```
upnp=1
```

### 3.3 RPC 值

要让您的亚伯钱包，即Abewallet，连接到ABEC，您需要知道Abec.conf中的rpcuser和rpcpass的值。

```
rpcuser = [rpcuser]
rpcpass = [rpcpass]
```

您可以将这些自动生成的RPCUSER和RPCPASS值保持不变。

### 3.4 采矿地址

如果您想运行一个完整的节点，也想作为采矿节点（我认为您这样做），则需要将钱包的初始地址包括在Abec.conf中的MiningAddr选项中。

```
miningaddr = [your initial address]
```

## 4. 配置 -  abewallet
您的亚伯钱包（Abewallet）需要连接到一个完整节点之一（ABEC）。在 * abewallet.conf *中配置以下选项，该选项位于Abewallet的配置文件夹中：

```
abecrpcuser= [rpcuser in abec.conf]
abecrpcpass= [rpcpass in abec.conf]
```

`[rpcuser in abec.conf]` and `[rpcpass in abec.conf]` 来自Abec.conf的RPCUSER和RPCPASS值。这允许Abewallet连接到ABEC。

此外，为了让*** Abectl ***（AbeWallet Control Console）稍后与Abewallet进行交互，我们需要在abewallet.conf中设置以下选项。

```
rpcuser= [username]
rpcpass= [password]
```

***注意：***换句话说，abecrpcuser / abecrpcpass（在abewallet.conf中）对应于rpcuser / rpcpassword（在abec.conf中），并使用，并用于在Abec和Abewet之间建立安全的RPC通信通道。而RPCUSER / RPCPASS（在Abewallet.conf中）将用于在Abectl（待引入）和Abewallet之间建立安全的RPC通信通道。

除了上面的配置外，如果您在不同的计算机上运行ABEC和ABEWALLET，则需要进行更多配置。


### 4.1 abec 和 abewallet 在不同的机器上运行

在 *abec.conf *中添加以下选项：

```
rpclisten=[IP:PORT]
```

如果只有一个本地净IP或为简单起见，则可以是0.0.0.0，这意味着聆听所有IPS的端口。

接下来，在 * abewallet.conf *中添加以下选项，以指定远程完整节点（ABEC）的IP地址和端口。

```
rpcconnect=[IP:PORT]
```

IP和端口分别是ABEC的IP地址和侦听端口。如果未指定端口，则将使用默认端口（8667）。

Finally, copy *rpc.cert* from the configuration folder of the remote full node, abec, and store the file as ```~/Documents/abel/rpc.cert``` and set the cafile option in *abewallet.conf* as

```
cafile=~/Documents/abel/rpc.cert
```

## 5. Running a Full (Mining) Node - abec
Go to ```~/Documents/abel/abec-macos-amd64-v0.11.1/``` and run a full node (abec):

```shell
# macOS and Linux
./start_abec.sh --generate
# Windows
abec --generate
```

上述命令还使ABEC开始采矿。如果您不想开采，而只需以一个完整的节点运行ABEC：

```shell
# macOS and Linux
./start_abec.sh
# Windows
abec
```

例子：

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

## 6. 运行钱包 -  abewallet
Go to ```~/Documents/abel/abewallet-macos-amd64-v0.11.1/```  and run the wallet (abewallet):

```shell
# macOS and Linux
./start_abewallet.sh --walletpass=[your public passphrase]
# Windows
abewallet --walletpass=[your public passphrase]
```

Example:

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

***Note:*** **One wallet is enough.** 您只需要将同一钱包的采矿地址添加到每台采矿机的ABEC.conf中，然后将Abewallet连接到其中一个**。亚伯钱包的总余额将自动从阿贝里安区块链中分配。

## 7. 使用Abectl（钱包控制控制台）进行操作

在ABEC文件夹中，还有另一个可执行文件称为start_abectl.sh（MacOS和Linux）或Abectl（Windows）。该可执行文件可用于检查钱包的余额，进行资金转让等等。

### 7.1 查看余额

运行以下操作以检查钱包的余额，其中 *用户名 *和 *密码 *应该与我们在 *abewallet.conf *（respecitvely）中配置的选项 *rpcuser *和 *rpcpass *相同。

```shell
# macOS and Linux
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --wallet getbalancesabe
# Windows
abectl --rpcuser=[username] --rpcpass=[password] --wallet getbalancesabe
```

例子：

```shell
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --wallet getbalancesabe
{"current_time":"2022-05-26 23:08:07.730291 +0800 HKT m=+10.601777429","current_height":12051,"current_block_hash":"00000000734e4c08b4422954da4df52c42fa1b3466e340ac332ad037f9a15ad5","total_balance":103424,"spendable_balance":102400,"freeze_balance":1024}
```

### 7.2 如果Abectl和Abewallet在不同的机器上
运行ABECTL时，我们需要指定远程Abewallet的IP地址和端口。为此，我们使用参数 `--rpcserver=[IP:PORT]`.

To get the RPC certificate of the remote abewallet, you need to copy the file *rpc.cert* from the configuration folder of abewallet, and paste it in any place in the machine which runs abectl, and add parameter  `--rpccert=[location of cert]` while running abectl.

```shell
# macOS and Linux
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
# Windows
abectl --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
```

Example:

```shell
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --rpcserver=192.168.1.3:8665 --rpccert=/home/username/rpc.cert --wallet getbalancesabe
{"current_time":"2022-05-26 23:08:07.730291 +0800 HKT m=+10.601777429","current_height":12051,"current_block_hash":"00000000734e4c08b4422954da4df52c42fa1b3466e340ac332ad037f9a15ad5","total_balance":103424,"spendable_balance":102400,"freeze_balance":1024}
```

### 7.3 解锁 

在发送交易或生成新地址之前，应首先解锁钱包。

```shell
# macOS and Linux
./start_abectl.sh --rpcuser=[rpc username] --rpcpass=[rpc password] --wallet unlockwallet [private passphrase] [timeout]
# Windows
abectl --rpcuser=[rpc username] --rpcpass=[rpc password] --wallet unlockwallet [private passphrase] [timeout]
```

**注意**：超时单位为几秒钟。

Example:

```shell
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --wallet unlockwallet 123456 240
```

这意味着用密码123456解锁240秒的钱包。

### 7.4 Generate a new address

To generate a new address (for receiving ABEL tokens)

```shell
# macOS and Linux
./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
# Windows
abectl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
```

### 7.5 Recover a wallet

If you want to recover a wallet, delete *logs/* and *mainnet/* folders in the configuration folder of Abewallet, then run

```shell
# macOS and Linux
./start_abewallet.sh --create
# Windows
abewallet --create
```

Example:

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

***Note:*** The max No. of address to recover is the number of times that the wallet has been recovered.

## 8. Upgrade the Mining Software

If you already have a version of the mining software suite running (say v0.10.1), you can follow the steps below to upgrade to the latest version (v0.11.0 as of this writing).

Stop running both abec and abewallet of the old version.

Download and unzip the two compressed files, e.g. **abec-macos-amd64-v0.11.0.tar.gz** and **abewallet-macos-amd64-v0.11.0.tar.gz** for macOS running on an x86 architecture (e.g. Intel chips).

To ease the description below, let's put these two folders under a folder called **abel/** under **Documents**. Something like:

```shell
1. ~/Documents/abel/abec-macos-amd64-v0.11.0/
2. ~/Documents/abel/abewallet-macos-amd64-v0.11.0/
```

### 8.1 Run the new version of abec
Go to the configuration folder of abec as follows:


- Windows: C:\\Users\\[username]\\AppData\\Local\\Abec
- macOS: /Users/[username]/Library/Application Support/Abec
- Linux: /home/[username]/.abec

Comment out all the addpeer options in abec.conf. For example:

```shell
;addpeer = 18.117.106.180:8666
;addpeer = 3.145.81.196:8666
;addpeer = 3.66.221.224:8666
;addpeer = 3.120.150.60:8666
```

Go to ```~/Documents/abel/abec-macos-amd64-v0.11.1/```, and run

```shell
# macOS and Linux
./start_abec.sh --generate
# Windows
abec --generate
```

### 8.2 Run the new version of abewallet
This part is bit complicated as we need to remove the old configuration folder of abewallet and recover your wallet before running the new version of abewallet.

Remove the abewallet configuration folder:

- Windows: C:\\Users\\username\\AppData\\Local\\Abewallet
- macOS: /Users/username/Library/Application Support/Abewallet
- Linux: /home/username/.abewallet

Go to ```~/Documents/abel/abewallet-macos-amd64-v0.11.0/```, and run:

```shell
# macOS and Linux
./start_abewallet.sh --create
# Windows
abewallet --create
```

Press control+C. By doing this, we re-create the **configuration folder**.

Go to the configuration folder and configure the following options in *abewallet.conf*:

```
abecrpcuser= [rpcuser in abec.conf]
abecrpcpass= [rpcpass in abec.conf]
```

`[rpcuser in abec.conf]` and `[rpcpass in abec.conf]` are the rpcuser and rpcpass values, respecitvely, from abec.conf. This allows abewallet to connect to abec.

In addition, in order to let ***abectl*** (abewallet control console) interact with abewallet later, we need to set the following options in abewallet.conf.

```
rpcuser= [username]
rpcpass= [password]
```

***Note:*** In other words, abecrpcuser / abecrpcpass (in abewallet.conf) correspond to rpcuser / rpcpassword (in abec.conf), respecitvely, and are used for establishing a secure RPC communication channel between abec and abewallet. While rpcuser / rpcpass (in abewallet.conf) will be used for establishing a secure RPC communication channel between abectl (to be introduced) and abewallet.

Next, go to ```~/Documents/abel/abewallet-macos-amd64-v0.11.0/```, and recover the wallet:

```shell
# macOS and Linux
./start_abewallet.sh --create
# Windows
abewallet --create
```

Example:

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

***Note:*** The max No. of address to recover is the number of times that the wallet has been recovered.

Finally, run the wallet (abewallet):

```shell
# macOS and Linux
./start_abewallet.sh --walletpass=[your public passphrase]
# Windows
abewallet --walletpass=[your public passphrase]
```

Example:

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

## 8.3 Run the new version of abectl
Go to ```~/Documents/abel/abec-macos-amd64-v0.11.1/```, and run the following to check the balance:

```shell
# macOS and Linux
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
# Windows
abectl --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
```