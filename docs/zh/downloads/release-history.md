---
outline: deep
---

<style>
.button-container {
  display: flex;
  gap: 8px; /* 確保有間距 */
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
}

.button-container .btn:hover {
  background-color: #0056b3; /* 更深的藍色 */
}
</style>

# Abelian 應用程式歷史版本

::: warning 注意
我們提供以前版本的軟體套件主要用於存檔目的。請**務必**在生產環境中使用最新版本。
:::

## Abelian Pro (移動應用)
`abelian-mobile-wallet-pro / info.abelian.walletpro`

- **2026-01-12-v6.0.0**

  - 支援 AUT（Abelian User Token）功能；
  - 支援帳戶升級為新的地址格式；
  - 更新透明錢包與遮蔽錢包的術語；
  - 使用者介面與使用者體驗的增強及錯誤修正。

  [Android](https://download.abelian.info/release/android/abelian-mobile-wallet-pro-v6.0.0.apk) | 
  [iOS](https://download.abelian.info/release/ios/abelian-mobile-wallet-pro-v6.0.0.aab)

- **2025-11-22-v5.1.0**

  - 區分 MLP 帳戶類型；
  - 15分鐘內無需重新輸入密碼；
  - 修復了一些錯誤。

  [Android](https://download.abelian.info/release/android/abelian-mobile-wallet-pro-v5.1.0.apk) | 
  [iOS](https://download.abelian.info/release/ios/abelian-mobile-wallet-pro-v5.1.0.aab)

- **2025-10-28-v5.0.0**

  - 支持 QDay (二級網路)；
  - 修復了一些錯誤。

  [Android](https://download.abelian.info/release/android/abelian-mobile-wallet-pro-v5.0.0.apk) | 
  [iOS](https://download.abelian.info/release/ios/abelian-mobile-wallet-pro-v5.0.0.aab)

- **2025-09-06-v4.0.0**

  - 為 MLP 帳戶新增 UTXO 合併功能；
  - 整合通訊錄；
  - 修復了一些錯誤。

  [Android](https://download.abelian.info/release/android/abelian-mobile-wallet-pro-v4.0.0.apk) | 
  [iOS](https://download.abelian.info/release/ios/abelian-mobile-wallet-pro-v4.0.0.aab)

- **2025-07-25-v3.0.0**

  - 現在可以使用USDT和USDC購買ABEL！
  - 優化交易歷史緩存；
  - 修復了一些錯誤。

  [Android](https://download.abelian.info/release/android/abelian-mobile-wallet-pro-v3.0.0.apk) | 
  [iOS](https://download.abelian.info/release/ios/abelian-mobile-wallet-pro-v3.0.0.aab)

## 桌面錢包專業版 (MLP)
`abelian-desktop-wallet-pro`

- **2026-01-12-v2.0.0**
  - 支援交易版本（v3）；
  - 將偽隱私地址升級為 PseudoCT 地址。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v2.0.0.exe) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v2.0.0.dmg) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v2.0.0.dmg) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v2.0.0.deb) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v2.0.0.deb)

- **2025-08-15-v1.1.0**
  - **UTXO 幣合併**：我們在每個帳戶的狀態主頁上添加了「顆粒度等級」功能。該值顯示您的帳戶中有多少個幣（即 UTXO）。可以將其視為帳戶的顆粒度，從 0 到 1，越接近 1 表示帳戶中小額幣越多；越接近 0 表示帳戶中幣的數量較少且每個幣的金額較大。<br>
    **為什麼這很重要？** 因為交易輸入的幣（即 UTXO）數量有上限。偽隱私交易最多可以有 100 個幣，而完全隱私交易最多只能有 5 個幣。因此，如果您的帳戶中有很多幣，即帳戶的顆粒度等級較高，您可能無法在一次交易中發送所有幣。因此，我們為想要合併幣的人引入了這個功能。此外，您可以通過鼠標懸停在粒度度旁邊的圓圈「i」圖標上查看您當前有多少個幣。
  - **同步狀態指示器**：在右上角的帳戶下拉菜單中，我們現在可以直接查看哪個帳戶正在同步。綠色表示正在同步，紅色表示未同步。
  - **區塊鏈同步時間估算**：同步不再是個謎——我們現在顯示剩餘時間估算（例如，「大約 30 分鐘」）。通過清晰的倒計時更好地規劃您的任務。
  - **改進的交易歷史加載時間**：加載過去的交易現在幾乎是瞬時的。無需再等待頁面加載——幾秒鐘內即可查看您的活動或檢查最近的轉賬。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.1.0.exe) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.1.0.dmg) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.1.0.dmg) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.1.0.deb) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.1.0.deb)

