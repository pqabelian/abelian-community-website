---
outline: deep
---

# ABEL Testnet 代币

## 获取 ABEL Testnet 钱包地址

### 1. 安装移动钱包应用
访问 PQAbelian 官网下载并安装 [Abelian Mobile Wallet Pro](https://pqabelian.io/download#mobile) 应用程序。

### 2. 移动钱包设置测试网络
打开 Abelian Mobile Wallet Pro 应用后，点击右下角的 “Setting” 按钮，在 “Network” 选项中选择 “Testnet”。
![设置测试网](/qday-testnet/abel-faucet/mobile-wallet-setting-testnet.png)

### 3. 创建测试网钱包账户
返回 Abelian Mobile Wallet Pro 主界面，点击顶部账户列表，再点选弹出菜单中的 “Add a new account”，再创建钱包页面点击“Create a new account” 按钮，下一步中输入账户名称，点击 “Create” 完成创建新钱包账户。
![创建钱包账户](/qday-testnet/abel-faucet/mobile-wallet-create-account.png)

### 4. 获取测试网钱包地址
创建成功后，点击主界面的 “Receive” 按钮，在接收页面，点击 QR 码下面的 “Copy” 图标复制钱包地址。
![复制钱包地址](/qday-testnet/abel-faucet/mobile-wallet-copy-address.png)
（复制后请保存到本地下面领取水龙头时需要用到）

## 获取 ABEL 测试币（水龙头）

### 1. ABEL 测试币水龙头
打开 ABEL Testnet 水龙头网址：[ABEL Faucet](https://testnet-faucet.pqabelian.io/)。

### 2. 领取 ABEL 测试币
在水龙头页面的 ShortAddress 栏中输入前面创建的测试网钱包地址，点击 “CLAIM” 按钮领取 100 个 $ABEL 代币（可以领取多次）。
![ABEL Faucet](/qday-testnet/abel-faucet/abel-faucet.png)
（点击 “GET CLAIM HISTORY” 按钮可以查看此钱包地址的领取历史记录）

### 3. 确认领取成功
领取成功后，等待一段时间（大约 10 分钟左右），在 Abelian Mobile Wallet Pro App 查看余额会显示到账了 100 个 $ABEL 测试币。
![移动钱包查看余额](/qday-testnet/abel-faucet/mobile-wallet-balance.png)

## ABEL 质押兑换 wAbel 测试币

打开 QDAY Testnet 的 ABEL 测试币质押兑换 Qday Testnet weAbel 测试币服务网址：[ABEL Staking](https://testnet-defi.qday.info/ABELStaking) 或 [ABEL Staking 2](https://testnet-defi.abelqday.io/ABELStaking)。

### ABEL 质押页面各栏说明

1. **从网络 (From Network)**
- 选择您要从中提取 ABEL 代币的区块链网络，默认为 “Abelian Testnetwork”（默认不可选）。
2. **到网络 (To Network)**
- 选择您希望质押的目标 QDay 代币的区块链网络，默认为 “Qday Testnetwork”（默认不可选）。
3. **从地址 (From Address)**
- 输入您在选择的网络上存放 ABEL 代币的钱包地址。
4. **到地址 (To Address)**
- 输入您希望质押的地址，通常是您当前已连接上的 MetaMask 钱包地址。
5. **存入的 ABEL 数量 (Amount of ABEL to deposit)**
- 输入您希望质押的 ABEL 代币数量。
6. **锁定期限 (Lock-up period)**
- 选择您的质押资金锁定的时间长度，锁定期越长，潜在的收益可能越高。
7. **奖励比例 (Reward ratio)**
- 选择您希望获得的质押奖励比例，具体比例会根据平台的政策而变化（默认自动生成，不可选）。
8. **生成 QR 码 (Generate QR Code for Abelian Pro)**
- 点击此选项可生成一个 QR 码，用于方便您使用 Abelian Mobile Wallet Pro 扫码功能来转账 ABEL 代币。

### ABEL 质押兑换 wAbel

#### 1. 连接钱包
- 点击页面右上角的 “Connect” 按钮，选择 MetaMask 开始连接；
    ![连接钱包](/qday-testnet/abel-faucet/connect-metamask-wallet1.png)
- 在弹出窗口中选择需要连接的钱包，并授权。
    ![授权连接](/qday-testnet/abel-faucet/connect-metamask-wallet2.png)
- 连接后页面右上角会显示当前已连接的钱包地址。
    ![已连接钱包](/qday-testnet/abel-faucet/connect-metamask-wallet3.png)

#### 2. 填写转账钱包地址
- 在 “From Address” 栏中输入 ABEL 钱包地址，在 “To Address” 栏会自动选择当前已经连接的 MetaMask 钱包地址;
  ![填写转账钱包地址](/qday-testnet/abel-faucet/abel-staking-input-address.png)
- 如果需要切换钱包地址，点击浏览器工具栏中的 MetaMask 图标，在弹出窗口中点击顶部中间位置账号名称后的下拉图标进入账户列表，点击列表中的任一钱包账户切换到该钱包地址。
  ![切换钱包地址](/qday-testnet/abel-faucet/metamask-switch-wallet-address.png)

#### 3. 选择质押数量和锁定期
在 “Amount of Abel to deposit” 栏中输入你希望质押的 $ABEL 代币数量，在 “Lock-up period” 栏中，选择您希望质押的锁定期（默认分为 6、9、12 个月三个选项），在 “Reward ratio” 栏中会自动生成质押奖励的比例（默认跟随上一栏的质押锁定期分为 10%、20%、30% 三种选项）
![输入质押数量并选择锁定期](/qday-testnet/abel-faucet/abel-staking-input-amount-lock-time.png)
（示例中只转账了 98 个 ABEL）

#### 4. 生成 QR 码
点击 “Generate QR Code for Abelian Pro” 按钮，稍后会自动生成的 QR 码。
![生成 QR 码](/qday-testnet/abel-faucet/abel-staking-generate-qrcode.png)

#### 5. 移动钱包转账
打开 Abelian Mobile Wallet Pro 应用，点击 “Send” 按钮，再点击右上角的 “扫码” 图标，扫描上一步的 QR 码，再确认转账操作。
![移动钱包转账](/qday-testnet/abel-faucet/mobile-wallet-send.png)

#### 6. 等待交易完成
交易提交后，点击 “Back to home” 回到主界面，在 “Transactions” 部分查看最近的交易，点击这笔交易进入 “Transaction Details” 页面查看交易状态，也可以点击 “View on AbelScan” 访问 Abelian 区块浏览器查看交易状态。
![查看交易状态](/qday-testnet/abel-faucet/abel-staking-transaction-detail.png)

#### wAbel 质押

测试网第一轮质押测试已经结束，如需实际体验本文档描述的功能，请等待我们再次开放测试。