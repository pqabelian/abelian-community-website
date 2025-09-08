---
outline: deep
version_abec: v2.0.2
version_abewalletlegacy: v1.0.0
---

# Abelian 經典錢包（CLI）用戶手冊

本文檔描述了如何運行 Abelian CLI 錢包。

請先參考 [Abelian 應用程式基礎常識](/zh/guide/) 了解軟體架構。經典錢包 (`abewalletlegacy`) 使用舊版 Abelian 地址格式，主要為現有用戶維護。

訪問 [Abelian 官方下載頁面](/zh/downloads/latest#經典錢包-cli) 下載軟體。

所有操作均透過命令列介面 (CLI) 完成。Linux 或 macOS 用戶請打開終端機；Windows 用戶請打開 PowerShell 或您選擇的 Shell 應用。

> [!TIP]
> 如需從舊版本升級到最新版本，請直接跳轉到 [升級到最新版本](#_7-升級到最新版本)。

> [!WARNING] 建議遷移
> 我們強烈建議遷移到 [多層隱私錢包（CLI）](/zh/guide/wallet/cli-wallet-mlp) 以獲得增強功能和簡化恢復。經典錢包（CLI）將在未來版本中逐步淘汰。

## 前提條件

### 系統需求

- **儲存空間**：160B+（運行 Abelian 節點）或最小（僅遠端連線）
- **記憶體**：8GB+（運行 Abelian 節點）或 2GB+（僅遠端連線）
- **網路**：穩定的網際網路連線

### 所需元件

1. **Abelian 節點** (`abec`) - 遵循 [Abelian 節點 (abec) 手冊](/zh/guide/abelian-node)
2. **經典錢包（CLI）** (`abewalletlegacy`) - 本指南
3. **錢包控制工具** (`abewalletlegacyctl`) - 隨錢包提供

## 1. 安裝

### 下載並解壓

下載適用於您平台的壓縮檔：

- `abec-linux-amd64-{{ $frontmatter.version_abec }}.tar.gz` (Abelian 節點)
- `abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}.tar.gz` (經典錢包（CLI）)

解壓並將它們放置在 `~/abel/` 資料夾下：

```txt-vue
~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/
~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/
```

### 初始設定

**建立 `abec` 設定資料夾：**

導航到 `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` 並執行：

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

**建立 `abewalletlegacy` 設定資料夾：**

導航到 `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` 並執行：

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletlegacy.sh --create
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
> - **macOS/Linux**：如果出現 "xxx: Permission denied"，可能需要執行 `chmod 777 xxx`
> - **macOS (M系列晶片/ARM64)**：如果看到 "'xxx' is damaged and can't be opened"，請執行：
> ```shell
> $ xattr -d com.apple.quarantine path/to/xxx
> ```
> - **macOS**：如果看到 "'xxx' cannot be opened because the developer cannot be verified"，請前往 **系統偏好設定 → 安全性與隱私 → 通用** 並點擊 **仍要開啟**

## 2. 建立錢包

導航到 `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` 並執行：

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletlegacy.sh --create
```
:::

**錢包建立範例：**

```bash
$ ./start_abewalletlegacy.sh --create
Enter the private passphrase for your new wallet:
Confirm passphrase:
Enter the public passphrase for your new wallet:
Confirm passphrase:
NOTE: Use the `--walletpass` option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]:
Your wallet generation seed is:
afe0f025646cde3eee099db9215f8cdb212ed0e06730fd0087e9d1ff5565fd53
the crypto version is 0
Your wallet mnemonic list is:
quiz,always,announce,silver,social,buyer,return,crisp,rice,april,tobacco,rent,base,half,light,tow
ard,wonder,aerobic,whip,physical,vocal,real,vocal,leg
IMPORTANT: Keep the version and seed in a safe place as you
will NOT be able to restore your wallet without it.
Please keep in mind that anyone who has access
to the seed can also restore your wallet thereby
giving them access to all your funds, so it is
imperative that you keep it in a secure location.
Once you have stored the seed in a safe and secure location, enter "OK" to continue: OK
Creating the wallet...
Please remember the initial address:
00000000005a38589d86427698e3ec735335b368899ed6e0239c4285bbc4e370f4ea4e6d
2ac1f1555b53f8df7c30e13d4bccc3b6d56763ec279620d9f131fb68089cb8ef18885950f8
4e56bf78d1780a5cac57d0888dabd669f86f85e7055afabae6a332fa000b3c6ee6a09751ce4
1ad7de4e...
```

> [!IMPORTANT] 重要安全說明
> **保存您的助記詞** 在安全位置
> **記錄加密版本**（通常為 0）
> **記住兩個密碼**（私人和公共）
> **備份設定資料夾** 在進行更改前

## 3. 設定

### 3.1 設定 abec

編輯 `abec` 設定資料夾中的 `abec.conf` 檔案：

**基本 RPC 設定：**

```ini
# RPC 伺服器設定
rpcuser=your_username
rpcpass=your_secure_password
```

**網路設定：**

```ini
# 公共 IP 廣播（可選）
externalip=1.2.3.4
```

### 3.2 設定 abewalletlegacy

將 RPC 憑證從 `abec.conf` 複製到 `abewallet.conf`：

```ini
# 連線到 abec 的 RPC
abecrpcuser=[abec.conf 中的 rpcuser]
abecrpcpass=[abec.conf 中的 rpcpass]
```

### 3.3 遠端設定（可選）

如果在不同機器上運行 `abec` 和 `abewalletlegacy`：

**在 `abec.conf` 中：**

```ini
# 監聽所有介面
rpclisten=0.0.0.0:8667
```

**在 `abewallet.conf` 中：**

```ini
# 連線到遠端 abec
rpcconnect=[abec-ip]:8667
cafile=~/abel/rpc.cert
```

**證書設定：**

1. 從 `abec` 設定資料夾中刪除 `rpc.cert` 和 `rpc.key`
2. 重新啟動 `abec` 以產生新證書
3. 將 `rpc.cert` 複製到錢包機器的 `~/abel/rpc.cert`

## 4. 執行錢包

### 4.1 啟動 Abelian 節點

導航到 `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` 並執行：

::: code-group

```shell [Windows]
$ .\abec.exe
```

```shell [macOS/Linux]
$ sh start_abec.sh
```
:::

等待區塊鏈同步完成。

### 4.2 啟動錢包

導航到 `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` 並執行：

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --walletpass=[您的公共密碼]
```

```shell [macOS/Linux]
$ sh start_abewalletlegacy.sh --walletpass=[您的公共密碼]
```
:::

## 5. 錢包操作

### 5.1 使用 abewalletlegacyctl

`abewalletlegacyctl` 工具允許您與運行中的錢包互動：

### 5.2 查詢餘額

::: code-group

```shell [Windows]
$ .\abewalletlegacyctl.exe --rpcuser=[用戶名] --rpcpass=[密碼] getbalancesabe
```

```shell [macOS/Linux]
$ sh start_abewalletlegacyctl.sh --rpcuser=[用戶名] --rpcpass=[密碼] getbalancesabe
```
:::

### 5.3 解鎖

在傳送交易或產生新地址前，您需要先解鎖錢包：

::: code-group

```shell [Windows]
$ .\abewalletlegacyctl.exe --rpcuser=[用戶名] --rpcpass=[密碼] walletunlock [私人密碼] [超時時間]
```

```shell [macOS/Linux]
$ sh start_abewalletlegacyctl.sh --rpcuser=[用戶名] --rpcpass=[密碼] walletunlock [私人密碼] [超時時間]
```
:::

超時時間單位為秒。

範例：

```bash
sh start_abewalletlegacyctl.sh --rpcuser=[用戶名] --rpcpass=[密碼] walletunlock 123456 240
```

此命令用密碼 `123456` 解鎖錢包 240 秒。

### 5.4 錢包地址

**取得新地址：**

```shell
$ sh start_abewalletlegacyctl.sh --rpcuser=[用戶名] --rpcpass=[密碼] generateaddressabe
```

### 5.5 發送交易

由於 Abelian 錢包地址較長，直接在命令列貼上錢包地址可能較不方便。
您可以改為在 `abec` 的設定資料夾中建立一個名為 `arg1` 的檔案，並將接收者地址與金額加入其中。格式如下：

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

請注意，金額單位為 **Neutrino** (1 ABEL = 10,000,000 Neutrino)。

**傳送 ABEL 到地址：**

::: code-group

```txt [Windows]
$ .\abewalletlegacyctl.exe --rpcuser=[用戶名] --rpcpass=[密碼] sendtoaddressesabe -
```

```txt [macOS/Linux]
$ sh start_abewalletlegacyctl.sh --rpcuser=[用戶名] --rpcpass=[密碼] sendtoaddressesabe -
```
:::

範例：

```bash
$ cat /Users/username/Library/Application Support/Abec/arg1
 [{"address":"addr1", "amount":700000000},{"address":"addr2", "amount":500000000}]
$ sh start_abewalletlegacyctl.sh --rpcuser=[用戶名] --rpcpass=[密碼] sendtoaddressesabe -
```

此命令會傳送 **70 ABEL** 到 `addr1` 和 **50 ABEL** 到 `addr2`。

## 6. 錢包恢復

### 6.1 恢復準備

在恢復錢包前，請準備以下資訊：

1. **錢包助記詞**（24 個單詞清單）
2. **加密版本**（通常為 0）
3. **錢包中使用的最大地址數**
4. **目前錢包餘額** 以驗證
5. **設定資料夾的備份**（作為安全措施）

**查詢最大地址數：**
若要恢復錢包，請先依照以下說明準備資訊：

1. **確保您的錢包助記詞可用。**
2. **查詢目前錢包中的最大地址數。**
3. **查詢目前錢包的餘額資訊。**
4. **備份 abewalletlegacy 設定資料夾。** 複製資料夾到其他安全位置。此資料夾連同公共與私人密碼，可能有助於在助記詞不符合預期時回滾到目前錢包。

**查詢最大地址數：**

```shell
$ ./start_abewalletlegacyctl.sh --rpcuser=[用戶名] --rpcpass=[密碼] getmaxaddressidsabe
```

### 6.2 恢復流程

1. **停止錢包** 並刪除設定資料夾中的 `logs/` 和 `mainnet/` 資料夾
2. **開始錢包建立：**

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletlegacy.sh --create
```
:::

3. **依照恢復提示操作：**
    
    範例：
    
    ```bash
    $ ./start_abewalletlegacy.sh --create
    Enter the private passphrase for your new wallet:
    Confirm passphrase:
    Enter the public passphrase for your new wallet:
    Confirm passphrase:
    NOTE: Use the --walletpass option to configure your public passphrase.
    Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: y
    Enter the crypto version is:0
    Enter existing wallet mnemonic: biology,hazard,sudden,dignity,drop,jealous,butter,believe,answer,enter,practice,scorpion,health,tunnel,rival,vault,neutral,season,proof,must,path,steel,final,female
    Please input the max No. of address to recover :5
    Creating the wallet...
     [INF] WLLT: The addresses with No. in [0, 5] have been restored.
     [INF] WLLT: Opened wallet
    The wallet has been created successfully.
    ```
4. **設定並連線** 錢包到 `abec`
5. **等待同步** 完成
6. **檢查餘額** 是否符合預期

## 7. 升級到最新版本

### 7.1 準備

在升級前，準備與錢包恢復相同的資訊：

1. **錢包助記詞**
2. **最大地址數**
3. **目前餘額**
4. **備份設定資料夾**

### 7.2 升級流程

1. **停止舊版本** 的 `abec` 和 `abewalletlegacy`
2. **下載並解壓** 新版本
3. **執行新版本的 `abec`**（設定保留）
4. **刪除錢包設定** `logs/` 和 `mainnet/` 資料夾
5. **使用新版本恢復錢包**（依照上述恢復流程）

## 8. 故障排除

### 常見問題

**連線問題：**

- 確認 `abec` 是否正在運行並同步
- 檢查 RPC 憑證是否在兩個設定檔中匹配
- 確保防火牆允許端口 8667

**錢包無法啟動：**

- 檢查公共密碼是否正確
- 驗證設定檔語法
- 查看日誌檔中的錯誤訊息

**餘額未顯示：**

- 等待區塊鏈同步完成
- 驗證錢包地址是否正確恢復
- 檢查交易歷史確認

**恢復問題：**

- 確認助記詞輸入正確
- 驗證加密版本是否正確
- 使用備份中的確切最大地址數

### 日誌檔

查看日誌檔以取得詳細錯誤資訊：

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abewallet\logs\
```

```txt [macOS]
~/Library/Application Support/Abewallet/logs/
```

```txt [Linux]
~/.abewallet/logs/
```

:::

## 9. 安全最佳實務

### 錢包安全

- **備份助記詞** 在多個安全位置
- **使用強密碼** 用於私人與公共存取
- **定期備份** 設定資料夾
- **測試恢復流程** 在依賴備份前

### 操作安全

- **保持軟體更新** 至最新版本
- **定期監控交易**
- **使用專用地址** 用於不同目的
- **保護 RPC 連線** 在使用遠端設定時

### 網路安全

- **防火牆設定** 限制不必要的存取
- **安全證書管理** 用於遠端連線
- **定期安全稽核** 設定檔

## 10. 遷移到 MLP 錢包

### 為何遷移？

多層隱私 (MLP) 錢包提供：

- **簡化恢復** - 無需最大地址數
- **增強隱私** - 多個隱私等級
- **更佳功能** - 改進的性能與功能
- **未來支援** - 經典錢包將逐步淘汰

### 遷移流程

1. **安裝多層隱私錢包（CLI）** 按照 [多層隱私錢包（CLI）手冊](/zh/guide/wallet/cli-wallet-mlp)
2. **建立新的 MLP 錢包** 具有增強隱私功能
3. **轉移資金** 從經典錢包轉帳到多層隱私錢包
4. **驗證轉移** 完成與餘額
5. **安全備份** 新的多層隱私錢包（MLP）錢包憑證

::: tip 轉移協助
有關詳細遷移說明，請參考多層隱私錢包（MLP）錢包文件中的 [錢包遷移指南](/zh/guide/wallet/cli-wallet-mlp#_7-從經典錢包遷移)。
:::

## 下一步

**新用戶：**

- 考慮從 [多層隱私錢包（MLP）錢包](/zh/guide/wallet/cli-wallet-mlp) 開始
- 加入 [Discord 社群](https://discord.com/invite/5rrDxP29hx) 取得支援
- 先進行小額交易練習

**現有用戶：**

- 計畫遷移到多層隱私錢包（MLP）以獲得增強功能
- 在進行重大變更前確保適當備份
- 保持軟體更新至最新版本