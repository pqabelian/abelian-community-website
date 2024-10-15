---
outline: deep
---

# Abelian Multi-layer Privacy Wallet (CLI) Manual

## Introduction

This document is designed to provide IT professionals and advanced users with comprehensive steps for successfully installing and configuring the Abelian Multi-layer Privacy Walle(CLI) (abewalletmlp), a new command-line interface (CLI) wallet 

With the increasing popularity of digital currencies, the demand for privacy protection among users is also growing. To meet this demand, we have specifically developed the Abilian Multi-Layer Privacy Wallet (CLI version)- Your Gateway to Enhanced Privacy and Flexibility!

Why Should You Upgrade?

- Say goodbye to the "maximum recoverable number of wallets" requirement, as our new fully-private wallet is user-friendly and intuitive.

- Existing CLI users with ABEL tokens in their "abewalletlegacy" wallets are strongly encouraged to create a new fully-private wallet and transfer their assets for enhanced security.

- Miners and those who prioritize transaction speed and cost-effectiveness can opt for a pseudonymous wallet, offering a more accessible alternative to the fully-private option.

## Service Capabilities

This wallet adopts advanced multi-layer privacy technology, aiming to offer you unprecedented control over your transaction privacy and security. It features two innovative types of wallet addresses:

  1.**Fully-Private Address**: Your transactions are encrypted and untraceable, ensuring maximum security and anonymity.

  2.**Pseudonymous Address**: Enjoy a Bitcoin-like privacy level with publicly visible coin values and traceable transactions, all while benefiting from lower fees and increased throughput.

Furthermore, The abewalletmlp introduces a suite of key features designed to enhance your experience.

## Product Features

With abewalletmlp, enjoy enhanced privacy, faster transactions, lower gas fees, and the flexibility to manage your privacy on your terms.

- **Flexible Privacy Levels**: Choose between Fully-Private and Pseudonymous wallet addresses based on your privacy needs.
- **Simplified Recovery**: Recover all wallet addresses with mnemonic words, no more limitations.
- **Seamless Transfers**: Transfer ABELs between Fully-Private and Pseudonymous Wallets effortlessly.

## Operational Steps

### Prerequisites
1. All operations are conducted through the Command Line Interface (CLI). On Linux or macOS systems, access the Terminal; whereas on Windows, launch PowerShell or your preferred shell application.