- **2025-04-23-v1.0.3**
  - 交易確認更快，一旦交易輸出可用，就會被標記為可支配。
  - 優化可支配金額顯示，在發送頁面，輸入框會精確顯示可用金額，以便最大化後續轉賬，並新增「最大」按鈕，在轉賬給一個收款人時可以自動計算並扣除交易費用。
  - 使用體驗更友好直觀，增加了更多提示資訊。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.3.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.3.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.3.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.3.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.3.zip)

- **2025-03-02-v1.0.2**
  - 僅更新專用應用圖示。
  
  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.2.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.2.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.2.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.2.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.2.zip)

- **2025-01-04-v1.0.1**
  - 支援多層隱私：<br>
    **a.** 完全私密地址：您的交易是加密且不可追蹤的，錢包中的餘額保持隱藏，確保最大程度的安全性和匿名性。<br>
    **b.** 匿名地址：隱私級別與比特幣相當，即公開可見的幣值和可追蹤的交易，同時享受更低的手續費和更高的吞吐量。
  - 支援多個接收者：<br>
    **a.** 完全私密接收者：允許最多5個接收者，確保安全和私人交易。<br>
    **b.** 匿名接收者：允許最多100個接收者，其中最多50個為獨特接收者，為較大規模交易提供靈活性。
  - 速度和存儲顯著提升：舊版原始桌面錢包Legacy需要用戶花費數百小時甚至幾天時間來同步整個 Abelian 區塊鏈，並佔用超過 100GB 存儲空間。而這個全新的桌面錢包專業版（MLP）v1.0.0 僅需45分鐘或更少時間（取決於網路速度和頻寬）即可完成一次性同步，佔用不到100MB存儲空間。
  - 引入了 Memo 概念，使用戶可以在後量子、不可變的 Abelian 帳本上寫訊息。在 Abelian 上，我們首次可以將個人筆記永久寫入帳本。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.1.zip)

- **2024-12-19-v1.0.0**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.0.zip)

## 桌面錢包經典版（Legacy）
`abelian-desktop-wallet / abelian-desktop-wallet-legacy`

- **2026-01-12-v5.0.0**
  - 支援「aconcagua」分叉，將 ABEL 轉移至升級後的偽隱私地址（即 PseudoCT 地址）。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v5.0.0.exe) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v5.0.0.dmg) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v5.0.0.dmg) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v5.0.0.deb) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v5.0.0.deb)

- **2025-07-03-v4.4.1**
  - 啟用自適應同步機制，適應不同網路環境；
  - 改進狀態頁面的同步時間估算；
  - 在交易頁面添加餘額變化顏色標識；
  - 帳戶選擇中增加狀態指示燈；
  - 限制帳戶數量至100個，優化多帳戶同步穩定性;
  - 此 Legacy 軟體的正規名稱是「Abelian Wallet Legacy」。例如，如果您是 macOS 用戶，您會在應用程式資料夾中找到這個軟體名稱為「Abelian Wallet Legacy」，而不是舊版本的「Abelian Wallet」。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.4.1.exe) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.4.1.dmg) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.4.1.dmg) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.4.1.deb) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.4.1.deb)

- **2025-06-04-v4.3.0**

  - macOS 變更為 DMG 安裝程式；
  - 產品名稱從「Abelian Wallet」更名為「Abelian Wallet Legacy」；
  - 顯示同步完成的預計時間，修復同步進度顯示不一致的問題；
  - 更高效和優化的交易歷史列表；
  - 支援一鍵遷移到 MLP 匿名地址（也稱為半隱私地址）；
  - 對新手友好的錢包服務啟動界面，清晰顯示啟動、停止和日誌按鈕；
  - UI/UX 優化：
    - 移除不必要的捲軸顯示；
    - 在用戶查看助記詞時顯示最大地址數（用於導入 Legacy 帳戶時填寫恢復地址數），並支援輸入主密碼後按 Enter 鍵。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.3.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.3.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.3.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.3.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.3.0.zip)

- **2025-03-02-v4.2.2**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.2.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.2.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.2.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.2.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.2.zip)

- **2025-01-04-v4.2.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.1.zip)

- **2024-12-26-v4.2.0**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.0.zip)

- **2024-08-04-v4.1.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v4.1.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v4.1.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v4.1.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v4.1.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v4.1.1.zip)

- **2024-07-22-v4.0.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v4.0.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v4.0.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v4.0.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v4.0.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v4.0.1.zip)

- **2024-06-08-v4.0.0**
  - 支援硬分叉。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v4.0.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v4.0.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v4.0.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v4.0.0.zip)

