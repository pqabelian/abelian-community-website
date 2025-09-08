---
outline: deep
---

::: warning 提示
QDay 測試網重新設計的版本即將上線，此教程和相關連結已經失效！
敬請期待新版教程的到來！
:::

# ABEL Testnet 質押服務

ABEL Testnet 質押服務允許用戶通過質押 wAbel 代幣，參與網路安全並獲得獎勵。

## ABEL 質押 wAbel 測試幣

開啟 QDAY Testnet 的 ABEL 測試幣質押 QDay Testnet weAbel 測試幣服務網址：[ABEL Staking](https://testnet-defi.qday.info/ABELStaking) 或 [ABEL Staking 2](https://testnet-defi.abelqday.io/ABELStaking)。

### ABEL 質押頁面各欄說明

1. **從網路 (From Network)**
- 選擇您要從中提取 ABEL 代幣的區塊鏈網路，預設為 “Abelian Testnetwork”（預設不可選）。
2. **到網路 (To Network)**
- 選擇您希望質押的目標 QDay 代幣的區塊鏈網路，預設為 “QDay Testnetwork”（預設不可選）。
3. **從地址 (From Address)**
- 輸入您在選擇的網路上存放 ABEL 代幣的錢包地址。
4. **到地址 (To Address)**
- 輸入您希望質押的地址，通常是您當前已連接上的 MetaMask 錢包地址。
5. **存入的 ABEL 數量 (Amount of ABEL to deposit)**
- 輸入您希望質押的 ABEL 代幣數量。
6. **鎖定期限 (Lock-up period)**
- 選擇您的質押資金鎖定的時間長度，鎖定期越長，潛在的收益可能越高。
7. **獎勵比例 (Reward ratio)**
- 選擇您希望獲得的質押獎勵比例，具體比例會根據平台的政策而變化（預設自動生成，不可選）。
8. **生成 QR 碼 (Generate QR Code for Abelian Pro)**
- 點擊此選項可生成一個 QR 碼，用於方便您使用 Abelian Mobile Wallet Pro 掃碼功能來轉賬 ABEL 代幣。

### ABEL 質押兌換 wAbel

#### 1. 連接錢包

如果您已經在前面 QDay 質押頁面連接了 MetaMask 錢包，請跳過此步驟。

- 點擊頁面右上角的 “Connect” 按鈕，選擇 MetaMask 開始連接；
    ![連接錢包](/qday-testnet/abel-faucet/connect-metamask-wallet1.png)<br>
- 在彈出視窗中選擇需要連接的錢包，並授權。
    ![授權連接](/qday-testnet/abel-faucet/connect-metamask-wallet2.png)<br>
- 連接後頁面右上角會顯示當前已連接的錢包地址。
    ![已連接錢包](/qday-testnet/abel-faucet/connect-metamask-wallet3.png)

#### 2. 填寫轉賬錢包地址
- 在 “From Address” 欄中輸入 ABEL 錢包地址，在 “To Address” 欄會自動選擇當前已經連接的 MetaMask 錢包地址;
  ![填寫轉賬錢包地址](/qday-testnet/abel-faucet/abel-staking-input-address.png)<br>
- 如果需要切換錢包地址，點擊瀏覽器工具欄中的 MetaMask 圖標，在彈出視窗中點擊頂部中間位置帳號名稱後的下拉圖標進入帳戶列表，點擊列表中的任一錢包帳戶切換到該錢包地址。
  ![切換錢包地址](/qday-testnet/abel-faucet/metamask-switch-wallet-address.png)

#### 3. 選擇質押數量和鎖定期
在 “Amount of Abel to deposit” 欄中輸入你希望質押的 $ABEL 代幣數量，在 “Lock-up period” 欄中，選擇您希望質押的鎖定期（預設分為 6、9、12 個月三個選項），在 “Reward ratio” 欄中會自動生成質押獎勵的比例（預設跟隨上一欄的質押鎖定期分為 10%、20%、30% 三種選項）
![輸入質押數量並選擇鎖定期](/qday-testnet/abel-faucet/abel-staking-input-amount-lock-time.png)
（示例中只轉賬了 98 個 ABEL）

#### 4. 生成 QR 碼
點擊 “Generate QR Code for Abelian Pro” 按鈕，稍後會自動生成的 QR 碼。
![生成 QR 碼](/qday-testnet/abel-faucet/abel-staking-generate-qrcode.png)

#### 5. 行動錢包轉賬
開啟 Abelian Mobile Wallet Pro 應用，點擊 “Send” 按鈕，再點擊右上角的 “掃碼” 圖標，掃描上一步的 QR 碼，再確認轉賬操作。
![行動錢包轉賬](/qday-testnet/abel-faucet/mobile-wallet-send.png)

#### 6. 等待交易完成
交易提交後，點擊 “Back to home” 回到主介面，在 “Transactions” 部分查看最近的交易，點擊這筆交易進入 “Transaction Details” 頁面查看交易狀態，也可以點擊 “View on AbelScan” 訪問 Abelian 區塊瀏覽器查看交易狀態。
![查看交易狀態](/qday-testnet/abel-faucet/abel-staking-transaction-detail.png)

#### 7. 質押查詢

（測試網第一輪質押測試已經結束，如需實際體驗本文檔描述的功能，請等待我們再次開放測試。）