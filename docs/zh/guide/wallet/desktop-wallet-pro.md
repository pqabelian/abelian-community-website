---
outline: deep
---

# Abelian 桌面錢包專業版（MLP）手冊

## 簡介

本文檔旨在為專業人士和高級用戶提供全面的步驟，以成功安裝和配置 Abelian 桌面錢包專業版（MLP）- 為您提供前所未有的交易隱私和安全性控制。

使用全新的桌面錢包專業版（MLP）v1.0.0提升您的加密貨幣體驗，這是一個專為滿足您多層隱私需求而設計的桌面錢包。MLP 代表多層隱私。


**有什麼新特性？**

**•多層隱私支援：**

**全隱私地址：** 您的交易經過加密，無法追蹤，錢包餘額保持隱藏，確保最高級別的安全性和匿名性。

**偽隱私地址：** 隱私級別與比特幣相似，即公開可見的幣值和可追蹤的交易，同時享有更低的交易費用和更高的吞吐量。

**•支援多個收款人：**

**全隱私收款人：** 允許最多5個收款人，確保交易安全和隱私。

**偽隱私收款人：** 允許最多100個收款人，其中最多50個不同的收款人，為大型交易提供彈性。

**•速度和儲存空間的顯著提升：** 舊版的桌面錢包經典版（Legacy）在首次運行桌面應用時需要用戶花費數小時甚至數天來同步整個 Abelian 區塊鏈，並且佔用超過100GB的儲存空間。全新的桌面錢包專業版（MLP）僅需45分鐘或更少時間（取決於您的網路速度和頻寬）即可完成第一次資料同步，且儲存空間需求不到 100MB。

**•引入了備註概念：** 允許用戶在後量子且不可篡改的 Abelian 帳本上寫入備註。在 Abelian 帳本上，我們首次能夠永久性地在帳本上寫下個人筆記。


**為何應該升級？**

- 強烈建議桌面錢包經典版（Legacy）的現有用戶立即遷移到全新的桌面錢包專業版（MLP），這樣您就不再需要記住可恢復的最大錢包數量。遷移時，我們需要在桌面錢包專業版（MLP）中建立一個新錢包，然後使用桌面錢包經典版（Legacy）將所有 ABEL 幣轉移到新錢包中。

- 提供建立全隱私和偽隱私桌面錢包的功能。


請立即安裝使用最新的桌面錢包專業版（MLP），現在就去建立一個新錢包。



## 操作步驟

---

### 下載和安裝

