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

### <Badge type="warning" text="QUESTION" /> Why is the balance in my desktop wallet incorrect (or showing as zero)?

::: info <Badge type="tip" text="ANSWER" />
Because the correct address count was not entered when re-importing the wallet account, This results in the balance being incorrect (or showing as zero).

Please enter a number greater than the transaction count during import. If you are unsure of the transaction count, please enter a relatively large number (e.g., 100).

Note: Balance only updates when switching tabs in that wallet.
:::

---

### <Badge type="warning" text="QUESTION" /> How to solve the issue of the Windows version Desktop Wallet not running (abec and abelwallet programs do not exist, no logs)?

::: info <Badge type="tip" text="ANSWER" />
The program files (abec.exe, abelwallet.exe) maybe mistakenly identified as a virus by 'Windows Defender'.

After installation, please go to 'Windows Security -> Virus & threat protection -> Protection history' to 'Allow' this threat. It is recommended to add the installation directory path in 'Virus & threat protection settings -> Exclusions -> Add or remove exclusions'.
:::

---

## Mobile Wallet (Pro) Issues

### <Badge type="warning" text="QUESTION" /> Why is the balance zero or why doesn't the balance match after importing an account with a mnemonic phrase in Mobile Wallet Pro?

::: info <Badge type="tip" text="ANSWER" />
Because the default number of wallet addresses imported by Mobile Wallet Pro is 5, the desktop wallet may have already conducted numerous transactions, exceeding this number of addresses.

Recommended solution: Transfer the balance from the desktop wallet to the mobile wallet.
:::

---

### <Badge type="warning" text="QUESTION" /> After updated Mobile Wallet Pro, the bottom navigation bar is gone and the wallet switch list is empty.

::: info <Badge type="tip" text="ANSWER" />
If you find that the navigation bar is missing and you can't switch accounts after updating Mobile Wallet Pro (due to a bug causing accounts not to display), you can follow these steps:

1. Backup your current account's private key;
2. Create a new account. At this point, the list will only show the new account, but the bottom navigation bar will appear;
3. Click on the bottom navigation bar and go to "Settings -> Network," switch to "Testnet," and then switch back to "Mainnet." This should display the wallet account list again.
:::

---

## For Other Wallet Issues

### <Badge type="warning" text="QUESTION" /> How to get the long address of the wallet (for ABEL mining)?

::: info <Badge type="tip" text="ANSWER" />
For the mobile wallet, tap the three dots in the top right corner to open the menu, then select "**Export Long Address**"

For the mobile wallet Pro, tap on the profile icon in the top right corner, Tap on "**Account Details**," and on this page, the long address will be displayed.

Steps to get the long address in the desktop wallet:

1. Click to synchronize **abec** and **abewallet**;

2. Click on the **RECEIVE** tab;

3. Click on the **...** (three dots icon) in the interface, and select "**Add address**" from the drop-down menu (this step is required for newly created wallets, otherwise skip this step);

4. After clicking on the **...**, click on the "**book page**" icon, select an existing wallet address from the drop-down menu, and the string of characters starting with **00000000** below the line "**Address:**" is the long address.
:::