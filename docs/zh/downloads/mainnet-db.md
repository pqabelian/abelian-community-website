# Abelian主网数据

## Mainnet 数据目录默认位置

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

## Mainnet 数据包下载地址
* [Dropbox](https://www.dropbox.com/scl/fo/y9im4ncjq3mwceu826hvg/h?rlkey=s39gx7imp8f30knqdhaous8rd&dl=0) （03/03/2024）
* [Mega](https://mega.nz/folder/gydxkZgS#GNDGHyBlGOJzo_G27b9V9w)（03/03/2024）
* [Terabox](https://teraboxapp.com/s/1Dge3NT_4zoLMteg8IXygqw)（03/03/2024）

文件列表：（共12个分卷zip压缩包）
> mainnet.zip
>
> mainnet.z01
>
> mainnet.z02
>
> ......
> 
> mainnet.z11

## 解压缩 mainnet 数据包
**Abelian Windows 桌面钱包**
1. 关闭并退出 Windows 桌面钱包；
2. 将下载的8个文件放在同一目录下；
3. 鼠标左键双击打开 mainnet.zip 文件，复制或解压缩 mainnet 覆盖至**默认位置**；
4. 重新运行 Windows 桌面钱包，点击同步（sync Mainnet）。

**Abelian MacOS 桌面钱包**
 - 参考上面 Windows 版本的步骤

**Abelian Full Node for Linux**
1. 停止全节点进程 `abec`或 `abectl`
2. 将下载的8个文件放在同一目录下，执行解压缩操作：
```
$ unzip mainnet.zip
```
3. 移动解压缩得到的 mainnet 目录并覆盖至**默认位置**
```
mv -f mainnet ~/.abec/data/
```
4. 重新运行全节点