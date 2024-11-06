---
outline: deep
---

# Abelian主网数据

## Mainnet 数据目录默认位置

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

## Mainnet 数据包下载地址（高度：327801）
* [Mega](https://mega.nz/folder/gydxkZgS#GNDGHyBlGOJzo_G27b9V9w)（2024年11月2日）
* [Terabox](https://terabox.com/s/1iUvqrwCJC3_HABMkatFXlw)（2024年11月2日）

文件列表：（共12个分卷zip压缩包）
> mainnet.zip.001
>
> mainnet.zip.002
>
> mainnet.zip.003
>
> ......
> 
> mainnet.zip.012

## 解压缩 mainnet 数据包

### Windows 桌面钱包
1. 关闭并退出 Windows 桌面钱包；
2. 将下载的 12 个文件放在同一目录下；
3. 使用 7zip 软件打开 mainnet.zip.001 文件，解压缩 mainnet 覆盖至**默认位置**；
4. 重新运行 Windows 桌面钱包，点击同步（sync Mainnet）。

---

### macOS 桌面钱包
1. 关闭并退出 MacOS 桌面钱包；
2. 将下载的 12 个文件放在同一目录下，执行解压缩操作：
```
# macOS 用brew下载安装 7zip
$ brew install p7zip
# 解压缩
$ 7z x mainnet.zip.001
```
3. 移动解压缩得到的 mainnet 目录并覆盖至**默认位置**
```
mv -f mainnet ~/Library/Application\ Support/Abelian\ Wallet/Abec/
```
4. 重新运行 macOS 桌面钱包，点击同步（sync Mainnet）。

---

### Linux 全节点
1. 停止全节点进程 `abec`或 `abectl`
2. 将下载的 12 个文件放在同一目录下，执行解压缩操作：
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