- **2024-01-07-v0.3.2**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.3.2.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.3.2.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.3.2.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.3.2.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.3.2.zip)

- **2023-11-18-v0.3.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.3.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.3.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.3.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.3.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.3.1.zip)

- **2023-11-04-v0.3.0**
  - 同步速度提高了10倍至100倍。
  - 磁碟使用量減少了80%。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.3.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.3.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.3.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.3.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.3.0.zip)

- **2023-08-12-v0.2.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.2.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.2.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.2.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.2.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.2.1.zip)

- **2023-07-11-v0.2.0**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.2.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.2.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.2.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.2.0.tar.gz)

- **2023-06-02-v0.1.3**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.1.3.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.1.3.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.1.3.tar.gz) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.1.3.tar.gz)

## Abelian 節點（abec）
`[abec]`

- **2026-01-01-v3.0.1**
  - 新增支援阿貝爾用戶代幣 (AUT) 的新型地址 (偽CT)；
  - 將交易版本升級到 3，以支援偽CT地址；
  - 將區塊版本升級到 4，以支援新的交易版本；
  - 在區塊高度 464,000 引入了「aconcagua」分叉，啟用了隱蔽式 AUT 和帶有 DSA 的混合式 PoW（即 ABEL-ETHash 和 ABEL-Nakamoto 演算法）；並將提交高度設定在區塊 480,000。後者意味著所有 abec 節點必須在區塊 480,000 之前升級到 v3.0.0 或更高版本，以防止中斷；
  - 啟動 Abec 時，只需新增 `--generate` 參數即可參與 ABEL-Nakamoto 單獨 CPU 挖礦。

  [Windows](https://download.pqabelian.io/release/abec/abec-windows-amd64-3.0.1.zip) | 
  [macOS](https://download.pqabelian.io/release/abec/abec-macos-amd64-v3.0.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abec/abec-macos-arm64-v3.0.1.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abec/abec-linux-amd64-v3.0.1.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abec/abec-linux-arm64-v3.0.1.tar.gz)

- **2025-07-03-v2.0.2**
  - 新增 400,000 高度的檢查點（哈希值：73a434b741b357e37587b1b0a39c0ef65832d403bfd4d91eb11d9d805c568022）

  [Windows](https://download.pqabelian.io/release/abec/abec-windows-amd64-v2.0.2.zip) | 
  [macOS](https://download.pqabelian.io/release/abec/abec-macos-amd64-v2.0.2.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abec/abec-macos-arm64-v2.0.2.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abec/abec-linux-amd64-v2.0.2.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abec/abec-linux-arm64-v2.0.2.tar.gz)

- **2025-04-02-v2.0.1**
  - 啟用更新的代幣釋放計劃
  - 新增 300000、340000、360000 高度的檢查點

  [Windows](https://download.pqabelian.io/release/abec/abec-windows-amd64-v2.0.1.zip) | 
  [macOS](https://download.pqabelian.io/release/abec/abec-macos-amd64-v2.0.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abec/abec-macos-arm64-v2.0.1.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abec/abec-linux-amd64-v2.0.1.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abec/abec-linux-arm64-v2.0.1.tar.gz)

- **2024-07-14-v1.0.0**
  - 針對 MLPAUT 的硬分叉：多級隱私（MLP）與 Abelian 用戶令牌（AUT）將在高度 300000 啟用。
  - 高度 340000 之後，版本 1 的交易不再被打包進區塊中。

  [Windows](https://download.pqabelian.io/release/abec/abec-windows-amd64-v1.0.0.zip) | 
  [macOS](https://download.pqabelian.io/release/abec/abec-macos-amd64-v1.0.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abec/abec-macos-arm64-v1.0.0.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abec/abec-linux-amd64-v1.0.0.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abec/abec-linux-arm64-v1.0.0.tar.gz)

- **2024-05-28-v0.13.0**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.13.0.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.13.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.13.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.13.0.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.13.0.tar.gz)

- **2023-11-19-v0.12.3**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.12.3.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.12.3.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.12.3.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.12.3.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.12.3.tar.gz)

- **2023-09-15-v0.11.13**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.13.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.13.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.13.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.13.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.11.13.tar.gz)

- **2023-08-12-v0.11.12**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.12.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.12.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.12.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.12.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.11.12.tar.gz)

- **2023-06-02-v0.11.10**
  - 已啟用同步大於32MB的區塊。

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.10.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.10.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.10.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.10.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.11.10.tar.gz)

- **2023-05-17-v0.11.9**
  - 優化 RPC 響應格式。

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.9.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.9.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.9.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.9.tar.gz)

- **2022-11-18-v0.11.5-b**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.5.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.5.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.5.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.5.tar.gz)

- **2022-09-08-v0.11.1**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.1.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.1.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.1.tar.gz)

