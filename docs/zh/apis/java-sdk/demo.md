---
outline: deep
---

# 通过演示示例了解 Abelian Java SDK

> [!NOTE] 注意：
> 本文档中描述的所有示例均在 Abelian 区块链的测试网上运行。测试网是与主网分开的区块链，仅用于测试目的。在示例中使用的内置账户已经在测试网上拥有一些 ABEL 代币和交易记录。因此，您可以在不设置任何测试网账户或向内置账户发送任何 ABEL 代币的情况下运行这些示例。

## 1. 准备环境

### 1.1. 获取演示示例

前往 Java SDK 仓库 [发布页面](https://github.com/pqabelian/abelian-sdk-java/releases)，下载并解压 `abec4j-demo-x.y.z.zip` 以获取示例目录 `abel4j-demo`。进入示例目录，我们将在此处运行所有示例。

```bash
unzip abel4j-demo-x.y.z.zip
cd abel4j-demo
```

### 1.2. 测试 Java 环境

运行以下命令以测试您的 Java 环境是否为运行示例做好了准备。

```bash
bin/abel4j-demo
```

预期输出应如下所示：

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

如上所示，不带任何参数运行 `bin/abel4j-demo` 将列出所有可用的示例。

### 1.3. 测试原生库

Abelian SDK for Java 依赖于从 Abelian SDK for Go 构建的原生库 `libabelsdk`。所有支持平台的原生库二进制文件 (`libabelsdk.so.x` 适用于 Linux, `libabelsdk.x.dylib` 适用于 macOS) 已经包含在 SDK jar 文件 `abel4j-x.y.z.jar` 中。

截至撰写本文时，原生库已为以下平台构建：
- Linux x86
- Linux arm64
- MacOS x86
- MacOS arm64 (Apple Silicon)

SDK jar 文件包含了上述所有支持平台的原生库。当您运行示例时，SDK 将自动加载与您的平台兼容的原生库。

运行以下命令以测试 SDK jar 文件中包含的原生库是否与您的平台兼容。

```bash
bin/abel4j-demo Crypto
```

预期输出应如下所示：

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

如果 `Crypto` 示例运行成功，则表示 SDK jar 文件中包含的原生库与您的平台兼容。

请注意，此示例仅用于测试目的。它调用了原生库的低级加密 API，这些 API 在您的应用程序中不太可能直接使用。因此，如果您不理解这里的输出或其源代码，也没关系。唯一重要的是检查示例是否成功运行。

### 1.3 测试默认的 Abec 全节点

Abelian Java SDK 依赖于一个 Abec 全节点来访问 Abelian 区块链上的数据。在默认设置中，示例将连接到由 Abelian 基金会维护的 Abec 全节点。它允许您在不设置自己的 Abec 全节点的情况下运行示例。

请注意，默认的 Abec 全节点仅用于测试目的。它不稳定，可能随时被重置。**对于生产用途，您应该始终为实际应用设置自己的 Abec 全节点。**

运行以下命令以测试您的机器是否可以访问默认的 Abec 全节点。

```bash
bin/abel4j-demo AbecRPCClient
```

预期输出应如下所示：

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

如果 `AbecRPCClient` 示例运行成功，则表示您的机器可以访问默认的 Abec 全节点。

> **里程碑**
> 
> 如果您已经达到这一点，恭喜！您已经成功安装了 Abelian Java SDK 并测试了它是否正常工作。您现在可以学习如何使用 SDK 开发自己的应用程序了。在接下来的部分中，我们将简略展示示例的输出以便简洁。您可以自己运行示例以查看完整的输出。

## 2. 理解 Abelian SDK 中的账户

### 2.1 概念

Abelian SDK（适用于 Java 和 Go）中的账户包括以下组成部分：

- **私钥**：用于生成账户的所有其他密钥和地址的 132 字节随机数据。它是账户需要备份的唯一东西。您可以使用相同的种子恢复账户。在 Abelian SDK 的低级 API 中，它也被称为 `Crypto Seed`。

- **花费密钥**：一个 1540 字节的 **密钥**，用于签署交易，**应当像对待私钥一样小心处理**。然而，我们不需要备份它，因为它可以从私钥派生。

- **序列号密钥**: 一个 1060 字节的 **半密钥**，用于解码交易中实际花费的输入币。它可以从私钥派生。

- **查看密钥**：一个 2408 字节的 **半密钥**，用于解码属于账户的输出币中的ABEL数额。它可以从私钥派生。

- **Abel 地址**：一个 10696 字节的 地址，用于接收 ABEL。我们通常简称为 `地址`。它可以从私钥派生。

- **短地址**：一个 66 字节的 地址，用于接收 ABEL。它是从 abel 地址计算出来的，可以作为冗长的 abel 地址的较短替代品。请注意，短地址必须在 Abelian 名称服务（ANS）上注册后才能用于接收 ABEL。

- **指纹**：账户的 32 字节 指纹。它是从 abel 地址计算出来的，并且是短地址的一部分（从第 3 字节到第 34 字节）。我们可以使用指纹作为账户的唯一标识符（又名 `账户ID`），因为它可以从 abel 地址和短地址中提取出来。然而，在本文档中，我们将继续使用短地址作为 `账户ID`，以保持一致性。

> **注意**
> 
> **序列号密钥** 或 **查看密钥** 被称为 **半秘钥**，因为将它们泄露给不受信任的方只会危及账户的隐私。只要 **花费密钥** 和 **私钥** 不被泄露，账户中的资金就是安全的。
>
> 对于受信任的方（例如，内部的 Abelian 超级节点），可以向他们泄露序列号密钥和查看密钥，以允许他们跟踪花费的币和账户的余额。从这个意义上讲，它们可以被视为 **公钥**。
> 
> 在 SDK 中，带有 **密钥**（即 **私钥** 和 **花费密钥**）的账户被称为 `签名账户`；没有 **秘密密钥** 的账户被称为 `查看账户`。

### 2.2. 创建、导入和导出账户

`Account` 示例展示了如何创建、导入和导出账户：

```bash
bin/abel4j-demo Account
```

### 2.3. 内置账户

接下来的示例中将使用 10 个内置账户。它们的地址通过 `Account` 示例导出到 `$HOME/.abel4j/accounts`。导出的每个账户文件具有 `.abeladdress` 扩展名，可以通过 Abelian 桌面钱包加载，以指定发送 ABEL 时的接收者。每个文件包含两行，第一行是 abel 地址，第二行是短地址。

内置账户将在后续演示关键功能所需的示例中使用（例如，交易所钱包）。

## 3. 分离冷数据和热数据以支持离线签名

### 3.1. 初始化钱包数据库

`WalletDB` 示例展示了如何初始化钱包数据库：

```bash
bin/abel4j-demo WalletDB
```

如果您尚未运行可能更改数据库的其他示例，则输出应如下所示：

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

`WalletDB` 示例在 `$HOME/.abel4j` 下创建了两个 `sqlite3` 格式的钱包数据库：一个名为 `demo-testnet-cold-wallet.db` 的 **冷数据库** 和一个名为 `demo-testnet-hot-wallet.db` 的 **热数据库**。您可以使用任何 `sqlite3` GUI 客户端或 `sqlite3` 命令来查看数据库的内容。

### 3.2. 冷数据库

**冷数据库** 仅存储管理账户的 **私钥** 以支持离线签名。它只包含一个表 `signer_account`：

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

在 `signer_account` 表中，`shortAddressHex` 列作为 账户 ID，`privateKeyHex` 列是账户的私钥。需要时，账户的其他信息将从私钥动态派生。

### 3.3. 热数据库

热数据库 存储所有 **不包含密钥** 的管理账户数据，用于在线操作，如扫描 UTXOs、跟踪花费的币、生成未签名的原始交易等。它包含三个表 `viewer_account`、`coin` 和 `tx`：

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

`viewer_account` 表存储了管理账户的所有信息，但没有 **秘钥**。其他两个表的架构将在后续示例中解释。

## 4. 管理热钱包中的币

### 4.1. 搜索可视币的区块

`ScanCoins` 示例展示了如何扫描属于热钱包管理账户的币：

```bash
bin/abel4j-demo ScanCoins 5115 5120
```

我们选择上述区块高度范围，因为我们事先知道它们包含一些向内置账户发送ABELs的交易。`ScanCoins` 示例将扫描指定范围的区块，并将属于管理账户的币存储在热钱包数据库中。

运行 **ScanCoins** 示例后，让我们检查热钱包数据库的状态：

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

我们可以看到 `ScanCoins` 示例扫描了 6 个区块并找到了 1 个属于管理账户的币。让我们进一步检查 `coin` 表的内容：

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

我们将 `Coin ID` 定义为币的 `txid` 和 `vout` 索引的组合，以十六进制格式表示。这个定义确保每个币都有一个唯一的 ID，并且可以通过这个 ID 轻松定位到该币。

为了理解字段的含义，让我们仔细看看第一个币：它属于其中一个内置账户（`ABE31C80...FC8A337C`），拥有 1.9103083 ABEL（19,103,083 Neutrino）的价值，位于区块 `5116` 中，且尚未被检测为已花费。

我们现在扫描另一个区块范围，看看是否有更多属于管理账户的币：

```bash
bin/abel4j-demo ScanCoins 5750 5770
```

它应该找到另外 2 个币。让我们再次检查热钱包数据库的状态：

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
> 我们可以多次扫描相同的区块而不用担心重复的币。`ScanCoins` 演示将只添加新的币到数据库中，并忽略重复的币。您可以通过运行以下命令来验证热钱包数据库中币的数量是否发生变化：

```bash
bin/abel4j-demo ScanCoins 5760 5770
bin/abel4j-demo WalletDB
```

### 4.2. 跟踪已花费的币

此时，热钱包数据库中所有币的 **isSpent** 字段仍然是 `0`（`false`），因为我们还没有扫描包含花费这些币的交易的区块。`TrackSpentCoins` 演示展示了如何跟踪已花费的币：

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

我们可以看到在区块 9398 中有 1 个币被花费了。让我们再次检查 `coin` 表：

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

我们可以看到之前在区块 5116 中找到的 1 个币现在被标记为已花费。其他币的 `isSpent` 字段保持不变。

## 5. 进行一笔交易

进行一笔交易是一项非常复杂的任务。它涉及许多步骤，如选择要花费的币、计算找零、生成原始交易、签名原始交易、广播已签名的交易等。然而，通过我们精心设计的演示，进行一笔交易变得相当容易。

### 5.1. 生成一个未签名的原始交易

`GenerateUnsignedRawTx` 演示展示了如何生成一个未签名的原始交易：

```bash
bin/abel4j-demo GenerateUnsignedRawTx
```

> **注意：**
>
> 请记录输出中的 `txMd5` 值以供后续使用。

它将生成一个带有 2 个输入和 2 个输出的未签名原始交易。输入币是从热钱包数据库中选取的，其中 **isSpent** 字段为 `0`（`false`）。输出币由演示自己生成。具体来说，接收地址是从内置账户中随机选择的，总输出价值是通过将输入币的价值总和减去交易费用来计算的。

生成的未签名原始交易将保存在热钱包数据库的 `tx` 表中。让我们在运行 `GenerateUnsignedRawTx` 演示后检查热钱包数据库的状态：

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

注意，`tx` 表中的记录数现在是 `1`。让我们检查 `tx` 表的内容：

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

如果您记录了 `GenerateUnsignedRawTx` 演示的输出中的 `txMd5` 值，您可以验证它与 `tx` 表中的值相同。我们还可以看到 `unsignedRawTxDataHex` 的值不为空，而 `signedRawTxDataHex` 的值为空。这是因为签名后的原始交易尚未生成。

### 5.2. 签名未签名的原始交易

`GenerateSignedRawTx` 演示展示了如何签名由 `GenerateUnsignedRawTx` 演示生成的未签名原始交易：

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

我们将 `txMd5` 作为参数传递给演示。它将用于在 `tx` 表中找到未签名的原始交易。演示将签名交易并将签名数据保存回 `tx` 表。

在运行 `GenerateSignedRawTx` 演示后，让我们检查热钱包数据库的状态：

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

我们可以看到 `signedRawTxDataHex` 的值现在不为空了。

> **注意：**
>
> 交易是由发送者（拥有输入币的人）的花费密钥签名的。花费密钥是根据存储在冷钱包数据库中的私钥按需生成的。私钥从未暴露给公共网络。这就是冷钱包数据库如何保护私钥不被盗取的方式。

### 5.3. 广播已签名的原始交易

最后一步是将已签名的原始交易广播到 Abelian 网络。`SubmitSignedRawTx` 演示展示了如何广播由 `GenerateSignedRawTx` 演示生成的已签名原始交易：

```bash
bin/abel4j-demo SubmitSignedRawTx F99C8BD32950DFB4C27651B8B1D85519
```

如果交易成功提交，请记录输出中的 `txid` 值，并在 [Abelian Explorer](https://explorer.abelian.info) 上搜索它，看看是否得到确认。您还可以检查 `tx` 表，看看交易的 `isSubmitted` 字段是否被设置为 `1`（`true`）。

如果交易提交失败，请检查输出中的错误信息。最常见的错误是输入中的一个或多个币在提交交易前已被花费。如果您知道币在哪个区块高度被花费，您可以运行 `TrackSpentCoins` 演示来更新热钱包数据库中币的 `isSpent` 字段，并尝试再次制作另一个未签名的原始交易，签名并提交。

## 6. 总结

在本文档中，我们学习了如何安装 Abelian SDK for Java，测试它是否正常工作，理解 Abelian SDK 中的账户概念，分离冷数据和热数据以支持离线签名，管理热钱包中的币，并通过精心设计的演示进行交易。

SDK 中还有其他未在本文档中介绍的演示。您可以自己运行它们来查看结果。您还可以阅读演示的源代码，学习如何使用 SDK 开发自己的应用程序。