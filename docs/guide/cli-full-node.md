---
outline: deep
---

# Abelian CLI Full Node Manual

This document describes how to run an Abelian full node.

Please refer to [Abelian Applications Basics](/guide/) to understand the software architecture and the purpose of running a full node first.

Please visit the Abeian official website download page to download [Abelian Full Node](https://pqabelian.io/download#desktop). To interact with other miners, developers and users, visit the [Official Discord Server](https://discord.com/invite/5rrDxP29hx).

All the operations are carried out via the Command Line Interface (CLI). For Linux or macOS, open Terminal; and for Windows, open PowerShell or any of your favorite shell application.

## 1. Installation

Download a compressed file, something like abec-linux-amd64-v1.0.0.tar.gz for Linux running on an x86 architecture (e.g. Intel chips), from the Section Abelian Full Node of the [Official Download Page](https://pqabelian.io/download#desktop).

Unzip it and put it under the folder ~/abel/:

```txt
~/abel/abec-linux-amd64-v1.0.0/
```
Go to ~/abel/abec-linux-amd64-v1.0.0/ , and run:

::: code-group
```shell [Windows]
$ .\abec.exe
```
```shell [macOS and Linux]
$ ./start_abec.sh
```
:::

Then press control+C to stop it. By doing this, we create a configuration folder for abec located at:

::: code-group
```txt [Windows]
%USERPROFILE%\\AppData\Local\Abec
```
```txt [macOS]
~/Library/Application Support/Abec
```
```text [Linux]
~/.abec
```
:::

**Note:** On macOS (M1/M2 chip / arm64), if it says `'xxx' is damaged and can't be opened`, run the command:

```shell
$ xattr -d com.apple.quarantine path/to/xxx
```

If it says `'xxx' cannot be opened because the developer cannot be verified`, go to **System Preferences ->
Security & Privacy -> General** and click **allow anyway**.

## 2. Configuration - abec

Go to the configuration folder of `abec` and make changes as below in `abec.conf`.

You can let other Abelian nodes on the mainnet know your presence through broadcasting your IP address (e.g. 1.2.3.4). This works only if you have a public IP or have some IP forwarding configured at your router:

```ini
externalip=1.2.3.4
```

Allow `abelminer` to connect to `abec` for GPU mining:

```ini
enablegetwork=1
```

If you have multiple GPU mining machines connecting remotely to this single `abec`, make sure that port 8668 is opened:

```ini
 rpclistengetwork=:8668
```

Set the initial address of your wallet to miningaddr:

```ini
 miningaddr = [your initial address]
```

## 3. Run a Full Node - abec

Go to `~/abel/abec-linux-amd64-v1.0.0/` and run a full node (`abec`):

::: code-group
```shell [Windows]
$ .\abec.exe
```
```shell [macOS and Linux]
$ ./start_abec.sh
```
:::