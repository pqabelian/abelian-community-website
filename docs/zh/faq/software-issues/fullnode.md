---
outline: deep
---

# Abelian 全节点常见问题解答

## 全节点（ABEC）相关问题

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

---

### <Badge type="warning" text="QUESTION" /> 日志显示错误信息为："Database corruption detected"
```txt
ABEC: Version 0.12.6
ABEC: Loading block database from '/root/.abec/data/mainnet/blocks_ffldb'
ABDB: ***Database corruption detected***: metadata claims file 37, offset 176759509, but witness data is at file 0, offset 0
ABEC: metadata claims file 37, offset 176759509, but witness data is at file 0, offset 0
ABEC: Shutdown complete
```

::: info <Badge type="tip" text="ANSWER" />
这是 mainnet 数据库损坏。您需要删除 "/[用户目录]/.abec/data/mainnet/blocks_ffldb" 文件夹，然后重新同步。

请[查看此页面](/zh/downloads/fullnode-db)，按照步骤下载最新的主网数据，然后重新同步。
:::

---

### <Badge type="warning" text="QUESTION" /> 运行全节点（ABEC）有什么硬件要求？

::: info <Badge type="tip" text="ANSWER" />
全节点（ABEC）目前发布了几乎所有常用硬件平台的版本，硬件要求也没有太多限制，但同步和读取主网数据速度和存储空间大小有最低要求，储存空间不小于150GB，推荐使用 240G 的固态硬盘。
:::

---