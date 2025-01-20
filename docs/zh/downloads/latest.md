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
}

.download-wrapper {
  padding: 32px;
  width: 100%;
  border-radius: 24px;
  background-color: #e5edff66;
  position: relative;
  min-height: 240px;
  max-width: 688px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
}
.dark .download-wrapper {
  background-color: #000;
  box-shadow: 0 0 1px 1px #2d2d3a;
}
.dark .download-wrapper .text-wrapper {
  color: #d3d3d3;
}
.download-wrapper .bg-img {
  position: absolute;
  background: url("/img-phone.png") no-repeat center/contain;
  height:240px;
  width: 260px;
  right:20px;
  bottom: -9px;
  pointer-events: none;
  z-index: 10;
}

.download-wrapper .text-wrapper {
  display: flex;
  flex-direction:column;
  color: rgb(51,51,51);
  margin-bottom: 56px;
}
.download-wrapper .text-wrapper span:nth-child(1) {
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: 500;
}
.download-wrapper .text-wrapper span:nth-child(2) {
  font-size: 16px;
  font-weight: 400;
}
.download-wrapper .btn-wrapper {
  display: flex;
  gap: 16px;
  position: absolute;
  z-index: 20;
  align-items: end;
}
.download-wrapper .btn-apk {
  border: 1px solid rgb(54, 56, 255);
  color: rgb(54, 56, 255);
  font-size: 20px;
  font-weight: 500;
  height: 52px;
  width: 84px;
  border-radius: 24px;
  text-align: center;
  line-height: 52px;
  cursor: pointer;
  transition: all ease .2s;
  text-decoration: none;
  background-color: #fff;
}
.download-wrapper .btn-apk:hover {
  background-color: rgb(54, 56, 255);
  color: #fff;
}
.download-wrapper .btn-base {
  width: 180px;
  height: 60px;
  cursor: pointer;
  border-radius: 8px;
}
.download-wrapper .btn-android {
  background: #fff url("/android-download.svg") no-repeat center/contain;
}
.download-wrapper .btn-ios {
  background: #fff url("/ios-download.svg") no-repeat center/contain;
}

.btn-base {
  width: 180px;
  height: 60px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #dadada;
}

