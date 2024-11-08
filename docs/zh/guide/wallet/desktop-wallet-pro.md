---
outline: deep
---

# Abelian桌面钱包专业版手册

## 简介

本文档旨在为专业人士和高级用户提供全面的步骤，以成功安装和配置Abelian桌面钱包专业版，为您提供前所未有的交易隐私和安全性控制。

**多层隐私：** 它支持两种创新的钱包地址类型

- **全隐私地址**：此功能确保您的交易无法追踪，您的钱包余额保持机密，提供最大的安全性和匿名性。

- **伪匿名地址**：类似于比特币的隐私模型，此选项允许公开可见的币值和可追踪的交易，但受益于更低的手续费和更快的交易速度。

**主要特点**：

- **灵活的隐私级别**：根据您的隐私需求，在全隐私和伪匿名钱包地址之间选择。

- **无缝转账**：轻松地在全隐私和伪匿名钱包之间转账ABEL。

- **高效稳定的链访问**：通过使用超级节点访问，用户无需本地启动Abec，这消除了本地区块链同步所需的时间，使Abec服务的使用更加高效。


使用*Abelian桌面钱包Pro*，享受增强的隐私保护、更快的交易速度、更低的手续费，以及按照您的条件管理隐私的灵活性。


## 操作步骤
### 下载和安装

前往 [Abelian 官方网站下载页面](https://pqabelian.io/download#desktop)，下载 Abelian 桌面钱包 Pro 的安装包。
![访问 Abelian 官网下载页面](/desktop-wallet/pro/download-page.png)
（根据您的操作系统和 CPU 架构下载 Abelian 桌面钱包 Pro）

- 如果您的计算机运行 Windows，请确保您使用的是 Intel/AMD x86-64 CPU（不支持 ARM 架构的 CPU）。要检查处理器和系统类型，请前往“系统设置 -> 系统 -> 处理器/系统类型”。

- 如果您的计算机运行 macOS，请检查您使用的是 Intel 芯片还是 Apple Silicon（例如 M1/M2 芯片）。根据处理器下载相应的安装包。要检查处理器和系统类型，请点击桌面左上角的 Apple 图标，选择“关于本机 -> 概览”。

- 如果您的计算机运行 Linux，请确保您使用的是 Intel/AMD x86-64 CPU（amd64）或 AMD ARM CPU（arm64）。根据处理器下载相应的安装包。以 Ubuntu 桌面为例，点击桌面右上角的系统功能图标组，在下拉菜单中点击“设置”图标，选择“关于”选项卡查看“处理器/系统类型”字段。

---

**本教程以 Windows 1.0.0 版本为例：**

1）将 Abelian 桌面钱包的安装包保存到桌面
![将安装包文件下载到计算机桌面](/desktop-wallet/pro/download.png)

2）击压缩文件以打开 Abelian 桌面钱包 Pro 的安装程序
![解压缩安装包](/desktop-wallet/pro/installer.png)

3）双击安装程序，它将自动为当前用户安装桌面钱包，并创建桌面快捷方式。安装完成后，Abelian 桌面钱包将自动运行
![安装运行 Abelian 桌面钱包专业版](/desktop-wallet/pro/runing.png)

4）输入两次主密码并点击 “**开始**” 按钮启动钱包（每次启动桌面钱包时都需要主密码进行本地验证）
![创建桌面钱包主密码](/desktop-wallet/pro/input-password.png)

### 创建 ABEL 钱包账户

1）输入主密码并点击 “**LOGIN**” 按钮登录 Abelian 桌面钱包。
![输入主密码登录 Abelian 桌面钱包](/desktop-wallet/pro/login.png)

2）创建 ABEL 钱包账户：
  ![创建 ABEL 钱包](/desktop-wallet/pro/create-account.png)
  - 点击界面右上角的 “**Select Account（选择账户）**” 按钮。
  - 从下拉菜单中选择 “**Create Account（创建账户）**”。

3）为您的钱包命名（例如：“PQabelPro”①），然后点击 “**CREATE（创建）**” 按钮
![钱包账户命名](/desktop-wallet/pro/account-name.png)

4）等待 “**Done（完成）**”① 按钮出现后，点击它以完成 ABEL 钱包账户的创建
![创建账户成功](/desktop-wallet/pro/create-account-success.png)
（创建账户成功时，会显示 “**Account created.（账户已创建。）**”② 消息）

5）在界面右上角，选择已创建的桌面钱包账户：
![选择钱包账户](/desktop-wallet/pro/select-account.png)
  - 点击右上角的“**Select Account（选择账户）**”按钮。
  - 从下拉菜单中选择刚创建的账号，例如 “PQabelPro” 。

6）启动 Abec 同步服务以便下载全节点数据。
![点击开始服务按钮以启动 Abec 服务](/desktop-wallet/pro/start-abec-sync-service.png)

7）在 Abec 服务成功激活之后，启动 Abewallet 同步服务以便下载您的 ABEL 钱包数据。
![启动 Abewallet 钱包服务](/desktop-wallet/pro/start-abewallet-sync-service.png)

### 发送 ABEL

Abelian 桌面钱包 Pro 支持多层隐私交易，允许用户根据需求选择不同的隐私级别。多层隐私功能旨在增强交易的匿名性和安全性。您可以在发送 ABEL 代币时选择所需的隐私层级。更多特性请参考 [这里](/zh/guide/wallet/mlp-wallet-cli.html#服务能力)。

1)**确保 Abec 和 Abewallet 同步服务均为活动状态**
![Abec 和 Abewallet 服务为活动状态](/desktop-wallet/pro/abec-abewallet-active-services.png)

2)导航到 “**SEND（发送）**”① 选项卡，点击 “**PASTE FROM CLIPBOARD（从剪贴板粘贴）**”② 或 “**IMPORT FROM FILE（从文件导入）**”③ 以输入接收方的钱包地址
![输入接收方钱包地址](/desktop-wallet/pro/input-receiver-address.png)

