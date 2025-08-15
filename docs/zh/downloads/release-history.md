---
outline: deep
---

<style>
.button-container {
  display: flex;
  gap: 8px; /* 确保有间距 */
}

.button-container .btn {
  display: inline-block;
  background-color: #007AFF;
  color: white !important; /* 使用 !important 确保颜色应用 */
  font-size: 16px !important; /* 同样使用 !important */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-family: Arial, sans-serif !important;
  padding: 10px 20px;
  border: 1px solid #666; /* 灰色边框 */
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none !important;
  transition: background-color 0.3s, transform 0.3s, font-weight 0.3s;
}

.button-container .btn:hover {
  background-color: #0056b3; /* 更深的蓝色 */
}
</style>

# Abelian 应用程序历史版本

::: warning 注意
我们提供以前版本的软件包主要用于存档目的。请**务必**在生产环境中使用最新版本。
:::

## Abelian Pro (Mobile)
`abelian-mobile-wallet-pro / info.abelian.walletpro`

- **2025-07-25-v3.0.0**

  - 现在可以使用USDT和USDC购买ABEL！
  - 优化交易历史缓存；
  - 修复了一些错误。

  [Android](https://download.abelian.info/release/android/abelian-mobile-wallet-pro-v3.0.0.apk) | 
  [iOS](https://download.abelian.info/release/ios/abelian-mobile-wallet-pro-v3.0.0.aab)

## 桌面钱包专业版 (MLP)
`abelian-desktop-wallet-pro`

- **2025-08-15-v1.1.0**

  - **UTXO 币合并**：我们在每个账户的状态主页上添加了“颗粒度等级”功能。该值显示您的账户中有多少个币（即 UTXO）。可以将其视为账户的颗粒度，从 0 到 1，越接近 1 表示账户中小额币越多；越接近 0 表示账户中币的数量较少且每个币的金额较大。<br>
    **为什么这很重要？** 因为交易输入的币（即 UTXO）数量有上限。伪隐私交易最多可以有 100 个币，而完全隐私交易最多只能有 5 个币。因此，如果您的账户中有很多币，即账户的颗粒度等级较高，您可能无法在一次交易中发送所有币。因此，我们为想要合并币的人引入了这个功能。此外，您可以通过鼠标悬停在粒度度旁边的圆圈“i”图标上查看您当前有多少个币。
  - **同步状态指示器**：在右上角的账户下拉菜单中，我们现在可以直接查看哪个账户正在同步。绿色表示正在同步，红色表示未同步。
  - **区块链同步时间估算**：同步不再是个谜——我们现在显示剩余时间估算（例如，“大约 30 分钟”）。通过清晰的倒计时更好地规划您的任务。
  - **改进的交易历史加载时间**：加载过去的交易现在几乎是瞬时的。无需再等待页面加载——几秒钟内即可查看您的活动或检查最近的转账。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.1.0.exe) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.1.0.dmg) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.1.0.dmg) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.1.0.deb) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.1.0.deb)

- **2025-04-23-v1.0.3**

  - 交易确认更快，一旦交易输出可用，就会被标记为可支配。
  - 优化可支配金额显示，在发送页面，输入框会精确显示可用金额，以便最大化后续转账，并新增“最大”按钮，在转账给一个收款人时可以自动计算并扣除交易费用。
  - 使用体验更友好直观，增加了更多提示信息。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.3.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.3.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.3.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.3.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.3.zip)

- **2025-03-02-v1.0.2**

  - 仅更新专用应用图标。
  
  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.2.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.2.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.2.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.2.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.2.zip)

- **2025-01-04-v1.0.1**

  - 支持多层隐私：<br>
    **a.** 完全私密地址：您的交易是加密且不可追踪的，钱包中的余额保持隐藏，确保最大程度的安全性和匿名性。<br>
    **b.** 匿名地址：隐私级别与比特币相当，即公开可见的币值和可追踪的交易，同时享受更低的手续费和更高的吞吐量。
  - 支持多个接收者：<br>
    **a.** 完全私密接收者：允许最多5个接收者，确保安全和私人交易。<br>
    **b.** 匿名接收者：允许最多100个接收者，其中最多50个为独特接收者，为较大规模交易提供灵活性。
  - 速度和存储显著提升：旧版原始桌面钱包Legacy需要用户花费数百小时甚至几天时间来同步整个 Abelian 区块链，并占用超过 100GB 存储空间。而这个全新的桌面钱包专业版（MLP）v1.0.0 仅需45分钟或更少时间（取决于网络速度和带宽）即可完成一次性同步，占用不到100MB存储空间。
  - 引入了 Memo 概念，使用户可以在后量子、不可变的 Abelian 账本上写消息。在 Abelian 上，我们首次可以将个人笔记永久写入账本。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.1.zip)

