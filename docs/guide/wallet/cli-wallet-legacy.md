---
outline: deep
version_abec: v2.0.2
version_abewalletlegacy: v1.0.0
---

# Abelian CLI Wallet Legacy User Manual

This document describes how to run an Abelian CLI wallet.

Please refer to the [Abelian Applications Guide](/guide/) to understand the software architecture first. The legacy
wallet (`abewalletlegacy`) works with the legacy Abelian address format and is primarily maintained for existing
users.

Visit the [Official Abelian Download Page](/downloads/latest#abelian-cli-wallet-legacy) to download the software. To
interact with other miners, developers and users, visit
the [Official Discord Server](https://discord.com/invite/5rrDxP29hx).

All operations are carried out via the Command Line Interface (CLI). For Linux or macOS, open Terminal; for Windows,
open PowerShell or your preferred shell application.

> [!TIP]
> For upgrading from an old version to the latest one, please jump directly
> to [Upgrade to Latest Version](#_7-upgrade-to-latest-version).

> [!WARNING] Migration Recommended
> We strongly recommend migrating to the [Multi-Layer Privacy (MLP) Wallet](/guide/wallet/cli-wallet-mlp) for enhanced
> features and simplified recovery. The legacy wallet will be phased out in future releases.

## Prerequisites

### System Requirements

- **Storage**: 160B+ (for Abelian node) or minimal (for remote connection)
- **RAM**: 8GB+ (with Abelian node) or 2GB+ (remote only)
- **Network**: Stable internet connection

### Required Components

1. **Abelian Full Node** (`abec`) - Follow the [Full Node Manual](/guide/cli-full-node)
2. **Legacy CLI Wallet** (`abewalletlegacy`) - This guide
3. **Wallet Control Tool** (`abewalletlegacyctl`) - Included with wallet

## 1. Installation

### Download and Extract

Download the compressed files for your platform:

- `abec-linux-amd64-{{ $frontmatter.version_abec }}.tar.gz` (Abelian node)
- `abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}.tar.gz` (Legacy wallet)

Extract and place them under the `~/abel/` folder:

```txt-vue
~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/
~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/
```

### Initial Setup

**Create `abec` configuration folder:**

Navigate to `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` and run:

::: code-group

```txt [Windows]
.\abec.exe
```

```txt [macOS]
sh start_abec.sh
```

```txt [Linux]
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

**Create `abewalletlegacy` configuration folder:**

Navigate to `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` and run:

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --create
```

```shell [macOS]
$ sh start_abewalletlegacy.sh --create
```

```shell [Linux]
$ sh start_abewalletlegacy.sh --create
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
> - **macOS**: If you see "'xxx' cannot be opened because the developer cannot be verified", go to **System
    Preferences → Security & Privacy → General** and click **Allow anyway**

## 2. Create a Wallet

Navigate to `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` and run:

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --create
```

```shell [macOS]
$ sh start_abewalletlegacy.sh --create
```

```shell [Linux]
$ sh start_abewalletlegacy.sh --create
```

:::

**Example wallet creation process:**

```bash
$ ./start_abewalletlegacy.sh --create
Enter the private passphrase for your new wallet:
Confirm passphrase:
Enter the public passphrase for your new wallet:
Confirm passphrase:
NOTE: Use the `--walletpass` option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]:
Your wallet generation seed is:
afe0f025646cde3eee099db9215f8cdb212ed0e06730fd0087e9d1ff5565fd53
the crypto version is 0
Your wallet mnemonic list is:
quiz,always,announce,silver,social,buyer,return,crisp,rice,april,tobacco,rent,base,half,light,tow
ard,wonder,aerobic,whip,physical,vocal,real,vocal,leg
IMPORTANT: Keep the version and seed in a safe place as you
will NOT be able to restore your wallet without it.
Please keep in mind that anyone who has access
to the seed can also restore your wallet thereby
giving them access to all your funds, so it is
imperative that you keep it in a secure location.
Once you have stored the seed in a safe and secure location, enter "OK" to continue: OK
Creating the wallet...
Please remember the initial address:
00000000005a38589d86427698e3ec735335b368899ed6e0239c4285bbc4e370f4ea4e6d
2ac1f1555b53f8df7c30e13d4bccc3b6d56763ec279620d9f131fb68089cb8ef18885950f8
4e56bf78d1780a5cac57d0888dabd669f86f85e7055afabae6a332fa000b3c6ee6a09751ce4
1ad7de4e...
```

> [!IMPORTANT] Critical Security Notes
> **Save your mnemonic words** in a secure location
> **Record the crypto version** (usually 0)
> **Remember both passphrases** (private and public)
> **Backup the configuration folder** before making changes

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

### 3.2 Configure abewalletlegacy

Copy the RPC credentials from `abec.conf` to `abewallet.conf`:

```ini
# RPC connection to abec
abecrpcuser=[rpcuser in abec.conf]
abecrpcpass=[rpcpass in abec.conf]
```

### 3.3 Remote Configuration (Optional)

If running `abec` and `abewalletlegacy` on different machines:

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

```shell [macOS]
$ sh start_abec.sh
```

```shell [Linux]
$ sh start_abec.sh
```

:::

Wait for blockchain synchronization to complete.

## 4.2 Start the Wallet

Navigate to `~/abel/abewalletlegacy-linux-amd64-{{ $frontmatter.version_abewalletlegacy }}/` and run:

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --walletpass=[your public passphrase]
```

```shell [macOS]
$ sh start_abewalletlegacy.sh --walletpass=[your public passphrase]
```

```shell [Linux]
$ sh start_abewalletlegacy.sh --walletpass=[your public passphrase]
```

:::

## 5. Wallet Operations

### 5.1 Using abewalletlegacyctl

The `abewalletlegacyctl` tool allows you to interact with your running wallet:

### 5.2 Check Balance

::: code-group

```shell [Windows]
$ .\abewalletlegacyctl.exe --rpcuser=[username] --rpcpass=[password] getbalancesabe
```

```shell [macOS]
$ sh start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] getbalancesabe
```

```shell [Linux]
$ sh start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] getbalancesabe
```

:::

### 5.3 Unlock

Before sending a transaction or generating a new address, you need to unlock your wallet first:

::: code-group

```shell [Windows]
$ .\abewalletlegacyctl.exe --rpcuser=[username] --rpcpass=[password] walletunlock [private passphrase] [timeout]
```

```shell [macOS]
$ sh start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] walletunlock [private passphrase] [timeout]
```

```shell [Linux]
$ sh start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] walletunlock [private passphrase] [timeout]
```

The unit of timeout is in seconds.

Example:

```bash
sh start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] walletunlock 123456 240
```

This unlocks the wallet with passphrase `123456` for 240 seconds.

### 5.4 Wallet Addresses

**Get new address:**

```shell
$ sh start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] generateaddressabe
```

### 5.5 Send Transactions

As an Abelian wallet address is long, it can be cumbersome to paste a wallet address directly into the command line.
Instead, you can create a file called `arg1` in the configuration folder of `abec` and add the receiver's address and
amount into it. The format is as follows:

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
$ .\abewalletlegacyctl --rpcuser=[username] --rpcpass=[password] sendtoaddressesabe -
```

