---
outline: deep
---

# Abelian 挖矿程序相关问答

## Abelminer 问题

### <Badge type="warning" text="QUESTION" /> Abelminer 报错：No connection. Mining paused.

在 Linux 运行 abelminer 提示无法连接并退出。日志如下：
```text
abelminer  No connection. Suspend mining ...
abelminer No more connctions to try. Exiting...
main        Got interrupt...
```

::: info <Badge type="tip" text="ANSWER" />
请修改 `/etc/sysctl.conf` 文件，在最后一行下面添加如下内容：
```bash
net.ipv4.ip_local_port_range = 1024 65535
```
然后执行 `sysctl -p` 并重启系统。
:::

---

### <Badge type="warning" text="QUESTION" /> Abelminer 报错：This device hasn't enough memory available.

在 Linux 运行 abelminer 提示无法连接并退出。日志如下：
```text
Epoch 50 requires 5.66 GB memory
This device hasn't enough memory available. Mining suspended.
```

::: info <Badge type="tip" text="ANSWER" />
就如日志第一行的提示 Epoch 50 阶段需要 5.66 GB 的显存，加上系统的占用，6GB 显存的显卡无法参与挖矿。

更详细的解释请参看 [AMD 显卡相关问题](/faq/hardware-issues/amd) 或 [NVIDIA 显卡相关问题](/faq/hardware-issues/nvidia)。
:::

---

### <Badge type="warning" text="QUESTION" /> 如何在 HiveOS 上挖 ABEL？

::: info <Badge type="tip" text="ANSWER" />
可以参考我们的[官方矿池网站](https://maxpool.org/home/guide#hiveos)，包含有 Ubuntu/Debian/HiveOS 挖矿手册和助手脚本，视频教程可以访问我们的 [Youtube 频道](https://www.youtube.com/@AbelianFoundation)
:::