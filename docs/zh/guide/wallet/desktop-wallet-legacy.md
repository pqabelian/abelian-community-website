---
outline: deep
---

# Abelian 桌面钱包（传统版）用户手册

Abelian 基金会推出的桌面版 Abelian 钱包，为用户提供了便捷的图形界面，用户可借此创建 ABEL 钱包账户，导出用于恢复钱包的 24 个助记词短语，导入已有的 ABEL 钱包账户，轻松地发送或接收 ABEL 代币，并且能够在一个 Abelian 桌面钱包中管理多个 ABEL 钱包。

**这次版本更新了什么内容？**  
- **一键迁移：** 强烈建议用户将旧版钱包迁移至 MLP 钱包。MLP 钱包摒弃了用户需记住 “最大可恢复钱包数量” 的要求，极大地提高了易用性。此外，今后将仅支持全新的 MLP 钱包，旧版钱包地址类型将逐步被淘汰。

- 用户需安装 Desktop Wallet Pro v1.0.0 并创建一个新钱包（完全隐私或伪隐私类型），然后利用 Abelian 桌面钱包传统版 V4.2.0 中的迁移功能，把旧版钱包中的 ABEL 代币转移至新的 MLP 钱包中。

**为什么要升级？**  

- MLP 钱包地址的使用得到了显著简化，无需再记忆任何序列号，即 “最大可恢复钱包数量”。而且，用户首次能够创建多个 MLP 地址，并可为每个地址选择不同的隐私级别，包括完全隐私或伪隐私。

本用户指南将详细阐述 Abelian 桌面钱包传统版的安装、配置及各项功能的使用教程。

## 下载与安装

