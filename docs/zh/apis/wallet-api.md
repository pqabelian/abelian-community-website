---
outline: deep
---

# API for Abelian Wallet

## 1. Query wallet status and blockchain information

Wallet provides the following APIs for querying wallet status and blockchain information:

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

When accessing the above wallet APIs, rpcuser and rpcpass should be provided.

For example, `abectl --rpcuser=[rpcuser in abewallet.conf] --rpcpass=[rpcpass in abewallet.conf] --wallet getbalancesabe`

## 2. Create Transfer Transactions

When a wallet is running, the owner can unlock the wallet using private passphrase and then use the following API to create a transfer transaction, which is automatically sent to the connected ABEC node, and then is broadcast to Abelian network.

**Note: during the transaction generation, a new address may be generated to store change. When the transaction is created successfully, the _max index number_ of address in the wallet would be returned.**

| Name               | Paramaters                                                                                                                                             | Description                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| sendtoaddressesabe | `[{"address":"address string","amount":value},`<br/>...<br/>`{"address":"address string","amount":value}]` <br/> scaleToFeeSatPerKb <br/> feeSpecified | create a transaction with assigned pairs of address and amount |

NOTE: "scaleToFeeSatPerKb" can be left unset and will be given a default value of 1.0. Similarly, "feeSpecified" can also be left unset, and will be given a default value of 100.
These two parameters can not be set at the same time, but if the next parameter is set, the previous parameter must be set, you can use 1.0.

In current version, because limit of command line length, the wallet uses a file named "arg1" in abec's directory such as `~/Library/Application Support/Abec/arg1` to store parameters, which means the command to creating transfer transaction would become as follows:

`abectl --rpcuser=[rpcuser in abewallet.conf] --rpcpass=[rpcpass in abewallet.conf] --wallet sendtoaddressesabe -`

An example of the file "arg1" is as follows:

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