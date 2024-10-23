---
outline: deep
---

# Abelian Desktop Wallet Pro User Manual

## Introduction

This document is designed to provide IT professionals and advanced users with comprehensive steps for successfully installing and configuring the Abelian Desktop Wallet Pro, offering you unprecedented control over your transaction privacy and security.

**Multi-Layer Privacy:** it supports two innovative wallet address types:

- **Fully-Private Address**: Thisfeature ensures your transactions are untraceable and your wallet balances remain confidential, providing maximum security and anonymity.

- **Pseudonymous Address**: Similar to Bitcoin's privacy model, this option allows for publicly visible coin values and traceable transactions but benefits from lower gas fees and increased transaction speeds.


**Key Features**:


- **Flexible Privacy Levels**: Choose between Fully-Private and Pseudonymous wallet addresses based on your privacy needs.

- **Seamless Transfers**: Transfer ABELs between Fully-Private and Pseudonymous Wallets effortlessly.

- **Efficient and Stable Chain Access**: By using the Super Node access , users do not need to start Abec locally, which eliminates the time required for local blockchain synchronization, enabling efficient use of Abec services.

With *Abelian Desktop Wallet Pro*, enjoy enhanced privacy, faster transactions, lower gas fees, and the flexibility to manage your privacy on your terms.

## Operational Steps

### Installation

1) Go to the [Abelian official website download page](https://pqabelian.io/download#desktop) and download the installation package for the Abelian Desktop Wallet Pro.
![Visit the Abelian official download page](/desktop-wallet/pro/download-page.png)

**Please download the Abelian Desktop Wallet Pro based on your operating system and CPU architecture**

Please find the reference information provided below:

- If your computer is running Windows, ensure you are using an Intel/AMD x86-64 CPU (ARM architecture CPUs are not supported). To check the processor and system type, go to "System Settings -> System -> Processor/System Type".

- If your computer is running macOS, check whether you are using an Intel chip or Apple silicon (e.g., M1/M2 chips). Download the corresponding installation package based on the processor. To check the processor and system type, click the Apple logo in the top left corner of the desktop and select "About This Mac -> Overview".

- If your computer is running Linux, ensure you are using an Intel/AMD x86-64 CPU (amd64) or AMD ARM CPU (arm64). Download the corresponding installation package based on the processor. To check the processor and system type, for example on Ubuntu Desktop, click the system function icon group in the top right corner of the desktop, click the "Settings" icon in the dropdown menu, and select the "About" tab to view the "Processor/System Type" field.

---

**This guide as below utilizes Windows version 1.0.0 as a demonstrative example::**

2) Save the Abelian desktop wallet installation package to the desktop
![Download the installation package file to your computer's desktop](/desktop-wallet/pro/download.png)

3) Double-click the compressed file to open the Abelian Desktop Wallet Pro installer
![Unzip the installation package](/desktop-wallet/pro/installer.png)

4) Double-click the installer to automatically install the desktop wallet for the current user and create a desktop shortcut. After installation, Abelian Desktop Wallet will automatically run
![Install and run Abelian Desktop Wallet Pro](/desktop-wallet/pro/runing.png)

5) Enter the master password twice and click the "**START**" button to launch the wallet (a master password is required for local verification every time the desktop wallet is launched)
![Create a master password for the desktop wallet](/desktop-wallet/pro/input-password.png)

### Create an ABEL Wallet Account

1) Enter the master password and click the "**LOGIN**" button to log in to the Abelian Desktop Wallet.
![Enter the master password to log in to the Abelian Desktop Wallet](/desktop-wallet/pro/login.png)

2) To create an ABEL wallet account:
![Create an ABEL wallet](/desktop-wallet/pro/create-account.png)
  - Switch to the "**STATUS**"" tab and then click on the "**Select Account**" button in the top right corner.
  - Select "**Create Account**" from the dropdown menu.

3) Name your wallet (e.g., "PQabelPro"①), then click on the "**CREATE**" button
![Name the wallet account](/desktop-wallet/pro/account-name.png)

4) Wait until the "**Done**"① button appears, then click it to complete the creation of the ABEL wallet account
![Account creation successful](/desktop-wallet/pro/create-account-success.png)
(When the account is successfully created, the message "**Account created.**"② will be displayed)

5) Select the newly created desktop wallet account:
![Select the wallet account](/desktop-wallet/pro/select-account.png)
  - Switch to the "**STATUS**"" tab and then click on the "**Select Account**" button in the top right corner.
  - Select the newly created account  (e.g., "PQabelPro") from the dropdown menu.

6) Start the Abec synchronization service to download full node data.

![Click the start service button to activate the Abec service](/desktop-wallet/pro/start-abec-sync-service.png)

7) After the Abec service is successfully activated, start the Abewallet synchronization service to download your ABEL wallet data.

![Start the Abewallet wallet service](/desktop-wallet/pro/start-abewallet-sync-service.png)

### Send ABEL

