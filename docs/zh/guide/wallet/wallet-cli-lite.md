---
outline: deep
---

# Abelian 轻量钱包（CLI）版手册

我们将学习如何创建一个Abelian CLI（命令行界面）轻量级钱包，使用它来创建钱包地址、检查 ABEL 余额和转账。

Abelian 轻量钱包（CLI） 基本上是 Abelian 钱包（CLI）（abelwallet）的简化版，但不需要配置和运行本地 Abelian 全节点（abec）来通信，轻量钱包（CLI）只需要通过配置与 Abelian 基金会或其合作伙伴运行的一个 Abelian 全节点远程通信。

因此，只要远程节点开放了某个适当的端口（默认端口：8667）并且您拥有远程全节点所需的 RPC 证书和私钥，您就可以使用 Abelian 轻量钱包（CLI）连接到任何 Abelian 全节点。

使用 Abelian 轻量钱包（CLI）而不是本地运行完整钱包，即 abec 和 abelwallet 的一个明显的优势是可以节省本地磁盘存储空间，以及等待本地 abec 进行同步的时间。粗略估计当前可以节省超过 100GB 的存储空间，省去了在本地运行 abec 全节点。

获取 [Abelian 轻量钱包（CLI）](https://foundation.abelian.info/cn/downloads/#latest-release) 程序压缩包并解压。以下命令都可以在终端（macOS / Linux）或 PowerShell（Windows）中输入并执行。


## 1. 创建钱包
创建命令为：

::: code-group

```txt [Windows]
abewallet --create
```

```txt [macOS / Linux]
./start_abewallet.sh --create
```

:::

**注意事项1**：在 macOS 上，如果它显示 `“xxx” 无法打开，因为无法验证开发者`，请前往 `系统偏好设置 -> 安全性与隐私 -> 通用设置`，并点击 `总是允许`。然后再次按上述方式运行 abewallet。

**注意事项2**：在 macOS 上（苹果芯片，如 M1 和 M2 芯片/arm64架构），如果它显示 `“xxx” 已损坏且无法打开`，请输入 `xattr -d com.apple.quarantine path/to/xxx`，然后再次按上述方式运行 abewallet。

示例：

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

启动 abewallet 时需要使用 **公钥**，而 **私钥** 将用于解锁钱包（用于转账 ABEL）。

请将 **助记词** 保存到安全的地方，将来如果您丢失了钱包或想在另一台计算机上配置您的钱包，可以使用它来恢复。

**长地址**（长度为 21458 个字符）可以稍后作为挖矿地址实例或支付地址实例（用于接收 ABEL）。在本文中，我们不讨论 **短地址**（长度为 132 个字符），并将其留待一些应用层教程中再涉及。

## 2. 配置和运行一个实时钱包

### 2.1 配置钱包

在运行钱包之前，我们需要修改 **abewallet.conf** 配置文件中的一些参数。该配置文件位于：

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

这些文件夹被称为 **配置文件夹**。

您可以从 https://foundation.abelian.info/en/downloads/ 下载预配置文件 **abewallet.conf**。以下是配置文件 **abewallet.conf** 的详细信息。

首先，在 **abewallet.conf** 中设置 **abecrpcuser** 和 **abecrpcpass**。例如，如果您想要连接到亚洲站点1，您可以进行如下设置：
```text
abecrpcuser=wgMURUUtK7o7pFgTg87D8GuSGg4=
abecrpcpass=biPPQXARkhtzQw3wV1NWAxuS6Vg=
```

如果您想要连接到其他网站，您可以设置以下内容：
```text
abecrpcuser=derKuJLKM5inu5uDmC7jxuHX57w=
abecrpcpass=ziUZ4ezY68ttB+9c7xBWmPQslVg=
```

但请记住，您一次只能连接到一个站点。如果您想要在配置文件中注释掉任何一行，请在该行前面加上`;`符号。

接下来，在 **abewallet.conf** 中设置 **rpcuser** 和 **rpcpass**：
```
rpcuser=XXX
rpcpass=YYY
```
其中 XXX 和 YYY 是由您填写自己的值。

然后，将 **abewallet.conf** 中的 **rpcconnect** 设置如下：

```text
rpcconnect=42.200.174.30
```

连接到亚洲站点1。

请参考预配置的 **abewallet.conf** 以获取其他站点信息。

最后，在 **abewallet.conf** 中通过指定全节点 RPC 证书 **abec_rpc_tm.cert** 的路径来设置 **cafile**。

```text
cafile=~/path/to/abec_rpc_tm.cert
```

此全节点 RPC 证书可从 https://foundation.abelian.info/en/downloads 下载。它被打包在一个名为 **abec_certs/** 的文件夹中。例如，我们可以将这个文件夹放置在 ```~/Documents/``` 中，并将 **abewallet.conf** 中的 **cafile** 设置为

```text
cafile=~/Documents/abec_certs/abec_rpc_tm.cert
```

在以上内容中，```abecrpcuser``` 和 ```abecrpcpass``` 用于建立您的本地 **abewallet** 与通过参数 ```rpcconnect``` 指定 IP 地址的远程完整 Abelian 节点之间的安全 RPC 通信渠道。而 ```rpcuser``` 和 ```rpcpass``` 则用于建立名为 **abewalletctl**（将介绍）的钱包控制器与此 **abewallet** 之间的本地 RPC 通信渠道。

目前，Abelian 基金会及其合作伙伴正在运行多个完整节点（**abec**），并且已经向所有人开放，以便使用他们的 Abelian 轻量钱包（CLI）进行连接。包括上述的完整节点，请在下面找到带有 IP 地址和 RPC 证书名称的完整节点列表。它们都共享相同的```abecrpcuser```和```abecrpcpass```如上所述。您可以选择其中一个进行连接。

```shell
Asia Site 1: 42.200.174.30 abec_rpc_tm.cert
Asia Site 2: 112.120.106.200 abec_rpc_cblk.cert
Europe Site 1: 116.202.169.210 abec_rpc_cblk.cert
Europe Site 2: 3.76.69.82 abec_rpc_frankfurt2.cert
America Site 1: 3.132.2.26 abec_rpc_ohio2.cert
America Site 2: 52.86.138.73 abec_rpc_nvir2.cert
```

所有这些证书都被打包在名为 **abec_certs/** 的文件夹中，其压缩形式可以从 https://foundation.abelian.info/en/downloads/ 下载。


### 2.2 运行实时钱包

完成上述配置后，在专用终端（macOS / Linux）或 PowerShell（Windows）上运行 **abewallet**，如下所示。持续运行 **abewallet** 的目的是与远程 Abelian 全节点同步区块，以发现所有与您的钱包地址相关的交易。

::: code-group

```txt [Windows]
abewallet --walletpass=[your public passphrase]
```

```txt [macOS/Linux]
./start_abewallet.sh --walletpass=[your public passphrase]
```

:::


其中 ```[你的公钥]``` 是你在第 1 部分创建钱包时选择的公钥。

同步可能会根据 Abelian 网络上的区块数量以及您的计算机与远程 Abelian 全节点之间的连接（比如，几个小时到一两天）而需要一段时间才能完成，在终端窗口我们可以看到状态。要了解 Abelian 网络当前的区块高度，请访问 https://explorer.abelian.info。

## 3. 查询余额

在 **abewallet** 完成上述同步之后，运行以下内容：

::: code-group

```txt [Windows]
abewalletctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet getbalancesabe
```

```txt [macOS/Linux]
./start_abewalletctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet getbalancesabe
```

:::

在以上内容中，```[rpcuser]``` 和 ```[rpcpass]``` 分别是你在第 2.1 部分的 **abewallet.conf** 中配置参数 **rpcuser** 和 **rpcpass** 的值。

例如：

```shell
./start_abewalletctl.sh --rpcuser=XXX --rpcpass=YYY --wallet getbalancesabe
{"current_time":"2022-05-26 23:08:07.730291 +0800 SGT m=+10.601777429","current_height":12051,"current_block_hash":"00000000734e4c08b4422954da4df52c42fa1b3466e340ac332ad037f9a15ad5","total_balance":103424,"spendable_balance":102400,"freeze_balance":1024}
```

在上面的命令行返回结果中，字段 ```total_balance``` 显示了钱包的余额。


## 4 为接收 ABEL 创建一个新的钱包地址

为了增强您的隐私，您可以考虑每次接收 ABEL 时都从同一个钱包生成一个新的钱包地址实例。

### 4.1 解锁

在创建新地址实例之前，我们需要确保 **abewallet** 按照第 2.2 部分所述正常运行。接下来，解锁钱包：

::: code-group

```txt [Windows]
abewalletctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet walletunlock [private passphrase] [timeout]
```

```txt [macOS/Linux]
./start_abewalletctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet walletunlock [private passphrase] [timeout]
```

:::

例如：

```shell
./start_abewalletctl.sh --rpcuser=XXX --rpcpass=YYY --wallet walletunlock myprivatepassphrase 240
```

这意味着使用私钥 ```myprivatepassphrase``` 解锁钱包 ```240``` 秒。


### 4.2 创建一个新的钱包地址

::: code-group

```txt [Windows]
abewalletctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
```

```txt [macOS/Linux]
./start_abewalletctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
```

:::

例如：

```shell
# macOS and Linux
./start_abewalletctl.sh --rpcuser=XXX --rpcpass=YYY --wallet generateaddressabe
[
  {
    "No": 2,
    "addr": "0000000000605660add742f3dcf88787a1618ecbc85289c188383d0df8ba292aa110b8592d3ef32da769bef62d707bad2dd870099fdd08cba30b52d6dcf4ca9c99834be04f2621b95ff8359ded46862fd229877a643951b66885fd3118c78b5d4773101a4e4a7e9a2c22780c15f29e1724edd9e9fa9c13c3d0483991b90fba4e9daeebeff42d0a4dcd93e4686cefceab6f5d07080ef1f77fdb9965354d48bbd82bfc7c47b8c295237b1ee88bd786b83931d7b74a8ba815ad14813d1f39b66a7c680bfdd77cce83aee4d018feac4928c0dc8f8774ee04ac60959be7f6a062f8c612c450b4957d5e1c48e3fa34a8bcdd6d93f1b70df0412dec32be232a5e54d4b0775ed031bc3dd585ad27e51b1e41662102ffc64e2b296224d8e4cf2cce9f26471b8b17bf26f9bc77985bc583098fe14c79473a3361866f513f43f859bc7492c4f6b6a7bcd2630a1669ba2e82e9ff93eecce1f4a77831f7742d12a966be4ad7f50b3313170465b649e5883861cda215d87ae801a1e11b5a5c...
```

该值（包含 21,458 个字符的长字符串）是正在创建的新钱包地址实例。你可以将这个新地址实例发送给发送者，以便他向你转账 ABEL。

**注意**：上述命令还会告诉你到目前为止你已经创建的地址总数。这个数字也会在 **abewallet** 的终端窗口中显示。

例如：

```shell
2022-08-18 03:16:29.749 [INF] WLLT: The address with No. 2 is created.
2022-08-18 03:16:29.749 [INF] WLLT: Wallet status: current max No. of address is 2.
```


## 5. 转账 ABEL

请参考第 4.1 部分的方法，首先暂时解锁钱包。

如第 4.2 部分所示，一个 ABEL 钱包地址非常长，在命令行中直接复制和粘贴长地址并不方便。因此，我们要做的是创建一个名为 **arg1** 的文件，并将该文件存储到下面的文件夹中。

::: code-group

```txt [Windows]
C:\\Users\\username\\AppData\\Local\\Abec
```

```txt [macOS]
/Users/username/Library/Application Support/Abec
```

```txt [Linux]
/home/username/.abec
```

:::

**arg1** 的内容如下：

```
[
    {
        "address":"receiver1_address",
        "amount":10000000
    },
    {
        "address":"receiver2_address",
        "amount":20000000
    }
]
```

请注意，金额的单位是 **Neutrino**。（1 ABEL = 10,000,000 Neutrinos）。根据上述 **arg1** 的内容，我们计划向地址实例 ```receiver1_address``` 发送一个ABEL，并向 ```receiver2_address``` 发送两个 ABEL。

在设置好 **arg1** 之后，输入以下内容以启动发送交易：

::: code-group

```txt [Windows]
abewalletctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet sendtoaddressesabe -
```

```txt [macOS/Linux]
./start_abewalletctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet sendtoaddressesabe -
```

:::

例如 (macOS):

```shell
$ cat /Users/username/Library/Application Support/Abec/arg1
[{"address":"receiver1_address", "amount":10000000},{"address":"receiver2_address", "amount":20000000 }]
$ ./start_abewalletctl.sh --rpcuser=XXX --rpcpass=YYY --wallet walletunlock myprivatepassphrase 240
$ ./start_abewalletctl.sh --rpcuser=XXX --rpcpass=YYY --wallet sendtoaddressesabe -
```


## 6. 恢复钱包

如果您需要在另一台机器上运行钱包，您需要按照以下说明来恢复并在这台新机器上设置您的钱包。

恢复钱包，请输入

::: code-group

```txt [Windows]
abewallet --create
```

```txt [macOS/Linux]
./start_abewallet.sh --create
```

:::

在输入 **私钥**、**公钥** 之后，对接下来的问题回答 **是**：

```shell
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: yes
```

并在以下问题中输入 **0**：

```shell
Enter the crypto version is: 0
```

然后在以下提示出现时输入您的24个单词的 ```助记词```（又称恢复密码）：

```shell
Enter existing wallet mnemonic:quiz,always,announce,silver,social,buyer,return,crisp,rice,april,tobacco,rent,base,half,light,toward,wonder,aerobic,whip,physical,vocal,real,vocal,leg
```

最后输入 **要恢复的地址总数**。这是为这个特定地址创建的地址实例的总数。请注意，这个数字是您上次通过助记词列表恢复钱包时输入的数字与自那以后您从这个钱包转出 ABEL 的次数之和。例如，如果上次通过助记词列表恢复钱包时您输入了 ***1***，并且从这个钱包进行了 ***19*** 次 ABEL 转账。那么此处您应该输入的要恢复的地址实例总数应该是 ***20***。示例：

```shell
Please input the max No. of address to recover : 20
```

下面是一个举例：

```shell
./start_abewallet.sh --create
Enter the private passphrase for your new wallet: 
Confirm passphrase: 
Enter the public passphrase for your new wallet: 
Confirm passphrase: 
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: yes
Enter the crypto version is:0
Enter existing wallet mnemonic: quiz,always,announce,silver,social,buyer,return,crisp,rice,april,tobacco,rent,base,half,light,toward,wonder,aerobic,whip,physical,vocal,real,vocal,leg
Please input the max No. of address to recover :20
Creating the wallet...
2022-06-09 10:06:15.069 [INF] WLLT: The addresses with No. in [0, 6] have been restored.
2022-06-09 10:06:15.933 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

我们明白，追踪这个数字可能会带来麻烦。Abelian 团队目前正在努力改进这种隐私保护机制，目标是彻底消除这一地址概念，以便我们在不久的将来不再需要跟踪要恢复的地址总数。

目前，有一个命令可以帮助我们找出当前钱包地址实例的总数：

::: code-group

```txt [Windows]
abewalletctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet addressmaxsequencenumber
```

```txt [macOS/Linux]
./start_abewalletctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet addressmaxsequencenumber
```

:::
