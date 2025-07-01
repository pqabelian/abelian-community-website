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
    <a href="https://download.pqabelian.io/release/android/abelian-mobile-wallet-pro-v2.1.0.apk" class="btn-apk">APK</a>
    <a href="https://play.google.com/store/apps/details?id=info.abelian.walletpro" class="btn-base btn-android"></a>
    <a href="https://apps.apple.com/us/app/abelian-pro/id6475756639" class="btn-base btn-ios"></a>
  </div>
</section>

::: info 特点介绍
新的移动钱包是对之前移动钱包的全面重写，旨在更加用户友好和功能丰富。它可在 iOS 和 Android 平台上使用。

**v2.1.0 升级说明:**

1. 在转账发送界面添加了预计发送时间；
2. 修复了一些错误。

**v2.0.0 特点：**

1. 同时支持钱包账户 Legacy 地址和新的 MLP 地址，MLP（多层隐私）账户的优势参考 [桌面钱包专业版 - 发布说明](/zh/downloads/latest#abelian-桌面钱包专业版-mlp)；
2. 推荐升级到新版后创建新的钱包账户（MLP 地址），并在创建新的 MLP 钱包账户后，将所有旧账户的余额 ABEL 币从转账至 MLP 钱包账户；
3. 创建新的钱包账户（MLP 地址）后，在 “账户资料” 中备份 24 个单词的助记词（恢复短语），可以使用桌面钱包专业版导入此助记词。
:::

## Abelian 桌面应用程序

---

### Abelian 桌面钱包专业版 (MLP)
- **发布日期**: `2025-04-23`
- **软件包**: `abelian-desktop-wallet-pro-v1.0.3`
- **下载链接**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.3.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.3.zip" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.3.zip" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.3.zip" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.3.zip" class="btn">Linux (ARM)</a>
</div>

::: info 发布说明
**有什么新功能？**
- 交易确认更快，一旦交易输出可用，就会被标记为可支配。
- 优化可支配金额显示，在发送页面，输入框会精确显示可用金额，以便最大化后续转账，并新增“最大”按钮，在转账给一个收款人时可以自动计算并扣除交易费用。
- 使用体验更友好直观，增加了更多提示信息。

**为什么要升级？**
- 强烈建议现有桌面钱包经典版（Legacy）用户立即迁移到这个全新的桌面钱包专业版（MLP），这样他们不再需要记住最大可恢复的钱包数量。要进行迁移，我们需要在桌面钱包专业版（MLP）中创建一个新钱包，然后使用桌面钱包经典版将所有 ABEL 币转移到新钱包中。
- 您可以首次创建一些完全私密的钱包以及其他匿名私密的钱包。

**v1.0.3 升级说明:**
- 交易确认更快，一旦交易输出可用，就会被标记为可支配。
- 优化可支配金额显示，在发送页面，输入框会精确显示可用金额，以便最大化后续转账，并新增“最大”按钮，在转账给一个收款人时可以自动计算并扣除交易费用。
- 使用体验更友好直观，增加了更多提示信息。
:::

---

### Abelian 桌面钱包经典版
- **发布日期**： `2025-06-30`
- **软件包**： `abelian-desktop-wallet-legacy-v4.4.0`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.4.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.4.0.zip" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.4.0.zip" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.4.0.zip" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.4.0.zip" class="btn">Linux (ARM)</a>
</div>

::: warning 重要提示
1. 桌面钱包经典版由 4.1.1 或更早版本升级到 4.3.0 版本后，需要重新导入钱包账户。详细操作步骤请查看 [桌面钱包经典版用户手册](/zh/guide/wallet/desktop-wallet-legacy#导入-abel-钱包账户)。

2. Abelian 桌面钱包经典版不支持迁移到移动钱包 Abelian Pro （MLP账户地址），但可以进行转账。
:::

::: info 发布说明
**有什么新功能？**
- 一键迁移：我们强烈建议从旧版钱包迁移到 MLP 钱包。MLP 钱包不再需要用户记住最大可恢复的钱包数量，这大大提高了可用性。此外，我们将仅支持全新的 MLP 钱包，并逐步淘汰旧版钱包类型。
- 您需要安装桌面钱包专业版 (MLP) v1.0.3 并创建一个新钱包（完全私密或匿名类型）。然后，使用桌面钱包经典版 4.3.0 的迁移功能，将每个旧版钱包中的所有 ABEL 币转移到新的 MLP 钱包。

**为什么要升级？**
- MLP 钱包地址在无需记住任何序列号（即最大可恢复的钱包数量）的情况下显著更易于使用。此外，您可以首次选择创建多个具有不同隐私级别的 MLP 地址，包括完全私密或伪私密。

**v4.4.0 升级说明:**
- 启用自适应同步机制，适应不同网络环境；
- 改进状态页面的同步时间估算；
- 在交易页面添加余额变化颜色标识；
- 账户选择中增加状态指示灯；
- 限制账户数量至100个，优化多账户同步稳定性。
:::

---

### Abelian 全节点
- **发布日期**： `2025-04-02`
- **软件包**： `abec-v2.0.1`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abec/abec-windows-amd64-v2.0.1.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-amd64-v2.0.1.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-arm64-v2.0.1.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-amd64-v2.0.1.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-arm64-v2.0.1.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info 发布说明
1. 启用更新的代币释放计划
2. 添加 400,000 高度的检查点
3. 运行节点各模式存储空间需求：normalnode = 250GB, seminode = 150GB, fullnode = 1.2TB

**了解更多详情，请查看以下链接：**
- https://www.pqabelian.io/blog/abelian-network-hard-fork-introducing-multi-level-privacy-and-user-token-protocol-at-block-height-300-000
- https://community.pqabelian.io/guide/get-started
- https://community.pqabelian.io/guide/cli-full-node
:::

---

### Abelian 显卡挖矿客户端
- **发布日期**： `2023-05-31`
- **软件包**： `abelminer-v2.0.3`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abelminer-windows-amd64-v2.0.3.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-linux-amd64-v2.0.3.tar.gz" class="btn">Linux</a>
</div>

::: info 矿工指南
1. Abelian 显卡挖矿客户端可用于 Solo 挖矿和矿池挖矿。
2. 矿池网站：https://maxpool.org/
3. 请下载压缩包，然后访问矿池网站阅读 [快速入门指南](https://maxpool.org/home/guide)。
4. 请加入我们的 [Discord 服务器](https://discord.com/invite/5rrDxP29hx)，并前往挖矿频道（在 “verify-yourself” 之后前往 “how-to-mine-abel” 子频道）获取 GPU Solo 挖矿的最新指南。
:::

---

### Abelian CPU 挖矿客户端
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
