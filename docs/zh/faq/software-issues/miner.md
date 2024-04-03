---
outline: deep
---

# Abelian 挖矿程序相关问答

## Abelminer 问题

### <Badge type="warning" text="QUESTION" /> Abelminer 报错：No connection. Mining paused.

在 Linux 运行 abelminer 提示无法连接并退出.

日志如下：

```text
abelminer  No connection. Suspend mining ...
abelminer No more connctions to try. Exiting...
main        Got interrupt...
```

::: info <Badge type="tip" text="ANSWER" />
请修改 `/etc/sysctl.conf` 文件，在最后一行下面添加如下内容：
```
net.ipv4.ip_local_port_range = 1024 65535
```
然后执行 `sysctl -p` 并重启系统。
:::