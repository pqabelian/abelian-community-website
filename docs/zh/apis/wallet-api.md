---
outline: deep
---

# Abelian 钱包 API

## 1. 查询钱包状态和区块链信息

钱包提供以下 API 用于查询钱包状态和区块链信息：

| Name                  | Paramters | Description                                                     |
| --------------------- | --------- | --------------------------------------------------------------- |
| getbalancesabe        | null      | get the balance information of the wallet onwer                 |
| getbestblockhash      | null      | get the best synced block hash information                      |
| help                  | null      | print the help information                                      |
| listallutxoabe        | null      | print all txos which belong wallet                              |
| listimmaturetxoabe    | null      | print all immature txos which belong wallet                     |
| listmaturetxoabe      | null      | print all mature txos which belong wallet                       |
| listunconfirmedtxoabe | null      | print all unconfirmed txos which belong wallet                  |
| listconfirmedtxoabe   | null      | print all confirmed txos which belong wallet                    |
| listconfirmedtxs      | null      | print all confirmed transaction which consumes txos of wallet   |
| listunconfirmedtxs    | null      | print all unconfirmed transaction which consumes txos of wallet |
| listinvalidtxs        | null      | print all invalid transaction which consumes txos of wallet     |

在访问上述钱包API时，应提供 rpcuser 和 rpcpass。

例如： `abectl --rpcuser=[rpcuser in abewallet.conf] --rpcpass=[rpcpass in abewallet.conf] --wallet getbalancesabe`

## 2. 创建转账交易

当钱包运行时，所有者可以使用私密密码短语解锁钱包，然后使用以下API创建转账交易，该交易会自动发送到连接的 ABEC 节点，并随后广播到 Abelian 网络。

**注意：在交易生成期间，可能会生成一个新地址来存储零钱。当交易成功创建后，钱包中地址的最大索引号将被返回。**

| Name               | Paramaters                                                                                                                                             | Description                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| sendtoaddressesabe | `[{"address":"address string","amount":value},`<br/>...<br/>`{"address":"address string","amount":value}]` <br/> scaleToFeeSatPerKb <br/> feeSpecified | create a transaction with assigned pairs of address and amount |

注意："scaleToFeeSatPerKb" 可以不设置，将默认赋值为 1.0。同样地，"feeSpecified" 也可以不设置，将默认赋值为 100。

这两个参数不能同时设置，但如果下一个参数被设置了，前一个参数必须被设置，你可以使用 1.0。

在当前版本中，由于命令行长度的限制，钱包使用一个名为 “arg1” 的文件存储参数，该文件位于 abec 的目录下，例如 `~/Library/Application Support/Abec/arg1`。这意味着创建转账交易的命令将变为如下所示：

`abectl --rpcuser=[rpcuser in abewallet.conf] --rpcpass=[rpcpass in abewallet.conf] --wallet sendtoaddressesabe -`

“arg1” 文件的一个示例如下：

```json
[
  {
    "address": "output_address1",
    "amount": 3000000000
  },
  {
    "address": "output_address2",
    "amount": 4000000000
  }
]
```