前往 [Abelian 官方網站下載頁面](/zh/downloads/latest#桌面錢包專業版-mlp)，下載 Abelian 桌面錢包專業版（MLP）的安裝包。
![訪問 Abelian 官網下載頁面](/desktop-wallet/pro/download-page.png)
（根據您的作業系統和 CPU 架構下載 Abelian 桌面錢包專業版）

- Windows 用戶：請確保您使用的是 Intel/AMD x86-64 CPU（不支援 ARM 架構的 CPU）。要檢查處理器和系統類型，請前往「系統設定 -> 系統 -> 處理器/系統類型」。

- macOS 用戶：請檢查您使用的是 Intel 晶片還是 Apple Silicon（例如 M1/M2 晶片）。根據處理器下載相應的安裝包。要檢查處理器和系統類型，請點擊桌面左上角的 Apple 圖示，選擇「關於本機 -> 概覽」。

- Linux 用戶：請確保您使用的是 Intel/AMD x86-64 CPU（amd64）或 AMD ARM CPU（arm64）。根據處理器下載相應的安裝包。以 Ubuntu 桌面為例，點擊桌面右上角的系統功能圖示組，在下拉選單中點擊「設定」圖示，選擇「關於」選項卡查看「處理器/系統類型」欄位。

---

**本教學以 Windows 1.0.0 版本為例：**

1. 將 Abelian 桌面錢包專業版（MLP）的安裝包保存到桌面
![將安裝包檔案下載到電腦桌面](/desktop-wallet/pro/download.png)

1. 解壓縮檔案以打開 Abelian 桌面錢包專業版（MLP）的安裝程式
![解壓縮安裝包](/desktop-wallet/pro/installer.png)

1. 雙擊安裝程式，它將自動為當前用戶安裝桌面錢包，並建立桌面捷徑。安裝完成後，Abelian 桌面錢包專業版（MLP）將自動運行
![安裝運行 Abelian 桌面錢包專業版](/desktop-wallet/pro/runing.png)

1. 輸入兩次主密碼並點擊 “**開始（START）**” 按鈕啟動錢包（每次啟動桌面錢包時都需要主密碼進行本地驗證）
![建立桌面錢包主密碼](/desktop-wallet/pro/input-password.png)

---

### 建立 ABEL 錢包帳戶

1. 輸入主密碼並點擊 “**LOGIN**” 按鈕登入 Abelian 桌面錢包專業版（MLP）。
![輸入主密碼登入 Abelian 桌面錢包](/desktop-wallet/pro/login.png)

2. 建立 ABEL 錢包帳戶：
  ![建立 ABEL 錢包](/desktop-wallet/pro/create-account.png)
  - 點擊介面右上角的 “**Select Account（選擇帳戶）**” 按鈕。
  - 從下拉選單中選擇 “**Create Account（建立帳戶）**”。

3. 命名您的錢包-區分大小寫（例如：「PQabelPro」①），然後點擊 “**CREATE（建立）**” 按鈕
![錢包帳戶命名](/desktop-wallet/pro/account-name.png)

4. 等待 “**Done（完成）**”① 按鈕出現後，點擊它以完成 ABEL 錢包帳戶的建立
![建立帳戶成功](/desktop-wallet/pro/create-account-success.png)
（建立帳戶成功時，會顯示 “**Account created.（帳戶已建立。）**”的訊息）

5. 在介面右上角，選擇已建立的桌面錢包帳戶：
![選擇錢包帳戶](/desktop-wallet/pro/select-account.png)
  - 點擊右上角的 “**Select Account（選擇帳戶）**” 按鈕。
  - 從下拉選單中選擇剛建立的帳號，例如 “PQabelPro”。

6. 點擊 “**啟動服務（Start service）**”① 按鈕，開始錢包區塊資料同步服務 以便下載您的 ABEL 錢包資料；點擊日誌按鈕② 可以查看錢包同步日誌；進度欄③ 會即時顯示同步的高度和百分比進度。
![啟動錢包同步服務](/desktop-wallet/pro/start-abewallet-sync-service.png)

---

### 接收 ABEL

1. 確保已經啟動了錢包區塊同步服務，否則將無法建立錢包地址；

2. 導航到 “**RECEIVE（接收）**”① 選項卡。如果沒有錢包地址實例，選擇隱私類型建立一個：「**Pseudo-Private（偽隱私）**」② 或 “**Fully-Private（全隱私）**”③ 選項，然後點擊後面的 “**GENERATE A NEW ADDRESS（產生一個新地址）**”④ 按鈕；
  ![建立錢包地址](/desktop-wallet/pro/create-wallet-address.png)<br>

:::tip 提示
偽隱私地址的隱私級別較全隱私地址低，但轉帳速度更快。全隱私地址則更注重隱私保護，但處理速度相對較慢。
:::
  
3. 以建立 Pseudo-Private（偽隱私地址） 為例，等待錢包地址產生後，直到系統提示 “Generate a new Pseudo-Private address in this account（在此帳戶中產生一個新的偽私有地址）” 的狀態為 “**Successfully（成功）**”，點擊 “**Close（關閉）**” 按鈕
  ![關閉建立錢包地址](/desktop-wallet/pro/close-create-address.png)<br>
  
4. 在 “**5 Most Recently Generated Addresses（5個最近產生的地址）**” 部分會顯示已產生的地址列表，點擊 “**Full Address（長地址）**”① 後面的字串會自動複製錢包長地址到剪貼簿；點擊 “**Short Address（短地址）**”② 欄後面的 “**Click to reqister a unique short address.（點擊註冊一個獨特的短地址。）**” 按鈕來產生錢包短地址；
  ![產生錢包短地址](/desktop-wallet/pro/generate-short-address.png)<br>
 
5. 成功產生短地址後，點擊 “**Short Address（短地址）**” 欄後的字串，短地址將自動複製到剪貼簿。
  ![複製錢包短地址](/desktop-wallet/pro/copy-short-address.png)

:::tip 提示
在產生地址之後，您可以使用錢包長地址或短地址進行交易（發送和接收 ABEL）。目前，我們推薦使用短地址，因為它字元數更少，更方便保存和發送。
:::

---

### 發送 ABEL

Abelian 桌面錢包專業版（MLP）支援多層隱私交易，允許用戶根據需求選擇不同的隱私級別。這一多層隱私功能旨在提升交易的匿名性和安全性。在發送ABEL代幣時，您可以選擇適合的隱私層級。更多特性請參考 [這裡](/zh/guide/wallet/cli-wallet-mlp#服務能力)。

1. **在STATUS選項卡中，請確保同步服務進度已達到 100%**

2. 導航到 “**SEND（發送）**”① 選項卡，在 “**Recipients（接收者）**” 部分中點擊 “**ADD（添加）**”② 按鈕來批量添加接收地址和金額。同時，請留意接收地址的數量限制③ 
![輸入接收方錢包地址](/desktop-wallet/pro/add-receiver-address.png)

3. 然後在 “**Address (Full or Short)（長地址或短地址）**”① 欄中填寫接收錢包帳戶的地址，系統會自動分辨短地址和長地址，在 “**Amount (ABEL)（金額）**”② 欄中填寫需要發送的金額數量（ABEL），再點擊 “**保存**”③ 按鈕完成添加；
![短地址解析為長地址](/desktop-wallet/pro/add-receiver-address2.png)

4. 保存後，您可以透過點擊 “**修改**”① 按鈕來修改這筆交易詳情，或者點擊 “刪除”② 按鈕來移除這筆交易。
![修改交易資訊](/desktop-wallet/pro/edit-delete-transaction.png)

5. 在 “**Input（輸入）**” 您可以查看可用於轉帳的餘額。系統預設選中了 “**Spendable Pseudo-Private ABELs（可花費的偽隱私代幣）**”① 和 “**Spendable Fully-Private ABELs（可花費的全隱私代幣）**”②。您只需關注 "**Total Spendable ABELs（可花費的總代幣）**”③ 這一數值。系統會自動處理，將不足的餘額轉移到相應的隱私地址中，以確保交易的順利進行。
![查看餘額並選擇轉帳地址隱私類型](/desktop-wallet/pro/check-balance-select-address-privacy.png)

:::tip 提示
近期收到的 ABEL 代幣將有一個短暫的鎖定期，通常需要等待增長20個區塊高度。在這段時間內，被鎖定的金額不會在 Input 部分的可用轉帳餘額③中，直到這些代幣解鎖後才能使用。
:::

6. 在 “**UTXO Change（選擇轉帳地址類型）**”④ 中，選擇需要轉帳的隱私類型。接著，在 “**Master Password（主密碼）**”⑤ 欄輸入解鎖桌面錢包專業版的密碼，點擊 “**PREVIEW（預覽）**”⑥ 按鈕查看此次交易的詳情。

7. 在交易預覽介面，可以查看交易地址和交易金額①、轉帳使用的隱私地址類型②、交易費③ 。您可點擊 “I WANT TO DOUBLE CHECK IT.（我想再確認一下。）”④ 按鈕返回之前的 “**SEND（發送）**” 頁面進行修改調整；您也可以點擊 “I CONFIRM THIS TRANSACTION.（我確認此交易。）”⑤ 按鈕來完成此次轉帳交易。
![預覽轉帳](/desktop-wallet/pro/preview-transaction.png)

8. 發送成功後，會顯示此次交易的 TXID（轉帳ID），您可以使用這個TXID在區塊鏈瀏覽器上查詢交易的確認進度。完成後，點擊 “**CLOSE（關閉）**” 按鈕返回主介面。
![交易成功](/desktop-wallet/pro/transaction-success.png)

---

### 查看交易歷史

1. 前往 “**TXS（交易記錄）**”① 標籤頁，在 “**View transactions（查看交易）**” 列表中顯示交易歷史記錄，當滑鼠懸停在 **txid 列**② 時，會在上方顯示完整的 TXID (轉帳ID)。點擊的**連結**圖示後，系統會自動嘗試訪問 [Abelian 區塊鏈瀏覽器](https://explorer.pqabelian.io) 以便查詢此筆交易的詳情。

剛提交的交易狀態預設顯示為 “**Pending（等待確認）**”③，這是因為交易還在等待被區塊鏈網路確認。同時，由於交易金額已經過加密處理，轉帳金額會顯示為N/A（不適用）。
![查看交易記錄](/desktop-wallet/pro/transaction-record.png)

2. 在等待1至5個區塊高度確認後，交易狀態將更新為 “**Confirmed（已確認）**”②，此時 **轉帳金額**① 將正確顯示。如果您在交易列表中未看到交易或其狀態尚未更新為已確認，請前往介面右上角並點擊 “**REFRESH NOW（立即重新整理）**”③ 按鈕重新整理交易列表。
![交易已確認](/desktop-wallet/pro/transaction-confirmed.png)

### 匯出 ABEL 錢包帳戶

1. 前往 “**SETTING（設定）**” ①標籤頁，輸入**主密碼**②後，點擊 “**REVEAL MNEMONICS（顯示助記詞）**”③
  ![匯出帳戶頁](/desktop-wallet/pro/export-account-page.png)<br>
2. 稍後，系統會展示您的24個單字組成的錢包助記詞（錢包恢復短語），點擊 “**Copy to Clipboard（複製到剪貼簿）**” ，並貼到本地的文字檔案中保存。
  ![複製錢包助記詞](/desktop-wallet/pro/copy-mnemonics.png)

---

### 匯入 ABEL 錢包帳戶

按照以下步驟匯入在其他地方建立的 ABEL 錢包：

1. 前往 “**STATUS（主頁）**” ①標籤頁，點擊介面右上角的 “**Select Account（選擇帳戶）**”，然後選擇 “**Import Account（匯入帳戶）**”
![選擇匯入錢包帳戶](/desktop-wallet/pro/select-import-account.png)<br>

2. 輸入**錢包名稱**①，範例使用名稱 “**PQabelPro2**”，下一行中輸入需要匯入 24 個單字的錢包**助記詞**②，然後點擊 “**IMPORT（匯入）**”⑤ 按鈕；
![輸入錢包名稱和助記詞](/desktop-wallet/pro/input-account-name-mnemonics.png)<br>

  **[可選項]** 如需匯入 **Abelian 多層隱私錢包（CLI）(AbewalletMLP)** 的助記詞，請點擊 “**Advance Options（進階選項）**”③ 展開更多選項，以便選擇 “**AbewalletMLP's Version（AbewalletMLP 版本）**”④中對應的版本號。

:::tip 提示
桌面錢包專業版不支援**Abelian 經典錢包（CLI）(AbewalletLLegacy)** 和 **桌面錢包經典版（Legacy）** 助記詞的直接匯入；
在匯入 **Abelian 多層隱私錢包（CLI）(AbewalletMLP)** 的助記詞之前，請先替換間隔符號 “**逗號（，）**” 為 “**空格（ ）**”。
:::

3. 稍後提示 “**Account imported.（帳戶已匯入）**”，點擊 “**DONE（完成）**” 按鈕完成錢包帳戶匯入。
![匯入錢包帳戶成功](/desktop-wallet/legacy/import-account-success.png)

---

### 經典版錢包（Legacy）遷移

如果您仍在使用 Abelian 桌面錢包經典版（Legacy），可將經典版的帳戶遷移到 Abelian 桌面錢包專業版 - 開啟您的增強隱私與彈性之門！

詳細操作，請參閱 [Abelian 桌面錢包經典版 (Legacy) 用戶手冊中的遷移步驟](/zh/guide/wallet/desktop-wallet-legacy#遷移-abel-經典錢包至多層隱私錢包帳戶)。

:::warning 注意：
Abelian 桌面錢包專業版（MLP）目前已支援與最新版本的 Abelian 桌面錢包經典版（Legacy）互相轉帳！

最新版本的行動錢包 Abelian Pro 已支援匯入 Abelian 桌面錢包專業版（MLP）帳戶的助記詞，實現跨平台無縫使用！
:::