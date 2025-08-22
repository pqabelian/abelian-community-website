---
outline: deep
---

# Ans API 文档

## 注册 ABEL 地址

- URL

https://ans.abelian.info/ans/v1/register

- 方法

POST

- 请求头

| Key          | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |

- 请求内容

| Key          | 类型   | Require | 描述     |
| :----------- | :----- | :------ | :----------- |
| abel_address | 字符串 | true    | ABEL 地址 |

- 响应数据

| Key     | 类型   | 描述         |
| :------ | :----- | :--------------- |
| type    | 字符串 | 返回数据类型 |
| payload | json   | 返回数据      |

payload

| Key                | 类型    | 描述                             |
| :----------------- | :------ | :----------------------------------- |
| already_registered | 布尔值 | ABEL 地址是否已注册     |
| register_at        | 字符串  | ABEL 地址首次注册时间 |
| short_address      | 字符串  | 短地址                        |

- 示例

如果参数错误，返回错误信息

```bash
curl -X POST https://ans.abelian.info/ans/v1/register \
  --header 'Content-Type: application/json' \
  --data '{ "abel_address": "this_is_a_wrong_address" }'
{
  "payload": "Wrong parameters.",
  "type": "error"
}
```

当地址未注册时，返回注册信息

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

> 请将 “...” 替换为您的 ABEL 地址

当地址已注册后，返回注册信息

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

## 从短地址获取 able 地址

- URL

https://ans.abelian.info/ans/v1/

- 方法

GET

- Url 参数

| Key           | 类型   | Require | 描述      |
| :------------ | :----- | :------ | :------------ |
| short_address | 字符串 | true    | 短地址 |

- 响应数据

| Key     | Type   | 描述         |
| :------ | :----- | :--------------- |
| type    | 字符串 | 返回数据类型 |
| payload | 字符串 | ABEL 地址     |

- 示例

如果参数错误，返回错误信息

```bash
curl -X GET https://ans.abelian.info/ans/v1/this_is_a_wrong_address
{
  "payload": "Wrong parameters.",
  "type": "error"
}
```

如果参数正确，返回 ABEL 地址

```bash
curl -X GET https://ans.abelian.info/ans/v1/abe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269
{
  "payload": "xxx",
  "type": "abel_address"
}
```

## 如何验证 ABEL 地址是否与短地址匹配？

以下是一个完整的简短地址

```
0xabe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269
```

1. 0x: 前缀 （可选）
2. abe1: 网络 ID，abe1 是主网，abe4 是模拟网
3. 0x 后面的内容是 ABEL 地址的 sha256 哈希值，长度为 64 个字符。

以下 Node.js 代码示例，验证 ABEL 地址是否与短地址匹配

```js
// 1. 导入加密和 axios
> const crypto = require('crypto')
> const axios = require("axios")
// 2. 定义短地址
> const shortAddress = "abe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269"
// 3. 从短地址获取 ABEL 地址
> const response = await axios.get(`https://ans.abelian.info/ans/v1/${shortAddress}`)
> const abelAddress = response.data.payload
// 4. 计算 ABEL 地址的 sha256 哈希值（需要将 abelAddress 转换为十六进制）
> const sha256Hash = crypto.createHash('sha256').update(abelAddress, 'hex').digest('hex')
// 5. 验证，如果真的话，ABEL 地址与短地址相匹配，否则不匹配。
> shortAddress.slice(-64) === sha256Hash
true
```
