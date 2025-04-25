---
outline: deep
---

# Pools FAQ

## Abelian Official Pool Issues

### <Badge type="warning" text="QUESTION" /> Does Maxpool support MLP addresses?

::: info <Badge type="tip" text="ANSWER" />
Maxpool now supports Multi-Layer Privacy (MLP) wallet addresses. Miners can use either the full-privacy or pseudo-privacy address as their payout address.

Note: After changing the payout address, update the mining client command accordingly.
:::

---

### <Badge type="warning" text="QUESTION" /> The official pool website is unable to load the dashboard.

::: info <Badge type="tip" text="ANSWER" />
Please clear your browser cache and then reopen the mining pool website.
:::

---

### <Badge type="warning" text="QUESTION" /> The Maxpool is registered, but the mining command don't work?

::: info <Badge type="tip" text="ANSWER" />
First, you need to ensure that you have registered with a Maxpool:
```

You can register on the Maxpool website: [https://maxpool.org/auth/register](https://maxpool.org/auth/register)

Note: After registration, If you are not use the abelminingscript.sh script for mining, Please remember the username and password in the user panel. The mining commands for Maxpool's two mining pools are:

```shell
./abelminer -P stratums://<username>:<password>@emily-service.abelian.info:27778
./abelminer -P stratums://<username>:<password>@fiona-service.abelian.info:27778
```

If everything looks good but you still get a `"failed"` login error, Please complete registration on the Maxpool website and read the ['Quickstart Guide'](https://maxpool.org/home/guide) section.
:::

---

### <Badge type="warning" text="QUESTION" /> Unable to login a certain mining pool in the Maxpool dashboard?

::: info <Badge type="tip" text="ANSWER" />
Could try changing the DNS settings to 8.8.8.8 or 1.1.1.1, and clear the browser and system DNS cache.

This will help verify if the DNS change has taken effect and what IP address the user's device is using.

Open the "Terminal" application in Windows, and enter the following command to clear the DNS cache:

```text
ipconfig /flushdns
```

If user using macOS or Linux, Please use the curl command to check if the connection is normal. Example: Test access "Fiona" pool. Remember to replace USERNAME and PASSWORD with your actual credentials.

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

### <Badge type="warning" text="QUESTION" /> Unable to log in to the original Abelian Foundation pool (pool.abelian.info)?

::: info <Badge type="tip" text="ANSWER" />
The original Abelian Foundation mining pool (pool.abelian.info) has currently stopped providing services, but the website is still accessible, and the URL has changed to: https://legacy.maxpool.org/home. It is strongly recommended to migrate to the [Maxpool mining pool](https://maxpool.org/)!!!
:::

---
