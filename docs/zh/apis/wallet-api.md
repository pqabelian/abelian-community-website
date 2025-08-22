---
outline: deep
---

# Abelian 钱包 API

## 1. 查询钱包状态和区块链信息

钱包提供以下 API 用于查询钱包状态和区块链信息：

| 名称                  | 参数             | 描述                                                         |
| --------------------- | ---------------- | ------------------------------------------------------------ |
| getbalancesabe        | null             | 获取钱包拥有者的余额信息                                     |
| getbestblockhash      | null             | 获取当前同步的最佳区块哈希值                                 |
| help                  | null             | 打印帮助信息                                                 |
| listallutxoabe        | null             | 列出所有属于钱包的交易输出（txo）                            |
| listimmaturetxoabe    | null             | 列出所有属于钱包的未成熟交易输出                              |
| listmaturetxoabe      | null             | 列出所有属于钱包的成熟交易输出                                |
| listunconfirmedtxoabe | null             | 列出所有属于钱包的未确认交易输出                                |
| listconfirmedtxoabe   | null             | 列出所有属于钱包的已确认交易输出                                |
| listconfirmedtxs      | null             | 列出所有已确认且消耗交易输出的交易                            |
| listunconfirmedtxs    | null             | 列出所有未确认且消耗交易输出的交易                            |
| listinvalidtxs        | null             | 列出所有无效的交易（消耗交易输出）                            |

在访问上述钱包 API 时，应提供 rpcuser 和 rpcpass。

例如： `abectl --rpcuser=[abewallet.conf 中的 rpcuser] --rpcpass=[abewallet.conf 中的 rpcpass] --wallet getbalancesabe`

## 2. 创建转账交易

当钱包运行时，所有者可以使用私密密码短语解锁钱包，然后使用以下 API 创建转账交易，该交易会自动发送到连接的 ABEC 节点，并随后广播到 Abelian 网络。

**注意：在交易生成期间，可能会生成一个新地址用以存放找零。当交易成功创建后，钱包中地址的最大索引号将被返回。**

| 名称               | 参数                                                                                                                                            | 描述                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| sendtoaddressesabe | `[{"address":"地址字串","amount":值},`<br/>...<br/>`{"address":"地址字串","amount":值}]` <br/> scaleToFeeSatPerKb <br/> feeSpecified | 创建一个包含指定地址和金额的交易                        |

注意：「scaleToFeeSatPerKb」可以不设置，默认值为 1.0。同样地，「feeSpecified」也可以不设置，默认值为 100。

这两个参数不能同时设置，但如果设置了后一个参数，前一个参数也必须设置，你可以使用 1.0。

在当前版本中，由于命令行长度限制，钱包会使用一个名为“arg1”的文件存储参数，该文件位于 abec 的目录下，例如 `~/Library/Application Support/Abec/arg1`。这意味着创建转账交易的命令将变为如下：

`abectl --rpcuser=[abewallet.conf 中的 rpcuser] --rpcpass=[abewallet.conf 中的 rpcpass] --wallet sendtoaddressesabe -`

“arg1” 文件的示例如下：

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