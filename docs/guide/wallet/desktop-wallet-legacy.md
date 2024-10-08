---
outline: deep
---

# Abelian Desktop Wallet (Legacy) User Manual

Abelian is a quantum-resistant Blockchain project. Its native token, ABEL, is a privacy-preserving coin, which empowers users to send and receive ABELs anonymously and untraceably. Abelian uses lattice-based linkable ring signature, lattice-based commitment schemes, and lattice-based zero-knowledge proof systems to achieve security, quantum resistance, and untraceability. Abelian’s vision is to build a quantum-resistant Blockchain ecosystem supporting smart contracts and enhance other Blockchain networks through post-quantum cryptographic bridging technologies.

The Abelian Foundation has developed a desktop version of the Abelian wallet. With an easy-to-use graphical interface, users can create an ABEL wallet account, export the 24-word wallet recovery phrase, import an existing ABEL wallet account, send or receive ABEL tokens, and manage multiple ABEL wallets within a single Abelian Desktop Wallet. The latest version supports the migration from the legacy desktop wallet to the professional version (Abelian Multi-layer Privacy Wallet).

This guide provides a step-by-step tutorial for installing, configuring, and using the Abelian Desktop Wallet (Legacy).

## Download and Installation

Go to the [Abelian official website download page](https://pqabelian.io/download#desktop) and download the installation package for the Abelian Desktop Wallet (Legacy).

![Abelian's official download page](/desktop-wallet/legacy/download-page.png)
(Download the Abelian Desktop Wallet (Legacy) based on your operating system and CPU architecture)

- If your computer is running Windows, ensure you are using an Intel/AMD x86-64 CPU (ARM architecture CPUs are not supported). To check the processor and system type, go to "System Settings -> System -> Processor/System Type."

- If your computer is running macOS, check whether you are using an Intel chip or Apple silicon (e.g., M1/M2 chips). Download the corresponding installation package based on the processor. To check the processor and system type, click the Apple logo in the top left corner of the desktop and select "About This Mac -> Chip."

- If your computer is running Linux, ensure you are using an Intel/AMD x86-64 CPU (amd64) or AMD ARM CPU (arm64). Download the corresponding installation package based on the processor. To check the processor and system type, for example on Ubuntu Desktop, click the system function icon group in the top right corner of the desktop, click the "Settings" icon in the dropdown menu, and select the "About" tab to view the "Processor/System Type" field.

- Save the Abelian desktop wallet installation package to the desktop.
![Download the installation package to your computer's desktop](/desktop-wallet/legacy/download.png)

- Double-click the compressed file to open the installer for the Abelian Desktop Wallet (Legacy).
![Unzip the installation package](/desktop-wallet/legacy/installer.png)

- Double-click the installer to automatically install the desktop wallet for the current user and create a desktop shortcut. The Abelian Desktop Wallet will automatically run after installation.
![Install and run the Abelian Desktop Wallet (Legacy)](/desktop-wallet/legacy/runing.png)

- Enter the master password twice and click the "**START**" button to launch the wallet (a master password is required for local verification every time the desktop wallet is launched).
![Create a master password for the desktop wallet](/desktop-wallet/legacy/input-password.png)

## Create an ABEL Wallet Account

- Enter the master password and click the "**LOGIN**" button to log in to the Abelian Desktop Wallet.
![Enter the master password to log in to the Abelian Desktop Wallet](/desktop-wallet/legacy/login.png)

- Create an ABEL wallet account:
![Create an ABEL wallet](/desktop-wallet/legacy/create-account.png)
  1. Click the "**Select Account**" button in the upper right corner.
  2. Select "**Create Account**" from the dropdown menu.

- Name your wallet (e.g., "PQabel"①), then click the "**CREATE**" button②.
![Name the wallet account](/desktop-wallet/legacy/account-name.png)

- Wait for a moment until the "**Done**" button appears, then click it to complete the creation of the ABEL wallet account.
![Account creation successful](/desktop-wallet/legacy/create-account-success.png)
(When the account is successfully created, the message "**Account created.**" will be displayed.)

- Select the newly created desktop wallet account.
![Select the wallet account](/desktop-wallet/legacy/select-account.png)
  1. Click the "**Select Account**" button in the upper right corner.
  2. Select the "PQabel" account from the dropdown menu.

- First, start the Abec synchronization service to download full node data.
![Click the start service button to start the Abec service](/desktop-wallet/legacy/start-abec-sync-service.png)

- When the Abec service is active, start the Abewallet synchronization service to download your ABEL wallet data.
![Start the Abewallet service](/desktop-wallet/legacy/start-abewallet-sync-service.png)

## Receive ABELs

- Ensure that both the Abec and Abewallet synchronization services are active.
![Abec and Abewallet services are active](/desktop-wallet/legacy/abec-abewallet-active-services.png)

- Go to the "**RECEIVE**"① tab. If there is no wallet address instance, create one first.
  1. Click the three-dot icon "**More...**"② and select "**Add address**"③ from the dropdown menu.
   ![Create a wallet address](/desktop-wallet/legacy/create-wallet-address.png)<br>
  2. Wait for the wallet address instance to be generated. Once the message "**Successfully generated a new address.**" appears, click the "**Close**" button.
   ![Close the address creation window](/desktop-wallet/legacy/close-create-address.png)<br>
  3. Click the book icon "**Select address**"① and select the newly created wallet address②.
   ![Select the wallet address](/desktop-wallet/legacy/select-address.png)<br>
  4. The "**Address**" field displays the **long address**①. Clicking on the long address string will automatically copy it to the clipboard. Click the "**Short Address**" field and then the "**Click to register a unique short address**"② button to generate a short wallet address.
   ![Generate a short wallet address](/desktop-wallet/legacy/generate-short-address.png)<br>
  5. After generating the short address, clicking on the string in the "Short Address" field will automatically copy the short wallet address to the clipboard.
   ![Copy the short wallet address](/desktop-wallet/legacy/copy-short-address.png)

Once the address is generated, you can use either the long wallet address or the short address for transactions (sending and receiving ABEL).

## Send ABELs

- Go to the **"SEND"** tab and click "**PASTE FROM CLIPBOARD**" or "**IMPORT FROM FILE**" to input the recipient's wallet address instance.
![Input the receiver wallet address](/desktop-wallet/legacy/input-receiver-address.png)

- If a **short address**② is pasted or imported, it will automatically be recognized and resolved into a **long address**③. A message "**Successfully get the full address.**"① will appear upon successful resolution.
![Resolve short address to long address](/desktop-wallet/legacy/short-address-to-full-address.png)

- Enter the **amount**① and **master password**②, then click the "**SEND**" button③ to confirm the transaction.
![Confirm the transaction](/desktop-wallet/legacy/confirm-transaction.png)

## View Transaction History

- Go to the "**TXS**"① tab to view the transaction history. When the **mouse hovers over the txid column**②, the full txid will be displayed above. Clicking the **link** icon will automatically open the [Abelian Blockchain Explorer](https://explorer.pqabelian.io) to show the details of the transaction.
![View transaction history](/desktop-wallet/legacy/transaction-record.png)

## Export ABEL Wallet Account

- Go to the "**SETTING**"① tab, enter the **master password**②, and click the "**REVEAL MNEMONICS**"③ button.
  ![Export account page](/desktop-wallet/legacy/export-account-page.png)

- The 24-word wallet mnemonic (recovery phrase) will be displayed shortly. Click "**Copy to Clipboard**" and save it in a local text file.
  ![Copy wallet mnemonics](/desktop-wallet/legacy/copy-mnemonics.png)

## Import ABEL Wallet Account

Follow these steps to import an ABEL wallet created elsewhere:

1. Click the "**Select Account**" button in the upper right corner, then select "**Import Account**."
![Select Import Wallet Account](/desktop-wallet/legacy/select-import-account.png)<br>

2. Enter the **wallet name**①, the 24-word **mnemonic**②, then click the "**Number of Addresses to Recover**"③ field to open a dialog box and click the "**OK**"④ button.
![Input wallet name and mnemonic](/desktop-wallet/legacy/input-account-name-mnemonics.png)<br>

3. In the recovery address count dialog box, input the **number of times to recover**① and the **number of times tokens were sent**②, then click the "**CONFIRM**"③ button.
![Input the number of addresses to recover](/desktop-wallet/legacy/input-recover-send-times.png)<br>

4. The system will automatically generate the corresponding number in the recovery address instance field. Click the "**IMPORT**" button, and after a while, the message "**Account imported.**" will appear. Click the "**DONE**" button to complete the wallet account import.
![Wallet account import successful](/desktop-wallet/legacy/import-account-success.png)

## Migrate from Abelian Legacy Wallet to Multi-layer Privacy Wallet Account

The Abelian Foundation has developed the Multi-layer Privacy Wallet, which supports creating multi-layer privacy wallet accounts on the desktop. Users can choose the corresponding type for transactions based on the desired privacy level. However, the Abelian Desktop Wallet (Legacy) does not support creating multi-layer privacy wallet addresses, so you need to migrate from the Abelian Desktop Wallet (Legacy) to the Abelian Multi-layer Privacy Wallet. This operation will migrate all balances from the legacy wallet to the multi-layer privacy wallet.

Follow these steps to migrate from the Abelian Desktop Wallet (Legacy) to the Abelian Multi-layer Privacy Wallet:

1. Go to the "**MIGRATION**"① tab, click "**PASTE FROM CLIPBOARD**" or "**IMPORT FROM FILE**"② to input the recipient's multi-layer privacy wallet address instance.
![Migrate wallet](/desktop-wallet/legacy/migrate-mlp-wallet.png)<br>

2. Enter the **master password**①, then click the "**MIGRATION**" button② to start the migration. The "Spendable" field shows the available balance for this migration.
![Input the master password](/desktop-wallet/legacy/input-password-migration.png)<br>

3. In the system's pop-up prompt, review the wallet address for this migration, and click the "**I CONFIRM THIS MIGRATION.**" button. Once the message "**1 Transaction submitted.**" appears, the wallet migration is complete.
![Migration confirmation](/desktop-wallet/legacy/migration-confirm.png)

4. Go to the "**TXS**" tab to view the corresponding transaction record. When the final status is "**Confirmed**," the migration is successful.