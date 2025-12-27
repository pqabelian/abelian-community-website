---
outline: deep
version_abec: v2.0.2
---

# Abelian節點（abec）手冊

本文檔介紹如何使用命令列介面執行 Abelian 節點。

在開始前，請先閱讀 [Abelian 應用程式基礎](/zh/guide/) 以了解軟體架構和執行 Abelian 節點的目的。

如需與其他礦工、開發者和使用者交流，請加入 [官方 Discord 伺服器](https://discord.com/invite/5rrDxP29hx)。

所有操作都通過命令列介面 (CLI) 進行：Linux 或 macOS 使用者請開啟終端，Windows 使用者請開啟 PowerShell 或您喜歡的 shell 應用程式。

## 系統需求

開始前請確保滿足以下系統需求：

- **儲存空間**：至少 200GB+ (當前區塊鏈資料約120GB，持續增長)
- **記憶體**：最低 8GB (推薦16GB以上)
- **CPU**：2核 及其以上(推薦4核以上)
- **網路**：穩定的寬頻連線

## 1. 安裝

從 [官方下載頁面](/zh/downloads/latest#abelian-節點-abec) 下載對應平台的壓縮包：

- Linux x86：`abec-linux-amd64-{{ $frontmatter.version_abec }}.tar.gz`
- Linux arm：`abec-linux-arm64-{{ $frontmatter.version_abec }}.tar.gz`
- macOS (Intel 晶片)：`abec-macos-amd64-{{ $frontmatter.version_abec }}.tar.gz`
- macOS (M系列晶片)：`abec-macos-arm64-{{ $frontmatter.version_abec }}.tar.gz`
- Windows：`abec-windows-amd64-{{ $frontmatter.version_abec }}.tar.gz`

解壓後將檔案放置在`~/abel/`目錄下：

```text-vue
~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/
```

### 初始設定

進入`~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/`目錄並執行：

::: code-group

```powershell [Windows]
$ .\abec.exe
```

```shell [macOS/Linux]
$ sh start_abec.sh
```
:::

按 `Ctrl+C` 停止執行。這將建立 `abec` 的設定資料夾：

::: code-group

```txt [Windows]
%USERPROFILE%\\AppData\Local\Abec
```

```txt [macOS]
~/Library/Application Support/Abec
```

```txt [Linux]
~/.abec
```

:::

> [!TIP] 平台特定說明
> - **macOS/Linux**：如果出現 "xxx: Permission denied" 錯誤，可能需要執行 `chmod 777 xxx`
> - **macOS (M系列晶片/ARM64)**：如果看到 "'xxx' 已損壞，無法開啟"，請執行：
> ```shell
> $ xattr -d com.apple.quarantine 路徑/xxx
> ```
> - **macOS**：如果看到 "無法開啟 'xxx'，因為無法驗證開發者"，請前往 **系統偏好設定 → 安全性與隱私 → 一般**，點擊 **仍要開啟**

## 2. 配置-abec

進入`abec`設定資料夾並修改`abec.conf`檔案：

### 節點類型配置

根據儲存和驗證需求選擇合適的節點類型：

| 節點類型       | 儲存需求       | 驗證級別   | 描述                                          |
|----------------|----------------|------------|-----------------------------------------------|
| **Abelian 全節點**     | 最高(~1400GB+) | 完整驗證   | 儲存並驗證從創世塊開始的所有區塊鏈資料        |
| **Abelian 半全節點**   | 中等(~450GB+)  | 標準驗證   | 最佳化儲存同時保持高驗證能力                    |
| **Abelian 標準節點**   | 最低(~160GB+)  | 安全驗證   | 進一步最佳化適合資源有限環境                    |

#### 全節點

- **定義**：儲存並驗證區塊鏈所有資料的完整節點
- **功能**：
    - 儲存從創世塊開始的完整區塊(內容+見證)資料
    - 驗證每個區塊的有效性(交易有效性、區塊有效性)

#### 半全節點

- **定義**：最佳化儲存需求同時保持高驗證能力的半完整節點
- **功能**：
    - 儲存從創世塊到最後一個檢查點的區塊(內容)資料
    - 儲存從最後一個檢查點開始的完整區塊(內容+見證)資料
    - 驗證最後一個檢查點前每個區塊的頭部資訊(包括 PoW)
    - 驗證最後一個檢查點後每個區塊的有效性(交易有效性、區塊有效性)

#### 普通節點

- **定義**：進一步最佳化儲存，適合資源有限環境的普通節點
- **功能**：
    - 儲存從創世塊到保留塊的區塊(內容)資料
    - 儲存從保留塊開始的完整區塊(內容+見證)資料
    - 驗證最後一個檢查點前每個區塊的頭部資訊(包括 PoW)
    - 驗證最後一個檢查點後每個區塊的有效性(交易有效性、區塊有效性)

**設定範例：**
```ini
# 預設：Abelian 半全節點(推薦大多數使用者使用)
nodetype=semifullnode

# 其他選項：
# nodetype=fullnode      # Abelian 全節點
# nodetype=normalnode    # Abelian 標準節點
```

### 網路配置

如果您有公網 IP 或設定了埠轉發，可以廣播您的節點：
```ini
externalip=1.2.3.4
```

### 安全配置

生產環境建議增加RPC安全設定：

```ini
# 限制 RPC 存取特定 IP
rpclisten=127.0.0.1:8667

# 設定強 RPC 憑證
rpcuser=您的安全使用者名稱
rpcpass=您的安全密碼
```

## 3. 執行 Abelian 節點

### 啟動節點

進入`~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/`目錄並啟動節點：

::: code-group

```shell [Windows]
$ .\abec.exe
```

```shell [macOS/Linux]
$ sh start_abec.sh
```
:::

### 初始同步

節點將開始與 Abelian 網路同步：

1. **連線階段**：連線對等節點
2. **同步階段**：下載並驗證區塊鏈資料
3. **驗證階段**：驗證下載的區塊

**預計同步時間：**
- **全節點**：數天(取決於網路連線)
- **半全節點**：1-3天(推薦)
- **標準節點**：1-2天

#TODO 新增下載備份資料部分

### 監控進度

透過控制台輸出監控同步進度：

```text
[INF] SYNC: Processed 1000 blocks in the last 10.02s (100 transactions, height 50000, 2023-01-01 12:00:00 +0000 UTC)
```

檢視最新網路高度請造訪： https://explorer.pqabelian.io

## 4. 節點管理

### 使用 abectl

`abectl` 命令列工具可用於與執行中的節點互動：

**檢視節點資訊：**
::: code-group
```shell [Windows]
$ ./abectl.exe getinfo
```
```shell [macOS/Linux]
$ sh start_abectl.sh getinfo
```
::: 

**檢視對等節點連線：**
::: code-group

```shell [Windows]
$ ./abectl.exe getpeerinfo
```
```shell [macOS/Linux]
$ sh start_abectl.sh getpeerinfo
```
:::

### 停止節點

安全停止節點的方法：
- 在終端按 `Ctrl+C`
- 或使用：
::: code-group

```shell [Windows]
$ ./abectl.exe stop
```
```shell [macOS/Linux]
$ sh start_abectl.sh stop
```
:::

### 更新後重啟

更新到新版本時：
1. 停止當前節點
2. 替換二進位檔案
3. 使用相同設定重啟

## 5. 故障排除

### 常見問題

**同步緩慢：**
- 檢查網路連線穩定性
- 確保足夠的磁碟空間
- 考慮使用SSD提高效能

**連線問題：**
- 驗證防火牆設定(應開放8666埠)
- 檢查網路連線
- 嘗試不同的DNS伺服器

**高資源佔用：**
- 考慮切換到 `normalnode` 類型
- 增加可用記憶體
- 定期監控磁碟空間

### 日誌檔案

檢視日誌檔案獲取詳細錯誤資訊：

::: code-group
```txt [Windows]
%USERPROFILE%\AppData\Local\Abec\logs\
```
```txt [macOS]
~/Library/Application Support/Abec/logs/
```
```txt [Linux]
~/.abec/logs/
```
:::

## 6. 安全最佳實踐

### 網路安全
- **防火牆設定**：僅開放必要埠
- **RPC安全**：使用強憑證並限制存取
- **定期更新**：保持軟體為最新版本

### 操作安全
- **備份設定**：儲存您的 `abec.conf` 檔案
- **監控資源**：關注磁碟空間和記憶體使用
- **日誌監控**：定期檢查日誌中的異常活動

## 7. 進階配置

### 多機設定

在不同機器上執行錢包或礦機：

1. **設定RPC監聽：**
 ```ini
 rpclisten=0.0.0.0:8667
 ```
2. **設定憑證**確保安全通訊
3. **設定防火牆規則**管理RPC埠

### 效能最佳化

**高效能設定建議：**
- 使用 SSD 儲存
- 分配更多記憶體
- 使用專用網路連線
- 考慮在專用硬體上執行

## 後續步驟

節點執行後：

- **設定錢包**：參考 [多重隱私錢包（CLI）手冊](/zh/guide/wallet/cli-wallet-mlp)
- **開始挖礦**：檢視 [GPU 挖礦手冊](/zh/guide/mining/gpu-mining)
- **加入社群**：造訪我們的 [Discord 伺服器](https://discord.com/invite/5rrDxP29hx)

您的節點將幫助保護和去中心化 Abelian 網路。感謝您的貢獻！🚀