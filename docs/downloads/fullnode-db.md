---
outline: deep
---

# Abelian Mainnet Database

## Description of Abelian Full Node Database

Abelian full node database includes three types: semi-fullnode, normal-fullnode, and fullnode. For related parameters and configuration methods, please refer to the [Abelian Full Node User Guide Document](/guide/cli-full-node#_2-configuration-abec).

## Semi-Full Node

### Default Data Directory Location

#### (Mainnet)

- The default for the Abec mainnet in Abelian Desktop Wallet Classic (Legacy) version 4.1.1 uses semi-fullnode, with the default data directory location as follows:

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
Starting from version 4.2.0 of the Abelian Desktop Wallet Classic (Legacy), the Abec synchronization of mainnet data is no longer used, and this data package does not need to be downloaded.
:::

### Data Package Download Link

> Download link: [Mega](https://mega.nz/file/wikgSJiR#I6mFgg5dax_RSQrR9q6TpxF5OmkkVrmFkg76LvcXp-8)
> 
> File name: mainnet.zip
> 
> File size: 135.74 GB
> 
> Block height: 386062
> 
> Upload date: May 2, 2025

### Extracting the Data Package

- Desktop Wallet for Windows
  1. Close and exit the Windows Desktop Wallet.
  2. Use extraction software to open the mainnet.zip file and extract the mainnet directory to the **default location**.
  3. Restart the Windows Desktop Wallet and click sync (sync Mainnet).

- Desktop Wallet for macOS
  1. Close and exit the macOS Desktop Wallet.
  2. Double-click the mainnet.zip file to automatically extract it.
  3. Move the extracted mainnet directory to the **default location**.
  4. Restart the macOS Desktop Wallet and click sync (sync Mainnet).

- Desktop Wallet for Linux
  1. Close and exit the macOS Desktop Wallet.
  2. Double-click the mainnet.zip file to automatically extract it.
  3. Move the extracted mainnet directory to the **default location**.
  4. Restart the macOS Desktop Wallet and click sync (sync Mainnet).

## Normal-Full Node

### Default Data Directory Location

Developers or individual Solo mining users of Abelian need to download the Abec Mainnet/Testnet (Normal-Full Node) data package, with the default data directory location as follows:

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

> Download link: [Mega](https://mega.nz/file/wydjFZxL#aVfZjBWQlYEnwiLkC4N95WOH60cbML-kEpKVZzZdjFY)
> 
> File name: mainnet.zip
> 
> File size: 195.86 GB
> 
> Block height: 385752
> 
> Upload date: April 29, 2025

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

#### Windows Full Node

1. Stop the full node process `start_abec.bat`.
2. Extract the downloaded mainnet.zip or testnet.zip to the **default location**.
3. Restart the full node.

#### macOS Full Node

1. Stop the full node process `start_abec.sh`.
2. Double-click the downloaded mainnet.zip or testnet.zip to extract it.
3. Move the extracted mainnet or testnet directory to the **default location**.
4. Restart the full node.

#### Linux Full Node

1. Stop the full node process `abec` or `abectl`.
2. Execute the extraction command for the downloaded mainnet.zip or testnet.zip:

```bash
# For Ubuntu or Debian, install the unzip package
$ apt install unzip
# Extract the mainnet zip file
$ unzip mainnet.zip
# Or extract the testnet zip file
$ unzip testnet.zip
```

3. Move the extracted mainnet or testnet directory to the **default location**:
```bash
# Move the mainnet data directory to ~/.abec/data/:
$ mv -f mainnet ~/.abec/data/
# Or move the testnet data directory to ~/.abec/data/:
$ mv -f testnet ~/.abec/data/
```

4. Restart the full node.

## Precautions

> [!NOTE]
> Please note the date of data update; updated compressed packages cannot be mixed with old ones!