```txt [macOS]
$ sh start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] sendtoaddressesabe -
```

```txt [Linux]
$ sh start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] sendtoaddressesabe -
```

:::

Example:

```bash
$ cat /Users/username/Library/Application Support/Abec/arg1
 [{"address":"addr1", "amount":700000000},{"address":"addr2", "amount":500000000}]
$ sh start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] sendtoaddressesabe -
```

This command sends **70 ABEL** to `addr1` and **50 ABEL** to `addr2`.

## 6. Wallet Recovery

### 6.1 Preparation for Recovery

Before recovering a wallet, prepare the following information:

1. **Wallet mnemonic words** (24-word list)
2. **Crypto version** (usually 0)
3. **Maximum number of addresses** used in the wallet
4. **Current wallet balance** for verification
5. **Backup of configuration folder** (as safety measure)

**Query maximum address number:**
If you want to recover a wallet, please first prepare the information as described below:

1. **Please make sure your wallet mnemonics are available.**
2. **Query the maximum number of addresses in the current wallet.**
3. **Query the balance information of the current wallet.**
4. **Backup the abewalletlegacy configuration folder.** Please copy the folder to somewhere else which is also
   safe. This, together with the public and private passphrase, may help rollback to the current wallet in case your
   mnemonics are not as you expected.

**Query maximum address number:**

```shell
$ ./start_abewalletlegacyctl.sh --rpcuser=[username] --rpcpass=[password] getmaxaddressidsabe
```

### 6.2 Recovery Process

1. **Stop the wallet** and delete `logs/` and `mainnet/` folders from the configuration directory
2. **Start wallet creation:**

::: code-group

```shell [Windows]
$ .\abewalletlegacy.exe --create
```

