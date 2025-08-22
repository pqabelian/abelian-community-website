---
outline: deep
---

# Abelian 全節點常見問題解答

## 全節點（ABEC）相關問題

### <Badge type="warning" text="QUESTION" /> 如何將 mainnet 資料移至另一個位置？

::: info <Badge type="tip" text="ANSWER" />
要變更資料夾，您可以嘗試以下方法（僅適用於 Windows）

1. 關閉桌面錢包
2. 系統屬性 -> 高級 -> 環境變數 -> 新建/系統環境變數

變數名: ABELWALLET_HOME

變數值: （選擇一個資料夾路徑）

3. 將以下檔案從 C:\Users\\[用戶名稱]\AppData\Roaming\Abelian Wallet 路徑移動到新路徑
包含 Abec, Abewallet, ans cache. json, config. json, state.json

4. 重新啟動系統
:::

---

### <Badge type="warning" text="QUESTION" /> 日誌顯示錯誤訊息為："Database corruption detected"

```txt
ABEC: Version 0.12.6
ABEC: Loading block database from '/root/.abec/data/mainnet/blocks_ffldb'
ABDB: ***Database corruption detected***: metadata claims file 37, offset 176759509, but witness data is at file 0, offset 0
ABEC: metadata claims file 37, offset 176759509, but witness data is at file 0, offset 0
ABEC: Shutdown complete
```

::: info <Badge type="tip" text="ANSWER" />
這是 mainnet 數據庫損壞。您需要刪除 "/[用戶目錄]/.abec/data/mainnet/blocks_ffldb" 資料夾，然後重新同步。

請[查看此頁面](/tw/downloads/fullnode-db)，按照步驟下載最新的主網數據，然後重新同步。
:::

---

### <Badge type="warning" text="QUESTION" /> 运行全節點（ABEC）有什么硬體要求？

::: info <Badge type="tip" text="ANSWER" />
全節點（ABEC）目前發佈了幾乎所有常用硬體平臺的版本，硬體要求也沒有太多限制，但同步和讀取主網資料速度和儲存空間大小有最低要求，儲存空間不少於150GB，建議使用 240G 的固態硬碟。
:::

---