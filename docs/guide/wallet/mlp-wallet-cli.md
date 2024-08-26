---
outline: deep
---

# Abelian Multi-layer Privacy Wallet CLI Manual

This document describes how to run an Abelian Multi-layer Privacy Wallet CLI (abewalletmlp).

All the operations are carried out via the Command Line Interface (CLI). For Linux or macOS, open Terminal; and for Windows, open PowerShell or any of your favorite shell application.

The official Abelian download page is located at [Download Page](https://pqabelian.io/download). To interact with
other miners, developers and users, visit the official [Discord Channel](https://discord.gg/cPUhCmsw).

## Installation

Download latest released pre-compiled binary on the [Download Page](https://pqabelian.io/download), at the time of writing, The latest abec version is 1.0.0, while the latest abewalletmlp version is 1.0.1. The download url for different platforms as following (Please refer to the latest version on the pqabelian.io download page; the example is for reference only.):

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

Unzip them and move them into the folder `~/abel/`:

```shell
$ ls ~/abel
abec-macos-amd64-v1.0.0 abewallet-macos-amd64-v1.0.1
$ ls ~/abel/abec-macos-amd64-v1.0.0
abec abectl start_abec.sh start_abectl.sh ...
$ ls ~/abel/abewalletmlp-macos-amd64-v1.0.1
abewalletmlp abewalletmlpctl start_abecwalletmlp.sh start_abewalletmlpctl.sh ...
```

Then go to `~/abel/abec-macos-amd64-v1.0.0` and run

::: code-group

```txt [macOS and Linux]
$ sh start_abec.sh
```

```txt [Windows]
$ .\abec.exe
```
:::


Then press control+C to stop it. By doing this, we create a configuration folder for `abec` located at:

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

Then go to `~/abel/abewalletmlp-macos-amd64-v1.0.1` and run

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlp.sh --create
```

```txt [Windows]
$ .\abewalletmlp.exe --create
```
:::

Then press control+C to stop it. By doing this, we create a configuration folder for `abewalletmlp` located at:

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

If you are using macOS to run above commands, when it says `'xxx' is damaged and can't be opened`, please run the command.

```shell
$ xattr -d com.apple.quarantine /path/to/xxx
```

If it says `'xxx' cannot be opened because the developer cannot be verified`, go to `System Preferences -> Security & Privacy -> General` and click `allow anyway`.

## Create wallet

Next, we'll cover how to create a wallet, go to `~/abel/abewalletmlp-macos-amd64-v1.0.1` and run

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlp.sh --create
```

```txt [Windows]
$ .\abewalletmlp.exe --create
```
:::

Please enter according to the prompt and record the mnemonic words, here is an example:

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

The `public passphrase` will be used when running abewalletmlp, and the `private passphrase` will be
used to unlock the wallet for generating new address or transferring ABEL tokens.

Note that compared to `abewalletlegacy`, there is no initial address generated, and we'll explain how to generate one as mining address or payee address later.

***VERY IMPORTANT: keep the mnemonic list in a safe place. The mnemonic list can be used for recovering
the wallet, install another machine while using the same wallet.***

## Generate address

Go to `~/abel/abewalletmlp-macos-amd64-v1.0.1` and run the abewalletmlp:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```

```txt [Windows]
$ .\abewallet.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```
:::

Note:
1. The purpose of the `--rpcuser=[rpcuser]` and `--rpcpass=[rpcpass]` parameters:
  - rpcuser: The RPC connection username for abec, used for proper wallet verification and connecting to abec.
  - rpcpass: The RPC connection password for abec is used to correctly verify and connect the wallet to abec.

2. Analyze the operation wallet logs:
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

Then unlock wallet via **private** passphrase:

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

## Configuration

Open the configuration file of `abec`, the default locations are as follows:

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


and make the following changes as needed:

- set `rpclisten=1.2.3.4:8667`, this would instruct `abec` listen to all interfaces on port 8667.
- set `externalip=1.2.3.4`, this will broadcast your IP address (e.g. 1.2.3.4) so that other Abel nodes can find you and connect to you. This requires that you know your public IP, and if you are on an intranet, you will also need to configure port forwarding in your router.
- set `enablegetwork=1` and `rpclistengetwork=:8668`, this will allow GPU clients `abelminer` to connect to your node.
- set `miningaddr=0001000000010104eeb57aa5e203bd1794c3661114de89a1b9506f5db14e0cab9831f9c944427c97dbddf31e97bc604f7220077ab7b01d01d9e5d943f136964803838784aea5c76efe141585d239c1f8123b68a1b2f9d7e52fdc9fd566e65d9e96bf8b3d4d527947d26c7b2639febacbc463083dc34d68e2d09e56b64f7e411ebb3b585bda06d00b7be7c2219...`, this will allow the mining subsidy to be mined to the specified address if you are a miner.

At this point, the node is ready to access the Abelian network. In addition, the endpoint of the local node can be obtained from the configuration file, which will be needed by `abewalletmlp`:

- `rpcuser=[rpcuser]`
- `rpcpass=[rpcpass]`

Then, open the configuration file `abewalletmlp`, the default locations are as follows:

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

and make the following changes as needed:

- set `rpcconnect=[rpclisten in abec.conf]`, 
- set `abecrpcuser=[rpcuser in abec.conf]`
- set `abecrpcuser=[rpcpass in abec.conf]`

## Run Abelian Node

Go to `~/abel/abec-macos-amd64-v1.0.0` and run as follow:

::: code-group

```txt [macOS and Linux]
$ sh start_abec.sh
```

```txt [Windows]
$ .\abec.exe
```
:::

The above command would let the local node to connect to the Abelian network and start synchronizing blockchain data. The synchronization process may take some time

## Run Wallet

Go to `~/abel/abewalletmlp-macos-amd64-v1.0.1` and run as follow:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```

```txt [Windows]
$ .\abewalletmlp.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]
```
:::

Note: The following assumes that the run command is `sh start_abewalletmlp.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --walletpass=[your public passphrase]`, but you can actually set it up as desired

## Operations on Wallet

There is a script file named `start_abewalletmlpctl.sh` that wraps the executable `abewalletmlpctl` in folder `~/abel/abewalletmlp-macos-amd64-v1.0.1`, which you will use it to interact with the wallet in the section.

### 1. Check balance

Run the following to check the balance of your wallet:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] getbalancesabe
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] getbalancesabe
```
:::

### 2. Unlock

As shown in [Generate Address](#3-generate-address), when sensitive operations on the wallet are required, you are expected to unlock wallet first. Run the following to unlock wallet:

::: code-group

```txt [macOS and Linux]
$ sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] walletunlock [your private passphrase] [expire time in second]
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] walletunlock [your private passphrase] [expire time in second]
```
:::

### 3. Transfer

As you saw in [Generate Address](#generate-address), the fully-privacy address will be very long, which will make it exceed the length limit of the command line if directly put address in it.

Instead, you are expected to create a file called `arg1` in the configuration folder of `abec` and put one or two receivers' address and amount into it. The format would be as follows:

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

NOTE: the unit of amount is Neutrino (1 ABE = 10,000,000 Neutrino).

Then, you can make a transfer by following command:

::: code-group

```txt [macOS and Linux]
$ DYLD_LIBRARY_PATH="./lib" ./abewalletmlpctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe -
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe -
```
:::

This command support customization requirements with specific pattern, such as:

::: code-group

```txt [macOS and Linux]
$ DYLD_LIBRARY_PATH="./lib" ./abewalletmlpctl --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe - 0 1 1000 ""  true true
```

```txt [Windows]
$ .\abewalletmlpctl.exe --rpcuser=[rpcuser] --rpcpass=[rpcpass] sendtoaddressesabe - 0 1 1000 "" true true
```
:::

The above command will instruct `abewalletmlp` creating a transaction, in where transaction fee would be specified as 1000 Neutrino, consume the tokens on the pseudonymous address, and set pseudonymous address as change address if there is any change.

By setting the third parameter to `1`, it is allowed to specify the transaction fee in Neutrino with the fourth parameter. The above example is set transaction fee to 1000 Neutrino.

By setting the fifth parameter to `true`, it will instruct the wallet to consume the tokens on the pseudonymous address when creating the transaction. When set to `false`, the tokens on the fully-privacy address will be consumed. If it is not set, it may consume any tokens.

By setting the sixth parameter to `true`, it will instruct the wallet uses a pseudonym address as the change address, and when set to `false`, it will use the full-privacy address as the change address, which is also the default setting.

## Recover Wallet

Before you recover wallet, please first prepare the information as following:

- Mnemonic list for current wallet
- Check the balance of the current wallet
- Backup **configuration folder** when current wallet is closed. Please copy the folder to somewhere else which is also safe. This, together with the public and private passphrase, may help rollback to the current wallet in case your mnemonics are not as you expected.

**configuration folder** path:

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

After finishing the preparation, delete `logs/` and `mainnet/` folders in the **configuration folder** of abewalletmlp, and run:

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

After recovering the wallet, please check whether it is recovered as expected:

1. Configure the wallet and connect it to an abec node, so that it can synchronize all assets in Abelian network.
2. After the synchronization, query and check whether the balance is as expected

## Migration From Abelian CLI wallet (abewalletlegacy)

**Please note that the migration is not lossless. This process will create multiple transactions, which means that you need to pay the corresponding transaction fee.**

For the purposes of this section, it is assumed that you use [**abewalletlegacy** with **version 1.0.0**](https://pqabelian.io/download) and own assets, and have read the [abewalletlegacy Manual](https://download.pqabelian.io/release/docs/Abelian%20CLI%20Wallet%20Manual.pdf).

Based on the above assumptions, you should know the configuration folder for the `abewalletlegacy`:

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

For the smooth migration, we assume that user use two computers (named PC1 and PC2) to perform the following steps, and the path is based on MacOS as an example:

1. In a computer (call `PC1` later), recover wallet with `abewalletlegacy` and sync data as described in [abewalletlegacy Manual](https://download.pqabelian.io/release/docs/Abelian%20CLI%20Wallet%20Manual.pdf), and then backup configuration folder to somewhere else which is also safe. Together with the public and private passphrase, may help rollback to the current wallet in case your mnemonics are not as you expected.

2. In another computer (call `PC2` later), [Install](#installation) and [Create](#create-wallet) a new wallet with `abewalletmlp`, and then generate addresses as described in [Generate Address](#generate-address). Those addresses from this step will be used as the receiver's address for subsequent migration.

    You can generate multiple addresses without any burden, especially when you choose fully-privacy address, multiple addresses will help improve your privacy.

    For example, generate 5 fully-privacy addresses by `sh start_abewalletmlpctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] generateaddressabe 5 1`

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

3. In `PC1`, query all spendable coin by `sh start_abewalletlegacyctl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] listmaturetxoabe`. Examples of results are as follows:

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

4. According to your own requirements, use `UTXOHashStr` and `Amount` of the previous results to group the coins, each group of no more than 5. For example, the following:

    ```text
    Group1
    Total Amount: 15000000
    UTXOStr List: abe...abe01,abe...abe02,abe...abe03,abe...abe04,abe...abe05

    Group2
    Total Amount: 30000000
    UTXOStr List: abe...abe06,abe...abe07,abe...abe08,abe...abe09
    ```

5. In `PC1`, **For each group**, just like the usual transfer, modify the file `~/Library/Application Support/Abec/arg1` to specify the migration address and amount and create a transaction for migration.

    For example, for the first group in previous step, the content of file would be changed to:

    ```json
    [
      {
        "address":"abe...add1",
        "amount":14500000,
      }
    ]
    ```

    And then create a transaction for migration by `sh start_abewalletlegacyctl.sh sendtoaddressesabe - 0 1 500000 abe...abe01,abe...abe02,abe...abe03,abe...abe04,abe...abe05`.

    The above command would instruct `abewalletlegacy` to create transaction which would consume the tokens in the first group, generate one coin, where the address of generated coin points to `abe...add1`, the amount is 14500000, and the specified transaction fee is 500000.

    Note that the amount of tokens consumed is equal to the transaction fee plus the amount of tokens generated i.e. `15000000 = 14500000 + 500000`.

6. Wait a while for the transaction to be packaged into block, and in `PC2`, check whether the balance of `abewalletmlp` is as expected.
