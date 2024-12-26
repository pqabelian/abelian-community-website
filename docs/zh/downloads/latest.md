---
outline: deep
---

<style>
.button-container { 
  display: flex;
  flex-wrap: wrap; /* 允许按钮换行 */
  gap: 8px; /* 确保有间距 */
  margin-left: 18px; /* 左侧间距 */
}

.button-container .btn {
  display: inline-block;
  background-color: #007AFF;
  color: white !important; /* 使用 !important 确保颜色应用 */
  font-size: 16px !important; /* 同样使用 !important */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-family: Arial, sans-serif !important;
  padding: 10px 20px;
  border: 1px solid #666; /* 灰色边框 */
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none !important;
  transition: background-color 0.3s, transform 0.3s, font-weight 0.3s;
  /* 设定按钮的最小宽度，防止按钮太小 */
  min-width: 80px; /* 可根据需要调整最小宽度 */
}

.button-container .btn:hover {
  background-color: #0056b3; /* 更深的蓝色 */
  transform: scale(1.02); /* 放大效果 */
}
</style>

# Abelian 最新发布应用程序

## Abelian Pro (移动应用)

🔥 我们很高兴宣布：新的移动钱包 Abelian Pro 现已可供下载。

**下载链接**：

##### iOS
<div class="button-container">
  <a href="https://apps.apple.com/us/app/abelian-pro/id6475756639" class="btn">从苹果应用商店下载</a>
</div>

##### 安卓 (Android)
<div class="button-container">
  <a href="https://play.google.com/store/apps/details?id=info.abelian.walletpro" class="btn" style="background-color: #28A745;">从谷歌应用商店下载</a>
  <a href="https://download.pqabelian.io/release/android/abelian-mobile-wallet-pro-v1.0.9.apk" class="btn" style="background-color: #2DBD6E;">下载 APK 安装包文件</a>
</div>

::: info 特点介绍
新的移动钱包是对之前移动钱包的全面重写，旨在更加用户友好和功能丰富。它可在 iOS 和 Android 平台上使用。
:::

## Abelian 桌面应用程序

---

### Abelian 桌面钱包专业版 (MLP)
- **发布日期**: `2024-12-19`
- **软件包**: `abelian-desktop-wallet-pro-v1.0.0`
- **下载链接**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.0.zip" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.0.zip" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.0.zip" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.0.zip" class="btn">Linux (ARM)</a>
</div>

::: info 发布说明
**有什么新功能？**
- 支持多层隐私：<br>
  **a.** 完全私密地址：您的交易是加密且不可追踪的，钱包中的余额保持隐藏，确保最大程度的安全性和匿名性。<br>
  **b.** 匿名地址：隐私级别与比特币相当，即公开可见的币值和可追踪的交易，同时享受更低的手续费和更高的吞吐量。
- 支持多个接收者：<br>
  **a.** 完全私密接收者：允许最多5个接收者，确保安全和私人交易。<br>
  **b.** 匿名接收者：允许最多100个接收者，其中最多50个为独特接收者，为较大规模交易提供灵活性。
- 速度和存储显著提升：旧版原始桌面钱包Legacy需要用户花费数百小时甚至几天时间来同步整个 Abelian 区块链，并占用超过 100GB 存储空间。而这个全新的桌面钱包专业版（MLP）v1.0.0 仅需45分钟或更少时间（取决于网络速度和带宽）即可完成一次性同步，占用不到100MB存储空间。
- 引入了 Memo 概念，使用户可以在后量子、不可变的 Abelian 账本上写消息。在 Abelian 上，我们首次可以将个人笔记永久写入账本。

**为什么要升级？**
- 强烈建议现有桌面钱包传统版用户立即迁移到这个全新的桌面钱包专业版（MLP），这样他们不再需要记住最大可恢复的钱包数量。要进行迁移，我们需要在桌面钱包专业版（MLP）中创建一个新钱包，然后使用桌面钱包传统版将所有 ABEL 币转移到新钱包中。
- 您可以首次创建一些完全私密的钱包以及其他匿名私密的钱包。
:::

---

### Abelian 桌面钱包传统版
- **发布日期**： `2024-12-26`
- **软件包**： `abelian-desktop-wallet-legacy-v4.2.0`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.0.zip" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.0.zip" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.0.zip" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.0.zip" class="btn">Linux (ARM)</a>
</div>

