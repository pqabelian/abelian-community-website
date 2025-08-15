---
outline: deep
---

<style>
.button-container {
  display: flex;
  gap: 8px; /* 确保有间距 */
}

.button-container .btn {
  display: inline-block;
  background-color: #007AFF;
  color: white !important; /* 使用 !important 确保颜色应用 */
  font-size: 16px !important; /* 同样使用 !important */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-family: Arial, sans-serif !important;
  padding: 10px 20px;
  border: 1px solid #666; /* 灰色边框 */
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none !important;
  transition: background-color 0.3s, transform 0.3s, font-weight 0.3s;
}

.button-container .btn:hover {
  background-color: #0056b3; /* 更深的蓝色 */
}
</style>

# Abelian Applications Release History

::: warning CAUTION
We provide the packages of previous versions mainly for archive purposes. Please **ALWAYS** use the latest version in a production environment.
:::

## Abelian Pro (Mobile)
`abelian-mobile-wallet-pro / info.abelian.walletpro`

- **2025-07-25-v3.0.0**

  - Buy ABEL using USDT and USDC are now available!
  - Optimise tx history cache.
  - Bug fixes.

  [Android](https://download.abelian.info/release/android/abelian-mobile-wallet-pro-v3.0.0.apk) | 
  [iOS](https://download.abelian.info/release/ios/abelian-mobile-wallet-pro-v3.0.0.aab)

## Desktop Wallet Pro (MLP)
`abelian-desktop-wallet-pro`

- **2025-08-15-v1.1.0**

  - **UTXO Coin Consolidation**: We’ve added a "Granularity Degree" function on the Status main page for each account. This value shows how many coins (aka UTXOs) your account has. Think of it as how granular your account is from 0 to 1, where the closer to 1 means the more small-amount coins the account has; and the closer to 0 means your account has fewer coins and each coin has a bigger amount.<br>
    **Why it matters?** Because there is an upper limit on the number of coins (namely UTXOs) a transaction’s input can have. A pseudo-private transaction can have up to 100 coins while a fully-private transaction can have up to 5 coins only. Hence if you have many coins in your account, namely, you account has a high granularity degree, you may not be able to send all the coins out in one single transaction. Therefore, we introduce this function for anyone who wants to consolidate the coins together. Also, you can find out how many coins you currently have by mousing over the circled “i” next to the Granularity Degree.
  - **Sync Status Indicator**: At the top-right corner, there is an account drop-down menu. we can now check out which account is active in synchronization or not directly. Green means synchronizing and red means not.
  - **Blockchain Synchronization Time Estimation**: Syncing no longer feels like a mystery—we now display estimated time left (e.g., "About 30 minutes"). Plan your tasks better with a clear countdown.
  - **Improved Transaction History Loading Time**: Loading past transactions is now nearly instant. No more waiting for pages to load—review your activity or check recent transfers in seconds.

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.1.0.exe) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.1.0.dmg) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.1.0.dmg) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.1.0.deb) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.1.0.deb)

- **2025-04-23-v1.0.3**

  - Faster transaction confirmations: Outputs are marked as spendable once available.
  - Optimized display of spendable amounts: The input field on the send page accurately shows available amounts to maximize subsequent transfers, with a new "MAX" button that automatically calculates and deducts transaction fees for a single recipient.
  - More user-friendly experience: Added additional informative tips.

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.3.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.3.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.3.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.3.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.3.zip)

- **2025-03-02-v1.0.2**

  - Only updates dedicated app icons.

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.2.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.2.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.2.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.2.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.2.zip)

- **2025-01-04-v1.0.1**

  - Support for multi-layer privacy:<br>
    **a.** Fully-Private Address: Your transactions are encrypted and untraceable, and balances in your wallets remain hidden, ensuring maximum security and anonymity.<br>
    **b.** Pseudonymous Address: The privacy level is comparable to that of Bitcoin, namely, publicly visible coin values and traceable transactions, while benefiting from much lower gas fees and much increased throughput.
  - Support for multiple recipients:<br>
    **a.** Fully-Private Recipient: Allows up to 5 recipients, ensuring secure and private transactions.<br>
    **b.** Pseudo-Private Recipient: Allows up to 100 recipients with a maximum of 50 unique recipients, providing flexibility for larger transactions.
  - Significant improvement in both speed and storage: the old, original Desktop Wallet Legacy requires users to spend hundreds of hours and even days to sync up the entire Abelian block-chain when running the desktop application for the first time. It also takes over 100GB of storage space. This brand new Desktop Wallet Pro (MLP) v1.0.0 takes only 45 minutes or less (depending on your network speed and bandwidth) to complete the one-time synchronization and less than 100MB of storage.
  - Introduced the concept Memo, which allows users to write messages onto the post-quantum and immutable Abelian ledger. For the first time on Abelian, we can now write our personal notes onto the ledger permanently.

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.1.zip)

