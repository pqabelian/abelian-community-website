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
      <a href="https://download.pqabelian.io/release/android/abelian-mobile-wallet-pro-v6.0.0.apk" class="btn-apk">APK</a>
      <a href="https://play.google.com/store/apps/details?id=info.abelian.walletpro" class="btn-base btn-android"></a>
      <a href="https://apps.apple.com/us/app/abelian-pro/id6475756639" class="btn-base btn-ios"></a>
    </div>
</section>

::: info <Badge type="warning" text="FEATURES" />
The new mobile wallet is a complete rewrite of the previous mobile wallet and is designed to be more user-friendly and feature-rich.
It is available on both iOS and Android platforms.

**v6.0.0 Upgrade Notes:**

1. Support AUT (Abelian User Token) features.
2. Support account upgrade to the new address format.
3. Update terminologies for Transparent and Shielded Wallets.
4. UI/UX enhancements and bug fixes.

**New version Features:**
1. Support Abelian Layer 2 network - QDay, allowing users to view blockchain data, manage ERC20 tokens, use decentralized exchanges, stake ABEL tokens across chains, and access various DeFi apps.
2. Supports both Legacy wallet addresses and new MLP addresses. For the advantages of MLP (Multi-Layer Privacy) accounts, refer to the [Desktop Wallet Pro - Release Notes](/downloads/latest#abelian-desktop-wallet-pro-mlp).
3. It is recommended to create a new wallet account (MLP address) after upgrading, and transfer all ABEL balances from old accounts to the new MLP wallet account.
4. After creating the new wallet account (MLP address), Backup the 24-word mnemonic (recovery phrase) in Account "Profile." This mnemonic can be imported using the Desktop Wallet Pro.
:::

---

## Desktop Wallet Pro (MLP)
- **Release Date**: `2026-01-15`
- **Package Nanme**: `abelian-desktop-wallet-pro-v2.0.1`
- **Package Size**: `≈ 120MB`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v2.0.1.exe" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v2.0.1.dmg" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v2.0.1.dmg" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v2.0.1.deb" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v2.0.1.deb" class="btn">Linux (ARM)</a>
</div>

::: info  <Badge type="warning" text="RELEASE NOTES" />
**What's New?**
- Faster transaction confirmations: Outputs are marked as spendable once available.
- Optimized display of spendable amounts: The input field on the send page accurately shows available amounts to maximize subsequent transfers, with a new "MAX" button that automatically calculates and deducts transaction fees for a single recipient.
- More user-friendly experience: Added additional informative tips.

**Why Should You Upgrade?**
- Existing users of Desktop Wallet Legacy are strongly recommended to migrate now to this brand new Desktop Wallet Pro (MLP) so that they no longer need to remember the maximum recoverable number of wallets. To migrate, we need to create a new wallet at the Desktop Wallet Pro (MLP) and then use the Desktop Wallet Legacy to transfer all the ABEL coins to the new wallet.
- For the first time, you can create wallets, some of them are fully-private and some others are pseudo-private.

**v2.0.1 Upgrade Notes:**
1. Support transactin version (v3).
2. Upgrade pseudo address to PseudoCT address.
:::

---

## Desktop Wallet Legacy
- **Release Date**: `2026-01-12`
- **Package Name**: `abelian-desktop-wallet-legacy-v5.0.0`
- **Package Size**: `≈ 120MB`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v5.0.0.exe" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v5.0.0.dmg" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v5.0.0.dmg" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v5.0.0.deb" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v5.0.0.deb" class="btn">Linux (ARM)</a>
</div>

::: warning <Badge type="tip" text="WARNING" />
- After upgrading the Desktop Wallet Legacy version from 4.1.1 or earlier to version 4.3.0, you will need to re-import wallet accounts. Starting from version 4.3.0. Please refer to the [Desktop Wallet Legacy User Manual](/guide/wallet/desktop-wallet-legacy#import-abel-wallet-account) for detailed operating steps.

- The Abelian Desktop Wallet Legacy cannot migrate to the mobile wallet 'Abelian Pro' (MLP address), but transfers are allowed.
:::

::: info  <Badge type="warning" text="RELEASE NOTES" />
**What's New?**
- One-Click Migration: We strongly recommend migrating from legacy wallets to MLP wallets. An MLP wallet no longer needs users to remember the maximum recoverable number of wallets. This enhances the usability greatly. Furthermore, we will only supports the brand-new MLP wallets and fades out the legacy wallet type.
- You need to install the Desktop Wallet Pro v1.0.3 and create a new wallet (fully-private or pseudo-private type). Then, use the Abelian Desktop Wallet Legacy v4.3.0 and use the Migration function to transfer all the ABEL coins from each legacy wallet to the new MLP wallet.

**Why Should You Upgrade?**
- The MLP wallet address is significantly easier to use without remembering any sequence number (aka maximum recoverable number of wallets). Furthermore, for the first time, you can choose to create multiple MLP addresses, each with different privacy level, fully-private or pseudo-private.

**v5.0.0 Upgrade Notes:**
- Support Aconcagua fork upgration: transfer ABEL to upgraded pseudo address. (i.e. PseudoCT address)
:::

---

## Abelian Node (abec)
- **Release Date**: `2026-01-01`
- **Package Name**: `abec-v3.0.1`
- **Package Size**: `≈ 23MB`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abec/abec-windows-amd64-v3.0.1.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-amd64-v3.0.1.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-arm64-v3.0.1.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-amd64-v3.0.1.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-arm64-v3.0.1.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="RELEASE NOTES" />
- Added support for a new address type (pseudo-CT) for Abelian User Token (AUT).
- Upgraded transaction version to 3 to support pseudo-CT addresses.
- Upgraded block version to 4 to support the new transaction version.
- Introduced the Aconcagua Fork at block height 464,000, enabled Cloaked AUT and hybrid PoW with DSA (namely ABEL-ETHash and ABEL-Nakamoto algorithms); and set commit height at block 480,000. The latter one implies that all abec nodes have to be upgraded to v3.0.0 or higher before block 480,000 in order to prevent interruption.
- To participate in ABEL-Nakamoto solo CPU mining when starting Abec, simply add the `--generate` parameter.
- Storage space requirements for running nodes in different modes: Normal Node ≈ 190GB, SemiFull Node ≈ 450GB, Full Node ≈ 1.4TB.

**For more details, Please view the link below:**
- https://www.pqabelian.io/blog/abelian-network-hard-fork-introducing-multi-level-privacy-and-user-token-protocol-at-block-height-300-000
- https://community.pqabelian.io/guide/
- https://community.pqabelian.io/guide/abelian-node
:::

---

## GPU Mining Client
- **Release Date**: `2023-05-31`
- **Package Name**: `abelminer-v2.0.4`
- **Package Size**: `≈ 36MB`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abelminer-windows-amd64-v2.0.4.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-linux-amd64-v2.0.4.tar.gz" class="btn">Linux</a>
</div>

::: info <Badge type="warning" text="GUIDE FOR GPU MINERS" />
1. The Abelian graphics card mining client can be used for solo mining and pool mining.
2. Mining Pool Website: https://maxpool.org/
3. Please visit the mining pool website for the [Quick Start Guide](https://maxpool.org/home/guide) and select the suitable hardware and system platform to set up mining.
4. Please join our [Discord community](https://discord.com/invite/5rrDxP29hx) and go to the mining channel (under 'how-to-mine-abel' after 'verify-yourself') to get the latest guide for GPU solo mining.
:::

---

## ABEL-ETHash CPU Mining Client
- **Release Date**: `2023-07-18`
- **Package Name**: `abelminer-cpu-v0.13.2`
- **Package Size**: `≈ 5.5MB`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-windows-amd64-v0.13.2.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-macos-amd64-v0.13.2.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-macos-arm64-v0.13.2.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-linux-amd64-v0.13.2.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-linux-arm64-v0.13.2.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="GUIDE FOR CPU MINERS" />
1. This ABEL-ETHash CPU mining client can be used by everyone who has a PC/laptop for ABEL mining.
2. This is optimized for pool mining. Mining Pool Website: <https://maxpool.org>
3. Mining Pool Website: https://maxpool.org. Please visit [Account/Settings](https://maxpool.org/account/settings) to read the CPU mining guide.
4. If you have GPU cards, please check out the section above titled ["Abelian GPU Mining Client"](#abelian-gpu-mining-client) for GPU pool mining. If you want to do GPU solo mining, please join our [Discord community](https://discord.com/invite/5rrDxP29hx) and go to the mining channel (under 'how-to-mine-abel' after 'verify-yourself') to get the latest guide.
:::

---

## ABEL-Nakamoto CPU Mining Client
- **Release Date**: `2026-01-11`
- **Package Name**: `abel-nakamoto-cpu-miner-v0.1.0`
- **Package Size**: `≈ 1.3MB`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abel-nakamoto/abel-nakamoto-cpu-miner-windows-amd64-v0.1.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abel-nakamoto/abel-nakamoto-cpu-miner-macos-amd64-v0.1.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abel-nakamoto/abel-nakamoto-cpu-miner-macos-arm64-v0.1.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abel-nakamoto/abel-nakamoto-cpu-miner-linux-amd64-v0.1.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abel-nakamoto/abel-nakamoto-cpu-miner-linux-arm64-v0.1.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="GUIDE FOR NAKAMOTO CPU MINERS" />
1. This ABEL-Nakamoto CPU mining client can be used by anyone with a PC/laptop for ABEL mining.
2. This is for ABEL-Nakamoto pool mining. The pool will be available very soon. Please stay tuned. We will announce the pool domain when it is ready.
:::

---

## CLI Wallet (MLP)
- **Release Date**: `2026-01-02`
- **Package Name**: `abewalletmlp-v3.0.0`
- **Package Size**: `≈ 24MB`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v3.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v3.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v3.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v3.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v3.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="RELEASE NOTES" />
**What's New?**
- Unified Wallet Mnemonic Phrase: The new mnemonic phrases can be imported and exported across Desktop Wallet Pro v1.0.0 and CLI Wallet (MLP) v2.0.0. And it will be further unified across all of Abelian products in the future.

**Why should you upgrade?**
- Full compatibility: Users can continue to use the Abelian CLI Wallet (MLP) v1.0.1, but all subsequent Abelian CLI Wallets will be based on the version of Abelian CLI Wallet (MLP) v3.0.0;
- Facilitate the import/export of mnemonic phrases across Desktop Wallet Pro v1.0.0 and Abelian CLI Wallet (MLP) v3.0.0;
- Support Abelian node Aconcagua fork (height 464,000).

**For more details, Please view the link below:**
- https://www.pqabelian.io/blog/abelian-multi-layer-privacy-wallet-cli-user-guide
:::

---

## CLI Wallet Legacy
- **Release Date**: `2026-01-02`
- **Package Name**: `abewalletlegacy-v3.0.0`
- **Package Size**: `≈ 24MB`
- **Download Links**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-windows-amd64-v3.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-macos-amd64-v3.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-macos-arm64-v3.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-linux-amd64-v3.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-linux-arm64-v3.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="RELEASE NOTES" />
1. Rename abewallet to abewalletlegacy, which only supports the old address format.
2. We recommend all existing abewallet users to re-import all of their accounts after installed the new abewalletlegacy.
:::

## Abelian Applications Release History

More release history versions, Please visit [Abelian Applications Release History](/downloads/release-history) Page.

## Abelian Manuals

More documentation for both users and developers can be found at [Abelian Documentation](/guide/) Page.

- [Abelian Apps Basics](/guide/index)
- [Abelian Desktop Wallet Pro Manual](/guide/wallet/desktop-wallet-pro)
- [Abelian Desktop Wallet Legacy Manual](/guide/wallet/desktop-wallet-legacy)
- [Abelian GPU Mining Manual](/guide/mining/gpu-pool)
- [ABEL-ETHash CPU Mining Manual](/guide/mining/cpu-pool)
- [ABEL-Nakamoto CPU Mining Manual](/guide/mining/nakamoto-cpu-miner)
- [Abelian Node (abec) Manual](/guide/abelian-node)
- [Abelian CLI Wallet (MLP) Manual](/guide/wallet/cli-wallet-mlp)
- [Abelian CLI Wallet Legacy Manual](/guide/wallet/cli-wallet-legacy)
