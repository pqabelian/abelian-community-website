---
outline: deep
---

# Abelian Desktop Wallet Pro User Manual

Abelian is a quantum-resistant blockchain project. Its native token, ABEL, is a privacy-preserving coin that allows users to send and receive ABEL anonymously and untraceably. Abelian utilizes lattice-based linkable ring signatures, lattice-based commitment schemes, and lattice-based zero-knowledge proof systems to ensure security, quantum resistance, and untraceability. Abelian's vision is to build a quantum-resistant blockchain ecosystem that supports smart contracts and enhances other blockchain networks through post-quantum cryptographic bridging technologies.

The Abelian Foundation has developed a professional version of the Abelian desktop wallet, called the Abelian Multi-layer Privacy Wallet. This wallet provides users with advanced privacy features, allowing for multi-layer privacy transactions. Users can choose different privacy levels for transactions depending on their needs. For more information on the features of the multi-layer privacy wallet, please refer to [here](/guide/wallet/mlp-wallet-cli#product-features).

Please migrate your Legacy wallet to the Pro wallet from the Desktop Wallet (Legacy).

This guide provides a step-by-step tutorial for installing, configuring, and using the Abelian Desktop Wallet Pro.

## Download and Installation

Go to the [Abelian official website download page](https://pqabelian.io/download#desktop) and download the installation package for the Abelian Desktop Wallet Pro.
![Visit the Abelian official download page](/desktop-wallet/pro/download-page.png)
(Download the Abelian Desktop Wallet Pro based on your operating system and CPU architecture)

- If your computer is running Windows, ensure you are using an Intel/AMD x86-64 CPU (ARM architecture CPUs are not supported). To check the processor and system type, go to "System Settings -> System -> Processor/System Type."

- If your computer is running macOS, check whether you are using an Intel chip or Apple silicon (e.g., M1/M2 chips). Download the corresponding installation package based on the processor. To check the processor and system type, click the Apple logo in the top left corner of the desktop and select "About This Mac -> Chip."

- If your computer is running Linux, ensure you are using an Intel/AMD x86-64 CPU (amd64) or AMD ARM CPU (arm64). Download the corresponding installation package based on the processor. To check the processor and system type, for example on Ubuntu Desktop, click the system function icon group in the top right corner of the desktop, click the "Settings" icon in the dropdown menu, and select the "About" tab to view the "Processor/System Type" field.

---

**This tutorial uses version 1.0.0 of Windows as an example:**

- Save the Abelian desktop wallet installation package to the desktop
![Download the installation package file to your computer's desktop](/desktop-wallet/pro/download.png)

- Double-click the compressed file to open the Abelian Desktop Wallet Pro installer
![Unzip the installation package](/desktop-wallet/pro/installer.png)

- Double-click the installer to automatically install the desktop wallet for the current user and create a desktop shortcut. After installation, Abelian Desktop Wallet will automatically run
![Install and run Abelian Desktop Wallet Pro](/desktop-wallet/pro/runing.png)

- Enter the master password twice and click the "**START**" button to launch the wallet (a master password is required for local verification every time the desktop wallet is launched)
![Create a master password for the desktop wallet](/desktop-wallet/pro/input-password.png)

## Create an ABEL Wallet Account

- Enter the master password and click the "**LOGIN**" button to log in to the Abelian Desktop Wallet.
![Enter the master password to log in to the Abelian Desktop Wallet](/desktop-wallet/pro/login.png)

- To create an ABEL wallet account:
![Create an ABEL wallet](/desktop-wallet/pro/create-account.png)
  - Click the "**Select Account**" button in the top right corner.
  - Select "**Create Account**" from the dropdown menu.

- Name your wallet (e.g., "PQabelPro"①), then click the "**CREATE**" button
![Name the wallet account](/desktop-wallet/pro/account-name.png)

- Wait until the "**Done**"① button appears, then click it to complete the creation of the ABEL wallet account
![Account creation successful](/desktop-wallet/pro/create-account-success.png)
(When the account is successfully created, the message "**Account created.**"② will be displayed)

- Select the newly created desktop wallet account:
![Select the wallet account](/desktop-wallet/pro/select-account.png)
  - Click the "**Select Account**" button in the top right corner.
  - Select the newly created "PQabelPro" account from the dropdown menu.

- Start the Abec synchronization service to download full node data.
![Click the start service button to activate the Abec service](/desktop-wallet/pro/start-abec-sync-service.png)

- When the Abec service is active, start the Abewallet synchronization service to download your ABEL wallet data.
![Start the Abewallet wallet service](/desktop-wallet/pro/start-abewallet-sync-service.png)

## Send ABEL

Abelian Desktop Wallet Pro supports multi-layer privacy transactions, allowing users to choose different privacy levels based on their needs. The multi-layer privacy feature is designed to enhance the anonymity and security of transactions. You can select the desired privacy layer when sending ABEL tokens. For more features, please refer to [here](/guide/wallet/mlp-wallet-cli.html#service-capabilities).

- Ensure that both the Abec and Abewallet synchronization services are active.
![Abec and Abewallet services are active](/desktop-wallet/pro/abec-abewallet-active-services.png)

- Navigate to the "**SEND**"① tab, click "**PASTE FROM CLIPBOARD**"② or "**IMPORT FROM FILE**"③ to input the recipient’s wallet address
![Enter the recipient's wallet address](/desktop-wallet/pro/input-receiver-address.png)

- If a **short address**② is pasted or imported, it will automatically be recognized and resolved into a **long address**③. A message "**Successfully get the full address.**"① will appear when the resolution is successful (In the Pro version, the number of characters in the anonymous long address is shortened)
![Resolve short address to long address](/desktop-wallet/pro/short-address-to-full-address.png)

- Enter the transfer **amount**① and your **master password**②, then click the "**SEND**"③ button to confirm the transaction
![Confirm the transfer](/desktop-wallet/legacy/confirm-transaction.png)

## Receive ABEL

- Navigate to the "**RECEIVE**" tab. If there is no wallet address instance, create one:
  1. Click the three-dot icon "**More...**"② and select "**Add full-privacy address**"③ or "**Add pseudonymous address**"④ from the dropdown menu
  ![Create a wallet address](/desktop-wallet/pro/create-wallet-address.png)<br>
 (The pseudonymous address has a lower privacy level compared to the full-privacy address, but the transaction speed is faster. The full-privacy address prioritizes privacy and security, but processing is slower.)
  1. For example, to create a pseudonymous address, wait for the wallet address instance to be generated. Once the message "**Create an address pseudonymous in this account.**" appears, click the "**Close**" button
  ![Close wallet address creation](/desktop-wallet/pro/close-create-address.png)<br>
  1. Click the "**Select address**"① button with the book icon, and select the newly created wallet address②
  ![Select wallet address](/desktop-wallet/pro/select-address.png)<br>
  1. The "**Address**" field will display the **long address**①. Clicking the long address string will automatically copy the wallet long address to the clipboard. Click the "**Short Address**" field and then the "**Click to register a unique short address.**"② button to generate a short wallet address
  ![Generate a short wallet address](/desktop-wallet/pro/generate-short-address.png)<br>
  1. Once the short address is successfully generated, the message "**Registration succeeded. Click to continue.**" will appear. Then, clicking the string in the "**Short Address**" field will automatically copy the short wallet address to the clipboard
  ![Copy the short wallet address](/desktop-wallet/pro/copy-short-address.png)

Once the address is generated, you can use either the long wallet address or the short address for transactions (sending and receiving ABEL).

## View Transaction History

- Go to the "**TXS**"① tab to view your transaction history. When you **hover your mouse over the txid column**②, the complete txid will be displayed above. Clicking the **link** icon will automatically access the [Abelian Blockchain Explorer](https://explorer.pqabelian.io) to show the details of the transaction.
![View transaction history](/desktop-wallet/pro/transaction-record.png)

## Export ABEL Wallet Account

- Go to the "**SETTING**"① tab, enter your **master password**②, and click the "**REVEAL MNEMONICS**"③ button
  ![Export account page](/desktop-wallet/pro/export-account-page.png)<br>
- The 24-word wallet mnemonic (recovery phrase) will be displayed shortly. Click "**Copy to Clipboard**" and paste it into a local text file for safekeeping.
  ![Copy wallet mnemonic](/desktop-wallet/pro/copy-mnemonics.png)

## Import ABEL Wallet Account

Follow these steps to import an ABEL wallet created elsewhere:

1. Click the "**Select Account**" button in the top right corner, then select "**Import Account**"
![Select to import wallet account](/desktop-wallet/pro/select-import-account.png)<br>

1. Enter the **wallet name**① and the 24-word **mnemonic**②, then click the "**IMPORT**"③ button
![Enter wallet name and mnemonic](/desktop-wallet/pro/input-account-name-mnemonics.png)<br>

3. After a while, the message "**Account imported.**" will appear. Click the "**DONE**" button to complete the wallet account import.
![Wallet account import successful](/desktop-wallet/legacy/import-account-success.png)

## Migrate from Legacy Wallet to Multi-layer Privacy Wallet

If you are using the Legacy version of the Abelian Desktop Wallet, you can migrate your account to the Abelian Multi-layer Privacy Wallet.

Please refer to the [migration steps in the Desktop Wallet (Legacy) user manual](/guide/wallet/mlp-wallet-cli#wallet-migration).