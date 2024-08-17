---
outline: deep
---

# 1. MetaMask 钱包账户用户指引

## 下载 MetaMask 扩展程序

1. 打开浏览器，访问 [MetaMask 官网](https://metamask.io/)。

2. 选择适合你浏览器的扩展程序并安装：

   - 对于 Chrome 浏览器，点击 “[Install MetaMask for Chrome](https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn)”。
   ![Chrome 浏览器安装 MetaMask 扩展程序](/qday-testnet/metamask/chrome-metamask-install.png)<br>
   - 对于 Firefox 浏览器，点击 “[Install MetaMask for Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/ether-metamask/)”。
   ![Firefox 浏览器安装 MetaMask 扩展程序](/qday-testnet/metamask/firefox-metamask-install.png)<br>
   - 对于 Microsoft Edge 浏览器，点击 “[Install MetaMask for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm)”。
   ![Microsoft Edge 浏览器安装 MetaMask 扩展程序](/qday-testnet/metamask/edge-metamask-install.png)<br>
3. 点击添加扩展程序后会弹出 MetaMask 安装页面，点击 “Add Extension” 或 “Install”。
   ![MetaMask 安装页面](/qday-testnet/metamask/add-to-edge.png)
4. 安装完成后，会打开一个 MetaMask 设置页面，或者点击浏览器右上角的扩展图标，在下拉菜单中选择 MetaMask 图标，开始设置。
   ![MetaMask 扩展程序图标位置](/qday-testnet/metamask/metamask-display-icon.png)
   （可以通过点击 “在工具栏中显示” 将 MetaMask 图标直接显示到工具栏中）

## 创建 MetaMask 钱包账户

1. 在 MetaMask 扩展程序设置页面，勾选 “我同意MetaMask的使用条款”，然后点击 “创建新钱包”（测试网不建议导入旧的钱包）；
   ![创建 MetaMask 钱包](/qday-testnet/metamask/create-metamask-wallet.png)
2. 在授权页面点击 “我同意” 继续；
3. 在创建密码页面，设置一个强密码，勾选 “我明白 MetaMask 无法为我恢复此密码。” 后点击 “创建新钱包”；
   ![设置 MetaMask 密码](/qday-testnet/metamask/set-metamask-password.png)
4. 在安全钱包页面，点击 “保护我的钱包（推荐）” 复制12个单词的助记词备份到本地（非常重要！），并妥善保管。完成后点击 “下一步”；
   ![备份 MetaMask 助记词](/qday-testnet/metamask/backup-metamask-mnemonic.png)
5. 在确认私钥助记词页面，按照提示的顺序填写空缺的单词来验证你的助记词，点击 “确认” 完成账户创建；
   ![验证 MetaMask 助记词](/qday-testnet/metamask/verify-metamask-mnemonic.png)
6. 按照上面的创建步骤创建完成后，点击工具栏中的 MetaMask 图标，在弹出窗口中，点击顶部中间的 “Account1” 后的下拉图标进入账户列表，点击 “Add account or hardware wallet” 再创建一个新账户;
   ![添加 MetaMask 账户](/qday-testnet/metamask/add-metamask-account.png)
7. 在添加账户页面，选择 “Add a new account” 创建新账户；
   ![添加 MetaMask 账户](/qday-testnet/metamask/add-new-metamask-account.png)
8. 输入账户名称，这里示例账户命名 “Account2”，点击 “创建” 完成创建新账户，两个账户可以在账户列表中切换。
   ![输入 MetaMask 账户名称](/qday-testnet/metamask/input-metamask-account.png)
9. 创建完成后，同样需要备份一次 Account2 的私钥，点击右侧三点的菜单图标，选择 “账户详情”；
   ![MetaMask 账户详情](/qday-testnet/metamask/metamask-account-detail.png)
10. 在账户详情页面，点击 “显示私钥” 按钮，输入密码，点击 “按住以显示私钥” ，之后会显示私钥，复制私钥字符串到本地完成备份（非常重要！），并妥善保管。
   ![MetaMask 账户显示私钥](/qday-testnet/metamask/metamask-account-privatekey1.png)
   ![MetaMask 备份私钥](/qday-testnet/metamask/metamask-account-privatekey2.png)

**注意**：助记词和私钥是你钱包账户的唯一备份，务必妥善保管，不要与他人分享。

## 添加 Qday Testnet 到 MetaMask

### 自动添加 Qday Testnet 至 MetaMask 网络列表
(区块链浏览器自动添加 Qday Testnet 至 MetaMask 网络功能稍后推出)

### 手动添加 Qday Testnet 到 MetaMask 网络列表

1. 打开 MetaMask，点击左上角的网络列表选择器（默认显示 “Ethereum Mainnet”），选择 “显示测试网络” ，然后点击 “添加网络” 按钮；
   ![MetaMask 添加网络](/qday-testnet/metamask/add-metamask-network1.png)
2. 在弹出的添加网络页面页面中，点击页面底部的 “手动添加网络”；
   ![手动添加 Qday Testnet 网络](/qday-testnet/metamask/add-metamask-network2.png)
3. 在手动添加网络页面，填写以下信息：
   - **网络名称**: Qday Testnet
   - **新的 RPC URL**: `https://testnet-rpc-00.qday.info` 或 `https://testnet-rpc-01.qday.info`
   - **链 ID**: 1001
   - **货币符号**: QDAY
   - **区块浏览器 URL（可选）**: `https://testnet-explorer.qday.info`
   ![手动添加 Qday Testnet 网络](/qday-testnet/metamask/add-metamask-network3.png)
   点击 “保存” 按钮完成添加。
4. 在 “网络添加成功！” 提示框中点击 “切换至 Qday Testnet”，或者在 MetaMask 左上角的网络列表选择器中选择并切换到 “Qday Testnet”。
   ![MetaMask 切换 Qday Testnet 网络](/qday-testnet/metamask/switch-metamask-qday-testnet-network.png)

## 获取钱包地址

在浏览器工具栏中点击 MetaMask 扩展程序图标，弹出窗口中点击顶部中间的 “Account1” 地址后面的复制图标，并保存到本地（后续操作需要用到）。
![获取 MetaMask 钱包地址](/qday-testnet/metamask/get-metamask-address.png)

## 添加 Qday ERC20 token（pqUSD）到 MetaMask

1. 在浏览器工具栏中点击 MetaMask 扩展程序图标，在主界面的 “Tokens” 标签页中点击 “Import tokens”；
   ![MetaMask 导入 Token](/qday-testnet/metamask/import-tokens1.png)
2. 在 “Import tokens” 页面的 “Token contract address” 栏中输入 pqUSD Token 地址：`0x5571c9263450a1c50586ac91d3B841C71eCe5281`;
   ![MetaMask 导入 pqUSD Token](/qday-testnet/metamask/import-tokens2.png)
3. 稍等一会会自动加载 pqUSD Token 的信息（Token symbol 和 Token decimal），点击 “Next” 按钮完成导入。
4. MetaMask 主界面的 Tokens 标签页可以看到已经显示了 pqUSD Token 的余额。
   ![MetaMask pqUSD Token](/qday-testnet/metamask/pqusd-tokens.png)
