---
outline: deep
---

# Get Started

## Overview

This guide aims to help you install and run the Abelian blockchain program on your computer. We will walk you through the process step by step to ensure you can smoothly start using Abec and Abewallet. If you have any questions or need further assistance, feel free to seek help in our [Discord community](https://discord.com/invite/5rrDxP29hx) in the mining channel (go to the "how-to-mine-abel" sub-channel after "verify-yourself"). Let's get started!

## 1. Installation
There are three pieces of software: **abec**, **abewallet** and **abectl**. They are downloaded in two compressed files, something like **abec-macos-amd64-v1.0.0.tar.gz** and **abewalletmlp-macos-amd64-v1.0.1.tar.gz** for macOS running on an x86 architecture (e.g. Intel chips). More information can be found in the Discord.

Unzip both files, you will get two folders, something like **abec-macos-amd64-v1.0.0/** and **abewalletmlp-macos-amd64-v1.0.1/**. To ease the description below, let's put these two folders under a folder called **abel/** under **Documents**. Something like:

```shell
1. ~/Documents/abel/abec-macos-amd64-v1.0.0/
2. ~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/
```

**abec** and **abectl** are in ```~/Documents/abel/abec-macos-amd64-v1.0.0/``` and ***abewallet*** is in ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/```.

To run these software, we use Terminal (for macOS and Linux) or PowerShell (for Windows).

Open a Terminal / PowerShell, go to ```~/Documents/abel/abec-macos-amd64-v1.0.0/```, and run

```shell
# macOS and Linux
./start_abec.sh
# Windows
abec
```

Then press control+C. By doing this, we create a **configuration folder** located at:

- Windows: C:\\Users\\[username]\\AppData\\Local\\Abec
- macOS: /Users/[username]/Library/Application Support/Abec
- Linux: /home/[username]/.abec

Next, open another Terminal / PowerShell, go to ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/```, and run

```shell
# macOS and Linux
./start_abewallet.sh --create
# Windows
abewallet --create
```

Then press control+C. By doing this, we create a **configuration folder** located at:

- Windows: C:\\Users\\username\\AppData\\Local\\Abewallet
- macOS: /Users/username/Library/Application Support/Abewallet
- Linux: /home/username/.abewallet

**Note:** On macOS and Linux, you may need to run ```chmod 777 xxx``` if it says ```xxx: Permission denied```. 

**Note**: On macOS (M1 chip / arm64), if it says ```'xxx' is damaged and can't be opened```, open a Terminal and run  
`xattr -d com.apple.quarantine path/to/xxx`.

**Note**: On macOS, if it says ```'xxx' cannot be opened because the developer cannot be verified```, go to ```System Preferences -> Security & Privacy -> General``` and click ```allow anyway```. 

## 2. Create a wallet
To create a wallet, go to ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/``` and run

```shell
# macOS and Linux
./start_abewallet.sh --create
# Windows
abewallet --create
```

Here is an example.

```shell
./start_abewallet.sh --create
Enter the private passphrase for your new wallet:
Confirm passphrase:
Enter the public passphrase for your new wallet:
Confirm passphrase:
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]:
Your wallet generation seed is:
afe0f025646cde3eee099db9215f8cdb212ed0e06730fd0087e9d1ff5565fd53
the crypto version is 0
Your wallet mnemonic list is:
quiz,always,announce,silver,social,buyer,return,crisp,rice,april,tobacco,rent,base,half,light,toward,wonder,aerobic,whip,physical,vocal,real,vocal,leg
IMPORTANT: Keep the version and seed in a safe place as you
will NOT be able to restore your wallet without it.
Please keep in mind that anyone who has access
to the seed can also restore your wallet thereby
giving them access to all your funds, so it is
imperative that you keep it in a secure location.
Once you have stored the seed in a safe and secure location, enter "OK" to continue: OK
Creating the wallet...
Please remember the initial address:
00000000005a38589d86427698e3ec735335b368899ed6e0239c4285bbc4e370f4ea4e6d2ac1f1555b53f8df7c30e13d4bccc3b6d56763ec279620d9f131fb68089cb8ef18885950f84e56bf78d1780a5cac57d0888dabd669f86f85e7055afabae6a332fa000b3c6ee6a09751ce41ad7de4e...
```

The **public passphrase** will be used when running abewallet, and the **private passphrase** will be used for unlocking the wallet (so to spend transfer ABEL tokens). These passphrases should be different and kept strictly safe.

**Important:** Keep the **crypto version** and  **mnemonic list** in a safe place, and also remember the number of times that you have recovered the same wallet. The mnemonic list can be used for recovering the wallet in the future in case you lose your wallet, install another mining machine while using the same wallet, or upgrade the mining software.

The **initial address** will be used as your mining address or payment address later.

**Important:** All these information should be copied down, namely, public passphrase, private passphrase, crypto version, mnemonic list, initial address, and the number of times that the same wallet has been recovered.

## 3. Configuration - abec
Go to the configuration folder of abec and make changes as below in the configuration file **abec.conf**.

### 3.1 Listen to a Specific Port
The default listen port of an Abelian node (i.e. abec) is 8666. If you would like to use some other port (in the range [1025-65535]), for example 18666, you can specify it by adding the following into abec.conf.

```
listen=:18666
```

### 3.2 Broadcast Your (Mining) Node
You can let other Abelian nodes on the mainnet know your presence through broadcasting your IP address. This works if you have a public IP or have some IP forwarding already set at your router. To do so, you can specify your external IP (e.g. 1.2.3.4) in abec.conf:

```
externalip=1.2.3.4
```

If you are using some other listenting port (e.g. 18666) rather than the default port (8666), you need to specify the port as well:

```
externalip=1.2.3.4:18666
```

If your node sits behind a router, you may also enable UPnP by adding the following in abec.conf.

```
upnp=1
```

### 3.3 RPC Values

To let your ABEL wallet, namely, abewallet, connect to abec, you need to know the values of rpcuser and rpcpass, which are in abec.conf.

```
rpcuser = [rpcuser]
rpcpass = [rpcpass]
```

You may keep these automatically generated rpcuser and rpcpass values unchanged.

### 3.4 Mining Address

If you want to run a full node and also as a mining node (which I think you do), you need to include the initial address of your wallet to the miningaddr option in abec.conf.

```
miningaddr = [your initial address]
```

## 4. Configuration - abewallet
Your ABEL wallet (abewallet) needs to connect to one of the full nodes (abec). Configure the following options in *abewallet.conf* which is located in the configuration folder of abewallet:

```
abecrpcuser= [rpcuser in abec.conf]
abecrpcpass= [rpcpass in abec.conf]
```

`[rpcuser in abec.conf]` and `[rpcpass in abec.conf]` are the rpcuser and rpcpass values, respecitvely, from abec.conf. This allows abewallet to connect to abec.

In addition, in order to let ***abectl*** (abewallet control console) interact with abewallet later, we need to set the following options in abewallet.conf.

```
rpcuser= [username]
rpcpass= [password]
```

***Note:*** In other words, abecrpcuser / abecrpcpass (in abewallet.conf) correspond to rpcuser / rpcpassword (in abec.conf), respecitvely, and are used for establishing a secure RPC communication channel between abec and abewallet. While rpcuser / rpcpass (in abewallet.conf) will be used for establishing a secure RPC communication channel between abectl (to be introduced) and abewallet.

Besides the configuration above, you need to do a few more configurations as follows if you are running abec and abewallet at different machines.


### 4.1 abec and abewallet are running on different machines

Add the following option in *abec.conf*:

```
rpclisten=[IP:PORT]
```

If there is only one local net IP, or for simplicity, it can be 0.0.0.0, which means listening to PORT of all IPs.

Next, add the following option in *abewallet.conf* for specifying the IP address and PORT of the remote full node (abec).

```
rpcconnect=[IP:PORT]
```

IP and PORT are the IP address and listening port of abec, respectively. If a port is not specified, the default port (8667) will be used.

Finally, copy *rpc.cert* from the configuration folder of the remote full node, abec, and store the file as ```~/Documents/abel/rpc.cert``` and set the cafile option in *abewallet.conf* as

```
cafile=~/Documents/abel/rpc.cert
```

## 5. Running a Full (Mining) Node - abec
Go to ```~/Documents/abel/abec-macos-amd64-v1.0.0/``` and run a full node (abec):

```shell
# macOS and Linux
./start_abec.sh --generate
# Windows
abec --generate
```

The above command also makes abec start mining. If you do not want to mine, and instead, just run abec as a full node:

```shell
# macOS and Linux
./start_abec.sh
# Windows
abec
```

Example:

```shell
./start_abec.sh --generate
2022-08-08 12:08:46.663 [INF] ABEC: Version 0.11.0
2022-08-08 12:08:46.664 [INF] ABEC: Loading block database from '/Users/username/Library/Application Support/Abec/data/mainnet/blocks_ffldb'
2022-08-08 12:08:46.720 [INF] ABEC: Block database loaded
2022-08-08 12:08:49.731 [INF] CHAN: Loading block index...
2022-08-08 12:08:50.087 [INF] CHAN: Chain state (height 48598, hash 00000000016f90d388ddae2c66cb2c665d6ffaaf09b9213ff037f2ec169e7796, totaltx 48643, work 1111339015394973)
2022-08-08 12:08:50.106 [INF] MINR: CPU miner started
2022-08-08 12:08:50.106 [INF] RPCS: RPC server listening on [::1]:8667
2022-08-08 12:08:50.106 [INF] RPCS: RPC server listening on 127.0.0.1:8667
2022-08-08 12:08:50.119 [INF] AMGR: Loaded 686 addresses from file '/Users/username/Library/Application Support/Abec/data/mainnet/peers.json'
2022-08-08 12:08:50.123 [INF] CMGR: 39 addresses found from DNS seed dnsseed.theabelian.net
2022-08-08 12:08:50.120 [INF] CMGR: Server listening on 0.0.0.0:8666
2022-08-08 12:08:50.120 [INF] CMGR: Server listening on [::]:8666
```

## 6. Running a Wallet - abewallet
Go to ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/```  and run the wallet (abewallet):

```shell
# macOS and Linux
./start_abewallet.sh --walletpass=[your public passphrase]
# Windows
abewallet --walletpass=[your public passphrase]
```

Example:

```shell
./start_abewallet.sh --walletpass=123456
2022-08-08 12:36:05.427 [INF] ABEW: Version 0.11.0
2022-08-08 12:36:05.438 [INF] RPCS: Listening on 127.0.0.1:8665
2022-08-08 12:36:05.438 [INF] RPCS: Listening on [::1]:8665
2022-08-08 12:36:05.439 [INF] ABEW: Attempting RPC client connection to localhost:8667
2022-08-08 12:36:06.270 [INF] WLLT: Opened wallet
2022-08-08 12:36:06.527 [INF] CHNS: Established connection to RPC server localhost:8667
2022-08-08 12:36:17.462 [INF] WLLT: Catching up block hashes to height 48610, this might take a while
2022-08-08 12:36:18.203 [INF] TMGR: Current sync height 1
2022-08-08 12:36:20.069 [INF] TMGR: Current sync height 2
2022-08-08 12:36:20.659 [INF] TMGR: Current sync height 3
2022-08-08 12:36:21.273 [INF] TMGR: Current sync height 4
2022-08-08 12:36:22.446 [INF] TMGR: Current sync height 5
2022-08-08 12:36:23.013 [INF] TMGR: Current sync height 6
2022-08-08 12:36:23.629 [INF] TMGR: Current sync height 7
2022-08-08 12:36:25.184 [INF] TMGR: Current sync height 8
```

***Note:*** **One wallet is enough.** You only need to add the mining address of the same wallet to the abec.conf of each of your mining machines and connect abewallet to just **one** of them. The total balance of your ABEL wallet will be automatically tallied from the Abelian blockchain.

## 7. Use abectl (wallet control console) to Operate abewallet

In the abec folder, there is another executable called start_abectl.sh (macOS and Linux) or abectl (Windows). This executable can be used for checking the balance of your wallet, make fund transfer, and so on.

### 7.1 Check balance

Run the following to check the balance of your wallet where *username* and *password* should be the same as the options *rpcuser* and *rpcpass* we configured in *abewallet.conf*, respecitvely.

```shell
# macOS and Linux
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --wallet getbalancesabe
# Windows
abectl --rpcuser=[username] --rpcpass=[password] --wallet getbalancesabe
```

Example:

```shell
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --wallet getbalancesabe
{"current_time":"2022-05-26 23:08:07.730291 +0800 HKT m=+10.601777429","current_height":12051,"current_block_hash":"00000000734e4c08b4422954da4df52c42fa1b3466e340ac332ad037f9a15ad5","total_balance":103424,"spendable_balance":102400,"freeze_balance":1024}
```

### 7.2 If Abectl and Abewallet are on different machines
When running abectl, we need to specify the IP address and port of the remote abewallet. To do so, we use parameter `--rpcserver=[IP:PORT]`.

To get the RPC certificate of the remote abewallet, you need to copy the file *rpc.cert* from the configuration folder of abewallet, and paste it in any place in the machine which runs abectl, and add parameter  `--rpccert=[location of cert]` while running abectl.

```shell
# macOS and Linux
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
# Windows
abectl --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
```

Example:

```shell
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --rpcserver=192.168.1.3:8665 --rpccert=/home/username/rpc.cert --wallet getbalancesabe
{"current_time":"2022-05-26 23:08:07.730291 +0800 HKT m=+10.601777429","current_height":12051,"current_block_hash":"00000000734e4c08b4422954da4df52c42fa1b3466e340ac332ad037f9a15ad5","total_balance":103424,"spendable_balance":102400,"freeze_balance":1024}
```

### 7.3 Unlock 

Before you send transactions or generate a new address, you should unlock the wallet first.

```shell
# macOS and Linux
./start_abectl.sh --rpcuser=[rpc username] --rpcpass=[rpc password] --wallet unlockwallet [private passphrase] [timeout]
# Windows
abectl --rpcuser=[rpc username] --rpcpass=[rpc password] --wallet unlockwallet [private passphrase] [timeout]
```

**NOTE**: The unit of timeout is in seconds.

Example:

```shell
./start_abectl.sh --rpcuser=abewalletrpcuser --rpcpass=abewalletrpcpass --wallet unlockwallet 123456 240
```

This means unlock the wallet with passphrase 123456 for 240 seconds.

### 7.4 Generate a new address

To generate a new address (for receiving ABEL tokens)

```shell
# macOS and Linux
./start_abectl.sh --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
# Windows
abectl --rpcuser=[rpcuser] --rpcpass=[rpcpass] --wallet generateaddressabe
```

### 7.5 Recover a wallet

If you want to recover a wallet, delete *logs/* and *mainnet/* folders in the configuration folder of Abewallet, then run

```shell
# macOS and Linux
./start_abewallet.sh --create
# Windows
abewallet --create
```

Example:

```shell
$ ./start_abewallet.sh --create
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
2022-05-07 19:55:01.548 [INF] WLLT: The addresses with No. in [0, 5] have been restored.
2022-05-07 19:55:02.282 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

***Note:*** The max No. of address to recover is the number of times that the wallet has been recovered.

## 8. Upgrade the Mining Software

If you already have a version of the mining software suite running (say v0.10.1), you can follow the steps below to upgrade to the latest version (v0.11.0 as of this writing).

Stop running both abec and abewallet of the old version.

Download and unzip the two compressed files, e.g. **abec-macos-amd64-v1.0.0.tar.gz** and **abewalletmlp-macos-amd64-v1.0.1.tar.gz** for macOS running on an x86 architecture (e.g. Intel chips).

To ease the description below, let's put these two folders under a folder called **abel/** under **Documents**. Something like:

```shell
1. ~/Documents/abel/abec-macos-amd64-v1.0.0/
2. ~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/
```

### 8.1 Run the new version of abec
Go to the configuration folder of abec as follows:


- Windows: C:\\Users\\[username]\\AppData\\Local\\Abec
- macOS: /Users/[username]/Library/Application Support/Abec
- Linux: /home/[username]/.abec

Comment out all the addpeer options in abec.conf. For example:

```shell
;addpeer = 18.117.106.180:8666
;addpeer = 3.145.81.196:8666
;addpeer = 3.66.221.224:8666
;addpeer = 3.120.150.60:8666
```

Go to ```~/Documents/abel/abec-macos-amd64-v1.0.0/```, and run

```shell
# macOS and Linux
./start_abec.sh --generate
# Windows
abec --generate
```

### 8.2 Run the new version of abewallet
This part is bit complicated as we need to remove the old configuration folder of abewallet and recover your wallet before running the new version of abewallet.

Remove the abewallet configuration folder:

- Windows: C:\\Users\\username\\AppData\\Local\\Abewallet
- macOS: /Users/username/Library/Application Support/Abewallet
- Linux: /home/username/.abewallet

Go to ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/```, and run:

```shell
# macOS and Linux
./start_abewallet.sh --create
# Windows
abewallet --create
```

Press control+C. By doing this, we re-create the **configuration folder**.

Go to the configuration folder and configure the following options in *abewallet.conf*:

```
abecrpcuser= [rpcuser in abec.conf]
abecrpcpass= [rpcpass in abec.conf]
```

`[rpcuser in abec.conf]` and `[rpcpass in abec.conf]` are the rpcuser and rpcpass values, respecitvely, from abec.conf. This allows abewallet to connect to abec.

In addition, in order to let ***abectl*** (abewallet control console) interact with abewallet later, we need to set the following options in abewallet.conf.

```
rpcuser= [username]
rpcpass= [password]
```

***Note:*** In other words, abecrpcuser / abecrpcpass (in abewallet.conf) correspond to rpcuser / rpcpassword (in abec.conf), respecitvely, and are used for establishing a secure RPC communication channel between abec and abewallet. While rpcuser / rpcpass (in abewallet.conf) will be used for establishing a secure RPC communication channel between abectl (to be introduced) and abewallet.

Next, go to ```~/Documents/abel/abewalletmlp-macos-amd64-v1.0.1/```, and recover the wallet:

```shell
# macOS and Linux
./start_abewallet.sh --create
# Windows
abewallet --create
```

Example:

```shell
$ ./start_abewallet.sh --create
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
2022-05-07 19:55:01.548 [INF] WLLT: The addresses with No. in [0, 5] have been restored.
2022-05-07 19:55:02.282 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

***Note:*** The max No. of address to recover is the number of times that the wallet has been recovered.

Finally, run the wallet (abewallet):

```shell
# macOS and Linux
./start_abewallet.sh --walletpass=[your public passphrase]
# Windows
abewallet --walletpass=[your public passphrase]
```

Example:

```shell
./start_abewallet.sh --walletpass=123456
2022-08-08 12:36:05.427 [INF] ABEW: Version 0.11.0
2022-08-08 12:36:05.438 [INF] RPCS: Listening on 127.0.0.1:8665
2022-08-08 12:36:05.438 [INF] RPCS: Listening on [::1]:8665
2022-08-08 12:36:05.439 [INF] ABEW: Attempting RPC client connection to localhost:8667
2022-08-08 12:36:06.270 [INF] WLLT: Opened wallet
2022-08-08 12:36:06.527 [INF] CHNS: Established connection to RPC server localhost:8667
2022-08-08 12:36:17.462 [INF] WLLT: Catching up block hashes to height 48610, this might take a while
2022-08-08 12:36:18.203 [INF] TMGR: Current sync height 1
2022-08-08 12:36:20.069 [INF] TMGR: Current sync height 2
2022-08-08 12:36:20.659 [INF] TMGR: Current sync height 3
2022-08-08 12:36:21.273 [INF] TMGR: Current sync height 4
2022-08-08 12:36:22.446 [INF] TMGR: Current sync height 5
2022-08-08 12:36:23.013 [INF] TMGR: Current sync height 6
2022-08-08 12:36:23.629 [INF] TMGR: Current sync height 7
2022-08-08 12:36:25.184 [INF] TMGR: Current sync height 8
```

## 8.3 Run the new version of abectl
Go to ```~/Documents/abel/abec-macos-amd64-v1.0.0/```, and run the following to check the balance:

```shell
# macOS and Linux
./start_abectl.sh --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
# Windows
abectl --rpcuser=[username] --rpcpass=[password] --rpcserver=[IP:PORT] --rpccert=[location of cert] --wallet getbalancesabe
```