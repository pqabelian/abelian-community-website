---
outline: deep
version_abec: v2.0.2
version_abewalletmlp: v2.0.0
version_abewalletlegacy: v1.0.0
---

# Abelian CLI Wallet (MLP) User Manual

This document provides comprehensive instructions for installing and configuring the Abelian Multi-Layer Privacy (MLP) CLI Wallet (`abewalletmlp`) - Your Gateway to Enhanced Privacy and Flexibility!

Please refer to the [Abelian Applications Basics](/guide/) to understand the software architecture first. The MLP wallet represents the next generation of Abelian wallets with advanced privacy features and simplified management.

Visit the [Official Abelian Download Page](/downloads/latest#abelian-cli-wallet-mlp) to download the software.

All operations are conducted through the Command Line Interface (CLI). On Linux or macOS systems, access the Terminal; on Windows, launch PowerShell or your preferred shell application.

## Introduction

With the increasing popularity of digital currencies, the demand for privacy protection for different purposes among users is also growing. To meet this demand, we have specifically developed the Abelian Multi-Layer Privacy Wallet (CLI version).

Why Should You Upgrade?

- **Simplified Recovery**: Say goodbye to the "maximum recoverable number of wallets" requirement - our new fully-private wallet is user-friendly and intuitive
- **Enhanced Security**: Existing CLI users with ABEL tokens in legacy wallets are strongly encouraged to create a new fully-private wallet and transfer their assets
- **Flexible Options**: Miners and those who prioritize transaction speed and cost-effectiveness can opt for a semi-private wallet

This wallet adopts advanced multi-layer privacy technology, offering unprecedented control over your transaction privacy and security. It features two innovative types of wallet addresses:

### Address Types

**1. Fully-Private Address**:

- Transactions are encrypted and untraceable
- Maximum security and anonymity
- Higher transaction fees
- Longer processing times

**2. Semi-Private Address**

- Bitcoin-like privacy level
- Publicly visible coin values and traceable transactions
- Lower fees and increased throughput
- Faster transaction processing

With abewalletmlp, enjoy enhanced privacy, faster transactions, lower gas fees, and the flexibility to manage your privacy on your terms.

- **Flexible Privacy Levels**: Choose between Fully-Private and Semi-Private wallet addresses based on your privacy needs.
- **Simplified Recovery**: Recover all wallet addresses with mnemonic words, no more required.
- **Seamless Transfers**: Transfer ABELs between Fully-Private and Semi-Private Wallets effortlessly.

## Prerequisites

### System Requirements

- **Storage**: 160GB+ (for Abelian node) or minimal (for remote connection)
- **RAM**: 8GB+ (with Abelian node) or 2GB+ (remote only)
- **Network**: Stable Internet connection

### Required Components

1. **Abelian Node** (`abec`) - Package [abec-{{ $frontmatter.version_abec }}](/downloads/latest#abelian-node)
2. **MLP CLI Wallet** (`abewalletmlp`) -
   Package [abewalletmlp-{{ $frontmatter.version_abewalletmlp }}](/downloads/latest#cli-wallet-mlp)
3. **Wallet Control Tool** (`abewalletmlpctl`) - Included with wallet

## 1. Installation

### Download and Extract

Download the compressed files for your platform:

- `abec-linux-amd64-{{ $frontmatter.version_abec }}.tar.gz` (Abelian node)
- `abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}.tar.gz` (CLI MLP wallet)

Extract and place them under the `~/abel/` folder:

```txt-vue
~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/
~/abel/abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}/
```

### Initial Setup

**Create `abec` configuration folder:**

Navigate to `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` and run:

::: code-group

```txt [Windows]
.\abec.exe
```

```txt [macOS/Linux]
sh start_abec.sh
```
:::

Press `Ctrl+C` to stop. This creates the configuration folder:

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abec
```

```txt [macOS]
~/Library/Application Support/Abec
```

```txt [Linux]
~/.abec
```

:::

**Create `abewalletmlp` configuration folder:**

Navigate to `~/abel/abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}/` and run:

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --create
```
:::

Press `Ctrl+C` to stop. This creates the wallet configuration folder:

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abewallet
```

```txt [macOS]
~/Library/Application Support/Abewallet
```

```txt [Linux]
~/.abewallet
```

:::

> [!TIP] Platform-Specific Notes
> - **macOS/Linux**: You may need to run `chmod 777 xxx` if you get "xxx: Permission denied"
> - **macOS (M-chips/ARM64)**: If you see "'xxx' is damaged and can't be opened", run:
> ```shell
> $ xattr -d com.apple.quarantine path/to/xxx
> ```
> - **macOS**: If you see "'xxx' cannot be opened because the developer cannot be verified", go to **System Preferences → Security & Privacy → General** and click **Allow anyway**

## 2. Create Wallet

Navigate to `~/abel/abewalletmlp-linux-amd64-{{ $frontmatter.version_abewalletmlp }}` and run:

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --create
```
:::

**Example wallet creation process:**

```text
Enter the private passphrase for your new wallet: 
Confirm passphrase: 
Enter the public passphrase for your new wallet: 
Confirm passphrase: 
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: no
Your wallet's generation seed is: 
a6c5b1d91853571b96c40136259c3ec56188cc4204bbc326fc63559e7a78917162ebd5755ac1368a5f759202bbfb65f902f3967bdc4b57f893a249045e570614
Your wallet's crypto version is:  1
Your wallet's mnemonic list is: 
finger,bronze,trophy,split,jar,enough,recipe,silk,budget,dust,pride,crystal,cabbage,tunnel,anxiety,kite,success,someone,frame,they,cheese,interest,host,tissue
IMPORTANT: Keep the version and seed in a safe place as you
will NOT be able to restore your wallet without it.
Please keep in mind that anyone who has access
to the seed can also restore your wallet thereby
giving them access to all your funds, so it is
imperative that you keep it in a secure location.
Once you have stored the seed in a safe and secure location, enter "OK" to continue: OK
Creating the wallet...
2024-08-12 13:05:58.553 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

> [!IMPORTANT] Critical Security Information
> **Save your mnemonic words** in multiple secure locations
> **Record the wallet seed** for additional security
> **Remember both passphrases** (private and public)
> **No maximum address limit** - simplified recovery process

## 3. Configuration

### 3.1 Configure abec

Edit the `abec.conf` file in the `abec` configuration folder:

**Basic RPC configuration:**

```ini
# RPC server settings
rpcuser=your_username
rpcpass=your_secure_password
```

**Network configuration:**

```ini
# Public IP broadcasting (optional)
externalip=1.2.3.4
```

### 3.2 Configure abewalletmlp

Copy the RPC credentials from `abec.conf` to `abewallet.conf`:

```ini
# RPC connection to abec
abecrpcuser=[rpcuser in abec.conf]
abecrpcpass=[rpcpass in abec.conf]
```

### 3.3 Remote Configuration (Optional)

If running `abec` and `abewalletmlp` on different machines:

**In `abec.conf`:**

```ini
# Listen on all interfaces
rpclisten=0.0.0.0:8667
```

**In `abewallet.conf`:**

```ini
# Connect to remote abec
rpcconnect=[abec-ip]:8667
cafile=~/abel/rpc.cert
```

**Certificate setup:**

1. Delete `rpc.cert` and `rpc.key` from `abec` configuration folder
2. Restart `abec` to generate new certificates
3. Copy `rpc.cert` to the wallet machine at `~/abel/rpc.cert`

## 4. Running the Wallet

### 4.1 Start the Abelian Node

Navigate to `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` and run:

::: code-group

```shell [Windows]
$ .\abec.exe
```

```shell [macOS/Linux]
$ sh start_abec.sh
```
:::
Wait for blockchain synchronization to complete.

## 4.2 Start MLP Wallet

Navigate to `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` and run:

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --walletpass=[your public passphrase]
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --walletpass=[your public passphrase]
```
:::

## 5. Wallet Operations

### 5.1 Using abewalletmlpctl

The `abewalletmlpctl` tool allows you to interact with your running wallet:

### 5.2 Check Balance

::: code-group

```shell [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[username] --rpcpass=[password] getbalancesabe
```

```shell [macOS/Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[username] --rpcpass=[password] getbalancesabe
```
:::

### 5.3 Unlock

Before sending a transaction or generating a new address, you need to unlock your wallet first:

::: code-group

```shell [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[username] --rpcpass=[password] walletunlock [private passphrase] [timeout]
```

```shell [macOS/Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[username] --rpcpass=[password] walletunlock [private passphrase] [timeout]
```
:::


The unit of timeout is in seconds.

### 5.4 Wallet Addresses

**Generate Fully-Private Address:**

```shell
$ sh start_abewalletmlpctl.sh --rpcuser=[username] --rpcpass=[password] generateaddressabe 1 1
```

**Generate Pseudonymous Address:**

```shell
$ sh start_abewalletmlpctl.sh --rpcuser=[username] --rpcpass=[password] generateaddressabe 1 0
```

**Generate Multiple Addresses:**

```shell
# Generate 5 fully-private addresses
$ sh start_abewalletmlpctl.sh --rpcuser=[username] --rpcpass=[password] generateaddressabe 5 1

# Generate 3 pseudonymous addresses
$ sh start_abewalletmlpctl.sh --rpcuser=[username] --rpcpass=[password] generateaddressabe 3 0
```

### 5.5 Send Transactions

As an Abelian wallet address is long, it can be cumbersome to paste a wallet address directly into the command line. Instead, you can create a file called `arg1` in the configuration folder of `abec` and add the receiver's address and amount into it. The format is as follows:

```plaintext
[
    {
        "address":"addr1",
        "amount":700000000
    },
    {
        "address":"addr2",
        "amount":500000000
    }
]
```

Note that the unit of amount is **Neutrino** (1 ABEL = 10,000,000 Neutrino).

**Send ABEL to an address:**

::: code-group

```txt [Windows]
$ .\abewalletmlpctl --rpcuser=[username] --rpcpass=[password] sendtoaddressesabe -
```

```txt [macOS/Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[username] --rpcpass=[password] sendtoaddressesabe -
```
:::

Example:

```bash
$ cat /Users/username/Library/Application Support/Abec/arg1
 [{"address":"addr1", "amount":700000000},{"address":"addr2", "amount":500000000}]
$ sh start_abewalletmlpctl.sh --rpcuser=[username] --rpcpass=[password] sendtoaddressesabe -
```

This command sends **70 ABEL** to `addr1` and **50 ABEL** to `addr2`.

## 6. Wallet Recovery

### 6.1 Preparation for Recovery

Before recovering a wallet, prepare the following information:

1. **Mnemonic word list** (24 words)
2. **Crypto version** (usually 1)
3. **Current wallet balance** for verification
4. **Backup of configuration folder** (as safety measure)

> [!TIP] Simplified Recovery
> Unlike legacy wallets, MLP wallets don't require tracking maximum address numbers - recovery is much simpler!

### 6.2 Recovery Process

1. **Stop the wallet** and **navigate to configuration directory** and remove `logs/` and `mainnet/` folders

2. **Start wallet creation:**

::: code-group

```shell [Windows]
$ .\abewalletmlp.exe --create
```

```shell [macOS/Linux]
$ sh start_abewalletmlp.sh --create
```
:::

1. **Follow the recovery prompts:**

Example:

```text
$ sh start_abewalletmlp.sh --create
Enter the private passphrase for your new wallet: 
Confirm passphrase: 
Enter the public passphrase for your new wallet: 
Confirm passphrase: 
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: yes
Enter the crypto version:1
Enter existing wallet mnemonic: finger,bronze,trophy,split,jar,enough,recipe,silk,budget,dust,pride,crystal,cabbage,tunnel,anxiety,kite,success,someone,frame,they,cheese,interest,host,tissue
Creating the wallet...
2024-08-12 16:42:40.047 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

4. **Configure and synchronize** the wallet with `abec`
5. **Wait for synchronization** to complete
6. **Check balance** matches expected amount

## 7. Migration from Legacy Wallet

> [!WARNING] Migration Costs
> This migration process creates multiple transactions, requiring transaction fees to be paid.

The following guide assumes you're migrating from [abewalletlegacy version {{ $frontmatter.version_abewalletlegacy }}](/downloads/latest#abelian-cli-wallet-legacy) and have reviewed the [Legacy Wallet Manual](/guide/wallet/cli-wallet-legacy).

### 7.1 Migration Setup

This example assumes operation on two computers (`PC1` and `PC2`):

**PC1 (Source - Legacy Wallet):**

1. Ensure `abewalletlegacy` is running and synchronized
2. Backup configuration folder to secure location
3. Record current balance and addresses

**PC2 (Destination - MLP Wallet):**

1. [Install](#_1-installation) and [create](#_2-create-wallet) new MLP wallet
2. [Generate addresses](#_5-4-wallet-addresses) as migration destinations
3. Record new MLP addresses for transfer

### 7.2 Migration Process

**Step 1: Prepare destination addresses**

On PC2, generate multiple addresses for enhanced privacy:

```shell
# Generate 5 fully-private addresses
$ sh start_abewalletmlpctl.sh --rpcuser=[username] --rpcpass=[password] generateaddressabe 5 1
```

**Step 2: Transfer funds from legacy wallet**

On PC1, send funds to new MLP addresses:

```shell
# Send from legacy wallet to MLP address
$ ./start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] sendtoaddressabe [mlp_address] [amount]
```

**Step 3: Verify migration**

On PC2, confirm receipt of funds:

```shell
$ sh start_abewalletmlpctl.sh --rpcuser=[username] --rpcpass=[password] getbalancesabe
```

**Step 4: Complete migration**

Once all funds are successfully transferred:

1. Verify total balance matches original amount (minus fees)
2. Test sending from new MLP wallet
3. Securely store new MLP wallet backup
4. Decommission legacy wallet after confirmation

## 8. Upgrade to Latest Version

### 8.1 Preparation

Before upgrading, prepare the same information as for wallet recovery:

1. **Wallet mnemonic words**
2. **Current balance**
3. **Backup configuration folder**

### 8.2 Upgrade Process

1. **Stop old version** of both `abec` and `abewalletmlp`
2. **Download and extract** new versions
3. **Run new `abec`** (configuration is preserved)
4. **Delete wallet configuration** `logs/` and `mainnet/` folders
5. **Recover wallet** using new version (follow recovery steps above)


## 9. Troubleshooting

### Common Issues

**Wallet won't start:**

- Verify public passphrase is correct
- Check configuration file syntax
- Review log files for errors

**Address generation fails:**

- Ensure wallet is unlocked
- Verify RPC connection is active
- Check sufficient system resources

**Transaction failures:**

- Confirm sufficient balance for fees
- Verify recipient address format
- Check network synchronization status

**Recovery issues:**

- Ensure mnemonic words are correct
- Verify word order and spelling
- Check for extra spaces or characters

### Log Files

Check detailed logs for troubleshooting:

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abewallet\logs\
```

```txt [macOS]
~/Library/Application Support/Abewallet\logs\
```

```txt [Linux]
~/.abewallet/logs/
```

:::

## Security Best Practices

### Wallet Security

- **Backup mnemonic words** in multiple secure locations
- **Use strong passphrases** for wallet encryption
- **Regular backups** of configuration folder
- **Test recovery process** periodically

### Privacy Best Practices

- **Use multiple addresses** for different purposes
- **Mix privacy levels** strategically
- **Avoid address reuse** when possible
- **Monitor transaction patterns**

### Operational Security

- **Keep software updated** to latest versions
- **Secure RPC connections** for remote access
- **Monitor system resources** during operation
- **Regular security audits** of setup

## Next Steps

**New Users:**

- Start with pseudonymous addresses for learning
- Join the [Discord community](https://discord.com/invite/5rrDxP29hx) for support
- Practice with small amounts before large transactions

**Migrating Users:**

- Plan migration during low-activity periods
- Verify all transfers before decommissioning legacy wallet
- Update any automated systems with new addresses

**Advanced Users:**

- Explore privacy mixing strategies
- Implement automated backup procedures
- Consider contributing to network development

Enjoin the enhanced privacy and flexibility of Abelian MLP feature! 🚀