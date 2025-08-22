---
outline: deep
---

# 透過示範範例了解 Abelian Java SDK

> [!NOTE] 注意：
> 本文檔中描述的所有範例均在 Abelian 區塊鏈的測試網上執行。測試網是與主網分開的區塊鏈，僅用於測試目的。在範例中使用的內建帳戶已經在測試網上擁有一些 ABEL 代幣和交易紀錄。因此，您可以在不設定任何測試網帳戶或向內建帳戶傳送任何 ABEL 代幣的情況下執行這些範例。

## 1. 準備環境

### 1.1. 取得示範範例

前往 Java SDK 倉庫 [發佈頁面](https://github.com/pqabelian/abelian-sdk-java/releases)，下載並解壓縮 `abec4j-demo-x.y.z.zip` 以取得範例目錄 `abel4j-demo`。進入範例目錄，我們將在此處執行所有範例。

```bash
unzip abel4j-demo-x.y.z.zip
cd abel4j-demo
```

### 1.2. 測試 Java 環境

執行以下命令以測試您的 Java 環境是否為執行範例做好了準備。

```bash
bin/abel4j-demo
```

預期輸出應如下所示：

```text
Usage: java -jar abec4j-demo.jar <demoName> [demoArgs]
Available demos:
  Crypto
  AbecRPCClient
  Account
  WalletDB
  GetSafeBlockInfo
  GetTxInfo
  GetCoins
  ScanCoins
  GenerateUnsignedRawTx
  GenerateSignedRawTx
  SubmitSignedRawTx
  TrackSpentCoins
```

如上所示，不帶任何參數執行 `bin/abel4j-demo` 將列出所有可用的範例。

### 1.3. 測試原生函式庫

Abelian SDK for Java 依賴於從 Abelian SDK for Go 建構的原生函式庫 `libabelsdk`。所有支援平台的原生函式庫二進位檔案 (`libabelsdk.so.x` 適用於 Linux, `libabelsdk.x.dylib` 適用於 macOS) 已經包含在 SDK jar 檔案 `abel4j-x.y.z.jar` 中。

截至撰寫本文時，原生函式庫已為以下平台建構：
- Linux x86
- Linux arm64
- MacOS x86
- MacOS arm64 (Apple Silicon)

SDK jar 檔案包含了上述所有支援平台的原生函式庫。當您執行範例時，SDK 將自動載入與您的平台相容的原生函式庫。

執行以下命令以測試 SDK jar 檔案中包含的原生函式庫是否與您的平台相容。

```bash
bin/abel4j-demo Crypto
```

預期輸出應如下所示：

```text
demoName = Crypto
demoArgs = []
default.chain = testnet

==> Generate crypto seeds.
--> Seed[0] = [132 bytes|0x00000000DFBE10E4FCD8FFB8F1F3EF5A...44024F1FF3D7011220EFB9A4F3C90EDA]
--> Seed[1] = [132 bytes|0x0000000092E7E2D4BE673639D59CB6E7...4F827B5F9B7BA2BAAD9FB15B207C4119]
--> Seed[2] = [132 bytes|0x0000000055DCB1813AEEEA1BD03FA053...1C4333A827A46187FDAF75EC9216C90C]

==> Generate crypto keys and addresses.
--> Seed[0]
    Seed = [132 bytes|0x00000000DFBE10E4FCD8FFB8F1F3EF5A...44024F1FF3D7011220EFB9A4F3C90EDA]
    SpendSecretKey = [1540 bytes|0x0000000028B828B4F68E39A2C2A86190...501534A2B9103DE7C6B232769928C284]
    SerialNoSecretKey = [1060 bytes|0x00000000609B828D70BFB4640431049F...C2BE4C2B6B078042592CECAF6C5EBEF2]
    ViewSecretKey = [2408 bytes|0x00000000010000000B037D7E3A1DCA8A...CE50929E27BFD8B288360E8E296EBF77]
    CryptoAddress = [10696 bytes|0x0000000023B834EA17A2682EC80A9433...21724F48950AD1029F67288923A53005]
--> Seed[1]
    Seed = [132 bytes|0x0000000092E7E2D4BE673639D59CB6E7...4F827B5F9B7BA2BAAD9FB15B207C4119]
    SpendSecretKey = [1540 bytes|0x00000000F2C4EA89B89EC788680112B2...082AFF37CC5695825341ACBB110F30A3]
    SerialNoSecretKey = [1060 bytes|0x000000000CF9FF22696EDD18CFC8A21E...5FC5323FD4D941C691F5D1535F8C891A]
    ViewSecretKey = [2408 bytes|0x000000000100000066C44D38547C8101...FBFB5BF9B34BF889ADDB50E8456850E8]
    CryptoAddress = [10696 bytes|0x00000000BDAFDD346C0FA9A0B53AE086...5B8AD385460D171DEEF684C0455E5ECE]
--> Seed[2]
    Seed = [132 bytes|0x0000000055DCB1813AEEEA1BD03FA053...1C4333A827A46187FDAF75EC9216C90C]
    SpendSecretKey = [1540 bytes|0x00000000BA6EA96078B81AF86AF5DEAA...2403C1672000013D7C40EC2E70A086AE]
    SerialNoSecretKey = [1060 bytes|0x000000009A846D6E662B7F29FB8EC0EB...AB8E7FDEA242640DF41528A41AFB6AD7]
    ViewSecretKey = [2408 bytes|0x000000000100000095810B7F8581E0C3...92DA1B1A3DD1E244ECF7C3D00AD14BA7]
    CryptoAddress = [10696 bytes|0x00000000ADD40C21F358097C57B87B91...E201BFE5752A8159803574C2F26B5C0D]

==> Generate crypto keys and addresses again (from the same seeds).
--> Seed[0]
    Seed = [132 bytes|0x00000000DFBE10E4FCD8FFB8F1F3EF5A...44024F1FF3D7011220EFB9A4F3C90EDA]
    SpendSecretKey = [1540 bytes|0x0000000028B828B4F68E39A2C2A86190...501534A2B9103DE7C6B232769928C284]
    SerialNoSecretKey = [1060 bytes|0x00000000609B828D70BFB4640431049F...C2BE4C2B6B078042592CECAF6C5EBEF2]
    ViewSecretKey = [2408 bytes|0x00000000010000000B037D7E3A1DCA8A...2B4DB6CDC583FD3D0039549DFC4AA38C]
    CryptoAddress = [10696 bytes|0x0000000023B834EA17A2682EC80A9433...21724F48950AD1029F67288923A53005]
--> Seed[1]
    Seed = [132 bytes|0x0000000092E7E2D4BE673639D59CB6E7...4F827B5F9B7BA2BAAD9FB15B207C4119]
    SpendSecretKey = [1540 bytes|0x00000000F2C4EA89B89EC788680112B2...082AFF37CC5695825341ACBB110F30A3]
    SerialNoSecretKey = [1060 bytes|0x000000000CF9FF22696EDD18CFC8A21E...5FC5323FD4D941C691F5D1535F8C891A]
    ViewSecretKey = [2408 bytes|0x000000000100000066C44D38547C8101...E91753573DC5CD65256F37DC826646DE]
    CryptoAddress = [10696 bytes|0x00000000BDAFDD346C0FA9A0B53AE086...5B8AD385460D171DEEF684C0455E5ECE]
--> Seed[2]
    Seed = [132 bytes|0x0000000055DCB1813AEEEA1BD03FA053...1C4333A827A46187FDAF75EC9216C90C]
    SpendSecretKey = [1540 bytes|0x00000000BA6EA96078B81AF86AF5DEAA...2403C1672000013D7C40EC2E70A086AE]
    SerialNoSecretKey = [1060 bytes|0x000000009A846D6E662B7F29FB8EC0EB...AB8E7FDEA242640DF41528A41AFB6AD7]
    ViewSecretKey = [2408 bytes|0x000000000100000095810B7F8581E0C3...A04EE6AFF39781967601D708A8FA2D2C]
    CryptoAddress = [10696 bytes|0x00000000ADD40C21F358097C57B87B91...E201BFE5752A8159803574C2F26B5C0D]
```

如果 `Crypto` 範例執行成功，則表示 SDK jar 檔案中包含的原生函式庫與您的平台相容。

請注意，此範例僅用於測試目的。它呼叫了原生函式庫的低階加密 API，這些 API 在您的應用程式中不太可能直接使用。因此，如果您不理解這裡的輸出或其原始碼，也沒關係。唯一重要的是檢查範例是否成功執行。

### 1.3 測試預設的 Abec 全節點

Abelian Java SDK 依賴於一個 Abec 全節點來存取 Abelian 區塊鏈上的資料。在預設設定中，範例將連接到由 Abelian 基金會維護的 Abec 全節點。它允許您在不設定自己的 Abec 全節點的情況下執行範例。

請注意，預設的 Abec 全節點僅用於測試目的。它不穩定，可能隨時被重置。**對於生產用途，您應該始終為實際應用設定自己的 Abec 全節點。**

執行以下命令以測試您的機器是否可以存取預設的 Abec 全節點。

```bash
bin/abel4j-demo AbecRPCClient
```

預期輸出應如下所示：

```text
demoName = AbecRPCClient
demoArgs = []
default.chain = testnet

==> Call any RPC method using client.call(method, ...params).

--> Call without parameters.
Request: method: getinfo, params: []
Response: {id: 2869ab40-871a-4c40-b273-d7f936e3302d, result: {"version":120500,"protocolversion":70002,"blocks":250120,"bestblockhash":"efc7470328364ff6747adff00a77846bb1bdc813d0a04b083af350cbcbbc1346","worksum":"35573957182947495035841336086341706532256","timeoffset":0,"connections":0,"proxy":"","difficulty":1,"testnet":true,"relayfee":1.0E-6,"errors":"","nodetype":"SemiFullNode","witnessserviceheight":0}, error: null}
    ✅ This is a successful call.
    Error: null
    Result: {"version":120500,"protocolversion":70002,"blocks":250120,"bestblockhash":"efc7470328364ff6747adff00a77846bb1bdc813d0a04b083af350cbcbbc1346","worksum":"35573957182947495035841336086341706532256","timeoffset":0,"connections":0,"proxy":"","difficulty":1,"testnet":true,"relayfee":1.0E-6,"errors":"","nodetype":"SemiFullNode","witnessserviceheight":0}

--> Call with parameters.
Request: method: getblockhash, params: [1 items|0]
Response: {id: a34fe402-0a2b-45b9-945b-cde9a2dae108, result: "eb143c8328e3131a4474ee1811d3c3a9f27e5102064148dc172966ccb50c2e2b", error: null}
    ✅ This is a successful call.
    Error: null
    Result: "eb143c8328e3131a4474ee1811d3c3a9f27e5102064148dc172966ccb50c2e2b"

--> Call with wrong method name.
Request: method: getnothing, params: []
Response: {id: 126ffa5c-4584-4867-94f9-b767a0a0d186, result: null, error: (-32601, "Method not found")}
    ❌ This is a failed call.
    Error: (-32601, "Method not found")
    Result: null

--> Call with wrong parameters.
Request: method: getinfo, params: [2 items|0, [9 chars|0x0000000]]
Response: {id: b883a361-d6c0-4fac-9dd0-3eeb3e74fba5, result: null, error: (-32602, "wrong number of params (expected 0, received 2)")}
    ❌ This is a failed call.
    Error: (-32602, "wrong number of params (expected 0, received 2)")
    Result: null

==> Call builtin member methods of AbecRPCClient.

--> Get chain info by client.getChainInfo().
ChainInfo: {"rpc":"https://testnet-rpc-exchange.abelian.info","height":250120,"difficulty":1}

==> Get block hash by client.getBlockHash(height=835).
BlockHash: [32 bytes|0x7AF4230AB3E7105C4067B0AEE93D20FBCBEC90A6F9DE08DB2E7AD14D8C77E730]

==> Get block info by client.getBlockInfo(hash=[32 bytes|0x7AF4230AB3E7105C4067B0AEE93D20FBCBEC90A6F9DE08DB2E7AD14D8C77E730]).
BlockInfo: {"height":835,"hash":{"data":"7AF4230AB3E7105C4067B0AEE93D20FBCBEC90A6F9DE08DB2E7AD14D8C77E730","length":32},"prevHash":{"data":"07340CEE74926B2AC5F9C3FA0FBC039CD3E26F8E8844C8902B4EAB04688475A5","length":32},"time":1707375349,"txHashes":[{"data":"4F5D4A6B922FC01E7584016BF3AB92421C7EC881837A18B4B787D03D708990B4","length":32}]}

==> Get tx info by client.getTxInfo(txid=[32 bytes|0x7AF4230AB3E7105C4067B0AEE93D20FBCBEC90A6F9DE08DB2E7AD14D8C77E730]).
TxInfo (without inputs and outputs): {"txid":{"data":"4F5D4A6B922FC01E7584016BF3AB92421C7EC881837A18B4B787D03D708990B4","length":32},"time":1707375349,"blockHash":{"data":"7AF4230AB3E7105C4067B0AEE93D20FBCBEC90A6F9DE08DB2E7AD14D8C77E730","length":32},"blockTime":1707375349,"vins":[],"vouts":[],"confirmations":249286,"coinSerialNumbers":[]}
Inputs:
  vins[0]:
    serialnumber: [64 bytes|0x00000000000000000000000000000000...00000000000000000000000000000000]
Outputs
  vouts[0]:
    script: [20469 bytes|0x01000000FDEE4F9DB62D1CEB38299C21...765AEF4A9875FD4A1231A1E3F1A7AF39]
    fingerprint: [32 bytes|0x15D6D39BE0574F7FE3FBCE7EF6238B5B44075BC90896DD4E1EFD6355729E1842]
```

如果 `AbecRPCClient` 範例執行成功，則表示您的機器可以存取預設的 Abec 全節點。

> **里程碑**
> 
> 如果您已經達到這一點，恭喜！您已經成功安裝了 Abelian Java SDK 並測試了它是否正常運作。您現在可以學習如何使用 SDK 開發自己的應用程式了。在接下來的部分中，我們將簡略展示範例的輸出以便簡潔。您可以自己執行範例以查看完整的輸出。

## 2. 理解 Abelian SDK 中的帳戶

### 2.1 概念

Abelian SDK（適用於 Java 和 Go）中的帳戶包括以下組成部分：

- **私鑰**：用於產生帳戶的所有其他金鑰和位址的 132 位元組隨機資料。它是帳戶需要備份的唯一東西。您可以使用相同的種子恢復帳戶。在 Abelian SDK 的低階 API 中，它也被稱為 `Crypto Seed`。

- **花費金鑰**：一個 1540 位元組的 **金鑰**，用於簽署交易，**應當像對待私鑰一樣小心處理**。然而，我們不需要備份它，因為它可以從私鑰衍生。

- **序號金鑰**: 一個 1060 位元組的 **半金鑰**，用於解碼交易中實際花費的輸入幣。它可以從私鑰衍生。

- **查看金鑰**：一個 2408 位元組的 **半金鑰**，用於解碼屬於帳戶的輸出幣中的ABEL數額。它可以從私鑰衍生。

- **Abel 位址**：一個 10696 位元組的 位址，用於接收 ABEL。我們通常簡稱為 `位址`。它可以從私鑰衍生。

- **短位址**：一個 66 位元組的 位址，用於接收 ABEL。它是從 abel 位址計算出來的，可以作為冗長的 abel 位址的較短替代品。請注意，短位址必須在 Abelian 名稱服務（ANS）上註冊後才能用於接收 ABEL。

- **指紋**：帳戶的 32 位元組 指紋。它是從 abel 位址計算出來的，並且是短位址的一部分（從第 3 位元組到第 34 位元組）。我們可以使用指紋作為帳戶的唯一識別符（又名 `帳戶ID`），因為它可以從 abel 位址和短位址中提取出來。然而，在本文檔中，我們將繼續使用短位址作為 `帳戶ID`，以保持一致性。

> **注意**
> 
> **序號金鑰** 或 **查看金鑰** 被稱為 **半秘鑰**，因為將它們洩露給不受信任的方只會危及帳戶的隱私。只要 **花費金鑰** 和 **私鑰** 不被洩露，帳戶中的資金就是安全的。
>
> 對於受信任的方（例如，內部的 Abelian 超級節點），可以向他們洩露序號金鑰和查看金鑰，以允許他們追蹤花費的幣和帳戶的餘額。從這個意義上講，它們可以被視為 **公鑰**。
> 
> 在 SDK 中，帶有 **金鑰**（即 **私鑰** 和 **花費金鑰**）的帳戶被稱為 `簽章帳戶`；沒有 **秘密金鑰** 的帳戶被稱為 `查看帳戶`。

### 2.2. 建立、匯入和匯出帳戶

`Account` 範例展示了如何建立、匯入和匯出帳戶：

```bash
bin/abel4j-demo Account
```

### 2.3. 內建帳戶

接下來的範例中將使用 10 個內建帳戶。它們的位址透過 `Account` 範例匯出到 `$HOME/.abel4j/accounts`。匯出的每個帳戶檔案具有 `.abeladdress` 副檔名，可以透過 Abelian 桌面錢包載入，以指定傳送 ABEL 時的接收者。每個檔案包含兩行，第一行是 abel 位址，第二行是短位址。

內建帳戶將在後續示範關鍵功能所需的範例中使用（例如，交易所錢包）。

## 3. 分離冷資料和熱資料以支援離線簽章

### 3.1. 初始化錢包資料庫

`WalletDB` 範例展示了如何初始化錢包資料庫：

```bash
bin/abel4j-demo WalletDB
```

如果您尚未執行可能變更資料庫的其他範例，則輸出應如下所示：

```text
demoName = WalletDB
demoArgs = []
default.chain = testnet

==> Get table summary of the hot wallet db.
Count of accounts: 10
Count of coins   : 0
Count of txs     : 0

==> Get table summary of the cold wallet db.
Count of accounts: 10
```

`WalletDB` 範例在 `$HOME/.abel4j` 下建立了兩個 `sqlite3` 格式的錢包資料庫：一個名為 `demo-testnet-cold-wallet.db` 的 **冷資料庫** 和一個名為 `demo-testnet-hot-wallet.db` 的 **熱資料庫**。您可以使用任何 `sqlite3` GUI 用戶端或 `sqlite3` 命令來查看資料庫的內容。

### 3.2. 冷資料庫

**冷資料庫** 僅儲存管理帳戶的 **私鑰** 以支援離線簽章。它只包含一個表格 `signer_account`：

```bash
sqlite3 $HOME/.abel4j/demo-testnet-cold-wallet.db
``` 

```sql
sqlite> .tables
signer_account
``` 

```sql
sqlite> .schema signer_account
CREATE TABLE `signer_account` (`shortAddressHex` VARCHAR , `privateKeyHex` VARCHAR , PRIMARY KEY (`shortAddressHex`) );
```

```sql
sqlite> select * from signer_account;
```

上述查询的截断输出为：

```text
ABE31C80....337C|00000000F255....DA5E
ABE39759....7111|00000000B283....1F50
ABE32184....94BA|00000000E549....CE21
ABE3B927....63DF|00000000669D....1457
ABE3A161....E270|000000006BEE....751F
ABE38506....1C8B|0000000017F1....F2CF
ABE30206....EF9F|000000000955....6B32
ABE3C872....FAA6|000000000FB7....0F48
ABE34746....8A1C|000000007820....31DD
ABE377B8....7A70|00000000882A....4B90
```

在 `signer_account` 表格中，`shortAddressHex` 欄作為 帳戶 ID，`privateKeyHex` 欄是帳戶的私鑰。需要時，帳戶的其他資訊將從私鑰動態衍生。

### 3.3. 熱資料庫

熱資料庫 儲存所有 **不包含金鑰** 的管理帳戶資料，用於線上操作，如掃描 UTXOs、追蹤花費的幣、產生未簽章的原始交易等。它包含三個表格 `viewer_account`、`coin` 和 `tx`：

```bash
sqlite3 ~/.abel4j/demo-testnet-hot-wallet.db
``` 

```sql
sqlite> .tables
coin  tx    viewer_account
``` 

```sql
sqlite> .schema viewer_account
CREATE TABLE `viewer_account` (`shortAddressHex` VARCHAR , `serialNoKeyHex` VARCHAR , `viewKeyHex` VARCHAR , `addressHex` VARCHAR , PRIMARY KEY (`shortAddressHex`) );
```

```sql
sqlite> .schema coin
CREATE TABLE `coin` (`coinIDStr` VARCHAR , `ownerShortAddressHex` VARCHAR , `value` BIGINT , `blockHeight` BIGINT , `snHex` VARCHAR , `isSpent` BOOLEAN , PRIMARY KEY (`coinIDStr`) );
```

```sql
sqlite> .schema tx
CREATE TABLE `tx` (`txMd5` VARCHAR , `unsignedRawTxDataHex` VARCHAR , `signerShortAddresses` VARCHAR , `signedRawTxDataHex` VARCHAR , `txid` VARCHAR , `isSubmitted` BOOLEAN , PRIMARY KEY (`txMd5`) );
```

`viewer_account` 表格儲存了管理帳戶的所有資訊，但沒有 **秘鑰**。其他兩個表格的架構將在後續範例中解釋。

## 4. 管理熱錢包中的幣

### 4.1. 搜尋可視幣的區塊

`ScanCoins` 範例展示了如何掃描屬於熱錢包管理帳戶的幣：

```bash
bin/abel4j-demo ScanCoins 5115 5120
```

我們選擇上述區塊高度範圍，因為我們事先知道它們包含一些向內建帳戶傳送ABELs的交易。`ScanCoins` 範例將掃描指定範圍的區塊，並將屬於管理帳戶的幣儲存在熱錢包資料庫中。

執行 **ScanCoins** 範例後，讓我們檢查熱錢包資料庫的狀態：

```bash
bin/abel4j-demo WalletDB
```

输出应如下所示：

```text
demoName = WalletDB
demoArgs = []
default.chain = testnet

==> Get table summary of the hot wallet db.
Count of accounts: 10
Count of coins   : 1
Count of txs     : 0

==> Get table summary of the cold wallet db.
Count of accounts: 10
```

我們可以看到 `ScanCoins` 範例掃描了 6 個區塊並找到了 1 個屬於管理帳戶的幣。讓我們進一步檢查 `coin` 表格的內容：

```bash
sqlite3 ~/.abel4j/demo-testnet-hot-wallet.db
``` 

```sql
sqlite> select coinIDStr, ownerShortAddressHex, value, blockHeight, isSpent from coin;
```

上述查询的输出是（截断）：

```text
033B8968...A51EFBE0:1|ABE31C80...FC8A337C|19103083|5116|0
```

我們將 `Coin ID` 定義為幣的 `txid` 和 `vout` 索引的組合，以十六進制格式表示。這個定義確保每個幣都有一個唯一的 ID，並且可以透過這個 ID 輕鬆定位到該幣。

為了理解欄位的含義，讓我們仔細看看第一個幣：它屬於其中一個內建帳戶（`ABE31C80...FC8A337C`），擁有 1.9103083 ABEL（19,103,083 Neutrino）的價值，位於區塊 `5116` 中，且尚未被偵測為已花費。

我們現在掃描另一個區塊範圍，看看是否有更多屬於管理帳戶的幣：

```bash
bin/abel4j-demo ScanCoins 5750 5770
```

它應該找到另外 2 個幣。讓我們再次檢查熱錢包資料庫的狀態：

```bash
bin/abel4j-demo WalletDB
```

输出应该如下所示：

```text
demoName = WalletDB
demoArgs = []
default.chain = testnet

==> Get table summary of the hot wallet db.
Count of accounts: 10
Count of coins   : 3
Count of txs     : 0

==> Get table summary of the cold wallet db.
Count of accounts: 10
```

> **注意：**
> 
> 我們可以多次掃描相同的區塊而不用擔心重複的幣。`ScanCoins` 示範將只新增新的幣到資料庫中，並忽略重複的幣。您可以透過執行以下命令來驗證熱錢包資料庫中幣的數量是否發生變化：

```bash
bin/abel4j-demo ScanCoins 5760 5770
bin/abel4j-demo WalletDB
```

### 4.2. 追蹤已花費的幣

此時，熱錢包資料庫中所有幣的 **isSpent** 欄位仍然是 `0`（`false`），因為我們還沒有掃描包含花費這些幣的交易的區塊。`TrackSpentCoins` 示範展示了如何追蹤已花費的幣：

```bash
bin/abel4j-demo TrackSpentCoins 9398
```

输出应该如下所示：

```text
demoName = TrackSpentCoins
demoArgs = [9398]
default.chain = testnet

==> Tracking spent coins in block 9398.

--> Tracking spent coins in tx [32 bytes|0x58C16A37383B1C06C488DF0733E9DC1ACBED314E4BEF72B842B934B47A48BE3F].

--> Tracking spent coins in tx [32 bytes|0xFDF55398C6D82EF31FC2316BC3A67B419E75A2C9C0DD51746CA5EFADE692EE28].
💰 Found spent coin: id=033B89683B84DFF7B2E2C05C995A75B3F13CFF3A6FE26841A37B90EFA51EFBE0:1, value=19103083.
```

我們可以看到在區塊 9398 中有 1 個幣被花費了。讓我們再次檢查 `coin` 表格：

```bash
sqlite3 ~/.abel4j/demo-testnet-hot-wallet.db
``` 

```sql
sqlite> select coinIDStr, blockHeight, isSpent from coin;
```

上述查询的输出是：

```text
033B89683B84DFF7B2E2C05C995A75B3F13CFF3A6FE26841A37B90EFA51EFBE0:1|5116|1
31C796C2424BDE46750677DED4D6832204F096AE93A8E58AE6A881CAEE1202F7:1|5751|0
B61E8F894D11D6E4C9CC06FDF967B81065D56778C560F19796C4DA7A47975995:0|5760|0
```

我們可以看到之前在區塊 5116 中找到的 1 個幣現在被標記為已花費。其他幣的 `isSpent` 欄位保持不變。

## 5. 進行一筆交易

進行一筆交易是一項非常複雜的任務。它涉及許多步驟，如選擇要花費的幣、計算找零、產生原始交易、簽章原始交易、廣播已簽章的交易等。然而，透過我們精心設計的示範，進行一筆交易變得相當容易。

### 5.1. 產生一個未簽章的原始交易

`GenerateUnsignedRawTx` 示範展示了如何產生一個未簽章的原始交易：

```bash
bin/abel4j-demo GenerateUnsignedRawTx
```

> **注意：**
>
> 請記錄輸出中的 `txMd5` 值以供後續使用。

它將產生一個帶有 2 個輸入和 2 個輸出的未簽章原始交易。輸入幣是從熱錢包資料庫中選取的，其中 **isSpent** 欄位為 `0`（`false`）。輸出幣由示範自己產生。具體來說，接收位址是從內建帳戶中隨機選擇的，總輸出價值是透過將輸入幣的價值總和減去交易費用來計算的。

產生的未簽章原始交易將儲存在熱錢包資料庫的 `tx` 表格中。讓我們在執行 `GenerateUnsignedRawTx` 示範後檢查熱錢包資料庫的狀態：

```bash
bin/abel4j-demo WalletDB
```

输出应该如下所示：

```text
demoName = WalletDB
demoArgs = []
default.chain = testnet

==> Get table summary of the hot wallet db.
Count of accounts: 10
Count of coins   : 3
Count of txs     : 1

==> Get table summary of the cold wallet db.
Count of accounts: 10
```

注意，`tx` 表格中的記錄數現在是 `1`。讓我們檢查 `tx` 表格的內容：

```bash
sqlite3 ~/.abel4j/demo-testnet-hot-wallet.db
``` 

```sql
sqlite> select txMd5, length(unsignedRawTxDataHex), length(signedRawTxDataHex), isSubmitted from tx;
```

上述查询的输出如下（您可能看到不同的值）：

```text
F99C8BD32950DFB4C27651B8B1D85519|494436||0
```

如果您記錄了 `GenerateUnsignedRawTx` 示範的輸出中的 `txMd5` 值，您可以驗證它與 `tx` 表格中的值相同。我們還可以看到 `unsignedRawTxDataHex` 的值不為空，而 `signedRawTxDataHex` 的值為空。這是因為簽章後的原始交易尚未產生。

### 5.2. 簽章未簽章的原始交易

`GenerateSignedRawTx` 示範展示了如何簽章由 `GenerateUnsignedRawTx` 示範產生的未簽章原始交易：

```bash
bin/abel4j-demo GenerateSignedRawTx F99C8BD32950DFB4C27651B8B1D85519
```

输出应该如下所示（不太可能与您的相同）：

```text
demoName = GenerateSignedRawTx
demoArgs = [F99C8BD32950DFB4C27651B8B1D85519]
default.chain = testnet

==> Generating a signed raw tx with txMd5: F99C8BD32950DFB4C27651B8B1D85519

==> Getting unsigned raw tx data from the hot wallet db.
Got unsigned raw tx: txMd5=F99C8BD32950DFB4C27651B8B1D85519, data=[247218 bytes|0x02651DCB7A4E484157DC2F06F0176CE3...01D134171AFE337FA902FE40420F0000], signers=2.

==> Getting signer accounts from the cold wallet db.
Got 2 signer accounts:
Signer 0: [66 bytes|0xABE12184DF76D1C0FEB878E54F0FF390...B5C34A6D176A2DDB7D8DB03261EA392C]
Signer 1: [66 bytes|0xABE19759B3B1FE374681E82ACF5742AA...010A0FE3DFF275BE226A2DC60D9F3D09]

==> Signing the unsigned raw tx.
Signed raw tx: txid=[32 bytes|0x381E6311F18787A7A26AF9657984DE6748FBB1C6ED7495F562398BF10242114E], data=[1798256 bytes|0x010000000240D3D88382D20C5ADE42B1...E97EA3294D5C6D3B4B248FF0DD7245E1].

==> Saving the signed raw tx to the hot wallet db.
```

我們將 `txMd5` 作為參數傳遞給示範。它將用於在 `tx` 表格中找到未簽章的原始交易。示範將簽章交易並將簽章資料儲存回 `tx` 表格。

在執行 `GenerateSignedRawTx` 示範後，讓我們檢查熱錢包資料庫的狀態：

```bash
sqlite3 ~/.abel4j/demo-testnet-hot-wallet.db
``` 

```sql
sqlite> select txMd5, length(unsignedRawTxDataHex), length(signedRawTxDataHex), isSubmitted from tx;
```

现在上述查询的输出如下所示（您可能看到不同的值）：

```text
F99C8BD32950DFB4C27651B8B1D85519|494436|3596512|0
```

我們可以看到 `signedRawTxDataHex` 的值現在不為空了。

> **注意：**
>
> 交易是由傳送者（擁有輸入幣的人）的花費金鑰簽章的。花費金鑰是根據儲存在冷錢包資料庫中的私鑰按需產生的。私鑰從未暴露給公共網路。這就是冷錢包資料庫如何保護私鑰不被盜取的方式。

### 5.3. 廣播已簽章的原始交易

最後一步是將已簽章的原始交易廣播到 Abelian 網路。`SubmitSignedRawTx` 示範展示了如何廣播由 `GenerateSignedRawTx` 示範產生的已簽章原始交易：

```bash
bin/abel4j-demo SubmitSignedRawTx F99C8BD32950DFB4C27651B8B1D85519
```

如果交易成功提交，請記錄輸出中的 `txid` 值，並在 [Abelian Explorer](https://explorer.pqabelian.io) 上搜尋它，看看是否得到確認。您還可以檢查 `tx` 表格，看看交易的 `isSubmitted` 欄位是否被設定為 `1`（`true`）。

如果交易提交失敗，請檢查輸出中的錯誤訊息。最常見的錯誤是輸入中的一個或多個幣在提交交易前已被花費。如果您知道幣在哪個區塊高度被花費，您可以執行 `TrackSpentCoins` 示範來更新熱錢包資料庫中幣的 `isSpent` 欄位，並嘗試再次製作另一個未簽章的原始交易，簽章並提交。

## 6. 總結

在本文件中，我們學習了如何安裝 Abelian SDK for Java，測試其是否正常運作，理解 Abelian SDK 中的帳戶概念，分離冷資料和熱資料以支援離線簽名，管理熱錢包中的資產，並通過精心設計的演示進行交易。

SDK 中還有其他未在本文介紹的演示。您可以自行運行它們以查看結果。您也可以閱讀演示的源碼，學習如何使用 SDK 開發自己的應用程式。