2. “Abelian Full node”（`abec`)(package [abec-v1.0.0](https://pqabelian.io/download)) is installed and the latest blockchain data are synchronized in your computer. 

3.Please download the latest Abelian Multi-layer Privacy Wallet(`abecwalletmlp`) (package [abewalletmlp-v1.0.1](https://pqabelian.io/download)) .

Here are the download link provided for illustrative purposes only:

- Windows:<br>
  [abec-windows-amd64-v1.0.0.zip](https://download.pqabelian.io/release/abec/abec-windows-amd64-v1.0.0.zip),<br>
  [abewalletmlp-windows-amd64-v1.0.1.zip](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v1.0.1.zip)
- MacOS(Intel):<br>
  [abec-macos-amd64-v1.0.0.tar.gz](https://download.pqabelian.io/release/abec/abec-macos-amd64-v1.0.0.tar.gz),<br>
  [abewalletmlp-macos-amd64-v1.0.1.tar.gz](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v1.0.1.tar.gz)
- MacOS(Apple Silicon):<br>
  [abec-macos-arm64-v1.0.0.tar.gz](https://download.pqabelian.io/release/abec/abec-macos-arm64-v1.0.0.tar.gz),<br>
  [abewalletmlp-macos-arm64-v1.0.1.tar.gz](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v1.0.1.tar.gz)
- Linux(x86_64):<br>
  [abec-linux-amd64-v1.0.0.tar.gz](https://download.pqabelian.io/release/abec/abec-linux-amd64-v1.0.0.tar.gz),<br>
  [abewalletmlp-linux-amd64-v1.0.1.tar.gz](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v1.0.1.tar.gz)
- Linux(arm):<br>
  [abec-linux-arm64-v1.0.0.tar.gz](https://download.pqabelian.io/release/abec/abec-linux-arm64-v1.0.0.tar.gz),<br>
  [abewalletmlp-linux-arm64-v1.0.1.tar.gz](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v1.0.1.tar.gz)


_The official Abelian download page is located at [Download Page](https://pqabelian.io/download). For further engagement with fellow miners, developers and users, please visit the official [Discord Channel](https://discord.gg/Rrb33mC3Kc)_

### Installation

Please extract the contents of the two packages (`abec` and `abewalletmlp`) and relocate them to the directory `~/abel/`:

```shell
$ ls ~/abel
abec-macos-amd64-v1.0.0 abewalletmlp-macos-amd64-v1.0.1
$ ls ~/abel/abec-macos-amd64-v1.0.0
abec abectl start_abec.sh start_abectl.sh ...
$ ls ~/abel/abewalletmlp-macos-amd64-v1.0.1
abewalletmlp abewalletmlpctl start_abecwalletmlp.sh start_abewalletmlpctl.sh ...
```

Subsequently, navigate to the directory `~/abel/abec-macos-amd64-v1.0.0` and execute the following command:

::: code-group

```txt [macOS and Linux]
$ sh start_abec.sh
```

```txt [Windows]
$ .\abec.exe
```
:::

Next, press control+C to terminate the process. This action will initiate the creation of a configuration directory for `abec`, which will be located at:

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abec
```

```txt [MacOS]
~/Library/Application Support/Abec
```

```txt [Linux]
~/.abec
```
:::

Similarly, please change the directory to `~/abel/abewalletmlp-macos-amd64-v1.0.1` and execute the command as followings:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlp.sh --create
```

```txt [Windows]
$ .\abewalletmlp.exe --create
```
:::

Then again, press control+C to terminate the process. This action will initiate the creation of a configuration directory for `abewalletmlp`, which will be located at:

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abewallet
```

```txt [MacOS]
~/Library/Application Support/Abewallet
```

```txt [Linux]
~/.abewallet
```
:::


**During the command execution, you may encounter two types of pop-up prompts. Please follow these steps to dismiss the pop-up prompts:**

1)If you are operating on macOS and encounter a message indicating that `'xxx' is damaged and can't be opened`, please proceed by executing the following command.

```shell
$ xattr -d com.apple.quarantine /path/to/xxx
```

2)If you receive a pop-up window displaying a warning message about `'xxx' cannot be opened due to the developer's identity not being verified`, please follow these steps to resolve the issue:

a. Navigate to `System Preferences`.

b. Select `Security & Privacy`.

c. Click on the `General` tab.

d. Locate the option regarding the unverified app and click `Allow Anyway` to proceed with the opening of `xxx`.

_(If multiple pop-up prompts occur, simply continue to follow the aforementioned steps to dismiss the pop-up prompts.)_

### Create wallet

Moving forward, we will outline the process of wallet creation. 

Please proceed to the directory located at `~/abel/abewalletmlp-macos-amd64-v1.0.1` ,and then initiate the application by running the designated command:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlp.sh --create
```

```txt [Windows]
$ .\abewalletmlp.exe --create
```
:::

Please input the information as prompted, carefully mark down the mnemonic words in a secure location,etc. Here is an example:

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

The `private passphrase` is designated for unlocking the wallet to facilitate operations such as generating new addresses or transacting ABEL tokens. While the `public passphrase` shall be utilized when executing the abewalletmlp application.

Note that, compared to `abewalletlegacy`, there is no initial address generated, and we'll explain how to generate one as mining address or payee address later.

**VERY IMPORTANT: Safeguard your mnemonic list in a secure location. The mnemonic list is essential for wallet recovery , i.e., to install the same wallet on another machine.**

### Generate address

Navigate to the directory at `~/abel/abewalletmlp-macos-amd64-v1.0.1` and execute
 the program `abewalletmlp`.
 
  The command parameters are set as follows:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```

```txt [Windows]
$ .\abewalletmlp.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```
:::

Note:
1. Purpose of the `--rpcuser=[rpcuser]` and `--rpcpass=[rpcpass]` Parameters:
  - rpcuser: This parameter specifies the RPC connection username for abec, which is essential for proper wallet verification and establishing a connection to the abec service;
  - rpcpass: This parameter designates the RPC connection password for abec, used to accurately authenticate and connect the wallet to the abec service.

2. Analyzing Operation Wallet Logs:
```text
[INF] ABEW: Version 1.0.1
[INF] RPCS: Listening on 127.0.0.1:18665
[INF] ABEW: Chain server RPC TLS is disabled
[INF] ABEW: Attempting RPC client connection to localhost:18667
[INF] RPCS: Listening on [::1]:18665
[INF] CHNS: Established connection to RPC server localhost:18667
[INF] WLLT: Opened wallet
[INF] WLLT: Catching up block hashes to height 388630, this might take a while
[INF] WLLT: Done catching up block hashes
[INF] TMGR: Current sync height 388631, hash 46de0ac172d8b8f136db543edf412365c218ad7492628642c06dbe2ddfaf9d0e
```
- `Established connection to RPC server` means that a connection has been established to the abec RPC interface;
- `Opened wallet` means that the wallet is now running;
- `Current sync height` indicates that the wallet has started syncing blocks and shows the current sync height.

Subsequently, unlock the wallet using the **private passphrase**:

```shell
# unlock wallet
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] walletunlock [your private passphrase] [expire time in second]

# generate one address with full-privacy level
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] generateaddressabe 1 1
# Output generated wallet address (JSON format)
[
  {
    "addr": "0001000000010104eeb57aa5e203bd1794c3661114de89a1b9506f5db14e0cab9831f9c944427c97dbddf31e97bc604f7220077ab7b01d01d9e5d943f136964803838784aea5c76efe141585d239c1f8123b68a1b2f9d7e52fdc9fd566e65d9e96bf8b3d4d527947d26c7b2639febacbc463083dc34d68e2d09e56b64f7e411ebb3b585bda06d00b7be7c2219..."
  }
]

# generate one address with pseudonymous level
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] generateaddressabe 1 2
# Output generated wallet address (JSON format)
[
  {
    "addr": "0001000000020209099f1427fe710ed6bb8905b87f8722b69d735c0bf6ab088da1e4b439db0ea95045ccb57a13fb9f4c09b2b820f6abb3a6636c146e00bb3a4cd4ecb5b1f6c81c60893c6104a94ba2fa864655126d7e02466302b37603af606aa4ff62b81b182fd25c94aad20dde997fcbbdd044a8c04d50e40f8a18179de74ed0419e5de6355f759450e962..."
  }
]

```

### Configuration

This section of the configuration is divided into two parts: one part involves modifying the `abec` configuration file, and the other part involves modifying the `abewalletmlp` configuration file.

Part One, please open the configuration file for `abec`, the default locations as follows:

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abec\abec.conf
```

```txt [MacOS]
~/Library/Application Support/Abec/abec.conf
```

```txt [Linux]
~/.abec/abec.conf
```
:::

Please adjust the configuration parameters if necessary as below:

- **[Madatory setting]**
Set the RPC to listen on a local IP address and port: 

Set `rpclisten=xxx.xxx.xxx.xxx:8667` to **your local IP address and port 8667**, for example, rpclisten=192.168.1.1:8667. This will instruct `abec` to listen on all network interfaces for port 8667.

 _Note: you can check your local IP address by visiting online services, such as accessing http://ifconfig.me or http://icanhazip.com in your browser._

- Set the external access address to the public IP address 

Set `externalip=xxx.xxx.xxx.xxx` to broadcast your public IP address, enabling other `abec`nodes to discover and connect to your node.

 _Note: To obtain your public IP address, please consult with your Internet Service Provider (ISP) and router manufacturer._

- Set `enablegetwork=1` and `rpclistengetwork=:8668`, this will allow GPU clients `abelminer` to connect to your node, in order to facilitate subsequent mining operations.

- If you are a miner, please set `miningaddr` to your alternative wallet address to ensure that mining rewards are automatically credited to the specified address. For example,`miningaddr=0001000000010104eeb57aa5e203bd1794c3661114de89a1b9506f5db14e0cab9831f9c944427c97dbddf31e97bc604f7220077ab7b01d01d9e5d943f136964803838784aea5c76efe141585d239c1f8123b68a1b2f9d7e52fdc9fd566e65d9e96bf8b3d4d527947d26c7b2639febacbc463083dc34d68e2d09e56b64f7e411ebb3b585bda06d00b7be7c2219...`

At this point, the `abec` node is ready to access the Abelian network. 


Additionally, you can find the local `abec` node login credentials, including the username `rpcuser` and the password `rpcpass`, in the configuration file. These credentials will be used for subsequent logins to `abewalletmlp`.

- `rpcuser=[rpcuser]`
- `rpcpass=[rpcpass]`

Part two, if you need to set up your `abewalletmlp` wallet to connect to `abec` for synchronization with the latest block height, please perform the following two-step process:

1) please open the configuration file `abewalletmlp`, the default locations are as follows:

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abewallet\abewallet.conf
```

```txt [MacOS]
~/Library/Application Support/Abewallet/abewallet.conf
```

```txt [Linux]
~/.abewallet/abewallet.conf
```
:::

2) Please adjust the configuration parameters if necessary as below:

- set `rpcconnect=[rpclisten in file C:\Users\<USER_NAME>\AppData\Local\Abec\abec.conf]`, 
- set `abecrpcuser=[rpcuser in file C:\Users\<USER_NAME>\AppData\Local\Abec\abec.conf]`
- set `abecrpcuser=[rpcpass in file C:\Users\<USER_NAME>\AppData\Local\Abec\abec.conf]`

### Run Abelian Node

Navigate to the directory at `~/abel/abec-macos-amd64-v1.0.0` and execute the command as follows:

::: code-group

```txt [macOS and Linux]
$ sh start_abec.sh
```

```txt [Windows]
$ .\abec.exe
```
:::

The aforementioned command will facilitate your local node's connection to the Abelian network and initiate the synchronization of blockchain data. 

**Please note: Synchronizing the latest block data may take some time. Please be patient and allow the process to complete.**

### Run Wallet

Once `abec` has completed synchronization with the latest blockchain data, you can proceed with the next steps -run your wallet.

Navigate to the directory at `~/abel/abewalletmlp-macos-amd64-v1.0.1` and execute the command as follows:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```

```txt [Windows]
$ .\abewalletmlp.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```
:::

Note: The following assumes that the run command is `sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]`, but you can set the login username and password according to your actual situation.

### Operations on Wallet

Located within the directory at `~/abel/abewalletmlp-macos-amd64-v1.0.1` ,there is a script file named `start_abewalletmlpctl.sh`. This script serves as an interface for the executable `abewalletmlpctl`, enabling you to engage with the wallet as outlined in the subsequent section.

#### 1. Check balance

Run the following to check the balance of your wallet:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] getbalancesabe
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] getbalancesabe
```
:::

#### 2. Unlock

As shown in [Generate Address](#3-generate-address) section, when sensitive operations on the wallet are required, you are expected to unlock wallet first. Run the following to unlock wallet:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] walletunlock [your private passphrase] [expire time in second]
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] walletunlock [your private passphrase] [expire time in second]
```
:::

#### 3. Transfer

As you observed in [Generate Address](#generate-address) section, the fully-privacy address is considerably lengthy, potentially exceeding the character limit of the command line interface if the address is input directly.

Consequently, it is anticipated that you will create a file named `arg1` within the configuration directory of `abec` and enter the recipient's address and the corresponding amount into this file. 

The appropriate format for this information is as follows:

```text
[
    {
        "address":"...",
        "amount":700000000
    },
    {
        "address":"...",
        "amount":500000000
    }
]
```

_NOTE: the unit of amount is Neutrino (1 ABE = 10,000,000 Neutrinos)_

Subsequently, you can execute a transfer using the following command:

::: code-group

```txt [macOS and Linux]
$ DYLD_LIBRARY_PATH="./lib" ./abewalletmlpctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe -
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe -
```
:::

This command support customization requirements with a specific pattern, for example:

::: code-group

```txt [macOS and Linux]
$ DYLD_LIBRARY_PATH="./lib" ./abewalletmlpctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe - 0 1 1000 ""  true true
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe - 0 1 1000 "" true true
```
:::

The above command will instruct `abewalletmlp` create a transaction, in which the transaction fee would be specified as 1,000 Neutrinos, consume the tokens from the pseudonymous address, and set the pseudonymous address as the change address if there is any change remaining.

Here is a detailed explanation of some of the parameters in the command:

- By assigning the value of 1 to the third parameter, you enable the definition of the transaction fee in Neutrino through the fourth parameter. In the aforementioned example, the transaction fee has been designated as 1,000 Neutrinos.

- By setting the sixth parameter to `true`, the wallet is instructed to consume the tokens on the pseudonymous address when creating the transaction. When set to `false`, the tokens on the fully-privacy address will be consumed. If it is not set, it may consume any tokens.

- By setting the seventh parameter to `true`, the wallet is instructed uses a pseudonym address as the change address, and when set to `false`, it will use the full-privacy address as the change address, which is also the default setting.

### Recover Wallet

Prior to wallet recovery, please ensure you have prepared the following information:

- The mnemonic list associated with your current wallet.
- A verification of the current wallet's balance.
- A backup of the **configuration folder** once the current wallet is closed. It is imperative to copy this folder to an alternate secure location. 

_Retaining along with your public and private passphrases, may facilitate a rollback to the current wallet state should your mnemonics not meet your expectations_

The path to the `configuration folder` is:

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abewallet
```

```txt [MacOS]
~/Library/Application Support/Abewallet
```

```txt [Linux]
~/.abewallet
```
:::

Once the preparations are complete, navigate to the abewalletmlp's **configuration directory** and remove the `logs/` and `mainnet/` folders. 

Subsequently, execute the following command:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlp.sh --create
```

```txt [Windows]
$ .\abewalletmlp.exe --create
```
:::

Here is an example:

```text
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

Upon successfully recovering the wallet, please perform the following checks to ensure it is functioning as anticipated:

1) Configure the wallet and establish a connection to an `abec` node to facilitate the synchronization of all assets within the Abelian network


_Please refer to the second part of the configuration in this guide to perform the necessary operations, ensuring that your wallet is connected to the `abec` node_ 

2) Post synchronization, conduct a query to verify that the displayed balance matches your expectations.

### Wallet Migration 

**Please note that this migration process will create multiple transactions, which means you will need to pay the associated transaction fees**

The following migration guide is based on the assumption you are using [**abewalletlegacy** with **version 1.0.0**](https://pqabelian.io/download), possess assets, and have also reviewed the [abewalletlegacy Manual](https://download.pqabelian.io/release/docs/Abelian%20CLI%20Wallet%20Manual.pdf).

Based on the above assumptions, you should know the configuration folder for the `abewalletlegacy` as :

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Local\Abewallet
```

```txt [MacOS]
~/Library/Application Support/Abewallet
```

```txt [Linux]
~/.abewallet
```
:::


This is the same as the configuration folder used by `abewalletmlp`.


In this wallet migration example, it is assumed that the user is operating on two computers (referred to as `PC1`and `PC2`. The following demonstration will use macOS as an example.

1. On the first computer `PC1`: Recover the wallet using `abewalletlegacy` and synchronize the data as described in the [abewalletlegacy Manual](https://download.pqabelian.io/release/docs/Abelian%20CLI%20Wallet%20Manual.pdf). 

**Please back up the configuration folder to a secure location. Retain both the public and private passphrases, as these will be essential for reverting to the current wallet in case the mnemonic phrases do not meet expectations**

2. On the second computer `PC2`: [Install](#installation) and [Create](#create-wallet) a new wallet using `abewalletmlp`, then generate addresses as described in the "[Generate Address](#generate-address)" section. These addresses will be used as the recipient addresses for subsequent migration.

_To enhance privacy, it is recommended to create multiple addresses, particularly when opting for fully-private addresses. Utilizing multiple addresses will significantly improve your privacy measures_

  For instance, to generate five fully-private addresses at once, execute the following command: `sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] generateaddressabe 5 1`

```json
    [
      {
        "addr":"abe...add1"
      },
      {
        "addr":"abe...add2"
      },
      {
        "addr":"abe...add3"
      },
      {
        "addr":"abe...add4"
      },
      {
        "addr":"abe...add5"
      }
    ]
```

1. In `PC1`, query all spendable coin by command: `sh start_abewalletlegacyctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] listmaturetxoabe`. 

Examples of the results are as follows:

```json
    [
      {
        ...
        "Amount":1000000,
        ...
        "UTXOStr":"abe...abe01",
      },
      {
        ...
        "Amount":2000000,
        ...
        "UTXOStr":"abe...abe02",
      },
      {
        ...
        "Amount":3000000,
        ...
        "UTXOStr":"abe...abe03",
      },
      ...
      {
        ...
        "Amount":9000000,
        ...
        "UTXOStr":"abe...abe09",
      }
    ]
```

Before proceeding with the subsequent migration stes, we will illustrate the reasons and purposes of the following operations through examples:

1) Suppose your wallet contains 20 spendable transaction outputs (TXOs), each with a unique identifier (e.g., UTXOStr01, ..., UTXOStr20).

2) Due to system limitations that allow only 5 TXOs per transaction, these 20 TXOs need to be divided into 4 groups (Group 1, Group 2, Group 3, Group 4) for the subsequent creation of 4 transactions. For example, Group 1 corresponds to the TXOs UTXOStr01, UTXOStr02, UTXOStr03, UTXOStr04, UTXOStr05.

3) For the transaction outputs (TXOs) of each group, it is necessary to transfer the total amount of that group's TXOs to a new wallet address in one go. This requires you to first specify the new transaction's wallet receiving address and total amount, then select the corresponding group's TXOs from the wallet (e.g., UTXOStr01, ..., UTXOStr20), and finally execute the transaction command to transfer these TXOs to the new receiving address.

For example, for the first group (Group 1), you need to specify the new wallet's receiving address and total amount in the `arg1` file (the total amount should be the sum of these 5 TXOs minus the corresponding transaction fee), and in the command `sh start_abewalletlegacyctl.sh sendtoaddressesabe` specifys 5 transaction outputs (UTXOStr01, UTXOStr02, UTXOStr03, UTXOStr04, UTXOStr05), as well as the transaction fee.


4. Based on your specific requirements, utilize the `UTXOHashStr` and `Amount` from the previous results to categorize the coins, ensuring that each group contains no more than five coins. For instance, consider the following example:

```text
    Group1
    Total Amount: 15000000
    UTXOStr List: abe...abe01,abe...abe02,abe...abe03,abe...abe04,abe...abe05

    Group2
    Total Amount: 30000000
    UTXOStr List: abe...abe06,abe...abe07,abe...abe08,abe...abe09
```

5. In `PC1`, before the transaction, please modify the file located at `~/Library/Application Support/Abec/arg1` to specify the wallet's receiving address and transfer amount in order to create the migration transaction.

    For instance, following the initial grouping stage outlined previously, the file’s content should be modified as follows:

```json
    [
      {
        "address":"abe...add1",
        "amount":14500000,
      }
    ]
```

Note that the amount of generated tokens equals to the amount of consumed tokens minus the transaction fee,for example, `14,500,000 =15,000,000 - 500,000`_

1. Next, initiate the migration transaction by executing the following command: `sh start_abewalletlegacyctl.sh sendtoaddressesabe - 0 1 500000 abe...abe01,abe...abe02,abe...abe03,abe...abe04,abe...abe05`.

The above command would instruct `abewalletlegacy` to create transaction which would consume the tokens in the first group, generate one coin, where the address of generated coin points to `abe...add1`, the amount is 14,500,000, and the specified transaction fee is 500,000.


7. Finally, after the transaction is successfully included in a block, please check the balance of the `abewalletmlp` wallet on the `PC2` to ensure it matches your expectations.