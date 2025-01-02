---
outline: deep
---

# Abelian Applications Basics

This document is a MUST READ. It gets you started with the software packages of Abelian.

## 1. Abelian Applications Architecture

- **abec** is a full node running 24x7 communicating with other full node peers for forming the global Abelian network.
- **abewallet** (abewalletlegacy/abewalletmlp) is a CLI wallet synchronizing with a full node for keeping track of the balance of the wallet. It is also used for creating a new wallet or recovering an existing wallet.
- **abewalletctl** (abewalletlegacyctl/abewalletmlpctl) is a CLI control software, which is used for queries through various operations, for example, balance check, fund transfer, etc.
- **abelminer** is a CLI-based GPU mining software which takes POW mining tasks from a full node, work on solutions, and return the results back to the full node.

## 2. Networking

- **abec <-> abec**: port 8666
- **abec <-> abewallet**: port 8667
- **abec <-> abectl**: port 8667
- **abewallet <-> abectl**: port 8665
- **abec <-> abelminer**: port 8668

## 3. What App Do You Need to Run

As a user who simply wants to run a secure and user friendly Abelian wallet with a nice user interface, you can simply go to the official Abelian download page and get a copy of the [Abelian Desktop Wallet Legacy](/downloads/latest#abelian-desktop-wallet-legacy).

If you want to try the latest and most powerful Abelian wallet with a user-friendly interface, you can download the [Abelian Desktop Wallet Pro Edition (MLP)](/downloads/latest#abelian-desktop-wallet-pro-mlp) from the official Abelian download page.

If you just want to connect to the Abelian network as a full node so that you can get a full copy of the ledger, you only need to run **abec**. This also helps the Abelian network to be more decentralized by running more full nodes. As of this writing, the full node (Abelian ledger) size is almost 120GB. We recommend the machine which is running **abec** should have at least 2TB of storage and 8GB of RAM. Please refer to the [Abelian Full Node Manual](/guide/cli-full-node) for details.

If you would like to run a CLI-based wallet, you can run a full node (**abec**) and a CLI wallet (**abewalletlegacy** / **abewalletmlp**).The straightforward way of running these two software packages is to run both of them on the same machine. Then you can use **abewalletlegacyctl** or **abewalletmlpctl** to check balance, make fund transfer, and so on. Please refer to the [Abelian CLI Wallet Legacy Manual](/guide/wallet/cli-wallet-legacy) or [Abelian CLI Wallet (MLP) Manual](/guide/wallet/cli-wallet-mlp) for details. Please also observe the storage capacity requirement above.

If you are a GPU miner, please check out [Abelian GPU Mining Manual](/guide/mining/gpu-pool) for details. This enables you to do SOLO mining.

If you only have a few GPU cards and would like to join the Abelian Foundation official mining pool server so that you can mine together with other miners and share the ABEL rewards, please go to the section [Abelian GPU Mining Pool Client](/downloads/latest#abelian-gpu-mining-pool-client) and get the mining pool client software as well as details.

## 4. Official Abelian Download Page

The [official Abelian download page](/downloads/latest). To interact with other miners, developers and users, visit the [Official Discord Server](https://discord.com/invite/5rrDxP29hx).