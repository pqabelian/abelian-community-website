---
outline: deep
---

# Abelian Wallet FAQ

## Desktop Wallet Legacy Issues

### <Badge type="warning" text="QUESTION" /> Error message during transfer: "allowed max number 5"

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

When importing, please enter a value greater than the number of transactions. If you're unsure about the transaction count, refer to the [User Guide](/guide/wallet/desktop-wallet-legacy#import-abel-wallet-account) for estimation methods, or simply input a relatively large number (e.g., 100).

Note: Balance only updates when switching tabs in that wallet.
:::

---

### <Badge type="warning" text="QUESTION" /> How to resolve the issue of the Windows version desktop wallet not running (abelwallet programs do not exist, or there are no logs when running them)?

::: info <Badge type="tip" text="ANSWER" />
The program files abelwallet.exe maybe mistakenly identified as a virus by 'Windows Defender'.

After installation, please go to 'Windows Security -> Virus & threat protection -> Protection history' to 'Allow' this threat. It is recommended to add the installation directory path in 'Virus & threat protection settings -> Exclusions -> Add or remove exclusions'.
:::

---

### <Badge type="warning" text="QUESTION" /> Can the data directory for the Windows desktop wallet be changed?

::: info <Badge type="tip" text="ANSWER" />
Follow these steps to change the storage location of desktop wallet data directory:

1. Close the desktop wallet.
2. System Properties --> Advanced --> Environment Variables --> Add a new user environment variable:
    - Variable name: ABELWALLET_HOME
    - Variable value: (Enter the full path of a folder)
3. Move the following files from `C:\Users\<USERNAME>\AppData\Roaming\Abelian Wallet` to the new path:
    - Abewallet
    - ans-cache.json
    - config.json
    - state.json
4. Restart your system and then run the desktop wallet again.
:::

---

### <Badge type="warning" text="QUESTION" /> Why are abec and abewallet still the old versions after the desktop wallet upgrade?

::: info <Badge type="tip" text="ANSWER" />
This is a historical bug in the desktop wallet, which will be fixed in version 4.1.0.

**Temporary solution:**

- Please delete the following directory first:

```
# Windows:
C:\Users\<USERNAME>\AppData\Roaming\Abelian Wallet\dist
# Linux:
~/.config/Abelian Wallet/dist
# macOS:
/Users/<USER_NAME>/Library/Application Support/Abelian Wallet/dist
```

- Reinstall the new version of the desktop wallet.
:::

---

## Expired Desktop Wallet Legacy Issues

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

### <Badge type="warning" text="QUESTION" /> How to resolve the issue of the Windows version desktop wallet not running (abec and abelwallet programs do not exist, or there are no logs when running them)?

::: info <Badge type="tip" text="ANSWER" />
The program files (abec.exe, abelwallet.exe) maybe mistakenly identified as a virus by 'Windows Defender'.

After installation, please go to 'Windows Security -> Virus & threat protection -> Protection history' to 'Allow' this threat. It is recommended to add the installation directory path in 'Virus & threat protection settings -> Exclusions -> Add or remove exclusions'.
:::

---

## Desktop Wallet Pro Issues

### <Badge type="warning" text="QUESTION" /> Does the wallet address generated by the Desktop Wallet Pro support Maxpool mining?

::: info <Badge type="tip" text="ANSWER" />
The wallet addresses generated by the Desktop Wallet Pro (MLP) are currently not supported as mining addresses for the Maxpool mining pool. The pool will be upgraded to support the new address format in the future. Please stay tuned to announcements on the [official Discord channel](https://discord.gg/Rrb33mC3Kc) for updates.
:::

---

### <Badge type="warning" text="QUESTION" /> Does the Desktop Wallet Pro support transfers with mobile wallets and exchanges?
::: info <Badge type="tip" text="ANSWER" />
The Desktop Wallet Pro (MLP) currently cannot transfer with the mobile wallet (Abelian Pro). 

We’re working on upgrades with exchanges, and updates will be announced on the [official Discord](https://discord.gg/Rrb33mC3Kc) and the exchange.
:::

---

## Mobile/Phone Wallet (Abelian Pro) Issues

### <Badge type="warning" text="QUESTION" /> Why is the balance zero or why doesn't the balance match after importing an account with a mnemonic phrase in Abelian Pro?

::: info <Badge type="tip" text="ANSWER" />
Because the default number of wallet addresses imported by Mobile Wallet Pro is 5, the desktop wallet may have already conducted numerous transactions, exceeding this number of addresses.

Recommended solution: Transfer the balance from the desktop wallet to the mobile wallet.
:::

---

### <Badge type="warning" text="QUESTION" /> After updated Abelian Pro, the bottom navigation bar is gone and the wallet switch list is empty.

::: info <Badge type="tip" text="ANSWER" />
This issue occurs in version v1.0.5. If the problem persists in later versions, you can refer to the following solution.

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

---

### <Badge type="warning" text="QUESTION" /> What is the difference between wallet Legacy and MLP address formats?

::: info <Badge type="tip" text="ANSWER" />
The key difference between Legacy and MLP wallet long addresses is the number of characters. The short address is composed of the address prefix + address privacy type + HASH of the long address. The combination of the prefix and privacy type allows for an intuitive distinction. For detailed documentation, please check [this link](/guide/abel-address-format).
:::

---

### <Badge type="warning" text="QUESTION" /> What Features Are Missing in the Mobile Wallet (Abelian Pro) Compared to the Desktop Wallet Legacy/Pro?

::: info <Badge type="tip" text="ANSWER" />
The mobile wallet (Abelian Pro) is more convenient for use on the go, allowing access anytime without needing to sync data. However, it lacks some important features compared to the desktop versions, including the following:

1. Fully Private Wallet Addresses
   - Desktop Wallet Legacy Only supports creating Legacy wallet addresses.
   - Desktop Wallet Pro (MLP) Supports creating Abelian Multi-Layer Privacy (Pseudo-Private and Fully-Private) addresses. Fully-Private addresses offer the highest level of privacy, ideal for users focused on private transactions.
   - Mobile wallet (Abelian Pro) Supports Pseudo-Private addresses. New versions will gradually encourage users to migrate from Legacy to MLP addresses.

2. One-Click Migration Function
   - Desktop Wallet Legacy Offers a one-click migration function to transfer all ABEL from a Legacy account to an MLP account, simplifying account management.
   - Mobile wallet (Abelian Pro) Does not have a one-click migration feature.

3. Advanced Transaction Options
   - Desktop Wallet Pro Provides more advanced transaction options and settings, suitable for users needing complex transactions.
   - Mobile wallet (Abelian Pro) Offers more basic transaction options, suitable for everyday use.

These differences make the desktop wallet more suitable for users requiring advanced features and higher privacy, while the mobile wallet is ideal for convenient daily use.
:::