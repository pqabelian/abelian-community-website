---
outline: deep
---

::: warning 提示
QDay 測試網重新設計的版本即將上線，此教程和相關連結已經失效！
敬請期待新版教程的到來！
:::

# QDay Testnet 質押服務指南

開啟 QDay Testnet 質押服務網址：[QDay Staking](https://testnet-defi.qday.info/QDayStaking) 或 [QDay Staking 2](https://testnet-defi.abelqday.io/QDayStaking)。

## 連接錢包

- 點擊 QDay Testnet 質押頁面右上角的 “Connect” 按鈕，選擇 MetaMask 開始連接；
  ![QDay 質押頁面連接 MetaMask](/qday-testnet/abel-faucet/connect-metamask-wallet1.png)<br>
- 在彈出的 MetaMask 視窗中選擇需要連接的 MetaMask 錢包帳戶，點擊 “Next” 按鈕，在授權頁中點擊 “Confirm” 按鈕；
  ![MetaMask 確認連接錢包](/qday-testnet/abel-faucet/connect-metamask-wallet2.png)<br>
- QDay Testnet 質押頁面右上角將顯示已連接的錢包地址，現在可以繼續進行質押操作了。
  ![QDay 質押頁面已連接 MetaMask](/qday-testnet/abel-faucet/connect-metamask-wallet3.png)

## 質押頁面各欄說明

### 1. 匯總

在匯總部分，您將看到您的質押資訊和全網質押情況。以下是您需要關注的內容：
![QDay 質押頁面匯總](/qday-testnet/dapp/qday-staking-summary.png)

- **全網質押 veQDay**：顯示全網用戶當前質押的 veQDay 總量。
- **我的鎖倉 wAbel**：顯示您當前鎖倉的 wAbel 數量。
- **我的質押 veQDay**：顯示您目前質押的 veQDay 數量。
- **待提現獎金**：表示您當前待提現的獎勵。
- **提現獎勵**：可用於提取的獎勵數量。
- **我的 wAbel**：顯示您擁有的 wAbel 數量（在 ABEL 質押兌換 wAbel 的數量會在此項顯示）。
- **我的 veQDay**：顯示您當前擁有的 veQDay 數量。
- **我的收益**：顯示您在質押過程中獲得的收益。
- **全網總收益**：顯示全網用戶的總收益。
- **我的餘額**：顯示您帳戶中剩餘的 QDAY 數量。

### 2. VeQDay

在 VeQDay 部分，您可以進行以下操作：
![QDay 質押頁面 VeQDay](/qday-testnet/dapp/qday-staking-veqday.png)

- **授權**：在此您需要進行授權操作，以允許系統使用您的 QDAY 進行質押。
- **QDay質押**：選擇您希望質押的 QDAY 數量，輸入後確認質押操作。
- **解除質押**：如果您需要解除已質押的 QDAY，請在此輸入您希望解除的數量，並確認操作。
- **兌換 VeQDay**：此選項允許您將 QDAY 兌換為 veQDay，請按照系統提示進行操作。

### 3. WAbel

在 WAbel 部分，您可以查看和管理您的 wAbel：

- **金額**：您操作的 wAbel 數量。
- **到期日期**：顯示 wAbel 的到期日期。若無數據，表示您當前沒有有效的 wAbel 記錄。

## QDay 質押操作示例

### 1. QDay 質押

- 輸入質押 QDay 數量，點擊 “QDay質押” 按鈕；
  ![veQDay 質押](/qday-testnet/dapp/qday-staking-input-qday.png)<br>
- Metamask 彈窗提示質押操作，點擊 “Comfirm” 進行質押。
  ![Metamask 確認質押](/qday-testnet/dapp/metamask-confirm-qday-staking.png)<br>
- 成功質押後，您將在 “匯總” 部分的 “我的質押veQDay” 下看到質押的 veQDay 金額。

### 2. 兌換 veQDay

- 輸入兌換 veQDAY 數量，點擊 “兌換 VeQDay” 按鈕；
  ![veQDay 兌換](/qday-testnet/dapp/qday-staking-exchange-veqday.png)<br>
- Metamask 彈窗提示兌換操作，點擊 “Comfirm” 進行兌換。
  ![Metamask 確認兌換](/qday-testnet/dapp/metamask-confirm-veqday-exchange.png)<br>
- 成功兌換後，您將在 “匯總” 部分的 “我的 VeQDay” 下看到兌換的 veQDAY 金額。

### 3. 授權質押

- 輸入授權質押 veQDay 數量，點擊 “授權” 按鈕；
  ![veQDay 授權質押](/qday-testnet/dapp/qday-staking-input-authorized-veqday.png)<br>
- MetaMask 彈窗提示授權操作，修改 “Custom spending cap” 欄的數值（點擊 MAX 即為授權質押的數值），點擊 “Next” 進入下一步；
  ![Metamask 確認授權](/qday-testnet/dapp/metamask-confirm-authorized-veqday1.png)<br>
- 繼續點擊 “Approve” 按鈕進行授權，完成授權質押操作；
  ![Metamask 同意授權](/qday-testnet/dapp/metamask-confirm-authorized-veqday2.png)<br>
- 成功授權後，您將在 “匯總” 部分的 “我的veQDay” 下看到授權的 veQDay 金額。


### 3. veQDay 質押

- 在授權質押操作後，相同位置的輸入框中輸入質押 veQDay 數量，點擊 “veQDay質押” 按鈕；
  ![veQDay 質押](/qday-testnet/dapp/qday-staking-input-weqday.png)<br>
- MetaMask 彈窗提示質押操作，點擊 “Comfirm” 進行質押;
  ![Metamask 確認質押](/qday-testnet/dapp/metamask-confirm-weqday-staking.png)<br>
- 成功質押後，您將在 “匯總” 部分的 “我的質押veQDay” 下看到質押的 veQDay 金額。

### 4. 解除質押

- 輸入解除質押 veQDay 數量，點擊 “解除質押” 按鈕；
  ![veQDay 解除質押](/qday-testnet/dapp/qday-staking-input-unStaking.png)<br>
- MetaMask 彈窗提示解除質押操作，點擊 “Comfirm” 進行解除質押。
  ![Metamask 確認解除質押](/qday-testnet/dapp/metamask-confirm-unStaking.png)<br>
- 成功解除質押後，您將在 “匯總” 部分的 “我的質押veQDay” 下將減去解除質押的 veQDay 金額。

### 5. 提取獎勵

(功能正在開發中，待補充)