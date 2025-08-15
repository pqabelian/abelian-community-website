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
    <a href="https://download.pqabelian.io/release/android/abelian-mobile-wallet-pro-v3.0.0.apk" class="btn-apk">APK</a>
    <a href="https://play.google.com/store/apps/details?id=info.abelian.walletpro" class="btn-base btn-android"></a>
    <a href="https://apps.apple.com/us/app/abelian-pro/id6475756639" class="btn-base btn-ios"></a>
  </div>
</section>

::: info <Badge type="warning" text="特点介绍" />
新的移动钱包是对之前移动钱包的全面重写，旨在更加用户友好和功能丰富。它可在 iOS 和 Android 平台上使用。

**v3.0.0 升级说明:**

1. 现在可以使用 USDT 和 USDC 购买 ABEL 了！
2. 优化交易历史缓存；
3. 修复了一些错误。

**v2.x 特点：**

1. 同时支持钱包账户 Legacy 地址和新的 MLP 地址，MLP（多层隐私）账户的优势参考 [桌面钱包专业版 - 发布说明](/zh/downloads/latest#abelian-桌面钱包专业版-mlp)；
2. 推荐升级到新版后创建新的钱包账户（MLP 地址），并在创建新的 MLP 钱包账户后，将所有旧账户的余额 ABEL 币从转账至 MLP 钱包账户；
3. 创建新的钱包账户（MLP 地址）后，在 “账户资料” 中备份 24 个单词的助记词（恢复短语），可以使用桌面钱包专业版导入此助记词。
:::

---

## 桌面钱包专业版 (MLP)
- **发布日期**: `2025-07-15`
- **软件名称**: `abelian-desktop-wallet-pro-v1.1.0`
- **软件大小**: `≈ 120MB`
- **下载链接**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.1.0.exe" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.1.0.dmg" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.1.0.dmg" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.1.0.deb" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.1.0.deb" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="发布说明" />
**有什么新功能？**
- 交易确认更快，一旦交易输出可用，就会被标记为可支配。
- 优化可支配金额显示，在发送页面，输入框会精确显示可用金额，以便最大化后续转账，并新增“最大”按钮，在转账给一个收款人时可以自动计算并扣除交易费用。
- 使用体验更友好直观，增加了更多提示信息。

**为什么要升级？**
- 强烈建议现有桌面钱包经典版（Legacy）用户立即迁移到这个全新的桌面钱包专业版（MLP），这样他们不再需要记住最大可恢复的钱包数量。要进行迁移，我们需要在桌面钱包专业版（MLP）中创建一个新钱包，然后使用桌面钱包经典版将所有 ABEL 币转移到新钱包中。
- 您可以首次创建一些完全私密的钱包以及其他匿名私密的钱包。

**v1.1.0 升级说明:**
- **UTXO 币合并**：我们在每个账户的状态主页上添加了“颗粒度等级”功能。该值显示您的账户中有多少个币（即 UTXO）。可以将其视为账户的颗粒度，从 0 到 1，越接近 1 表示账户中小额币越多；越接近 0 表示账户中币的数量较少且每个币的金额较大。<br>
  **为什么这很重要？** 因为交易输入的币（即 UTXO）数量有上限。伪隐私交易最多可以有 100 个币，而完全隐私交易最多只能有 5 个币。因此，如果您的账户中有很多币，即账户的颗粒度等级较高，您可能无法在一次交易中发送所有币。因此，我们为想要合并币的人引入了这个功能。此外，您可以通过鼠标悬停在粒度度旁边的圆圈“i”图标上查看您当前有多少个币。
- **同步状态指示器**：在右上角的账户下拉菜单中，我们现在可以直接查看哪个账户正在同步。绿色表示正在同步，红色表示未同步。
- **区块链同步时间估算**：同步不再是个谜——我们现在显示剩余时间估算（例如，“大约 30 分钟”）。通过清晰的倒计时更好地规划您的任务。
- **改进的交易历史加载时间**：加载过去的交易现在几乎是瞬时的。无需再等待页面加载——几秒钟内即可查看您的活动或检查最近的转账。
:::

---

## 桌面钱包经典版
- **发布日期**： `2025-07-03`
- **软件名称**： `abelian-desktop-wallet-legacy-v4.4.1`
- **软件大小**： `≈ 120MB`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.4.1.exe" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.4.1.dmg" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.4.1.dmg" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.4.1.deb" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.4.1.deb" class="btn">Linux (ARM)</a>
</div>

::: warning <Badge type="tip" text="重要提示" />
1. 桌面钱包经典版由 4.1.1 或更早版本升级到 4.3.0 版本后，需要重新导入钱包账户。详细操作步骤请查看 [桌面钱包经典版用户手册](/zh/guide/wallet/desktop-wallet-legacy#导入-abel-钱包账户)。

2. Abelian 桌面钱包经典版不支持迁移到移动钱包 Abelian Pro （MLP账户地址），但可以进行转账。
:::

::: info <Badge type="warning" text="发布说明" />
**有什么新功能？**
- 一键迁移：我们强烈建议从旧版钱包迁移到 MLP 钱包。MLP 钱包不再需要用户记住最大可恢复的钱包数量，这大大提高了可用性。此外，我们将仅支持全新的 MLP 钱包，并逐步淘汰旧版钱包类型。
- 您需要安装桌面钱包专业版 (MLP) v1.0.3 并创建一个新钱包（完全私密或匿名类型）。然后，使用桌面钱包经典版 4.3.0 的迁移功能，将每个旧版钱包中的所有 ABEL 币转移到新的 MLP 钱包。

**为什么要升级？**
- MLP 钱包地址在无需记住任何序列号（即最大可恢复的钱包数量）的情况下显著更易于使用。此外，您可以首次选择创建多个具有不同隐私级别的 MLP 地址，包括完全私密或伪私密。

**v4.4.1 升级说明:**
- 启用自适应同步机制，适应不同网络环境；
- 改进状态页面的同步时间估算；
- 在交易页面添加余额变化颜色标识；
- 账户选择中增加状态指示灯；
- 限制账户数量至100个，优化多账户同步稳定性;
- 此 Legacy 软件的正式名称是 “Abelian Wallet Legacy”。例如，如果您是 macOS 用户，您会在应用程序文件夹中找到这个软件名称为 “Abelian Wallet Legacy”，而不是旧版本的 “Abelian Wallet”；
- 应用程序优化和修复一些 bug。
:::

---

## Abelian 节点（abec）
- **发布日期**： `2025-07-03`
- **软件名称**： `abec-v2.0.2`
- **软件大小**： `≈ 20MB`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abec/abec-windows-amd64-v2.0.2.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-amd64-v2.0.2.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-arm64-v2.0.2.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-amd64-v2.0.2.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-arm64-v2.0.2.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="发布说明" />
- 添加 400,000 高度的检查点（哈希值：73a434b741b357e37587b1b0a39c0ef65832d403bfd4d91eb11d9d805c568022）
- 运行节点各模式存储空间需求：Normal Node ≈ 160GB、Semi-Full Node ≈ 240GB、Full Node ≈ 1.2TB

**了解更多详情，请查看以下链接：**
- https://www.pqabelian.io/blog/abelian-network-hard-fork-introducing-multi-level-privacy-and-user-token-protocol-at-block-height-300-000
- https://community.pqabelian.io/guide/get-started
- https://community.pqabelian.io/guide/cli-full-node
:::

---

## 显卡挖矿客户端
- **发布日期**： `2023-05-31`
- **软件名称**： `abelminer-v2.0.4`
- **软件大小**： `≈ 36MB`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abelminer-windows-amd64-v2.0.4.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-linux-amd64-v2.0.4.tar.gz" class="btn">Linux</a>
</div>

::: info <Badge type="warning" text="显卡矿工指南" />
1. Abelian 显卡挖矿客户端可用于 Solo 挖矿和矿池挖矿；
2. 矿池网站：https://maxpool.org/
3. 请访问矿池网站阅读 [快速入门指南](https://maxpool.org/home/guide)，选择适合您的硬件和系统平台按照步骤部署挖矿；
4. 请加入我们的 [Discord 社区](https://discord.com/invite/5rrDxP29hx)，并前往挖矿频道（在 “verify-yourself” 之后前往 “how-to-mine-abel” 子频道）获取 GPU Solo 挖矿的最新指南。
:::

---

## CPU 挖矿客户端
- **发布日期**： `2025-07-18`
- **软件名称**： `abelminer-cpu-v0.13.2`
- **软件大小**： `≈ 5.5MB`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-windows-amd64-v0.13.2.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-macos-amd64-v0.13.2.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-macos-arm64-v0.13.2.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-linux-amd64-v0.13.2.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-linux-arm64-v0.13.2.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="CPU 矿工指南" />
1. 此 Abelian CPU 挖矿客户端可以被所有拥有 PC/笔记本电脑的人用于 ABEL 挖矿；
2. 该客户端针对矿池挖矿进行了优化，矿池网站：https://maxpool.org/
3. 矿池网站：https://maxpool.org/，请访问 [账户设置](https://maxpool.org/account/settings) 阅读 CPU 挖矿指南。
4. 如果你有 GPU 显卡，请查看上面标题为 [“Abelian GPU 挖矿客户端”](#abelian-显卡挖矿客户端) 的部分以获取 GPU 矿池挖矿信息。如果你想进行 GPU 单独挖矿，请加入我们的 [Discord 社区](https://discord.com/invite/5rrDxP29hx)，并进入挖矿频道（在“verify-yourself”后面的“how-to-mine-abel”下）获取最新指南。
:::

---

## 多层隐私钱包 (CLI)
- **发布日期**： `2024-12-19`
- **软件名称**： `abewalletmlp-v2.0.0`
- **软件大小**： `≈ 16MB`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v2.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v2.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v2.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v2.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v2.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="发布说明" />
**有什么新功能？**
- 统一钱包助记词：新的助记词可以在桌面钱包专业版 v1.0.0 和 多层隐私钱包 (CLI) v2.0.0 之间导入和导出。未来，它将进一步在所有 Abelian 产品中实现统一。

**为什么要升级？**
- 完全兼容性：用户可以继续使用 Abelian 多层隐私钱包 (CLI) v1.0.1，但所有后续的 Abelian 经典钱包 (CLI) 都将基于 Abelian 多层隐私钱包 (CLI) v2.0.0 的版本。
- 方便在桌面钱包专业版 v1.0.0 和 Abelian 多层隐私钱包 (CLI) v2.0.0 之间导入/导出助记词。

**更多详情，请查看以下链接：**
- https://www.pqabelian.io/blog/abelian-multi-layer-privacy-wallet-cli-user-guide
:::

---

## 经典钱包 (CLI)
- **发布日期**： `2024-08-04`
- **软件名称**： `abewalletlegacy-v1.0.0`
- **软件大小**： `≈ 23MB`
- **下载链接**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-windows-amd64-v1.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-macos-amd64-v1.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-macos-arm64-v1.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-linux-amd64-v1.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-linux-arm64-v1.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="发布说明" />
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
- [Abelian 节点（abec）用户手册](/guide/abelian-node)
- [Abelian 多层隐私钱包 (CLI) 用户手册](/guide/wallet/cli-wallet-mlp)
- [Abelian 经典钱包 (CLI) 用户手册](/guide/wallet/cli-wallet-legacy)
