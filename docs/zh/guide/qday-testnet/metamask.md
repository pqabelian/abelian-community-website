---
outline: deep
---

::: warning 提示
QDay 測試網重新設計的版本即將上線，此教程和相關連結已經失效！
敬請期待新版教程的到來！
:::

# 1. MetaMask 錢包帳戶用戶指引

## 下載 MetaMask 擴充程式

1. 開啟瀏覽器，訪問 [MetaMask 官網](https://metamask.io/)。

2. 選擇適合你瀏覽器的擴充程式並安裝：

   - 對於 Chrome 瀏覽器，點擊 “[Install MetaMask for Chrome](https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn)”。
   ![Chrome 瀏覽器安裝 MetaMask 擴充程式](/qday-testnet/metamask/chrome-metamask-install.png)<br>
   - 對於 Firefox 瀏覽器，點擊 “[Install MetaMask for Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/ether-metamask/)”。
   ![Firefox 瀏覽器安裝 MetaMask 擴充程式](/qday-testnet/metamask/firefox-metamask-install.png)<br>
   - 對於 Microsoft Edge 瀏覽器，點擊 “[Install MetaMask for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm)”。
   ![Microsoft Edge 瀏覽器安裝 MetaMask 擴充程式](/qday-testnet/metamask/edge-metamask-install.png)<br>
3. 點擊新增擴充程式後會彈出 MetaMask 安裝頁面，點擊 “Add Extension” 或 “Install”。
   ![MetaMask 安裝頁面](/qday-testnet/metamask/add-to-edge.png)
4. 安裝完成後，會開啟一個 MetaMask 設定頁面，或者點擊瀏覽器右上角的擴充圖標，在下拉選單中選擇 MetaMask 圖標，開始設定。
   ![MetaMask 擴充程式圖標位置](/qday-testnet/metamask/metamask-display-icon.png)
   （可以通過點擊 “在工具欄中顯示” 將 MetaMask 圖標直接顯示到工具欄中）

## 建立 MetaMask 錢包帳戶

1. 在 MetaMask 擴充程式設定頁面，勾選 “我同意MetaMask的使用條款”，然後點擊 “建立新錢包”（測試網不建議匯入舊的錢包）；
   ![建立 MetaMask 錢包](/qday-testnet/metamask/create-metamask-wallet.png)
2. 在授權頁面點擊 “我同意” 繼續；
3. 在建立密碼頁面，設定一個強密碼，勾選 “我明白 MetaMask 無法為我恢復此密碼。” 後點擊 “建立新錢包”；
   ![設定 MetaMask 密碼](/qday-testnet/metamask/set-metamask-password.png)
4. 在安全錢包頁面，點擊 “保護我的錢包（推薦）” 複製12個單字的助記詞備份到本地（非常重要！），並妥善保管。完成後點擊 “下一步”；
   ![備份 MetaMask 助記詞](/qday-testnet/metamask/backup-metamask-mnemonic.png)
5. 在確認私鑰助記詞頁面，按照提示的順序填寫空缺的單字來驗證你的助記詞，點擊 “確認” 完成帳戶建立；
   ![驗證 MetaMask 助記詞](/qday-testnet/metamask/verify-metamask-mnemonic.png)
6. 按照上面的建立步驟建立完成後，點擊工具欄中的 MetaMask 圖標，在彈出視窗中，點擊頂部中間的 “Account1” 後的下拉圖標進入帳戶列表，點擊 “Add account or hardware wallet” 再建立一個新帳戶;
   ![新增 MetaMask 帳戶](/qday-testnet/metamask/add-metamask-account.png)
7. 在新增帳戶頁面，選擇 “Add a new account” 建立新帳戶；
   ![新增 MetaMask 帳戶](/qday-testnet/metamask/add-new-metamask-account.png)
8. 輸入帳戶名稱，這裡示例帳戶命名 “Account2”，點擊 “建立” 完成建立新帳戶，兩個帳戶可以在帳戶列表中切換。
   ![輸入 MetaMask 帳戶名稱](/qday-testnet/metamask/input-metamask-account.png)
9. 建立完成後，同樣需要備份一次 Account2 的私鑰，點擊右側三點的選單圖標，選擇 “帳戶詳情”；
   ![MetaMask 帳戶詳情](/qday-testnet/metamask/metamask-account-detail.png)
10. 在帳戶詳情頁面，點擊 “顯示私鑰” 按鈕，輸入密碼，點擊 “按住以顯示私鑰” ，之後會顯示私鑰，複製私鑰字符串到本地完成備份（非常重要！），並妥善保管。
   ![MetaMask 帳戶顯示私鑰](/qday-testnet/metamask/metamask-account-privatekey1.png)
   ![MetaMask 備份私鑰](/qday-testnet/metamask/metamask-account-privatekey2.png)

**注意**：助記詞和私鑰是你錢包帳戶的唯一備份，務必妥善保管，不要與他人分享。

## 新增 QDay Testnet 到 MetaMask

### 自動新增 QDay Testnet 至 MetaMask 網路列表
(區塊鏈瀏覽器自動新增 QDay Testnet 至 MetaMask 網路功能稍後推出)

### 手動新增 QDay Testnet 到 MetaMask 網路列表

1. 開啟 MetaMask，點擊左上角的網路列表選擇器（預設顯示 “Ethereum Mainnet”），選擇 “顯示測試網路” ，然後點擊 “新增網路” 按鈕；
   ![MetaMask 新增網路](/qday-testnet/metamask/add-metamask-network1.png)
2. 在彈出的新增網路頁面頁面中，點擊頁面底部的 “手動新增網路”；
   ![手動新增 QDay Testnet 網路](/qday-testnet/metamask/add-metamask-network2.png)
3. 在手動新增網路頁面，填寫以下資訊：
   - **網路名稱**: QDay Testnet
   - **新的 RPC URL**: `https://testnet-rpc-00.qday.info` 或 `https://testnet-rpc-01.qday.info`
   - **鏈 ID**: 1001
   - **貨幣符號**: QDAY
   - **區塊瀏覽器 URL（可選）**: `https://testnet-explorer.qday.info`
   ![手動新增 QDay Testnet 網路](/qday-testnet/metamask/add-metamask-network3.png)
   點擊 “保存” 按鈕完成新增。
4. 在 “網路新增成功！” 提示框中點擊 “切換至 QDay Testnet”，或者在 MetaMask 左上角的網路列表選擇器中選擇並切換到 “QDay Testnet”。
   ![MetaMask 切換 QDay Testnet 網路](/qday-testnet/metamask/switch-metamask-qday-testnet-network.png)

## 取得錢包地址

在瀏覽器工具欄中點擊 MetaMask 擴充程式圖標，彈出視窗中點擊頂部中間的 “Account1” 地址後面的複製圖標，並保存到本地（後續操作需要用到）。
![取得 MetaMask 錢包地址](/qday-testnet/metamask/get-metamask-address.png)

## 新增 QDay ERC20 token（pqUSD）到 MetaMask

1. 在瀏覽器工具欄中點擊 MetaMask 擴充程式圖標，在主介面的 “Tokens” 標籤頁中點擊 “Import tokens”；
   ![MetaMask 匯入 Token](/qday-testnet/metamask/import-tokens1.png)
2. 在 “Import tokens” 頁面的 “Token contract address” 欄中輸入 pqUSD Token 地址：`0x5571c9263450a1c50586ac91d3B841C71eCe5281`;
   ![MetaMask 匯入 pqUSD Token](/qday-testnet/metamask/import-tokens2.png)
3. 稍等一會會自動載入 pqUSD Token 的資訊（Token symbol 和 Token decimal），點擊 “Next” 按鈕完成匯入。
4. MetaMask 主介面的 Tokens 標籤頁可以看到已經顯示了 pqUSD Token 的餘額。
   ![MetaMask pqUSD Token](/qday-testnet/metamask/pqusd-tokens.png)
