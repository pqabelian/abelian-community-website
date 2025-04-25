---
outline: deep
---

# 矿池常见问题解答

## Abelian 官方矿池常见问题解答

### <Badge type="warning" text="QUESTION" /> Maxpool 矿池支持 MLP 地址吗？

::: info <Badge type="tip" text="ANSWER" />
Maxpool 网站后端已经增加了对多层隐私（MLP）钱包地址的支持，现在矿工可以将 MLP 钱包的全隐私地址或伪隐私地址作为自己的挖矿收益地址。

提示：在更换收益钱包地址后，请确保挖矿客户端的命令也替换为相应的参数。
:::

---

### <Badge type="warning" text="QUESTION" /> 无法打开矿池网站控制台？

::: info <Badge type="tip" text="ANSWER" />
请清除浏览器缓存，然后再重新打开网站。
:::

---

### <Badge type="warning" text="QUESTION" /> Maxpool 矿池已注册但挖矿命令无法工作？

::: info <Badge type="tip" text="ANSWER" />
首先，您需要确保已经使用注册了 MaxPool 矿池：

您可以在 Maxpool 网站上注册： [https://maxpool.org/auth/register](https://maxpool.org/auth/register)

注意：注册后，如果没有使用 abelminingscript.sh 脚本进行挖矿，请记住用户面板中的用户名和密码，Maxpool 的两个矿池的挖矿命令为：

```shell
./abelminer -P stratums://<用户名>:<密码>@emily-service.abelian.info:27778
./abelminer -P stratums://<用户名>:<密码>@fiona-service.abelian.info:27778
```

如果一切看起来都正常但仍然收到 `失败` 的登录错误，请在 Maxpool 网站完成注册并阅读 [用户快速指引](https://maxpool.org/home/guide) 部分。
:::

---

### <Badge type="warning" text="QUESTION" /> 在 Maxpool 用户面板中无法登录其中某个矿池

::: info <Badge type="tip" text="ANSWER" />
尝试修改系统 DNS 为 8.8.8.8 或 1.1.1.1，然后清除浏览器和系统 DNS 缓存。

这个操作将有助于验证 DNS 解析的更改是否已生效以及用户设备正在使用哪个 IP 地址。

Windows 打开 “终端” 程序，然后输入下面的命令来清除 DNS 缓存

```text
ipconfig /flushdns
```

如果您使用的是 macOS 或 Linux，请使用 curl 命令来检测连接是否正常，举例：测试访问 "Fiona" 矿池，请替换 USERNAME 和 PASSWORD 为你的账户：

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

### <Badge type="warning" text="QUESTION" /> 原 Abelian 基金会矿池 (pool.abelian.info) 无法登录？

::: info <Badge type="tip" text="ANSWER" />
原 Abelian 基金会矿池 (pool.abelian.info) 当前已经停止提供服务，但网站仍然可以访问，网址已经变更为：https://legacy.maxpool.org/home。强烈推荐在硬分叉完成之前迁移到新的 [Maxpool 矿池](https://maxpool.org)！！！
:::

---