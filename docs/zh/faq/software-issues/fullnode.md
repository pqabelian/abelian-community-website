---
outline: deep
---

# Abelian 全节点常见问题解答

## ABEC 相关问题

### <Badge type="warning" text="QUESTION" /> 如何将 mainnet 数据移至另一个位置？

::: info <Badge type="tip" text="ANSWER" />
要更改文件夹，您可以尝试以下方法（仅适用于Windows）

1. 关闭桌面钱包
2. 系统属性 -> 高级 -> 环境变量 -> 新建/系统环境变量

变量名: ABELWALLET_HOME

变量值: （选择一个文件夹路径）

3. 将以下文件从 C:\Users\\[用户名]\AppData\Roaming\Abelian Wallet 路径移动到新路径
包含 Abec, Abewallet, ans cache. json, config. json, state.json

4. 重新启动系统
:::