::: warning 重要提示
桌面钱包传统版由 4.1.1 或更早版本升级到 4.2.0 版本后，需要重新导入钱包账户。详细操作步骤请查看 [桌面钱包传统版用户手册](/zh/guide/desktop-wallet-legacy#导入-abel-钱包账户)。
:::

::: info 发布说明
**有什么新功能？**
- 一键迁移：我们强烈建议从旧版钱包迁移到 MLP 钱包。MLP 钱包不再需要用户记住最大可恢复的钱包数量，这大大提高了可用性。此外，我们将仅支持全新的 MLP 钱包，并逐步淘汰旧版钱包类型。
- 您需要安装桌面钱包专业版 (MLP) v1.0.0 并创建一个新钱包（完全私密或匿名类型）。然后，使用桌面钱包传统版 4.2.0 的迁移功能，将每个旧版钱包中的所有 ABEL 币转移到新的 MLP 钱包。

**为什么要升级？**
- MLP 钱包地址在无需记住任何序列号（即最大可恢复的钱包数量）的情况下显著更易于使用。此外，您可以首次选择创建多个具有不同隐私级别的 MLP 地址，包括完全私密或伪私密。
:::

---

### Abelian 全节点
- **发布日期**： `2024-07-14`
- **软件包**： `abec-v1.0.0`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abec/abec-windows-amd64-v1.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-amd64-v1.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-arm64-v1.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-amd64-v1.0.0.tar.gz/" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-arm64-v1.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info 发布说明
1. MLPAUT 硬分叉：多级隐私（MLP）和 Abelian 用户代币（AUT）将在高度 300000 启用。
2. 当高度达到 340000 之后，版本 1 的交易将不再被打包到区块中。

**了解更多详情，请查看以下链接：**
- https://pqabelian.medium.com/abelian-network-hard-fork-introducing-multi-level-privacy-and-user-token-protocol-at-block-height-add96dacdcce
- https://community.pqabelian.io/guide/get-started.html
:::

---

### Abelian 显卡矿池客户端
- **发布日期**： `2023-05-31`
- **软件包**： `abelminer-v2.0.3`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abelminer-windows-amd64-v2.0.3.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-linux-amd64-v2.0.3.tar.gz" class="btn">Linux</a>
</div>

::: info 矿工指南
1. 矿池网站：https://maxpool.org/
2. 请下载压缩包，然后访问矿池网站阅读 [快速入门指南](https://maxpool.org/home/guide)。
3. 请加入我们的 [Discord 服务器](https://discord.com/invite/5rrDxP29hx)，并前往挖矿频道（在 “verify-yourself” 之后前往 “how-to-mine-abel” 子频道）获取 GPU 矿工的最新指南。
:::

---

### Abelian CPU 矿池客户端
- **发布日期**： `2023-05-28`
- **软件包**： `abe-miningpool-client-v0.13.0`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abe-miningpool-client-windows-amd64-v0.13.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abe-miningpool-client-macos-amd64-v0.13.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/pool/abe-miningpool-client-macos-arm64-v0.13.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/pool/abe-miningpool-client-linux-amd64-v0.13.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/pool/abe-miningpool-client-linux-arm64-v0.13.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info 矿工指南
矿池网站：https://maxpool.org/
:::

---

### Abelian 多层隐私钱包 (CLI)
- **发布日期**： `2024-12-19`
- **软件包**： `abewalletmlp-v2.0.0`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v2.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v2.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v2.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v2.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v2.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info 发布说明
**有什么新功能？**
- 统一钱包助记词：新的助记词可以在桌面钱包专业版 v1.0.0 和 多层隐私钱包 (CLI) v2.0.0 之间导入和导出。未来，它将进一步在所有 Abelian 产品中实现统一。

**为什么要升级？**
- 完全兼容性：用户可以继续使用 Abelian 多层隐私钱包 (CLI) v1.0.1，但所有后续的 Abelian 传统钱包 (CLI) 都将基于 Abelian 多层隐私钱包 (CLI) v2.0.0 的版本。
- 方便在桌面钱包专业版 v1.0.0 和 Abelian 多层隐私钱包 (CLI) v2.0.0 之间导入/导出助记词。

**更多详情，请查看以下链接：**
- https://pqabelian.medium.com/abelian-multi-layer-privacy-wallet-cli-user-guide-0a6dfe3a937d
:::

---

### Abelian 传统钱包 (CLI)
- **发布日期**： `2024-08-04`
- **软件包**： `abewalletlegacy-v1.0.0`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-windows-amd64-v1.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-macos-amd64-v1.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-macos-arm64-v1.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-linux-amd64-v1.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-linux-arm64-v1.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info 发布说明
1. 将 `abewallet` 重命名为 `abewalletlegacy`，仅支持旧地址格式。
2. 我们建议所有现有的 `abewallet` 用户在安装新的 `abewalletlegacy` 后重新导入他们的所有账户。
:::

---

### Abelian 轻量钱包 (CLI)
- **发布日期**： `2023-09-15`
- **软件包**： `abewallet-lite-v0.11.13`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewallet-lite/v0.12.5/abec_certs.zip" class="btn">证书文件</a>
  <a href="https://download.pqabelian.io/release/abewallet-lite/v0.12.5/abewallet.conf" class="btn">配置文件</a>
</div>

::: warning 对于新用户
如果您想尝试 Abelian 钱包（CLI），且不想下载完整的区块链数据，请使用 Abelian 轻量钱包（CLI）。更多详情请查看 Abelian 轻量 CLI 钱包手册。
:::

::: info 发布说明
自 2023-09-15版本起，Abelian 轻量钱包（CLI）不再提供独立软件包。它本质上是 Abelian 钱包（CLI）软件包，仅附带了一些证书，用于访问由 Abelian 基金会维护的现有全节点，通过默认配置文件，无需运行全节点即可连接到 Abelian 主网。
:::

## Abelian Abelian 应用程序历史版本

查看更多历史版本下载地址, 请访问 [Abelian 应用程序历史版本](/zh/download/release-history) 页面。

## Abelian 用户手册

查看用户和开发者的更多文档，请访问 [Abelian 社区文档](/guide/get-started) 页面。

- [Abelian 应用程序常识](/guide/index)
- [Abelian 桌面钱包专业版用户手册](/guide/wallet/desktop-wallet-pro)
- [Abelian 桌面钱包传统版用户手册](/guide/wallet/desktop-wallet-legacy)
- [Abelian Abelian 矿池用户手册](/guide/mining/gpu-pool)
- [Abelian 全节点用户手册](/guide/cli-full-node)
- [Abelian 多层隐私钱包 (CLI) 用户手册](/guide/wallet/cli-wallet-mlp)
- [Abelian 传统钱包 (CLI) 用户手册](/guide/wallet/cli-wallet-legacy)
- [Abelian 轻量钱包 (CLI) 用户手册](/guide/wallet/cli-wallet-lite)