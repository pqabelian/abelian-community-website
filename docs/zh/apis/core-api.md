---
outline: deep
---

# Abelian 核心 API

## 1. 概覽

abec 提供了一個 JSON-RPC API。在 abec 中，RPC 的服務方式有一些特點：

- abec 預設是安全的，這意味著 RPC 連接預設啟用了 TLS；
- abec 透過 HTTP POST 請求和 Websockets 提供 API 存取權限。

Websockets 是 abec RPC 首選的傳輸方式，被像 abewallet 這樣的應用程式用於與 abec 的程序間通訊。abec 的 websocket 連接端點是 `wss://your_ip_or_domain:8667/ws`。

除了標準 API 之外，還在開發一種擴充 API，這種 API 專為使用 Websockets 的用戶端設計。目前，這個 API 試圖補充在開發 abewallet 期間發現標準 API 中缺少的功能。

應當指出，目前的 API 清單並不穩定，雖然標準API被設計為穩定的，但 Websocket 擴充 API 應被視為正在進行中、不完整且易於變動（包括增加和刪除）的工作。

## 2. HTTP POST 與 Websockets 對比

abec RPC 伺服器支援 HTTP POST 請求和首選的 Websockets。本文件中描述的所有標準方法和擴充方法都可以透過這兩種方式存取。正如名稱所示，特定於 Websocket 的擴充方法只能在透過 Websockets 連接時存取。

如概述中所提到的，abec 的 websocket 連接端點為 `wss://your_ip_or_domain:8667/ws`。

在 JSON-RPC API 方面，這兩種傳輸方式最重要的區別是：

|   |HTTP POST Requests|Websockets|
|---|------------------|----------|
|允許在單一連接上進行多個請求|No|Yes|
|支援非同步通知|No|Yes|
|在大量請求時擴充性良好|No|Yes|

## 3. 驗證

### 3.1 驗證概述

在建立與 abec RPC 伺服器的連接之前，需要以下驗證詳情：

* **rpcuser** 是為 abec RPC 伺服器設定的具有完全存取權限的使用者名稱
* **rpcpass** 是為 abec RPC 伺服器設定的完全存取密碼
* **rpclimituser** 是為 abec RPC 伺服器設定的有限使用者名稱
* **rpclimitpass** 是為 abec RPC 伺服器設定的限制密碼
* **rpccert** 是 abec 伺服器設定的 PEM 編碼 X.509 憑證（公鑰）。它由 abec 自動產生，並放置在 abec 主目錄中（通常在 Windows 上是 `%LOCALAPPDATA%\abed`，在類 POSIX 作業系統上是 `~/.abec`）

**注意：** 如上所述，abec 預設是安全的，這意味著除非設定了 **rpcuser** 和 **rpcpass** 以及/或者 **rpclimituser** 和 **rpclimitpass**，否則 RPC 伺服器不會運作，並且所有連接都使用 TLS 驗證。

根據您使用的是哪種連接事務，您可以選擇兩種互斥方法中的一種。

- 使用 HTTP 授權標頭 - HTTP POST 請求和 Websockets
- 使用 JSON-RPC 的 "authenticate" 指令 - 僅限 Websockets

### 3.2 HTTP 基本存取驗證

abec RPC 伺服器使用 HTTP 基本存取驗證，具體採用上述的 **rpcuser** 和 **rpcpass**。如果提供的憑據無效，一旦建立連接你將會被立即中斷。

### 3.3 JSON-RPC 驗證指令（僅限 Websocket）

雖然 HTTP 基本存取驗證方法是首選方法，但並不總是能夠從 WebSockets 設定 HTTP 標頭。在那種情況下，你將需要使用 authenticate JSON-RPC 方法。

驗證指令必須是連接到 websocket 後發送的第一個指令。在驗證之前發送任何其他指令、提供無效憑據，或者在已經驗證的情況下嘗試再次驗證，都將導致 websocket 立即關閉。

## 4. 指令列工具

abec 附帶了一個名為 `abectl` 的獨立工具，可以在根據上述驗證部分的資訊設定後，透過 HTTP POST 請求向 abec 發出這些 RPC 指令。

## 5. 標準方法

### 5.1 方法概述

以下是 RPC 方法及其目前狀態的概覽。點選方法名稱以獲取更多詳情，如參數和回傳資訊。

