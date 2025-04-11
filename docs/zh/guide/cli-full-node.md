---
outline: deep
---

# Abelian 全节点（CLI）用户手册

本文档描述了如何运行一个 Abelian 全节点。

请先参考 [Abelian 软件基础常识](/zh/guide/) 文档，以了解软件架构以及运行全节点的目的。

请访问 Abelian 官方网站下载页面，下载 [Abelian 全节点](/zh/downloads/latest#abelian-全节点)。要与其他矿工、开发者和用户互动，请访问 [官方 Discord 服务器](https://discord.com/invite/5rrDxP29hx)。

所有操作都通过命令行界面（CLI）进行。对于 Linux 或 macOS，打开终端；对于 Windows，打开 PowerShell 或任何你喜欢的 shell 应用程序。

## 1. 安装

从 [官方下载页面](/zh/downloads/latest#abelian-全节点) 的 Abelian 全节点部分下载一个压缩文件，例如用于 x86 架构（例如 Intel 芯片）的 Linux 系统的 abec-linux-amd64-v2.0.1.tar.gz。

解压并将其放在 ~/abel/ 文件夹下：

```txt
~/abel/abec-linux-amd64-v2.0.1/
```

进入 ~/abel/abec-linux-amd64-v2.0.1/，然后运行：

::: code-group
```shell [Windows]
$ .\abec.exe
```
```shell [macOS 和 Linux]
$ ./start_abec.sh
```
:::

然后按 control+C 停止它。这样做会为 abec 创建一个配置文件夹，位置如下：

::: code-group
```txt [Windows]
%USERPROFILE%\\AppData\Local\Abec
```
```txt [macOS]
~/Library/Application Support/Abec
```
```text [Linux]
~/.abec
```
:::

**注意：** 在 macOS (M1/M2 芯片 / arm64) 上，如果提示 `'xxx' 已损坏，无法打开`，运行以下命令：

```shell
$ xattr -d com.apple.quarantine path/to/xxx
```

如果提示 `'xxx' 无法打开，因为无法验证开发者`，进入 **系统偏好设置 -> 安全与隐私 -> 通用** 并点击 **仍然允许**。

## 2. 配置 - abec

进入 `abec` 的配置文件夹，并在 `abec.conf` 中按如下方式进行更改。

配置节点类型，下面是每种节点类型的存储和验证策略，用户可以根据实际需求选择合适的节点类型：

- **Full Node**
  - **定义**: 完整节点，存储和验证区块链的所有数据。
  - **功能**:
    - 从创始区块开始，存储完整区块（Content + Witness）数据，
    - 验证每个区块的有效性（交易有效性、区块有效性）

- **Semi-Full Node**
  - **定义**: 半完整节点，优化存储需求，同时保持较高的验证能力。
  - **功能**:
	- 从创始区块开始，到最后一个Checkpoint之前，存储区块（Content）数据
	- 从最后一个Checkpoint之后的完整区块（Content + Witness）数据
	- 验证最后一个Checkpoint之前每个区块头信息（包括PoW）
	- 验证最后一个Checkpoint起每个区块的有效性（交易有效性、区块有效性）

- **Normal Node**
  - **定义**: 普通节点，进一步优化存储，适合资源有限的环境。
  - **功能**:
	- 从创始区块区块是，到预留区块，存储区块（Content）数据
	- 从预留区块开始，存储完整区块（Content + Witness）数据
	- 验证最后一个Checkpoint之前每个区块头信息（包括PoW）
	- 验证最后一个Checkpoint后的每个区块的有效性（交易有效性、区块有效性）

默认参数为 `nodetype=semifullnode`，其他可选值：完整节点为 `fullnode`，普通节点为 `normalnode`。

```ini
nodetype=semifullnode
```

你可以通过广播你的 IP 地址（例如 1.2.3.4）让主网中的其他 Abelian 节点知道你的存在。这仅在你有一个公网 IP 或者在路由器上配置了 IP 转发时有效：

```ini
externalip=1.2.3.4
```

允许 `abelminer` 连接到 `abec` 进行 GPU 挖矿：

```ini
enablegetwork=1
```

如果你有多台 GPU 挖矿机器远程连接到这个单一的 `abec`，确保端口 8668 已打开：

```ini
rpclistengetwork=:8668
```

将你的钱包的初始地址设置为 miningaddr：

```ini
miningaddr = [你的初始地址]
```

## 3. 运行全节点 - abec

进入 `~/abel/abec-linux-amd64-v2.0.1/` 并运行一个全节点 (`abec`)：

::: code-group
```shell [Windows]
$ .\abec.exe
```
```shell [macOS and Linux]
$ ./start_abec.sh
```
:::