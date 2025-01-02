---
outline: deep
---

# Abelian 应用程序基础常识

本文档是必读项，它将帮助你开始使用 Abelian 的软件包。

## 1. Abelian 应用程序架构

- **abec** 是一个全天候运行的全节点，与其他全节点进行通信以形成全球 Abelian 网络。
- **abewallet** (abewalletlegacy/abewalletmlp) 是一个 CLI 钱包，与全节点同步，用于跟踪钱包余额。它也用于创建新钱包或恢复现有钱包。
- **abewalletctl** (abewalletlegacyctl/abewalletmlpctl) 是一个 CLI 控制软件，用于通过各种操作查询，例如余额检查、资金转移等。
- **abelminer** 是一个基于 CLI 的 GPU 挖矿软件，它从全节点获取 POW 挖矿任务，进行解题，并将结果返回给全节点。

## 2. 网络

- **abec <-> abec**: 端口 8666
- **abec <-> abewallet**: 端口 8667
- **abec <-> abectl**: 端口 8667
- **abewallet <-> abectl**: 端口 8665
- **abec <-> abelminer**: 端口 8668

## 3. 你需要运行哪些应用

如果你只是想运行一个安全且用户友好的 Abelian 钱包，并带有一个漂亮的用户界面，您可以直接访问 Abelian 官方下载页面，获取 [Abelian 桌面钱包经典版](/zh/downloads/latest#abelian-桌面钱包经典版) 安装包。

如果你想尝试最新功能最强大带用户界面的 Abelian 钱包，您可以在 Abelian 官方下载页面中获取 [Abelian 桌面钱包专业版 (MLP)](/zh/downloads/latest#abelian-桌面钱包专业版-mlp) 安装包。

如果你只想连接到 Abelian 网络运行全节点，以便获取账本的完整数据，你只需要运行 **abec**。这也有助于通过运行更多的全节点使 Abelian 网络更加去中心化。截至撰写本文时，全节点（Abelian 账本）的大小约为 120GB。我们建议运行 **abec** 的机器至少有 2TB 的存储空间和 8GB 的内存。详情请参考 [Abelian 全节点手册](/zh/guide/cli-full-node)。

如果你想运行一个基于 CLI 的钱包，你可以运行全节点（**abec**）和 CLI 钱包（**abewalletlegacy**/**abewalletmlp**）。运行这两个软件包的直接方式是将它们都运行在同一台机器上。然后你可以使用 **abewalletlegacy** 或 **abewalletmlp** 检查余额、进行资金转账等。详情请参考 [Abelian 经典钱包 (CLI) 手册](/zh/guide/wallet/cli-wallet-legacy) 或 [Abelian 多层隐私钱包 (CLI) 手册](/zh/guide/wallet/cli-wallet-mlp)。请同时注意上述的存储容量需求。

如果你是 GPU 挖矿者，请查阅 [Abelian GPU 挖矿手册](/zh/guide/mining/gpu-pool) 获取详细信息。这使你能够进行 SOLO 挖矿。

如果你只有少量的 GPU 卡并且想加入 Abelian 基金会的官方挖矿池服务器，以便与其他矿工一起挖矿并分享 ABEL 奖励，请前往 [Abelian GPU 挖矿池客户端](/zh/downloads/latest#abelian-显卡矿池客户端) 部分获取挖矿池客户端软件及详细信息。

## 4. Abelian 官方下载页面

[Abelian 官方下载页面](/zh/downloads/latest)。要与其他矿工、开发者和用户互动，请访问 [官方 Discord 服务器](https://discord.com/invite/5rrDxP29hx)。
