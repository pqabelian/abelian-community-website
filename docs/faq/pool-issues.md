---
outline: deep
---

# Pools FAQ

## Abelian Official Pool Issues

### <Badge type="warning" text="QUESTION" /> The official pool website is unable to load the dashboard.

::: info <Badge type="tip" text="ANSWER" />
Please clear your browser cache and then reopen the mining pool website.
:::

---

### <Badge type="warning" text="QUESTION" /> Has one or more of the official mining pools registered but cannot log in or work?

::: info <Badge type="tip" text="ANSWER" />
First, you need to ensure that you have registered with a mining pool:

**(Abelian Foundation Pool)**

`.\abelminer -P stratums://RegisteringAccountAbelMine:<password>@gpool-service-alicia.abelian.info:27778`

After registration, the following 4 files are generated in the abelminer directory:

> gpool-service-charlie.abelian.info.account<br>
> gpool-service-dior.abelian.info.account<br>
> pool-service-alicia.abelian.info.account<br>
> pool-service-baker.abelian.info.account<br>

**(MaxPool)**

You can only register on the Maxpool website: [https://maxpool.org/auth/register](https://maxpool.org/auth/register)

Note: After registration, you need to manually create a mining pool configuration file in the abelminer directory for it to work properly:

> emily-service.abelian.info.abelmine.account<br>
> fiona-service.abelian.info.abelmine.account<br>

With the format: `<long wallet address>`+`<username>`, for example:

```text
address=0000xx……(42925 characters)
username=……(64 characters)
```

If everything looks good but you still get a `"failed"` login error, Please use the provided command in the foundation pool or complete registration on the Maxpool website.
:::

---

### <Badge type="warning" text="QUESTION" /> How to mine ABEL on HiveOS?

::: info <Badge type="tip" text="ANSWER" />
You can view to our [official mining pool website](https://maxpool.org/home/guide#hiveos), which includes Ubuntu/Debian/HiveOS mining manuals and helper scripts.
For video tutorials, please visit our [YouTube channel](https://www.youtube.com/@AbelianFoundation).
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