---
outline: deep
---

::: warning
The redesigned version of the QDay testnet is about to launch, and this tutorial and related links are now outdated!
Stay tuned for the arrival of the new tutorial!
:::

# 1. MetaMask Wallet Account User Guide

## Download the MetaMask Extension

1. Open your browser and visit the [MetaMask official website](https://metamask.io/).

2. Choose the extension suitable for your browser and install it:

   - For Chrome browser, click “[Install MetaMask for Chrome](https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn)”.
   ![Install MetaMask Extension for Chrome](/qday-testnet/metamask/chrome-metamask-install-en.png)<br>
   - For Firefox browser, click “[Install MetaMask for Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/ether-metamask/)”.
   ![Install MetaMask Extension for Firefox](/qday-testnet/metamask/firefox-metamask-install-en.png)<br>
   - For Microsoft Edge browser, click “[Install MetaMask for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm)”.
   ![Install MetaMask Extension for Microsoft Edge](/qday-testnet/metamask/edge-metamask-install-en.png)<br>
3. After clicking "Add Extension," the MetaMask installation page will pop up. Click “Add extension” or “Install”.
   ![MetaMask Installation Page](/qday-testnet/metamask/add-to-edge-en.png)
4. Once installed, a MetaMask setup page will open, or you can click the extension icon in the upper right corner of your browser and select the MetaMask icon from the dropdown menu to start setting it up.
   ![MetaMask Extension Icon Location](/qday-testnet/metamask/metamask-display-icon-en.png)
   (You can display the MetaMask icon directly in the toolbar by clicking “Pin to Toolbar”.)

## Create a MetaMask Wallet Account

1. On the MetaMask extension setup page, check “I agree to the MetaMask terms of use,” then click “Create a new wallet” (it is not recommended to import an old wallet for the testnet);
   ![Create a MetaMask Wallet](/qday-testnet/metamask/create-metamask-wallet-en.png)
2. On the authorization page, click “I Agree” to continue;
3. On the password creation page, set a strong password, check “I understand that MetaMask cannot recover this password for me,” then click “Create a new wallet”;
   ![Set MetaMask Password](/qday-testnet/metamask/set-metamask-password-en.png)
4. On the secure wallet page, click “Secure my wallet (recommended)” and back up the 12-word seed phrase locally (very important!). After completing the backup, click “Next”;
   ![Backup MetaMask Seed Phrase](/qday-testnet/metamask/backup-metamask-mnemonic-en.png)
5. On the confirm private key seed phrase page, fill in the missing words in the prompted order to verify your seed phrase, then click “Confirm” to complete account creation;
   ![Verify MetaMask Seed Phrase](/qday-testnet/metamask/verify-metamask-mnemonic-en.png)
6. After completing the above creation steps, click the MetaMask icon in the toolbar, and in the pop-up window, click the dropdown icon next to “Account1” at the top center to access the account list. Click “Add account or hardware wallet” to create a new account;
   ![Add MetaMask Account](/qday-testnet/metamask/add-metamask-account-en.png)
7. On the add account page, select “Add a new account” to create a new account;
   ![Add New MetaMask Account](/qday-testnet/metamask/add-new-metamask-account-en.png)
8. Enter an account name, in this example, the account is named “Account2”, then click “Create” to complete the new account creation. You can switch between accounts in the account list.
   ![Enter MetaMask Account Name](/qday-testnet/metamask/input-metamask-account-en.png)
9. After creating the account, you also need to back up the private key of Account2. Click the three-dot menu icon on the right, then select “Account Details”;
   ![MetaMask Account Details](/qday-testnet/metamask/metamask-account-detail-en.png)
10. On the account details page, click the “Show Private Key” button, enter your password, and then click “Hold to Reveal Private Key.” The private key will be displayed, copy the private key string locally to complete the backup (very important!), and keep it secure.
   ![MetaMask Account Private Key](/qday-testnet/metamask/metamask-account-privatekey1-en.png)
   ![Backup MetaMask Private Key](/qday-testnet/metamask/metamask-account-privatekey2-en.png)

**Note**: The seed phrase and private key are the only backups for your wallet account, so be sure to keep them secure and do not share them with anyone.

## Add QDay Testnet to MetaMask

### Automatically Add QDay Testnet to MetaMask Network List
(The blockchain explorer's automatic addition of QDay Testnet to the MetaMask network will be available later)

### Manually Add QDay Testnet to MetaMask Network List

1. Open MetaMask, click the network list selector in the upper left (default is “Ethereum Mainnet”), select “Show Test Networks,” then click the “Add Network” button;
   ![Add Network to MetaMask](/qday-testnet/metamask/add-metamask-network1-en.png)
2. In the pop-up add network page, click “Add a network manually” at the bottom of the page;
   ![Manually Add QDay Testnet Network](/qday-testnet/metamask/add-metamask-network2.png)
3. On the manual add network page, fill in the following information:
   - **Network Name**: QDay Testnet
   - **New RPC URL**: `https://testnet-rpc-00.qday.info` or `https://testnet-rpc-01.qday.info`
   - **Chain ID**: 1001
   - **Currency Symbol**: QDAY
   - **Block Explorer URL (Optional)**: `https://testnet-explorer.qday.info`
   ![Manually Add QDay Testnet Network](/qday-testnet/metamask/add-metamask-network3-en.png)
   Click the “Save” button to complete the addition.
4. In the “Network Added Successfully!” prompt box, click “Switch to QDay Testnet,” or select and switch to “QDay Testnet” from the MetaMask network list selector in the upper left.
   ![Switch to QDay Testnet in MetaMask](/qday-testnet/metamask/switch-metamask-qday-testnet-network-en.png)

## Obtain Wallet Address

Click the MetaMask extension icon in the browser toolbar, then click the copy icon next to the “Account1” address at the top center of the pop-up window, and save it locally (it will be needed for subsequent operations).
![Get MetaMask Wallet Address](/qday-testnet/metamask/get-metamask-address.png)

## Add QDay ERC20 token (pqUSD) to MetaMask

1. Click the MetaMask extension icon in the browser toolbar, then click “Import tokens” in the “Tokens” tab of the main interface;
   ![Import Token in MetaMask](/qday-testnet/metamask/import-tokens1.png)
2. In the “Import tokens” page, enter the pqUSD Token address in the “Token contract address” field: `0x5571c9263450a1c50586ac91d3B841C71eCe5281`;
   ![Import pqUSD Token in MetaMask](/qday-testnet/metamask/import-tokens2.png)
3. Wait a moment for the pqUSD Token information (Token symbol and Token decimal) to load automatically, then click the “Next” button to complete the import.
4. The pqUSD Token balance will now be displayed in the Tokens tab of the MetaMask main interface.
   ![MetaMask pqUSD Token](/qday-testnet/metamask/pqusd-tokens.png)
