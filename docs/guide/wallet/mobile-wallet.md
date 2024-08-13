---
outline: deep
---

# Abelian Mobile Wallet

> [!NOTE]
> The manual for the Abelian Mobile Wallet will be available soon. Here we provide a step-by-step guide on how to migrate your accounts from the Abelian Desktop Wallet to the Abelian Mobile Wallet.

In addition to the Abelian Desktop Wallet, we now also have the Abelian Mobile App for iOS and Android devices. However, due to the technical challenges, we are yet to be able to port the post-quantum cryptographic key generation component needed for recovering a private key from a 24-word mnemonic list. Hence, unfortunately, we are yet to be able to support direct account recovery on the Mobile App. In other words, the Abelian Desktop Wallet and the Mobile App are not yet compatible. Sorry!

Having said that if you have some technical background, you can actually follow the following steps to export the private keys of your existing wallets and import those private keys into the Abelian Mobile App. Below, I'll explain how it works and what you can get this done.

Difficulty Level: Advanced

## What you need

1. Abelian Lite Wallet CLI v0.12.5 (remark: lower version does not support some of the commands below)
   - Download: Please go to the official [Abelian Downloads Page](https://pqabelian.io/download#desktop)
   - Tutorial: Please check out the [Abelian Lite CLI Wallet Manual](/guide/wallet/wallet-cli-lite)

2. Abelian Mobile App

## Migration from Desktop Wallet to Mobile App

### Step 1: Run the Abelian Lite CLI Wallet

Run the Abelian Lite Wallet CLI to import your wallet account using the 24-word mnemonic list.

It is important to enter the correct number for *the maximum number of wallet addresses to recover*. In case you forget about this number, you can open the Desktop Wallet, let **abec** complete the synchronisation and then make a transfer transaction to your own wallet address. After making the transfer, open the **abewallet** service log window and read the log. There should be a line in the log mentioning about the wallet *address number*. In general, every time when we recover the account, a new wallet address will be created and hence, *the maximum number of addresses of recover* increases by one. Also, every time when we make a transfer transaction, a new wallet address will be created, and hence, *the maximum number of addresses to recover* also increases by one. But every time when we receive some tokens, no new wallet address is created and hence, the address number does not increase.

For example, when we create a new wallet account, the number of addresses is 1. Then if I recover this wallet account twice and also make 3 transfers, then the number of wallet addresses is 1+2+3=6.

Here is an example on running this Abelian Lite Wallet CLI (macOS version as an example):

```shell
./start_abewallet.sh -A /Users/abelian/Documents/wallet_migrate --walletpass=MYPUBLICPASSPHRASE
```

In this example, I put the following **abewallet.conf** under **/Users/abelian/Documents/wallet_migrate**. The remote **abec** I connect to is located in Asia. If this **abec** does not work for you, you can refer to the [manual](https://download.pqabelian.io/release/docs/Abelian%20Lite%20CLI%20Wallet%20Manual.pdf) and change the remote *abec** settings in the **abewallet.conf** accordingly.

**The contents of /Users/abelian/Documents/wallet_migrate/abewallet.conf**

```ini
[Application Options]
rpcconnect=42.200.174.30
cafile=/Users/abelian/Documents/abec_certs/abec_rpc_tm.cert
rpcuser=localuser
rpcpass=localpass
abecrpcuser=wgMURUUtK7o7pFgTg87D8GuSGg4=
abecrpcpass=biPPQXARkhtzQw3wV1NWAxuS6Vg=
```

### Step 2: Export the Private Keys

Run a bunch of instructions below using **abewalletctl** (use the example above, suppose the number of wallet addresses to recover is 6):

```shell
./start_abewalletctl.sh -c /Users/abelian/Documents/wallet_migrate/rpc.cert --rpcuser=localuser --rpcpass=localpass walletunlock MYPRIVATEPASSPHRASE 600
```

```shell
./start_abewalletctl.sh -c /Users/abelian/Documents/wallet_migrate/rpc.cert --rpcuser=localuser --rpcpass=localpass exportaddresskeyrandseed 0 6
```

where 0 6 in the **exportaddresskeyrandseed** instruction above specifies that the wallet addresses indexed from 0 to 5 will have their **Rand Seed Keys** printed out.

If all the above go well, we will see 6 sets of **Rand Seed Keys** and each of these keys is a **private key** to be imported to the Abelian Mobile App as a new account.

### Step 3: Import the Private Keys
Import the **Rand Seeds** into the Mobile Wallet App as new accounts' **private keys**.

Done!