@media screen and (max-width: 576px) {
   .download-wrapper {
      padding: 16px;
      width: 100%;
      height: calc(100vw * 0.7);
      min-height: 320px;
   }
   .download-wrapper .bg-img {
      right: 2px;
   }
  .download-wrapper .text-wrapper {
    margin-bottom: 48px;
  }
  .download-wrapper .btn-wrapper {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
  .download-wrapper .btn-apk {
    width: 58px;
    height: 46px;
    line-height: 46px;
    font-size:16px;
  }
  .download-wrapper .btn-base {
    width: 170px;
    height: 56px;
  }
}
</style>

# Abelian 最新发布应用程序

## Abelian Pro (移动应用)
🔥 我们很高兴宣布：新的移动钱包 Abelian Pro 现已可供下载。

<section class="download-wrapper">
  <div class="bg-img"></div>
  <div class="text-wrapper">
    <span>Abelian Pro 移动应用程式</span>
    <span>下载我们最新的移动钱包</span>
  </div>
  <div class="btn-wrapper">
    <a href="https://download.pqabelian.io/release/android/abelian-mobile-wallet-pro-v1.1.0.apk" class="btn-apk">APK</a>
    <a href="https://play.google.com/store/apps/details?id=info.abelian.walletpro" class="btn-base btn-android"></a>
    <a href="https://apps.apple.com/us/app/abelian-pro/id6475756639" class="btn-base btn-ios"></a>
  </div>
</section>

::: warning 重要提示
Abelian Pro 移动钱包暂不支持与 Abelian 桌面钱包专业版 (MLP) 转账交易，后续版本中将支持。如果您需要进行转账交易，请继续使用桌面钱包经典版 (Legacy)。
:::

::: info 特点介绍
新的移动钱包是对之前移动钱包的全面重写，旨在更加用户友好和功能丰富。它可在 iOS 和 Android 平台上使用。
:::

## Abelian 桌面应用程序

---

### Abelian 桌面钱包专业版 (MLP)
- **发布日期**: `2025-01-04`
- **软件包**: `abelian-desktop-wallet-pro-v1.0.1`
- **下载链接**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.1.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.1.zip" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.1.zip" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.1.zip" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.1.zip" class="btn">Linux (ARM)</a>
</div>

::: warning 重要提示
Abelian 桌面钱包专业版 (MLP) 暂不支持移动钱包 Abelian Pro 转账交易，目前 Maxpool 矿池暂时也不支持 MLP 钱包地址作为收益地址，后续版本中将支持。如果您需要进行转账交易，推荐最新版本的桌面钱包经典版 (Legacy)。
:::

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
- 强烈建议现有桌面钱包经典版（Legacy）用户立即迁移到这个全新的桌面钱包专业版（MLP），这样他们不再需要记住最大可恢复的钱包数量。要进行迁移，我们需要在桌面钱包专业版（MLP）中创建一个新钱包，然后使用桌面钱包经典版将所有 ABEL 币转移到新钱包中。
- 您可以首次创建一些完全私密的钱包以及其他匿名私密的钱包。

**附注：** 1.0.1 版本相较于 1.0.0 版本仅更新了 Abelian 最新 LOGO，功能上没有任何变化。
:::

---

### Abelian 桌面钱包经典版
- **发布日期**： `2025-01-04`
- **软件包**： `abelian-desktop-wallet-legacy-v4.2.1`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.1.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.1.zip" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.1.zip" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.1.zip" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.1.zip" class="btn">Linux (ARM)</a>
</div>

::: warning 重要提示
桌面钱包经典版由 4.1.1 或更早版本升级到 4.2.0 版本后，需要重新导入钱包账户。详细操作步骤请查看 [桌面钱包经典版用户手册](/zh/guide/wallet/desktop-wallet-legacy#导入-abel-钱包账户)。
:::

::: info 发布说明
**有什么新功能？**
- 一键迁移：我们强烈建议从旧版钱包迁移到 MLP 钱包。MLP 钱包不再需要用户记住最大可恢复的钱包数量，这大大提高了可用性。此外，我们将仅支持全新的 MLP 钱包，并逐步淘汰旧版钱包类型。
- 您需要安装桌面钱包专业版 (MLP) v1.0.0 并创建一个新钱包（完全私密或匿名类型）。然后，使用桌面钱包经典版 4.2.0 的迁移功能，将每个旧版钱包中的所有 ABEL 币转移到新的 MLP 钱包。

**为什么要升级？**
- MLP 钱包地址在无需记住任何序列号（即最大可恢复的钱包数量）的情况下显著更易于使用。此外，您可以首次选择创建多个具有不同隐私级别的 MLP 地址，包括完全私密或伪私密。

**附注：** 4.2.1 版本相较于 4.2.0 版本仅更新了 Abelian 最新 LOGO，功能上没有任何变化。
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
- 完全兼容性：用户可以继续使用 Abelian 多层隐私钱包 (CLI) v1.0.1，但所有后续的 Abelian 经典钱包 (CLI) 都将基于 Abelian 多层隐私钱包 (CLI) v2.0.0 的版本。
- 方便在桌面钱包专业版 v1.0.0 和 Abelian 多层隐私钱包 (CLI) v2.0.0 之间导入/导出助记词。

**更多详情，请查看以下链接：**
- https://pqabelian.medium.com/abelian-multi-layer-privacy-wallet-cli-user-guide-0a6dfe3a937d
:::

---

### Abelian 经典钱包 (CLI)
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

## Abelian 应用程序历史版本

查看更多历史版本下载地址, 请访问 [Abelian 应用程序历史版本](/zh/downloads/release-history) 页面。

## Abelian 用户手册

查看用户和开发者的更多文档，请访问 [Abelian 社区文档](/guide/get-started) 页面。

- [Abelian 应用程序常识](/guide/index)
- [Abelian 桌面钱包专业版用户手册](/guide/wallet/desktop-wallet-pro)
- [Abelian 桌面钱包经典版用户手册](/guide/wallet/desktop-wallet-legacy)
- [Abelian Abelian 矿池用户手册](/guide/mining/gpu-pool)
- [Abelian 全节点用户手册](/guide/cli-full-node)
- [Abelian 多层隐私钱包 (CLI) 用户手册](/guide/wallet/cli-wallet-mlp)
- [Abelian 经典钱包 (CLI) 用户手册](/guide/wallet/cli-wallet-legacy)
