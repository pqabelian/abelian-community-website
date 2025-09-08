---
outline: deep
---

# Abelian 錢包常見問題解答

## 桌面錢包經典版問題

### <Badge type="warning" text="問題" /> 轉帳時報錯："allowed max number 5"
```txt
Failed calling RPC: serviceGroup=abewallet, accountName=brac, networkName=mainnet, method=sendtoaddressesabe, error={"code":-32603,"message":"pqringctTransferTxGen: the input number 11 exceeds the allowed max number 5"}.
```
::: info <Badge type="tip" text="答案" />
請嘗試減少轉帳的 ABEL 數量，直到不出現次錯誤訊息為止。
:::

---

### <Badge type="warning" text="問題" /> 運行桌面錢包報錯：“missing address manager namespace”

::: info <Badge type="tip" text="答案" />
關於命名空間問題。根據我們團隊的測試（Windows 10 與 Ubuntu 22.04），這個問題只出現在虛擬機上，而不是實體（裸機）系統上。

你的 CPU 需要支援 SSE4 和 AVX2 擴展。如果你正在使用虛擬機，請確保傳遞宿主指令集。

:::

---

### <Badge type="warning" text="問題" /> 為什麼桌面錢包的餘額不對（或顯示為零）？

::: info <Badge type="tip" text="答案" />
因為重新匯入錢包帳號時沒有填寫正確的地址數導致餘額不對（或顯示為零）。

