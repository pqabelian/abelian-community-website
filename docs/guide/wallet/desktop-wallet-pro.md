---
outline: deep
---

# Abelian Desktop Wallet Pro (MLP) Manual

## Introduction

This document aims to provide professionals and advanced users with comprehensive steps to successfully install and configure the Abelian Desktop Wallet Pro (MLP), offering you unprecedented control over transaction privacy and security.

**Multi-layer Privacy:** It supports two innovative wallet address types:

- **Fully-Private Address:** This feature ensures that your transactions are untraceable, your wallet balance remains confidential, providing maximum security and anonymity.

- **Pseudo-Private Address:** Similar to Bitcoin's privacy model, this option allows publicly visible balances and traceable transactions but benefits from lower fees and faster transaction speeds.

**Key Features:**

- **Flexible Privacy Levels:** Choose between fully-private and pseudo-private wallet addresses based on your privacy needs.

- **Seamless Transfers:** Easily transfer ABEL between fully-private and pseudo-private wallets.

- **Efficient and Stable Chain Access:** By using supernode access, users no longer need to locally run Abec, eliminating the time required for local blockchain synchronization and making the use of Abec services more efficient.

With **Abelian Desktop Wallet Pro**, enjoy enhanced privacy protection, faster transaction speeds, lower fees, and the flexibility to manage privacy on your terms.

## Steps to Operate

---

### Download and Installation

