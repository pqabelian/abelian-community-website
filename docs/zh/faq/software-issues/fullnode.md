---
outline: deep
---

# Abelian 節點常見問題解答

## Abelian 節點（Abec）相關問題

### <Badge type="warning" text="QUESTION" /> Abelian 節點（Abec）有哪些类型？

::: info <Badge type="tip" text="ANSWER" />
Abelian 節點（Abec）有以下三種類型：
- **Abelian 全節點**：自創世區塊以來儲存並驗證所有區塊鏈資料，所需儲存空間最大。
- **Abelian 半全節點**：優化儲存結構，從最近的檢查點後保留完整資料，具備高度驗證能力。
- **Abelian 標準節點**：進一步減少儲存空間，僅從保留區塊開始儲存完整資料，適合資源有限的環境。
:::

### <Badge type="warning" text="QUESTION" /> 如何將桌面錢包 (Legacy) 的標準節點資料移至另一個位置？

::: info <Badge type="tip" text="ANSWER" />
要變更資料夾，您可以嘗試以下方法（僅適用於 Windows 系統）

1. 關閉桌面錢包
2. 系統屬性 -> 高級 -> 環境變數 -> 新建/系統環境變數
    變數名: ABELWALLET_HOME
    變數值: （選擇一個資料夾路徑）
1. 將以下檔案從 C:\Users\\[用戶名稱]\AppData\Roaming\Abelian Wallet 路徑移動到新路徑包含 Abec, Abewallet, ans cache. json, config. json, state.json
2. 重新啟動系統
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

請[查看此頁面](/zh/downloads/fullnode-db)，按照步驟下載最新的 Abelian 標準節點和半全節點的主網數據，然後重新同步。
:::

---

### <Badge type="warning" text="QUESTION" /> 运行標準節點（ABEC）有什么硬體要求？

::: info <Badge type="tip" text="ANSWER" />
Abelian 標準節點（`Abec`）目前發佈了幾乎所有常用硬體平臺的版本，硬體要求也沒有太多限制，但同步和讀取主網資料速度和儲存空間大小有最低要求，儲存空間不少於 180GB，建議使用 240G 的固態硬碟。
:::

---