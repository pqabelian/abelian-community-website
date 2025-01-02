---
outline: deep
---

# Abelian 桌面钱包专业版（MLP）手册

## 简介

本文档旨在为专业人士和高级用户提供全面的步骤，以成功安装和配置 Abelian 桌面钱包专业版（MLP）- 为您提供前所未有的交易隐私和安全性控制。

使用全新的桌面钱包专业版（MLP）v1.0.0提升您的加密货币体验，这是一个专为满足您多层隐私需求而设计的桌面钱包。MLP代表多层隐私。


**有什么新特性？**

**•多层隐私支持：**

**全隐私地址：** 您的交易经过加密，无法追踪，钱包余额保持隐藏，确保最高级别的安全性和匿名性。

**伪匿名地址：** 隐私级别与比特币相似，即公开可见的币值和可追踪的交易，同时享有更低的交易费用和更高的吞吐量。

**•支持多个收款人：**

**全隐私收款人：** 允许最多5个收款人，确保交易安全和隐私。

**伪隐私收款人：** 允许最多100个收款人，其中最多50个不同的收款人，为大型交易提供灵活性。

**•速度和存储空间的显著提升：** 旧版的桌面钱包经典版（Legacy）在首次运行桌面应用时需要用户花费数小时甚至数天来同步整个 Abelian 区块链，并且占用超过100GB的存储空间。全新的桌面钱包专业版（MLP）仅需45分钟或更少时间（取决于您的网络速度和带宽）即可完成第一次数据同步，且存储空间需求不到 100MB。

**•引入了备注概念：** 允许用户在后量子且不可篡改的 Abelian 账本上写入备注。在 Abelian 账本上，我们首次能够永久性地在账本上写下个人笔记。


**为何应该升级？**

- 强烈建议桌面钱包经典版（Legacy）的现有用户立即迁移到全新的桌面钱包专业版（MLP），这样您就不再需要记住可恢复的最大钱包数量。迁移时，我们需要在桌面钱包专业版（MLP）中创建一个新钱包，然后使用桌面钱包经典版（Legacy）将所有 ABEL 币转移到新钱包中。

- 提供创建全隐私和伪隐私桌面钱包的功能。


请立即安装使用最新的桌面钱包专业版（MLP），现在就去创建一个新钱包。



## 操作步骤

---

### 下载和安装

