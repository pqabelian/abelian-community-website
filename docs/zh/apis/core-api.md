---
outline: deep
---

# Abelian 核心 API

## 1. 概览

abec 提供了一个 JSON-RPC API。在 abec 中，RPC 的服务方式有一些特点：

- abec 默认是安全的，这意味着 RPC 连接默认启用了 TLS；
- abec 通过 HTTP POST 请求和 Websockets 提供 API 访问权限。

Websockets 是 abec RPC 首选的传输方式，被像 abewallet 这样的应用程序用于与 abec 的进程间通信。abec 的 websocket 连接端点是 `wss://your_ip_or_domain:8667/ws`。

除了标准 API 之外，还在开发一种扩展 API，这种 API 专为使用 Websockets 的客户端设计。目前，这个 API 试图补充在开发 abewallet 期间发现标准 API 中缺失的功能。

应当指出，当前的 API 列表并不稳定，虽然标准API被设计为稳定的，但 Websocket 扩展 API 应被视为正在进行中、不完整且易于变动（包括增加和删除）的工作。

## 2. HTTP POST 与 Websockets 对比

abec RPC 服务器支持 HTTP POST 请求和首选的 Websockets。本文档中描述的所有标准方法和扩展方法都可以通过这两种方式访问。正如名称所示，特定于 Websocket 的扩展方法只能在通过 Websockets 连接时访问。

如概述中所提到的，abec 的 websocket 连接端点为 `wss://your_ip_or_domain:8667/ws`。

在 JSON-RPC API 方面，这两种传输方式最重要的区别是：

|   |HTTP POST Requests|Websockets|
|---|------------------|----------|
|Allows multiple requests across a single connection|No|Yes|
|Supports asynchronous notifications|No|Yes|
|Scales well with large numbers of requests|No|Yes|

## 3. 认证

### 3.1 认证概述

在建立与 abec RPC 服务器的连接之前，需要以下认证详情：

* **rpcuser** 是为 abec RPC 服务器配置的具有完全访问权限的用户名
* **rpcpass** 是为 abec RPC 服务器配置的完全访问密码
* **rpclimituser** 是为 abec RPC 服务器配置的有限用户名
* **rpclimitpass** 是为 abec RPC 服务器配置的限制密码
* **rpccert** 是 abec 服务器配置的 PEM 编码 X.509 证书（公钥）。它由 abec 自动生成，并放置在 abec 主目录中（通常在 Windows 上是 `%LOCALAPPDATA%\abed`，在类 POSIX 操作系统上是 `~/.abec`）

**注意：** 如上所述，abec 默认是安全的，这意味着除非配置了 **rpcuser** 和 **rpcpass** 以及/或者 **rpclimituser** 和 **rpclimitpass**，否则 RPC 服务器不会运行，并且所有连接都使用 TLS 认证。

根据您使用的是哪种连接事务，您可以选择两种互斥方法中的一种。

- 使用 HTTP 授权头 - HTTP POST 请求和 Websockets
- 使用 JSON-RPC 的 “authenticate” 命令 - 仅限 Websockets

### 3.2 HTTP 基本访问认证

abec RPC 服务器使用 HTTP 基本访问认证，具体采用上述的 **rpcuser** 和 **rpcpass**。如果提供的凭据无效，一旦建立连接你将会被立即断开。

### 3.3 JSON-RPC 认证命令（仅限 Websocket）

虽然 HTTP 基本访问认证方法是首选方法，但并不总是能够从 WebSockets 设置 HTTP 头。在那种情况下，你将需要使用 authenticate JSON-RPC 方法。

认证命令必须是连接到 websocket 后发送的第一个命令。在认证之前发送任何其他命令、提供无效凭据，或者在已经认证的情况下尝试再次认证，都将导致 websocket 立即关闭。

## 4. 命令行工具

abec 附带了一个名为 `abectl` 的独立工具，可以在根据上述认证部分的信息配置后，通过 HTTP POST 请求向 abec 发出这些 RPC 命令。

## 5. 标准方法

