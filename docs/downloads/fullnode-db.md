---
outline: deep
---

# Abelian Node Database

## Description of Abelian Node Database

Abelian node database includes three types: Normal Node, SemiFull Node, and Full Node. For related parameters and configuration methods, please refer to the [Abelian Node User Guide Document](/guide/abelian-node#_2-configuration-abec).

## Abelian Normal Node

### Default Data Directory Location

#### (Mainnet)

- In Abelian Desktop Wallet (Legacy) version 4.1.1, the Abec mainnet defaults to using Normal Node. Solo mining users are recommended to run the `normalnode` type of Abelian Normal Node, with the default data directory location as follows:

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Roaming\Abelian Wallet\Abec\mainnet
```

```txt [MacOS]
~/Library/Application Support/Abelian Wallet/Abec/mainnet
```

```txt [Linux]
~/.config/Abelian Wallet/Abec/mainnet
```
:::

::: tip Note
Starting from version 4.2.0 of the Abelian Desktop Wallet (Legacy), the Abec synchronization of mainnet data is no longer used, and this data package does not need to be downloaded.
:::

### Data Package Download Link

> Download link: [Mega](https://mega.nz/file/tzVAHbyR#UsDY4lKMhEn0W0O_XUimOngMzksuvnj1yGrCWDfI0mE)
> 
> File name: mainnet.zip
> 
> File size: 140.83 GB
> 
> Block height: 400253
> 
> Upload date: June 16, 2024

### Extracting the Data Package

- Desktop Wallet for Windows
  1. Close and exit the Desktop Wallet Legacy 4.1.1 for Windows.
  2. Use extraction software to open the mainnet.zip file and extract the mainnet directory to the [Default Location](#default-data-directory-location).
  3. Restart the Desktop Wallet and click sync (sync Mainnet), Start synchronization and ensure it reaches 100% (latest block height).

- Desktop Wallet for macOS
  1. Close and exit the Desktop Wallet Legacy 4.1.1 for macOS.
  2. Double-click the mainnet.zip file to automatically extract it.
  3. Move the extracted mainnet directory to the [Default Location](#default-data-directory-location).
  4. Restart the Desktop Wallet and click sync (sync Mainnet), Start synchronization and ensure it reaches 100% (latest block height).

- Desktop Wallet for Linux
  1. Close and exit the Desktop Wallet Legacy 4.1.1 for Linux.
  2. Double-click the mainnet.zip file to automatically extract it.
  3. Move the extracted mainnet directory to the [Default Location](#default-data-directory-location).
  4. Restart the Desktop Wallet and click sync (sync Mainnet), Start synchronization and ensure it reaches 100% (latest block height).

## Abelian SemiFull Node

### Default Data Directory Location

Abelian developers with sufficient disk space are advised to download the Abelian SemiFull Node (`semifullnode`) data package for either the mainnet or testnet, with the default data directory location as follows:

#### (Mainnet)
::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abec\mainnet
```

```txt [MacOS]
~/Library/Application Support/Abec/mainnet
```

```txt [Linux]
~/.abec/mainnet
```
:::

#### (Testnet)

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Local\Abec\testnet
```

```txt [MacOS]
~/Library/Application Support/Abec/testnet
```

```txt [Linux]
~/.abec/testnet
```
:::

### Data Package Download Links

#### (Mainnet)

> Download link: [Mega](https://mega.nz/file/8y1GVCgD#AuskSFAk6nCbvfT6gQ3X_jZM8HgQFVu0iMmN0Mg5Jrk)
> 
> File name: mainnet.zip
> 
> File size: 320.86 GB
> 
> Block height: 461203
> 
> Upload date: December 25, 2025

#### (Testnet)

> Download link: [Mega](https://mega.nz/file/Yvs0VDAL#UfIcwgB37sEMT31rjVZCZVZSj_5eKAYmaKalnd2sMrI)
> 
> File name: testnet.zip
> 
> File size: 99.04 GB
>
> Block height: 422604
>
> Upload date: April 8, 2025

### Extracting the Data Package

#### Windows

1. Stop the node process `start_abec.bat`.
2. Extract the downloaded mainnet.zip or testnet.zip to the  [Default Location](#default-data-directory-location-1).
3. Execute `start_abec.bat`.

#### macOS

1. Stop the node process `start_abec.sh`.
2. Double-click the downloaded mainnet.zip or testnet.zip to extract it.
3. Move the extracted mainnet or testnet directory to the  [Default Location](#default-data-directory-location-1).
4. Execute `start_abec.sh`.

#### Linux

1. Stop the node process `abec` or `abectl`.
2. Execute the extraction command for the downloaded mainnet.zip or testnet.zip:

```bash
# For Ubuntu or Debian, install the unzip package
$ apt install unzip
# Extract the mainnet zip file
$ unzip mainnet.zip
# Or extract the testnet zip file
$ unzip testnet.zip
```

3. Move the extracted mainnet or testnet directory to the  [Default Location](#default-data-directory-location-1):
```bash
# Move the mainnet data directory to ~/.abec/data/:
$ mv -f mainnet ~/.abec/data/
# Or move the testnet data directory to ~/.abec/data/:
$ mv -f testnet ~/.abec/data/
```

1. Restart the Abelian Node.

## Precautions

> [!NOTE]
> Please note the date of data update; updated compressed packages cannot be mixed with old ones!