前往 [Abelian 官方网站下载页面](/zh/downloads/latest#abelian-桌面钱包专业版-mlp)，下载 Abelian 桌面钱包专业版（MLP）的安装包。
![访问 Abelian 官网下载页面](/desktop-wallet/pro/download-page.png)
（根据您的操作系统和 CPU 架构下载 Abelian 桌面钱包专业版）

- Windows 用户：请确保您使用的是 Intel/AMD x86-64 CPU（不支持 ARM 架构的 CPU）。要检查处理器和系统类型，请前往“系统设置 -> 系统 -> 处理器/系统类型”。

- macOS 用户：请检查您使用的是 Intel 芯片还是 Apple Silicon（例如 M1/M2 芯片）。根据处理器下载相应的安装包。要检查处理器和系统类型，请点击桌面左上角的 Apple 图标，选择“关于本机 -> 概览”。

- Linux 用户：请确保您使用的是 Intel/AMD x86-64 CPU（amd64）或 AMD ARM CPU（arm64）。根据处理器下载相应的安装包。以 Ubuntu 桌面为例，点击桌面右上角的系统功能图标组，在下拉菜单中点击“设置”图标，选择“关于”选项卡查看“处理器/系统类型”字段。

---

**本教程以 Windows 1.0.0 版本为例：**

1. 将 Abelian 桌面钱包专业版（MLP）的安装包保存到桌面
![将安装包文件下载到计算机桌面](/desktop-wallet/pro/download.png)

2. 击压缩文件以打开 Abelian 桌面钱包专业版（MLP）的安装程序
![解压缩安装包](/desktop-wallet/pro/installer.png)

3. 双击安装程序，它将自动为当前用户安装桌面钱包，并创建桌面快捷方式。安装完成后，Abelian 桌面钱包专业版（MLP）将自动运行
![安装运行 Abelian 桌面钱包专业版](/desktop-wallet/pro/runing.png)

4. 输入两次主密码并点击 “**开始（START）**” 按钮启动钱包（每次启动桌面钱包时都需要主密码进行本地验证）
![创建桌面钱包主密码](/desktop-wallet/pro/input-password.png)

---

### 创建 ABEL 钱包账户

1. 输入主密码并点击 “**LOGIN**” 按钮登录 Abelian 桌面钱包专业版（MLP）。
![输入主密码登录 Abelian 桌面钱包](/desktop-wallet/pro/login.png)

2. 创建 ABEL 钱包账户：
  ![创建 ABEL 钱包](/desktop-wallet/pro/create-account.png)
  - 点击界面右上角的 “**Select Account（选择账户）**” 按钮。
  - 从下拉菜单中选择 “**Create Account（创建账户）**”。

3. 命名您的钱包-区分大小写（例如：“PQabelPro”①），然后点击 “**CREATE（创建）**” 按钮
![钱包账户命名](/desktop-wallet/pro/account-name.png)

4. 等待 “**Done（完成）**”① 按钮出现后，点击它以完成 ABEL 钱包账户的创建
![创建账户成功](/desktop-wallet/pro/create-account-success.png)
（创建账户成功时，会显示 “**Account created.（账户已创建。）**”的消息）

5. 在界面右上角，选择已创建的桌面钱包账户：
![选择钱包账户](/desktop-wallet/pro/select-account.png)
  - 点击右上角的 “**Select Account（选择账户）**” 按钮。
  - 从下拉菜单中选择刚创建的账号，例如 “PQabelPro” 。

6. 点击 “**启动服务（Start service）**”① 按钮，开始钱包区块数据同步服务 以便下载您的 ABEL 钱包数据；点击日志按钮② 可以查看钱包同步日志；进度栏③ 会实时显示同步的高度和百分比进度。
![启动钱包同步服务](/desktop-wallet/pro/start-abewallet-sync-service.png)

---

### 接收 ABEL

1. 确保已经启动了钱包区块同步服务，否则将无法创建钱包地址；

2. 导航到 “**RECEIVE（接收）**”① 选项卡。如果没有钱包地址实例，选择隐私类型创建一个：“**Pseudo-Private（伪匿名）**”② 或 “**Fully-Private（全隐私）**”③ 选项，然后点击后面的 “**GENERATE A NEW ADDRESS（生成一个新地址）**”④ 按钮；
  ![创建钱包地址](/desktop-wallet/pro/create-wallet-address.png)<br>

:::tip 提示
伪匿名地址的隐私级别较全隐私地址低，但转账速度更快。全隐私地址则更注重隐私保护，但处理速度相对较慢。
:::
  
3. 以创建 Pseudo-Private（伪匿名地址） 为例，等待钱包地址生成后，直到系统提示 “Generate a new Pseudo-Private address in this account（在此账户中生成一个新的伪私有地址）” 的状态为 “**Successfully（成功）**”，点击 “**Close（关闭）**” 按钮
  ![关闭创建钱包地址](/desktop-wallet/pro/close-create-address.png)<br>
  
4. 在 “**5 Most Recently Generated Addresses（5个最近生成的地址）**” 部分会显示已生成的地址列表，点击 “**Full Address（长地址）**”① 后面的字符串会自动复制钱包长地址到剪贴板；点击 “**Short Address（短地址）**”② 栏后面的 “**Click to reqister a unique short address.（点击注册一个独特的短地址。）**” 按钮来生成钱包短地址；
  ![生成钱包短地址](/desktop-wallet/pro/generate-short-address.png)<br>
 
5. 成功生成短地址后，点击 “**Short Address（短地址）**” 栏后的字符串，短地址将自动复制到剪贴板。
  ![复制钱包短地址](/desktop-wallet/pro/copy-short-address.png)

:::tip 提示
在生成地址之后，您可以使用钱包长地址或短地址进行交易（发送和接收 ABEL）。目前，我们推荐使用短地址，因为它字符数更少，更方便保存和发送。
:::

---

### 发送 ABEL

Abelian 桌面钱包专业版（MLP）支持多层隐私交易，允许用户根据需求选择不同的隐私级别。这一多层隐私功能旨在提升交易的匿名性和安全性。在发送ABEL代币时，您可以选择适合的隐私层级。更多特性请参考 [这里](/zh/guide/wallet/cli-wallet-mlp#服务能力)。

1. **在STATUS选项卡中，请确保同步服务进度已达到 100%**

2. 导航到 “**SEND（发送）**”① 选项卡，在 “**Recipients（接收者）**” 部分中点击 “**ADD（添加）**”② 按钮来批量添加接收地址和金额。同时，请留意接收地址的数量限制③ 
![输入接收方钱包地址](/desktop-wallet/pro/add-receiver-address.png)

3. 然后在 “**Address (Full or Short)（长地址或短地址）**”① 栏中填写接收钱包账户的地址，系统会自动分辨短地址和长地址，在 “**Amount (ABEL)（金额）**”② 栏中填写需要发送的金额数量（ABEL），再点击 “**保存**”③ 按钮完成添加；
![短地址解析为长地址](/desktop-wallet/pro/add-receiver-address2.png)

4. 保存后，您可以通过点击 “**修改**”① 按钮来修改这笔交易详情，或者点击 “删除”② 按钮来移除这笔交易。
![修改交易信息](/desktop-wallet/pro/edit-delete-transaction.png)

5. 在 “**Input（输入）**” 您可以查看可用于转账的余额。系统默认选中了 “**Spendable Pseudo-Private ABELs（可花费的伪匿名代币）**”① 和 “**Spendable Fully-Private ABELs（可花费的全隐私代币）**”②。您只需关注 "**Total Spendable ABELs（可花费的总代币）**”③ 这一数值。系统会自动处理，将不足的余额转移到相应的隐私地址中，以确保交易的顺利进行。。
![查看余额并选择转账地址隐私类型](/desktop-wallet/pro/check-balance-select-address-privacy.png)

:::tip 提示
近期收到的 ABEL 代币将有一个短暂的锁定期，通常为几个小时。在这段时间内，被锁定的金额不会在 Input 部分的可用转账余额③中，直到这些代币解锁后才能使用。
:::

6. 在 “**UTXO Change（选择转账地址类型）**”④ 中，选择需要转账的隐私类型。接着，在 “**Master Password（主密码）**”⑤ 栏输入解锁桌面钱包专业版的密码，点击 “**PREVIEW（预览）**”⑥ 按钮查看此次交易的详情。

7. 在交易预览界面，可以查看交易地址和交易金额①、转账使用的隐私地址类型②、交易费③ 。您可点击 “I WANT TO DOUBLE CHECK IT.（我想再确认一下。）”④ 按钮返回之前的 “**SEND（发送）**” 页面进行修改调整；您也可以点击 “I CONFIRM THIS TRANSACTION.（我确认此交易。）”⑤ 按钮来完成此次转账交易。
![预览转账](/desktop-wallet/pro/preview-transaction.png)

8. 发送成功后，会显示此次交易的 TXID（转账ID），您可以使用这个TXID在区块链浏览器上查询交易的确认进度。完成后，点击 “**CLOSE（关闭）**” 按钮返回主界面。
![交易成功](/desktop-wallet/pro/transaction-success.png)

---

### 查看交易历史

1. 前往 “**TXS（交易记录）**”① 标签页，在 “**View transactions（查看交易）**” 列表中显示交易历史记录，当鼠标悬停在 **txid 列**② 时，会在上方显示完整的 TXID (转账ID)。点击的**链接**图标后，系统会自动尝试访问 [Abelian 区块链浏览器](https://explorer.pqabelian.io) 以便查询此笔交易的详情。

刚提交的交易状态默认显示为 “**Pending（等待确认）**”③，这是因为交易还在等待被区块链网络确认。同时，由于交易金额已经过加密处理，转账金额会显示为N/A（不适用）。
![查看交易记录](/desktop-wallet/pro/transaction-record.png)

2. 在等待1至5个区块高度确认后，交易状态将更新为 “**Confirmed（已确认）**”②，此时 **转账金额**① 将正确显示。如果您在交易列表中未看到交易或其状态尚未更新为已确认，请转到界面右上角并点击 “**REFRESH NOW（立即刷新）**”③ 按钮刷新交易列表。
![交易已确认](/desktop-wallet/pro/transaction-confirmed.png)

### 导出 ABEL 钱包账户

1. 前往 “**SETTING（设置）**” ①标签页，输入**主密码**②后，点击 “**REVEAL MNEMONICS（显示助记词）**”③
  ![导出账户页](/desktop-wallet/pro/export-account-page.png)<br>
2. 稍后，系统会展示您的24个单词组成的钱包助记词（钱包恢复短语），点击 “**Copy to Clipboard（复制到剪贴板）**” ，并粘贴到本地的文本文件中保存。
  ![复制钱包助记词](/desktop-wallet/pro/copy-mnemonics.png)

---

### 导入 ABEL 钱包账户

按照以下步骤导入在其他地方创建的 ABEL 钱包：

1. 前往 “**STATUS（主页）**” ①标签页，点击界面右上角的 “**Select Account（选择账户）**”，然后选择 “**Import Account（导入账户）**”
![选择导入钱包账户](/desktop-wallet/pro/select-import-account.png)<br>

2. 输入**钱包名称**①，示例使用名称 “**PQabelPro2**”，下一行中输入需要导入 24 个单词的钱包**助记词**②，然后点击 “**IMPORT（导入）**”⑤ 按钮；
![输入钱包名称和助记词](/desktop-wallet/pro/input-account-name-mnemonics.png)<br>

  **[可选项]** 如需导入 **Abelian 多层隐私钱包（CLI）(AbewalletMLP)** 的助记词，请点击 “**Advance Options（高级选项）**”③ 展开更多选项，以便选择 “**AbewalletMLP's Version（AbewalletMLP 版本）**”④中对应的版本号。

:::tip 提示
桌面钱包专业版不支持**Abelian 传统钱包（CLI）(AbewalletLLegacy)** 和 **桌面钱包经典版（Legacy）** 助记词的直接导入；
在导入 **Abelian 多层隐私钱包（CLI）(AbewalletMLP)** 的助记词之前，请先替换间隔符号 “**逗号（，）**” 为 “**空格（ ）**”。
:::

3. 稍后提示 “**Account imported.（账户已导入）**”，点击 “**DONE（完成）**” 按钮完成钱包账户导入。
![导入钱包账户成功](/desktop-wallet/legacy/import-account-success.png)

---

### 经典版钱包（Legacy）迁移

如果您仍在使用 Abelian 桌面钱包经典版（Legacy），可将经典版的账户迁移到 Abelian 桌面钱包专业版 - 开启您的增强隐私与灵活性之门！。

详细操作，请参阅 [Abelian 桌面钱包经典版 (Legacy) 用户手册中的迁移步骤](/zh/guide/wallet/desktop-wallet-legacy#迁移-abel-传统钱包至多层隐私钱包账户)。

:::tip 提示
Abelian 桌面钱包专业版（MLP）仅兼容最新版本的 Abelian 桌面钱包经典版（Legacy）进行转账和迁移操作。目前，尚未支持 Abelian 桌面钱包经典版（Legacy）4.1.1 或 Abelian Pro 移动钱包的转账功能！
:::