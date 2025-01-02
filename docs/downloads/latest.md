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

# Abelian Latest Applications

## Abelian Pro (Mobile)
🔥 We are pleased to announce that the new mobile wallet, Abelian Pro, is now available for download.

<section class="download-wrapper">
    <div class="bg-img"></div>
    <div class="text-wrapper">
     <span>Abelian Pro Mobile App</span>
     <span>Download our latest mobile wallet</span>
    </div>
    <div class="btn-wrapper">
      <a href="https://download.pqabelian.io/release/android/abelian-mobile-wallet-pro-v1.1.0.apk" class="btn-apk">APK</a>
      <a href="https://play.google.com/store/apps/details?id=info.abelian.walletpro" class="btn-base btn-android"></a>
      <a href="https://apps.apple.com/us/app/abelian-pro/id6475756639" class="btn-base btn-ios"></a>
    </div>
</section>

::: warning
The Abelian Pro mobile wallet currently does not support transactions with the Abelian Desktop Wallet Pro (MLP). This feature will be supported in future updates. If you need to perform transactions, please continue using the Desktop Wallet Legacy version.
:::

::: info Features
The new mobile wallet is a complete rewrite of the previous mobile wallet and is designed to be more user-friendly and feature-rich.
It is available on both iOS and Android platforms.
:::

## Abelian Desktop Applications

---

### Abelian Desktop Wallet Pro (MLP)
- **Release Date**: `2024-12-19`
- **Package**: `abelian-desktop-wallet-pro-v1.0.0`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.0.zip" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.0.zip" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.0.zip" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.0.zip" class="btn">Linux (ARM)</a>
</div>

::: warning
The Abelian Desktop Wallet Pro (MLP) currently does not support transactions with the Abelian Pro mobile wallet. Additionally, the Maxpool mining pool does not yet support MLP wallet addresses as payout addresses. These features will be supported in future updates. If you need to perform transactions, we recommend using the latest version of the Desktop Wallet Legacy.  
:::

::: info Release Notes
**What's New?**
- Support for multi-layer privacy:<br>
  **a.** Fully-Private Address: Your transactions are encrypted and untraceable, and balances in your wallets remain hidden, ensuring maximum security and anonymity.<br>
  **b.** Pseudonymous Address: The privacy level is comparable to that of Bitcoin, namely, publicly visible coin values and traceable transactions, while benefiting from much lower gas fees and much increased throughput.
- Support for multiple recipients:<br>
  **a.** Fully-Private Recipient: Allows up to 5 recipients, ensuring secure and private transactions.<br>
  **b.** Pseudo-Private Recipient: Allows up to 100 recipients with a maximum of 50 unique recipients, providing flexibility for larger transactions.
- Significant improvement in both speed and storage: the old, original Desktop Wallet Legacy requires users to spend hundreds of hours and even days to sync up the entire Abelian block-chain when running the desktop application for the first time. It also takes over 100GB of storage space. This brand new Desktop Wallet Pro (MLP) v1.0.0 takes only 45 minutes or less (depending on your network speed and bandwidth) to complete the one-time synchronization and less than 100MB of storage.
- Introduced the concept Memo, which allows users to write messages onto the post-quantum and immutable Abelian ledger. For the first time on Abelian, we can now write our personal notes onto the ledger permanently.

**Why Should You Upgrade?**
- Existing users of Desktop Wallet Legacy are strongly recommended to migrate now to this brand new Desktop Wallet Pro (MLP) so that they no longer need to remember the maximum recoverable number of wallets. To migrate, we need to create a new wallet at the Desktop Wallet Pro (MLP) and then use the Desktop Wallet Legacy to transfer all the ABEL coins to the new wallet.
- For the first time, you can create wallets, some of them are fully-private and some others are pseudo-private.
:::

---

### Abelian Desktop Wallet Legacy
- **Release Date**: `2024-12-19`
- **Package**: `abelian-desktop-wallet-legacy-v4.2.0`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.0.zip" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.0.zip" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.0.zip" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.0.zip" class="btn">Linux (ARM)</a>
</div>