- **2024-12-19-v1.0.0**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.0.zip)

## Desktop Wallet Legacy
`abelian-desktop-wallet / abelian-desktop-wallet-legacy`

- **2025-07-03-v4.4.1**
  - Enabled adaptive sync for various networks.
  - Improved sync time estimates on the Status Page.
  - Added color indicators for balance changes on the Tx Page.
  - Added status lights in Account Select.
  - Limited accounts to 100 for better multi-account sync stability.
  - This legacy software is officially called "Abelian Wallet Legacy". For example, if you are a macOS user, you will find this software called "Abelian Wallet Legacy" rather than "Abelian Wallet" under the Applications folder.

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.4.1.exe) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.4.1.dmg) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.4.1.dmg) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.4.1.deb) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.4.1.deb)

- **2025-06-04-v4.3.0**
  - Change to DMG installer for macOS.
  - Renaming product name from 'Abelian Wallet' to 'Abelian Wallet Legacy'.
  - Show estimated time for synchronization completion, fix inconsistent synchronization progress display.
  - More efficient and optimized transaction history list.
  - Support one-click migrate to MLP pseudonymous addres (known as Semi-private address).
  - Newbie-friendly startup for wallet service with start/stop and log buttons clearly displayed.
  - UI/UX optimization:
    - remove unnecessary scrollbar display
    - show maximum sequence number when user views mnemonics (Used to fill in the number of recovery addresses when importing a Legacy account.), and support Enter after typed master password.

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.3.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.3.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.3.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.3.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.3.0.zip)

- **2025-03-02-v4.2.2**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.2.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.2.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.2.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.2.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.2.zip)

- **2025-01-04-v4.2.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.1.zip)

- **2024-12-26-v4.2.0**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.0.zip)

- **2024-08-04-v4.1.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v4.1.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v4.1.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v4.1.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v4.1.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v4.1.1.zip)

- **2024-07-22-v4.0.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v4.0.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v4.0.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v4.0.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v4.0.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v4.0.1.zip)

- **2024-06-08-v4.0.0**
  - Support hard fork.

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v4.0.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v4.0.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v4.0.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v4.0.0.zip)

- **2024-01-07-v0.3.2**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.3.2.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.3.2.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.3.2.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.3.2.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.3.2.zip)

- **2023-11-18-v0.3.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.3.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.3.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.3.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.3.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.3.1.zip)

- **2023-11-04-v0.3.0**
  - Syncing speed improved by 10x to 100x.
  - Disk usage reduced by 80%.

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.3.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.3.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.3.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.3.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.3.0.zip)

- **2023-08-12-v0.2.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.2.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.2.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.2.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.2.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.2.1.zip)

- **2023-07-11-v0.2.0**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.2.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.2.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.2.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.2.0.tar.gz)

- **2023-06-02-v0.1.3**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.1.3.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.1.3.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.1.3.tar.gz) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.1.3.tar.gz)

## Abelian Node (abec)
`[abec]`

