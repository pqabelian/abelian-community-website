---
outline: deep
---

# Abelian Node FAQ

## Abelian Node (Abec) Related Issues

### <Badge type="warning" text="QUESTION" /> What types of Abelian Node (Abec)?

::: info <Badge type="tip" text="ANSWER" />
Abelian Node (Abec) have the following 3 types:
- **Abelian Full Node**: Stores and verifies all blockchain data since the genesis block, requiring the most storage space.
- **Abelian SemiFull Node**: Optimized storage structure, retains complete data after the most recent checkpoint, with high verification capability.
- **Abelian Standard Node**: Further reduces storage space, only stores complete data from retention blocks, suitable for resource-limited environments.
:::

### <Badge type="warning" text="QUESTION" /> How to move the Standard Node data of desktop wallet (Legacy) to another location?

::: info <Badge type="tip" text="ANSWER" />
To change the folder, you can try this method (Windows only)

1. Close desktop wallet
2. System Properties ->Advanced ->Environment Variables ->New User/System Environment Variables
    Variable name: ABELWALLET_HOME
    Variable value: (Select a folder path)
3. Move the following files from C:\Users\\[username]\AppData\Roaming\Abelian Wallet path to a new path, including Abec, Abewallet, anscache.json, config.json, state.json
4. Restart the system
:::

---

### <Badge type="warning" text="QUESTION" /> The error log is: "Database corruption detected"
```txt
ABEC: Version 0.12.6
ABEC: Loading block database from '/root/.abec/data/mainnet/blocks_ffldb'
ABDB: ***Database corruption detected***: metadata claims file 37, offset 176759509, but witness data is at file 0, offset 0
ABEC: metadata claims file 37, offset 176759509, but witness data is at file 0, offset 0
ABEC: Shutdown complete
```

::: info <Badge type="tip" text="ANSWER" />
This is mainnet database corruption. You need to delete the "/[user_home_dir]/.abec/data/mainnet/blocks_ffldb" folder, and then resync again.

Please [view this page](/downloads/fullnode-db) and follow the steps to download the latest Abelian Normal Node and SemiFull Node mainnet data, then resync again.
:::

---

### <Badge type="warning" text="QUESTION" /> What are the hardware requirements for running a Normal Node (Abec)?

::: info <Badge type="tip" text="ANSWER" />
Abelian Normal Node (`Abec`) has currently released versions for almost all commonly used hardware platforms, with minimal hardware requirements. However, there are minimum requirements for the speed of synchronizing and reading mainnet data as well as storage space size. The storage space should be no less than 180GB, and it is recommended to use a 240GB solid-state drive.
:::

---