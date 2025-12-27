---
outline: deep
---

# Abelian 桌面錢包（經典版）用戶手冊

Abelian 基金會推出的桌面版 Abelian 錢包，為用戶提供了便捷的圖形介面，用戶可藉此建立 ABEL 錢包帳戶，匯出用於恢復錢包的 24 個助記詞短語，匯入已有的 ABEL 錢包帳戶，輕鬆地發送或接收 ABEL 代幣，並且能夠在一個 Abelian 桌面錢包中管理多個 ABEL 錢包。

**這次版本更新了什麼內容？**  
- **一鍵遷移：** 強烈建議用戶將舊版錢包遷移至 MLP 錢包。MLP 錢包摒棄了用戶需記住 “最大可恢復錢包數量” 的要求，極大地提高了易用性。此外，今後將僅支援全新的 MLP 錢包，舊版錢包地址類型將逐步被淘汰。

- 用戶需安裝 Desktop Wallet Pro v1.0.0 並建立一個新錢包（全隱私或偽隱私類型），然後利用 Abelian 桌面錢包經典版 V4.2.0 中的遷移功能，把舊版錢包中的 ABEL 代幣轉移至新的 MLP 錢包中。

**為什麼要升級？**  

- MLP 錢包地址的使用得到了顯著簡化，無需再記憶任何序列號，即 “最大可恢復錢包數量”。而且，用戶首次能夠建立多個 MLP 地址，並可為每個地址選擇不同的隱私級別，包括全隱私或偽隱私。

本用戶指南將詳細闡述 Abelian 桌面錢包經典版的安裝、配置及各項功能的使用教學。

## 下載與安裝