- **2024-12-19-v1.0.0**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-windows-amd64-v1.0.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-amd64-v1.0.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-macos-arm64-v1.0.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-amd64-v1.0.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-pro-linux-arm64-v1.0.0.zip)

## 桌面钱包经典版（Legacy）
`abelian-desktop-wallet / abelian-desktop-wallet-legacy`

- **2025-07-03-v4.4.1**
  - 启用自适应同步机制，适应不同网络环境；
  - 改进状态页面的同步时间估算；
  - 在交易页面添加余额变化颜色标识；
  - 账户选择中增加状态指示灯；
  - 限制账户数量至100个，优化多账户同步稳定性;
  - 此 Legacy 软件的正式名称是 “Abelian Wallet Legacy”。例如，如果您是 macOS 用户，您会在应用程序文件夹中找到这个软件名称为 “Abelian Wallet Legacy”，而不是旧版本的 “Abelian Wallet”。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.4.1.exe) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.4.1.dmg) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.4.1.dmg) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.4.1.deb) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.4.1.deb)

- **2025-06-04-v4.3.0**

  - macOS 变更为 DMG 安装程序；
  - 产品名称从 “Abelian Wallet” 更名为 “Abelian Wallet Legacy”；
  - 显示同步完成的预计时间，修复同步进度显示不一致的问题；
  - 更高效和优化的交易历史列表；
  - 支持一键迁移到 MLP 匿名地址（也称为半隐私地址）；
  - 对新手友好的钱包服务启动界面，清晰显示启动、停止和日志按钮；
  - UI/UX 优化：
    - 移除不必要的滚动条显示；
    - 在用户查看助记词时显示最大地址数（用于导入 Legacy 账户时填写恢复地址数），并支持输入主密码后按 Enter 键。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.3.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.3.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.3.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.3.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.3.0.zip)

- **2025-03-02-v4.2.2**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.2.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.2.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.2.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.2.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.2.zip)

- **2025-01-04-v4.2.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.1.zip)

- **2024-12-26-v4.2.0**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-windows-amd64-v4.2.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-amd64-v4.2.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-macos-arm64-v4.2.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-amd64-v4.2.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-legacy-linux-arm64-v4.2.0.zip)

- **2024-08-04-v4.1.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v4.1.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v4.1.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v4.1.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v4.1.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v4.1.1.zip)

- **2024-07-22-v4.0.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v4.0.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v4.0.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v4.0.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v4.0.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v4.0.1.zip)

- **2024-06-08-v4.0.0**
  - 支持硬分叉。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v4.0.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v4.0.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v4.0.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v4.0.0.zip)

- **2024-01-07-v0.3.2**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.3.2.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.3.2.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.3.2.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.3.2.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.3.2.zip)

- **2023-11-18-v0.3.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.3.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.3.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.3.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.3.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.3.1.zip)

- **2023-11-04-v0.3.0**
  - 同步速度提高了10倍至100倍。
  - 磁盘使用量减少了80%。

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.3.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.3.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.3.0.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.3.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.3.0.zip)

- **2023-08-12-v0.2.1**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.2.1.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.2.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.2.1.zip) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.2.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-arm64-v0.2.1.zip)

- **2023-07-11-v0.2.0**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.2.0.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.2.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.2.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.2.0.tar.gz)

