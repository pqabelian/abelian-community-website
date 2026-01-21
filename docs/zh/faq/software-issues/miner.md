---
outline: deep
---

# Abelian 挖礦程式相關問答

## Abelminer 問題

### Abelminer 報錯：No connection. Mining paused. <sup style="font-size: 0.6em;">`問題`</sup>

在 Linux 執行 abelminer 提示無法連線並退出。日誌如下：
```text
abelminer  No connection. Suspend mining ...
abelminer No more connctions to try. Exiting...
main        Got interrupt...
```

::: info <span style="font-size: 1.2em;">`解答`</span>
請修改 `/etc/sysctl.conf` 檔案，在最後一行下面新增如下內容：
```bash
net.ipv4.ip_local_port_range = 1024 65535
```
然後執行 `sysctl -p` 並重啟系統。
:::

---

### Abelminer 報錯：This device hasn't enough memory available. <sup style="font-size: 0.6em;">`問題`</sup>

在 Linux 執行 abelminer 提示無法連線並退出。日誌如下：
```text
Epoch 50 requires 5.66 GB memory
This device hasn't enough memory available. Mining suspended.
```

::: info <span style="font-size: 1.2em;">`解答`</span>
就如日誌第一行的提示 Epoch 50 階段需要 5.66 GB 的顯存，加上系統的佔用，6GB 顯存的顯示卡無法參與挖礦。

更詳細的解釋請參考 [AMD 顯示卡相關問題](/zh/faq/hardware-issues/amd) 或 [NVIDIA 顯卡相關問題](/zh/faq/hardware-issues/nvidia)。
:::

---

### 如何在 HiveOS 上挖 ABEL？ <sup style="font-size: 0.6em;">`問題`</sup>

::: info <span style="font-size: 1.2em;">`解答`</span>
可以參考我們的 [官方礦池網站](https://maxpool.org/home/guide#hiveos)，包含有 Ubuntu/Debian/HiveOS 挖礦手冊和助手腳本，視頻教程可以訪問我們的 [Youtube 頻道](https://www.youtube.com/@AbelianFoundation)
:::