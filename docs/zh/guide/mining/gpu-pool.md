---
outline: deep
---

# Abelian GPU 挖矿手册

本文档描述了如何运行 SOLO GPU 挖矿软件。

请先参考 Abelian 软件基础文档，以了解软件架构以及 SOLO 挖矿或矿池选择。

请访问 Abelian 官方网站下载页面，下载 [Abelian GPU 挖矿池客户端](https://pqabelian.io/download#desktop)。要与其他矿工、开发者和用户互动，请访问 [官方 Discord 服务器](https://discord.com/invite/5rrDxP29hx)。

所有操作都通过命令行界面（CLI）进行。对于 Linux，打开终端；对于 Windows，打开 PowerShell 或任何你喜欢的 shell 应用程序。

## 安装

下载两个压缩文件，例如适用于 x86 架构（例如 Intel 芯片）的 Linux 系统的 `abelminer-linux-amd64-v2.0.3.tar.gz`。

解压并将它们放在同一个文件夹 ~/abel/ 下：

```txt
~/abel/abelminer-linux-amd64-v2.0.3/
```

## 创建一个钱包地址

假设你已经使用移动钱包专业版创建了一个钱包账户。

最简单的方法是从官方下载页面下载 [Abelian Pro](https://pqabelian.io/download#desktop)，并创建一个钱包。然后按照以下步骤获取你的钱包地址：

1. 在 `Abelian Pro` 主界面中，点击右上角的 `个人资料` 图标。
2. 导航到 `个人资料 -> 账户详情` 页面。
3. 点击 `地址` 栏下串字符后面的 `眼睛` 图标。
4. 在弹出窗口中，点击 `复制` 按钮将地址复制到剪贴板。

## 加入官方矿池

- 请访问官方矿池 Maxpool 阅读 [快速入门指南](https://maxpool.org/home/guide);

- 原 Abelian 基金会矿池 (pool.abelian.info) 当前仍然可以使用，但网址已经变更为：[https://legacy.maxpool.org/home](https://legacy.maxpool.org/home)，请老矿工使用该网址访问。强烈推荐在硬分叉完成之前迁移到新的 Maxpool 矿池;

- Maxpool 矿池需要更新客户端至 [Abelian GPU 挖矿池客户端 v2.0.3](https://pqabelian.io/download#desktop)

## 运行 GPU 挖矿程序 - abelminer

Maxpool 用户指南包含了适用于各种平台的挖矿辅助脚本和程序。以下是运行 `abelminer` 二进制程序的简要介绍：

进入 `~/abel/abelminer-linux-amd64-v2.0.3/` 并运行 GPU 挖矿客户端 (`abelminer`)：

::: code-group
```shell [Windows]
$ .\abelminer.exe -P http://[Pool Server Domain or IP address]:8668
```
```shell [macOS and Linux]
$ ./abelminer -P http://[Pool Server Domain or IP address]:8668
```
:::
