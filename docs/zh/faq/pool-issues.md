---
outline: deep
---

# 礦池常見問題解答

## Abelian 官方礦池常見問題解答

### <Badge type="warning" text="問題" /> Maxpool 礦池是否支援 MLP 地址？

::: info <Badge type="tip" text="答案" />
Maxpool 網站後端已經增加對多層隱私（MLP）錢包地址的支援，現在礦工可以將 MLP 錢包的全隱私地址或偽隱私地址作為自己的挖礦收益地址。

提示：在更換收益錢包地址後，請確保挖礦客戶端的命令也替換為相應的參數。
:::

---

### <Badge type="warning" text="問題" /> 無法打開礦池網站控制台？

::: info <Badge type="tip" text="答案" />
請清除瀏覽器快取，然後再重新打開網站。
:::

---

### <Badge type="warning" text="問題" /> Maxpool 網站無法顯示礦機線上狀態？

::: info <Badge type="tip" text="答案" />
Maxpool 依賴腳本將統計數據提交到 API 以顯示在線狀態。由於複雜的用戶網絡，部分礦工仍未在控制面板中顯示在線狀態。

開發團隊已意識到此問題。目前，請專注於檢查算力，並嘗試使用 abelminer，這是官方挖礦客戶端，可提供最佳支援。團隊正在為此問題進行改進，但需要一些時間。
:::

---

### <Badge type="warning" text="問題" /> 無法打開礦池網站控制台？

::: info <Badge type="tip" text="答案" />
請清除瀏覽器快取，然後再重新打開網站。
:::

---

### <Badge type="warning" text="問題" /> Maxpool 礦池已註冊但挖礦命令無法工作？

::: info <Badge type="tip" text="答案" />
首先，您需要確保已經使用註冊了 MaxPool 礦池：

您可以在 Maxpool 網站上註冊： [https://maxpool.org/auth/register](https://maxpool.org/auth/register)

注意：註冊後，如果沒有使用 abelminingscript.sh 腳本進行挖礦，請記住用戶面板中的用戶名和密碼，Maxpool 的兩個礦池的挖礦命令為：

```shell
./abelminer -P stratums://<用戶名>:<密碼>@emily-service.abelian.info:27778
./abelminer -P stratums://<用戶名>:<密碼>@fiona-service.abelian.info:27778
```

如果一切看起來都正常但仍然收到 `失敗` 的登入錯誤，請在 Maxpool 網站完成註冊並閱讀 [用戶快速指引](https://maxpool.org/home/guide) 部分。
:::

---

### <Badge type="warning" text="問題" /> 在 Maxpool 用戶面板中無法登入其中某個礦池

::: info <Badge type="tip" text="答案" />
嘗試修改系統 DNS 為 8.8.8.8 或 1.1.1.1，然後清除瀏覽器和系統 DNS 快取。

這個操作將有助於驗證 DNS 解析的變更是否已生效以及用戶裝置正在使用哪個 IP 地址。

Windows 打開 “終端機” 程序，然後輸入下面的命令來清除 DNS 快取

```text
ipconfig /flushdns
```

如果您使用的是 macOS 或 Linux，請使用 curl 命令來檢測連接是否正常，舉例：測試訪問 "Fiona" 礦池，請替換 USERNAME 和 PASSWORD 為你的帳戶：

```bash
curl --location 'https://pool-fiona.abelian.info/v1/pool/signin' \
--header 'Content-Type: application/json' \
--data '{
    "username":"USERNAME",
    "password":"PASSWORD"
}'
```
:::

---

### <Badge type="warning" text="問題" /> 原 Abelian 基金會礦池 (pool.abelian.info) 無法登入？

::: info <Badge type="tip" text="答案" />
原 Abelian 基金會礦池 (pool.abelian.info) 目前已經停止提供服務，但網站仍然可以訪問，網址已經變更為：[https://legacy.maxpool.org/home](https://legacy.maxpool.org/home)。強烈建議在硬分叉完成之前遷移到新的 [Maxpool 礦池](https://maxpool.org)！！！