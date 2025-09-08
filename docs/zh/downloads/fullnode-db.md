---
outline: deep
---

# Abelian 全節點資料

## Abelian 全節點資料說明

Abelian 全節點資料包括三種類型：semi-fullnode、normal-fullnode 和 full node，相關參數的介紹和設定方法請查看 [Abelian 全節點用戶指引文件](/zh/guide/cli-full-node#_2-設定-abec)。

## Semi-Full Node

### 資料目錄預設位置

#### （Mainnet）

- Abelian 桌面錢包經典版（Legacy） 4.1.1 中的 Abec 主網預設採用 semi-fullnode，資料目錄預設位置如下：

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

::: tip 注意事項
Abelian 桌面錢包經典版（Legacy） 4.2.0 版本開始已經不使用 Abec 同步主網數據，不需要再下載此資料包。
:::

### 資料包下載地址

> 下載連結：[Mega](https://mega.nz/file/tzVAHbyR#UsDY4lKMhEn0W0O_XUimOngMzksuvnj1yGrCWDfI0mE)
> 
> 檔案名稱：mainnet.zip
> 
> 檔案大小：140.83 GB
> 
> 區塊高度：400253
> 
> 上傳日期：2024年06月16日

### 解壓縮資料包

- Windows 桌面钱包
  1. 關閉並退出 Windows 桌面钱包（Legacy）v4.1.1；
  2. 使用解壓縮軟體開啟 mainnet.zip 文件，解壓縮 mainnet 目錄覆蓋至 [資料預設位置](#資料目錄預設位置)
  3. 重新執行桌面錢包，點擊同步（sync Mainnet），並確保同步完成 100%（到最新高度）

- macOS 桌面钱包
  1. 關閉並退出 MacOS 桌面钱包（Legacy）v4.1.1；
  2. 雙擊 mainnet.zip 文件，系統自動執行解壓縮；
  3. 移動解壓縮得到的 mainnet 目錄並覆蓋至 [資料預設位置](#資料目錄預設位置)
  4. 重新執行桌面錢包，點擊同步（sync Mainnet），並確保同步完成 100%（到最新高度）

- Linux 桌面钱包
  1. 關閉並退出 Linux 桌面钱包（Legacy）v4.1.1；
  2. 雙擊 mainnet.zip 文件，系統自動執行解壓縮；
  3. 移動解壓縮得到的 mainnet 目錄並覆蓋至 [資料預設位置](#資料目錄預設位置)
  4. 重新執行桌面錢包，點擊同步（sync Mainnet），並確保同步完成 100%（到最新高度）

## Normal-Full Node

### 資料目錄預設位置

Abelian 開發者或個人 Solo 挖礦的用戶需要下載 Abec Mainnet/Testnet (Normal-Full Node) 資料包，資料目錄預設位置如下：

#### （Mainnet）
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

#### （Testnet）

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

### 資料包下載地址

#### （Mainnet）

> 下載連結：[Mega](https://mega.nz/file/YvkwgK4B#Lo3Q9WnD5WOP6CLUZjtRfzlYTCw0ikjHiuVchx5fxl4)
> 
> 檔案名稱：mainnet.zip
> 
> 檔案大小：233.29 GB
> 
> 區塊高度：400002
> 
> 上傳日期：2025年06月19日

#### （Testnet）

> 下載連結：[Mega](https://mega.nz/file/Yvs0VDAL#UfIcwgB37sEMT31rjVZCZVZSj_5eKAYmaKalnd2sMrI)
> 
> 檔案名稱：testnet.zip
> 
> 檔案大小：99.04 GB
>
> 區塊高度：422604
>
> 上傳日期：2025年04月08日

###  解壓縮資料包

#### Windows 全节点

1. 停止全节点进程 `start_abec.bat`
2. 將下載的 mainnet.zip 或 testnet.zip 解壓縮至 [資料預設位置](#資料目錄預設位置-1)
3. 重新執行全節點

#### MacOS 全节点

1. 停止全节点进程 `start_abec.sh`
2. 將下載的 mainnet.zip 或 testnet.zip 雙擊執行解壓縮
3. 移動解壓縮得到的 mainnet 或 testnet 目錄並覆蓋至 [資料預設位置](#資料目錄預設位置-1)
4. 重新執行全節點

#### Linux 全节点
1. 停止全节点进程 `abec`或 `abectl`
2. 將下載的 mainnet.zip 或 testnet.zip 執行解壓縮命令：
```bash
# Ubuntu 或 Debian 為例，安裝 unzip 工具包
$ apt install unzip
# 解壓縮主網壓縮包
$ unzip mainnet.zip
# 或 解壓縮測試網壓縮包
$ unzip tentnet.zip
```
3. 移動解壓縮得到的 mainnet 或 testnet 目錄並覆蓋至 [資料預設位置](#資料目錄預設位置-1) 
```bash
# 將主網数据目录移動到 ~/.abec/data/ 下
$ mv -f mainnet ~/.abec/data/
# 或 將測試網数据目录移動到 ~/.abec/data/ 下
$ mv -f testnet ~/.abec/data/
```
4. 重新執行全節點

## 注意事項

> [!NOTE]
> 請留意資料更新的日期，更新的壓縮包不能和舊的壓縮包混用！
