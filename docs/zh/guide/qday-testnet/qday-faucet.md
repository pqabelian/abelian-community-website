---
outline: deep
---

# Qday Testnet 测试币

通过 Qday Testnet 水龙头或者 Discord 社区申请两种方式可以获取 QDAY 测试币。

## 获取 QDAY 测试币（水龙头）

- 访问 [Qday Testnet 水龙头](https://testnet-faucet.qday.info/) 页面；
  ![Qday Testnet 水龙头](/qday-testnet/qday-faucet/qday-faucet-page.png)<br>
- 点击 “CONNECT WALLET” 按钮，在弹出窗口中点击 “MetaMask” 按钮；
  ![连接钱包](/qday-testnet/qday-faucet/connect-wallet.png)<br>
- 在弹出的 MetaMask 扩展程序面板中选择需要连接的钱包 “Account1” 和 “Account2”，点击 “Next” 按钮进入授权页面，再点击 “Confirm” 按钮确认；
  ![选择连接 MetaMask 账户](/qday-testnet/qday-faucet/connect-metamask-accounts.png)<br>
- 点击 “CLAIM QDAY” 按钮，可获取 1 个 QDAY 测试币（示例使用的是 Account1 账户地址接收）;
  ![获取 Qday Testnet 测试币](/qday-testnet/qday-faucet/claim-qday.png)<br>
- MetaMask 弹出签名窗口，点击 “Sign” 按钮进行签名；
  ![MetaMask 签名](/qday-testnet/qday-faucet/metamask-sign.png)<br>
- 签名成功后，稍等一会 MetaMask 的 Account1 账户将到账 100 枚 QDAY 测试币，最多可领取10次，总计 1000 QDAY 测试币。
  ![QDAY 到账](/qday-testnet/qday-faucet/metamask-qday-balance.png)
  (此图余额为领取了两次的结果)

## 社区申请 QDAY 测试币流程

请加入 pqAbelian 官方 [Discord 频道](https://discord.gg/Rrb33mC3Kc)；并提交 Ticket 申请获取 QDAY 代币。

- 在频道左侧子频道菜单中最底部找到 “||SUPPORT||”，点击后面的 + 号，展开下级菜单点击 “Support-Ticket”，发起一个 Ticket；
  ![Discord 创建 Ticket](/qday-testnet/qday-faucet/discord-create-ticket.png)<br>
- 申请内容第一行为：`QDAY Testnet Faucet`；
- 之后的内容请描述您申请 QDAY 测试币的目的，如需测试大额测试代币，描述越详细越容易通过审核；
- 最后请留下 Qday Testnet 的 MetaMask 钱包地址（接收 QDAY 测试币）。

根据之前的创建 MetaMask 钱包账户示例，申请 QDAY 默认使用 “Account1” 的地址，QDAY 测试币到账后如图：
![Qday 余额](/qday-testnet/qday-faucet/qday-balance.png)

## MetaMask 转账 QDAY

本示例将帮助你使用 MetaMask 钱包在 QDAY Testnet 网络上进行 QDAY 代币的转账操作，请按照以下步骤进行操作：

**前提条件**

在开始之前，请确保你已经完成以下准备工作：

- 已安装 MetaMask 并创建了账户。
- 已添加 QDAY Testnet 到 MetaMask。
- 已获取了一些 QDAY 测试币。

如果你尚未完成上述步骤，请参考 [Qday 测试网用户指引](/zh/guide/qday-testnet/metamask) 前面关于 MetaMask 钱包的章节。

### 1. 打开 MetaMask

1. 点击浏览器右上角的 MetaMask 图标打开 MetaMask 扩展程序。
2. 确保你已经切换到 QDAY Testnet 网络。

### 2. 开始转账

- 确保 MetaMask 页面顶部中间的账户为 “Account1”，点击 “Send” 按钮；
   ![点击 Send 按钮](/qday-testnet/qday-faucet/transaction-send-qday.png)

### 3. 填写转账信息

- **填写接收地址**：在 “Send to” 字段中输入你要转账到的 QDAY 地址（这里直接选择 “Your accounts” 下面的 “Account2”）；
  ![填写接收地址](/qday-testnet/qday-faucet/transaction-send-to.png)<br>
- **填写转账数量**：在 “Amount:” 字段中输入你希望转账的 QDAY 数量。
  ![填写转账数量](/qday-testnet/qday-faucet/transaction-send-amount.png)
  （示例数量为 100）

### 4. 调整 Gas Fee（可选）

- 可以调整下面的 “Gas price (GWEI)” 和 “Gas limit” 费用。默认设置通常是合适的（不做改动）。

### 5. 确认转账信息

- 检查所有转账信息是否正确，包括收款地址和转账金额。
- 确认无误后，点击 “Next” 按钮。

### 6：提交转账

- 在弹出的确认窗口中，检查交易详情。
- 确认无误后，点击“Confirm”按钮提交转账。
  ![确认转账](/qday-testnet/qday-faucet/transaction-confirm.png)

### 7：查看交易状态

1. 转账提交后，你可以在 MetaMask 的 “Acivity” 标签页查看交易状态。
2. 点击这笔交易可以进入交易详情页，点击 “View on block explorer” 在 QDAY Testnet 区块浏览器上查看详细信息。
![查看交易状态](/qday-testnet/qday-faucet/transaction-status.png)

### 注意事项

- 请务必确认收款地址正确无误，以免资产损失。
- 确保你的账户中有足够的 QDAY 余额支付转账金额和 Gas Fee。
- 转账前请核实网络状态，避免在网络拥堵时进行大额转账。
