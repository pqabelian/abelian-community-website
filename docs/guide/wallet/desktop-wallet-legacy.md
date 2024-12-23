---
outline: deep
---

# Abelian Desktop Wallet (Legacy Version) User Manual

Abelian is a quantum-resistant blockchain project, and its native token ABEL is a privacy-preserving currency that allows users to send and receive ABEL anonymously and untraceably. Abelian employs lattice-based linkable ring signatures, lattice-based commitment schemes, and lattice-based zero-knowledge proof systems to ensure security, quantum resistance, and untraceability. The vision of Abelian is to build a quantum-resistant blockchain ecosystem that supports smart contracts and enhances other blockchain networks through post-quantum cryptographic bridging technology.

The Abelian Foundation has developed the desktop version of the Abelian wallet, which allows users to create ABEL wallet accounts through an easy-to-use graphical interface, export a 24-word mnemonic phrase for wallet recovery, import existing ABEL wallet accounts, send or receive ABEL tokens, and manage multiple ABEL wallet instances within a single Abelian desktop wallet.

This user guide provides instructions for installing, configuring, and using the features of the Abelian Desktop Wallet (Legacy Version).

## Download and Installation

Please visit the [Abelian official website download page](https://pqabelian.io/download#desktop) to download the installation package for the Abelian Desktop Wallet (Legacy Version).

![Abelian's official download page](/desktop-wallet/legacy/download-page.png)
(Download the appropriate version of the Abelian Desktop Wallet Legacy based on your operating system and CPU architecture.)

- **Windows Users**: Ensure you are using an Intel/AMD x86-64 CPU (ARM architecture CPUs are not supported). To check your processor and system type, go to “System Settings -> System -> Processor/System Type.”

- **Mac Users**: Ensure you are using an Intel chip or Apple Silicon (such as M1/M2 chips). Download the corresponding installation package based on your processor. To check your processor and system type, click the Apple logo in the top left corner of the desktop and select “About This Mac -> Chip.”

- **Linux Users**: Ensure you are using an Intel/AMD x86-64 CPU (amd64) or AMD ARM CPU (arm64). Download the appropriate installation package based on your processor. For example, in Ubuntu Desktop, click the system icon group in the top right corner of the desktop, select the “Settings” icon from the dropdown menu, and check the “About” tab to view the “Processor/System Type” section.

---

**This tutorial uses Windows version 4.2.0 as an example:**

- Save the Abelian Desktop Wallet installation package to your desktop.
![Download the installation package to your computer's desktop](/desktop-wallet/legacy/download.png)<br>

- Double-click the compressed file to launch the installation program for the Abelian Desktop Wallet Legacy.
![Unzip the installation package](/desktop-wallet/legacy/installer.png)<br>

- Double-clicking the installer will automatically install the desktop wallet for the current user and create a desktop shortcut, then it will automatically run the desktop wallet.
![Install and run the Abelian Desktop Wallet (Legacy)](/desktop-wallet/legacy/runing.png)<br>

- Enter your master password twice and click the “**START**” button to launch the wallet (you will need to enter the master password for local verification each time you start the desktop wallet).
![Create a master password for the desktop wallet](/desktop-wallet/legacy/input-password.png)

## Create an ABEL Wallet Account

- Enter your master password and click the “**LOGIN**” button to log into the Abelian Desktop Wallet.
![Enter the master password to log in to the Abelian Desktop Wallet](/desktop-wallet/legacy/login.png)<br>

- To create an ABEL wallet account:
![Create an ABEL wallet](/desktop-wallet/legacy/create-account.png)<br>
  1. Click “**Select Account**” in the upper right corner.
  2. Choose “**Create Account**” from the dropdown menu.

- Name your wallet (e.g., “PQabel”①) and click the “**CREATE**”② button.
![Name the wallet account](/desktop-wallet/legacy/account-name.png)<br>

- Wait a moment until the “**Done**”① button appears, then click it to complete the creation of the ABEL wallet account.
![Account creation successful](/desktop-wallet/legacy/create-account-success.png)<br>
(When the account is successfully created, you will see the message “**Account created.**”②)

- Select the newly created desktop wallet account:
![Select the wallet account](/desktop-wallet/legacy/select-account.png)<br>
  1. Click “**Select Account**” in the upper right corner.
  2. Choose the “PQabel” account from the dropdown menu.

- Click the “**Start service**”① button to synchronize your ABEL wallet data. The “**View service log**”② button on the left allows advanced users to debug if synchronization issues arise.
![Start the wallet synchronization service](/desktop-wallet/legacy/start-abewallet-sync-service.png)

## Receive ABELs

- Ensure that the wallet synchronization service is active and that the synchronization status has reached 100%.
![Check the synchronization status](/desktop-wallet/legacy/abewallet-synced.png)<br>

- Go to the “**RECEIVE**”① tab. If there are no wallet address instances, you need to create one first.
  1. Click the “**More...**”② button with three dots, and select “**Add address**”③ from the dropdown menu.
   ![Create a wallet address](/desktop-wallet/legacy/create-wallet-address.png)<br>
  2. Wait for the wallet address instance to be generated until you see the message “**Successfully generated a new address.**” Then click the “**Close**” button.
   ![Close the address creation window](/desktop-wallet/legacy/close-create-address.png)<br>
  3. Click the “**Select address**”① button (book icon) to choose the wallet address you just created②.
   ![Select the wallet address](/desktop-wallet/legacy/select-address.png)<br>
  4. The “**Address**” field displays the **long address**①. Clicking the long address string will automatically copy the wallet long address to the clipboard; clicking the “**Short Address**” field and then the “**Click to register a unique short address.**”② button will generate a short wallet address.
   ![Generate a short wallet address](/desktop-wallet/legacy/generate-short-address.png)<br>
  5. After successfully generating the short address, you will see the message “**Registration succeeded. Click to continue.**” Then clicking the string in the “**Short Address**” field will automatically copy the wallet short address to the clipboard.
   ![Copy the short wallet address](/desktop-wallet/legacy/copy-short-address.png)

Once the address is generated, you can use either the long wallet address or the short address for transactions (sending and receiving ABEL).

## Send ABELs

- Go to the “**SEND**” tab and click “**PASTE FROM CLIPBOARD**”① or “**IMPORT FROM FILE**”② to input the recipient's wallet address.
![Input the receiver wallet address](/desktop-wallet/legacy/input-receiver-address.png)<br>

- If the pasted or imported address is a **short address**②, the system will automatically recognize and resolve it to a **long address**③. After successful resolution, you will see the message “**Successfully get the full address.**”①
![Resolve short address to long address](/desktop-wallet/legacy/short-address-to-full-address.png)<br>

- Enter the **amount**① and your **master password**②, then click the “**SEND**”③ button to submit.
![Confirm the transaction](/desktop-wallet/legacy/confirm-transaction.png)<br>

- After submission, a transaction preview window will pop up, allowing you to review the sending wallet account①, transaction amount②, and recipient wallet address③. You can click the “**I WANT TO DOUBLE CHECK IT.**”④ button to return to the previous “**SEND**” page for modifications, or you can click the “**I CONFIRM THIS TRANSACTION.**”⑤ button to complete the transaction.
![Transaction preview](/desktop-wallet/legacy/preview-transaction.png)

## View Transaction History

- Go to the “**TXS**”① tab to view the transaction history. When **hovering over the txid column**②, the full txid will be displayed at the top. Clicking the link icon will automatically redirect you to the [Abelian Blockchain Explorer](https://explorer.pqabelian.io) to display the details of the transaction.
![View transaction history](/desktop-wallet/legacy/transaction-record.png)

## Export ABEL Wallet Account

- Go to the “**SETTING**”① tab, enter your **master password**②, and click the “**REVEAL MNEMONICS**”③ button.
  ![Export account page](/desktop-wallet/legacy/export-account-page.png)<br>

- A list of 24 words representing your wallet mnemonic (recovery phrase) will appear. Click “**Copy to Clipboard**” and paste it into a local text file for safekeeping.
  ![Copy wallet mnemonics](/desktop-wallet/legacy/copy-mnemonics.png)

## Import ABEL Wallet Account

:::tip
After upgrading the desktop wallet legacy version from 4.1.1 or earlier to version 4.2.0, you will need to re-import wallet accounts. Starting from version 4.2.0, it is no longer necessary to synchronize Abec full node data, significantly improving synchronization speed and reducing disk space usage.
:::

Follow these steps to import an ABEL wallet created elsewhere:

1. Click “**Select Account**” in the upper right corner, then select “**Import Account**.”
![Select Import Wallet Account](/desktop-wallet/legacy/select-import-account.png)<br>

2. Enter the **wallet name**①, the **mnemonic phrase** of 24 words②, and click on the “**Number of Addresses to Recover**”③ field, which will pop up a dialog box. Click the “**OK**”④ button.
![Input wallet name and mnemonic](/desktop-wallet/legacy/input-account-name-mnemonics.png)<br>

:::tip
You need to estimate the number of addresses to recover. Here are three reference methods:
  a. If the desktop wallet is version 4.1.1, you can refer to the steps for [Receiving ABELs](#接收-abels) to create a new address, then check the newly created address name suffix in the “Select address” dropdown menu. The suffix `wallet name#m number` indicates the number you should fill in for the number of addresses to recover.
  b. If the desktop wallet is lower than version 4.1.1 and method a fails to create a new address, you can check the transaction count in the TXS tab. Multiply this number by 2, and if the wallet has been imported before, add the number of addresses filled in during the last recovery.
  c. If the wallet version is too old to run and check transaction records, you can estimate a number for the recovery address count, such as 100, but do not enter unrealistic or excessively large values to avoid causing the program to crash.
:::

3. The system will automatically generate the corresponding number in the recovery address instance count field. Click the “**IMPORT**” button. You will later see the message “**Account imported.**” Click the “**DONE**” button to complete the wallet account import.
![Wallet account import successful](/desktop-wallet/legacy/import-account-success.png)

## Migrating ABEL Legacy Wallet to Multi-layer Privacy Wallet Account

The Abelian Foundation has developed the Multi-layer Privacy Wallet (Abelian Multi-layer Privacy Wallet), which supports creating multi-layer privacy wallet accounts on the desktop. Users can choose the corresponding type for transactions based on their privacy needs. However, the Abelian desktop wallet legacy version does not support creating multi-layer privacy wallet addresses, so you need to migrate the Abelian Desktop Wallet Legacy to the Abelian Desktop Wallet Professional Version (MLP). This operation will migrate all balances from the legacy wallet to the multi-layer privacy wallet.

Follow these steps to migrate the Abelian Desktop Wallet Legacy to the Abelian desktop wallet Pro (MLP):

1. Go to the “**MIGRATION**”① tab and click “**PASTE FROM CLIPBOARD**” or “**IMPORT FROM FILE**”② to input the recipient's multi-layer privacy wallet address.
![Migrate wallet](/desktop-wallet/legacy/migrate-mlp-wallet.png)<br>

2. Enter your **master password**① and click the “**BEGIN**”② button to proceed with the migration. The line will show the “Spendable” amount for this migration.
![Input the master password](/desktop-wallet/legacy/input-password-migration.png)<br>

3. A prompt will pop up to preview the **wallet account**① and the **target wallet address**② for the migration. You can click the “**I WANT TO DOUBLE CHECK IT.**”④ button to return to the previous “**MIGRATION**” page for modifications, or you can click the “**I CONFIRM THIS MIGRATION.**”⑤ button to submit.
![Migration confirmation](/desktop-wallet/legacy/migration-confirm.png)

4. After submission, a progress window will display until you see the message “**1 Transactions submitted.**” indicating that the wallet migration operation is complete.
![Migration complete](/desktop-wallet/legacy/migration-progress.png)

1. Go to the “**TXS**” tab to view the corresponding transaction record. When the final status shows “**Confirmed**,” it indicates that the migration was successful.

:::tip
After upgrading the desktop wallet legacy version to 4.2.0, it is recommended that users migrate to the [Desktop Wallet Professional Version](/zh/guide/wallet/desktop-wallet-pro). The professional version does not require filling in the address count option during wallet import operations and is more user-friendly for large amount transfers, avoiding the “allowed max number 5” error in most cases.
:::