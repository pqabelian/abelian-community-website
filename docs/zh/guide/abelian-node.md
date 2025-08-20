---
outline: deep
version_abec: v2.0.2
---

# Abelian节点用户手册

本文档介绍如何使用命令行界面运行 Abelian 节点。

在开始前，请先阅读 [Abelian 应用程序基础](/zh/guide/) 以了解软件架构和运行 Abelian 节点的目的。

如需与其他矿工、开发者和用户交流，请加入 [官方 Discord 服务器](https://discord.com/invite/5rrDxP29hx)。

所有操作都通过命令行界面 (CLI) 进行：Linux 或 macOS 用户请打开终端，Windows 用户请打开 PowerShell 或您喜欢的 shell 应用。

## 系统要求

开始前请确保满足以下系统要求：

- **存储空间**：至少 200GB+ (当前区块链数据约120GB，持续增长)
- **内存**：最低 8GB (推荐16GB以上)
- **CPU**：2核 及其以上(推荐4核以上)
- **网络**：稳定的宽带连接

## 1. 安装

从 [官方下载页面](/downloads/latest#abelian-节点-abec) 下载对应平台的压缩包：

- Linux x86：`abec-linux-amd64-{{ $frontmatter.version_abec }}.tar.gz`
- Linux arm：`abec-linux-arm64-{{ $frontmatter.version_abec }}.tar.gz`
- macOS (Intel 芯片)：`abec-macos-amd64-{{ $frontmatter.version_abec }}.tar.gz`
- macOS (M 芯片)：`abec-macos-arm64-{{ $frontmatter.version_abec }}.tar.gz`
- Windows：`abec-windows-amd64-{{ $frontmatter.version_abec }}.tar.gz`

解压后将文件放置在`~/abel/`目录下：

```text-vue
~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/
```

### 初始设置

进入`~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/`目录并运行：

::: code-group

```powershell [Windows]
$ .\abec.exe
```

```shell [macOS]
$ sh start_abec.sh
```

```shell [Linux]
$ sh start_abec.sh
```

:::

按 `Ctrl+C` 停止运行。这将创建 `abec` 的配置文件夹：

::: code-group

```txt [Windows]
%USERPROFILE%\\AppData\Local\Abec
```

```txt [macOS]
~/Library/Application Support/Abec
```

```txt [Linux]
~/.abec
```

:::

> [!TIP] 平台特定说明
> - **macOS/Linux**：如果出现 "xxx: Permission denied" 错误，可能需要运行 `chmod 777 xxx`
> - **macOS (M芯片/ARM64)**：如果看到 "'xxx' 已损坏，无法打开"，请运行：
> ```shell
> $ xattr -d com.apple.quarantine 路径/xxx
> ```
> - **macOS**：如果看到 "无法打开 'xxx'，因为无法验证开发者"，请前往 **系统偏好设置 → 安全性与隐私 → 通用**，点击 **仍要打开**

## 2. 配置-abec

进入`abec`配置文件夹并修改`abec.conf`文件：

### 节点类型配置

根据存储和验证需求选择合适的节点类型：

| 节点类型       | 存储需求       | 验证级别   | 描述                                          |
|----------------|----------------|------------|-----------------------------------------------|
| **全节点**     | 最高(~1200GB+) | 完整验证   | 存储并验证从创世块开始的所有区块链数据        |
| **半全节点**   | 中等(~240GB+)  | 标准验证   | 优化存储同时保持高验证能力                    |
| **普通节点**   | 最低(~160GB+)  | 安全验证   | 进一步优化适合资源有限环境                    |

#### 全节点

- **定义**：存储并验证区块链所有数据的完整节点
- **功能**：
    - 存储从创世块开始的完整区块(内容+见证)数据
    - 验证每个区块的有效性(交易有效性、区块有效性)

#### 半全节点

- **定义**：优化存储需求同时保持高验证能力的半完整节点
- **功能**：
    - 存储从创世块到最后一个检查点的区块(内容)数据
    - 存储从最后一个检查点开始的完整区块(内容+见证)数据
    - 验证最后一个检查点前每个区块的头部信息(包括 PoW)
    - 验证最后一个检查点后每个区块的有效性(交易有效性、区块有效性)

#### 普通节点

- **定义**：进一步优化存储，适合资源有限环境的普通节点
- **功能**：
    - 存储从创世块到保留块的区块(内容)数据
    - 存储从保留块开始的完整区块(内容+见证)数据
    - 验证最后一个检查点前每个区块的头部信息(包括 PoW)
    - 验证最后一个检查点后每个区块的有效性(交易有效性、区块有效性)

**配置示例：**
```ini
# 默认：半全节点(推荐大多数用户使用)
nodetype=semifullnode

# 其他选项：
# nodetype=fullnode      # 全节点
# nodetype=normalnode    # 普通节点
```

### 网络配置

如果您有公网 IP 或配置了端口转发，可以广播您的节点：
```ini
externalip=1.2.3.4
```

### 安全配置

生产环境建议增加RPC安全设置：

```ini
# 限制 RPC 访问特定 IP
rpclisten=127.0.0.1:8667

# 设置强 RPC 凭证
rpcuser=您的安全用户名
rpcpass=您的安全密码
```

## 3. 运行 Abelian 节点

### 启动节点

进入`~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/`目录并启动节点：

::: code-group

```shell [Windows]
$ .\abec.exe
```

```shell [macOS]
$ sh start_abec.sh
```

```shell [Linux]
$ sh start_abec.sh
```

:::

### 初始同步

节点将开始与 Abelian 网络同步：

1. **连接阶段**：连接对等节点
2. **同步阶段**：下载并验证区块链数据
3. **验证阶段**：验证下载的区块

**预计同步时间：**
- **全节点**：数天(取决于网络连接)
- **半全节点**：1-3天(推荐)
- **普通节点**：1-2天

#TODO 添加下载备份数据部分

### 监控进度

通过控制台输出监控同步进度：

```text
[INF] SYNC: Processed 1000 blocks in the last 10.02s (100 transactions, height 50000, 2023-01-01 12:00:00 +0000 UTC)
```

查看最新网络高度请访问： https://explorer.pqabelian.io

## 4. 节点管理

### 使用 abectl

`abectl` 命令行工具可用于与运行中的节点交互：

**查看节点信息：**
::: code-group
```shell [Windows]
$ ./abectl.exe getinfo
```
```shell [macOS]
$ sh start_abectl.sh getinfo
```
```shell [Linux]
$ sh start_abectl.sh getinfo
```
::: 

**查看对等节点连接：**
::: code-group

```shell [Windows]
$ ./abectl.exe getpeerinfo
```
```shell [macOS]
$ sh start_abectl.sh getpeerinfo
```
```shell [Linux]
$ sh start_abectl.sh getpeerinfo
```
:::

### 停止节点

安全停止节点的方法：
- 在终端按 `Ctrl+C`
- 或使用：
::: code-group

```shell [Windows]
$ ./abectl.exe stop
```
```shell [macOS]
$ sh start_abectl.sh stop
```
```shell [Linux]
$ sh start_abectl.sh stop
```
:::

### 更新后重启

更新到新版本时：
1. 停止当前节点
2. 替换二进制文件
3. 使用相同配置重启

## 5. 故障排除

### 常见问题

**同步缓慢：**
- 检查网络连接稳定性
- 确保足够的磁盘空间
- 考虑使用SSD提高性能

**连接问题：**
- 验证防火墙设置(应开放8666端口)
- 检查网络连接
- 尝试不同的DNS服务器

**高资源占用：**
- 考虑切换到 `normalnode` 类型
- 增加可用内存
- 定期监控磁盘空间

### 日志文件

查看日志文件获取详细错误信息：

::: code-group
```txt [Windows]
%USERPROFILE%\AppData\Local\Abec\logs\
```
```txt [macOS]
~/Library/Application Support/Abec/logs/
```
```txt [Linux]
~/.abec/logs/
```
:::

## 6. 安全最佳实践

### 网络安全
- **防火墙配置**：仅开放必要端口
- **RPC安全**：使用强凭证并限制访问
- **定期更新**：保持软件为最新版本

### 操作安全
- **备份配置**：保存您的 `abec.conf` 文件
- **监控资源**：关注磁盘空间和内存使用
- **日志监控**：定期检查日志中的异常活动

## 7. 高级配置

### 多机设置

在不同机器上运行钱包或矿机：

1. **配置RPC监听：**
 ```ini
 rpclisten=0.0.0.0:8667
 ```
2. **设置证书**确保安全通信
3. **配置防火墙规则**管理RPC端口

### 性能优化

**高性能设置建议：**
- 使用SSD存储
- 分配更多内存
- 使用专用网络连接
- 考虑在专用硬件上运行

## 后续步骤

节点运行后：

- **设置钱包**：参考 [CLI钱包手册](/guide/wallet/cli-wallet-mlp)
- **开始挖矿**：查看 [GPU挖矿手册](/guide/mining/gpu-pool)
- **加入社区**：访问我们的 [Discord服务器](https://discord.com/invite/5rrDxP29hx)

您的节点将帮助保护和去中心化 Abelian 网络。感谢您的贡献！🚀