- **2023-06-02-v0.1.3**

  [Windows](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-windows-amd64-v0.1.3.zip) | 
  [macOS](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-amd64-v0.1.3.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-macos-arm64-v0.1.3.tar.gz) | 
  [Linux](https://download.abelian.info/release/abelwallet-desktop/abelian-desktop-wallet-linux-amd64-v0.1.3.tar.gz)

## Abelian 节点（abec）
`[abec]`

- **2025-07-03-v2.0.2**
  - 添加 400,000 高度的检查点（哈希值：73a434b741b357e37587b1b0a39c0ef65832d403bfd4d91eb11d9d805c568022）

  [Windows](https://download.pqabelian.io/release/abec/abec-windows-amd64-v2.0.2.zip) | 
  [macOS](https://download.pqabelian.io/release/abec/abec-macos-amd64-v2.0.2.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abec/abec-macos-arm64-v2.0.2.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abec/abec-linux-amd64-v2.0.2.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abec/abec-linux-arm64-v2.0.2.tar.gz)

- **2025-04-02-v2.0.1**
  - 启用更新的代币释放计划
  - 添加 300000、340000、360000 高度的检查点

  [Windows](https://download.pqabelian.io/release/abec/abec-windows-amd64-v2.0.1.zip) | 
  [macOS](https://download.pqabelian.io/release/abec/abec-macos-amd64-v2.0.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abec/abec-macos-arm64-v2.0.1.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abec/abec-linux-amd64-v2.0.1.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abec/abec-linux-arm64-v2.0.1.tar.gz)

- **2024-07-14-v1.0.0**
  - 针对 MLPAUT 的硬分叉：多级隐私（MLP）与 Abelian 用户令牌（AUT）将在高度 300000 启用。
  - 高度 340000 之后，版本 1 的交易不再被打包进区块中。

  [Windows](https://download.pqabelian.io/release/abec/abec-windows-amd64-v1.0.0.zip) | 
  [macOS](https://download.pqabelian.io/release/abec/abec-macos-amd64-v1.0.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abec/abec-macos-arm64-v1.0.0.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abec/abec-linux-amd64-v1.0.0.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abec/abec-linux-arm64-v1.0.0.tar.gz)

- **2024-05-28-v0.13.0**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.13.0.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.13.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.13.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.13.0.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.13.0.tar.gz)

- **2023-11-19-v0.12.3**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.12.3.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.12.3.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.12.3.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.12.3.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.12.3.tar.gz)

- **2023-09-15-v0.11.13**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.13.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.13.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.13.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.13.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.11.13.tar.gz)

- **2023-08-12-v0.11.12**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.12.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.12.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.12.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.12.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.11.12.tar.gz)

- **2023-06-02-v0.11.10**
  - 已启用同步大于32MB的区块。

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.10.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.10.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.10.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.10.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/abec/abec-linux-arm64-v0.11.10.tar.gz)

- **2023-05-17-v0.11.9**
  - 优化 RPC 响应格式。

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.9.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.9.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.9.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.9.tar.gz)

- **2022-11-18-v0.11.5-b**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.5.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.5.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.5.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.5.tar.gz)