```shell [macOS]
$ sh start_abewalletlegacy.sh --create
```
```shell [Linux]
$ sh start_abewalletlegacy.sh --create
```

:::

3. **Follow the recovery prompts:**
    Example:
    
    ```bash
    $ ./start_abewalletlegacy.sh --create
    Enter the private passphrase for your new wallet:
    Confirm passphrase:
    Enter the public passphrase for your new wallet:
    Confirm passphrase:
    NOTE: Use the --walletpass option to configure your public passphrase.
    Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: y
    Enter the crypto version is:0
    Enter existing wallet mnemonic: biology,hazard,sudden,dignity,drop,jealous,butter,believe,answer,enter,practice,scorpion,health,tunnel,rival,vault,neutral,season,proof,must,path,steel,final,female
    Please input the max No. of address to recover :5
    Creating the wallet...
     [INF] WLLT: The addresses with No. in [0, 5] have been restored.
     [INF] WLLT: Opened wallet
    The wallet has been created successfully.
    ```
4. **Configure and connect** the wallet to `abec`
5. **Wait for synchronization** to complete
6. **Check balance** matches expected amount

## 7. Upgrade to Latest Version

### 7.1 Preparation

Before upgrading, prepare the same information as for wallet recovery:

1. **Wallet mnemonic words**
2. **Maximum number of addresses**
3. **Current balance**
4. **Backup configuration folder**

### 7.2 Upgrade Process

1. **Stop old version** of both `abec` and `abewalletlegacy`
2. **Download and extract** new versions
3. **Run new `abec`** (configuration is preserved)
4. **Delete wallet configuration** `logs/` and `mainnet/` folders
5. **Recover wallet** using new version (follow recovery steps above)

## 8. Troubleshooting

### Common Issues

**Connection Problems:**

- Verify `abec` is running and synchronized
- Check RPC credentials match in both configuration files
- Ensure firewall allows port 8667

**Wallet Won't Start:**

- Check public passphrase is correct
- Verify configuration file syntax
- Review log files for error messages

**Balance Not Showing:**

- Wait for blockchain synchronization to complete
- Verify wallet addresses are correctly recovered
- Check transaction history for confirmation

**Recovery Issues:**

- Ensure mnemonic words are entered correctly
- Verify crypto version is correct
- Use exact maximum address number from backup

### Log Files

Check log files for detailed error information:

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abewallet\logs\
```

```txt [macOS]
~/Library/Application Support/Abewallet/logs/
```

```txt [Linux]
~/.abewallet/logs/
```

:::

## 9. Security Best Practices

### Wallet Security

- **Backup mnemonic words** in multiple secure locations
- **Use strong passphrases** for both private and public access
- **Regular backups** of configuration folder
- **Test recovery process** before relying on backups

### Operational Security

- **Keep software updated** to latest versions
- **Monitor transactions** regularly
- **Use dedicated addresses** for different purposes
- **Secure RPC connections** when using remote setup

### Network Security

- **Firewall configuration** to restrict unnecessary access
- **Secure certificate management** for remote connections
- **Regular security audits** of configuration files

## 10. Migration to MLP Wallet

### Why Migrate?

The Multi-Layer Privacy (MLP) wallet offers:

- **Simplified recovery** - no maximum address number required
- **Enhanced privacy** - multiple privacy levels
- **Better functionality** - improved features and performance
- **Future support** - legacy wallet will be phased out

### Migration Process

1. **Install MLP wallet** following the [MLP Wallet Manual](/guide/wallet/cli-wallet-mlp)
2. **Create new MLP wallet** with enhanced privacy features
3. **Transfer funds** from legacy wallet to MLP wallet
4. **Verify transfer** completion and balances
5. **Securely backup** new MLP wallet credentials

::: tip Migration Assistance
For detailed migration instructions, refer to
the [Wallet Migration Guide](/guide/wallet/cli-wallet-mlp#wallet-migration) in the MLP wallet documentation.
:::

## Next Steps

**New Users:**

- Consider starting with the [MLP Wallet](/guide/wallet/cli-wallet-mlp) instead
- Join the [Discord community](https://discord.com/invite/5rrDxP29hx) for support
- Practice with small amounts before large transactions

**Existing Users:**

- Plan migration to MLP wallet for enhanced features
- Ensure proper backups before any major changes
- Stay updated with latest software releases

**Advanced Users:**

- Explore remote wallet configurations
- Implement automated backup procedures
- Consider contributing to network decentralization

Welcome to the Abelian network! 🚀