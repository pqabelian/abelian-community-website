---
outline: deep
---

# Ans API 文檔

## 註冊 ABEL 地址

- URL

https://ans.abelian.info/ans/v1/register

- 方法

POST

- 請求標頭

| Key          | 值               |
| :----------- | :--------------- |
| Content-Type | application/json |

- 請求內容

| Key          | 类型   | Require | 描述     |
| :----------- | :----- | :------ | :----------- |
| abel_address | 字串 | true    | ABEL 地址 |

- 回應資料

| Key     | 类型   | 描述         |
| :------ | :----- | :--------------- |
| type    | 字串 | 回傳資料類型 |
| payload | json   | 回傳資料      |

payload

| Key                | 类型    | 描述                             |
| :----------------- | :------ | :----------------------------------- |
| already_registered | 布林值 | 是否已註冊 ABEL 地址     |
| register_at        | 字串  | ABEL 地址首次註冊時間 |
| short_address      | 字串  | 短地址                        |

- 範例

如果參數錯誤，回傳錯誤訊息

```bash
curl -X POST https://ans.abelian.info/ans/v1/register \
  --header 'Content-Type: application/json' \
  --data '{ "abel_address": "this_is_a_wrong_address" }'
{
  "payload": "Wrong parameters.",
  "type": "error"
}
```

當地址未註冊時，返回註冊信息

```bash
curl -X POST https://ans.abelian.info/ans/v1/register \
  --header 'Content-Type: application/json' \
  --data '{ "abel_address": "..." }'
{
  "payload": {
    "already_registered": false,
    "register_at": "2023-07-07T12:51:39.37Z",
    "short_address": "abe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269"
  },
  "type": "register_result"
}
```

> 請將 “...” 替換為您的 ABEL 地址

當地址已註冊後，返回註冊信息

```bash
curl -X POST https://ans.abelian.info/ans/v1/register \
  --header 'Content-Type: application/json' \
  --data '{ "abel_address": "..." }'
{
  "payload": {
    "already_registered": true,
    "register_at": "2023-07-07T12:51:39.37Z",
    "short_address": "abe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269"
  },
  "type": "register_result"
}
```

## 從短地址取得 ABEL 地址

- URL

https://ans.abelian.info/ans/v1/

- 方法

GET

- Url 參數

| Key           | 类型   | Require | 描述      |
| :------------ | :----- | :------ | :------------ |
| short_address | 字串 | true    | 短地址 |

- 回應資料

| Key     | 类型   | 描述         |
| :------ | :----- | :--------------- |
| type    | 字串 | 回傳資料類型 |
| payload | 字串 | ABEL 地址     |

- 範例

如果參數錯誤，回傳錯誤訊息

```bash
curl -X GET https://ans.abelian.info/ans/v1/this_is_a_wrong_address
{
  "payload": "Wrong parameters.",
  "type": "error"
}
```

如果參數正確，回傳 ABEL 地址

```bash
curl -X GET https://ans.abelian.info/ans/v1/abe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269
{
  "payload": "xxx",
  "type": "abel_address"
}
```

## 如何驗證 ABEL 地址是否與短地址匹配？

以下是一個完整的簡短地址

```
0xabe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269
```

1. 0x: 前綴 （可選）
2. abe1: 網路 ID，abe1 是主網，abe4 是模擬網
3. 0x 後面的內容是 ABEL 地址的 sha256 雜湊值，長度為 64 個字元。

以下 Node.js 代码示例，验证 ABEL 地址是否与短地址匹配

```js
// 1. 導入加密和 axios
> const crypto = require('crypto')
> const axios = require("axios")
// 2. 定義短地址
> const shortAddress = "abe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269"
// 3. 從短地址獲取 ABEL 地址
> const response = await axios.get(`https://ans.abelian.info/ans/v1/${shortAddress}`)
> const abelAddress = response.data.payload
// 4. 計算 ABEL 地址的 sha256 雜湊值（需要將 abelAddress 轉換為十六進制）
> const sha256Hash = crypto.createHash('sha256').update(abelAddress, 'hex').digest('hex')
// 5. 驗證，如果為真的話，ABEL 地址與短地址相匹配，否則不匹配。
> shortAddress.slice(-64) === sha256Hash
true
```
