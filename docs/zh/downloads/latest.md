---
outline: deep
---

<style>
.button-container { 
  display: flex;
  flex-wrap: wrap; /* 允許按鈕換行 */
  gap: 8px; /* 確保有間距 */
  margin-left: 18px; /* 左側間距 */
}

.button-container .btn {
  display: inline-block;
  background-color: #007AFF;
  color: white !important; /* 使用 !important 確保顏色應用 */
  font-size: 16px !important; /* 同樣使用 !important */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-family: Arial, sans-serif !important;
  padding: 10px 20px;
  border: 1px solid #666; /* 灰色邊框 */
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none !important;
  transition: background-color 0.3s, transform 0.3s, font-weight 0.3s;
  /* 設定按鈕的最小寬度，防止按鈕太小 */
  min-width: 80px; /* 可根據需要調整最小寬度 */
}

.button-container .btn:hover {
  background-color: #0056b3; /* 更深的藍色 */
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

# Abelian 最新發布應用程式

## Abelian Pro (移動應用)
🔥 我們很高興宣布：新的移動錢包 Abelian Pro 現已可供下載。

<section class="download-wrapper">
  <div class="bg-img"></div>
  <div class="text-wrapper">
    <span>Abelian Pro 移動應用程式</span>
    <span>下載我們最新的移動錢包</span>
  </div>
  <div class="btn-wrapper">
    <a href="https://download.pqabelian.io/release/android/abelian-mobile-wallet-pro-v5.1.0.apk" class="btn-apk">APK</a>
    <a href="https://play.google.com/store/apps/details?id=info.abelian.walletpro" class="btn-base btn-android"></a>
    <a href="https://apps.apple.com/us/app/abelian-pro/id6475756639" class="btn-base btn-ios"></a>
  </div>
</section>

::: info <Badge type="warning" text="特點介紹" />
新的移動錢包是對之前移動錢包的全面重寫，旨在更加用戶友好和功能豐富。它可在 iOS 和 Android 平台上使用。

**v5.1.0 升級說明:**

1. 區分 MLP 帳戶類型；
2. 15分鐘內無需重新輸入密碼；
3. 修復了一些錯誤。

**新版本特點：**
1. 支持 Abelian 二級網路 - QDay，允許用戶瀏覽區塊鏈數據、管理 ERC20 代幣、使用去中心化交易所、跨鏈質押 ABEL 代幣，以及訪問各種 DeFi 應用。
2. 同時支援錢包賬戶 Legacy 地址和新的 MLP 地址，MLP（多層隱私）賬戶的優勢參考 [桌面錢包專業版 - 發布說明](/zh/downloads/latest#abelian-桌面錢包專業版-mlp)；
3. 推薦升級到新版後創建新的錢包賬戶（MLP 地址），並在創建新的 MLP 錢包賬戶後，將所有舊賬戶的餘額 ABEL 幣從轉賬至 MLP 錢包賬戶；
4. 創建新的錢包賬戶（MLP 地址）後，在「賬戶資料」中備份 24 個單詞的助記詞（恢復短語），可以使用桌面錢包專業版導入此助記詞。
:::

---

## 桌面錢包專業版 (MLP)
- **發布日期**: `2025-07-15`
- **軟體名稱**: `abelian-desktop-wallet-pro-v1.1.0`
- **軟體大小**: `≈ 120MB`
- **下載連結**:
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.1.0.exe" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.1.0.dmg" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.1.0.dmg" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.1.0.deb" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.1.0.deb" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="發布說明" />
**有什麼新功能？**
- 交易確認更快，一旦交易輸出可用，就會被標記為可支配。
- 優化可支配金額顯示，在發送頁面，輸入框會精確顯示可用金額，以便最大化後續轉賬，並新增"最大"按鈕，在轉賬給一個收款人時可以自動計算並扣除交易費用。
- 使用體驗更友好直觀，增加了更多提示資訊。

**為什麼要升級？**
- 強烈建議現有桌面錢包經典版（Legacy）用戶立即遷移到這個全新的桌面錢包專業版（MLP），這樣他們不再需要記住最大可恢復的錢包數量。要進行遷移，我們需要在桌面錢包專業版（MLP）中創建一個新錢包，然後使用桌面錢包經典版將所有 ABEL 幣轉移到新錢包中。
- 您可以首次創建一些完全私密的錢包以及其他匿名私密的錢包。

**v1.1.0 升級說明:**
- **UTXO 幣合併**：我們在每個帳戶的狀態主頁上添加了"顆粒度等級"功能。該值顯示您的帳戶中有多少個幣（即 UTXO）。可以將其視為帳戶的顆粒度，從 0 到 1，越接近 1 表示帳戶中小額幣越多；越接近 0 表示帳戶中幣的數量較少且每個幣的金額較大。<br>
  **為什麼這很重要？** 因為交易輸入的幣（即 UTXO）數量有上限。偽隱私交易最多可以有 100 個幣，而完全隱私交易最多只能有 5 個幣。因此，如果您的帳戶中有很多幣，即帳戶的顆粒度等級較高，您可能無法在一次交易中發送所有幣。因此，我們為想要合併幣的人引入了這個功能。此外，您可以通過鼠標懸停在粒度度旁邊的圓圈"i"圖標上查看您當前有多少個幣。
- **同步狀態指示器**：在右上角的帳戶下拉菜單中，我們現在可以直接查看哪個帳戶正在同步。綠色表示正在同步，紅色表示未同步。
- **區塊鏈同步時間估算**：同步不再是個謎——我們現在顯示剩餘時間估算（例如，"大約 30 分鐘"）。通過清晰的倒計時更好地規劃您的任務。
- **改進的交易歷史加載時間**：加載過去的交易現在幾乎是瞬時的。無需再等待頁面加載——幾秒鐘內即可查看您的活動或檢查最近的轉賬。
:::

---

## 桌面錢包經典版
- **發布日期**： `2025-07-03`
- **軟體名稱**： `abelian-desktop-wallet-legacy-v4.4.1`
- **軟體大小**： `≈ 120MB`
- **下載連結**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.4.1.exe" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.4.1.dmg" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.4.1.dmg" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.4.1.deb" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.4.1.deb" class="btn">Linux (ARM)</a>
</div>

::: warning <Badge type="tip" text="重要提示" />
1. 桌面錢包經典版由 4.1.1 或更早版本升級到 4.3.0 版本後，需要重新導入錢包帳戶。詳細操作步驟請查看 [桌面錢包經典版用戶手冊](/zh/guide/wallet/desktop-wallet-legacy#導入-abel-錢包帳戶)。

2. Abelian 桌面錢包經典版不支援遷移到移動錢包 Abelian Pro （MLP帳戶地址），但可以進行轉賬。
:::

::: info <Badge type="warning" text="發布說明" />
**有什麼新功能？**
- 一鍵遷移：我們強烈建議從舊版錢包遷移到 MLP 錢包。MLP 錢包不再需要用戶記住最大可恢復的錢包數量，這大大提高了可用性。此外，我們將僅支援全新的 MLP 錢包，並逐步淘汰舊版錢包類型。
- 您需要安裝桌面錢包專業版 (MLP) v1.0.3 並創建一個新錢包（完全私密或匿名類型）。然後，使用桌面錢包經典版 4.3.0 的遷移功能，將每個舊版錢包中的所有 ABEL 幣轉移到新的 MLP 錢包。

**為什麼要升級？**
- MLP 錢包地址在無需記住任何序列號（即最大可恢復的錢包數量）的情況下顯著更易於使用。此外，您可以首次選擇創建多個具有不同隱私級別的 MLP 地址，包括完全私密或偽私密。

**v4.4.1 升級說明:**
- 啟用自適應同步機制，適應不同網路環境；
- 改進狀態頁面的同步時間估算；
- 在交易頁面添加餘額變化顏色標識；
- 帳戶選擇中增加狀態指示燈；
- 限制帳戶數量至100個，優化多帳戶同步穩定性;
- 此 Legacy 軟體的正規名稱是 "Abelian Wallet Legacy"。例如，如果您是 macOS 用戶，您會在應用程式資料夾中找到這個軟體名稱為 "Abelian Wallet Legacy"，而不是舊版本的 "Abelian Wallet"；
- 應用程式優化和修復一些 bug。
:::

---

## Abelian 節點（abec）
- **發布日期**： `2025-12-226`
- **軟體名稱**： `abec-v3.0.0`
- **軟體大小**： `≈ 23MB`
- **下載連結**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abec/abec-windows-amd64-v3.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-amd64-v3.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abec/abec-macos-arm64-v3.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-amd64-v3.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abec/abec-linux-arm64-v3.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="發布說明" />
- 新增支援阿貝爾用戶代幣 (AUT) 的新型地址 (偽CT)。
- 將交易版本升級到 3，以支援偽CT地址。
- 將區塊版本升級到 4，以支援新的交易版本。
- 在區塊高度 464,000 引入了「aconcagua」分叉，啟用 AUT 並支援結合 DSA 的混合 PoW；將承諾高度設定在 480,000。
- 運行節點各模式儲存空間需求：Normal Node ≈ 170GB、Semi-Full Node ≈ 450GB、Full Node ≈ 1.4TB

**了解更多詳情，請查看以下連結：**
- https://www.pqabelian.io/blog/abelian-network-hard-fork-introducing-multi-level-privacy-and-user-token-protocol-at-block-height-300-000
- https://community.pqabelian.io/guide/
- https://community.pqabelian.io/guide/abelian-node
:::

---

## 顯示卡挖礦客戶端
- **發布日期**： `2023-05-31`
- **軟體名稱**： `abelminer-v2.0.4`
- **軟體大小**： `≈ 36MB`
- **下載連結**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abelminer-windows-amd64-v2.0.4.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-linux-amd64-v2.0.4.tar.gz" class="btn">Linux</a>
</div>

::: info <Badge type="warning" text="顯示卡礦工指南" />
1. Abelian 顯示卡挖礦客戶端可用於 Solo 挖礦和礦池挖礦；
2. 礦池網站：https://maxpool.org/
3. 請訪問礦池網站閱讀 [快速入門指南](https://maxpool.org/home/guide)，選擇適合您的硬體和系統平台按照步驟部署挖礦；
4. 請加入我們的 [Discord 社群](https://discord.com/invite/5rrDxP29hx)，並前往挖礦頻道（在 “verify-yourself” 之後前往 “how-to-mine-abel” 子頻道）獲取 GPU Solo 挖礦的最新指南。
:::

---

## CPU 挖礦客戶端
- **發布日期**： `2025-07-18`
- **軟體名稱**： `abelminer-cpu-v0.13.2`
- **軟體大小**： `≈ 5.5MB`
- **下載連結**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-windows-amd64-v0.13.2.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-macos-amd64-v0.13.2.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-macos-arm64-v0.13.2.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-linux-amd64-v0.13.2.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/pool/abelminer-cpu-linux-arm64-v0.13.2.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="CPU 礦工指南" />
1. 此 Abelian CPU 挖礦客戶端可以被所有擁有 PC/筆記型電腦的人用於 ABEL 挖礦；
2. 該客戶端針對礦池挖礦進行了優化，礦池網站：https://maxpool.org/
3. 礦池網站：https://maxpool.org/，請訪問 [帳戶設定](https://maxpool.org/account/settings) 閱讀 CPU 挖礦指南。
4. 如果你有 GPU 顯示卡，請查看上面標題為 [“Abelian GPU 挖礦客戶端”](#abelian-顯示卡挖礦客戶端) 的部分以獲取 GPU 礦池挖礦資訊。如果你想進行 GPU 單獨挖礦，請加入我們的 [Discord 社群](https://discord.com/invite/5rrDxP29hx)，並進入挖礦頻道（在“verify-yourself”後面的“how-to-mine-abel”下）獲取最新指南。
:::

---

## 多層隱私錢包 (CLI)
- **發布日期**： `2024-12-19`
- **軟體名稱**： `abewalletmlp-v2.0.0`
- **軟體大小**： `≈ 16MB`
- **下載連結**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v2.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v2.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v2.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v2.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v2.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="發布說明" />
**有什麼新功能？**
- 統一錢包助記詞：新的助記詞可以在桌面錢包專業版 v1.0.0 和 多層隱私錢包 (CLI) v2.0.0 之間導入和導出。未來，它將進一步在所有 Abelian 產品中實現統一。

**為什麼要升級？**
- 完全相容性：用戶可以繼續使用 Abelian 多層隱私錢包 (CLI) v1.0.1，但所有後續的 Abelian 經典錢包 (CLI) 都將基於 Abelian 多層隱私錢包 (CLI) v2.0.0 的版本。
- 方便在桌面錢包專業版 v1.0.0 和 Abelian 多層隱私錢包 (CLI) v2.0.0 之間導入/導出助記詞。

**更多詳情，請查看以下連結：**
- https://www.pqabelian.io/blog/abelian-multi-layer-privacy-wallet-cli-user-guide
:::

---

## 經典錢包 (CLI)
- **發布日期**： `2024-08-04`
- **軟體名稱**： `abewalletlegacy-v1.0.0`
- **軟體大小**： `≈ 23MB`
- **下載連結**：
<div class="button-container">
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-windows-amd64-v1.0.0.zip" class="btn">Windows</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-macos-amd64-v1.0.0.tar.gz" class="btn">macOS</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-macos-arm64-v1.0.0.tar.gz" class="btn">macOS (Apple Silicon)</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-linux-amd64-v1.0.0.tar.gz" class="btn">Linux</a>
  <a href="https://download.pqabelian.io/release/abewallet/abewalletlegacy-linux-arm64-v1.0.0.tar.gz" class="btn">Linux (ARM)</a>
</div>

::: info <Badge type="warning" text="發布說明" />
1. 將 `abewallet` 重新命名為 `abewalletlegacy`，僅支援舊地址格式。
2. 我們建議所有現有的 `abewallet` 用戶在安裝新的 `abewalletlegacy` 後重新導入他們的所有帳戶。
:::

## Abelian 應用程式歷史版本

查看更多歷史版本下載地址, 請訪問 [Abelian 應用程式歷史版本](/zh/downloads/release-history) 頁面。

## Abelian 用戶手冊

查看用戶和開發者的更多文檔，請訪問 [Abelian 社群文檔](/zh/guide/) 頁面。

- [Abelian 應用程式常識](/zh/guide/index)
- [Abelian 桌面錢包專業版用戶手冊](/zh/guide/wallet/desktop-wallet-pro)
- [Abelian 桌面錢包經典版用戶手冊](/zh/guide/wallet/desktop-wallet-legacy)
- [Abelian 挖矿用戶手冊](/zh/guide/mining/gpu-mining)
- [Abelian 節點（abec）用戶手冊](/zh/guide/abelian-node)
- [Abelian 多層隱私錢包 (CLI) 用戶手冊](/zh/guide/wallet/cli-wallet-mlp)
- [Abelian 經典錢包 (CLI) 用戶手冊](/zh/guide/wallet/cli-wallet-legacy)
