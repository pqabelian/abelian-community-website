# ABEL-Nakamoto CPU 挖礦客戶端使用指南

歡迎使用 ABEL-Nakamoto CPU 挖礦客戶端！本指南將幫助您快速了解、安裝和使用這款挖礦軟體。

---

## 1. 產品介紹

### 什麼是 ABEL-Nakamoto CPU 挖礦客戶端？

ABEL-Nakamoto CPU 挖礦客戶端是一款專為 CPU 挖礦設計的高效挖礦軟體，採用 ABEL-Nakamoto 和 ABEL-ETHash PoW 共識演算法，支援透過礦池進行挖礦。

### 核心功能特性

| 功能特性         | 說明                                  |
| ---------------- | ------------------------------------- |
| **挖礦演算法** | 採用面向 CPU 的 ABEL-Nakamoto 和 ABEL-ETHash PoW 演算法 |
| **礦池協定**     | 基於 Stratum V1.0 標準協定            |
| **多執行緒支援**   | 充分利用多核心 CPU 效能                 |
| **守護程序模式** | 支援在 Linux/MacOS 後台執行           |
| **記憶體安全**     | 使用 Rust 開發，無 `unsafe` 程式碼       |
| **開箱即用**     | 單一可執行檔，無需額外依賴           |

---

## 2. 安裝指南

### 系統需求

- **作業系統**: Windows 10/11、MacOS 10.15+、Linux (主流發行版)
- **處理器**: 支援 x86_64 或 ARM64 架構的 CPU
- **記憶體**: 建議 2GB 以上
- **網路**: 穩定的網際網路連線

### 版本選擇指南

根據您的作業系統和 CPU 架構選擇對應的版本：

#### Windows 使用者

| 版本檔案                                | 適用場景                            |
| ----------------------------------------- | ----------------------------------- |
| `abel-nakamoto-cpu-miner-windows-amd64-v<版本>.exe` | **推薦**，適用於大多數 Windows 系統  |

#### MacOS 使用者

| 版本檔案                                | 適用場景                       |
| ----------------------------------------- | ------------------------------ |
| `abel-nakamoto-cpu-miner-macos-arm64-v<版本>` | 適用於 M1/M2/M3 系列晶片的 Mac |
| `abel-nakamoto-cpu-miner-macos-amd64-v<版本>` | 適用於 Intel 晶片的 Mac        |

#### Linux 使用者

| 版本檔案                                | 適用場景                             |
| ----------------------------------------- | ------------------------------------ |
| `abel-nakamoto-cpu-miner-linux-amd64-v<版本>` | **推薦**，適用於 x86_64 架構           |
| `abel-nakamoto-cpu-miner-linux-arm64-v<版本>` | 適用於 ARM64 架構                    |

> **注意**: 在下文中，`ABEL-MINER` 代表您下載的可執行檔名稱。

### 安裝驗證

下載後，開啟終端機（Windows 使用者使用 PowerShell，MacOS/Linux 使用者使用 Terminal）驗證安裝：

```bash
ABEL-MINER version
```

**預期輸出**：

```text
Abel Nakamoto CPU Miner version 0.1.0
```

如果顯示版本號，表示安裝成功！

---

## 3. 使用教學

### 快速開始

#### 步驟 1: 取得礦池資訊

在開始挖礦前，您需要：
- 礦池伺服器地址（例如：`pool.abel-nakamoto.xyz:3333`）
- 您的礦池帳戶使用者名稱
- 您的礦池帳戶密碼

> **注意**: 您可以瀏覽 ABEL-Nakamoto Pool 官方網站 https://abel-nakamoto.xyz 取得礦池資訊和註冊帳戶。

#### 步驟 2: 開始挖礦

使用以下指令開始挖礦：

```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333
```

**實際範例**：

```bash
ABEL-MINER start -p stratum://miner001:mypassword@pool.abel-nakamoto.xyz:3333
```

#### 步驟 3: 檢視挖礦狀態

啟動後，終端機將顯示挖礦日誌，包括：
- 礦池連線狀態
- 工作執行緒數量
- 當前算力
- 提交的工作量

**範例輸出**：

```text
2025-12-31T13:30:00.123456Z  INFO  Connected to pool: pool.abel-nakamoto.xyz:3333
2025-12-31T13:30:00.234567Z  INFO  Worker threads: 8
2025-12-31T13:30:05.345678Z  INFO  Current hashrate: 1.23 MH/s
2025-12-31T13:30:10.456789Z  INFO  Share accepted
```

### 指令參數說明

#### 檢視說明

```bash
ABEL-MINER help
```

#### 檢視子指令說明

```bash
ABEL-MINER help start
```

#### 常用參數

| 參數              | 說明                          | 範例                                     |
| ----------------- | ----------------------------- | ---------------------------------------- |
| `-p, --primary`   | 主礦池地址                    | `-p stratum://user:pass@pool.com:3333`   |
| `-s, --secondary` | 備用礦池地址                  | `-s stratum://user:pass@backup.com:3333` |
| `-t, --threads`   | 工作執行緒數量                  | `-t 8` (使用 8 個執行緒)                   |
| `-l, --log-dir`   | 日誌目錄                      | `-l ./my-logs`                           |
| `-d, --daemon`    | 守護程序模式 (僅 Linux/MacOS) | `-d`                                     |
| `-v, --verbose`   | 增加日誌詳細程度              | `-v` 或 `-vv`                            |
| `-q, --quiet`     | 減少日誌輸出                  | `-q`                                     |

### 守護程序模式 (Linux/MacOS)

> **注意**: Windows 不支援守護程序模式，Windows 使用者請跳過本節。

#### 啟動守護程序

```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333 -d
```

啟動後會顯示：

