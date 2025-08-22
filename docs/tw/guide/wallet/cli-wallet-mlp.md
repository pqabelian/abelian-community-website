---
outline: deep
version_abec: v2.0.2
version_abewalletmlp: v2.0.0
version_abewalletlegacy: v1.0.0
---

# Abelian 多層隱私錢包 (CLI) 用戶手冊

本文檔提供了安裝與設定 Abelian 多層隱私 (MLP) CLI 錢包 (`abewalletmlp`) 的全面指南 - 您通往增強隱私與彈性的門戶！

請先參考 [Abelian 應用程式基礎常識](/tw/guide/) 了解軟體架構。MLP 錢包代表了具有高階隱私功能與簡化管理的下一代 Abelian 錢包。

訪問 [Abelian 官方下載頁面](/tw/downloads/latest#多層隱私錢包-cli) 下載軟體。

所有操作皆透過命令列介面 (CLI) 完成。Linux 或 macOS 系統請打開終端機；Windows 系統請打開 PowerShell 或您選擇的 Shell 應用。

## 簡介

隨著數位貨幣的日益普及，用戶對不同目的的隱私保護需求也在成長。為滿足此需求，我們專門開發了 Abelian 多層隱私錢包 (CLI 版本)。

為何要升級？

- **簡化復原**：告別 "最大可復原錢包數量" 要求 - 我們的全新全隱私錢包用戶友善且直觀
- **增強安全性**：強烈建議持有 ABEL 代幣的現有 CLI 用戶建立新的全隱私錢包並轉移資產
- **彈性選擇**：礦工與優先考量交易速度與成本效益的用戶可以選擇半隱私錢包

本錢包採用先進的多層隱私技術，為您提供前所未有的交易隱私與安全控制。它具有兩種創新的錢包地址類型：

### 地址類型

**1. 全隱私地址**：

- 交易加密且不可追蹤
- 最高安全性與匿名性
- 交易費用較高
- 處理時間較長

**2. 半隱私地址**

- 類似比特幣的隱私等級
- 公開可見的代幣價值與可追蹤的交易
- 費用較低且吞吐量更高
- 交易處理速度更快

使用 abewalletmlp，享受增強的隱私性、更快的交易速度、更低的 Gas 費用，以及按需管理隱私的彈性。

- **彈性的隱私等級**：根據您的隱私需求選擇全隱私或半隱私錢包地址
- **簡化復原**：使用助記詞復原所有錢包地址，無需其他條件
- **無縫轉帳**：輕鬆在完全隱私與半隱私錢包之間轉移 ABEL

## 先決條件

### 系統需求

- **儲存空間**：160GB+ (運行 Abelian 節點) 或最小 (僅遠端連線)
- **記憶體**：8GB+ (運行 Abelian 節點) 或 2GB+ (僅遠端連線)
- **網路**：穩定的網際網路連線

### 所需元件

1. **Abelian 節點** (`abec`) - 軟體包 [abec-{{ $frontmatter.version_abec }}](/tw/downloads/latest#abelian-節點-abec)
2. **多層隱私錢包 CLI** (`abewalletmlp`) - 軟體包 [abewalletmlp-{{ $frontmatter.version_abewalletmlp }}](/tw/downloads/latest#多層隱私錢包-cli)
3. **錢包控制工具** (`abewalletmlpctl`) - 隨錢包提供

## 1. 安裝

### 下載並解壓

下載適用於您平台的壓縮檔：

- `abec-linux-amd64-{{ $frontmatter.version_abec }}.tar.gz` (Abelian 節點)
- `abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}.tar.gz` (多層隱私錢包 CLI)

解壓並放置於 `~/abel/` 資料夾下：

```txt-vue
~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/
~/abel/abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}/
```

### 初始設定

**建立 `abec` 設定資料夾：**

導航至 `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` 並執行：

::: code-group

```txt [Windows]
.\abec.exe
```

```txt [macOS/Linux]
sh start_abec.sh
```
:::

按 `Ctrl+C` 停止。這將建立設定資料夾：

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abec
```

```txt [macOS]
~/Library/Application Support/Abec
```

```txt [Linux]
~/.abec
```

:::

**建立 `abewalletmlp` 設定資料夾：**

導航至 `~/abel/abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}/` 並執行：

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --create
```
:::

按 `Ctrl+C` 停止。這將建立錢包設定資料夾：

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abewallet
```

```txt [macOS]
~/Library/Application Support/Abewallet
```

```txt [Linux]
~/.abewallet
```

:::

> [!TIP] 平台特定說明
> - **macOS/Linux**：若出現 "xxx: Permission denied"，可能需要執行 `chmod 777 xxx`
> - **macOS (M系列晶片/ARM64)**：若看到 "'xxx' is damaged and can't be opened"，請執行：
> ```shell
> $ xattr -d com.apple.quarantine path/to/xxx
> ```
> - **macOS**：若看到 "'xxx' cannot be opened because the developer cannot be verified"，請前往 **系統偏好設定 → 安全性與隱私 → 通用** 並點選 **仍要開啟**

## 2. 建立錢包

導航至 `~/abel/abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}` 並執行：

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --create
```
:::

**錢包建立範例：**

```text
Enter the private passphrase for your new wallet: 
Confirm passphrase: 
Enter the public passphrase for your new wallet: 
Confirm passphrase: 
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: no
Your wallet's generation seed is: 
a6c5b1d91853571b96c40136259c3ec56188cc4204bbc326fc63559e7a78917162ebd5755ac1368a5f759202bbfb65f902f3967bdc4b57f893a249045e570614
Your wallet's crypto version is:  1
Your wallet's mnemonic list is: 
finger,bronze,trophy,split,jar,enough,recipe,silk,budget,dust,pride,crystal,cabbage,tunnel,anxiety,kite,success,someone,frame,they,cheese,interest,host,tissue
IMPORTANT: Keep the version and seed in a safe place as you
will NOT be able to restore your wallet without it.
Please keep in mind that anyone who has access
to the seed can also restore your wallet thereby
giving them access to all your funds, so it is
imperative that you keep it in a secure location.
Once you have stored the seed in a safe and secure location, enter "OK" to continue: OK
Creating the wallet...
2024-08-12 13:05:58.553 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

> [!IMPORTANT] 重要安全資訊
> **儲存您的助記詞** 在多個安全位置
> **記錄錢包種子** 作為額外安全保障
> **記住兩個密碼** (私人與公開)
> **無最大地址限制** - 簡化復原流程

## 3. 設定

### 3.1 設定 abec

編輯 `abec` 設定資料夾中的 `abec.conf` 檔案：

**基本 RPC 設定：**

```ini
# RPC 伺服器設定
rpcuser=您的用戶名稱
rpcpass=您的安全密碼
```

**網路設定：**

```ini
# 公開 IP 廣播 (可選)
externalip=1.2.3.4
```

### 3.2 設定 abewalletmlp

將 RPC 憑證從 `abec.conf` 複製到 `abewallet.conf`：

```ini
# 連線到 abec 的 RPC
abecrpcuser=[abec.conf中的rpcuser]
abecrpcpass=[abec.conf中的rpcpass]
```

### 3.3 遠端設定 (可選)

若在不同機器上運行 `abec` 與 `abewalletmlp`：

**在 `abec.conf` 中：**

```ini
# 監聽所有介面
rpclisten=0.0.0.0:8667
```

**在 `abewallet.conf` 中：**

```ini
# 連線到遠端 abec
rpcconnect=[abec-IP]:8667
cafile=~/abel/rpc.cert
```

**憑證設定：**

1. 從 `abec` 設定資料夾中刪除 `rpc.cert` 和 `rpc.key`
2. 重新啟動 `abec` 以產生新憑證
3. 將 `rpc.cert` 複製到錢包機器的 `~/abel/rpc.cert`

## 4. 執行錢包

### 4.1 啟動 Abelian 節點

導航至 `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` 並執行：

::: code-group

```shell [Windows]
$ .\abec.exe
```

```shell [macOS/Linux]
$ sh start_abec.sh
```
:::

等待區塊鏈同步完成。

## 4.2 啟動多層隱私錢包（CLI）

導航至 `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` 並執行：

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --walletpass=[您的公開密碼]
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --walletpass=[您的公開密碼]
```
:::

## 5. 錢包操作

### 5.1 使用 abewalletmlpctl

`abewalletmlpctl` 工具允許您與運行中的錢包互動：

### 5.2 查詢餘額

::: code-group

```shell [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[用戶名稱] --rpcpass=[密碼] getbalancesabe
```

```shell [macOS/Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] getbalancesabe
```
:::

### 5.3 解鎖

在發送交易或產生新地址前，您需要先解鎖錢包：

::: code-group

```shell [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[用戶名稱] --rpcpass=[密碼] walletunlock [私人密碼] [超時時間]
```

```shell [macOS/Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] walletunlock [私人密碼] [超時時間]
```
:::

超時時間單位為秒。

### 5.4 錢包地址

**產生全隱私地址：**

```shell
$ sh start_abewalletmlpctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] generateaddressabe 1 1
```

**產生半隱私地址：**

```shell
$ sh start_abewalletmlpctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] generateaddressabe 1 0
```

**產生多個地址：**

```shell
# 產生 5 個全隱私地址
$ sh start_abewalletmlpctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] generateaddressabe 5 1

# 產生 3 個半隱私地址
$ sh start_abewalletmlpctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] generateaddressabe 3 0
```

### 5.5 轉帳

由於 Abelian 錢包地址較長，直接在命令列貼上可能較不方便。您可以在 `abec` 的設定資料夾中建立一個名為 `arg1` 的檔案，並將收款地址與金額加入，格式如下：

```plaintext
[
    {
        "address":"addr1",
        "amount":700000000
    },
    {
        "address":"addr2",
        "amount":500000000
    }
]
```

注意，金額單位為 **Neutrino** (1 ABEL = 10,000,000 Neutrino)。

**發送 ABEL 到地址：**

::: code-group

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[用戶名稱] --rpcpass=[密碼] sendtoaddressesabe -
```

```txt [macOS/Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] sendtoaddressesabe -
```
:::

範例：

```bash
$ cat /Users/username/Library/Application Support/Abec/arg1
 [{"address":"addr1", "amount":700000000},{"address":"addr2", "amount":500000000}]
$ sh start_abewalletmlpctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] sendtoaddressesabe -
```

此指令會送出 **70 ABEL** 到 `addr1` 與 **50 ABEL** 到 `addr2`。

## 6. 錢包復原

### 6.1 復原準備

在復原錢包前，請準備以下資訊：

1. **助記詞清單** (24 個單詞)
2. **加密版本** (通常為 1)
3. **目前錢包餘額** 以驗證
4. **設定資料夾備份** (作為安全措施)

> [!TIP] 簡化復原
> 與經典錢包不同，多層隱私錢包（MLP）不需追蹤最大地址數 - 復原流程更為簡單！

### 6.2 復原流程

1. **停止錢包** 並 **導航到設定資料夾**，刪除 `logs/` 和 `mainnet/` 資料夾

2. **開始建立錢包：**

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --create
```
:::