請在匯入時填寫大於交易次數的數值，如果不清楚交易次數，請參考[用戶指引](/zh/guide/wallet/desktop-wallet-legacy#匯入-abel-錢包帳戶)的方法估算，或者填寫一個比較大的數值。（例如：100）

注意：餘額只有在切換錢包中的標籤時才會更新。
:::

---

### <Badge type="warning" text="問題" /> Windows 版本的桌面錢包無法運行（abelwallet 程序不存在，或者運行它們沒有日誌）如何解決？

::: info <Badge type="tip" text="答案" />
桌面錢包程式 abelwallet.exe 可能會被 Windows Defender 當作病毒誤殺，請在安裝完成之後，在 「Windows 安全中心 -> 病毒和威脅防護 -> 保护歷史記錄」 中 「允許」 提示的威脅。

建議在 「病毒與威脅防護-設定 -> 排除項」 中加入安裝目錄的路徑。
:::

---

### <Badge type="warning" text="問題" /> Windows 版本的桌面錢包能否修改資料目錄到其他位置？

::: info <Badge type="tip" text="答案" />
按照下面的步驟修改桌面錢包資料的存儲位置：

1. 關閉桌面錢包
2. 系統屬性 --> 高級 --> 環境變數 --> 新增使用者環境變數：
    - 變數名: ABELWALLET_HOME
    - 變數值: (輸入某個資料夾的完整路徑)
3. 將 `C:\Users\<USERNAME>\AppData\Roaming\Abelian Wallet` 路徑下的以下檔案移動到新路徑：
    - Abewallet
    - ans-cache.json
    - config.json
    - state.json
4. 重新啟動系統再執行桌面錢包
:::

---

### <Badge type="warning" text="問題" /> 升級桌面錢包 Legacy 後，出現 “service not ready” 的錯誤

我有一個舊版本的桌面錢包，但當我升級到 桌面錢包 Legacy v4.2.2 並匯入助記詞到後，它運行的日誌顯示錯誤訊息： "service not ready, please ensure the abewallet service is running and synced to the latest height."

::: info <Badge type="tip" text="答案" /> 
要將桌面錢包 Legacy 從 v4.1.1 或更早版本升級到 v4.2.2，您應首先需要刪除舊版桌面錢包的資料目錄：`%USERPROFILE%\AppData\Roaming\Abelian Wallet`。

然後再升級到 v4.2.2，在使用助記詞匯入錢包帳戶時，請務必查看 [用戶手冊文檔中的注意事項部分](/zh/guide/wallet/desktop-wallet-legacy.html#匯入-abel-錢包帳戶)。
:::

---

## 過期桌面錢包經典版問題

### <Badge type="warning" text="問題" /> Windows桌面錢包無法啟動，日誌是：
```txt
[INF] ABEC: Version 0.12.5
[INF] ABEC: Loading block database from 'C:\Users\username\AppData\Roaming\Abelian Wallet\Abec\mainnet\blocks_ffldb'
[ERR] ABEC: file missing [file=MANIFEST-000000]: file missing [file=MANIFEST-000000]
[INF] ABEC: Shutdown complete
```

::: info <Badge type="tip" text="答案" />
磁碟 C 磁碟槽上的空間是否已滿？

請[查看此頁面](/zh/faq/software-issues/fullnode.html#如何將-mainnet-資料移至另一個位置)，然後按照步驟將 mainnet 資料移動到另一個位置。
:::

---

### <Badge type="warning" text="問題" /> 日誌顯示錯誤訊息為："Database corruption detected"
```txt
[INF] ABEC: Loading block database from 'C:\Users\username\AppData\Roaming\Abelian Wallet\Abec\mainnet\blocks_ffldb'
[WRN] ABDB: Database corruption detected: metadata claims file 29, offset 18494396, but witness data is at file 0, offset 0
[ERR] ABEC: metadata claims file 29, offset 18494396, but witness data is at file 0, offset 0
```

::: info <Badge type="tip" text="答案" />
這是 mainnet 數據庫損壞。您需要刪除 "C:\Users\\[用戶名稱]\AppData\Roaming\Abelian Wallet\Abec\mainnet" 資料夾，然後重新同步。

請[查看此頁面](/zh/downloads/fullnode-db)，按照步驟下載最新的主網數據，然後重新同步。
:::

---

### <Badge type="warning" text="問題" /> 為什麼桌面錢包升級後 abec 和 abelwallet 還是舊版本？

::: info <Badge type="tip" text="答案" />
這是桌面錢包的一個歷史 bug，將會在 4.1.0 版本修復。

臨時解決方法：

- 請先刪除下面的目錄：
```
# Windows:
C:\Users\<USERNAME>\AppData\Roaming\Abelian Wallet\dist
# Linux:
~/.config/Abelian Wallet/dist
# macOS:
/Users/<USER_NAME>/Library/Application Support/Abelian Wallet/dist
```

- 再重新安裝新版本的桌面錢包。
:::

---

### <Badge type="warning" text="問題" /> Windows 版本的桌面錢包無法運行（abec 和 abelwallet 程序不存在，或者運行它們沒有日誌）如何解決？

::: info <Badge type="tip" text="答案" />
桌面錢包程序（abec.exe 和 abelwallet.exe）會被 Windows Defender 當作病毒誤殺，請在安裝完成之後，在 「Windows 安全中心 -> 病毒和威脅防護 -> 保护歷史記錄」 中 「允許」 提示的威脅。

建議在 「病毒與威脅防護-設定 -> 排除項」 中加入安裝目錄的路徑。
:::

---

## 桌面錢包專業版（MLP）問題

### <Badge type="warning" text="問題" /> 桌面錢包專業版生成的錢包地址支持 Maxpool 挖礦嗎？

::: info <Badge type="tip" text="答案" />
桌面錢包專業版（MLP）生成的錢包地址目前還不支持作為 maxpool 矿池的挖礦地址，後續會升級礦池支持新的地址格式，具體支持的時間請關注 [官方 Discord 频道](https://discord.gg/Rrb33mC3Kc) 的公告。
:::

---

### <Badge type="warning" text="問題" /> 桌面錢包專業版支持與移動錢包和交易所轉帳嗎？
::: info <Badge type="tip" text="答案" />
桌面錢包專業版（MLP）目前還不能與移動錢包（Abelian Pro）進行轉帳交易。

而交易所方面，目前正在溝通升級中，升級完成後 [官方 Discord 频道](https://discord.gg/Rrb33mC3Kc) 和交易所都會發布公告。
:::

---

## 移動/手機錢包 Abelian Pro 問題

### <Badge type="warning" text="問題" /> Abelian Pro 透過助記詞匯入帳戶後餘額為零或者餘額數字不對

::: info <Badge type="tip" text="答案" />
因為移動錢包 Pro 版本默認匯入的錢包地址數量為 5 個，但是桌面錢包可能已經產生了多筆交易，地址數量已經超過了5個。

推薦解決方法：將桌面錢包的餘額轉帳到移動錢包。
:::

---

### <Badge type="warning" text="問題" /> Abelian Pro 更新後底部導航欄消失，切換錢包帳號的列表是空的

::: info <Badge type="tip" text="答案" />
此問題發生在 v1.0.5 版本，如果此後的版本仍有此問題，可以參考下面的解決方法。

如果更新移動錢包 Pro 後，發現導航欄不見了，並且無法切換帳戶（因為 bug 導致即使有帳戶也無法顯示），可以進行以下操作：

1. 先備份目前帳戶私鑰；
2. 然後建立一個新帳戶，這時列表中只剩下新帳戶，但這個時候底部導航欄會顯示出來；
3. 再點擊底部導航欄 “設定 -> 網路” 切換到 “Testnet” 再切換回 “Mainnet” 就可以顯示錢包帳戶列表了。
:::

---

## 錢包其他問題

### <Badge type="warning" text="問題" /> 如何獲取錢包長地址？（用於 ABEL 挖礦）

::: info <Badge type="tip" text="答案" />
移動錢包點右上角三點會彈出菜單，選擇 **導出長地址**。

移動錢包 Pro 點右上角頭像，再點擊 **帳戶詳情**，此頁面有顯示長地址。

桌面錢包獲取長地址步驟：

1. 點擊 **啟動服務（Start service）** 開啟同步；
2. 點擊 **RECEIVE** 標籤頁；
3. 點擊界面中 **...** （三個點圖標），在下拉菜單中選擇 **Add address**（新創建的錢包需要執行此步驟，否則跳過此步驟）；
4. 點擊 **...** 之後的 **書頁** 圖標，在下拉菜單中選擇已有的錢包地址，下面一行 **Adress:** 後面以 **00000000** 開頭的這串字符就是長地址。
:::

---

### <Badge type="warning" text="問題" /> 經典和MLP錢包地址的格式有何區別？

::: info <Badge type="tip" text="答案" />
經典（Legacy）和多層隱私（MLP）錢包的長地址主要區別為佔用字符數不同，而短地址是由地址前綴+地址隱私類型+長地址 HASH 組成，通過前綴+隱私類型就能直觀的做出區別，詳細文檔請查看[此鏈接](/zh/guide/abel-address-format)。
:::

---

### <Badge type="warning" text="問題" /> 移動錢包 Abelian Pro 相對於桌面錢包 Legacy/Pro 沒有的功能有哪些？

::: info <Badge type="tip" text="答案" />
移動錢包 Abelian Pro 相對與桌面錢包 Legacy/Pro 使用起來更加便捷，隨時隨地可以使用，無需同步數據，但仍然缺少一些重要的功能，包括如下三點：

1. 完全私密的錢包地址
   - 桌面錢包經典版僅支持創建 Legacy 地址；
   - 桌面錢包專業版（MLP）支持創建 Abelian 多層隱私（Pseudo-Private 和 Fully-private）地址，其中 Fully-private 地址具有最高的隱私性，適合注重隱私交易的用戶；
   - 移動錢包 Abelian Pro 移動錢包支持 Pseudo-Private 地址，新版本也將逐漸推薦用戶從 Legacy 地址遷移至 MLP 地址。

2. 一鍵遷移功能
   - 桌面錢包 Legacy 提供一鍵遷移功能，可以將帳戶中所有 ABEL 從 Legacy 账户轉移到 MLP 账户，簡化了帳戶管理；
   - 移動錢包 Abelian Pro 沒有一鍵遷移功能。

3. 高級交易選項
   - 桌面錢包專業版提供更高級的交易選項和設定，適合需要複雜交易的用戶。
   - 移動錢包 Abelian Pro 的交易選項較為基礎，適合日常使用。

這些功能差異使得桌面錢包更適合需要高級功能和更高隱私性的用戶，而移動錢包則更適合日常便捷使用。
:::
