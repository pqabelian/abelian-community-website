---
outline: deep
version_abec: v2.0.2
version_abewalletlegacy: v1.0.0
---

# Abelian 经典钱包（CLI）用户手册

本文档描述了如何运行 Abelian CLI 钱包。

请先参考 [Abelian 应用程序基础常识](/zh/guide/) 了解软件架构。经典钱包 (`abewalletlegacy`) 使用旧版 Abelian 地址格式，主要为现有用户维护。

访问 [Abelian 官方下载页面](/zh/downloads/latest#经典钱包-cli) 下载软件。

所有操作均通过命令行界面 (CLI) 完成。Linux 或 macOS 用户请打开终端；Windows 用户请打开 PowerShell 或您选择的 Shell 应用。

> [!TIP]
> 如需从旧版本升级到最新版本，请直接跳转到 [升级到最新版本](#_7-升级到最新版本)。

> [!WARNING] 建议迁移
> 我们强烈建议迁移到 [多层隐私钱包（CLI）](/zh/guide/wallet/cli-wallet-mlp) 以获得增强功能和简化恢复。经典钱包（CLI）将在未来版本中逐步淘汰。

## 前提条件

### 系统要求

- **存储空间**：160B+（运行 Abelian 节点）或最小（仅远程连接）
- **内存**：8GB+（运行 Abelian 节点）或 2GB+（仅远程连接）
- **网络**：稳定的互联网连接

### 所需组件

1. **Abelian 节点** (`abec`) - 遵循 [Abelian 节点 (abec) 手册](/zh/guide/abelian-node)
2. **经典钱包（CLI）** (`abewalletlegacy`) - 本指南
3. **钱包控制工具** (`abewalletlegacyctl`) - 随钱包提供

## 1. 安装

### 下载并解压

下载适用于您平台的压缩文件：

- `abec-linux-amd64-{{ $frontmatter.version_abec }}.tar.gz` (Abelian 节点)
- `abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}.tar.gz` (经典钱包（CLI）)

解压并将它们放置在 `~/abel/` 文件夹下：

```txt-vue
~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/
~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/
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

**创建 `abewalletlegacy` 配置文件夹：**

导航到 `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` 并运行：

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletlegacy.sh --create
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

导航到 `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` 并运行：

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletlegacy.sh --create
```
:::

**钱包创建过程示例：**

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

> [!IMPORTANT] 关键安全说明
> **保存您的助记词** 在安全位置
> **记录加密版本**（通常为 0）
> **记住两个密码**（私人和公共）
> **备份配置文件夹** 在进行更改前

## 3. 配置

### 3.1 配置 abec

编辑 `abec` 配置文件夹中的 `abec.conf` 文件：

**基本 RPC 配置：**

```ini
# RPC 服务器设置
rpcuser=your_username
rpcpass=your_secure_password
```

**网络配置：**

```ini
# 公共 IP 广播（可选）
externalip=1.2.3.4
```

### 3.2 配置 abewalletlegacy

将 RPC 凭据从 `abec.conf` 复制到 `abewallet.conf`：

```ini
# 连接到 abec 的 RPC
abecrpcuser=[abec.conf 中的 rpcuser]
abecrpcpass=[abec.conf 中的 rpcpass]
```

### 3.3 远程配置（可选）

如果在不同机器上运行 `abec` 和 `abewalletlegacy`：

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

## 4.2 启动钱包

导航到 `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` 并运行：

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --walletpass=[您的公共密码]
```

```shell [macOS/Linux]
$ sh start_abewalletlegacy.sh --walletpass=[您的公共密码]
```
:::

## 5. 钱包操作

### 5.1 使用 abewalletlegacyctl

`abewalletlegacyctl` 工具允许您与运行中的钱包交互：

### 5.2 检查余额

::: code-group

```shell [Windows]
$ .\abewalletlegacyctl.exe --rpcuser=[用户名] --rpcpass=[密码] getbalancesabe
```

```shell [macOS/Linux]
$ sh start_abewalletlegacyctl.sh --rpcuser=[用户名] --rpcpass=[密码] getbalancesabe
```
:::

### 5.3 解锁

在发送交易或生成新地址前，您需要先解锁钱包：

::: code-group

```shell [Windows]
$ .\abewalletlegacyctl.exe --rpcuser=[用户名] --rpcpass=[密码] walletunlock [私人密码] [超时时间]
```

```shell [macOS/Linux]
$ sh start_abewalletlegacyctl.sh --rpcuser=[用户名] --rpcpass=[密码] walletunlock [私人密码] [超时时间]
```
:::

超时时间的单位为秒。

示例：

```bash
sh start_abewalletlegacyctl.sh --rpcuser=[用户名] --rpcpass=[密码] walletunlock 123456 240
```

此命令使用密码 `123456` 解锁钱包 240 秒。

### 5.4 钱包地址

**获取新地址：**

```shell
$ sh start_abewalletlegacyctl.sh --rpcuser=[用户名] --rpcpass=[密码] generateaddressabe
```

### 5.5 发送交易

由于 Abelian 钱包地址较长，直接在命令行中粘贴钱包地址可能很麻烦。
您可以改为在 `abec` 的配置文件夹中创建一个名为 `arg1` 的文件，并将接收者地址和金额添加到其中。格式如下：

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
$ .\abewalletlegacyctl.exe --rpcuser=[用户名] --rpcpass=[密码] sendtoaddressesabe -
```

```txt [macOS/Linux]
$ sh start_abewalletlegacyctl.sh --rpcuser=[用户名] --rpcpass=[密码] sendtoaddressesabe -
```
:::

示例：

```bash
$ cat /Users/username/Library/Application Support/Abec/arg1
 [{"address":"addr1", "amount":700000000},{"address":"addr2", "amount":500000000}]
$ sh start_abewalletlegacyctl.sh --rpcuser=[用户名] --rpcpass=[密码] sendtoaddressesabe -
```

此命令发送 **70 ABEL** 到 `addr1` 和 **50 ABEL** 到 `addr2`。

## 6. 钱包恢复

### 6.1 恢复准备

在恢复钱包前，请准备以下信息：

1. **钱包助记词**（24 个单词的列表）
2. **加密版本**（通常为 0）
3. **钱包中使用的最大地址数**
4. **当前钱包余额** 用于验证
5. **配置文件夹的备份**（作为安全措施）

**查询最大地址数：**
如果您想恢复钱包，请先按以下说明准备信息：

1. **请确保您的钱包助记词可用。**
2. **查询当前钱包中的最大地址数。**
3. **查询当前钱包的余额信息。**
4. **备份 abewalletlegacy 配置文件夹。** 请将文件夹复制到其他安全位置。这连同公共和私人密码，可能有助于在您的助记词不符合预期时回滚到当前钱包。

**查询最大地址数：**

```shell
$ ./start_abewalletlegacyctl.sh --rpcuser=[用户名] --rpcpass=[密码] getmaxaddressidsabe
```

### 6.2 恢复过程

1. **停止钱包** 并从配置目录中删除 `logs/` 和 `mainnet/` 文件夹
2. **开始钱包创建：**

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletlegacy.sh --create
```
:::

3. **按照恢复提示操作：**
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
4. **配置并连接** 钱包到 `abec`
5. **等待同步** 完成
6. **检查余额** 是否符合预期

## 7. 升级到最新版本

### 7.1 准备

在升级前，准备与钱包恢复相同的信息：

1. **钱包助记词**
2. **最大地址数**
3. **当前余额**
4. **备份配置文件夹**

### 7.2 升级过程

1. **停止旧版本** 的 `abec` 和 `abewalletlegacy`
2. **下载并解压** 新版本
3. **运行新的 `abec`**（配置保留）
4. **删除钱包配置** `logs/` 和 `mainnet/` 文件夹
5. **使用新版本恢复钱包**（按照上述恢复步骤）

## 8. 故障排除

### 常见问题

**连接问题：**

- 验证 `abec` 是否正在运行并同步
- 检查 RPC 凭据是否在两个配置文件中匹配
- 确保防火墙允许端口 8667

**钱包无法启动：**

- 检查公共密码是否正确
- 验证配置文件语法
- 查看日志文件中的错误消息

**余额未显示：**

- 等待区块链同步完成
- 验证钱包地址是否正确恢复
- 检查交易历史确认

**恢复问题：**

- 确保助记词输入正确
- 验证加密版本是否正确
- 使用备份中的确切最大地址数

### 日志文件

查看日志文件获取详细的错误信息：

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abewallet\logs\
```

```txt [macOS]
~/Library/Application Support/Abewallet/logs/
```

```txt [Linux]
~/.abewallet/logs/
```

:::

## 9. 安全最佳实践

### 钱包安全

- **备份助记词** 在多个安全位置
- **使用强密码** 用于私人和公共访问
- **定期备份** 配置文件夹
- **测试恢复过程** 在依赖备份前

### 操作安全

- **保持软件更新** 到最新版本
- **定期监控交易**
- **使用专用地址** 用于不同目的
- **保护 RPC 连接** 在使用远程设置时

### 网络安全

- **防火墙配置** 限制不必要的访问
- **安全证书管理** 用于远程连接
- **定期安全审计** 配置文件

## 10. 迁移到 MLP 钱包

### 为什么迁移？

多层隐私 (MLP) 钱包提供：

- **简化恢复** - 无需最大地址数
- **增强隐私** - 多个隐私级别
- **更好的功能** - 改进的性能和功能
- **未来支持** - 经典钱包将逐步淘汰

### 迁移过程

1. **安装多层隐私钱包（CLI）** 按照 [多层隐私钱包（CLI）手册](/zh/guide/wallet/cli-wallet-mlp)
2. **创建新的 MLP 钱包** 具有增强隐私功能
3. **转移资金** 从经典钱包转账到多层隐私钱包
4. **验证转移** 完成和余额
5. **安全备份** 新的多层隐私钱包（MLP）钱包凭据

::: tip 迁移帮助
有关详细迁移说明，请参考多层隐私钱包（MLP）钱包文档中的 [钱包迁移指南](/zh/guide/wallet/cli-wallet-mlp#_7-从经典钱包迁移)。
:::

## 下一步

**新用户：**

- 考虑从 [多层隐私钱包（MLP）钱包](/zh/guide/wallet/cli-wallet-mlp) 开始
- 加入 [Discord 社区](https://discord.com/invite/5rrDxP29hx) 获取支持
- 先进行小额交易练习

**现有用户：**

- 计划迁移到多层隐私钱包（MLP）以获得增强功能
- 在进行重大更改前确保适当备份
- 保持软件更新到最新版本