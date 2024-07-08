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

## Mainnet 数据包下载地址（高度：291547）
* [Mega](https://mega.nz/folder/gydxkZgS#GNDGHyBlGOJzo_G27b9V9w)（2024年7月4日）
* [Terabox](https://teraboxapp.com/s/1Dge3NT_4zoLMteg8IXygqw)（2024年7月4日）

文件列表：（共13个分卷zip压缩包）
> mainnet.zip.001
>
> mainnet.zip.002
>
> mainnet.zip.003
>
> ......
> 
> mainnet.zip.013

## 解压缩 mainnet 数据包
**Abelian Windows 桌面钱包**
1. 关闭并退出 Windows 桌面钱包；
2. 将下载的8个文件放在同一目录下；
3. 使用 7zip 软件打开 mainnet.zip.001 文件，解压缩 mainnet 覆盖至**默认位置**；
4. 重新运行 Windows 桌面钱包，点击同步（sync Mainnet）。

**Abelian MacOS 桌面钱包**
 - 参考上面 Windows 版本的步骤

**Abelian Full Node for Linux**
1. 停止全节点进程 `abec`或 `abectl`
2. 将下载的12个文件放在同一目录下，执行解压缩操作：
```
# Ubuntu 或 Debian 为例，安装 7zip
$ apt install p7zip-full
# 解压缩
$ 7z x mainnet.zip.001
```
3. 移动解压缩得到的 mainnet 目录并覆盖至**默认位置**
```
mv -f mainnet ~/.abec/data/
```
4. 重新运行全节点

## 注意事项

> [!NOTE]
> 请留意数据更新的日期，更新的压缩包不能和旧的压缩包混用！
