---
outline: deep
---

::: warning 提示
QDay 測試網重新設計的版本即將上線，此教程和相關連結已經失效！
敬請期待新版教程的到來！
:::

# QDay testnet 去中心化交易所（DEX）

## QDay Testnet DEX

QDay Testnet DEX 是一個高效、安全的去中心化交易平台，支援用戶在量子安全環境中進行資產交換。

開啟 QDAY Testnet DEX 網址：[testnet-swap.qday.info](https://testnet-swap.qday.info/) 或  [testnet-swap.abelqday.io](https://testnet-swap.abelqday.io)。

### 1. 連接錢包

在開始交易之前，您需要連接之前建立的 MetaMask 錢包帳戶。

1. 點擊頁面右上角的 **“Connect to a wallet”** 按鈕；
   ![連接錢包](/qday-testnet/swap/connect-wallet.png)<br>
2. 在列表中選擇 MetaMask 錢包；
   ![選擇 MetaMask](/qday-testnet/swap/select-metamask.png)<br>
3. 根據錢包的提示選擇需要連接的錢包，再選擇下一步並授權完成連接，示例中選擇 Acount1 和 Acount2 兩個測試帳戶。
   ![授權連接](/qday-testnet/swap/connect-authorize.png)

### 2. 選擇交易對

在連接錢包後，在 “Swap” 選項卡中選擇要交易的代幣：

1. 在 **“From”** 部分，選擇您要出售的代幣，示例中選擇預設代幣：QDAY）。
   ![選擇交易對](/qday-testnet/swap/select-pair.png)<br>
2. 在 **“To”** 部分，選擇您要購買的代幣。可以點擊 "Select a token" 來瀏覽可用的代幣列表。
   ![選擇 token](/qday-testnet/swap/select-token.png)
   這裡選擇之前新增到 MetaMask 的 ERC20 token（pqUSD）

### 4. 輸入交易金額

- 在您選擇的 **“From”** 代幣下方，輸入您希望交易的數量。系統將自動計算您將獲得的目標代幣數量。
  ![輸入交易金額](/qday-testnet/swap/input-qday-amount.png)

### 5. 查看交易資訊
在輸入交易金額後，您可以查看交易的詳細資訊，包括：
- 交易的最低價格
- 交易的匯率
- 手續費

### 6. 確認交易

當您確認交易資訊無誤後，您可以進行以下操作：

1. 點擊 “Swap” 按鈕；
2. 確認交易細節後點擊 “Confim Swap” 按鈕；
   ![確認交易](/qday-testnet/swap/confirm-swap.png)<br>
3. 在彈出的 MetaMask 錢包中點擊 “Confirm” 按鈕進行確認。
   ![確認交易](/qday-testnet/swap/metamask-confirm.png)

### 7. 查看交易狀態

- 完成確認後，您可以在錢包中查看交易狀態；
   ![查看交易狀態](/qday-testnet/swap/metamask-dex-transaction-status.png)<br>
- 或者返回 DEX 點擊右上角的錢包地址，在彈出的錢包詳情中查看交易記錄
   ![查看交易記錄](/qday-testnet/swap/dex-transactions-list.png)

### 8. 提取流動性（可選）

在 DEX 頁面中切換到 “Pool” 選項卡操作新增流動性。

1. 點擊 “Add Liquidity” 按鈕
   ![新增流動性](/qday-testnet/swap/add-liquidity.png)<br>
2. 新增代幣對，第一欄選擇 QDAY，第二欄選擇 pqUSD。並輸入您希望新增的金額，並確認流動性提供的細節，點擊 “Approve pqUSD” 繼續。
   ![輸入代幣金額](/qday-testnet/swap/input-liquidity-amount.png)<br>
3. 彈出 MetaMask 頁面中確認 “Custom spending cap” 的 pqUSD 金額（預設可能會超過餘額，適當改小數值），點擊 “Confirm” 按鈕進行確認。
   ![MetaMask 確認金額](/qday-testnet/swap/metamask-confirm-liquidity.png)<br>
4. 繼續點擊 “Appprove” 按鈕進行確認，稍後完成流動性新增，查看交易狀態和詳情參考第 7 步。
   ![MetaMask 同意新增流動性](/qday-testnet/swap/metamask-approve-liquidity.png)

**注意**：測試幣僅用於測試網環境，不具有實際價值。

## MetaMask 轉賬 ERC20 token (pqUSD)

- 步驟參考：[MetaMask 轉賬 QDAY](/zh/guide/qday-testnet/qday-faucet.html#metamask-轉賬-qday)
- 在第 3 步時，需要更改 “Asset:” 選項為 ERC20 token（pqUSD）。
  ![轉賬 pqUSD](/qday-testnet/swap/transaction-pqusd.png)

---

感謝您閱讀 QDay Testnet 用戶指引文件！我們希望本文能夠幫助您更好地理解和使用 QDay 測試網。隨著區塊鏈技術的不斷發展，QDay 致力於為用戶提供量子安全、高效且可持續的去中心化交易體驗。

請隨時關注我們的官方網站和社區，以獲取最新的更新和支援。如果您有任何問題或反饋，歡迎與我們聯繫！