3. **依照復原提示操作：**

範例：

```text
$ sh start_abewalletmlp.sh --create
Enter the private passphrase for your new wallet: 
Confirm passphrase: 
Enter the public passphrase for your new wallet: 
Confirm passphrase: 
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: yes
Enter the crypto version:1
Enter existing wallet mnemonic: finger,bronze,trophy,split,jar,enough,recipe,silk,budget,dust,pride,crystal,cabbage,tunnel,anxiety,kite,success,someone,frame,they,cheese,interest,host,tissue
Creating the wallet...
2024-08-12 16:42:40.047 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

4. **設定並同步** 錢包與 `abec`
5. **等待同步** 完成
6. **檢查餘額** 是否符合預期金額

## 7. 從經典錢包遷移

> [!WARNING] 遷移成本
> 此遷移流程會建立多筆交易，需支付交易費用。

本指南假設您正從 [abewalletlegacy 版本 {{ $frontmatter.version_abewalletlegacy }}](/tw/downloads/latest#經典錢包-cli) 遷移，並已閱讀 [經典錢包手冊](/tw/guide/wallet/cli-wallet-legacy)。

### 7.1 遷移設定

本範例假設在兩台電腦 (`PC1` 與 `PC2`) 上操作：

**PC1 (來源 - 經典錢包)：**

1. 確保 `abewalletlegacy` 正在運行並同步
2. 備份設定資料夾至安全位置
3. 記錄目前餘額與地址

**PC2 (目標 - MLP 錢包)：**

1. [安裝](#_1-安裝) 並 [建立](#_2-建立錢包) 新的多層隱私錢包（MLP）
2. [產生地址](#_5-4-錢包地址) 作為遷移目標
3. 記錄新的多層隱私錢包（MLP）地址用於轉帳

### 7.2 遷移流程

**步驟 1：準備目標地址**

在 PC2 上，產生多個地址以增強隱私：

```shell
# 產生 5 個全隱私地址
$ sh start_abewalletmlpctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] generateaddressabe 5 1
```

**步驟 2：從經典錢包轉帳資金**

在 PC1 上，將資金轉到新的多層隱私錢包（MLP）地址：

```shell
# 從經典錢包轉到 MLP 地址
$ ./start_abewalletlegacyctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] sendtoaddressabe [mlp_address] [amount]
```

**步驟 3：驗證遷移**

在 PC2 上，確認資金已接收：

```shell
$ sh start_abewalletmlpctl.sh --rpcuser=[用戶名稱] --rpcpass=[密碼] getbalancesabe
```

**步驟 4：完成遷移**

一旦所有資金成功轉移：

1. 驗證總餘額是否符合原始金額（扣除手續費）
2. 測試從新的多層隱私錢包（MLP）轉出
3. 安全備份新的多層隱私錢包（MLP）
4. 確認後停用經典錢包

## 8. 升級到最新版本

### 8.1 準備

在升級前，準備與錢包復原相同資訊：

1. **錢包助記詞**
2. **目前餘額**
3. **備份設定資料夾**

### 8.2 升級流程

1. **停止舊版** 的 `abec` 與 `abewalletmlp`
2. **下載並解壓** 新版本
3. **執行新 `abec`** (設定保持)
4. **刪除錢包設定** `logs/` 與 `mainnet/` 資料夾
5. **用新版本復原錢包** (依照上述復原步驟)

## 9. 故障排除

### 常見問題

**錢包無法啟動：**

- 驗證公開密碼是否正確
- 檢查設定檔語法
- 查看日誌檔中的錯誤

**地址產生失敗：**

- 確認錢包已解鎖
- 驗證 RPC 連線是否正常
- 檢查系統資源是否充足

**交易失敗：**

- 確認餘額足夠支付手續費
- 驗證收款地址格式
- 檢查網路同步狀態

**復原問題：**

- 確認助記詞正確
- 驗證單詞順序與拼寫
- 檢查是否有額外空白或字符