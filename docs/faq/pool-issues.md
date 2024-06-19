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

`.\abelminer -P stratums://RegisteringAccountAbelMine:<password>@gpool-service-alicia.abelian.info:27778 -P stratums://RegisteringAccountAbelMine:<password>@gpool-service-dior.abelian.info:27778 -P stratums://RegisteringAccountAbelMine:<password>@pool-service-alicia.abelian.info:27778 -P stratums://RegisteringAccountAbelMine:<password>@pool-service-baker.abelian.info:27778`

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

**(MaxPool)**

You can only register on the Maxpool website: [https://maxpool.org/auth/register](https://maxpool.org/auth/register)

Note: After registration, If you are not use the abelminingscript.sh script for mining, Please remember the username and password in the user panel. The mining commands for Maxpool's two mining pools are:

```shell
./abelminer -P stratums://<username>:<password>@emily-service.abelian.info:27778
./abelminer -P stratums://<username>:<password>@fiona-service.abelian.info:27778
```

If everything looks good but you still get a `"failed"` login error, Please use the provided user manual document in the Foundation Pools or complete registration on the Maxpool website and read the 'Quickstart Guide' section.
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

---

### <Badge type="warning" text="QUESTION" /> Unable to log in to the original Abelian Foundation pool (pool.abelian.info)?

::: info <Badge type="tip" text="ANSWER" />
The original Abelian Foundation mining pool (pool.abelian.info) is still available, but the URL has changed to: https://legacy.maxpool.org/home. Please use this URL for access. It is strongly recommended to migrate to the new Maxpool mining pool before the hard fork is completed!!!
:::

---
