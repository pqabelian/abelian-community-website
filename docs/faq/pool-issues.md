---
outline: deep
---

# Pools FAQ

## Abelian Official Pool Issues

### Does Maxpool support MLP addresses? <sup style="font-size: 0.6em;">`QUESTION`</sup>

::: info <span style="font-size: 1.2em;">`Answer`</span>
Maxpool now supports Multi-Layer Privacy (MLP) wallet addresses. Miners can use either the full-privacy or pseudo-privacy address as their payout address.

Note: After changing the payout address, update the mining client command accordingly.
:::

---

### Maxpool website cannot display the rigs online status of Machines? <sup style="font-size: 0.6em;">`QUESTION`</sup>

::: info <span style="font-size: 1.2em;">`Answer`</span>
Maxpool relies on scripts to submit stats to the API for online status. Due to complex user networks, some miners still don’t show online status in the Dashboard.

The DEV team is aware of the issue. For now, pls focus on checking the hashrate and also try to use abelminer, the official mining client for the best support. The team is working on an improvement for the issue but will take some time. 
:::

---

### The Maxpool is registered, but the mining command don't work? <sup style="font-size: 0.6em;">`QUESTION`</sup>

::: info <span style="font-size: 1.2em;">`Answer`</span>
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

### Unable to login a certain mining pool in the Maxpool dashboard? <sup style="font-size: 0.6em;">`QUESTION`</sup>

::: info <span style="font-size: 1.2em;">`Answer`</span>
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

### Unable to log in to the original Abelian Foundation pool (pool.abelian.info)? <sup style="font-size: 0.6em;">`QUESTION`</sup>

::: info <span style="font-size: 1.2em;">`Answer`</span>
The original Abelian Foundation mining pool (pool.abelian.info) has currently stopped providing services, but the website is still accessible, and the URL has changed to: [https://legacy.maxpool.org/home](https://legacy.maxpool.org/home). It is strongly recommended to migrate to the [Maxpool mining pool](https://maxpool.org/)!!!
:::

---