::: warning
After upgrading the desktop wallet legacy version from 4.1.1 or earlier to version 4.2.0, you will need to re-import wallet accounts. Starting from version 4.2.0. Please refer to the [Desktop Wallet Legacy User Manual](/guide/wallet/desktop-wallet-legacy#import-abel-wallet-account) for detailed operating steps.
:::

::: info Release Notes
**What's New?**
- One-Click Migration: We strongly recommend migrating from legacy wallets to MLP wallets. An MLP wallet no longer needs users to remember the maximum recoverable number of wallets. This enhances the usability greatly. Furthermore, we will only supports the brand-new MLP wallets and fades out the legacy wallet type.
- You need to install the Desktop Wallet Pro v1.0.0 and create a new wallet (fully-private or pseudo-private type). Then, use the Abelian Desktop Wallet Legacy v4.2.0 and use the Migration function to transfer all the ABEL coins from each legacy wallet to the new MLP wallet.

**Why Should You Upgrade?**
The MLP wallet address is significantly easier to use without remembering any sequence number (aka maximum recoverable number of wallets). Furthermore, for the first time, you can choose to create multiple MLP addresses, each with different privacy level, fully-private or pseudo-private.
:::

---

### Abelian Full Node
- **Release Date**: `2024-07-14`
- **Package**: `abec-v1.0.0`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abec/abec-windows-amd64-v1.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-amd64-v1.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-arm64-v1.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-amd64-v1.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-arm64-v1.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info Release Notes
  1. Hard Fork for MLPAUT: Multi-Level Privacy(MLP) and Abelian User Token(AUT) would be enabled at height 300000.
  2. Transactions with version 1 no longer are packaged to block after height 340000.

**For more details, Please view the link below:**
- https://pqabelian.medium.com/abelian-network-hard-fork-introducing-multi-level-privacy-and-user-token-protocol-at-block-height-add96dacdcce
- https://community.pqabelian.io/guide/get-started.html
:::

---

### Abelian GPU Mining Pool Client
- **Release Date**: `2023-05-31`
- **Package**: `abelminer-v2.0.3`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abelminer-windows-amd64-v2.0.3.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-linux-amd64-v2.0.3.tar.gz" class="btn">Linux</a>
</div>

::: info Guide for Miners:
1. Mining Pool Website: https://maxpool.org/
2. Please download the compressed package and then visit the mining pool website to read the [Quickstart Guide](https://maxpool.org/home/guide).
3. Please join our [Discord Server](https://discord.com/invite/5rrDxP29hx) and go to the mining channel (under 'how-to-mine-abel' after 'verify-yourself') to get the latest guide for GPU miners.
:::

---

### Abelian CPU Mining Pool Client
- **Release Date**: `2023-05-28`
- **Package**: `abe-miningpool-client-v0.13.0`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abe-miningpool-client-windows-amd64-v0.13.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abe-miningpool-client-macos-amd64-v0.13.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/pool/abe-miningpool-client-macos-arm64-v0.13.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/pool/abe-miningpool-client-linux-amd64-v0.13.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/pool/abe-miningpool-client-linux-arm64-v0.13.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info Guide for Miners:
Mining Pool Website: https://maxpool.org/
:::

---

### Abelian CLI Wallet (MLP)
- **Release Date**: `2024-12-19`
- **Package**: `abewalletmlp-v2.0.0`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v2.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v2.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v2.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v2.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v2.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info Release Notes
**What's New?**
- Unified Wallet Mnemonic Phrase: The new mnemonic phrases can be imported and exported across Desktop Wallet Pro v1.0.0 and CLI Wallet (MLP) v2.0.0. And it will be further unified across all of Abelian products in the future.

**Why should you upgrade?**
- Full compatibility: Users can continue to use the Abelian CLI Wallet (MLP) v1.0.1, but all subsequent Abelian CLI Wallets will be based on the version of Abelian CLI Wallet (MLP) v2.0.0.
- Facilitate the import/export of mnemonic phrases across Desktop Wallet Pro v1.0.0 and Abelian CLI Wallet (MLP) v2.0.0.

**For more details, Please view the link below:**
- https://pqabelian.medium.com/abelian-multi-layer-privacy-wallet-cli-user-guide-0a6dfe3a937d
:::

---

### Abelian CLI Wallet Legacy
- **Release Date**: `2024-08-04`
- **Package**: `abewalletlegacy-v1.0.0`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-windows-amd64-v1.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-macos-amd64-v1.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-macos-arm64-v1.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-linux-amd64-v1.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-linux-arm64-v1.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info Release Notes
1. Rename abewallet to abewalletlegacy, which only supports the old address format.
2. We recommend all existing abewallet users to re-import all of their accounts after installed the new abewalletlegacy.
:::

## Abelian Applications Release History

More release history versions, Please visit [Abelian Applications Release History](/download/release-history) Page.

## Abelian Manuals

More documentation for both users and developers can be found at [Abelian Documentation](/guide/get-started) Page.

- [Abelian Apps Basics](/guide/index)
- [Abelian Desktop Wallet Pro Manual](/guide/wallet/desktop-wallet-pro)
- [Abelian Desktop Wallet Legacy Manual](/guide/wallet/desktop-wallet-legacy)
- [Abelian GPU Mining Manual](/guide/mining/gpu-pool)
- [Abelian Full Node Manual](/guide/cli-full-node)
- [Abelian CLI Wallet (MLP) Manual](/guide/wallet/cli-wallet-mlp)
- [Abelian CLI Wallet Legacy Manual](/guide/wallet/cli-wallet-legacy)
- [Abelian CLI Wallet Lite Manual](/guide/wallet/cli-wallet-lite)
