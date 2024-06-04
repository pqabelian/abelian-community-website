# Abelian Mainnet Database

## Mainnet Data Directory Default Path

::: code-group

```txt [Windows]
C:\Users\<USER_NAME>\AppData\Roaming\Abelian Wallet\Abec\mainnet
```

```txt [MacOS]
/Users/<USER_NAME>/Library/Application Support/Abelian Wallet/Abec/mainnet
```

```txt [Linux]
~/.abec/data/mainnet
```
:::

## Mainnet Data Download Links
* [Mega](https://mega.nz/folder/gydxkZgS#GNDGHyBlGOJzo_G27b9V9w) (June 4, 2024)
* [Terabox](https://teraboxapp.com/s/1Dge3NT_4zoLMteg8IXygqw) (June 4, 2024)

Files list:（A total of 12 zip archives）
> mainnet.zip.001
>
> mainnet.zip.002
>
> mainnet.zip.003
>
> ......
> 
> mainnet.zip.013

## Extract Mainnet Data zip files
**Abelian Desktop Wallet for Windows**
1. Close and exit Windows Desktop Wallet Client;
2. Place the downloaded 8 files in the same directory;
3. Use 7zip software to open the mainnet.zip.001 file, Extract the mainnet directory and overwrite it to the **default path**;
4. Restart Windows Desktop Wallet Client，Click "sync Mainnet".

**Abelian Desktop Wallet for MacOS**
 - Refer to the steps for Windows version above

**Abelian Full Node for Linux**
1. Stop full node process `abec` or `abectl`
2. Place the downloaded 12 files in the same directory, and execute the extract command:
```
# Taking Ubuntu or Debian as examples, to install 7zip
$ apt install p7zip-full
# Extract the compressed package
$ 7z x mainnet.zip.001
```
3. Move the mainnet directory and overwrite it to the **default path**:
```
mv -f mainnet ~/.abec/data/
```
4. restart full node.

## Precautions

> [!NOTE]
> Please note the date of data update; updated compressed packages cannot be mixed with old ones!