- **2025-07-03-v2.0.2**
  - Add checkpoints with height 400,000 (Hash: 73a434b741b357e37587b1b0a39c0ef65832d403bfd4d91eb11d9d805c568022).

  [Windows](https://download.pqabelian.io/release/abec/abec-windows-amd64-v2.0.2.zip) | 
  [macOS](https://download.pqabelian.io/release/abec/abec-macos-amd64-v2.0.2.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abec/abec-macos-arm64-v2.0.2.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abec/abec-linux-amd64-v2.0.2.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abec/abec-linux-arm64-v2.0.2.tar.gz)

- **2025-04-02-v2.0.1**
  - Enable updated Token Release Schedule
  - Add checkpoints with height 300000,340000,360000

  [Windows](https://download.pqabelian.io/release/abec/abec-windows-amd64-v2.0.1.zip) | 
  [macOS](https://download.pqabelian.io/release/abec/abec-macos-amd64-v2.0.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abec/abec-macos-arm64-v2.0.1.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abec/abec-linux-amd64-v2.0.1.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abec/abec-linux-arm64-v2.0.1.tar.gz)

- **2024-07-14-v1.0.0**
  - For the MLPAUT hard fork: Multi-Level Privacy (MLP) and Abelian User Tokens (AUT) will be enabled at height 300000.
  - After height 340000, version 1 transactions will no longer be included in blocks.

  [Windows](https://download.pqabelian.io/release/abec/abec-windows-amd64-v1.0.0.zip) | 
  [macOS](https://download.pqabelian.io/release/abec/abec-macos-amd64-v1.0.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abec/abec-macos-arm64-v1.0.0.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abec/abec-linux-amd64-v1.0.0.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abec/abec-linux-arm64-v1.0.0.tar.gz)

- **2024-05-28-v0.13.0**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.13.0.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.13.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.13.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.13.0.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.13.0.tar.gz)

- **2023-11-19-v0.12.3**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.12.3.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.12.3.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.12.3.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.12.3.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.12.3.tar.gz)

- **2023-09-15-v0.11.13**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.13.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.13.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.13.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.13.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.11.13.tar.gz)

- **2023-08-12-v0.11.12**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.12.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.12.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.12.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.12.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.11.12.tar.gz)

- **2023-06-02-v0.11.10**
  - Enabled syncing blocks larger than 32MB.

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.10.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.10.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.10.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.10.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.11.10.tar.gz)

- **2023-05-17-v0.11.9**
  - Optimized RPC response format.

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.9.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.9.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.9.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.9.tar.gz)

- **2022-11-18-v0.11.5-b**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.5.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.5.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.5.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.5.tar.gz)

- **2022-09-08-v0.11.1**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.1.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.1.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.1.tar.gz)

## GPU Mining Client
`abelminer`

