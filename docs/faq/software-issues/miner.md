---
outline: deep
---

# Abelian Miner FAQ

## Abelminer Issues

### <Badge type="warning" text="QUESTION" /> Abelminer reports an error "No connection. Mining paused."

Running abelmner on Linux reports an error that it cannot connect and exits.
The log is:

```text
abelminer  No connection. Suspend mining ...
abelminer No more connctions to try. Exiting...
main        Got interrupt...
```

::: info <Badge type="tip" text="ANSWER" />
Please add the following option to the `/etc/sysctl.conf` file:
```
net.ipv4.ip_local_port_range = 1024 65535
```
Then run `sysctl -p` and restart the system.
:::