```text
2025-12-31T13:30:00.123456Z  INFO  starting Abel Nakamoto CPU Miner...
2025-12-31T13:30:00.234567Z  INFO  running in daemon mode
2025-12-31T13:30:00.345678Z  INFO  after daemon started, you can check logs in ./logs directory
```

程式將在背景執行，您可以關閉終端機，挖礦會繼續進行。

#### 檢視日誌

```bash
tail -f ./logs/latest-log-file
```

#### 停止守護程序

```bash
ABEL-MINER stop
```

### 停止挖礦

#### 非守護程序模式

在終端機中按 `Ctrl + C` 即可停止挖礦。

#### 守護程序模式

使用停止指令：

```bash
ABEL-MINER stop
```

或使用系統工具：

```bash
# 尋找程式
ps aux | grep abel-nakamoto

# 停止程式 (替換 PID 為實際程式 ID)
kill PID
```

---

## 4. 設定優化

### 多執行緒設定

#### 自動設定（推薦）

預設情況下，程式會使用您 CPU 的所有核心數作為工作執行緒數量。

#### 手動設定

如果您想自訂執行緒數量：

```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333 -t 8
```

**建議**：
- **全力挖礦**: 執行緒數量 = CPU 核心數
- **日常使用**: 執行緒數量 = CPU 核心數 - 2（保留資源給其他程式）
- **測試**: 執行緒數量 = 1 或 2

#### 檢視 CPU 核心數

**Windows**：
```powershell
echo $env:NUMBER_OF_PROCESSORS
```

**MacOS/Linux**：
```bash
nproc
# 或
sysctl -n hw.ncpu  # MacOS
```

### 日誌管理

#### 自訂日誌目錄

```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333 -l /path/to/logs
```

#### 調整日誌詳細程度

**增加詳細程度**（用於除錯）：
```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333 -v
```

**減少日誌輸出**（僅顯示重要資訊）：
```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333 -q
```

### 效能優化建議

#### 1. 散熱優化
- 確保 CPU 散熱良好，避免過熱降頻
- 考慮使用更好的散熱系統

#### 2. 電源設定
- Windows：設定為「高效能」電源計畫
- MacOS：在「省電」設定中取消「省電模式」
- Linux：使用 `performance` CPU 調速器

#### 3. 背景程式
- 關閉不必要的背景程式，釋放 CPU 資源
- 避免同時執行其他 CPU 密集型工作

#### 4. 備用礦池
使用備用礦池提高穩定性：

```bash
ABEL-MINER start \
  -p stratum://username:password@pool.abel-nakamoto.xyz:3333 \
  -s stratum://username:password@backup.abel-nakamoto.xyz:3333
```

---

## 5. 常見問題

### 安裝與執行問題

#### Q1: 提示「無法開啟程式」或「權限被拒絕」

**Windows**：
- 右鍵點擊檔案 → 內容 → 解除鎖定
- 或者在 PowerShell 中執行：`Unblock-File .\ABEL-MINER.exe`

**MacOS**：
```bash
chmod +x ABEL-MINER
```

如果提示「無法驗證開發者」：
- 系統偏好設定 → 安全性與隱私 → 點擊「仍要開啟」

**Linux**：
```bash
chmod +x ABEL-MINER
```

#### Q2: 提示「找不到指令」

確保您在可執行檔所在目錄執行指令，或使用完整路徑：

```bash
# Windows
.\abel-nakamoto-cpu-miner-windows-amd64-v<版本>.exe version

# MacOS/Linux
./abel-nakamoto-cpu-miner-macos-arm64-v<版本> version
```

#### Q3: 版本選擇錯誤導致無法執行

**症狀**：程式無法啟動或立即當機

**解決方法**：
- 確認您的 CPU 架構（x86_64 還是 ARM64）
- 嘗試同平台的其他版本

### 連線與效能問題

#### Q4: 無法連線到礦池

**檢查清單**：
1. 確認礦池地址、連接埠、使用者名稱、密碼正確
2. 檢查網路連線是否正常
3. 檢查防火牆是否攔截了程式
4. 嘗試使用備用礦池地址

#### Q5: 算力異常低

**可能原因**：
1. CPU 過熱降頻 → 改善散熱
2. 執行緒數量設定過低 → 增加執行緒數量
3. 背景程式佔用 CPU → 關閉不必要的程式
4. 電源模式為省電 → 切換到高效能模式

#### Q6: 頻繁出現「Share rejected」錯誤

**可能原因**：
1. 網路延遲過高 → 選擇延遲更低的礦池
2. 系統時間不準確 → 同步系統時間
3. 礦池伺服器問題 → 聯絡礦池管理員

### 故障排除方法

#### 程式當機

1. **檢視日誌**：檢查 `./logs` 目錄中的日誌檔案
2. **增加日誌詳細程度**：使用 `-v` 或 `-vv` 參數重新執行
3. **檢查系統資源**：確保有足夠的記憶體和 CPU 資源
4. **更新版本**：檢查是否有新版本可用

#### 守護程序無法停止

```bash
# 尋找程式 ID
ps aux | grep abel-nakamoto

# 強制停止 (替換 PID)
kill -9 PID
```

#### 日誌檔案過大

定期清理舊日誌：

```bash
# Linux/MacOS
rm -rf ./logs/*.log.old

# Windows PowerShell
Remove-Item .\logs\*.log.old
```

---

## 取得協助

如果您遇到本文件未涵蓋的問題，可以：

- 瀏覽 ABEL-Nakamoto Pool 官方網站：<https://abel-nakamoto.xyz>；
- 檢視詳細日誌檔案取得錯誤資訊；
- 加入 [Discord](https://discord.com/invite/5rrDxP29hx) 社群聯絡技術支援團隊。

---

**祝您挖礦愉快！** 🚀
