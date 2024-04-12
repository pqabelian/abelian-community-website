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
You can view to our [official mining pool website](https://pool.abelian.info/), which includes Ubuntu/Debian/HiveOS mining manuals and helper scripts. For specific Chinese video tutorials, please visit our [YouTube channel](https://www.youtube.com/@AbelianFoundation).
:::