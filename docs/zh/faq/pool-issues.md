---
outline: deep
---

# 矿池常见问题解答

## Abelian 基金会矿池常见问题解答

### <Badge type="warning" text="QUESTION" /> 无法打开官方矿池网站控制台？

::: info <Badge type="tip" text="ANSWER" />
请清除浏览器缓存，然后再重新打开网站。
:::

---

### <Badge type="warning" text="QUESTION" /> 如何在 HiveOS 上挖 ABEL？

::: info <Badge type="tip" text="ANSWER" />
可以参考我们的[官方矿池网站](https://pool.abelian.info/)，包含有 Ubuntu/Debian/HiveOS 挖矿手册和助手脚本，具体中文视频教程可以访问我们的 [Youtube 频道](https://www.youtube.com/@AbelianFoundation)
:::

---

### <Badge type="warning" text="QUESTION" /> 我注册了所有官方 4 个矿池，但在矿池面板无法登录其中部分矿池

::: info <Badge type="tip" text="ANSWER" />
尝试修改系统 DNS 为 8.8.8.8 或 1.1.1.1，然后清除浏览器和系统 DNS 缓存。

这个操作将有助于验证 DNS 解析的更改是否已生效以及用户设备正在使用哪个 IP 地址。

Windows 打开 “终端” 程序，然后输入下面的命令来清除 DNS 缓存

```text
ipconfig /flushdns
```

如果您使用的是 macOS 或 Linux，请使用 curl 命令来检测连接是否正常，举例：测试访问 "Alicia" 矿池，请替换 USERNAME 和 PASSWORD 为你的账户：

```bash
curl --location 'https://pool-alicia.abelian.info/v1/pool/signin' \
--header 'Content-Type: application/json' \
--data '{
    "username":"USERNAME",
    "password":"PASSWORD"
}'
```
:::