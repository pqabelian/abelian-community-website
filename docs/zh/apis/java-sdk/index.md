# Abelian 区块链 Java SDK

Abelian Java SDK 是一个允许开发者与 Abelian 区块链进行交互的库。它提供了一种简单的方式连接到 Abelian 网络、查询区块链的状态、解码受管理账户的隐私保护数据，并发送交易。

## 1. 系统需求
Abelian Java SDK 支持以下平台：
- Linux x86
- Linux arm64
- MacOS x86
- MacOS arm64 (Apple Silicon)

系统要求如下：
- Java 8 或更高版本
- OpenSSL 1.1.1 或最新版本（仅限 Linux）

在 macOS x86/arm86 平台上，SDK 仅要求安装 Java 8 或更高版本。在 Linux 平台上，SDK 还要求安装 OpenSSL 3 或更高版本。

## 2. 开始使用 SDK 演示

在您将 SDK 应用到自己的项目之前，您可以尝试 SDK 演示以了解 SDK 的工作方式。SDK 演示被打包为一个独立的包，包含了所有 jar 依赖。您可以从此仓库的 [发布页面](https://github.com/pqabelian/abelian-sdk-java/releases) 下载演示包 `abel4j-demo-x.y.z.zip`。

请参阅文档 [*通过演示了解 Abelian Java SDK*](https://github.com/pqabelian/abelian-sdk-java/abel4j-demo/README.md) 以获取更多详情。

## 3. 在您的项目中使用 SDK

在您的项目中使用 Abelian Java SDK，您需要将单个 JAR 文件 `abel4j-x.y.z.jar` 及其所需的依赖项添加到您的项目中。SDK JAR 文件可以从 [发布页面](https://github.com/pqabelian/abelian-sdk-java/releases) 下载，也可以从源代码构建。

SDK 需要以下依赖项：
- `net.java.dev.jna:jna:5.13.0`
- `com.google.protobuf:protobuf-java:3.21.12`
- `org.apache.httpcomponents.client5:httpclient5-fluent:5.2.1`
- `com.fasterxml.jackson.core:jackson-databind:2.14.2`
- `org.slf4j:slf4j-api:2.0.6`
- `org.slf4j:slf4j-simple:2.0.6`

## 4. 从源代码构建 SDK

要从源代码构建 SDK，只需在仓库的根目录运行 `make` 命令。分发包将在 `abel4j-demo/build` 目录中创建。要清理构建，请运行 `make clean`。