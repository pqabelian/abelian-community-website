---
outline: deep
---

# Qday Testnet DApp 使用指南

打开 Qday Testnet 质押服务网址：[Qday Staking](https://testnet-defi.qday.info/QdayStaking) 或 [Qday Staking 2](https://testnet-defi.abelqday.io/QdayStaking)。

## 质押页面各栏说明

### 1. 汇总

在汇总部分，您将看到您的质押信息和全网质押情况。以下是您需要关注的内容：
![Qday 质押页面汇总](/qday-testnet/dapp/qday-staking-summary.png)

- **全网质押 veQday**：显示全网用户当前质押的 veQday 总量。
- **我的锁仓 wAbel**：显示您当前锁仓的 wAbel 数量。
- **我的质押 veQday**：显示您目前质押的 veQday 数量。
- **待提现奖金**：表示您当前待提现的奖励。
- **提现奖励**：可用于提取的奖励数量。
- **我的 wAbel**：显示您拥有的 wAbel 数量（在 ABEL 质押兑换 wAbel 的数量会在此项显示）。
- **我的 veQday**：显示您当前拥有的 veQday 数量。
- **我的收益**：显示您在质押过程中获得的收益。
- **全网总收益**：显示全网用户的总收益。
- **我的余额**：显示您账户中剩余的 QDAY 数量。

### 2. VeQDay

在 VeQDay 部分，您可以进行以下操作：
![Qday 质押页面 VeQDay](/qday-testnet/dapp/qday-staking-veqday.png)

- **授权**：在此您需要进行授权操作，以允许系统使用您的 QDAY 进行质押。
- **QDay 质押**：选择您希望质押的 QDAY 数量，输入后确认质押操作。
- **解除质押**：如果您需要解除已质押的 QDAY，请在此输入您希望解除的数量，并确认操作。
- **兑换 VeQday**：此选项允许您将 QDAY 兑换为 veQday，请按照系统提示进行操作。

### 3. WAbel

在 WAbel 部分，您可以查看和管理您的 wAbel：

- **金额**：您操作的 wAbel 数量。
- **到期日期**：显示 wAbel 的到期日期。若无数据，表示您当前没有有效的 wAbel 记录。

## 操作示例

### 1. Qday 质押

- 输入质押 Qday 数量，点击 “Qday 质押” 按钮；
  ![veQday 质押](/qday-testnet/dapp/qday-staking-input-qday.png)
- Metamask 弹窗提示质押操作，点击 “Comfirm” 进行质押。
  ![Metamask 确认质押](/qday-testnet/dapp/metamask-confirm-qday-staking.png)
- 成功质押后，您将在 “汇总” 部分的 “我的质押veQday” 下看到质押的 veQday 金额。

### 2. 兑换 veQday

- 输入兑换 veQDAY 数量，点击 “兑换 VeQday” 按钮；
  ![veQday 兑换](/qday-testnet/dapp/qday-staking-exchange-veqday.png)
- Metamask 弹窗提示兑换操作，点击 “Comfirm” 进行兑换。
  ![Metamask 确认兑换](/qday-testnet/dapp/metamask-confirm-veqday-exchange.png)
- 成功兑换后，您将在 “汇总” 部分的 “我的 VeQday” 下看到兑换的 veQDAY 金额。

### 3. 授权质押

- 输入授权质押 veQday 数量，点击 “授权” 按钮；
  ![veQday 授权质押](/qday-testnet/dapp/qday-staking-input-authorized-veqday.png)
- MetaMask 弹窗提示授权操作，修改 “Custom spending cap” 栏的数值（点击 MAX 即为授权质押的数值），点击 “Next” 进入下一步；
  ![Metamask 确认授权](/qday-testnet/dapp/metamask-confirm-authorized-veqday1.png)
- 继续点击 “Approve” 按钮进行授权，完成授权质押操作；
  ![Metamask 同意授权](/qday-testnet/dapp/metamask-confirm-authorized-veqday2.png)
- 成功授权后，您将在 “汇总” 部分的 “我的veQday” 下看到授权的 veQday 金额。


### 3. weQday 质押

- 在授权质押操作后，相同位置的输入框中输入质押 weQday 数量，点击 “weQday 质押” 按钮；
  ![weQday 质押](/qday-testnet/dapp/qday-staking-input-weqday.png)
- MetaMask 弹窗提示质押操作，点击 “Comfirm” 进行质押;
  ![Metamask 确认质押](/qday-testnet/dapp/metamask-confirm-weqday-staking.png)
- 成功质押后，您将在 “汇总” 部分的 “我的质押weQday” 下看到质押的 weQday 金额。

### 4. 解除质押

- 输入解除质押 veQday 数量，点击 “解除质押” 按钮；
  ![veQday 解除质押](/qday-testnet/dapp/qday-staking-input-unStaking.png)
- MetaMask 弹窗提示解除质押操作，点击 “Comfirm” 进行解除质押。
  ![Metamask 确认解除质押](/qday-testnet/dapp/metamask-confirm-unStaking.png)
- 成功解除质押后，您将在 “汇总” 部分的 “我的质押veQday” 下将减去解除质押的 veQday 金额。