### 5.1 方法概述

以下是 RPC 方法及其当前状态的概览。点击方法名称以获取更多详情，如参数和返回信息。

|#|Method|Safe for limited user?| Description                                                                                                                                                                                                                                                                             |
|---|------|----------------|--------------------------------------------------------------|
|1| [getbestblockhash](#getbestblockhash)|Y| Returns the hash of the of the best (most recent) block in the longest blockchain.                                                                                                                                                                                                                     |
|2| [getblockabe](#getblock)|Y| Returns information about a block given its hash.                                                                                                                                                                                          |
|3| [getblockcount](#getblockcount)|Y| Returns the number of blocks in the longest block chain.                                                                                                                                                                                                     |
|4| [getblockhash](#getblockhash)|Y| Returns hash of the block in best block chain at the given height.                                                                                                                                                                                                          |
|5| [getblockheader](#getblockheader)|Y| Returns the block header of the block.                                                                                                                                                                                                                            |
|6|[getconnectioncount](#getconnectioncount)|N| Returns the number of active connections to other peers.                                                                                                                                                                                                     |
|7| [getdifficulty](#getdifficulty)|Y| Returns the proof-of-work difficulty as a multiple of the minimum difficulty.                                                                                                                                                                                                                                      |
|8| [getgenerate](#getgenerate)|N| Return if the server is set to generate coins (mine) or not.                                                                                                                                                                                                                               |
|9|[gethashespersec](#gethashespersec)|N| Returns a recent hashes per second performance measurement while generating coins (mining).                                                                                                                                                                                                                      |
|10|[getinfo](#getinfo)|Y| Returns a JSON object containing various state info.                                                                                                                                                                                                                                                  |
|11| [getnetworkhashps](#getnetworkhashps)|Y| Returns the estimated network hashes per second for the block heights provided by the parameters.                                                                                                                                                                                                                               |
|12|[getrawtransaction](#getrawtransaction)|Y| Returns information about a transaction given its hash.                                                                                                                                                                                                           |
|13|[help](#help)|Y| Returns a list of all commands or help for a specified command.                                                                                                                                                                                                                           |
|14|[ping](#ping)|N| Queues a ping to be sent to each connected peer.                                                                                                                                                                                               |
|15| [setgenerate](#setgenerate) |N| Set the server to generate coins (mine) or not.<br/>NOTE: Since abedabec does not have the wallet integrated to provide payment addresses, abedabec must be configured via the `--miningaddr` option to provide which payment addresses to pay created blocks to for this RPC to function.                                                                                                                                                                                                                                  |
|16| [stop](#stop)|N| Shutdown abec.                                                                                                                              

### 5.2 方法详情

|   |   |
|---|---|
|Method|getbestblockhash|
|Parameters|None|
|Description|Returns the hash of the of the best (most recent) block in the longest block chain.|
|Returns|string|
|Example Return|`0000000000000001f356adc6b29ab42b59f913a396e170f80190dba615bd1e60`|

***

|   |   |
|---|---|
|Method|getblockabe|
|Parameters|1. block hash (string, required) - the hash of the block<br />2. verbosity (int, optional, default=1) - Specifies whether the block data should be returned as a hex-encoded string (0), as parsed data with a slice of TXIDs (1), or as parsed data with parsed transaction data (2).
|Description|Returns information about a block given its hash.|
|Returns (verbosity=0)|`"data" (string) hex-encoded bytes of the serialized block`|
|Returns (verbosity=1)|`{ (json object)`<br />&nbsp;&nbsp;`"hash": "blockhash",  (string) the hash of the block (same as provided)`<br />&nbsp;&nbsp;`"confirmations": n,  (numeric) the number of confirmations`<br />&nbsp;&nbsp;`"size", n (numeric) the size of the block without witness data`<br />&nbsp;&nbsp;`"fullsize": n,  (numeric) the size of the block`<br />&nbsp;&nbsp;`"height": n,  (numeric) the height of the block in the block chain`<br />&nbsp;&nbsp;`"version": n,  (numeric) the block version`<br />&nbsp;&nbsp;`"versionHex": n,  (hexadecimal) the block version`<br />&nbsp;&nbsp;`"merkleroot": "hash",  (string) root hash of the merkle tree`<br />&nbsp;&nbsp;`"tx": [ (json array of string) the transaction hashes`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"transactionhash",  (string) hash of the parent transaction`<br />&nbsp;&nbsp;&nbsp;&nbsp;`...`<br />&nbsp;&nbsp;`]`<br />&nbsp;&nbsp;`"time": n,  (numeric) the block time in seconds since 1 Jan 1970 GMT`<br />&nbsp;&nbsp;`"nonce": n,  (numeric) the block nonce`<br />&nbsp;&nbsp;`"bits", n,  (numeric) the bits which represent the block difficulty`<br />&nbsp;&nbsp;`difficulty: n.nn,  (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty`<br />&nbsp;&nbsp;`"previousblockhash": "hash",  (string) the hash of the previous block`<br />&nbsp;&nbsp;`"nextblockhash": "hash",  (string) the hash of the next block (only if there is one)`<br />`}`|
|Returns (verbosity=2)|`{ (json object)`<br />&nbsp;&nbsp;`"hash": "blockhash",  (string) the hash of the block (same as provided)`<br />&nbsp;&nbsp;`"confirmations": n,  (numeric) the number of confirmations`<br />&nbsp;&nbsp;`"size", n (numeric) the size of the block without witness data`<br />&nbsp;&nbsp;`"fullsize": n,  (numeric) the size of the block`<br />&nbsp;&nbsp;`"weight": n, (numeric) value of the weight metric`<br />&nbsp;&nbsp;`"height": n,  (numeric) the height of the block in the block chain`<br />&nbsp;&nbsp;`"version": n,  (numeric) the block version`<br />&nbsp;&nbsp;`"versionHex": n,  (hexadecimal) the block version`<br />&nbsp;&nbsp;`"merkleroot": "hash",  (string) root hash of the merkle tree`<br />&nbsp;&nbsp;`"rawtx": [ (array of json objects) the transactions as json objects`<br />&nbsp;&nbsp;&nbsp;&nbsp;`(see getrawtransaction json object details)`<br />&nbsp;&nbsp;`]`<br />&nbsp;&nbsp;`"time": n,  (numeric) the block time in seconds since 1 Jan 1970 GMT`<br />&nbsp;&nbsp;`"nonce": n,  (numeric) the block nonce`<br />&nbsp;&nbsp;`"bits", n,  (numeric) the bits which represent the block difficulty`<br />&nbsp;&nbsp;`difficulty: n.nn,  (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty`<br />&nbsp;&nbsp;`"previousblockhash": "hash",  (string) the hash of the previous block`<br />&nbsp;&nbsp;`"nextblockhash": "hash",  (string) the hash of the next block`<br />`}`|
|Example Return (verbosity=0)|`"010000000000000000000000000000000000000000000000000000000000000000000000`<br />`3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a29ab5f49`<br />`ffff001d1dac2b7c01010000000100000000000000000000000000000000000000000000`<br />...<br />`00000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f`<br />`4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f`<br />`6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104`<br />`678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f`<br />`4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000"`<br /><font color="orange">**Newlines added for display purposes.  The actual return does not contain newlines.**</font>|
|Example Return (verbosity=1)|`{`<br />&nbsp;&nbsp;`"hash": "1db9b31bc22479d4e4f7c80b2b43767031d62a6eee992801c950389e8557f8de",`<br />&nbsp;&nbsp;`"confirmations": 277113,`<br />&nbsp;&nbsp;`"size": 20799,`<br />&nbsp;&nbsp;`"height": 80039,`<br />&nbsp;&nbsp;`"version": 268435456,`<br />&nbsp;&nbsp;`"versionHex": 10000000,`<br />&nbsp;&nbsp;`"merkleroot": "a96353f19793ba890a3d7aa31ed6bb101dbe36941d224af8b0af37ca9dd585ff",`<br />&nbsp;&nbsp;`"tx": [`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"59a2a33c282bada2dc4b612979178e5f924d30c7ca4dbab4fac0960454e938ec"`<br />&nbsp;&nbsp;`],`<br />&nbsp;&nbsp;`"time": 1659858927,`<br />&nbsp;&nbsp;`"nonce": 0,`<br />&nbsp;&nbsp;`"bits": "207fffff",`<br />&nbsp;&nbsp;`"difficulty": 1,`<br />&nbsp;&nbsp;`"previousblockhash": "9fe1537074faaca21b2f8378be7eaf115cc20bc57ae140d2891c04f1a6e362f9",`<br />&nbsp;&nbsp;`"nextblockhash": "00000198246f79ebf50cfad8b13327d9568f9ea87c2c1a605aa7eaf3afb4f3ec"`<br />`}`|

***

|   |   |
|---|---|
|Method|getblockcount|
|Parameters|None|
|Description|Returns the number of blocks in the longest block chain.|
|Returns|numeric|
|Example Return|`276820`|

***

|   |   |
|---|---|
|Method|getblockhash|
|Parameters|1. block height (numeric, required)|
|Description|Returns hash of the block in best block chain at the given height.|
|Returns|string|
|Example Return|`00000198246f79ebf50cfad8b13327d9568f9ea87c2c1a605aa7eaf3afb4f3ec`|

***

|   |   |
|---|---|
|Method|getblockheader|
|Parameters|1. block hash (string, required) - the hash of the block<br />2. verbose (boolean, optional, default=true) - specifies the block header is returned as a JSON object instead of a hex-encoded string|
|Description|Returns hex-encoded bytes of the serialized block header.|
|Returns (verbose=false)|`"data" (string) hex-encoded bytes of the serialized block`|
|Returns (verbose=true)|`{ (json object)`<br />&nbsp;&nbsp;`"hash": "blockhash", (string) the hash of the block (same as provided)`<br />&nbsp;&nbsp;`"confirmations": n,  (numeric) the number of confirmations`<br />&nbsp;&nbsp;`"height": n, (numeric) the height of the block in the block chain`<br />&nbsp;&nbsp;`"version": n,  (numeric) the block version`<br />&nbsp;&nbsp;`"versionHex": n,  (hexadecimal) the block version`<br />&nbsp;&nbsp;`"merkleroot": "hash",  (string) root hash of the merkle tree`<br />&nbsp;&nbsp;`"time": n,  (numeric) the block time in seconds since 1 Jan 1970 GMT`<br />&nbsp;&nbsp;`"nonce": n,  (numeric) the block nonce`<br />&nbsp;&nbsp;`"bits": n,  (numeric) the bits which represent the block difficulty`<br />&nbsp;&nbsp;`"difficulty": n.nn,  (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty`<br />&nbsp;&nbsp;`"previousblockhash": "hash",  (string) the hash of the previous block`<br />&nbsp;&nbsp;`"nextblockhash": "hash",  (string) the hash of the next block (only if there is one)`<br />`}`|
|Example Return (verbose=false)|`"0200000035ab154183570282ce9afc0b494c9fc6a3cfea05aa8c1add2ecc564900000000`<br />`38ba3d78e4500a5a7570dbe61960398add4410d278b21cd9708e6d9743f374d544fc0552`<br />`27f1001c29c1ea3b"`<br /><font color="orange">**Newlines added for display purposes.  The actual return does not contain newlines.**</font>|
|Example Return (verbose=true)|`{`<br />&nbsp;&nbsp;`"hash": "00000000009e2958c15ff9290d571bf9459e93b19765c6801ddeccadbb160a1e",`<br />&nbsp;&nbsp;`"confirmations": 392076,`<br />&nbsp;&nbsp;`"height": 100000,`<br />&nbsp;&nbsp;`"version": 268435456,`<br />&nbsp;&nbsp;`"versionHex": 10000000,`<br />&nbsp;&nbsp;`"merkleroot": "d574f343976d8e70d91cb278d21044dd8a396019e6db70755a0a50e4783dba38",`<br />&nbsp;&nbsp;`"time": 1376123972,`<br />&nbsp;&nbsp;`"nonce": 1005240617,`<br />&nbsp;&nbsp;`"bits": "1c00f127",`<br />&nbsp;&nbsp;`"difficulty": 271.75767393,`<br />&nbsp;&nbsp;`"previousblockhash": "1db9b31bc22479d4e4f7c80b2b43767031d62a6eee992801c950389e8557f8de",`<br />&nbsp;&nbsp;`"nextblockhash": "0000000000629d100db387f37d0f37c51118f250fb0946310a8c37316cbc4028"`<br />`}`|

***

|   |   |
|---|---|
|Method|getconnectioncount|
|Parameters|None|
|Description|Returns the number of active connections to other peers|
|Returns|numeric|
|Example Return|`8`|

***

|   |   |
|---|---|
|Method|getdifficulty|
|Parameters|None|
|Description|Returns the proof-of-work difficulty as a multiple of the minimum difficulty.|
|Returns|numeric|
|Example Return|`4329637.71098248`|

***

|   |   |
|---|---|
|Method|getgenerate|
|Parameters|None|
|Description|Return if the server is set to generate coins (mine) or not.|
|Returns|`false` (boolean)|

***

|   |   |
|---|---|
|Method|gethashespersec|
|Parameters|None|
|Description|Returns a recent hashes per second performance measurement while generating coins (mining).|
|Returns|`0` (numeric)|

***

|   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|---|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Method| getinfo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|Parameters| None                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|Description| Returns a JSON object containing various state info.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|Notes| NOTE: Since abec does NOT contain wallet functionality, wallet-related fields are not returned.  See getinfo in abewallet for a txVersion which includes that information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|Returns| `{ (json object)`<br />&nbsp;&nbsp;`"version": n,  (numeric) the version of the block`<br />&nbsp;&nbsp;`"protocolversion": n,  (numeric) the latest supported protocol txVersion`<br />&nbsp;&nbsp;`"blocks": n,  (numeric) the number of blocks processed`<br />&nbsp;&nbsp;`"timeoffset": n,  (numeric) the time offset`<br />&nbsp;&nbsp;`"connections": n,  (numeric) the number of connected peers`<br />&nbsp;&nbsp;`"proxy": "host:port",  (string) the proxy used by the server`<br />&nbsp;&nbsp;`"difficulty": n.nn,  (numeric) the current target difficulty`<br />&nbsp;&nbsp;`"testnet": true or false,  (boolean) whether or not server is using testnet`<br />&nbsp;&nbsp;`"relayfee": n.nn,  (numeric) the minimum relay fee for non-free transactions in abe/KB`<br />`}` |
|Example Return| `{`<br />&nbsp;&nbsp;`"version": 110000`<br />&nbsp;&nbsp;`"protocolversion": 70001,  `<br />&nbsp;&nbsp;`"blocks": 298963,`<br />&nbsp;&nbsp;`"timeoffset": 0,`<br />&nbsp;&nbsp;`"connections": 17,`<br />&nbsp;&nbsp;`"proxy": "",`<br />&nbsp;&nbsp;`"difficulty": 8000872135.97,`<br />&nbsp;&nbsp;`"testnet": false,`<br />&nbsp;&nbsp;`"relayfee": 0.00001,`<br />`}`                                                                                                                                                                                                                                                                                                                                                                                                                 

***

|   |   |
|---|---|
|Method|getnetworkhashps|
|Parameters|1. blocks (numeric, optional, default=200) - The number of blocks, or -1 for blocks since last difficulty change<br />2. height (numeric, optional, default=-1) - Perform estimate ending with this height or -1 for current best chain block height|
|Description|Returns the estimated network hashes per second for the block heights provided by the parameters.|
|Returns|numeric|
|Example Return|`11341`|


***

|   |   |
|---|---|
|Method|getrawtransaction|
|Parameters|1. transaction hash (string, required) - the hash of the transaction<br />2. verbose (int, optional, default=0) - specifies the transaction is returned as a JSON object instead of hex-encoded string|
|Description|Returns information about a transaction given its hash.|
|Returns (verbose=0)|`"data" (string) hex-encoded bytes of the serialized transaction`|
|Returns (verbose=1)|`{ (json object)`<br />&nbsp;&nbsp;`"hex": "data",  (string) hex-encoded transaction`<br />&nbsp;&nbsp;`"txid": "hash",  (string) the hash of the transaction`<br />&nbsp;&nbsp;`"hash": n, (string) the hash of the transaction`<br />&nbsp;&nbsp;`"size": n,  (numeric) the size of transaction`<br />&nbsp;&nbsp;`"fullsize": n,  (numeric) the full size of transaction`<br />&nbsp;&nbsp;`"version": (numeric) the version of the transaction`<br />&nbsp;&nbsp;`"vin": [  (array of json objects) the transaction inputs as json objects`<br />&nbsp;&nbsp;`{ (json object)`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"serialnumber": "string", (string) the token of a transaction output`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"prevutxoring": { (json object) the data strcut of transaction output set`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"version":  (numeric) the version of ring data struct`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"blockhhashs": ["array of hash string",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `hash1`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`hash2`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`hash3`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`] `<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"outpoints":[ "array of json object",`<br />&nbsp;&nbsp;&nbsp;&nbsp;` (json object) `<br />&nbsp;&nbsp;&nbsp;&nbsp;`"txid":"hash",  (string) the hash of the transaction`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"index":n, (numeric) the index of output in transaction`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}, ...`<br />&nbsp;&nbsp;&nbsp;&nbsp;`],`<br />&nbsp;&nbsp;`]`<br />&nbsp;&nbsp;`"vout": [  (array of json objects) the transaction outputs as json objects`<br />&nbsp;&nbsp;&nbsp;&nbsp;`{ (json object)`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"n": n, (numeric) the index of this transaction output`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"script": hex, (string) the script of address and value`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}, ...`<br />&nbsp;&nbsp;`]`<br />`"fee": n, fee of transaction,`<br />`"witness": hex, (string) witness for verify transaction,` <br />`"blockhash": hex,(string) hash of block which contain the transaction,`<br />`"confirmations": n, (numeric) the number of confirmations`<br />`"time": n, (numeric) the timestamp of transaction`<br />`"blocktime": n, (numeric) the timestamp of transaction`<br />`}`|
|Example Return (verbose=0)|`"010000000104be666c7053ef26c6110597dad1c1e81b5e6be53d17a8b9d0b34772054bac60000000`<br />`008c493046022100cb42f8df44eca83dd0a727988dcde9384953e830b1f8004d57485e2ede1b9c8f`<br />`022100fbce8d84fcf2839127605818ac6c3e7a1531ebc69277c504599289fb1e9058df0141045a33`<br />`76eeb85e494330b03c1791619d53327441002832f4bd618fd9efa9e644d242d5e1145cb9c2f71965`<br />`656e276633d4ff1a6db5e7153a0a9042745178ebe0f5ffffffff0280841e00000000001976a91406`<br />`...`<br />`f1b6703d3f56427bfcfd372f952d50d04b64bd88ac4dd52700000000001976a9146b63f291c295ee`<br />`abd9aee6be193ab2d019e7ea7088ac00000000`<br /><font color="orange">**Newlines added for display purposes.  The actual return does not contain newlines.**</font>|
|Example Return (verbose=1)|`{`<br />&nbsp;&nbsp;`"hex": "..."`<br />&nbsp;&nbsp;`"txid": "59a2a33c282bada2dc4b612979178e5f924d30c7ca4dbab4fac0960454e938ec",`<br />&nbsp;&nbsp;`"hash": "59a2a33c282bada2dc4b612979178e5f924d30c7ca4dbab4fac0960454e938ec",`<br />&nbsp;&nbsp;`"size": 20685,`<br />&nbsp;&nbsp;`"fullsize": 79958,`<br />&nbsp;&nbsp;`"version":1,`<br />&nbsp;&nbsp;`"vin": [ `<br />&nbsp;&nbsp;`{`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"serialnumber": "string", (string) the token of a transaction output`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"prevutxoring": { (json object) the data strcut of transaction output set`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"version":  0,`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"blockhhashs": ["array of hash string",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `"000000000000000000000000000000000000000000000000000000006a000000"`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"00000000000000000000000000000000000000000000000088ab5c62532a8a35"`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"0000000000000000000000000000000000000000000000000000000000000000"`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`] `<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"outpoints":[ `<br />&nbsp;&nbsp;&nbsp;&nbsp;`"txid":0000000000000000000000000000000000000000000000000000000000000000,`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"index":0`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}, ...`<br />&nbsp;&nbsp;&nbsp;&nbsp;`],`<br />&nbsp;&nbsp;`]`<br />&nbsp;&nbsp;`"vout": [`<br />&nbsp;&nbsp;&nbsp;&nbsp;`{ (json object)`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"n": 0`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"script": ...`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}, ...`<br />&nbsp;&nbsp;`]`<br />`"fee": n, fee of transaction,`<br />`"witness": ...` <br />`"blockhash": 1db9b31bc22479d4e4f7c80b2b43767031d62a6eee992801c950389e8557f8de`<br />`"confirmations": 2,`<br />`"time": 1659858927,`<br />`"blocktime": 1659858927,`<br />`}`|

***

|   |   |
|---|---|
|Method|help|
|Parameters|1. command (string, optional) - the command to get help for|
|Description|Returns a list of all commands or help for a specified command.<br />When no `command` parameter is specified, a list of avaialable commands is returned<br />When `command` is a valid method, the help text for that method is returned.|
|Returns|string|
|Example Return|getblockcount<br />Returns a numeric for the number of blocks in the longest block chain.|

***

|   |   |
|---|---|
|Method|ping|
|Parameters|None|
|Description|Queues a ping to be sent to each connected peer.<br />Ping times are provided by getpeerinfo via the `pingtime` and `pingwait` fields.|
|Returns|Nothing|

## 6. 示例代码

本节提供了用各种语言与 JSON-RPC API 交互的示例代码。

- Go
- node.js

### 6.1 Go

本节提供了使用 Go 语言和 rpcclient 包通过 RPC 接口的示例。

* 使用 getblockcount 检索当前区块高度
* 使用 getblock 检索创世区块
* 使用 notifyblocks 接收 blockconnected 和 blockdisconnected 通知（仅限 Websocket）

#### 6.1.1 使用 getblockcount 检索当前区块高度

以下是一个示例 Go 应用程序，它使用 rpcclient 包通过 Websockets 连接到 abec 实例，发出 getblockcount 命令以检索当前区块高度，并显示出来。

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

Which results in:

```bash
2018/08/27 11:17:27 Block count: 536027
```

#### 6.1.2 使用 getblock 检索创世区块

以下是一个示例 Go 应用程序，它使用rpcclient包通过 Websockets 连接到 abec 实例，发出 getblock 命令以检索有关创世区块的信息，并显示其中的一些细节。

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

导致：

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

#### 6.1.3 使用 notifyblocks 接收 blockconnected 和 blockdisconnected 通知（仅限 Websocket）

以下是一个示例 Go 应用程序，它使用 rpcclient 包通过 Websockets 与 abec 实例连接，并使用 notifyblocks 注册 blockconnected 和 blockdisconnected 通知。它还为这些通知设置了处理程序。

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

示例输出：

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

### 6.2. 示例 node.js 代码

#### 6.2.1 使用 notifyblocks 来被通知区块的连接和断开

以下是示例 node.js 代码，它使用 ws（可以通过 `npm install ws` 安装）来与 abec 实例连接，发出 notifyblocks 以注册 blockconnected 和 blockdisconnected 通知，并显示所有传入消息。

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