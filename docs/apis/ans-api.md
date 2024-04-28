# Ans API Document

## Register abel address

- URL

https://ans.abelian.info/ans/v1/register

- Method

POST

- Request Header

| Key          | Value            |
| :----------- | :--------------- |
| Content-Type | application/json |

- Request Body

| Key          | Type   | Require | Describe     |
| :----------- | :----- | :------ | :----------- |
| abel_address | string | true    | abel address |

- Response Data

| Key     | Type   | Describe         |
| :------ | :----- | :--------------- |
| type    | string | return data type |
| payload | json   | return data      |

payload

| Key                | Type    | Describe                             |
| :----------------- | :------ | :----------------------------------- |
| already_registered | boolean | Has abel address been registered     |
| register_at        | string  | abel address first registration time |
| short_address      | string  | short address                        |

- Example

If the parameter is wrong, return error message

```bash
curl -X POST https://ans.abelian.info/ans/v1/register \
  --header 'Content-Type: application/json' \
  --data '{ "abel_address": "this_is_a_wrong_address" }'
{
  "payload": "Wrong parameters.",
  "type": "error"
}
```

When the address is not registered, return the registration information

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

> Please replace "..." with your abel address

When the address has been registered, return the registration information

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

## Get abel address from short address

- URL

https://ans.abelian.info/ans/v1/

- Method

GET

- Url Parameter

| Key           | Type   | Require | Describe      |
| :------------ | :----- | :------ | :------------ |
| short_address | string | true    | short address |

- Response Data

| Key     | Type   | Describe         |
| :------ | :----- | :--------------- |
| type    | string | return data type |
| payload | string | abel address     |

- Example

If the parameter is wrong, return error message

```bash
curl -X GET https://ans.abelian.info/ans/v1/this_is_a_wrong_address
{
  "payload": "Wrong parameters.",
  "type": "error"
}
```

If the parameter is correct, return abel address

```bash
curl -X GET https://ans.abelian.info/ans/v1/abe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269
{
  "payload": "xxx",
  "type": "abel_address"
}
```

## How to verify whether abel address matches short address?

The following is a complete short address

```
0xabe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269
```

1. 0x: prefix, optional
2. abe1: network ID, abe1 is the mainnet, abe4 is the simnet
3. The content after 0x is the sha256 hash of the abel address, which is 64 characters long

The following nodejs code example, verifies whether the abel address matches the short address

```js
// 1. Import crypto and axios
> const crypto = require('crypto')
> const axios = require("axios")
// 2. Define short address
> const shortAddress = "abe1fa7b7913f7e383a503eba4e5a9cbbdc15843faef6c5dfd36602df8ee789408f59551c407c03a80a625b6740325a34ad700112c44aba962c6e892b07b346e1269"
// 3. Get abel address from short address
> const response = await axios.get(`https://ans.abelian.info/ans/v1/${shortAddress}`)
> const abelAddress = response.data.payload
// 4. Calculate sha256 hash of abel address( need to convert abelAddress to hex )
> const sha256Hash = crypto.createHash('sha256').update(abelAddress, 'hex').digest('hex')
// 5. Verify, if true, abel address matches short address, otherwise not match
> shortAddress.slice(-64) === sha256Hash
true
```
