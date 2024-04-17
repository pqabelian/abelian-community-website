---
outline: deep
---

# Abelian Wallet FAQ

## Desktop Wallet Issues

### <Badge type="warning" text="QUESTION" /> The Windows desktop wallet cannot start, and the log is:
```txt
[INF] ABEC: Version 0.12.5
[INF] ABEC: Loading block database from 'C:\Users\username\AppData\Roaming\Abelian Wallet\Abec\mainnet\blocks_ffldb'
[ERR] ABEC: file missing [file=MANIFEST-000000]: file missing [file=MANIFEST-000000]
[INF] ABEC: Shutdown complete
```

::: info <Badge type="tip" text="ANSWER" />
Is the disk space on drive C full?

Please [View this page](/faq/software-issues/fullnode.html#how-to-move-mainnet-data-to-another-location) and follow the steps to move mainnet data to another location.
:::

---

### <Badge type="warning" text="QUESTION" /> The error log is: "Database corruption detected"
```txt
[INF] ABEC: Loading block database from 'C:\Users\username\AppData\Roaming\Abelian Wallet\Abec\mainnet\blocks_ffldb'
[WRN] ABDB: Database corruption detected: metadata claims file 29, offset 18494396, but witness data is at file 0, offset 0
[ERR] ABEC: metadata claims file 29, offset 18494396, but witness data is at file 0, offset 0
```

::: info <Badge type="tip" text="ANSWER" />
That's mainnet database corruption. You need to delete the "C:\Users\\[username]\AppData\Roaming\Abelian Wallet\Abec\mainnet" folder, and start the resync again.

Or [View this page](/downloads/mainnet-db) and follow the steps to download the latest mainnet data, Then resync again.
:::

---

### <Badge type="warning" text="QUESTION" /> Is there a solution to ABEL only transferring in small amounts?

::: info <Badge type="tip" text="ANSWER" />
You're basically allowed to combine up to 5 "received" transactions into 1 "send" transaction, so if you've received many small amounts, you will only be able to send a small amount each transaction.
:::

---

### <Badge type="warning" text="QUESTION" /> The desktop wallet is reporting an error: “missing address manager namespace”

::: info <Badge type="tip" text="ANSWER" />
Regarding the namespace issue. For our team testing (Windows 10 & Ubuntu 22.04) the issue only appears on vms not on physical (bare metal) systems.

SSE4 and AVX2 extensions are required on you CPU. If you're using vms makes sure to pass the host instruction set through. 
:::

---

## Mobile Wallet (Pro) Issues

### <Badge type="warning" text="QUESTION" /> Why is the balance zero or why doesn't the balance match after importing an account with a mnemonic phrase in Mobile Wallet Pro?

::: info <Badge type="tip" text="ANSWER" />
Because the default number of wallet addresses imported by Mobile Wallet Pro is 5, the desktop wallet may have already conducted numerous transactions, exceeding this number of addresses.

Recommended solution: Transfer the balance from the desktop wallet to the mobile wallet.
:::