- **2022-09-08-v0.11.1**

  [Windows](https://download.abelian.info/release/abec/abec-windows-amd64-v0.11.1.zip) | 
  [macOS](https://download.abelian.info/release/abec/abec-macos-amd64-v0.11.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abec/abec-macos-arm64-v0.11.1.tar.gz) | 
  [Linux](https://download.abelian.info/release/abec/abec-linux-amd64-v0.11.1.tar.gz)

## GPU 挖矿客户端
`abelminer`

- **2023-05-31-v2.0.3**

  [Windows](https://download.abelian.info/release/pool/abelminer-windows-amd64-v2.0.3.zip) | 
  [Linux](https://download.abelian.info/release/pool/abelminer-linux-amd64-v2.0.3.tar.gz)

- **2023-05-17-v2.0.2**

  [Windows](https://download.abelian.info/release/pool/abelminer-windows-amd64-v2.0.2.zip) | 
  [Linux](https://download.abelian.info/release/pool/abelminer-linux-amd64-v2.0.2.tar.gz)

- **2023-03-03-v2.0.1b**

  [Linux](https://download.abelian.info/release/pool/abelminer-linux-amd64-v2.0.1.b.tar.gz)

## CPU 挖矿客户端
`abe-miningpool-client`/`abelminer-cpu`

- **2025-07-18-v0.13.2**

  [Windows](https://download.abelian.info/release/pool/abelminer-cpu-windows-amd64-v0.13.2.zip) | 
  [macOS](https://download.abelian.info/release/pool/abelminer-cpu-macos-amd64-v0.13.2.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abelminer-cpu-macos-arm64-v0.13.2.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abelminer-cpu-linux-amd64-v0.13.2.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/pool/abelminer-cpu-linux-arm64-v0.13.2.tar.gz)

- **2024-05-28-v0.13.0**

  [Windows](https://download.abelian.info/release/pool/abe-miningpool-client-windows-amd64-v0.13.0.zip) | 
  [macOS](https://download.abelian.info/release/pool/abe-miningpool-client-macos-amd64-v0.13.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abe-miningpool-client-macos-arm64-v0.13.0.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abe-miningpool-client-linux-amd64-v0.13.0.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/pool/abe-miningpool-client-linux-arm64-v0.13.0.tar.gz)

- **2023-06-24-v0.11.7**
  - 增强功能：更好的认证用户体验和一些小的错误修复。

  [Windows](https://download.abelian.info/release/pool/abe-miningpool-client-windows-amd64-v0.11.7.zip) | 
  [macOS](https://download.abelian.info/release/pool/abe-miningpool-client-macos-amd64-v0.11.7.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abe-miningpool-client-macos-arm64-v0.11.7.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abe-miningpool-client-linux-amd64-v0.11.7.tar.gz) | 
  [Linux (ARM)](https://download.abelian.info/release/pool/abe-miningpool-client-linux-arm64-v0.11.7.tar.gz)

- **2022-11-25-v0.11.5**

  [Windows](https://download.abelian.info/release/pool/abe-miningpool-client-windows-amd64-v0.11.5.zip) | 
  [macOS](https://download.abelian.info/release/pool/abe-miningpool-client-macos-amd64-v0.11.5.tar.gz) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/pool/abe-miningpool-client-macos-arm64-v0.11.5.tar.gz) | 
  [Linux](https://download.abelian.info/release/pool/abe-miningpool-client-linux-amd64-v0.11.5.tar.gz)

## 多层隐私钱包 (CLI)
`abewalletmlp`

- **2024-12-19-v2.0.0**

  [Windows](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v2.0.0.zip) | 
  [macOS](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v2.0.0.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v2.0.0.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v2.0.0.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v2.0.0.tar.gz)

- **2024-08-13-v1.0.1**

  [Windows](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-windows-amd64-v1.0.1.zip) | 
  [macOS](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-amd64-v1.0.1.tar.gz) | 
  [macOS (Apple silicon)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-macos-arm64-v1.0.1.tar.gz) | 
  [Linux](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-amd64-v1.0.1.tar.gz) | 
  [Linux (ARM)](https://download.pqabelian.io/release/abewalletmlp/abewalletmlp-linux-arm64-v1.0.1.tar.gz)

## 经典钱包 (CLI)
`abewallet / abewalletlegacy`

- **2024-08-04-v1.0.0**
  - 支持硬分叉。

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v1.0.0.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v1.0.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v1.0.0.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v1.0.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v1.0.0.zip)

- **2024-07-14-v0.13.9**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.13.9.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.13.9.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.13.9.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.13.9.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.13.9.zip)

- **2024-06-03-v0.13.1**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.13.1.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.13.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.13.1.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.13.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.13.1.zip)

- **2024-05-28-v0.13.0**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.13.0.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.13.0.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.13.0.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.13.0.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.13.0.zip)

- **2024-05-16-v0.12.8**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.12.8.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.12.8.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.12.8.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.12.8.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.12.8.zip)

- **2023-12-12-v0.12.5**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.12.5.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.12.5.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.12.5.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.12.5.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.12.5.zip)

- **2023-11-19-v0.12.3**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.12.3.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.12.3.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.12.3.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.12.3.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.12.3.zip)

- **2023-09-15-v0.11.13**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.13.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.13.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.13.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.13.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.13.zip)

- **2023-08-12-v0.11.12**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.12.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.12.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.12.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.12.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.12.zip)

- **2023-06-02-v0.11.10**
  - 修复了一些已知的错误。

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.10.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.10.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.10.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.10.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.10.zip)

- **2023-05-17-v0.11.9**
  - 优化 RPC 响应格式。

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.9.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.9.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.9.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.9.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.9.zip)

- **2022-11-18-v0.11.5-b**
  - 新增API：查询当前生成的钱包地址总数；命令从 addressnumber 更改为 addressmaxsequencenumber。
  - 改进的 API：批量生成多个地址。
  - 新增了 abewalletctl 工具，可以直接访问钱包，而不是使用 abectl。
  - 修复了已知错误。
  - 支持在交易状态发生变化时通过 websocket 进行通知。

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.5-b.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.5-b.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.5-b.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.5-b.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.5-b.zip)

- **2022-09-08-v0.11.1**

  [Windows](https://download.abelian.info/release/abewallet/abewalletlegacy-windows-amd64-v0.11.1.zip) | 
  [macOS](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-amd64-v0.11.1.zip) | 
  [macOS (Apple silicon)](https://download.abelian.info/release/abewallet/abewalletlegacy-macos-arm64-v0.11.1.zip) | 
  [Linux](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-amd64-v0.11.1.zip) | 
  [Linux (ARM)](https://download.abelian.info/release/abewallet/abewalletlegacy-linux-arm64-v0.11.1.zip)

## 移动钱包 (经典版)

- **2024-01-16-v1.02** <Badge type="danger" text="停止维护" />

  [iOS](https://apps.apple.com/us/app/abelian/id6472198380) | 
  [Android](https://play.google.com/store/apps/details?id=info.abelian.wallet) | 
  [APK](https://download.abelian.info/release/android/abelian-mobile-wallet-v1.0.2.apk)

## Abelian 手册

用户和开发者都可以在 [Abelian 社区文档](/guide/get-started) 网站找到更多文档。

- [Abelian 应用程序常识](/guide/index)
- [Abelian 桌面钱包专业版手册](/guide/wallet/desktop-wallet-pro)
- [Abelian 桌面钱包 (经典版) 手册](/guide/wallet/desktop-wallet-legacy)
- [Abelian 显卡挖矿手册](/guide/mining/gpu-pool)
- [Abelian 节点 (abec) 手册](/guide/abelian-node)
- [Abelian 多层隐私钱包 (CLI) 手册](/guide/wallet/cli-wallet-mlp)
- [Abelian 经典钱包 (CLI) 手册](/guide/wallet/cli-wallet-legacy)