- **2023-05-31-v2.0.3**

  [Windows](https://download.abelian.info/release/pool/abelminer-windows-amd64-v2.0.3.zip) | 
  [Linux](https://download.abelian.info/release/pool/abelminer-linux-amd64-v2.0.3.tar.gz)

- **2023-05-17-v2.0.2**

  [Windows](https://download.abelian.info/release/pool/abelminer-windows-amd64-v2.0.2.zip) | 
  [Linux](https://download.abelian.info/release/pool/abelminer-linux-amd64-v2.0.2.tar.gz)

- **2023-03-03-v2.0.1b**

  [Linux](https://download.abelian.info/release/pool/abelminer-linux-amd64-v2.0.1.b.tar.gz)

## CPU Mining Client
`abe-miningpool-client`/`abelminer-cpu`

- **2025-07-18-v0.13.2*

  [Windows](https://download.abelian.info/release/pool/abelminer-cpu-windows-amd64-v0.13.2.zip) | 
  [macOS](https://download.abelian.info/release/pool/abelminer-cpu-macos-amd64-v0.13.2.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abelminer-cpu-macos-arm64-v0.13.2.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abelminer-cpu-linux-amd64-v0.13.2.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/pool/abelminer-cpu-linux-arm64-v0.13.2.tar.gz)

- **2024-05-28-v0.13.0**

  [Windows](https://download.abelian.info/release/pool/abe-miningpool-client-windows-amd64-v0.13.0.zip) | 
  [macOS](https://download.abelian.info/release/pool/abe-miningpool-client-macos-amd64-v0.13.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abe-miningpool-client-macos-arm64-v0.13.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abe-miningpool-client-linux-amd64-v0.13.0.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/pool/abe-miningpool-client-linux-arm64-v0.13.0.tar.gz)

- **2023-06-24-v0.11.7**
  - Enhancements: better authentication user experience and minor bug fixes.

  [Windows](https://download.abelian.info/release/pool/abe-miningpool-client-windows-amd64-v0.11.7.zip) | 
  [macOS](https://download.abelian.info/release/pool/abe-miningpool-client-macos-amd64-v0.11.7.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abe-miningpool-client-macos-arm64-v0.11.7.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abe-miningpool-client-linux-amd64-v0.11.7.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/pool/abe-miningpool-client-linux-arm64-v0.11.7.tar.gz)

- **2022-11-25-v0.11.5**

  [Windows](https://download.abelian.info/release/pool/abe-miningpool-client-windows-amd64-v0.11.5.zip) | 
  [macOS](https://download.abelian.info/release/pool/abe-miningpool-client-macos-amd64-v0.11.5.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abe-miningpool-client-macos-arm64-v0.11.5.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abe-miningpool-client-linux-amd64-v0.11.5.tar.gz)

## CLI Wallet (MLP)
`abewalletmlp`

- **2024-12-19-v2.0.0**

  [Windows](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v2.0.0.zip) | 
  [macOS](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v2.0.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v2.0.0.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v2.0.0.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v2.0.0.tar.gz)

- **2024-08-13-v1.0.1**

  [Windows](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v1.0.1.zip) | 
  [macOS](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v1.0.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v1.0.1.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v1.0.1.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v1.0.1.tar.gz)

## CLI Wallet Legacy
`abewallet / abewalletlegacy`

- **2024-08-04-v1.0.0**
  - Support hard fork.

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v1.0.0.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v1.0.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v1.0.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v1.0.0.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v1.0.0.tar.gz)

- **2024-07-14-v0.13.9**

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.13.9.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.13.9.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.13.9.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.13.9.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.13.9.tar.gz)

- **2024-06-03-v0.13.1**

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.13.1.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.13.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.13.1.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.13.1.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.13.1.tar.gz)

- **2024-05-28-v0.13.0**

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.13.0.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.13.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.13.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.13.0.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.13.0.tar.gz)

- **2024-05-16-v0.12.8**

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.12.8.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.12.8.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.12.8.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.12.8.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.12.8.tar.gz)

- **2023-12-12-v0.12.5**

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.12.5.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.12.5.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.12.5.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.12.5.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.12.5.tar.gz)

- **2023-11-19-v0.12.3**

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.12.3.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.12.3.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.12.3.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.12.3.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.12.3.tar.gz)

- **2023-09-15-v0.11.13**

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.11.13.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.11.13.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.11.13.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.11.13.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.11.13.tar.gz)

- **2023-08-12-v0.11.12**

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.11.12.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.11.12.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.11.12.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.11.12.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.11.12.tar.gz)

- **2023-06-02-v0.11.10**
  - Fixed a few known bugs.

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.11.10.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.11.10.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.11.10.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.11.10.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.11.10.tar.gz)

- **2023-05-17-v0.11.9**
  - Optimized RPC response format.

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.11.9.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.11.9.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.11.9.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.11.9.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.11.9.tar.gz)

- **2022-11-18-v0.11.5-b**
  - A new API: query the current total number of wallet addresses generated; command change from addressnumber to addressmaxsequencenumber.
  - Improved API: generate multiple addresses in batch.
  - Added abewalletctl to access wallets directly rather than using abectl.
  - Fixed known bugs.
  - Support notification via websocket when the transaction status changed.

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.11.5-b.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.11.5-b.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.11.5-b.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.11.5-b.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.11.5-b.tar.gz)

- **2022-09-08-v0.11.1**

  [Windows](https://download.abelian.info/release/abewallet/abewallet-windows-amd64-v0.11.1.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewallet-macos-amd64-v0.11.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewallet-macos-arm64-v0.11.1.tar.gz) | 
  [Linux](https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.11.1.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewallet-linux-arm64-v0.11.1.tar.gz)

## Abelian Mobile Wallet Legacy

- **2024-01-16-v1.02** <Badge type="danger" text="DISCONTINUED" />

  [iOS](https://apps.apple.com/us/app/abelian/id6472198380) | 
  [Android](https://play.google.com/store/apps/details?id=info.abelian.wallet) | 
  [APK](https://download.abelian.info/release/android/abelian-mobile-wallet-v1.0.2.apk)

## Abelian Manuals

More documentation for both users and developers can be found at [Abelian Documentation](/guide/get-started) website.

- [Abelian Apps Basics](/guide/index)
- [Abelian Desktop Wallet Pro Manual](/guide/wallet/desktop-wallet-pro)
- [Abelian Desktop Wallet (Legacy) Manual](/guide/wallet/desktop-wallet-legacy)
- [Abelian GPU Mining Manual](/guide/mining/gpu-pool)
- [Abelian Node (abec) Manual](/guide/abelian-node)
- [Abelian Multi-layer Privacy Wallet (CLI) Manual](/guide/wallet/cli-wallet-mlp)
- [Abelian Legacy Wallet (CLI) Manual](/guide/wallet/cli-wallet-legacy)