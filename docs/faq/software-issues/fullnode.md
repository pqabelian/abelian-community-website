---
outline: deep
---

# Abelian Full Node FAQ

## ABEC Issues

### <Badge type="warning" text="QUESTION" /> How to move mainnet data to another location?

::: info <Badge type="tip" text="ANSWER" />
To change the folder, you can try this method (Windows only)

1 Close desktop wallet

2 System Properties ->Advanced ->Environment Variables ->New User/System Environment Variables

Variable name: ABELWALLET_HOME

Variable value: (Select a folder path)

3 Move the following files from the 
C:\Users\\[username]\AppData\Roaming\Abelian Wallet path to a new path

Abec, Abewallet, ans cache. json, config. json, state.json

4 Restart the system
:::