---
outline: deep
---

# Abelian GPU Mining User Guide

This document explains how to run the SOLO GPU mining software.

Please refer to the Abelian Software Basics documentation to understand the software architecture and how to choose between SOLO mining or joining a mining pool.

Visit the Abelian official website's download page to download the [Abelian GPU Mining Pool Client](/downloads/latest#abelian-gpu-mining-pool-client). To interact with other miners, developers, and users, join the [official Discord server](https://discord.com/invite/5rrDxP29hx).

All operations are performed via the Command Line Interface (CLI). For Linux, open the terminal; for Windows, open PowerShell or any shell application of your choice.

## Installation

Download two compressed files, such as `abelminer-linux-amd64-v2.0.3.tar.gz` for Linux systems with x86 architecture (e.g., Intel chips).

Extract the files and place them in the same folder under `~/abel/`:

```
~/abel/abelminer-linux-amd64-v2.0.3/
```

## Create a Wallet Address

Assume you have already created a wallet account using the mobile wallet professional version.

The easiest way is to download [Abelian Pro](/downloads/latest#abelian-pro-mobile) from the official download page and create a wallet. Then, follow these steps to obtain your wallet address:

1. In the `Abelian Pro` main interface, click the `Profile` icon in the top right corner.
2. Navigate to the `Profile -> Account Details` page.
3. Click the `eye` icon next to the string of characters under the `Address` field.
4. In the pop-up window, click the `Copy` button to copy the address to your clipboard.

## Join the Official Mining Pool

- Visit the official Maxpool mining pool and read the [Quick Start Guide](https://maxpool.org/home/guide).

- The original Abelian Foundation mining pool (pool.abelian.info) is still accessible, but its URL has changed to: [https://legacy.maxpool.org/home](https://legacy.maxpool.org/home). Existing miners are advised to use this URL. It is strongly recommended to migrate to the new Maxpool mining pool before the hard fork is complete.

- The Maxpool mining pool requires an updated client, [Abelian GPU Mining Pool Client v2.0.3](/downloads/latest#abelian-gpu-mining-pool-client).

## Run the GPU Mining Program - abelminer

The Maxpool user guide includes auxiliary scripts and programs for various platforms. Below is a brief introduction to running the `abelminer` binary program:

Navigate to `~/abel/abelminer-linux-amd64-v2.0.3/` and run the GPU mining client (`abelminer`):

::: code-group
```shell [Windows]
$ .\abelminer.exe -P http://[Pool Server Domain or IP address]:8668
```
```shell [macOS and Linux]
$ ./abelminer -P http://[Pool Server Domain or IP address]:8668
```
:::