|#|Method|Safe for limited user?| Description                                                                                                                                                                                                                                                                             |
|---|------|----------------|--------------------------------------------------------------|
|1| [getbestblockhash](#getbestblockhash)|Y| 回傳最長區塊鏈中最佳（最新）區塊的雜湊值。                                                                                                                                                                                                                     |
|2| [getblockabe](#getblock)|Y| 根據給定的雜湊值回傳區塊資訊。                                                                                                                                                                                          |
|3| [getblockcount](#getblockcount)|Y| 回傳最長區塊鏈中的區塊數量。                                                                                                                                                                                                     |
|4| [getblockhash](#getblockhash)|Y| 回傳在給定高度的最佳區塊鏈中的區塊雜湊值。                                                                                                                                                                                                          |
|5| [getblockheader](#getblockheader)|Y| 回傳區塊的標頭資訊。                                                                                                                                                                                                                            |
|6|[getconnectioncount](#getconnectioncount)|N| 回傳與其他對等節點的活動連接數量。                                                                                                                                                                                                     |
|7| [getdifficulty](#getdifficulty)|Y| 回傳工作量證明難度，以最小難度的倍數表示。                                                                                                                                                                                                                                      |
|8| [getgenerate](#getgenerate)|N| 回傳伺服器是否設定為產生硬幣（挖礦）。                                                                                                                                                                                                                               |
|9|[gethashespersec](#gethashespersec)|N| 回傳產生硬幣（挖礦）時的近期每秒雜湊值效能測量。                                                                                                                                                                                                                      |
|10|[getinfo](#getinfo)|Y| 回傳包含各種狀態資訊的 JSON 物件。                                                                                                                                                                                                                                                  |
|11| [getnetworkhashps](#getnetworkhashps)|Y| 回傳參數提供的區塊高度的估計網路每秒雜湊值。                                                                                                                                                                                                                               |
|12|[getrawtransaction](#getrawtransaction)|Y| 根據給定的雜湊值回傳交易資訊。                                                                                                                                                                                                           |
|13|[help](#help)|Y| 回傳所有指令清單或指定指令的說明。                                                                                                                                                                                                                           |
|14|[ping](#ping)|N| 將 ping 排入佇列以發送給每個已連接的對等節點。                                                                                                               |
|15| [setgenerate](#setgenerate) |N| 設定伺服器是否產生硬幣（挖礦）。<br/>注意：由於 abedabec 未整合錢包功能以提供支付地址，因此必須透過 `--miningaddr` 選項設定支付地址，此 RPC 才能正常運作。                                                                                                                                                                                                                                  |
|16| [stop](#stop)|N| 關閉 abec。                                                                                                                              

### 5.2 方法詳情

|   |   |
|---|---|
|Method|getbestblockhash|
|Parameters|None|
|Description|回傳最長區塊鏈中最佳（最新）區塊的雜湊值。|
|Returns|string|
|Example Return|`0000000000000001f356adc6b29ab42b59f913a396e170f80190dba615bd1e60`|

***

|   |   |
|---|---|
|Method|getblockabe|
|Parameters|1. block hash (string, required) - 區塊的雜湊值<br />2. verbosity (int, optional, default=1) - 指定區塊資料應以十六進位編碼字串 (0)、具有 TXID 切片的解析資料 (1)，或具有解析交易資料的解析資料 (2) 回傳。
|Description|根據給定的雜湊值回傳區塊資訊。|
|Returns (verbosity=0)|`"data" (string) hex-encoded bytes of the serialized block`|
|Returns (verbosity=1)|`{ (json object)`<br />&nbsp;&nbsp;`"hash": "blockhash",  (string) the hash of the block (same as provided)`<br />&nbsp;&nbsp;`"confirmations": n,  (numeric) the number of confirmations`<br />&nbsp;&nbsp;`"size", n (numeric) the size of the block without witness data`<br />&nbsp;&nbsp;`"fullsize": n,  (numeric) the size of the block`<br />&nbsp;&nbsp;`"height": n,  (numeric) the height of the block in the block chain`<br />&nbsp;&nbsp;`"version": n,  (numeric) the block version`<br />&nbsp;&nbsp;`"versionHex": n,  (hexadecimal) the block version`<br />&nbsp;&nbsp;`"merkleroot": "hash",  (string) root hash of the merkle tree`<br />&nbsp;&nbsp;`"tx": [ (json array of string) the transaction hashes`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"transactionhash",  (string) hash of the parent transaction`<br />&nbsp;&nbsp;&nbsp;&nbsp;`...`<br />&nbsp;&nbsp;`]`<br />&nbsp;&nbsp;`"time": n,  (numeric) the block time in seconds since 1 Jan 1970 GMT`<br />&nbsp;&nbsp;`"nonce": n,  (numeric) the block nonce`<br />&nbsp;&nbsp;`"bits", n,  (numeric) the bits which represent the block difficulty`<br />&nbsp;&nbsp;`difficulty: n.nn,  (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty`<br />&nbsp;&nbsp;`"previousblockhash": "hash",  (string) the hash of the previous block`<br />&nbsp;&nbsp;`"nextblockhash": "hash",  (string) the hash of the next block (only if there is one)`<br />`}`|
|Returns (verbosity=2)|`{ (json object)`<br />&nbsp;&nbsp;`"hash": "blockhash",  (string) the hash of the block (same as provided)`<br />&nbsp;&nbsp;`"confirmations": n,  (numeric) the number of confirmations`<br />&nbsp;&nbsp;`"size", n (numeric) the size of the block without witness data`<br />&nbsp;&nbsp;`"fullsize": n,  (numeric) the size of the block`<br />&nbsp;&nbsp;`"weight": n, (numeric) value of the weight metric`<br />&nbsp;&nbsp;`"height": n,  (numeric) the height of the block in the block chain`<br />&nbsp;&nbsp;`"version": n,  (numeric) the block version`<br />&nbsp;&nbsp;`"versionHex": n,  (hexadecimal) the block version`<br />&nbsp;&nbsp;`"merkleroot": "hash",  (string) root hash of the merkle tree`<br />&nbsp;&nbsp;`"rawtx": [ (array of json objects) the transactions as json objects`<br />&nbsp;&nbsp;&nbsp;&nbsp;`(see getrawtransaction json object details)`<br />&nbsp;&nbsp;`]`<br />&nbsp;&nbsp;`"time": n,  (numeric) the block time in seconds since 1 Jan 1970 GMT`<br />&nbsp;&nbsp;`"nonce": n,  (numeric) the block nonce`<br />&nbsp;&nbsp;`"bits", n,  (numeric) the bits which represent the block difficulty`<br />&nbsp;&nbsp;`difficulty: n.nn,  (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty`<br />&nbsp;&nbsp;`"previousblockhash": "hash",  (string) the hash of the previous block`<br />&nbsp;&nbsp;`"nextblockhash": "hash",  (string) the hash of the next block`<br />`}`|
|Example Return (verbosity=0)|`"010000000000000000000000000000000000000000000000000000000000000000000000`<br />`3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a29ab5f49`<br />`ffff001d1dac2b7c01010000000100000000000000000000000000000000000000000000`<br />...<br />`00000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f`<br />`4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f`<br />`6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104`<br />`678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f`<br />`4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000"`<br /><font color="orange">**為顯示目的而加入的換行符號。實際回傳不包含換行符號。**</font>|
|Example Return (verbosity=1)|`{`<br />&nbsp;&nbsp;`"hash": "1db9b31bc22479d4e4f7c80b2b43767031d62a6eee992801c950389e8557f8de",`<br />&nbsp;&nbsp;`"confirmations": 277113,`<br />&nbsp;&nbsp;`"size": 20799,`<br />&nbsp;&nbsp;`"height": 80039,`<br />&nbsp;&nbsp;`"version": 268435456,`<br />&nbsp;&nbsp;`"versionHex": 10000000,`<br />&nbsp;&nbsp;`"merkleroot": "a96353f19793ba890a3d7aa31ed6bb101dbe36941d224af8b0af37ca9dd585ff",`<br />&nbsp;&nbsp;`"tx": [`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"59a2a33c282bada2dc4b612979178e5f924d30c7ca4dbab4fac0960454e938ec"`<br />&nbsp;&nbsp;`],`<br />&nbsp;&nbsp;`"time": 1659858927,`<br />&nbsp;&nbsp;`"nonce": 0,`<br />&nbsp;&nbsp;`"bits": "207fffff",`<br />&nbsp;&nbsp;`"difficulty": 1,`<br />&nbsp;&nbsp;`"previousblockhash": "9fe1537074faaca21b2f8378be7eaf115cc20bc57ae140d2891c04f1a6e362f9",`<br />&nbsp;&nbsp;`"nextblockhash": "00000198246f79ebf50cfad8b13327d9568f9ea87c2c1a605aa7eaf3afb4f3ec"`<br />`}`|

***

|   |   |
|---|---|
|Method|getblockcount|
|Parameters|None|
|Description|回傳最長區塊鏈中的區塊數量。|
|Returns|numeric|
|Example Return|`276820`|

***

|   |   |
|---|---|
|Method|getblockhash|
|Parameters|1. block height (numeric, required) - 區塊高度|
|Description|回傳在給定高度的最佳區塊鏈中的區塊雜湊值。|
|Returns|string|
|Example Return|`00000198246f79ebf50cfad8b13327d9568f9ea87c2c1a605aa7eaf3afb4f3ec`|

***

|   |   |
|---|---|
|Method|getblockheader|
|Parameters|1. block hash (string, required) - 區塊的雜湊值<br />2. verbose (boolean, optional, default=true) - 指定區塊標頭以 JSON 物件而非十六進位編碼字串回傳|
|Description|回傳序列化區塊標頭的十六進位編碼位元組。|
|Returns (verbose=false)|`"data" (string) hex-encoded bytes of the serialized block`|
|Returns (verbose=true)|`{ (json object)`<br />&nbsp;&nbsp;`"hash": "blockhash", (string) the hash of the block (same as provided)`<br />&nbsp;&nbsp;`"confirmations": n,  (numeric) the number of confirmations`<br />&nbsp;&nbsp;`"height": n, (numeric) the height of the block in the block chain`<br />&nbsp;&nbsp;`"version": n,  (numeric) the block version`<br />&nbsp;&nbsp;`"versionHex": n,  (hexadecimal) the block version`<br />&nbsp;&nbsp;`"merkleroot": "hash",  (string) root hash of the merkle tree`<br />&nbsp;&nbsp;`"time": n,  (numeric) the block time in seconds since 1 Jan 1970 GMT`<br />&nbsp;&nbsp;`"nonce": n,  (numeric) the block nonce`<br />&nbsp;&nbsp;`"bits": n,  (numeric) the bits which represent the block difficulty`<br />&nbsp;&nbsp;`"difficulty": n.nn,  (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty`<br />&nbsp;&nbsp;`"previousblockhash": "hash",  (string) the hash of the previous block`<br />&nbsp;&nbsp;`"nextblockhash": "hash",  (string) the hash of the next block (only if there is one)`<br />`}`|
|Example Return (verbose=false)|`"0200000035ab154183570282ce9afc0b494c9fc6a3cfea05aa8c1add2ecc564900000000`<br />`38ba3d78e4500a5a7570dbe61960398add4410d278b21cd9708e6d9743f374d544fc0552`<br />`27f1001c29c1ea3b"`<br /><font color="orange">**為顯示目的而加入的換行符號。實際回傳不包含換行符號。**</font>|
|Example Return (verbose=true)|`{`<br />&nbsp;&nbsp;`"hash": "00000000009e2958c15ff9290d571bf9459e93b19765c6801ddeccadbb160a1e",`<br />&nbsp;&nbsp;`"confirmations": 392076,`<br />&nbsp;&nbsp;`"height": 100000,`<br />&nbsp;&nbsp;`"version": 268435456,`<br />&nbsp;&nbsp;`"versionHex": 10000000,`<br />&nbsp;&nbsp;`"merkleroot": "d574f343976d8e70d91cb278d21044dd8a396019e6db70755a0a50e4783dba38",`<br />&nbsp;&nbsp;`"time": 1376123972,`<br />&nbsp;&nbsp;`"nonce": 1005240617,`<br />&nbsp;&nbsp;`"bits": "1c00f127",`<br />&nbsp;&nbsp;`"difficulty": 271.75767393,`<br />&nbsp;&nbsp;`"previousblockhash": "1db9b31bc22479d4e4f7c80b2b43767031d62a6eee992801c950389e8557f8de",`<br />&nbsp;&nbsp;`"nextblockhash": "0000000000629d100db387f37d0f37c51118f250fb0946310a8c37316cbc4028"`<br />`}`|

***

|   |   |
|---|---|
|Method|getconnectioncount|
|Parameters|None|
|Description|回傳與其他對等節點的活動連接數量|
|Returns|numeric|
|Example Return|`8`|

***

|   |   |
|---|---|
|Method|getdifficulty|
|Parameters|None|
|Description|回傳工作量證明難度，以最小難度的倍數表示。|
|Returns|numeric|
|Example Return|`4329637.71098248`|

***

|   |   |
|---|---|
|Method|getgenerate|
|Parameters|None|
|Description|回傳伺服器是否設定為產生硬幣（挖礦）。|
|Returns|`false` (boolean)|

***

|   |   |
|---|---|
|Method|gethashespersec|
|Parameters|None|
|Description|回傳產生硬幣（挖礦）時的近期每秒雜湊值效能測量。|
|Returns|`0` (numeric)|

***

|   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|---|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Method| getinfo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|Parameters| None                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|Description| 回傳包含各種狀態資訊的 JSON 物件。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|Notes| 注意：由於 abec 不包含錢包功能，因此不會回傳錢包相關欄位。請參閱 abewallet 中的 getinfo，瞭解包含該資訊的版本。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|Returns| `{ (json object)`<br />&nbsp;&nbsp;`"version": n,  (numeric) the version of the block`<br />&nbsp;&nbsp;`"protocolversion": n,  (numeric) the latest supported protocol version`<br />&nbsp;&nbsp;`"blocks": n,  (numeric) the number of blocks processed`<br />&nbsp;&nbsp;`"timeoffset": n,  (numeric) the time offset`<br />&nbsp;&nbsp;`"connections": n,  (numeric) the number of connected peers`<br />&nbsp;&nbsp;`"proxy": "host:port",  (string) the proxy used by the server`<br />&nbsp;&nbsp;`"difficulty": n.nn,  (numeric) the current target difficulty`<br />&nbsp;&nbsp;`"testnet": true or false,  (boolean) whether or not server is using testnet`<br />&nbsp;&nbsp;`"relayfee": n.nn,  (numeric) the minimum relay fee for non-free transactions in abe/KB`<br />`}` |
|Example Return| `{`<br />&nbsp;&nbsp;`"version": 110000`<br />&nbsp;&nbsp;`"protocolversion": 70001,  `<br />&nbsp;&nbsp;`"blocks": 298963,`<br />&nbsp;&nbsp;`"timeoffset": 0,`<br />&nbsp;&nbsp;`"connections": 17,`<br />&nbsp;&nbsp;`"proxy": "",`<br />&nbsp;&nbsp;`"difficulty": 8000872135.97,`<br />&nbsp;&nbsp;`"testnet": false,`<br />&nbsp;&nbsp;`"relayfee": 0.00001,`<br />`}`                                                                                                                                                                                                                                                                                                                                                                                                                 

***

|   |   |
|---|---|
|Method|getnetworkhashps|
|Parameters|1. blocks (numeric, optional, default=200) - 區塊數量，或 -1 表示自上次難度變更以來的區塊<br />2. height (numeric, optional, default=-1) - 以此高度結束執行估算，或 -1 表示目前最佳鏈區塊高度|
|Description|回傳參數提供的區塊高度的估計網路每秒雜湊值。|
|Returns|numeric|
|Example Return|`11341`|


***

|   |   |
|---|---|
|Method|getrawtransaction|
|Parameters|1. transaction hash (string, required) - 交易的雜湊值<br />2. verbose (int, optional, default=0) - 指定交易以 JSON 物件而非十六進位編碼字串回傳|
|Description|根據給定的雜湊值回傳交易資訊。|
|Returns (verbose=0)|`"data" (string) hex-encoded bytes of the serialized transaction`|
|Returns (verbose=1)|`{ (json object)`<br />&nbsp;&nbsp;`"hex": "data",  (string) hex-encoded transaction`<br />&nbsp;&nbsp;`"txid": "hash",  (string) the hash of the transaction`<br />&nbsp;&nbsp;`"hash": n, (string) the hash of the transaction`<br />&nbsp;&nbsp;`"size": n,  (numeric) the size of transaction`<br />&nbsp;&nbsp;`"fullsize": n,  (numeric) the full size of transaction`<br />&nbsp;&nbsp;`"version": (numeric) the version of the transaction`<br />&nbsp;&nbsp;`"vin": [  (array of json objects) the transaction inputs as json objects`<br />&nbsp;&nbsp;`{ (json object)`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"serialnumber": "string", (string) the token of a transaction output`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"prevutxoring": { (json object) the data strcut of transaction output set`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"version":  (numeric) the version of ring data struct`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"blockhhashs": ["array of hash string",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `hash1`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`hash2`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`hash3`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`] `<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"outpoints":[ "array of json object",`<br />&nbsp;&nbsp;&nbsp;&nbsp;` (json object) `<br />&nbsp;&nbsp;&nbsp;&nbsp;`"txid":"hash",  (string) the hash of the transaction`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"index":n, (numeric) the index of output in transaction`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}, ...`<br />&nbsp;&nbsp;&nbsp;&nbsp;`],`<br />&nbsp;&nbsp;`]`<br />&nbsp;&nbsp;`"vout": [  (array of json objects) the transaction outputs as json objects`<br />&nbsp;&nbsp;&nbsp;&nbsp;`{ (json object)`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"n": n, (numeric) the index of this transaction output`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"script": hex, (string) the script of address and value`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}, ...`<br />&nbsp;&nbsp;`]`<br />`"fee": n, fee of transaction,`<br />`"witness": hex, (string) witness for verify transaction,` <br />`"blockhash": hex,(string) hash of block which contain the transaction,`<br />`"confirmations": n, (numeric) the number of confirmations`<br />`"time": n, (numeric) the timestamp of transaction`<br />`"blocktime": n, (numeric) the timestamp of transaction`<br />`}`|
|Example Return (verbose=0)|`"010000000104be666c7053ef26c6110597dad1c1e81b5e6be53d17a8b9d0b34772054bac60000000`<br />`008c493046022100cb42f8df44eca83dd0a727988dcde9384953e830b1f8004d57485e2ede1b9c8f`<br />`022100fbce8d84fcf2839127605818ac6c3e7a1531ebc69277c504599289fb1e9058df0141045a33`<br />`76eeb85e494330b03c1791619d53327441002832f4bd618fd9efa9e644d242d5e1145cb9c2f71965`<br />`656e276633d4ff1a6db5e7153a0a9042745178ebe0f5ffffffff0280841e00000000001976a91406`<br />`...`<br />`f1b6703d3f56427bfcfd372f952d50d04b64bd88ac4dd52700000000001976a9146b63f291c295ee`<br />`abd9aee6be193ab2d019e7ea7088ac00000000`<br /><font color="orange">**為顯示目的而加入的換行符號。實際回傳不包含換行符號。**</font>|
|Example Return (verbose=1)|`{`<br />&nbsp;&nbsp;`"hex": "..."`<br />&nbsp;&nbsp;`"txid": "59a2a33c282bada2dc4b612979178e5f924d30c7ca4dbab4fac0960454e938ec",`<br />&nbsp;&nbsp;`"hash": "59a2a33c282bada2dc4b612979178e5f924d30c7ca4dbab4fac0960454e938ec",`<br />&nbsp;&nbsp;`"size": 20685,`<br />&nbsp;&nbsp;`"fullsize": 79958,`<br />&nbsp;&nbsp;`"version":1,`<br />&nbsp;&nbsp;`"vin": [ `<br />&nbsp;&nbsp;`{`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"serialnumber": "string", (string) the token of a transaction output`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"prevutxoring": { (json object) the data strcut of transaction output set`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"version":  0,`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"blockhhashs": ["array of hash string",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `"000000000000000000000000000000000000000000000000000000006a000000"`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"00000000000000000000000000000000000000000000000088ab5c62532a8a35"`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"0000000000000000000000000000000000000000000000000000000000000000"`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`] `<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"outpoints":[ `<br />&nbsp;&nbsp;&nbsp;&nbsp;`"txid":0000000000000000000000000000000000000000000000000000000000000000,`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"index":0`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}, ...`<br />&nbsp;&nbsp;&nbsp;&nbsp;`],`<br />&nbsp;&nbsp;`]`<br />&nbsp;&nbsp;`"vout": [`<br />&nbsp;&nbsp;&nbsp;&nbsp;`{ (json object)`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"n": 0`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"script": ...`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}, ...`<br />&nbsp;&nbsp;`]`<br />`"fee": n, fee of transaction,`<br />`"witness": ...` <br />`"blockhash": 1db9b31bc22479d4e4f7c80b2b43767031d62a6eee992801c950389e8557f8de`<br />`"confirmations": 2,`<br />`"time": 1659858927,`<br />`"blocktime": 1659858927,`<br />`}`|

***

|   |   |
|---|---|
|Method|help|
|Parameters|1. command (string, optional) - 要取得協助的指令|
|Description|回傳所有指令清單或指定指令的協助。<br />當沒有指定 `command` 參數時，回傳可用指令清單<br />當 `command` 是有效方法時，回傳該方法的協助文字。|
|Returns|string|
|Example Return|getblockcount<br />Returns a numeric for the number of blocks in the longest block chain.|

***

|   |   |
|---|---|
|Method|ping|
|Parameters|None|
|Description|將 ping 排入佇列以發送給每個已連接的對等節點。<br />Ping 時間透過 getpeerinfo 的 `pingtime` 和 `pingwait` 欄位提供。|
|Returns|無回傳|

## 6. 範例程式碼

本節提供了用各種語言與 JSON-RPC API 互動的範例程式碼。

- Go
- node.js

### 6.1 Go

本節提供了使用 Go 語言和 rpcclient 套件透過 RPC 介面的範例。

* 使用 getblockcount 檢索目前區塊高度
* 使用 getblock 檢索創世區塊
* 使用 notifyblocks 接收 blockconnected 和 blockdisconnected 通知（僅限 Websocket）

#### 6.1.1 使用 getblockcount 檢索目前區塊高度

以下是一個範例 Go 應用程式，它使用 rpcclient 套件透過 Websockets 連接到 abec 實例，發出 getblockcount 指令以檢索目前區塊高度，並顯示出來。

```Go
package main

import (
	"io/ioutil"
	"log"
	"path/filepath"

	"github.com/abesuite/abec/rpcclient"
	"github.com/abesuite/abeutil"
)

func main() {
	// Load the certificate for the TLS connection which is automatically
	// generated by abec when it starts the RPC server and doesn't already
	// have one.
	abecHomeDir := abeutil.AppDataDir("abec", false)
	certs, err := ioutil.ReadFile(filepath.Join(abecHomeDir, "rpc.cert"))
	if err != nil {
		log.Fatal(err)
	}

	// Create a new RPC client using websockets.  Since this example is
	// not long-lived, the connection will be closed as soon as the program
	// exits.
	connCfg := &rpcclient.ConnConfig{
		Host:         "localhost:8667",
		Endpoint:     "ws",
		User:         "yourrpcuser",
		Pass:         "yourrpcpass",
		Certificates: certs,
	}
	client, err := rpcclient.New(connCfg, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Shutdown()

	// Query the RPC server for the current block count and display it.
	blockCount, err := client.GetBlockCount()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Block count: %d", blockCount)
}
```

結果：

```bash
2018/08/27 11:17:27 Block count: 536027
```

#### 6.1.2 使用 getblock 檢索創世區塊

以下是一個範例 Go 應用程式，它使用rpcclient套件透過 Websockets 連接到 abec 實例，發出 getblock 指令以檢索有關創世區塊的資訊，並顯示其中的一些細節。

```Go
package main

import (
	"io/ioutil"
	"log"
	"path/filepath"
	"time"

	"github.com/abesuite/abec/chaincfg/chainhash"
	"github.com/abesuite/abec/rpcclient"
	"github.com/abesuite/abeutil"
)

func main() {
	// Load the certificate for the TLS connection which is automatically
	// generated by abec when it starts the RPC server and doesn't already
	// have one.
	abecHomeDir := abeutil.AppDataDir("abec", false)
	certs, err := ioutil.ReadFile(filepath.Join(abecHomeDir, "rpc.cert"))
	if err != nil {
		log.Fatal(err)
	}

	// Create a new RPC client using websockets.  Since this example is
	// not long-lived, the connection will be closed as soon as the program
	// exits.
	connCfg := &rpcclient.ConnConfig{
		Host:         "localhost:18667",
		Endpoint:     "ws",
		User:         "yourrpcuser",
		Pass:         "yourrpcpass",
		Certificates: certs,
	}
	client, err := rpcclient.New(connCfg, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Shutdown()

	// Query the RPC server for the genesis block using the "getblock"
	// command with the verbose flag set to true and the verboseTx flag
	// set to false.
	genesisHashStr := "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
	blockHash, err := chainhash.NewHashFromStr(genesisHashStr)
	if err != nil {
		log.Fatal(err)
	}
	block, err := client.GetBlockVerbose(blockHash)
	if err != nil {
		log.Fatal(err)
	}

	// Display some details about the returned block.
	log.Printf("Hash: %v\n", block.Hash)
	log.Printf("Previous Block: %v\n", block.PreviousHash)
	log.Printf("Next Block: %v\n", block.NextHash)
	log.Printf("Merkle root: %v\n", block.MerkleRoot)
	log.Printf("Timestamp: %v\n", time.Unix(block.Time, 0).UTC())
	log.Printf("Confirmations: %v\n", block.Confirmations)
	log.Printf("Difficulty: %f\n", block.Difficulty)
	log.Printf("Size (in bytes): %v\n", block.Size)
	log.Printf("Num transactions: %v\n", len(block.Tx))
}
```

結果：

```bash
Hash: 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
Previous Block: 0000000000000000000000000000000000000000000000000000000000000000
Next Block: 00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048
Merkle root: 4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b
Timestamp: 2009-01-03 18:15:05 +0000 UTC
Confirmations: 534323
Difficulty: 1.000000
Size (in bytes): 285
Num transactions: 1
```

#### 6.1.3 使用 notifyblocks 接收 blockconnected 和 blockdisconnected 通知（僅限 Websocket）

以下是一個範例 Go 應用程式，它使用 rpcclient 套件透過 Websockets 與 abec 實例連接，並使用 notifyblocks 註冊 blockconnected 和 blockdisconnected 通知。它還為這些通知設定了處理程式。

```Go
package main

import (
	"io/ioutil"
	"log"
	"path/filepath"
	"time"

	"github.com/abesuite/abec/chaincfg/chainhash"
	"github.com/abesuite/abec/rpcclient"
	"github.com/abesuite/abeutil"
)

func main() {
	// Setup handlers for blockconnected and blockdisconnected
	// notifications.
	ntfnHandlers := rpcclient.NotificationHandlers{
		OnBlockConnected: func(hash *chainhash.Hash, height int32, t time.Time) {
			log.Printf("Block connected: %v (%d) %s", hash, height, t)
		},
		OnBlockDisconnected: func(hash *chainhash.Hash, height int32, t time.Time) {
			log.Printf("Block disconnected: %v (%d) %s", hash, height, t)
		},
	}

	// Load the certificate for the TLS connection which is automatically
	// generated by abec when it starts the RPC server and doesn't already
	// have one.
	abecHomeDir := abeutil.AppDataDir("abec", false)
	certs, err := ioutil.ReadFile(filepath.Join(abecHomeDir, "rpc.cert"))
	if err != nil {
		log.Fatal(err)
	}

	// Create a new RPC client using websockets.
	connCfg := &rpcclient.ConnConfig{
		Host:         "localhost:8667",
		Endpoint:     "ws",
		User:         "yourrpcuser",
		Pass:         "yourrpcpass",
		Certificates: certs,
	}
	client, err := rpcclient.New(connCfg, &ntfnHandlers)
	if err != nil {
		log.Fatal(err)
	}

	// Register for blockconnected and blockdisconneted notifications.
	if err := client.NotifyBlocks(); err != nil {
		client.Shutdown()
		log.Fatal(err)
	}

	// For this example, gracefully shutdown the client after 10 seconds.
	// Ordinarily when to shutdown the client is highly application
	// specific.
	log.Println("Client shutdown in 10 seconds...")
	time.AfterFunc(time.Second*10, func() {
		log.Println("Client shutting down...")
		client.Shutdown()
		log.Println("Client shutdown complete.")
	})

	// Wait until the client either shuts down gracefully (or the user
	// terminates the process with Ctrl+C).
	client.WaitForShutdown()
}
```

範例輸出：

```
2018/08/27 10:35:43 Client shutdown in 10 seconds...
2018/08/27 10:35:44 Block connected: 00000000000000000003321723557df58914658dc6fd963d547292a0a4797454 (534747) 2018-08-02 06:37:52 +0800 CST
2018/08/27 10:35:47 Block connected: 0000000000000000002e12773b798fc61dffe00ed5c3e89d3c306f8058c51e13 (534748) 2018-08-02 06:39:54 +0800 CST
2018/08/27 10:35:49 Block connected: 0000000000000000001bb311cd849839ce88499b91a201922f55a1cfafabe267 (534749) 2018-08-02 06:44:22 +0800 CST
2018/08/27 10:35:50 Block connected: 00000000000000000019d7296c9b5c175369ad337ec44b76bd4728021a09b864 (534750) 2018-08-02 06:55:44 +0800 CST
2018/08/27 10:35:53 Block connected: 00000000000000000022db98cf47e944ed58ca450c819e8fef8f8c71ca5d9901 (534751) 2018-08-02 06:57:39 +0800 CST
2018/08/27 10:35:53 Client shutting down...
2018/08/27 10:35:53 Client shutdown complete.
```

### 6.2. 範例 node.js 程式碼

#### 6.2.1 使用 notifyblocks 來被通知區塊的連接和斷開

以下是範例 node.js 程式碼，它使用 ws（可以透過 `npm install ws` 安裝）來與 abec 實例連接，發出 notifyblocks 以註冊 blockconnected 和 blockdisconnected 通知，並顯示所有傳入訊息。

```javascript
var fs = require('fs');
var WebSocket = require('ws');

// Load the certificate for the TLS connection which is automatically
// generated by abec when it starts the RPC server and doesn't already
// have one.
var cert = fs.readFileSync('/path/to/abec/appdata/rpc.cert');
var user = "yourusername";
var password = "yourpassword";


// Initiate the websocket connection.  The abec generated certificate acts as
// its own certificate authority, so it needs to be specified in the 'ca' array
// for the certificate to properly validate.
var ws = new WebSocket('wss://127.0.0.1:8667/ws', {
  headers: {
    'Authorization': 'Basic '+new Buffer(user+':'+password).toString('base64')
  },
  cert: cert,
  ca: [cert]
});
ws.on('open', function() {
    console.log('CONNECTED');
    // Send a JSON-RPC command to be notified when blocks are connected and
    // disconnected from the chain.
    ws.send('{"jsonrpc":"1.0","id":"0","method":"notifyblocks","params":[]}');
});
ws.on('message', function(data, flags) {
    console.log(data);
});
ws.on('error', function(derp) {
  console.log('ERROR:' + derp);
})
ws.on('close', function(data) {
  console.log('DISCONNECTED');
})
```