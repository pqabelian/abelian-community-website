# Abelian 區塊鏈 Java SDK

Abelian Java SDK 是一個允許開發者與 Abelian 區塊鏈進行互動的函式庫。它提供了一種簡單的方式連接到 Abelian 網路、查詢區塊鏈的狀態、解碼受管理帳戶的隱私保護資料，並傳送交易。

## 1. 系統需求
Abelian Java SDK 支持以下平台：
- Linux x86
- Linux arm64
- MacOS x86
- MacOS arm64 (Apple Silicon)

系統需求如下：
- Java 8 或更高版本
- OpenSSL 1.1.1 或最新版本（仅限 Linux）

在 macOS x86/arm86 平台上，SDK 仅要求安装 Java 8 或更高版本。在 Linux 平台上，SDK 还要求安装 OpenSSL 3 或更高版本。

## 2. 開始使用 SDK 示範

在您將 SDK 應用到自己的專案之前，您可以嘗試 SDK 示範以了解 SDK 的工作方式。SDK 示範被打包為一個獨立的套件，包含了所有 jar 相依項目。您可以從此儲存庫的 [發佈頁面](https://github.com/pqabelian/abelian-sdk-java/releases) 下載示範套件 `abel4j-demo-x.y.z.zip`。

請參閱文件 [*透過示範了解 Abelian Java SDK*](/tw/apis/java-sdk/demo) 以取得更多詳細資訊。

## 3. 在您的專案中使用 SDK

在您的專案中使用 Abelian Java SDK，您需要將單個 JAR 檔案 `abel4j-x.y.z.jar` 及其所需的相依項目添加到您的專案中。SDK JAR 檔案可以從 [發佈頁面](https://github.com/pqabelian/abelian-sdk-java/releases) 下載，也可以從原始碼建構。

SDK 需要以下相依項目：
- `net.java.dev.jna:jna:5.13.0`
- `com.google.protobuf:protobuf-java:3.21.12`
- `org.apache.httpcomponents.client5:httpclient5-fluent:5.2.1`
- `com.fasterxml.jackson.core:jackson-databind:2.14.2`
- `org.slf4j:slf4j-api:2.0.6`
- `org.slf4j:slf4j-simple:2.0.6`

## 4. 從原始碼建構 SDK

要從原始碼建構 SDK，只需在儲存庫的根目錄執行 `make` 命令。分發套件將在 `abel4j-demo/build` 目錄中建立。要清理建構，請執行 `make clean`。