---
outline: deep
---

# QDay Testnet 质押服务指南

打开 QDay Testnet 质押服务网址：[QDay Staking](https://testnet-defi.qday.info/QDayStaking) 或 [QDay Staking 2](https://testnet-defi.abelqday.io/QDayStaking)。

## 连接钱包

- 点击 QDay Testnet 质押页面右上角的 “Connect” 按钮，选择 MetaMask 开始连接；
  ![QDay 质押页面连接 MetaMask](/qday-testnet/abel-faucet/connect-metamask-wallet1.png)<br>
- 在弹出的 MetaMask 窗口中选择需要连接的 MetaMask 钱包账户，点击 “Next” 按钮，在授权页中点击 “Confirm” 按钮；
  ![MetaMask 确认连接钱包](/qday-testnet/abel-faucet/connect-metamask-wallet2.png)<br>
- QDay Testnet 质押页面右上角将显示已连接的钱包地址，现在可以继续进行质押操作了。
  ![QDay 质押页面已连接 MetaMask](/qday-testnet/abel-faucet/connect-metamask-wallet3.png)

## 质押页面各栏说明

### 1. 汇总

在汇总部分，您将看到您的质押信息和全网质押情况。以下是您需要关注的内容：
![QDay 质押页面汇总](/qday-testnet/dapp/qday-staking-summary.png)

- **全网质押 veQDay**：显示全网用户当前质押的 veQDay 总量。
- **我的锁仓 wAbel**：显示您当前锁仓的 wAbel 数量。
- **我的质押 veQDay**：显示您目前质押的 veQDay 数量。
- **待提现奖金**：表示您当前待提现的奖励。
- **提现奖励**：可用于提取的奖励数量。
- **我的 wAbel**：显示您拥有的 wAbel 数量（在 ABEL 质押兑换 wAbel 的数量会在此项显示）。
- **我的 veQDay**：显示您当前拥有的 veQDay 数量。
- **我的收益**：显示您在质押过程中获得的收益。
- **全网总收益**：显示全网用户的总收益。
- **我的余额**：显示您账户中剩余的 QDAY 数量。

### 2. VeQDay

在 VeQDay 部分，您可以进行以下操作：
![QDay 质押页面 VeQDay](/qday-testnet/dapp/qday-staking-veqday.png)

- **授权**：在此您需要进行授权操作，以允许系统使用您的 QDAY 进行质押。
- **QDay质押**：选择您希望质押的 QDAY 数量，输入后确认质押操作。
- **解除质押**：如果您需要解除已质押的 QDAY，请在此输入您希望解除的数量，并确认操作。
- **兑换 VeQDay**：此选项允许您将 QDAY 兑换为 veQDay，请按照系统提示进行操作。

### 3. WAbel

在 WAbel 部分，您可以查看和管理您的 wAbel：

- **金额**：您操作的 wAbel 数量。
- **到期日期**：显示 wAbel 的到期日期。若无数据，表示您当前没有有效的 wAbel 记录。

## QDay 质押操作示例

### 1. QDay 质押

- 输入质押 QDay 数量，点击 “QDay质押” 按钮；
  ![veQDay 质押](/qday-testnet/dapp/qday-staking-input-qday.png)<br>
- Metamask 弹窗提示质押操作，点击 “Comfirm” 进行质押。
  ![Metamask 确认质押](/qday-testnet/dapp/metamask-confirm-qday-staking.png)<br>
- 成功质押后，您将在 “汇总” 部分的 “我的质押veQDay” 下看到质押的 veQDay 金额。

### 2. 兑换 veQDay

- 输入兑换 veQDAY 数量，点击 “兑换 VeQDay” 按钮；
  ![veQDay 兑换](/qday-testnet/dapp/qday-staking-exchange-veqday.png)<br>
- Metamask 弹窗提示兑换操作，点击 “Comfirm” 进行兑换。
  ![Metamask 确认兑换](/qday-testnet/dapp/metamask-confirm-veqday-exchange.png)<br>
- 成功兑换后，您将在 “汇总” 部分的 “我的 VeQDay” 下看到兑换的 veQDAY 金额。

### 3. 授权质押

- 输入授权质押 veQDay 数量，点击 “授权” 按钮；
  ![veQDay 授权质押](/qday-testnet/dapp/qday-staking-input-authorized-veqday.png)<br>
- MetaMask 弹窗提示授权操作，修改 “Custom spending cap” 栏的数值（点击 MAX 即为授权质押的数值），点击 “Next” 进入下一步；
  ![Metamask 确认授权](/qday-testnet/dapp/metamask-confirm-authorized-veqday1.png)<br>
- 继续点击 “Approve” 按钮进行授权，完成授权质押操作；
  ![Metamask 同意授权](/qday-testnet/dapp/metamask-confirm-authorized-veqday2.png)<br>
- 成功授权后，您将在 “汇总” 部分的 “我的veQDay” 下看到授权的 veQDay 金额。


### 3. weQDay 质押

- 在授权质押操作后，相同位置的输入框中输入质押 weQDay 数量，点击 “weQDay质押” 按钮；
  ![weQDay 质押](/qday-testnet/dapp/qday-staking-input-weqday.png)<br>
- MetaMask 弹窗提示质押操作，点击 “Comfirm” 进行质押;
  ![Metamask 确认质押](/qday-testnet/dapp/metamask-confirm-weqday-staking.png)<br>
- 成功质押后，您将在 “汇总” 部分的 “我的质押weQDay” 下看到质押的 weQDay 金额。

### 4. 解除质押

- 输入解除质押 veQDay 数量，点击 “解除质押” 按钮；
  ![veQDay 解除质押](/qday-testnet/dapp/qday-staking-input-unStaking.png)<br>
- MetaMask 弹窗提示解除质押操作，点击 “Comfirm” 进行解除质押。
  ![Metamask 确认解除质押](/qday-testnet/dapp/metamask-confirm-unStaking.png)<br>
- 成功解除质押后，您将在 “汇总” 部分的 “我的质押veQDay” 下将减去解除质押的 veQDay 金额。

### 5. 提取奖励

(功能正在开发中，待补充)