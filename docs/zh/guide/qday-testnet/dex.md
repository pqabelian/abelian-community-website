---
outline: deep
---

# Qday testnet 去中心化交易所（DEX）

## Qday Testnet DEX

Qday Testnet DEX 是一个高效、安全的去中心化交易平台，支持用户在量子安全环境中进行资产交换。

打开 QDAY Testnet DEX 网址：[testnet-swap.qday.info](https://testnet-swap.qday.info/) 或  [testnet-swap.abelqday.io](https://testnet-swap.abelqday.io)。

### 1. 连接钱包

在开始交易之前，您需要连接之前创建的 MetaMask 钱包账户。

1. 点击页面右上角的 **“Connect to a wallet”** 按钮；
   ![连接钱包](/qday-testnet/swap/connect-wallet.png)<br>
2. 在列表中选择 MetaMask 钱包；
   ![选择 MetaMask](/qday-testnet/swap/select-metamask.png)<br>
3. 根据钱包的提示选择需要连接的钱包，再选择下一步并授权完成连接，示例中选择 Acount1 和 Acount2 两个测试账户。
   ![授权连接](/qday-testnet/swap/connect-authorize.png)

### 2. 选择交易对

在连接钱包后，在 “Swap” 选项卡中选择要交易的代币：

1. 在 **“From”** 部分，选择您要出售的代币，示例中选择默认代币：QDAY）。
   ![选择交易对](/qday-testnet/swap/select-pair.png)<br>
2. 在 **“To”** 部分，选择您要购买的代币。可以点击 "Select a token" 来浏览可用的代币列表。
   ![选择 token](/qday-testnet/swap/select-token.png)
   这里选择之前添加到 MetaMask 的 ERC20 token（pqUSD）

### 4. 输入交易金额

- 在您选择的 **“From”** 代币下方，输入您希望交易的数量。系统将自动计算您将获得的目标代币数量。
  ![输入交易金额](/qday-testnet/swap/input-qday-amount.png)

### 5. 查看交易信息
在输入交易金额后，您可以查看交易的详细信息，包括：
- 交易的最低价格
- 交易的汇率
- 手续费

### 6. 确认交易

当您确认交易信息无误后，您可以进行以下操作：

1. 点击 “Swap” 按钮；
2. 确认交易细节后点击 “Confim Swap” 按钮；
   ![确认交易](/qday-testnet/swap/confirm-swap.png)<br>
3. 在弹出的 MetaMask 钱包中点击 “Confirm” 按钮进行确认。
   ![确认交易](/qday-testnet/swap/metamask-confirm.png)

### 7. 查看交易状态

- 完成确认后，您可以在钱包中查看交易状态；
   ![查看交易状态](/qday-testnet/swap/metamask-dex-transaction-status.png)<br>
- 或者返回 DEX 点击右上角的钱包地址，在弹出的钱包详情中查看交易记录
   ![查看交易记录](/qday-testnet/swap/dex-transactions-list.png)

### 8. 提取流动性（可选）

在 DEX 页面中切换到 “Pool” 选项卡操作添加流动性。

1. 点击 “Add Liquidity” 按钮
   ![添加流动性](/qday-testnet/swap/add-liquidity.png)<br>
2. 添加代币对，第一栏选择 QDAY，第二栏选择 pqUSD。并输入您希望添加的金额，并确认流动性提供的细节，点击 “Approve pqUSD” 继续。
   ![输入代币金额](/qday-testnet/swap/input-liquidity-amount.png)<br>
3. 弹出 MetaMask 页面中确认 “Custom spending cap” 的 pqUSD 金额（默认可能会超过余额，适当改小数值），点击 “Confirm” 按钮进行确认。
   ![MetaMask 确认金额](/qday-testnet/swap/metamask-confirm-liquidity.png)<br>
4. 继续点击 “Appprove” 按钮进行确认，稍后完成流动性添加，查看交易状态和详情参考第 7 步。
   ![MetaMask 同意添加流动性](/qday-testnet/swap/metamask-approve-liquidity.png)

**注意**：测试币仅用于测试网环境，不具有实际价值。

## MetaMask 转账 ERC20 token (pqUSD)

- 步骤参考：[MetaMask 转账 QDAY](/zh/guide/qday-testnet/qday-faucet.html#metamask-转账-qday)
- 在第 3 步时，需要更改 “Asset:” 选项为 ERC20 token（pqUSD）。
  ![转账 pqUSD](/qday-testnet/swap/transaction-pqusd.png)

---

感谢您阅读 Qday Testnet 用户指引文档！我们希望本文能够帮助您更好地理解和使用 Qday 测试网。随着区块链技术的不断发展，Qday 致力于为用户提供量子安全、高效且可持续的去中心化交易体验。

请随时关注我们的官方网站和社区，以获取最新的更新和支持。如果您有任何问题或反馈，欢迎与我们联系！