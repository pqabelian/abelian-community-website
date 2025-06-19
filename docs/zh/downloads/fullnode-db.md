---
outline: deep
---

# Abelian 全节点数据

## Abelian 全节点数据说明

Abelian 全节点数据包括三种类型：semi-fullnode、normal-fullnode 和 full node，相关参数的介绍和配置方法请查看 [Abelian 全节点用户指引文档](/zh/guide/cli-full-node#_2-配置-abec)。

## Semi-Full Node

### 数据目录默认位置

#### （Mainnet）

- Abelian 桌面钱包经典版（Legacy） 4.1.1 中的 Abec 主网默认采用 semi-fullnode，数据目录默认位置如下：

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Roaming\Abelian Wallet\Abec\mainnet
```

```txt [MacOS]
~/Library/Application Support/Abelian Wallet/Abec/mainnet
```

```txt [Linux]
~/.config/Abelian Wallet/Abec/mainnet
```
:::

::: tip 注意事项
Abelian 桌面钱包经典版（Legacy） 4.2.0 版本开始已经不使用 Abec 同步主网数据，不需要再下载此数据包。
:::

### 数据包下载地址

> 下载链接：[Mega](https://mega.nz/file/tzVAHbyR#UsDY4lKMhEn0W0O_XUimOngMzksuvnj1yGrCWDfI0mE)
> 
> 文件名：mainnet.zip
> 
> 文件大小：135.74 GB
> 
> 区块高度：386062
> 
> 上传日期：2024年05月02日

### 解压缩数据包

- Windows 桌面钱包
  1. 关闭并退出 Windows 桌面钱包（Legacy）v4.1.1；
  2. 使用解压缩软件打开 mainnet.zip 文件，解压缩 mainnet 目录覆盖至 [数据默认位置](#数据目录默认位置)
  3. 重新运行桌面钱包，点击同步（sync Mainnet），并确保同步完成 100%（到最新高度）

- macOS 桌面钱包
  1. 关闭并退出 MacOS 桌面钱包（Legacy）v4.1.1；
  2. 双击 mainnet.zip 文件，系统自动执行解压缩；
  3. 移动解压缩得到的 mainnet 目录并覆盖至 [数据默认位置](#数据目录默认位置)
  4. 重新运行桌面钱包，点击同步（sync Mainnet），并确保同步完成 100%（到最新高度）

- Linux 桌面钱包
  1. 关闭并退出 Linux 桌面钱包（Legacy）v4.1.1；
  2. 双击 mainnet.zip 文件，系统自动执行解压缩；
  3. 移动解压缩得到的 mainnet 目录并覆盖至 [数据默认位置](#数据目录默认位置)
  4. 重新运行桌面钱包，点击同步（sync Mainnet），并确保同步完成 100%（到最新高度）

## Normal-Full Node

### 数据目录默认位置

Abelian 开发者或个人 Solo 挖矿的用户需要下载 Abec Mainnet/Testnet (Normal-Full Node) 数据包，数据目录默认位置如下：

#### （Mainnet）
::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abec\mainnet
```

```txt [MacOS]
~/Library/Application Support/Abec/mainnet
```

```txt [Linux]
~/.abec/mainnet
```
:::

#### （Testnet）

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abec\testnet
```

```txt [MacOS]
~/Library/Application Support/Abec/testnet
```

```txt [Linux]
~/.abec/testnet
```
:::

### 数据包下载地址

#### （Mainnet）

> 下载链接：[Mega](https://mega.nz/file/wydjFZxL#aVfZjBWQlYEnwiLkC4N95WOH60cbML-kEpKVZzZdjFY)
> 
> 文件名：mainnet.zip
> 
> 文件大小：195.86 GB
> 
> 区块高度：385752
> 
> 上传日期：2025年04月29日

#### （Testnet）

> 下载链接：[Mega](https://mega.nz/file/Yvs0VDAL#UfIcwgB37sEMT31rjVZCZVZSj_5eKAYmaKalnd2sMrI)
> 
> 文件名：testnet.zip
> 
> 文件大小：99.04 GB
>
> 区块高度：422604
>
> 上传日期：2025年04月08日

###  解压缩数据包

#### Windows 全节点

1. 停止全节点进程 `start_abec.bat`
2. 将下载的 mainnet.zip 或 testnet.zip 解压缩至 [数据默认位置](#数据目录默认位置-1)
3. 重新运行全节点

#### MacOS 全节点

1. 停止全节点进程 `start_abec.sh`
2. 将下载的 mainnet.zip 或 testnet.zip 双击执行解压缩
3. 移动解压缩得到的 mainnet 或 testnet 目录并覆盖至 [数据默认位置](#数据目录默认位置-1)
4. 重新运行全节点

#### Linux 全节点
1. 停止全节点进程 `abec`或 `abectl`
2. 将下载的 mainnet.zip 或 testnet.zip 执行解压缩命令：
```bash
# Ubuntu 或 Debian 为例，安装 unzip 工具包
$ apt install unzip
# 解压缩主网压缩包
$ unzip mainnet.zip
# 或 解压缩测试网压缩包
$ unzip tentnet.zip
```
3. 移动解压缩得到的 mainnet 或 testnet 目录并覆盖至 [数据默认位置](#数据目录默认位置-1) 
```bash
# 将主网数据目录移动到 ~/.abec/data/ 下
$ mv -f mainnet ~/.abec/data/
# 或 将测试网数据目录移动到 ~/.abec/data/ 下
$ mv -f testnet ~/.abec/data/
```
4. 重新运行全节点

## 注意事项

> [!NOTE]
> 请留意数据更新的日期，更新的压缩包不能和旧的压缩包混用！