請訪問 [Abelian 官方網站下載頁面](/zh/downloads/latest#桌面錢包經典版) 下載 Abelian 桌面錢包經典版本的安裝包。在該頁面中，用戶需要根據自己所使用的作業系統以及電腦的 CPU 架構來選擇相應的 Abelian 桌面錢包經典版安裝包進行下載。

![訪問 Abelian 官網下載頁面](/desktop-wallet/legacy/download-page.png)

- **Windows 用戶**：請確認您使用的是 Intel/AMD x86-64 CPU（不支援 ARM 架構 CPU）。要查看處理器及系統類型，請透過 「系統設定 -> 系統 -> 處理器/系統類型」 查看。

- **Mac 用戶**：請確認您使用的是 Intel 晶片或 Apple Silicon（如 M1/M2 晶片）。根據處理器下載相應的安裝包。要查看處理器及系統類型，請點擊桌面左上角的蘋果標誌並選擇 「關於本機 -> 晶片」。

- **Linux 用戶**：請確認您使用的是 Intel/AMD x86-64 CPU (amd64) 或 AMD ARM CPU (arm64)。根據處理器下載相應的安裝包。以 Ubuntu 桌面版為例，點擊桌面右上角的系統功能圖示組，在下拉選單中選擇 「設定」 圖示，在彈出的系統設定介面中選擇 「關於」 標籤，查看 「處理器/系統類型」 欄。

---

**本教程以 Windows 4.2.0 版本為示範：**

- 將 Abelian 桌面錢包經典版安裝包保存到桌面。
![將安裝包檔案下載到電腦桌面](/desktop-wallet/legacy/download.png)

- 雙擊壓縮包檔案，啟動 Abelian 桌面錢包經典版應用程式的安裝程式。
![解壓縮安裝包](/desktop-wallet/legacy/installer.png)

- 雙擊安裝程式，將自動安裝桌面錢包到當前用戶，並建立桌面捷徑，隨後自動運行桌面錢包。
![安裝運行 Abelian 桌面錢包經典版](/desktop-wallet/legacy/runing.png)

- 輸入兩遍主密碼，點擊 “**START**” 按鈕啟動錢包。需注意，每次啟動桌面錢包時均需輸入主密碼進行本地驗證。
![建立桌面錢包主密碼](/desktop-wallet/legacy/input-password.png)

## 建立 ABEL 錢包帳戶

- 輸入主密碼，點擊 “**LOGIN**” 按鈕登入 Abelian 桌面錢包。
![輸入主密碼登入 Abelian 桌面錢包](/desktop-wallet/legacy/login.png)

- 建立一個 ABEL 錢包帳戶的步驟如下：
![建立 ABEL 錢包](/desktop-wallet/legacy/create-account.png)
   1. 點擊右上角的 “**Select Account（選擇帳戶）**”。
  2. 在下拉選單中選擇 “**Create Account（建立帳戶）**”。

- 為您的錢包命名（例如：「PQabel」①），然後點擊 “**CREATE（建立）**”② 按鈕。
![錢包帳戶命名](/desktop-wallet/legacy/account-name.png)

- 稍作等待，待顯示 “**Done（完成）**”① 按鈕後，點擊該按鈕完成 ABEL 錢包帳戶的建立。
![建立帳戶成功](/desktop-wallet/legacy/create-account-success.png)
（建立帳戶成功時，會顯示 “**Account created.（帳戶已建立。）**”② 訊息）

- 選擇剛建立的桌面錢包帳戶，操作如下：
![選擇錢包帳戶](/desktop-wallet/legacy/select-account.png)
  1. 點擊右上角的 “**Select Account（選擇帳戶）**”。
  2. 在下拉選單中選擇 “PQabel” 帳戶。
  
- 點擊 “**Start service（啟動服務）**”① 按鈕，同步 ABEL 錢包資料，左邊的 “**View service log（查看服務日誌）**”② 按鈕可供高級用戶在同步出現問題時進行除錯。
![啟動 Abewallet 錢包服務](/desktop-wallet/legacy/start-abewallet-sync-service.png)

## 接收 ABELs

- 確保錢包同步服務處於活動狀態，且同步狀態達到 100%。
![錢包完成同步](/desktop-wallet/legacy/abewallet-synced.png)

- 前往 “**RECEIVE（接收）**”① 標籤頁，若沒有錢包地址實例，則需先建立一個，具體步驟如下：
  1. 點擊三個點圖示的 “**More...（更多）**”② 按鈕，在下拉選單中選擇 “**Add address（新增地址）**”③。
   ![建立錢包地址](/desktop-wallet/legacy/create-wallet-address.png)
  2. 等待產生錢包地址實例，直到提示 “**Successfully generated a new address.（成功產生了一個新地址。）**”，然後點擊 “**Close（關閉）**” 按鈕。
   ![關閉建立錢包地址](/desktop-wallet/legacy/close-create-address.png)
  3. 點擊書頁圖示的 “**Select address（選擇地址）**”① 按鈕，選擇剛才建立的錢包地址②。
   ![選擇錢包地址](/desktop-wallet/legacy/select-address.png)
  4. “**Address（地址）**” 栏为**长地址**①，點擊長地址字串，會自動複製錢包長地址到剪貼簿；點擊 “**Short Address（短地址）**” 栏后面的 “**Click to register a unique short address.（點擊註冊一個獨特的短地址。）**”② 按鈕產生錢包短地址。
   ![產生錢包短地址](/desktop-wallet/legacy/generate-short-address.png)
  5. 產生短地址成功後，會提示 “**Registration succeeded. Click to continue.（註冊成功，點擊繼續。）**”，點擊 “**Short Address（短地址）**” 栏后面的字串，會自動複製錢包短地址到剪貼簿。
   ![複製錢包短地址](/desktop-wallet/legacy/copy-short-address.png)

產生地址後，用戶可使用長錢包地址或短地址進行 ABEL 的發送和接收交易。

## 發送 ABEL

- 前往 “**SEND（發送）**” 標籤頁，並點擊 “**PASTE FROM CLIPBOARD（從剪貼簿貼上）**”① 或 “**IMPORT FROM FILE（從檔案匯入）**”②， 輸入接收方錢包地址實例。
![輸入接收方錢包地址](/desktop-wallet/legacy/input-receiver-address.png)

- 若貼上或匯入的是**短地址**②，系統會自動識別並解析為**長地址**③，解析成功後會出現提示 “**Successfully get the full address.（成功取得完整地址。）**”①；
![短地址解析為長地址](/desktop-wallet/legacy/short-address-to-full-address.png)

- 輸入轉帳**金額**①和**主密碼**②後，點擊 “**SEND（發送）**”③ 按鈕提交。
![確認轉帳](/desktop-wallet/legacy/confirm-transaction.png)

- 提交後會彈出交易預覽介面，用戶可查看發送錢包帳戶①、交易金額②和接收錢包地址③。用戶可點擊 “**I WANT TO DOUBLE CHECK IT.（我想再確認一下。）**”④ 按鈕返回之前的 “**SEND（發送）**” 頁面進行修改；也可以點擊 “**I CONFIRM THIS TRANSACTION.（我確認此交易。）**”⑤ 按鈕完成此次轉帳交易。
![交易預覽](/desktop-wallet/legacy/preview-transaction.png)

## 查看交易記錄

- 前往 “**TXS（交易記錄）**”① 標籤頁，查看交易歷史記錄。當**鼠標懸停在 txid 列**②時，會在上方顯示完整的 txid，點擊後面的**連結**圖示會自動訪問 [Abelian 區塊鏈瀏覽器](https://explorer.pqabelian.io) 顯示此筆交易的詳情。
![查看交易記錄](/desktop-wallet/legacy/transaction-record.png)

## 匯出 ABEL 錢包帳戶

- 前往 “**SETTING（設定）**” ① 標籤頁，輸入**主密碼**②，點擊 “**REVEAL MNEMONICS（顯示助記詞）**”③。
  ![匯出帳戶頁](/desktop-wallet/legacy/export-account-page.png)

- 稍後會顯示 24 個單字的錢包助記詞（恢復短語），點擊 “**Copy to Clipboard（複製到剪貼簿）**”，並將其貼到本地的文字檔案中保存。
  ![複製錢包助記詞](/desktop-wallet/legacy/copy-mnemonics.png)

- 4.3.0 版本新增了一行文字提示 “Local maximum sequence number（本地最大序列號）”，該數值用於匯入 Legacy 錢包帳戶時填寫恢復地址數。
  ![本地最大序列號](/desktop-wallet/legacy/local-max-sequence.png)

## 匯入 ABEL 錢包帳戶

:::tip 提示
桌面錢包經典版由 4.1.1 或更早版本升級到 4.2.0 版本後，需要重新匯入錢包帳戶。自 4.2.0 版本起，不再需要同步 Abelian 節點 (`Abec`) 資料，同步速度大幅提升，且不再佔用大量磁碟空間。
:::

匯入其他地方建立的 ABEL 錢包，可按以下步驟進行：

1. 點擊右上角的 “**Select Account（選擇帳戶）**”，然後選擇 “**Import Account（匯入帳戶）**”。
  ![選擇匯入錢包帳戶](/desktop-wallet/legacy/select-import-account.png)

2. 輸入**錢包名稱**①、24 個單字的**助記詞**②，點擊 “**Number of Addresses to Recover（恢復地址數量）**”③ 栏會彈出一個對話框，點擊 “**OK**”④ 按鈕。
  ![輸入錢包名稱和助記詞](/desktop-wallet/legacy/input-account-name-mnemonics.png)

:::tip 提示
恢復地址數需用戶自行估算，以下提供三個參考方法：

  a. 如果運行的桌面錢包是 4.1.1 版本，可參考 [接收 ABELs](#接收-abels) 的步驟建立一個新地址，透過 “Select address（選擇地址）” 下拉選單中查看新建立的地址名稱後綴 `錢包名#m數字`，其中 #m 後的數字就是您要填寫的恢復地址數。

  b. 如果運行的桌面錢包低於 4.1.1 版本且 a 方法建立新地址失敗，可以透過 TXS 標籤頁查看交易筆數，將這個數字乘以 2。如果該錢包之前有匯入過，還需加上上次恢復錢包時填寫的地址數值。

  c. 如果是從 4.3.0 版本匯出的助記詞，包含有 “Local maximum sequence number（本地最大序列號）” 字樣，可直接將數值在此處填寫。

  d. 如果錢包版本太舊無法運行並查詢交易記錄，恢復地址數可以預估填寫一個數值，例如：100，但不要填寫不切實際且過大的數值，以免導致程式崩潰。
:::

3. 系統會自動產生對應的數字到恢復地址實例數量欄，點擊 “**IMPORT（匯入）**” 按鈕，稍後會提示 “**Account imported.（帳戶已匯入。）**”，點擊 “**DONE（完成）**” 按鈕完成錢包帳戶匯入。
  ![匯入錢包帳戶成功](/desktop-wallet/legacy/import-account-success.png)

## 遷移 ABEL 經典錢包至多層隱私錢包帳戶

Abelian 基金會開發了多層隱私錢包（Abelian Multi-layer Privacy Wallet），支援在桌面端建立多層隱私錢包帳戶。用戶可根據隱私需求選擇對應類型進行交易，但 Abelian 桌面錢包經典版不支援建立多層隱私錢包地址，因此需要經典錢包中所有餘額遷移至多層隱私錢包中。

按以下步驟將 Abelian 經典錢包遷移至 Abelian 多層隱私錢包：

1. 前往 “**MIGRATION（遷移）**”① 標籤頁，點擊 “**PASTE FROM CLIPBOARD（從剪貼簿貼上）**” 或 “**IMPORT FROM FILE（從檔案匯入）**”② 按鈕，遷移接收方多層隱私錢包地址實例。
![遷移錢包](/desktop-wallet/legacy/migrate-mlp-wallet.png)

2. 輸入**主密碼**①，點擊 “**BEGIN（開始）**” 按鈕② 進行遷移。在此過程中，用戶能夠同時查看到本次遷移的最大 “Spendable（可用金額）”，該金額表示在此次遷移操作中，用戶最多能夠遷移的資金數量。
![輸入主密碼](/desktop-wallet/legacy/input-password-migration.png)

3. 在系統彈出提示框中預覽此次遷移的 **錢包帳戶**① 和遷移 **目標錢包地址**②，您可以點擊 “**I WANT TO DOUBLE CHECK IT.（我想再確認一下。）**”④ 按鈕返回之前的 “**MIGRATION（遷移）**” 頁面進行修改；也可以點擊 “**I CONFIRM THIS MIGRATION.（我確認此次遷移。）**”⑤ 按鈕提交。
![遷移確認](/desktop-wallet/legacy/migration-confirm.png)

4. 提交後會顯示進度視窗，直到出現提示 “**N Transactions submitted.（一筆交易已提交。）**”時，錢包遷移操作完成。需注意的是，這裡的 N 值因不同帳號而異，其具體數量由帳戶中待遷移的 coins 數量決定 。
![遷移進度](/desktop-wallet/legacy/migration-progress.png)

5. 前往 “**TXS（交易記錄）**” 標籤頁，查看對應的交易記錄，當最後狀態為 “**Confirmed（已確認）**” 時表示此次遷移成功。

:::tip 提示
桌面錢包經典版升級到 4.2.0 版本後，強烈建議用戶遷移錢包帳戶至 [Abelian 桌面錢包專業版](/zh/guide/wallet/desktop-wallet-pro), 因為它支援在匯入錢包操作時不再需要填寫地址數選項，對大金額轉帳更友好，且大多數情況可避免轉帳時出現 “allowed max number 5” 的錯誤。
:::