请访问 [Abelian 官方网站下载页面](https://pqabelian.io/download#desktop) 下载 Abelian 桌面钱包传统版本的安装包。在该页面中，用户需要根据自己所使用的操作系统以及计算机的 CPU 架构来选择相应的 Abelian 桌面钱包传统版安装包进行下载.

![访问 Abelian 官网下载页面](/desktop-wallet/legacy/download-page.png)

- **Windows 用户**：请确认您使用的是 Intel/AMD x86-64 CPU（不支持 ARM 架构 CPU）。要查看处理器及系统类型，请通过 “系统设置 -> 系统 -> 处理器/系统类型” 查看。

- **Mac 用户**：请确认您使用的是 Intel 芯片或 Apple Silicon（如 M1/M2 芯片）。根据处理器下载相应的安装包。要查看处理器及系统类型，请点击桌面左上角的苹果标志并选择 “关于本机 -> 芯片”。

- **Linux 用户**：请确认您使用的是 Intel/AMD x86-64 CPU (amd64) 或 AMD ARM CPU (arm64)。根据处理器下载相应的安装包。以 Ubuntu 桌面版为例，点击桌面右上角的系统功能图标组，在下拉菜单中选择 “设置” 图标，在弹出的系统设置界面中选择 “关于” 标签，查看 “处理器/系统类型” 栏。

---

**本教程以 Windows 4.2.0 版本为示例：**

- 将 Abelian 桌面钱包传统版安装包保存到桌面。
![将安装包文件下载到计算机桌面](/desktop-wallet/legacy/download.png)

- 双击压缩包文件，启动 Abelian 桌面钱包传统版应用程序的安装程序。
![解压缩安装包](/desktop-wallet/legacy/installer.png)

- 双击安装程，将自动安装桌面钱包到当前用户，并创建桌面快捷方式，随后自动运行桌面钱包。
![安装运行 Abelian 桌面钱包传统版](/desktop-wallet/legacy/runing.png)

- 输入两遍主密码，点击 “**START**” 按钮启动钱包。需注意，每次启动桌面钱包时均需输入主密码进行本地验证。
![创建桌面钱包主密码](/desktop-wallet/legacy/input-password.png)

## 创建 ABEL 钱包账户

- 输入主密码，点击 “**LOGIN**” 按钮登录 Abelian 桌面钱包。
![输入主密码登录 Abelian 桌面钱包](/desktop-wallet/legacy/login.png)

- 创建一个 ABEL 钱包账户的步骤如下：
![创建 ABEL 钱包](/desktop-wallet/legacy/create-account.png)
   1. 点击右上角的 “**Select Account（选择账户）**”。
  2. 在下拉菜单中选择 “**Create Account（创建账户）**”。

- 为您的钱包命名（例如：“PQabel”①），然后点击 “**CREATE（创建）**”② 按钮。
![钱包账户命名](/desktop-wallet/legacy/account-name.png)

- 稍作等待，待显示 “**Done（完成）**”① 按钮后，点击该按钮完成 ABEL 钱包账户的创建。
![创建账户成功](/desktop-wallet/legacy/create-account-success.png)
（创建账户成功时，会显示 “**Account created.（账户已创建。）**”② 消息）

- 选择刚创建的桌面钱包账户，操作如下：
![选择钱包账户](/desktop-wallet/legacy/select-account.png)
  1. 点击右上角的 “**Select Account（选择账户）**”。
  2. 在下拉菜单中选择 “PQabel” 账户。
  
- 点击 “**Start service（启动服务）**”① 按钮，同步 ABEL 钱包数据，左边的 “**View service log（查看服务日志）**”② 按钮可供高级用户在同步出现问题时进行调试。
![启动 Abewallet 钱包服务](/desktop-wallet/legacy/start-abewallet-sync-service.png)

## 接收 ABELs

- 确保钱包同步服务处于活动状态，且同步状态达到 100%。
![钱包完成同步](/desktop-wallet/legacy/abewallet-synced.png)

- 前往 “**RECEIVE（接收）**”① 标签页，若没有钱包地址实例，，则需先创建一个，具体步骤如下：
  1. 点击三个点图标的 “**More...（更多）**”② 按钮，在下拉菜单中选择 “**Add address（添加地址）**”③。
   ![创建钱包地址](/desktop-wallet/legacy/create-wallet-address.png)
  2. 等待生成钱包地址实例，直到提示 “**Successfully generated a new address.（成功生成了一个新地址。）**”，然后点击 “**Close（关闭）**” 按钮。
   ![关闭创建钱包地址](/desktop-wallet/legacy/close-create-address.png)
  3. 点击书页图标的 “**Select address（选择地址）**”① 按钮，选择刚才创建的钱包地址②。
   ![选择钱包地址](/desktop-wallet/legacy/select-address.png)
  4. “**Address（地址）**” 栏为**长地址**①，点击长地址字符串，将自动复制钱包长地址到剪贴板；点击 “**Short Address（短地址）**” 栏后面的 “**Click to register a unique short address.（点击注册一个独特的短地址。）**”② 按钮生成钱包短地址。
   ![生成钱包短地址](/desktop-wallet/legacy/generate-short-address.png)
  5. 生成短地址成功后，会提示 “**Registration succeeded. Click to continue.（注册成功，点击继续。）**”，点击 “**Short Address（短地址）**” 栏后面的字符串，将自动复制钱包短地址到剪贴板。
   ![复制钱包短地址](/desktop-wallet/legacy/copy-short-address.png)

生成地址后，用户可使用长钱包地址或短地址进行 ABEL 的发送和接收交易。

## 发送 ABEL

- 前往 “**SEND（发送）**” 标签页，并点击 “**PASTE FROM CLIPBOARD（从剪贴板粘贴）**”① 或 “**IMPORT FROM FILE（从文件导入）**”②， 输入接收方钱包地址实例。
![输入接收方钱包地址](/desktop-wallet/legacy/input-receiver-address.png)

- 若粘贴或导入的是**短地址**②，系统将自动识别并解析为**长地址**③，解析成功后会出现提示 “**Successfully get the full address.（成功获取完整地址。）**”①；
![短地址解析为长地址](/desktop-wallet/legacy/short-address-to-full-address.png)

- 输入转账**金额**①和**主密码**②后，点击 “**SEND（发送）**”③ 按钮提交。
![确认转账](/desktop-wallet/legacy/confirm-transaction.png)

- 提交后会弹出交易预览界面，用户可查看发送钱包账户①、交易金额②和接收钱包地址③。用户可点击 “**I WANT TO DOUBLE CHECK IT.（我想再确认一下。）**”④ 按钮返回之前的 “**SEND（发送）**” 页面进行修改；也可以点击 “**I CONFIRM THIS TRANSACTION.（我确认此交易。）**”⑤ 按钮完成此次转账交易。
![交易预览](/desktop-wallet/legacy/preview-transaction.png)

## 查看交易记录

- 前往 “**TXS（交易记录）**”① 标签页，查看交易历史记录。当**鼠标悬停在 txid 列**②时，会在上方显示完整的 txid，点击后面的**链接**图标将自动访问 [Abelian 区块链浏览器](https://explorer.pqabelian.io) 显示此笔交易的详情。
![查看交易记录](/desktop-wallet/legacy/transaction-record.png)

## 导出 ABEL 钱包账户

- 前往 “**SETTING（设置）**” ① 标签页，输入**主密码**②，点击 “**REVEAL MNEMONICS（显示助记词）**”③。
  ![导出账户页](/desktop-wallet/legacy/export-account-page.png)

- 稍后会显示 24 个单词的钱包助记词（恢复短语），点击 “**Copy to Clipboard（复制到剪贴板）**”，并将其粘贴到本地的文本文件中保存。
  ![复制钱包助记词](/desktop-wallet/legacy/copy-mnemonics.png)

## 导入 ABEL 钱包账户

:::tip 提示
桌面钱包传统版由 4.1.1 或更早版本升级到 4.2.0 版本后，需要重新导入钱包账户。自 4.2.0 版本起，不再需要同步 Abec 全节点数据，同步速度大幅提升，且不再占用大量磁盘空间。
:::

导入其他地方创建的 ABEL 钱包，可按以下步骤进行：

1. 点击右上角的 “**Select Account（选择账户）**”，然后选择 “**Import Account（导入账户）**”。
![选择导入钱包账户](/desktop-wallet/legacy/select-import-account.png)

2. 输入**钱包名称**①、24 个单词的**助记词**②，点击 “**Number of Addresses to Recover（恢复地址数量）**”③ 栏会弹出一个对话框，点击 “**OK**”④ 按钮。
![输入钱包名称和助记词](/desktop-wallet/legacy/input-account-name-mnemonics.png)

:::tip 提示
恢复地址数量需用户自行估算，以下提供三个参考方法：

  a. 如果运行的桌面钱包是 4.1.1 版本，可参考 [接收 ABELs](#接收-abels) 的步骤创建一个新地址，通过 “Select address（选择地址）” 下拉菜单中查看新创建的地址名称后缀 `钱包名#m数字`，其中 #m 后的数字就是您要填写的恢复地址数。

  b. 如果运行的桌面钱包低于 4.1.1 版本且 a 方法创建新地址失败，可以通过 TXS 标签页查看交易笔数，将这个数字乘以 2。如果该钱包之前有导入过，还需加上上次恢复钱包时填写的地址数值。

  c. 如果钱包版本太旧无法运行并查询交易记录，恢复地址数可以预估填写一个数值，例如：100，但不要填写不切实际且过大的数值，以免导致程序崩溃。
:::

3. 系统会自动生成对应的数字到恢复地址实例数量栏，点击 “**IMPORT（导入）**” 按钮，稍后会提示 “**Account imported.（账户已导入。）**”，点击 “**DONE（完成）**” 按钮完成钱包账户导入。
![导入钱包账户成功](/desktop-wallet/legacy/import-account-success.png)

## 迁移 ABEL 传统钱包至多层隐私钱包账户

Abelian 基金会开发了多层隐私钱包（Abelian Multi-layer Privacy Wallet），支持在桌面端创建多层隐私钱包账户。用户可根据隐私需求选择对应类型进行交易，但 Abelian 桌面钱包传统版不支持创建多层隐私钱包地址，因此需要传统钱包中所有余额迁移至多层隐私钱包中。

按以下步骤将 Abelian 传统钱包迁移至 Abelian 多层隐私钱包：

1. 前往 “**MIGRATION（迁移）**”① 标签页，点击 “**PASTE FROM CLIPBOARD（从剪贴板粘贴）**” 或 “**IMPORT FROM FILE（从文件导入）**”② 按钮，迁移接收方多层隐私钱包地址实例。
![迁移钱包](/desktop-wallet/legacy/migrate-mlp-wallet.png)

2. 输入**主密码**①，点击 “**BEGIN（开始）**” 按钮② 进行迁移。在此过程中，用户能够同时查看到本次迁移的最大 “Spendable（可用金额）”，该金额表示在此次迁移操作中，用户最多能够迁移的资金数量。
![输入主密码](/desktop-wallet/legacy/input-password-migration.png)

3. 在系统弹出提示框中预览此次迁移的 **钱包账户**① 和迁移 **目标钱包地址**②，您可以点击 “**I WANT TO DOUBLE CHECK IT.（我想再确认一下。）**”④ 按钮返回之前的 “**MIGRATION（迁移）**” 页面进行修改；也可以点击 “**I CONFIRM THIS MIGRATION.（我确认此次迁移。）**”⑤ 按钮提交。
![迁移确认](/desktop-wallet/legacy/migration-confirm.png)

4. 提交后会显示进度窗口，直到出现提示 “**N Transactions submitted.（一笔交易已提交。）**”时，钱包迁移操作完成。需注意的是，这里的 N 值因不同账号而异，其具体数量由账户中待迁移的 coins 数量决定 。
![迁移进度](/desktop-wallet/legacy/migration-progress.png)

5. 前往 “**TXS（交易记录）**” 标签页，查看对应的交易记录，当最后状态为 “**Confirmed（已确认）**” 时表示此次迁移成功。

:::tip 提示
桌面钱包传统版升级到 4.2.0 版本后，强烈建议用户迁移钱包账户至 [Abelian 桌面钱包专业版](/zh/guide/wallet/desktop-wallet-pro), 因为它支持在导入钱包操作时不再需要填写地址数选项，对大金额转账更友好，且大多数情况下可避免转账时出现 “allowed max number 5” 的错误。
:::