Go to the [Abelian Official Website Download Page](https://pqabelian.io/download#desktop) to download the installation package for Abelian Desktop Wallet Pro (MLP).  
![Visit the Abelian official download page](/desktop-wallet/pro/download-page.png)
(Download Abelian Desktop Wallet Pro according to your operating system and CPU architecture)

- If your computer runs Windows, ensure you are using an Intel/AMD x86-64 CPU (ARM CPUs are not supported). To check your processor and system type, go to "System Settings -> System -> Processor/System Type."

- If your computer runs macOS, check whether you are using an Intel chip or Apple Silicon (e.g., M1/M2 chip). Download the corresponding installation package based on the processor. To check your processor and system type, click the Apple icon in the top-left corner of your desktop, select "About This Mac -> Overview."

- If your computer runs Linux, ensure you are using an Intel/AMD x86-64 CPU (amd64) or an AMD ARM CPU (arm64). Download the corresponding installation package based on the processor. For example, on Ubuntu Desktop, click the system function icon group in the top-right corner of the desktop, click the "Settings" icon in the dropdown menu, and select the "About" tab to view the "Processor/System Type" field.

---

**This tutorial uses the Windows 1.0.0 version as an example:**

1. Save the installation package for Abelian Desktop Wallet to your desktop.
![Download the installation package to your computer desktop](/desktop-wallet/pro/download.png)

2. Extract the compressed file to open the Abelian Desktop Wallet Pro installer.
![Unzip the installation package](/desktop-wallet/pro/installer.png)

3. Double-click the installer, which will automatically install the desktop wallet for the current user and create a desktop shortcut. After installation, Abelian Desktop Wallet Pro will automatically run.
![Install and run Abelian Desktop Wallet Pro](/desktop-wallet/pro/runing.png)

4. Enter the master password twice and click the "**START**" button to launch the wallet (the master password is required for local verification each time the desktop wallet is started). 
![Create a master password for the desktop wallet](/desktop-wallet/pro/input-password.png)

---

### Create an ABEL Wallet Account

1. Enter the master password and click the "**LOGIN**" button to log in to Abelian Desktop Wallet Pro.
![Enter the master password to log in to the Abelian Desktop Wallet](/desktop-wallet/pro/login.png)

2. To create an ABEL wallet account:
![Create an ABEL wallet](/desktop-wallet/pro/create-account.png)
  - Switch to the "**STATUS**"" tab and then click on the "**Select Account**" button in the top right corner.
  - Select "**Create Account**" from the dropdown menu.

3. Name your wallet (e.g., "PQabelPro"①), then click on the "**CREATE**" button
![Name the wallet account](/desktop-wallet/pro/account-name.png)

4. Wait until the "**Done**"① button appears, then click it to complete the creation of the ABEL wallet account
![Account creation successful](/desktop-wallet/pro/create-account-success.png)
(When the account is successfully created, the message "**Account created.**"② will be displayed)

5. Select the newly created desktop wallet account:
![Select the wallet account](/desktop-wallet/pro/select-account.png)
  - Click on the "**Select Account**" button in the top right corner.
  - Select the newly created account  (e.g., "PQabelPro") from the dropdown menu.

6. Click the start button to initiate the wallet synchronization service to download your ABEL wallet data. Click the log button to view the wallet synchronization logs. The progress bar will display the synchronization height and percentage progress in real time.
![Start the wallet synchronization service](/desktop-wallet/pro/start-abewallet-sync-service.png)

---

### Receive ABEL

1. Ensure the wallet synchronization service is running; otherwise, you won't be able to create a wallet address.

2. Navigate to the "**RECEIVE**"① tab. If no wallet address instance exists, select the privacy type to create one: "**Fully-Private**"② or "**Pseudo-Private**"③, then click the "**GENERATE A NEW ADDRESS**"④ button.
![Create a wallet address](/desktop-wallet/pro/create-wallet-address.png)<br>

:::tip
Pseudo-private addresses provide lower privacy than fully-private addresses but offer faster transfer speeds. Fully-private addresses prioritize privacy and security, albeit with slower processing speeds.
:::

3. For example, to create a Pseudo-Private address, wait until the wallet address instance is generated, and the status message "**Generate a new Pseudo-Private address in this account**" changes to "**Successfully**." Click the "**Close**" button.
![Close wallet address creation](/desktop-wallet/pro/close-create-address.png)<br>

4. In the "**5 Most Recently Generated Addresses**" section, the generated address list will be displayed. Click the string next to "**Full Address**"① to automatically copy the full wallet address to the clipboard. To generate a short wallet address, click the "**Click to register a unique short address**" button next to "**Short Address**"②.  
![Generate a short wallet address](/desktop-wallet/pro/generate-short-address.png)<br>

5. After successfully generating a short address, click the string next to "**Short Address**" to automatically copy the short address to the clipboard.  
  ![Copy the short wallet address](/desktop-wallet/pro/copy-short-address.png)<br>

:::tip
Once an address is generated, you can use either the full wallet address or the short address to transact (send and receive ABEL). Currently, we recommend using the short address as it is easier to save and send due to fewer characters.
:::

---

### Send ABEL

Abelian Desktop Wallet Pro supports multi-layer privacy transactions, allowing users to select different privacy levels based on their needs. The multi-layer privacy feature is designed to enhance transaction anonymity and security. When sending ABEL tokens, you can choose the desired privacy level. For additional features, refer to [this guide](/guide/wallet/mlp-wallet-cli#service-capabilities).

1. **Ensure synchronization progress reaches 100%.**

2. Navigate to the "**SEND**"① tab. In the "**Recipients**" section, click the "**ADD**"② button to batch add recipient addresses and amounts. Note the recipient address quota limit. 
![Enter recipient wallet address](/desktop-wallet/pro/add-receiver-address.png)

3. Fill in the recipient's wallet address in the "**Address (Full or Short)**"① field. The system will automatically distinguish between short and full addresses. Enter the amount to be sent (ABEL) in the "**Amount (ABEL)**"② field, then click the "**Save**"③ button to complete the addition.
![Short address resolves to full address](/desktop-wallet/pro/add-receiver-address2.png)

4. After saving, you can modify the transaction information by clicking the "**Edit**"① button or remove the transaction by clicking the "**Delete**"② button.
![Modify transaction information](/desktop-wallet/pro/edit-delete-transaction.png)

5. In the "**Input**" section, you can view the available balance for transfers. By default, "**Spendable Pseudo-Private ABELs**"① and "**Spendable Fully-Private ABELs**"② are checked. Focus only on the "**Total Spendable ABELs**"③ value. The system will automatically transfer insufficient balances to the corresponding privacy address. 
![View balance and select transfer address privacy type](/desktop-wallet/pro/check-balance-select-address-privacy.png)

:::tip
Recently received ABEL tokens will have a few hours of locking period. These locked amounts will not appear in the available balance in the Input section.
:::

6. In the "**UTXO Change**"④ section, select the privacy type for the transfer address. Enter the "**Master Password**"⑤ to unlock the desktop wallet Pro, then click the "**PREVIEW**"⑥ button to view the transaction details.

7. In the transaction preview interface, you can view the transaction address and amount①, the privacy address type used for the transfer②, and transaction fees③. Click "**I WANT TO DOUBLE CHECK IT.**"④ to return to the "**SEND**" page for modifications, or click "**I CONFIRM THIS TRANSACTION.**"⑤ to complete the transfer.
![Preview transfer](/desktop-wallet/pro/preview-transaction.png)

8. After a successful transfer, the transaction's TXID will be displayed for tracking confirmation progress on the blockchain explorer. Click the "**CLOSE**" button to return to the main interface.
![Transaction successful](/desktop-wallet/pro/transaction-success.png)

---

### View Transaction History

1. Go to the "**TXS**"① tab. The "**View transactions**" list displays the transaction history. When hovering over the **txid column**②, the full txid is displayed above. Clicking the link icon will automatically open the transaction details page on the [Abelian Blockchain Explorer](https://explorer.pqabelian.io). Newly submitted transactions will show a status of "**Pending**."
![View transaction history](/desktop-wallet/pro/transaction-record.png)

2. After 1-5 block confirmations, the transaction status will change to "**Confirmed**"②. The **transaction amount**① will then be displayed correctly. If the transaction is not displayed or the status is not yet confirmed, click the "**REFRESH NOW**"③ button in the top-right corner of the interface to refresh the transaction list. 
![Transaction confirmed](/desktop-wallet/pro/transaction-confirmed.png)

---

### Export ABEL Wallet Account

1. Go to the "**SETTING**"① tab, enter your **master password**②, and click the "**REVEAL MNEMONICS**"③ button
  ![Export account page](/desktop-wallet/pro/export-account-page.png)<br>

2. The 24-word wallet mnemonic (recovery phrase) will be displayed shortly. Click "**Copy to Clipboard**" and paste it into a local text file for safekeeping.
  ![Copy wallet mnemonic](/desktop-wallet/pro/copy-mnemonics.png)

---

### Import ABEL Wallet Account

Follow these steps to import an ABEL wallet created elsewhere:

1. Go to the "**STATUS**"① tab, click the "**Select Account**" button in the top-right corner of the interface, and select "**Import Account**."
![Select to import wallet account](/desktop-wallet/pro/select-import-account.png)<br>

2. Enter the **wallet name**① (case-insensitive) and the 24-word wallet **mnemonic**②. For example, use the name "**PQabelPro2**," then click the "**IMPORT**"⑤ button.
![Enter wallet name and mnemonic](/desktop-wallet/pro/input-account-name-mnemonics.png)<br>

   **[Optional]** To import mnemonics from **Abelian Multi-Layer Privacy Wallet (CLI) (AbewalletMLP)**, click "**Advance Options**"③ to expand more options, then select "**AbewalletMLP's Version**"④ and choose the corresponding version.

:::tip
The Desktop Wallet Pro does not support importing mnemonics from **Abelian Legacy Wallet (CLI) (AbewalletLegacy)** or **Desktop Wallet Legacy.** When importing mnemonics from **Abelian Multi-Layer Privacy Wallet (CLI) (AbewalletMLP)**, replace the delimiter "comma (,)" with a "space ( )."
:::

3. After the message "**Account imported.**" appears, click the "**DONE**" button to complete the wallet account import.
![Wallet account import successful](/desktop-wallet/legacy/import-account-success.png)

---

### Migration from Legacy Wallet 

If you are still using Abelian Desktop Wallet Legacy, you can migrate your legacy account to Abelian Desktop Wallet Pro—unlock enhanced privacy and flexibility!  

For detailed operations, please refer to the **Migration Steps in the Desktop Wallet Legacy User Manual** (to be released with the new version of Desktop Wallet Legacy, stay tuned...).