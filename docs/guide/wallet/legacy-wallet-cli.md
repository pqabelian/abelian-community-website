---
outline: deep
---

# Abelian CLI Wallet

Download PDF: [Abelian Legacy Wallet CLI Manual](https://download.pqabelian.io/release/docs/Abelian%20CLI%20Wallet%20Manual.pdf)


---


# Abelian Legacy Wallet CLI Manual

This document describes how to run an Abelian CLI wallet.

Please refer to **Abelian Software Basics** to understand the software architecture first.

The [Official Abelian Download Page](https://pqabelian.io/download). To interact with other miners, developers and users, visit the [Official Discord Channel] (https://discord.com/invite/5rrDxP29hx).

All the operations are carried out via the Command Line Interface (CLI). For Linux or macOS, open Terminal; and for Windows, open PowerShell or any of your favorite shell application.

Note: For upgrading from an old version to the latest one, please jump directly to section, 9. **Upgrade to the Latest Version**.

## 1. Installation

Download two compressed files, something like `abec-linux-amd64-v1.0.0.tar.gz` and `abewalletlegacy-linux-amd64-v1.0.0.tar.gz` for Linux running on an x86 architecture (e.g. Intel chips).

Unzip them and put them under the same folder `~/abel/`:

```bash
~/abel/abec-linux-amd64-v1.0.0/
~/abel/abewalletlegacy-linux-amd64-v1.0.0/
```

There are three executable files: `abec` and `abectl` are in `~/abel/abec-linux-amd64-v1.0.0/` and `abewalletlegacy` in `~/abel/abewalletlegacy-linux-amd64-v1.0.0/`.

Go to `~/abel/abec-linux-amd64-v1.0.0/`, and run:

::: code-group

```txt [Windows]
abec
```

```txt [macOS and Linux]
./start_abec.sh
```

:::

Then press `control+C` to stop it. By doing this, we create a configuration folder for `abec` located at:

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

Next, go to `~/abel/abewalletlegacy-linux-amd64-v1.0.0/`, and run:

::: code-group

```txt [Windows]
abewalletlegacy --create
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --create
```

:::

Then press `control+C` to stop it. By doing this, we create a configuration folder for `abewalletlegacy` located at:

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

Note: On macOS (M1/M2 chip / arm64), if it says `'xxx' is damaged and can't be opened`, run the command:

```bash
xattr -d com.apple.quarantine path/to/xxx
```

If it says `'xxx' cannot be opened because the developer cannot be verified`, go to `System Preferences -> Security & Privacy -> General` and click `allow anyway`.

## 2. Create a Wallet

To create a wallet, go to `~/abel/abewalletlegacy-macos-amd64-v1.0.0/` and run:

::: code-group

```txt [Windows]
abewalletlegacy --create
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --create
```

:::

Here is an example:

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

## 3. Configuration - abec

You can let other Abelian nodes on the mainnet know your presence by broadcasting your IP address (e.g. `1.2.3.4`). This works only if you have a public IP or have some IP forwarding configured at your router:

```plaintext
externalip=1.2.3.4
```

Allow `abelminer` to connect to `abec` for GPU mining:

```plaintext
enablegetwork=1
```

If you have multiple GPU mining machines connecting remotely to this single `abec`, make sure that port `8668` is opened:

```plaintext
rpclistengetwork=:8668
```

Set the initial address of your wallet to `miningaddr`:

```plaintext
miningaddr = [your initial address]
```

## 4. Configuration - abewalletlegacy

Copy the RPC values, namely `rpcuser` and `rpcpass`, from `abec.conf`:

```plaintext
rpcuser = [rpcuser]
rpcpass = [rpcpass]
```

Paste them respectively to `abewallet.conf` in the configuration folder of `abewalletlegacy`:

```plaintext
abecrpcuser= [rpcuser in abec.conf]
abecrpcpass= [rpcpass in abec.conf]
```

In addition, in order to let `abectl` (abewalletlegacy control console) interact with `abewalletlegacy` later, we need to set the following options in `abewallet.conf`:

```plaintext
rpcuser= [whatever_username]
rpcpass= [whatever_password]
```

Suggestion: To simplify the username and password management, set the `rpcuser` and `rpcpass` in `abewallet.conf` to be the same as the `abecrpcuser` and `abecrpcpass`, respectively.

If running `abec` and `abewalletlegacy` on different machines, additional configuration for IP and port may be required.

### 4.1 abec and abewalletlegacy are running on different machines

If you are running `abec` and `abewalletlegacy` on different machines, you need to configure them as follows:

1. Add the following option in `abec.conf`:

```plaintext
rpclisten=[IP:PORT]
```
Or simply:

```plaintext
rpclisten=
```

This will make your `abec` listen to all interfaces on the default port number (i.e., 8667).

1. In `abewallet.conf`, add the following option to specify the IP address and port of the remote full node (`abec`):

```plaintext
rpcconnect=[IP:PORT]
```

Where `[IP]` is the IP address of the machine running `abec`, and `[PORT]` is the listening port of `abec` (default is 8667 if not specified).

2. Go to the configuration folder of `abec`, delete the two RPC files: `rpc.cert` and `rpc.key`. Then run `abec` again to generate a new pair of `rpc.cert`/`rpc.key` in the configuration folder.

3. Copy `rpc.cert` from the configuration folder of `abec`, and store the file at `~/Documents/abel/rpc.cert` on the machine where `abewalletlegacy` is running. Set the `cafile` option in `abewallet.conf` as follows:

```plaintext
cafile=~/abel/rpc.cert
```

## 5. Run a Full Node - abec

To run a full node:

::: code-group

```txt [Windows]
abec
```

```txt [macOS and Linux]
./start_abec.sh
```

:::

## 6. Run a Wallet - abewalletlegacy

To run the wallet:

::: code-group

```txt [Windows]
abewalletlegacy --walletpass=[your public passphrase]
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --walletpass=[your public passphrase]
```

:::

## 7. Use abectl to Operate on abec and abewalletlegacy

In the `abec` folder, there is another executable called `start_abectl.sh` (macOS and Linux) or `abectl` (Windows). This executable can be used for checking the balance of your wallet, make fund transfer, and so on.

### 7.1 Check Balance

Run the following to check the balance of your wallet where `username` and `password` should be the same as the options `rpcuser` and `rpcpass` we configured in `abewallet.conf`, respecitvely.

::: code-group

```txt [Windows]
abectl --rpcuser=[username] --rpcpass=[password] --wallet getbalancesabe
```

```txt [macOS and Linux]
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --wallet getbalancesabe
```

:::

### 7.2 Unlock

Before sending a transaction or generating a new address, you need to unlock your wallet first:

::: code-group

```txt [Windows]
abectl --rpcuser=[rpc username] --rpcpass=[rpc password] --wallet walletunlock [private passphrase] [timeout]
```

```txt [macOS and Linux]
./start_abectl.sh --rpcuser=[rpc username] --rpcpass=[rpc password] --wallet walletunlock [private passphrase] [timeout]
```

:::

The unit of timeout is in seconds.

Example:

```bash
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --wallet walletunlock
123456 240
```

This unlocks the wallet with passphrase 123456 for 240 seconds.

### 7.3 Generate a New Address

After unlocking the wallet, you can generate a new address by running:

::: code-group

```txt [Windows]
abectl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
```

```txt [macOS and Linux]
./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
```

:::

### 7.4 Query the Maximum Number of Addresses

Every time the wallet is recovered or a new transaction is initiated, a fresh wallet address is created. You can run the following command to find out the total number of addresses created:

::: code-group

```txt [Windows]
abectl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet addressmaxsequencenumber
```

```txt [macOS and Linux]
./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet addressmaxsequencenumber
```

:::

### 7.5 Make a Transfer

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

Note that the unit of amount is **Neutrino** (1 ABE = 10,000,000 Neutrino).

Then, you can send a transaction by running:

::: code-group

```txt [Windows]
abectl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet sendtoaddressesabe -
```

```txt [macOS and Linux]
./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet sendtoaddressesabe -
```

:::


Example:

```bash
$ cat /Users/username/Library/Application Support/Abec/arg1
 [{"address":"addr1", "amount":700000000},{"address":"addr2", "amount":500000000}]
$ ./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet sendtoaddressesabe -
```

This command sends **70 ABEL** to `addr1` and **50 ABEL** to `addr2`.

## 8. Recover a wallet

### 8.1 Prepare the Information

If you want to recover a wallet, please first prepare the information as described below:

1. **Please make sure your wallet mnemonics are available.**
2. **Query the maximum number of addresses in the current wallet.**
3. **Query the balance information of the current wallet.**
4. **Backup the abewalletlegacy configuration folder.** Please copy the folder to somewhere else which is also
safe. This, together with the public and private passphrase, may help rollback to the current wallet in case your mnemonics are not as you expected.


### 8.2 Recover the Wallet

1. Delete `logs/` and `mainnet/` folders in the configuration folder of `abewalletlegacy`, and run:

::: code-group

```txt [Windows]
abewalletlegacy --create
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --create
```

:::

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
**Note**: For the `max No. of address to recover` here we should input **the number obtained in the preparation in 8.1**.

### 8.3 Check the Wallet

After recovering the wallet, to ensure it is fully restored, follow these steps:

1. **Configure the wallet** and connect it to an `abec` node, so that it can synchronize the Abelian blockchain and locate all ABEL coins.
2. After the synchronization is complete, **query the balance** and check whether it matches your expected balance.

## 9. Upgrade to the Latest Version

If you already have an old version running (for example, v0.11.1), you can follow the steps below to upgrade to the latest version (v0.11.9 as of this writing):

1. **Stop running both `abec` and `abewalletlegacy`** from the old version.
2. Download and unzip the two compressed files for `abec` and `abewalletlegacy`.
3. To run the new `abec`, simply go to the new `abec` folder and run it.
4. This part is a bit tricky as we need to **remove the old configuration folder** of `abewalletlegacy` first, then **recover your wallet** before running the new version.

### 9.1 Run the New Version of abewalletlegacy

Please first prepare the information as described in **8.1**.

### 9.2.1 Prepare the Information

Before upgrading the wallet, ensure you have the following:

1. Your **wallet mnemonics** available.
2. **Query the maximum number of addresses** in the current wallet.
3. **Query the balance** of the current wallet.
4. **Backup the `abewalletlegacy` configuration folder** by copying it to a safe location. This, along with the public and private passphrases, may help you recover the current wallet in case your mnemonics are incorrect.

### 9.2.2 Upgrade the Wallet

1. After finishing the preparation, delete the `logs/` and `mainnet/` folders in the configuration folder of `abewalletlegacy`, and run:

::: code-group

```txt [Windows]
abewalletlegacy --create
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --create
```

:::

Press control+C. By doing this, we re-create the configuration folder.

Then, do the configuration of abewalletlegacy as described in Section 4.

After that, go to the new abewalletlegacy folder and recover your wallet:

::: code-group

```txt [Windows]
abewalletlegacy --create
```

```txt [macOS and Linux]
./start_abewalletlegacy.sh --create
```

:::

Example:

```bash
$ ./start_abewalletlegacy.sh --create
Enter the private passphrase for your new wallet:
Confirm passphrase:
Enter the public passphrase for your new wallet:
Confirm passphrase:
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]: y
Run the new version of abewallet
Prepare the information
Upgrade the wallet
Enter the crypto version is:0
Enter existing wallet mnemonic: biology,hazard,sudden,dignity,drop,jealous,butter,believe,answer,enter,practice,scorpion,health,tunnel,rival,vault,neutral,season,proof,must,path,steel,final,female
Please input the max No. of address to recover :5
Creating the wallet...
 [INF] WLLT: The addresses with No. in [0, 5] have been restored.
 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

**Note**: For the `max No. of address to recover` here we should input **the number obtained in the preparation in 9.2.1**.

Finally, run the wallet (`abewalletlegacy`):

::: code-group

```txt [Windows]
abewallet --walletpass=[your public passphrase]
```

```txt [macOS and Linux]
./start_abewallet.sh --walletpass=[your public passphrase]
```

:::