Abelian Desktop Wallet Pro supports multi-layer privacy transactions, allowing users to choose different privacy levels based on their needs. The multi-layer privacy feature is designed to enhance the anonymity and security of transactions. You can select the desired privacy layer when sending ABEL tokens. 

1) **Ensure that both the Abec and Abewallet synchronization services are active.**
![Abec and Abewallet services are active](/desktop-wallet/pro/abec-abewallet-active-services.png)

2) Navigate to the "**SEND**"① tab, click "**PASTE FROM CLIPBOARD**"② or "**IMPORT FROM FILE**"③ to input the recipient’s wallet address
![Enter the recipient's wallet address](/desktop-wallet/pro/input-receiver-address.png)

- If a **short address**② is pasted from clipboard or imported, it will automatically be recognized and resolved into a **long address**③. A message "**Successfully get the full address.**"① will appear when the resolution is successful (In the Desktop wallet Pro version, the number of characters in the long address of the pseudonymous address is less than that of the fully private address.)
![Resolve short address to long address](/desktop-wallet/pro/short-address-to-full-address.png)

3) Enter the transfer **amount**① and your **master password**②, and then click on the "**SEND**"③ button to confirm the transaction
**Please ensure that your Abewallet has synchronized to the latest block height and that there is a sufficient amount of spendable amoumt in the account before proceeding with the transfer transaction.**
![Confirm the transfer](/desktop-wallet/legacy/confirm-transaction.png)

### Receive ABEL

Navigate to the "**RECEIVE**" tab. If there is no wallet address instance, create one:

  1) Click the three-dot icon "**More...**"② and select "**Add full-privacy address**"③ or "**Add pseudonymous address**"④ from the dropdown menu
  ![Create a wallet address](/desktop-wallet/pro/create-wallet-address.png)<br>
 (The pseudonymous address has a lower privacy level compared to the full-privacy address, but the transaction speed is faster. The full-privacy address prioritizes privacy and security, but processing is slower.)
  2) For example, to create a pseudonymous address, wait for the wallet address instance to be generated. Once the message "**Create an address pseudonymous in this account.**" appears, click the "**Close**" button
  ![Close wallet address creation](/desktop-wallet/pro/close-create-address.png)<br>
  3) Click the "**Select address**"① button with the book icon, and select the newly created wallet address②
  ![Select wallet address](/desktop-wallet/pro/select-address.png)<br>
  4) The "**Address**" field will display the **long address**①. Clicking the long address string will automatically copy the wallet long address to the clipboard. Click the "**Short Address**" field and then the "**Click to register a unique short address.**"② button to generate a short wallet address
  ![Generate a short wallet address](/desktop-wallet/pro/generate-short-address.png)<br>
  5) Once the short address is successfully generated, the message "**Registration succeeded. Click to continue.**" will appear. Then, clicking the string in the "**Short Address**" field will automatically copy the short wallet address to the clipboard
  ![Copy the short wallet address](/desktop-wallet/pro/copy-short-address.png)

Once the address is generated, you can use either the long wallet address or the short address for transactions (sending and receiving ABEL).

### View Transaction History

1) Go to the "**TXS**"① tab to view your transaction history. When you **hover your mouse over the txid column**②, the complete txid will be displayed above. Clicking the **link** icon will automatically access the [Abelian Blockchain Explorer](https://explorer.pqabelian.io) to show the details of the transaction.
![View transaction history](/desktop-wallet/pro/transaction-record.png)

### Export ABEL Wallet Account

1) Go to the "**SETTING**"① tab, enter your **master password**②, and click the "**REVEAL MNEMONICS**"③ button
  ![Export account page](/desktop-wallet/pro/export-account-page.png)<br>
2) The 24-word wallet mnemonic (recovery phrase) will be displayed shortly. Click "**Copy to Clipboard**" and paste it into a local text file for safekeeping.
  ![Copy wallet mnemonic](/desktop-wallet/pro/copy-mnemonics.png)

### Import ABEL Wallet Account

Follow these steps to import an ABEL wallet created elsewhere:
To import an ABEL wallet that was initially created on a different platform, please adhere to the following detailed procedure:


1) Switch to the "**STATUS**"" tab, click on the "**Select Account**" button in the top right corner, and then select "**Import Account**"
![Select to import wallet account](/desktop-wallet/pro/select-import-account.png)<br>

2) Enter the **wallet name**① and the 24-word **mnemonic**②, then click the "**IMPORT**"③ button
![Enter wallet name and mnemonic](/desktop-wallet/pro/input-account-name-mnemonics.png)<br>

3) After a while, the message "**Account imported.**" will be appearred. Click one the "**DONE**" button to complete the wallet account import.
![Wallet account import successful](/desktop-wallet/legacy/import-account-success.png)

### Migration from Legacy Wallet 

If you are still using the Abelian desktop wallet legacy version, you can migrate your Legacy accounts to the Abelian multi-layer privacy wallet - opening the door to enhanced privacy and flexibility! 

For detailed operations, please refer to the following instruction [migration steps in the Desktop Wallet (Legacy) user manual](/guide/wallet/mlp-wallet-cli#wallet-migration).