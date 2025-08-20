---
outline: deep
version_abec: v2.0.2
version_abewalletmlp: v2.0.0
version_abewalletlegacy: v1.0.0
---

# Abelian 多层隐私钱包 (CLI) 用户手册

本文档提供了安装和配置 Abelian 多层隐私 (MLP) CLI 钱包 (`abewalletmlp`) 的全面指南 - 您通往增强隐私和灵活性的门户！

请先参考 [Abelian 应用程序基础常识](/zh/guide/) 了解软件架构。MLP 钱包代表了具有高级隐私功能和简化管理的下一代 Abelian 钱包。

访问 [Abelian 官方下载页面](/zh/downloads/latest#多层隐私钱包-cli) 下载软件。

所有操作均通过命令行界面 (CLI) 完成。Linux 或 macOS 系统请打开终端；Windows 系统请打开 PowerShell 或您选择的 Shell 应用。

## 简介

随着数字货币的日益普及，用户对不同目的的隐私保护需求也在增长。为满足这一需求，我们专门开发了 Abelian 多层隐私钱包 (CLI 版本)。

为什么要升级？

- **简化恢复**：告别 "最大可恢复钱包数量" 要求 - 我们的全新全隐私钱包用户友好且直观
- **增强安全性**：强烈建议持有 ABEL 代币的现有 CLI 用户创建新的全隐私钱包并转移资产
- **灵活选择**：矿工和优先考虑交易速度和成本效益的用户可以选择半隐私钱包

本钱包采用先进的多层隐私技术，为您提供前所未有的交易隐私和安全控制。它具有两种创新的钱包地址类型：

### 地址类型

**1. 全隐私地址**：

- 交易加密且不可追踪
- 最高安全性和匿名性
- 交易费用较高
- 处理时间较长

**2. 半隐私地址**

- 类似比特币的隐私级别
- 公开可见的代币价值和可追踪的交易
- 费用较低且吞吐量更高
- 交易处理速度更快

使用 abewalletmlp，享受增强的隐私性、更快的交易速度、更低的气体费用，以及按需管理隐私的灵活性。

- **灵活的隐私级别**：根据您的隐私需求选择全隐私或半隐私钱包地址
- **简化恢复**：使用助记词恢复所有钱包地址，无需其他要求
- **无缝转账**：轻松在完全隐私和半隐私钱包之间转移 ABEL

## 先决条件

### 系统要求

- **存储空间**：160GB+ (运行 Abelian 节点) 或最小 (仅远程连接)
- **内存**：8GB+ (运行 Abelian 节点) 或 2GB+ (仅远程连接)
- **网络**：稳定的互联网连接

### 所需组件

1. **Abelian 节点** (`abec`) - 软件包 [abec-{{ $frontmatter.version_abec }}](/zh/downloads/latest#abelian-节点-abec)
2. **多层隐私钱包 CLI** (`abewalletmlp`) - 软件包 [abewalletmlp-{{ $frontmatter.version_abewalletmlp }}](/zh/downloads/latest#多层隐私钱包-cli)
3. **钱包控制工具** (`abewalletmlpctl`) - 随钱包提供

## 1. 安装

### 下载并解压

下载适用于您平台的压缩文件：

- `abec-linux-amd64-{{ $frontmatter.version_abec }}.tar.gz` (Abelian 节点)
- `abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}.tar.gz` (多层隐私钱包 CLI)

解压并将它们放置在 `~/abel/` 文件夹下：

```txt-vue
~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/
~/abel/abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}/
```

### 初始设置

**创建 `abec` 配置文件夹：**

导航到 `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` 并运行：

::: code-group

```txt [Windows]
.\abec.exe
```

```txt [macOS/Linux]
sh start_abec.sh
```
:::

按 `Ctrl+C` 停止。这将创建配置文件夹：

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

**创建 `abewalletmlp` 配置文件夹：**

导航到 `~/abel/abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}/` 并运行：

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --create
```
:::

按 `Ctrl+C` 停止。这将创建钱包配置文件夹：

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

> [!TIP] 平台特定说明
> - **macOS/Linux**：如果出现 "xxx: Permission denied"，可能需要运行 `chmod 777 xxx`
> - **macOS (M系列芯片/ARM64)**：如果看到 "'xxx' is damaged and can't be opened"，请运行：
> ```shell
> $ xattr -d com.apple.quarantine path/to/xxx
> ```
> - **macOS**：如果看到 "'xxx' cannot be opened because the developer cannot be verified"，请前往 **系统偏好设置 → 安全性与隐私 → 通用** 并点击 **仍要打开**

## 2. 创建钱包

导航到 `~/abel/abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}` 并运行：

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --create
```
:::

**钱包创建过程示例：**

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

> [!IMPORTANT] 关键安全信息
> **保存您的助记词** 在多个安全位置
> **记录钱包种子** 作为额外安全保障
> **记住两个密码** (私人和公共)
> **无最大地址限制** - 简化恢复流程

## 3. 配置

### 3.1 配置 abec

编辑 `abec` 配置文件夹中的 `abec.conf` 文件：

**基本 RPC 配置：**

```ini
# RPC 服务器设置
rpcuser=您的用户名
rpcpass=您的安全密码
```

**网络配置：**

```ini
# 公共 IP 广播 (可选)
externalip=1.2.3.4
```

### 3.2 配置 abewalletmlp

将 RPC 凭据从 `abec.conf` 复制到 `abewallet.conf`：

```ini
# 连接到 abec 的 RPC
abecrpcuser=[abec.conf 中的 rpcuser]
abecrpcpass=[abec.conf 中的 rpcpass]
```

### 3.3 远程配置 (可选)

如果在不同机器上运行 `abec` 和 `abewalletmlp`：

**在 `abec.conf` 中：**

```ini
# 监听所有接口
rpclisten=0.0.0.0:8667
```

**在 `abewallet.conf` 中：**

```ini
# 连接到远程 abec
rpcconnect=[abec-ip]:8667
cafile=~/abel/rpc.cert
```

**证书设置：**

1. 从 `abec` 配置文件夹中删除 `rpc.cert` 和 `rpc.key`
2. 重启 `abec` 以生成新证书
3. 将 `rpc.cert` 复制到钱包机器的 `~/abel/rpc.cert`

## 4. 运行钱包

### 4.1 启动 Abelian 节点

导航到 `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` 并运行：

::: code-group

```shell [Windows]
$ .\abec.exe
```

```shell [macOS/Linux]
$ sh start_abec.sh
```
:::

等待区块链同步完成。

## 4.2 启动多层隐私钱包（CLI）

导航到 `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` 并运行：

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --walletpass=[您的公共密码]
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --walletpass=[您的公共密码]
```
:::

## 5. 钱包操作

### 5.1 使用 abewalletmlpctl

`abewalletmlpctl` 工具允许您与运行中的钱包交互：

### 5.2 检查余额

::: code-group

```shell [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[用户名] --rpcpass=[密码] getbalancesabe
```

```shell [macOS/Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[用户名] --rpcpass=[密码] getbalancesabe
```
:::

### 5.3 解锁

在发送交易或生成新地址前，您需要先解锁钱包：

::: code-group

```shell [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[用户名] --rpcpass=[密码] walletunlock [私人密码] [超时时间]
```

```shell [macOS/Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[用户名] --rpcpass=[密码] walletunlock [私人密码] [超时时间]
```
:::

超时时间的单位为秒。

### 5.4 钱包地址

**生成全隐私地址：**

```shell
$ sh start_abewalletmlpctl.sh --rpcuser=[用户名] --rpcpass=[密码] generateaddressabe 1 1
```

**生成半隐私地址：**

```shell
$ sh start_abewalletmlpctl.sh --rpcuser=[用户名] --rpcpass=[密码] generateaddressabe 1 0
```

**生成多个地址：**

```shell
# 生成 5 个全隐私地址
$ sh start_abewalletmlpctl.sh --rpcuser=[用户名] --rpcpass=[密码] generateaddressabe 5 1

# 生成 3 个半隐私地址
$ sh start_abewalletmlpctl.sh --rpcuser=[用户名] --rpcpass=[密码] generateaddressabe 3 0
```

### 5.5 发送交易

由于 Abelian 钱包地址较长，直接在命令行中粘贴钱包地址可能很麻烦。您可以改为在 `abec` 的配置文件夹中创建一个名为 `arg1` 的文件，并将接收者地址和金额添加到其中。格式如下：

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

请注意，金额的单位是 **Neutrino** (1 ABEL = 10,000,000 Neutrino)。

**发送 ABEL 到地址：**

::: code-group

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[用户名] --rpcpass=[密码] sendtoaddressesabe -
```

```txt [macOS/Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[用户名] --rpcpass=[密码] sendtoaddressesabe -
```
:::

示例：

```bash
$ cat /Users/username/Library/Application Support/Abec/arg1
 [{"address":"addr1", "amount":700000000},{"address":"addr2", "amount":500000000}]
$ sh start_abewalletmlpctl.sh --rpcuser=[用户名] --rpcpass=[密码] sendtoaddressesabe -
```

此命令发送 **70 ABEL** 到 `addr1` 和 **50 ABEL** 到 `addr2`。

## 6. 钱包恢复

### 6.1 恢复准备

在恢复钱包前，请准备以下信息：

1. **助记词列表** (24 个单词)
2. **加密版本** (通常为 1)
3. **当前钱包余额** 用于验证
4. **配置文件夹的备份** (作为安全措施)

> [!TIP] 简化恢复
> 与经典钱包不同，多层隐私钱包（MLP）不需要跟踪最大地址数 - 恢复过程更加简单！

### 6.2 恢复过程

1. **停止钱包** 并 **导航到配置目录** 并删除 `logs/` 和 `mainnet/` 文件夹

2. **开始钱包创建：**

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --create
```
:::

1. **按照恢复提示操作：**

示例：

```text
$ sh start_abewalletmlp.sh --create
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

4. **配置并同步** 钱包与 `abec`
5. **等待同步** 完成
6. **检查余额** 是否符合预期金额

## 7. 从经典钱包迁移

> [!WARNING] 迁移成本
> 此迁移过程会创建多笔交易，需要支付交易费用。

本指南假设您正在从 [abewalletlegacy 版本 {{ $frontmatter.version_abewalletlegacy }}](/zh/downloads/latest#经典钱包-cli) 迁移，并已阅读 [经典钱包手册](/zh/guide/wallet/cli-wallet-legacy)。

### 7.1 迁移设置

本示例假设在两台计算机 (`PC1` 和 `PC2`) 上操作：

**PC1 (源 - 经典钱包)：**

1. 确保 `abewalletlegacy` 正在运行并同步
2. 备份配置文件夹到安全位置
3. 记录当前余额和地址

**PC2 (目标 - MLP 钱包)：**

1. [安装](#_1-安装) 并 [创建](#_2-创建钱包) 新的多层隐私钱包（MLP）
2. [生成地址](#_5-4-钱包地址) 作为迁移目标
3. 记录新的多层隐私钱包（MLP）地址用于转账

### 7.2 迁移过程

**步骤 1：准备目标地址**

在 PC2 上，生成多个地址以增强隐私：

```shell
# 生成 5 个全隐私地址
$ sh start_abewalletmlpctl.sh --rpcuser=[用户名] --rpcpass=[密码] generateaddressabe 5 1
```

**步骤 2：从经典钱包转账资金**

在 PC1 上，将资金发送到新的多层隐私钱包（MLP）地址：

```shell
# 从经典钱包发送到 MLP 地址
$ ./start_abewalletlegacyctl.sh --rpcuser=[用户名] --rpcpass=[密码] sendtoaddressabe [mlp_address] [amount]
```

**步骤 3：验证迁移**

在 PC2 上，确认资金接收：

```shell
$ sh start_abewalletmlpctl.sh --rpcuser=[用户名] --rpcpass=[密码] getbalancesabe
```

**步骤 4：完成迁移**

一旦所有资金成功转移：

1. 验证总余额是否匹配原始金额 (减去费用)
2. 测试从新的多层隐私钱包（MLP）发送
3. 安全存储新的多层隐私钱包（MLP）备份
4. 确认后停用经典钱包

## 8. 升级到最新版本

### 8.1 准备

在升级前，准备与钱包恢复相同的信息：

1. **钱包助记词**
2. **当前余额**
3. **备份配置文件夹**

### 8.2 升级过程

1. **停止旧版本** 的 `abec` 和 `abewalletmlp`
2. **下载并解压** 新版本
3. **运行新的 `abec`** (配置保留)
4. **删除钱包配置** `logs/` 和 `mainnet/` 文件夹
5. **使用新版本恢复钱包** (按照上述恢复步骤)

## 9. 故障排除

### 常见问题

**钱包无法启动：**

- 验证公共密码是否正确
- 检查配置文件语法
- 查看日志文件中的错误

**地址生成失败：**

- 确保钱包已解锁
- 验证 RPC 连接是否活跃
- 检查系统资源是否充足

**交易失败：**

- 确认余额足够支付费用
- 验证接收地址格式
- 检查网络同步状态

**恢复问题：**

- 确保助记词正确
- 验证单词顺序和拼写
- 检查是否有额外空格或字符