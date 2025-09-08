---
outline: deep
---

# Abelian 錢包 API

## 1. 查詢錢包狀態和區塊鏈資訊

錢包提供以下 API 用於查詢錢包狀態和區塊鏈資訊：

| 名稱                  | 參數             | 描述                                                         |
| --------------------- | ---------------- | ------------------------------------------------------------ |
| getbalancesabe        | null             | 取得錢包擁有者的餘額資訊                                     |
| getbestblockhash      | null             | 取得目前同步的最佳區塊哈希值                                 |
| help                  | null             | 輸出幫助資訊                                                 |
| listallutxoabe        | null             | 列出所有屬於錢包的交易輸出（txo）                            |
| listimmaturetxoabe    | null             | 列出所有屬於錢包的未成熟交易輸出                            |
| listmaturetxoabe      | null             | 列出所有屬於錢包的成熟交易輸出                              |
| listunconfirmedtxoabe | null             | 列出所有屬於錢包的未確認交易輸出                              |
| listconfirmedtxoabe   | null             | 列出所有屬於錢包的已確認交易輸出                              |
| listconfirmedtxs      | null             | 列出所有消耗錢包交易輸出的已確認交易                        |
| listunconfirmedtxs    | null             | 列出所有消耗錢包交易輸出的未確認交易                        |
| listinvalidtxs        | null             | 列出所有消耗錢包交易輸出的無效交易                            |

在存取上述錢包 API 時，應提供 rpcuser 和 rpcpass。

例如： `abectl --rpcuser=[abewallet.conf 中的 rpcuser] --rpcpass=[abewallet.conf 中的 rpcpass] --wallet getbalancesabe`

## 2. 建立轉帳交易

當錢包運作中，擁有者可以使用私密密碼短語解鎖錢包，然後使用以下 API 建立轉帳交易，該交易會自動送出至連線的 ABEC 節點，並隨後廣播到 Abelian 網路。

**注意：在交易產生期間，可能會產生一個新地址來存放找零。當交易成功建立後，錢包中地址的最大索引號將會回傳。**

| 名稱               | 參數                                                                                                                                            | 描述                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| sendtoaddressesabe | `[{"address":"地址字串","amount":值},`<br/>...<br/>`{"address":"地址字串","amount":值}]` <br/> scaleToFeeSatPerKb <br/> feeSpecified | 建立一個包含指定地址與金額的交易                        |

注意：「scaleToFeeSatPerKb」可以不設定，預設值為 1.0。同樣地，「feeSpecified」也可以不設定，預設值為 100。

這兩個參數不能同時設定，但如果設定了下一個參數，前一個參數也必須設定，你可以使用 1.0。

在目前版本中，由於命令列長度限制，錢包會使用一個名為「arg1」的檔案來存放參數，該檔案位於 abec 的目錄下，例如 `~/Library/Application Support/Abec/arg1`。這代表建立轉帳交易的指令會變成如下：

`abectl --rpcuser=[abewallet.conf 中的 rpcuser] --rpcpass=[abewallet.conf 中的 rpcpass] --wallet sendtoaddressesabe -`

`arg1` 檔案範例如下：

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