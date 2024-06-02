---
outline: deep
---

# Abelian Miner FAQ

## Abelminer Issues

### <Badge type="warning" text="QUESTION" /> Abelminer reports an error "No connection. Mining paused."

Running abelmner on Linux reports an error that it cannot connect and exits. The log is:
```text
abelminer  No connection. Suspend mining ...
abelminer No more connctions to try. Exiting...
main        Got interrupt...
```

::: info <Badge type="tip" text="ANSWER" />
Please add the following option to the `/etc/sysctl.conf` file:
```bash
net.ipv4.ip_local_port_range = 1024 65535
```
Then run `sysctl -p` and restart the system.
:::

---

### <Badge type="warning" text="QUESTION" /> Abelminer Error: This device hasn't enough memory available.

Running abelmner on Linux reports an error that it cannot connect and exits. The log is:
```text
Epoch 50 requires 5.66 GB memory
This device hasn't enough memory available. Mining suspended.
```

::: info <Badge type="tip" text="ANSWER" />
Just as the first line of the log suggests, the Epoch 50 stage requires 5.66 GB of VRAM, plus system usage, a graphics card with 6GB of VRAM cannot participate in mining.

For more detailed explanations, please view [AMD graphics cards issues](/faq/hardware-issues/amd) or [NVIDIA graphics cards issues](/faq/hardware-issues/nvidia)

:::

---

### <Badge type="warning" text="QUESTION" /> How to mine ABEL on HiveOS?

::: info <Badge type="tip" text="ANSWER" />
You can view to our [official mining pool website](https://maxpool.org/home/guide#hiveos), which includes Ubuntu/Debian/HiveOS mining manuals and helper scripts.
For video tutorials, please visit our [YouTube channel](https://www.youtube.com/@AbelianFoundation).
:::