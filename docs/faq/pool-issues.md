---
outline: deep
---

# Pools FAQ

## Abelian Foundation Pool Issues

### <Badge type="warning" text="QUESTION" /> The official pool website is unable to load the dashboard.

::: info <Badge type="tip" text="ANSWER" />
Please clear your browser cache and then reopen the mining pool website.
:::

---

### <Badge type="warning" text="QUESTION" /> Has one or more of the official 4 mining pools registered but cannot log in?

::: info <Badge type="tip" text="ANSWER" />
First, you need to ensure that you have already registered the 4 pools using a command, for example:

`.\abelminer -P stratums://RegisteringAccountAbelMine:<password>@gpool-service-alicia.abelian.info:27778`

After registration, the following 4 files are generated in the abelminer directory:

> gpool-service-charlie.abelian.info.account<br>
> gpool-service-dior.abelian.info.account<br>
> pool-service-alicia.abelian.info.account<br>
> pool-service-baker.abelian.info.account<br>

With the format: `<long wallet address>`+`<username>`, for example:

```text
address=0000xx……(42925 characters)
username=……(64 characters)
```

Verify the mining pool configuration file format to see if it's registered. If everything looks good but you still get a `"failed"` login error, register on the mining pool's website or use the provided command.
:::

---

### <Badge type="warning" text="QUESTION" /> How to mine ABEL on HiveOS?

::: info <Badge type="tip" text="ANSWER" />
You can view to our [official mining pool website](https://pool.abelian.info/), which includes Ubuntu/Debian/HiveOS mining manuals and helper scripts.
For specific Chinese video tutorials, please visit our [YouTube channel](https://www.youtube.com/@AbelianFoundation).
:::

---

### <Badge type="warning" text="QUESTION" /> I am registered to all 4 official pools. but unable sign in to some of the pools on dashboard.

::: info <Badge type="tip" text="ANSWER" />
Could try changing the DNS settings to 8.8.8.8 or 1.1.1.1, and clear the browser and system DNS cache.

This will help verify if the DNS change has taken effect and what IP address the user's device is using.

Open the "Terminal" application in Windows, and enter the following command to clear the DNS cache:

```text
ipconfig /flushdns
```

If user using macOS or Linux, Please use the curl command to check if the connection is normal. Example: Test access "Alicia" pool. Remember to replace USERNAME and PASSWORD with your actual credentials.

```bash
curl --location 'https://pool-alicia.abelian.info/v1/pool/signin' \
--header 'Content-Type: application/json' \
--data '{
    "username":"USERNAME",
    "password":"PASSWORD"
}'
```
:::