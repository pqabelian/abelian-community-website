---
outline: deep
---

# Abelian Mainnet Database

## Mainnet Data Directory Default Path

::: code-group

```txt [Windows]
%USERPROFILE%\AppData\Roaming\Abelian Wallet\Abec\mainnet
```

```txt [MacOS]
~/Library/Application Support/Abelian Wallet/Abec/mainnet
```

```txt [Linux]
~/.abec/data/mainnet
```
:::

## Mainnet Data Download Links (Height: 327801)
* [Mega](https://mega.nz/folder/gydxkZgS#GNDGHyBlGOJzo_G27b9V9w) (November. 2, 2024)
* [Terabox](https://terabox.com/s/1iUvqrwCJC3_HABMkatFXlw) (November. 2, 2024)

Files list:（A total of 14 zip archives）
> mainnet.zip.001
>
> mainnet.zip.002
>
> mainnet.zip.003
>
> ......
> 
> mainnet.zip.012

## Extract Mainnet Data zip files

### Desktop Wallet for Windows
1. Close and exit Windows Desktop Wallet Client;
2. Place the downloaded 12 files in the same directory;
3. Use 7zip software to open the `mainnet.zip.001 file`, Extract the mainnet directory and overwrite it to the **default path**;
4. Restart Windows Desktop Wallet Client，Click **"sync Mainnet"**.

---

### Desktop Wallet for macOS
1. Close and exit the macOS desktop wallet;
2. Place the 12 downloaded files in the same directory and perform the extraction:
```
# Install 7zip using brew on macOS
$ brew install p7zip
# Extract the files
$ 7z x mainnet.zip.001
```
3. Move the extracted "mainnet" directory and overwrite it to the **default location**:
```
mv -f mainnet ~/Library/Application\ Support/Abelian\ Wallet/Abec/
```
4. Restart the macOS desktop wallet and click on "Sync Mainnet".

---

### Full Node for Linux
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