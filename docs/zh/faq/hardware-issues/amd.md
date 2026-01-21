---
outline: deep
---

# AMD（超微）顯示卡問題

## AMD 顯示卡硬體配置問題

### ABEL 所需要的 AMD 顯示卡最低配置是什麼型號？ <sup style="font-size: 0.6em;">`問題`</sup>

::: info <span style="font-size: 1.2em;">`解答`</span>
實際 ABEL 採礦過程中，隨著 4K 區塊高度成長相應的也會逐漸提高顯示卡顯存的佔用，當前 EPOCH 的計算公式為（單位位元組）：

`epoch no. = (height - 56000)/4000`

自 EPOCH 41 開始 6GB 顯示卡實測已經不適用於挖 ABEL，建議使用 8GB 顯示卡甚至更大顯存的顯示卡，其他方面並未作限制。
:::

---

### AMD 顯示卡挖礦時發生錯誤：“No OpenCL platforms found” <sup style="font-size: 0.6em;">`問題`</sup>
使用 AMD 顯示卡挖礦時，執行 abelminer 報錯日誌為：

```text
No OpenCL platforms found
Error: No usable mining devices found
```

::: info <span style="font-size: 1.2em;">`解答`</span>
出現這個問題通常是因為 abelminer 未找到 AMD 顯示卡的 OpenCL 驅動，在各平台嘗試以下方法解決：

**Windows**

> 1. 前往 [AMD 官方網站](https://www.amd.com/zh-cn/support/download/drivers.html) 選擇對應的作業系統與顯示卡型號下載並安裝驅動程式；
> 2. 在礦池網站下載 Windows 安裝程序，依照提示安裝完成後，在開始功能表中找到並執行 “Abelian GPU Mining Client” -> “AMD graphics card Fix” 來修復；
> 3. 執行桌面捷徑 Abelian GPU Mining Client（Abelminer_Launcher.exe）來執行挖礦程式。

**Linux**

> 1. 前往 [AMD 官方網站](https://www.amd.com/zh-cn/support/download/drivers.html) 選擇對應的作業系統與顯示卡型號下載並安裝驅動程式；
> 2. 閱讀礦池網站的用戶指引文件，使用礦池的助手腳本（abelminingscript.sh）來挖礦；
> 3. 如果自己是使用命令列執行 abelminer 挖礦，AMD 顯示卡則需要加上參數 "-G --cl-nobin"。

:::

---