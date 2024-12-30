---
outline: deep
---

# Abelian 轻量钱包（CLI）用户手册

本文档描述了如何运行 Abelian 传统钱包（CLI）。

请先参考 **Abelian 软件基础** 以了解软件架构。

[官方 Abelian 下载页面](/zh/downloads/latest#abelian-轻量钱包-cli)。如需与其他矿工、开发者和用户互动，请访问 [官方 Discord 服务器](https://discord.com/invite/5rrDxP29hx)。

所有操作均通过命令行界面（CLI）进行。在 Linux 或 macOS 上，打开终端；在 Windows 上，打开 PowerShell 或您喜欢的任何 shell 应用程序。

注意：如果是从旧版本升级到最新版本，请直接跳到第 9 节，**升级到最新版本**。

## 1. 安装

下载两个压缩文件，例如 `abec-linux-amd64-v1.0.0.tar.gz` 和 `abewalletlegacy-linux-amd64-v1.0.0.tar.gz`，用于运行在 x86 架构（例如 Intel 芯片）的 Linux 系统。

解压它们并将它们放在同一文件夹下 `~/abel/`：

```bash
~/abel/abec-linux-amd64-v1.0.0/
~/abel/abewalletlegacy-linux-amd64-v1.0.0/
```

有三个可执行文件：`abec` 和 `abectl` 位于 `~/abel/abec-linux-amd64-v1.0.0/`，`abewalletlegacy` 位于 `~/abel/abewalletlegacy-linux-amd64-v1.0.0/`。

进入 `~/abel/abec-linux-amd64-v1.0.0/`，运行：

::: code-group

```txt [Windows]
abec
```

```txt [macOS and Linux]
./start_abec.sh
```

:::

然后按 `control+C` 停止它。这样做会为 `abec` 创建一个配置文件夹，位置在：

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abec
```

```txt [macOS]
~/Library/Application Support/Abec
```

```txt [Linux]
~/.abec
```

:::

接下来，进入 `~/abel/abewalletlegacy-linux-amd64-v1.0.0/`，运行：

::: code-group

```txt [Windows]
abewalletlegacy --create
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --create
```

:::

然后按 `control+C` 停止它。这样做会为 `abewalletlegacy` 创建一个配置文件夹，位置在：

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abewallet
```

```txt [macOS]
~/Library/Application Support/Abewallet
```

```txt [Linux]
~/.abewallet
```

:::

注意：在 macOS（M1/M2 芯片 / arm64）上，如果显示 `'xxx' 已损坏，无法打开`，请运行以下命令：

```bash
xattr -d com.apple.quarantine path/to/xxx
```

如果显示 `'xxx' cannot be opened because the developer cannot be verified`，请进入 `系统偏好设置 -> 安全与隐私 -> 通用`，并点击 `仍然允许`。

## 2. 创建钱包

要创建钱包，进入 `~/abel/abewalletlegacy-macos-amd64-v1.0.0/` 并运行：

::: code-group

```txt [Windows]
abewalletlegacy --create
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --create
```

:::

以下是一个示例：

```bash
$ ./start_abewalletlegacy.sh --create
Enter the private passphrase for your new wallet:
Confirm passphrase:
Enter the public passphrase for your new wallet:
Confirm passphrase:
NOTE: Use the `--walletpass` option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]:
Your wallet generation seed is:
afe0f025646cde3eee099db9215f8cdb212ed0e06730fd0087e9d1ff5565fd53
the crypto version is 0
Your wallet mnemonic list is:
quiz,always,announce,silver,social,buyer,return,crisp,rice,april,tobacco,rent,base,half,light,tow
ard,wonder,aerobic,whip,physical,vocal,real,vocal,leg
IMPORTANT: Keep the version and seed in a safe place as you
will NOT be able to restore your wallet without it.
Please keep in mind that anyone who has access
to the seed can also restore your wallet thereby
giving them access to all your funds, so it is
imperative that you keep it in a secure location.
Once you have stored the seed in a safe and secure location, enter "OK" to continue: OK
Creating the wallet...
Please remember the initial address:
00000000005a38589d86427698e3ec735335b368899ed6e0239c4285bbc4e370f4ea4e6d
2ac1f1555b53f8df7c30e13d4bccc3b6d56763ec279620d9f131fb68089cb8ef18885950f8
4e56bf78d1780a5cac57d0888dabd669f86f85e7055afabae6a332fa000b3c6ee6a09751ce4
1ad7de4e...
```

## 3. 配置 - abec

您可以通过广播您的 IP 地址（例如 `1.2.3.4`）让主网中的其他 Abelian 节点知道您的存在。此功能仅在您拥有公共 IP 或在路由器上配置了 IP 转发时有效：

```plaintext
externalip=1.2.3.4
```

允许 `abelminer` 连接到 `abec` 进行 GPU 挖矿：

```plaintext
enablegetwork=1
```

如果有多台 GPU 挖矿机器远程连接到这台 `abec`，请确保端口 `8668` 已打开：

```plaintext
rpclistengetwork=:8668
```

将钱包的初始地址设置为 `miningaddr`：

```plaintext
miningaddr = [your initial address]
```

## 4. 配置 - abewalletlegacy

从 `abec.conf` 中复制 RPC 值，即 `rpcuser` 和 `rpcpass`：

```plaintext
rpcuser = [rpcuser]
rpcpass = [rpcpass]
```

分别将它们粘贴到 `abewalletlegacy` 的配置文件夹中的 `abewallet.conf` 中：

```plaintext
abecrpcuser= [rpcuser in abec.conf]
abecrpcpass= [rpcpass in abec.conf]
```

此外，为了让 `abectl`（abewalletlegacy 控制台）以后能够与 `abewalletlegacy` 交互，我们需要在 `abewallet.conf` 中设置以下选项：

```plaintext
rpcuser= [whatever_username]
rpcpass= [whatever_password]
```

建议：为了简化用户名和密码管理，将 `abewallet.conf` 中的 `rpcuser` 和 `rpcpass` 设置为与 `abecrpcuser` 和 `abecrpcpass` 相同。

如果在不同的机器上运行 `abec` 和 `abewalletlegacy`，可能需要进行额外的 IP 和端口配置。

### 4.1 abec 和 abewalletlegacy 在不同机器上运行

如果您在不同的机器上运行 `abec` 和 `abewalletlegacy`，需要进行如下配置：

1. 在 `abec.conf` 中添加以下选项：

```plaintext
rpclisten=[IP:PORT]
```
Or simply:

```plaintext
rpclisten=
```

这将使您的 `abec` 在默认端口号（即 8667）上监听所有接口。

1. In `abewallet.conf`, add the following option to specify the IP address and port of the remote full node (`abec`):

```plaintext
rpcconnect=[IP:PORT]
```

其中 `[IP]` 是运行 `abec` 的机器的 IP 地址，`[PORT]` 是 `abec` 的监听端口（默认是 8667，如果未指定）。

2. 在 `abewallet.conf` 中，添加以下选项以指定远程全节点（`abec`）的 IP 地址和端口：

3. 进入 `abec` 的配置文件夹，删除两个 RPC 文件：`rpc.cert` 和 `rpc.key`。然后再次运行 `abec`，以在配置文件夹中生成一对新的 `rpc.cert`/`rpc.key`。

```plaintext
cafile=~/abel/rpc.cert
```

## 5. 运行全节点 - abec

要运行全节点：

::: code-group

```txt [Windows]
abec
```

```txt [macOS and Linux]
./start_abec.sh
```

:::

## 6. 运行钱包 - abewalletlegacy

要运行钱包：

::: code-group

```txt [Windows]
abewalletlegacy --walletpass=[your public passphrase]
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --walletpass=[your public passphrase]
```

:::

## 7. 使用 abectl 操作 abec 和 abewalletlegacy

在 `abec` 文件夹中，有一个可执行文件叫 `start_abectl.sh`（macOS 和 Linux）或 `abectl`（Windows）。此可执行文件可用于检查钱包余额、进行资金转账等操作。

### 7.1 检查余额

运行以下命令检查钱包余额，其中 `username` 和 `password` 应分别与我们在 `abewallet.conf` 中配置的 `rpcuser` 和 `rpcpass` 选项相同。

::: code-group

```txt [Windows]
abectl --rpcuser=[username] --rpcpass=[password] --wallet getbalancesabe
```

```txt [macOS and Linux]
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --wallet getbalancesabe
```

:::

### 7.2 解锁

在发送交易或生成新地址之前，您需要先解锁您的钱包：

::: code-group

```txt [Windows]
abectl --rpcuser=[rpc username] --rpcpass=[rpc password] --wallet walletunlock [private passphrase] [timeout]
```

```txt [macOS and Linux]
./start_abectl.sh --rpcuser=[rpc username] --rpcpass=[rpc password] --wallet walletunlock [private passphrase] [timeout]
```

:::

超时时间的单位是秒。

示例：

```bash
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --wallet walletunlock
123456 240
```

此命令使用密码 123456 解锁钱包 240 秒。

### 7.3 生成新地址

解锁钱包后，您可以通过运行以下命令生成一个新地址：

::: code-group

```txt [Windows]
abectl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
```

```txt [macOS and Linux]
./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
```

:::

### 7.4 查询最大地址数量

每次恢复钱包或发起新交易时，都会创建一个新的钱包地址。您可以运行以下命令查询已创建的地址总数：

::: code-group

```txt [Windows]
abectl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet addressmaxsequencenumber
```

```txt [macOS and Linux]
./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet addressmaxsequencenumber
```

:::

### 7.5 进行转账

由于 Abelian 钱包地址较长，直接将钱包地址粘贴到命令行中可能会比较麻烦。您可以在 `abec` 的配置文件夹中创建一个名为 `arg1` 的文件，并将接收者的地址和金额添加到其中。格式如下：

```plaintext
[
    {
        "address":"addr1",
        "amount":700000000
    },
    {
        "address":"addr2",
        "amount":500000000
    }
]
```

注意，金额的单位是 **Neutrino**（1 ABE = 10,000,000 Neutrino）。

然后，您可以通过运行以下命令发送交易：

::: code-group

```txt [Windows]
abectl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet sendtoaddressesabe -
```

```txt [macOS and Linux]
./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet sendtoaddressesabe -
```

:::


示例：

```bash
$ cat /Users/username/Library/Application Support/Abec/arg1
 [{"address":"addr1", "amount":700000000},{"address":"addr2", "amount":500000000}]
$ ./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet sendtoaddressesabe -
```

此命令将 **70 ABEL** 发送到 `addr1`，并将 **50 ABEL** 发送到 `addr2`。

## 8. 恢复钱包

### 8.1 准备信息

如果您想恢复钱包，请首先准备以下所述的信息：

1. **请确保您的钱包助记词可用。**
2. **查询当前钱包中的最大地址数量。**
3. **查询当前钱包的余额信息。**
4. **备份 abewalletlegacy 配置文件夹。** 请将该文件夹复制到其他安全的地方。此操作连同公钥和私钥密码短语一起，可以在助记词不符合预期的情况下帮助您回滚到当前钱包。


### 8.2 恢复钱包

1. 删除 `abewalletlegacy` 配置文件夹中的 `logs/` 和 `mainnet/` 文件夹，然后运行：

::: code-group

```txt [Windows]
abewalletlegacy --create
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --create
```

:::

示例：

```bash
$ ./start_abewalletlegacy.sh --create
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
 [INF] WLLT: The addresses with No. in [0, 5] have been restored.
 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```
**注意**：此处的“最大恢复地址数量”应输入 **在 8.1 准备中获得的数量**。

### 8.3 检查钱包

恢复钱包后，为确保其完全恢复，请按照以下步骤操作：

1. **配置钱包** 并将其连接到 `abec` 节点，以便它可以同步 Abelian 区块链并找到所有 ABEL 代币。
2. 同步完成后，**查询余额** 并检查是否与您预期的余额一致。

## 9. 升级到最新版本

如果您已经运行了旧版本（例如 v0.11.1），可以按照以下步骤升级到最新版本（截至本文撰写时为 v0.11.9）：

1. **停止运行旧版本的 `abec` 和 `abewalletlegacy`**。
2. 下载并解压 `abec` 和 `abewalletlegacy` 的两个压缩文件。
3. 要运行新的 `abec`，只需进入新的 `abec` 文件夹并运行它。
4. 这部分稍微有些复杂，因为我们需要**先删除旧版本的 `abewalletlegacy` 配置文件夹**，然后**恢复您的钱包**，再运行新版本。

### 9.1 运行新版本的 abewalletlegacy

请首先准备 **8.1** 中描述的信息。

### 9.2.1 准备信息

在升级钱包之前，请确保您具备以下内容：

1. 您的 **钱包助记词** 可用。
2. **查询当前钱包中的最大地址数量**。
3. **查询当前钱包的余额**。
4. **备份 `abewalletlegacy` 配置文件夹**，将其复制到安全的位置。此操作连同公钥和私钥密码短语一起，可以在助记词不正确的情况下帮助您恢复当前钱包。

### 9.2.2 升级钱包

1. 完成准备工作后，删除 `abewalletlegacy` 配置文件夹中的 `logs/` 和 `mainnet/` 文件夹，然后运行：

::: code-group

```txt [Windows]
abewalletlegacy --create
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --create
```

:::

按下 control+C。通过这样做，我们重新创建了配置文件夹。

然后，按照第 4 节中描述的方式配置 abewalletlegacy。

之后，进入新的 abewalletlegacy 文件夹并恢复您的钱包：

::: code-group

```txt [Windows]
abewalletlegacy --create
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --create
```

:::

示例：

```bash
$ ./start_abewalletlegacy.sh --create
Enter the private passphrase for your new wallet:
Confirm passphrase:
Enter the public passphrase for your new wallet:
Confirm passphrase:
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: y
Run the new version of abewallet
Prepare the information
Upgrade the wallet
Enter the crypto version is:0
Enter existing wallet mnemonic: biology,hazard,sudden,dignity,drop,jealous,butter,believe,answer,enter,practice,scorpion,health,tunnel,rival,vault,neutral,season,proof,must,path,steel,final,female
Please input the max No. of address to recover :5
Creating the wallet...
 [INF] WLLT: The addresses with No. in [0, 5] have been restored.
 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

**注意**：此处的“最大恢复地址数量”应输入 **在 9.2.1 准备中获得的数量**。

最后，运行钱包（`abewalletlegacy`）：

::: code-group

```txt [Windows]
abewallet --walletpass=[your public passphrase]
```

```txt [macOS and Linux]
./start_abewallet.sh --walletpass=[your public passphrase]
```

:::