如果粘贴或者导入的是**短地址**②，系统会自动识别并解析为**长地址**③，解析成功会出现提示 “**Successfully get the full address.（成功获取完整地址。）**”① （在桌面钱包专业版中，伪匿名地址中长地址比全隐私地址的字符数少）
![短地址解析为长地址](/desktop-wallet/pro/short-address-to-full-address.png)

3)输入转账**金额**①和**主密码**②后，点击 “**SEND（发送）**”③ 按钮确认交易

**请确保Abecwallet已同步最新区块高度且账号中有足够可花费的（Spendable)代币后，再进行转账交易**
![确认转账](/desktop-wallet/legacy/confirm-transaction.png)

### 接收 ABEL

导航到“**RECEIVE（接收）**”选项卡。如果没有钱包地址实例，请创建一个：

  1）点击三点图标 “**More...（更多）**”②，并从下拉菜单中选择 “**Add full-privacy address（添加全隐私地址）**”③ 或 “**Add pseudonymous address（添加伪匿名地址）**”④
  ![创建钱包地址](/desktop-wallet/pro/create-wallet-address.png)<br>
 （伪匿名地址相对于全隐私地址的隐私功能低一个级别，但它的转账速度更便捷。而全隐私地址更偏向隐私安全，同时处理速度相对慢）
  
  2）以创建 pseudonymous address（伪匿名地址） 为例，等待生成钱包地址实例，直到提示 “**Create an address pseudonymous in this account.（在此账户中创建一个伪匿名地址。）**”，点击 “**Close（关闭）**” 按钮
  ![关闭创建钱包地址](/desktop-wallet/pro/close-create-address.png)<br>
  
  3）点击书页图标的 “**Select address（选择地址）**”① 按钮，选择刚才创建的钱包地址②
  ![选择钱包地址](/desktop-wallet/pro/select-address.png)<br>
  
  4）“**Address（地址）**” 栏为**长地址**①，点击长地址的字符串会自动复制钱包长地址到剪贴板；点击 “**Short Address（短地址）**” 栏后面的 “**Click to reqister a unique short address.（点击注册一个独特的短地址。）**”② 按钮来生成钱包短地址
  ![生成钱包短地址](/desktop-wallet/pro/generate-short-address.png)<br>
 
  5）生成短地址成功会提示 “**Registration succeeded. Click to continue.（注册成功，点击继续。）**”，然后点击 “**Short Address（短地址）**” 栏后面的字符串会自动复制短地址到剪贴板
  ![复制钱包短地址](/desktop-wallet/pro/copy-short-address.png)

最后，在生成地址之后，您可以使用钱包长地址或短地址进行交易（发送和接收 ABEL）。

### 查看交易历史

- 前往 “**TXS（交易记录）**”① 标签页，查看交易历史记录，当**鼠标悬停在 txid 列**②时，会在上方显示完整的 txid，点击后面的**链接**图标，则会自动访问 [Abelian 区块链浏览器](https://explorer.pqabelian.io) 显示此笔交易的详情。
![查看交易记录](/desktop-wallet/pro/transaction-record.png)

### 导出 ABEL 钱包账户

- 1）前往 “**SETTING（设置）**” ①标签页，输入**主密码**②，点击 “**REVEAL MNEMONICS（显示助记词）**”③
  ![导出账户页](/desktop-wallet/pro/export-account-page.png)<br>
- 2）稍后会显示 24 个单词的钱包助记词（恢复短语），点击 “**Copy to Clipboard（复制到剪贴板）**” ，并粘贴到本地的文本文件中保存。
  ![复制钱包助记词](/desktop-wallet/pro/copy-mnemonics.png)

### 导入 ABEL 钱包账户

按照以下步骤导入在其他地方创建的 ABEL 钱包：

1）前往 “**STATUS（主页）**” ①标签页，点击界面右上角的 “**Select Account（选择账户）**”，然后选择 “**Import Account（导入账户）**”
![选择导入钱包账户](/desktop-wallet/pro/select-import-account.png)<br>

2）输入**钱包名称**（钱包名称不区分大小写）①、24 个单词的**助记词**②，然后点击 “**IMPORT（导入）**”③ 按钮
![输入钱包名称和助记词](/desktop-wallet/pro/input-account-name-mnemonics.png)<br>

3）稍后提示 “**Account imported.（账户已导入）**”，点击 “**DONE（完成）**” 按钮完成钱包账户导入。
![导入钱包账户成功](/desktop-wallet/legacy/import-account-success.png)

### Legacy 钱包迁移

如果您仍在使用 Abelian 桌面钱包的 Legacy 版本，可将legacy账户迁移到 Abelian 多层隐私钱包-开启您的增强隐私与灵活性之门！。

详细操作，请参阅 [桌面钱包 (Legacy) 用户手册中的迁移步骤](/zh/guide/wallet/desktop-wallet-legacy#迁移-abel-传统钱包至多层隐私钱包账户)
