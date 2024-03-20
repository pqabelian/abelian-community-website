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
* [Dropbox](https://www.dropbox.com/scl/fo/y9im4ncjq3mwceu826hvg/h?rlkey=s39gx7imp8f30knqdhaous8rd&dl=0) (03/03/2024)
* [Mega](https://mega.nz/folder/gydxkZgS#GNDGHyBlGOJzo_G27b9V9w) (03/03/2024)
* [Terabox](https://teraboxapp.com/s/1Dge3NT_4zoLMteg8IXygqw) (03/03/2024)

Files list:（A total of 12 zip archives）
> mainnet.zip
>
> mainnet.z01
>
> mainnet.z02
>
> ......
> 
> mainnet.z11

## Extract Mainnet Data zip files
**Abelian Desktop Wallet for Windows**
1. Close and exit Windows Desktop Wallet Client;
2. Place the downloaded 8 files in the same directory;
3. Double-click the left mouse button to open the mainnet.zip file, Extract the mainnet directory and overwrite it to the **default path**;
4. Restart Windows Desktop Wallet Client，Click "sync Mainnet".

**Abelian Desktop Wallet for MacOS**
 - Refer to the steps for Windows version above

**Abelian Full Node for Linux**
1. Stop full node process `abec` or `abectl`
2. Place the downloaded 8 files in the same directory, and execute the extract command:
```
$ unzip mainnet.zip
```
3. Move the mainnet directory and overwrite it to the **default path**:
```
mv -f mainnet ~/.abec/data/
```
4. restart full node.