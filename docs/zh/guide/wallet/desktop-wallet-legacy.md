---
outline: deep
---

# Abelian 桌面钱包（传统版）用户指南

Abelian 是一个抗量子攻击的区块链项目。其原生代币 ABEL 是一种保护隐私的货币，使用户能够匿名和不可追踪地发送和接收 ABEL。Abelian 使用基于格的可链接环签名、基于格的承诺方案以及基于格的零知识证明系统来实现安全性、抗量子攻击能力和不可追踪性。Abelian 的愿景是构建一个支持智能合约的抗量子攻击区块链生态系统，并通过后量子密码学桥接技术增强其他区块链网络。

Abelian 基金会开发了桌面版的 Abelian 钱包，通过易于使用的图形界面，用户可以创建 ABEL 钱包账户，导出用于恢复钱包的 24 个短语助记词，导入现有的 ABEL 钱包账户，发送或接收 ABEL 代币，并在一个 Abelilan 桌面钱包中管理多个 ABEL 钱包实例，最新版本支持迁移桌面钱包传统版至桌面钱包专业版（Abelian Multi-layer Privacy Wallet）。

本用户指南提供了 Abelian 桌面钱包传统版的安装、配置和功能的使用教程。

## 下载与安装

访问 [Abelian 官方网站下载页面](https://pqabelian.io/download#desktop) 并下载 Abelian 桌面钱包（传统版）/ Abelian Desktop Wallet Legacy 的安装包。

![访问 Abelian 官网下载页面](/desktop-wallet/legacy/download-page.png)
（根据操作系统和 CPU 架构下载 Abelian 桌面钱包传统版）

- 如果您的计算机是 Windows，请确定您是否使用 Intel/AMD x86-64 CPU（不支持 ARM 架构 CPU）。要查看处理器及其系统类型，请通过 “系统设置 -> 系统 -> 处理器/系统类型” 查看。

- 如果您的计算机是 Mac，请确定您是否使用 Intel 芯片或 Apple silicon（例如 M1/M2 芯片）。根据处理器下载相应的安装包。要查看处理器及其系统类型，请点击桌面左上角的苹果标志并选择 “关于本机 -> 芯片”。

- 如果您的计算机是 Linux，请确定您是否使用 Intel/AMD x86-64 CPU (amd64) 或 AMD ARM CPU (arm64)。根据处理器下载相应的安装包。要查看处理器及其系统类型，以 Ubuntu 桌面版为例，请点击桌面右上角的系统功能图标组，在下拉框中点击 “设置” 图标，在弹出的系统设置界面中选择 “关于” 标签，查看 “处理器/系统类型” 栏。

---

**本教程使用 Windows 4.2.0 版本为示例：**

- 将 Abelian 桌面钱包安装包保存到桌面
![将安装包文件下载到计算机桌面](/desktop-wallet/legacy/download.png)

- 双击压缩包文件，将会出现 Abelian 桌面钱包传统版应用程序的安装程序
![解压缩安装包](/desktop-wallet/legacy/installer.png)

- 双击安装程序会自动安装桌面钱包到当前用户，并创建桌面快捷方式后自动运行桌面钱包
![安装运行 Abelian 桌面钱包传统版](/desktop-wallet/legacy/runing.png)

- 输入两遍主密码，点击 “**START**” 按钮启动钱包（每次启动桌面钱包时都需要输入主密码进行本地验证）
![创建桌面钱包主密码](/desktop-wallet/legacy/input-password.png)

## 创建 ABEL 钱包账户

- 输入主密码点击 “**LOGIN**” 按钮登录 Abelian 桌面钱包
![输入主密码登录 Abelian 桌面钱包](/desktop-wallet/legacy/login.png)

- 创建一个 ABEL 钱包账户：
![创建 ABEL 钱包](/desktop-wallet/legacy/create-account.png)
  1. 点击右上角的 “**Select Account（选择账户）**”
  2. 在下拉菜单中选择 “**Create Account（创建账户）**”

- 为您的钱包命名（例如：“PQabel”①），然后点击 “**CREATE（创建）**”② 按钮
![钱包账户命名](/desktop-wallet/legacy/account-name.png)

- 稍等片刻，显示 “**Done（完成）**”① 按钮，点击它完成 ABEL 钱包账户创建
![创建账户成功](/desktop-wallet/legacy/create-account-success.png)
（创建账户成功时，会显示 “**Account created.（账户已创建。）**”② 消息）

- 选择刚创建的桌面钱包账户
![选择钱包账户](/desktop-wallet/legacy/select-account.png)
  1. 点击右上角的 “**Select Account（选择账户）**”
  2. 在下拉菜单中选择 “PQabel” 账户
  
- 请先启动 Abec 同步服务以同步下载全节点数据。
![点击开始服务按钮以启动 Abec 服务](/desktop-wallet/legacy/start-abec-sync-service.png)

- 当 Abec 服务处于活动状态时，启动 Abewallet 同步服务以同步下载您的 ABEL 钱包数据。
![启动 Abewallet 钱包服务](/desktop-wallet/legacy/start-abewallet-sync-service.png)

## 接收 ABELs

- 确保 Abec 和 Abewallet 同步服务均为活动状态
![Abec 和 Abewallet 服务为活动状态](/desktop-wallet/legacy/abec-abewallet-active-services.png)

- 前往 “**RECEIVE（接收）**”① 标签页，如果没有钱包地址实例，请先创建一个。
  1. 点击三个点图标的 “**More...（更多）**”② 按钮，在下拉菜单中选择 “**Add address（添加地址）**”③
   ![创建钱包地址](/desktop-wallet/legacy/create-wallet-address.png)<br>
  2. 等待生成钱包地址实例，直到提示 “**Successfully generated a new address.（成功生成了一个新地址。）**”，点击 “**Close（关闭）**” 按钮
   ![关闭创建钱包地址](/desktop-wallet/legacy/close-create-address.png)<br>
  3. 点击书页图标的 “**Select address（选择地址）**”① 按钮，选择刚才创建的钱包地址②
   ![选择钱包地址](/desktop-wallet/legacy/select-address.png)<br>
  4. “**Address（地址）**” 栏为**长地址**①，点击长地址的字符串会自动复制钱包长地址到剪贴板；点击 “**Short Address（短地址）**” 栏后面的 “**Click to reqister a unique short address.（点击注册一个独特的短地址。）**”② 按钮来生成钱包短地址
   ![生成钱包短地址](/desktop-wallet/legacy/generate-short-address.png)<br>
  5. 生成短地址成功会提示 “**Registration succeeded. Click to continue.（注册成功，点击继续。）**”，然后点击 “**Short Address（短地址）**” 栏后面的字符串会自动复制钱包短地址到剪贴板
   ![复制钱包短地址](/desktop-wallet/legacy/copy-short-address.png)

生成地址后，您可以使用长钱包地址或短地址进行交易（发送和接收 ABEL）。

## 发送 ABEL

- 前往 **“SEND（发送）”** 标签页，并点击 “**PASTE FROM CLIPBOARD（从剪贴板粘贴）**”① 或 “**IMPORT FROM FILE（从文件导入）**”② 接收方钱包地址实例
![输入接收方钱包地址](/desktop-wallet/legacy/input-receiver-address.png)

- 如果粘贴或者导入的是**短地址**②，会自动识别并解析为**长地址**③，解析成功会出现提示 “**Successfully get the full address.（成功获取完整地址。）**”①。
![短地址解析为长地址](/desktop-wallet/legacy/short-address-to-full-address.png)

- 输入转账**金额**①和**主密码**②后，点击 “**SEND（发送）**”③ 按钮确认交易。
![确认转账](/desktop-wallet/legacy/confirm-transaction.png)

## 查看交易记录

- 前往 “**TXS（交易记录）**”① 标签页，查看交易历史记录，当**鼠标悬停在 txid 列**②时，会在上方显示完整的 txid，点击后面的**链接**图标，则会自动访问 [Abelian 区块链浏览器](https://explorer.pqabelian.io) 显示此笔交易的详情。 
![查看交易记录](/desktop-wallet/legacy/transaction-record.png)

## 导出 ABEL 钱包账户

- 前往 “**SETTING（设置）**” ①标签页，输入**主密码**②，点击 “**REVEAL MNEMONICS（显示助记词）**”③
  ![导出账户页](/desktop-wallet/legacy/export-account-page.png)<br>

- 稍后会显示 24 个单词的钱包助记词（恢复短语），点击 “**Copy to Clipboard（复制到剪贴板）**” ，并粘贴到本地的文本文件中保存。
  ![复制钱包助记词](/desktop-wallet/legacy/copy-mnemonics.png)

## 导入 ABEL 钱包账户

按以下步骤导入其他地方创建的 ABEL 钱包：

1. 点击右上角的 “**Select Account（选择账户）**”，然后选择 “**Import Account（导入账户）**”
![选择导入钱包账户](/desktop-wallet/legacy/select-import-account.png)<br>

2. 输入**钱包名称**①、24 个单词的**助记词**②，然后点击 “**Number of Addresses to Recover（恢复地址数量）**”③ 栏会弹出一个对话框点击 “**OK**”④ 按钮
![输入钱包名称和助记词](/desktop-wallet/legacy/input-account-name-mnemonics.png)<br>

3. 在弹出的恢复地址数对话框中，输入该钱包账户的 “**number of times to recover times（恢复次数）**”① 、“**number of times to send tokens（转账次数）**”②，点击 “**CONFIRM（确认）**”③ 按钮
![输入恢复地址数量](/desktop-wallet/legacy/input-recover-send-times.png)<br>

4. 系统会自动生成对应的数字到恢复地址实例数量栏，点击 “**IMPORT（导入）**” 按钮，稍后会提示 “**Account imported.（账户已导入。）**”，点击 “**DONE（完成）**” 按钮完成钱包账户导入。
![导入钱包账户成功](/desktop-wallet/legacy/import-account-success.png)

## 迁移 ABEL 传统钱包至多层隐私钱包账户

Abelian 基金会开发了多层隐私钱包（Abelian Multi-layer Privacy Wallet），它支持在桌面端创建多层隐私钱包账户，用户根据对隐私的强度选择对应的类型进行交易，但 Abelian 桌面钱包传统版不支持创建多层隐私钱包地址，因此需要将 Abelian 桌面钱包传统版迁移至 Abelian 多层隐私钱包专业版（MLP），此操作将传统钱包中所有余额迁移至多层隐私钱包。

按以下步骤将 Abelian 桌面钱包传统版迁移至 Abelian 多层隐私钱包：

1. 前往 “**MIGRATION（迁移）**”① 标签页，点击 “**PASTE FROM CLIPBOARD（从剪贴板粘贴）**” 或 “**IMPORT FROM FILE（从文件导入）**”② 按钮迁移接收方多层隐私钱包地址实例
![迁移钱包](/desktop-wallet/legacy/migrate-mlp-wallet.png)<br>

2. 输入**主密码**①，点击 “**MIGRATION（迁移）**” 按钮② 开始迁移，此行末尾显示此次迁移的 “Spendable（可用金额）”
![输入主密码](/desktop-wallet/legacy/input-password-migration.png)<br>

3. 在系统弹出提示框中审核此次迁移的钱包地址，点击 “**I CONFIRM THIS MIGRATION.（我确认此次迁移。）**” 按钮，直到提示 “ **1 Transactions submitted.（一笔交易已提交。）**” 则完成钱包迁移操作
![迁移确认](/desktop-wallet/legacy/migration-confirm.png)

4. 前往 “**TXS（交易记录）**” 标签页，查看对应的交易记录，当最后的状态为 “**Confirmed（已确认）**” 时表示此次迁移成功。