## GPU 挖礦客戶端
`abelminer`

- **2023-05-31-v2.0.3**

  [Windows](https://download.abelian.info/release/pool/abelminer-windows-amd64-v2.0.3.zip) | 
  [Linux](https://download.abelian.info/release/pool/abelminer-linux-amd64-v2.0.3.tar.gz)

- **2023-05-17-v2.0.2**

  [Windows](https://download.abelian.info/release/pool/abelminer-windows-amd64-v2.0.2.zip) | 
  [Linux](https://download.abelian.info/release/pool/abelminer-linux-amd64-v2.0.2.tar.gz)

- **2023-03-03-v2.0.1b**

  [Linux](https://download.abelian.info/release/pool/abelminer-linux-amd64-v2.0.1.b.tar.gz)

## ABEL-ETHash CPU 挖礦客戶端
`abe-miningpool-client`/`abelminer-cpu`

- **2025-07-18-v0.13.2**

  [Windows](https://download.abelian.info/release/pool/abelminer-cpu-windows-amd64-v0.13.2.zip) | 
  [macOS](https://download.abelian.info/release/pool/abelminer-cpu-macos-amd64-v0.13.2.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abelminer-cpu-macos-arm64-v0.13.2.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abelminer-cpu-linux-amd64-v0.13.2.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/pool/abelminer-cpu-linux-arm64-v0.13.2.tar.gz)

- **2024-05-28-v0.13.0**

  [Windows](https://download.abelian.info/release/pool/abe-miningpool-client-windows-amd64-v0.13.0.zip) | 
  [macOS](https://download.abelian.info/release/pool/abe-miningpool-client-macos-amd64-v0.13.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abe-miningpool-client-macos-arm64-v0.13.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abe-miningpool-client-linux-amd64-v0.13.0.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/pool/abe-miningpool-client-linux-arm64-v0.13.0.tar.gz)

- **2023-06-24-v0.11.7**
  - 增強功能：更好的認證用戶體驗和一些小的錯誤修復。

  [Windows](https://download.abelian.info/release/pool/abe-miningpool-client-windows-amd64-v0.11.7.zip) | 
  [macOS](https://download.abelian.info/release/pool/abe-miningpool-client-macos-amd64-v0.11.7.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abe-miningpool-client-macos-arm64-v0.11.7.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abe-miningpool-client-linux-amd64-v0.11.7.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/pool/abe-miningpool-client-linux-arm64-v0.11.7.tar.gz)

- **2022-11-25-v0.11.5**

  [Windows](https://download.abelian.info/release/pool/abe-miningpool-client-windows-amd64-v0.11.5.zip) | 
  [macOS](https://download.abelian.info/release/pool/abe-miningpool-client-macos-amd64-v0.11.5.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abe-miningpool-client-macos-arm64-v0.11.5.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abe-miningpool-client-linux-amd64-v0.11.5.tar.gz)


## ABEL-Nakamoto CPU 挖礦客戶端
`abel-nakamoto-cpu-miner`

- **2026-01-11-v0.1.0**
  - 此 ABEL-Nakamoto CPU 挖礦客戶端可以被所有擁有 PC/筆記型電腦的人用於 ABEL 挖礦；
  - 這是為 ABEL-Nakamoto 礦池挖礦而設。礦池很快就會上線。請密切留意。我們會在礦池準備好時公佈其網域。

  [Windows](https://download.pqabelian.io/release/abel-nakamoto/abel-nakamoto-cpu-miner-windows-amd64-v0.1.0.zip) | 
  [macOS](https://download.pqabelian.io/release/abel-nakamoto/abel-nakamoto-cpu-miner-macos-amd64-v0.1.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abel-nakamoto/abel-nakamoto-cpu-miner-macos-arm64-v0.1.0.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abel-nakamoto/abel-nakamoto-cpu-miner-linux-amd64-v0.1.0.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abel-nakamoto/abel-nakamoto-cpu-miner-linux-arm64-v0.1.0.tar.gz)

## 多層隱私錢包 (CLI)
`abewalletmlp`

- **2026-01-02-v3.0.0**
  - 支援產生名為偽 CT 的新地址類型；
  - 支援 Abelian 用戶代幣（又稱AUT）；
  - 使用交易版本 3 將 ABEL 轉移到偽 CT 地址。

  [Windows](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v3.0.0.zip) | 
  [macOS](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v3.0.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v3.0.0.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v3.0.0.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v3.0.0.tar.gz)

- **2024-12-19-v2.0.0**
  - 使用 AIP-0011 作為助記符方案：助記符 <-> 熵種子 -> 主種子 -> 帳戶主種子；
  - 提供助記符方案和推導的相容性選項 `--fromcliwallet` 和 `--cliwalletversion`。

  [Windows](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v2.0.0.zip) | 
  [macOS](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v2.0.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v2.0.0.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v2.0.0.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v2.0.0.tar.gz)

- **2024-08-13-v1.0.1**

  [Windows](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v1.0.1.zip) | 
  [macOS](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v1.0.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v1.0.1.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v1.0.1.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v1.0.1.tar.gz)

## 經典錢包 (CLI)
`abewallet / abewalletlegacy`

- **2026-01-02-v3.0.0**
  - 支援交易版本 3，並支援將ABEL轉移至名為 Pseudo-CT 的新位址類型；
  - 支援「Aconcagua」硬分叉。

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v3.0.0.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v3.0.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v3.0.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v3.0.0.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v3.0.0.tar.gz)

- **2024-08-04-v1.0.0**
  - 支援硬分叉。

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v1.0.0.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v1.0.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v1.0.0.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v1.0.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v1.0.0.zip)

- **2024-07-14-v0.13.9**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.13.9.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.13.9.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.13.9.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.13.9.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.13.9.zip)

- **2024-06-03-v0.13.1**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.13.1.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.13.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.13.1.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.13.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.13.1.zip)

- **2024-05-28-v0.13.0**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.13.0.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.13.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.13.0.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.13.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.13.0.zip)

- **2024-05-16-v0.12.8**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.12.8.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.12.8.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.12.8.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.12.8.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.12.8.zip)

- **2023-12-12-v0.12.5**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.12.5.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.12.5.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.12.5.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.12.5.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.12.5.zip)

- **2023-11-19-v0.12.3**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.12.3.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.12.3.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.12.3.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.12.3.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.12.3.zip)

- **2023-09-15-v0.11.13**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.13.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.13.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.13.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.13.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.13.zip)

- **2023-08-12-v0.11.12**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.12.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.12.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.12.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.12.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.12.zip)

- **2023-06-02-v0.11.10**
  - 修復了一些已知的錯誤。

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.10.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.10.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.10.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.10.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.10.zip)

- **2023-05-17-v0.11.9**
  - 優化 RPC 響應格式。

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.9.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.9.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.9.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.9.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.9.zip)

- **2022-11-18-v0.11.5-b**
  - 新增API：查詢當前生成的錢包地址總數；命令從 addressnumber 更改為 addressmaxsequencenumber。
  - 改進的 API：批量生成多個地址。
  - 新增了 abewalletctl 工具，可以直接訪問錢包，而不是使用 abectl。
  - 修復了已知錯誤。
  - 支援在交易狀態發生變化時通過 websocket 進行通知。

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.5-b.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.5-b.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.5-b.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.5-b.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.5-b.zip)

- **2022-09-08-v0.11.1**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.1.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.1.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.1.zip)

## 移动钱包 (经典版)

- **2024-01-16-v1.02** <Badge type="danger" text="停止维护" />

  [iOS](https://apps.apple.com/us/app/abelian/id6472198380) | 
  [Android](https://play.google.com/store/apps/details?id=info.abelian.wallet) | 
  [APK](https://download.abelian.info/release/android/abelian-mobile-wallet-v1.0.2.apk)

## Abelian 手冊

用戶和開發者都可以在 [Abelian 社群文檔](/zh/guide/) 網站找到更多手冊。

- [Abelian 應用程式常識](/zh/guide/index)
- [Abelian 桌面錢包專業版使用者手冊](/zh/guide/wallet/desktop-wallet-pro)
- [Abelian 桌面錢包經典版使用者手冊](/zh/guide/wallet/desktop-wallet-legacy)
- [Abelian GPU 挖矿使用者手冊](/zh/guide/mining/gpu-mining)
- [ABEL-ETHash CPU 挖矿使用者手冊](/zh/guide/mining/cpu-mining)
- [ABEL-Nakamoto CPU 挖礦客戶端使用者指南](/zh/guide/mining/nakamoto-cpu-miner)
- [Abelian 節點（abec）使用者手冊](/zh/guide/abelian-node)
- [Abelian 多層隱私錢包 (CLI) 使用者手冊](/zh/guide/wallet/cli-wallet-mlp)
- [Abelian 經典錢包 (CLI) 使用者手冊](/zh/guide/wallet/cli-wallet-legacy)