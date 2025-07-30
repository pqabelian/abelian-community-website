---
outline: deep
version_abec: v2.0.2
---

# Abelian Node User Manual

This document describes how to run an Abelian node using the command-line interface.

Please refer to [Abelian Applications Basics](/guide/) to understand the software architecture and the purpose of
running an Abelian node firstly.

To interact with other miners, developers and users, join
[Official Discord Server](https://discord.com/invite/5rrDxP29hx).

All the operations are carried out via the Command Line Interface (CLI). For Linux or macOS, open Terminal; and for
Windows, open PowerShell or any of your favorite shell application.

## Prerequisites

Before starting, ensure you meet the system requirements:

- **Storage**: At least 2TB (current blockchain ~120GB, growing)
- **RAM**: Minimum 8GB (16GB+ recommended)
- **CPU**: 2+ cores (4+ cores recommended)
- **Network**: Stable broadband connection

## 1. Installation

Download the compressed file for your platform from the [Official Download Page](/downloads/latest#abelian-full-node):

- Linux x86: `abec-linux-amd64-{{ $frontmatter.version_abec }}.tar.gz`
- Linux arm: `abec-linux-arm64-{{ $frontmatter.version_abec }}.tar.gz`
- macOS (Intel-Chip): `abec-macos-amd64-{{ $frontmatter.version_abec }}.tar.gz`
- macOS (M-Chip): `abec-macos-arm64-{{ $frontmatter.version_abec }}.tar.gz`
- Window: `abec-windows-amd64-{{ $frontmatter.version_abec }}.tar.gz`

Extract and place it under the `~/abel/` folder:

```txt-vue
~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/
```

### Initial Setup

Navigate to `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` and run:

::: code-group

```powershell [Windows]
$ .\abec.exe
```

```shell [macOS]
$ sh start_abec.sh
```

```shell [Linux]
$ sh start_abec.sh
```

:::

Press `Ctrl+C` to stop it. This creates the configuration folder for `abec`:

::: code-group

```txt [Windows]
%USERPROFILE%\\AppData\Local\Abec
```

```txt [macOS]
~/Library/Application Support/Abec
```

```txt [Linux]
~/.abec
```

:::

> [!TIP] Platform-Specific Notes
> - **macOS/Linux**: You may need to run `chmod 777 xxx` if you get "xxx: Permission denied"
> - **macOS (M-chips/ARM64)**: If you see "'xxx' is damaged and can't be opened", run:
> ```shell
> $ xattr -d com.apple.quarantine path/to/xxx
> ```
> - **macOS**: If you see "'xxx' cannot be opened because the developer cannot be verified", go to **System
    Preferences → Security & Privacy → General** and click **Allow anyway**

## 2. Configuration - abec

Navigate to the `abec` configuration folder and modify `abec.conf` with the following settings:

### Node Type Configuration

Choose the appropriate node type based on your storage and verification needs:

| Node Type          | Storage Requirements | Verification Level | Description                                          |
|--------------------|----------------------|--------------------|------------------------------------------------------|
| **Full Node**      | Highest (~1200GB+)   | Complete           | Stores and verifies all blockchain data from genesis |
| **Semi-Full Node** | Medium (~240GB+)     | Standard           | Optimized storage with high verification capability  |
| **Normal Node**    | Lowest (~160GB+)     | Safe               | Further optimized for resource-limited environments  |

#### Full Node

- **Definition**: A complete node that stores and verifies all data of the blockchain.
- **Functionality**:
    - Stores the complete block (Content + Witness) data from the genesis block.
    - Verifies the validity of each block (transaction validity, block validity).

#### **Semi-Full Node**
- **Definition**: A semi-complete node that optimizes storage requirements while maintaining high verification
  capability.
- **Functionality**:
    - Stores block (Content) data from the genesis block up to the last checkpoint.
    - Stores complete block (Content + Witness) data from the last checkpoint onward.
    - Verifies the header information of each block (including PoW) before the last checkpoint.
    - Verifies the validity of each block (transaction validity, block validity) from the last checkpoint onward.

#### **Normal Node**
- **Definition**: A normal node that further optimizes storage, suitable for resource-limited environments.
- **Functionality**:
    - Stores block (Content) data from the genesis block to the reserved block.
    - Stores complete block (Content + Witness) data starting from the reserved block.
    - Verifies the header information of each block (including PoW) before the last checkpoint.
    - Verifies the validity of each block (transaction validity, block validity) after the last checkpoint.

**Configuration:**
```ini
# Default: semi-full node (recommended for most users)
nodetype=semifullnode

# Other options:
# nodetype=fullnode      # Complete node
# nodetype=normalnode    # Normal node
```

### Network Configuration

If you have a public IP or configured port forwarding, you can broadcast your presence:
```ini
externalip=1.2.3.4
```

### Security Configuration
For production environments, consider additional RPC security settings:

```ini
# Restrict RPC access to specific IPs
rpclisten=127.0.0.1:8667

# Set strong RPC credentials
rpcuser=your_secure_username
rpcpass=your_secure_password
```

## 3.  Running the Abelian Node

### Start the Node
Navigate to `~/abel/abec-linux-amd64-{{ $frontmatter.version_abec }}/` and start the node:

::: code-group

```shell [Windows]
$ .\abec.exe
```

```shell [macOS]
$ sh start_abec.sh
```

```shell [Linux]
$ sh start_abec.sh
```

:::


### Initial Synchronization

The node will begin synchronizing with the Abelian network:

1. **Connection Phase**: Connecting to peer nodes
2. **Sync Phase**: Downloading and verifying blockchain data
3. **Validation Phase**: Validating downloaded blocks

**Expected sync times:**
- **Full Node**: Several days (depending on connection)
- **Semi-Full Node**: 1-3 days (recommended)
- **Normal Node**: 1-2 days

#TODO add section for downloading backup data

### Monitoring Progress

Monitor synchronization progress through the console output:

```
[INF] SYNC: Processed 1000 blocks in the last 10.02s (100 transactions, height 50000, 2023-01-01 12:00:00 +0000 UTC)
```

Check latest network height at: https://explorer.pqabelian.io

## 4. Node Management

### Using abectl

The `abectl` command-line tool allows you to interact with your running node:

**Check node info:**
::: code-group
```shell [Windows]
$ ./abectl.exe getinfo
```
```shell [macOS]
$ sh start_abectl.sh getinfo
```
```shell [Linux]
$ sh start_abectl.sh getinfo
```
::: 


**Check peer connections:**
::: code-group

```shell [Windows]
$ ./abectl.exe getpeerinfo
```
```shell [macOS]
$ sh start_abectl.sh getpeerinfo
```
```shell [Linux]
$ sh start_abectl.sh getpeerinfo
```
:::

### Stopping the Node

To safely stop the node:
- Press `Ctrl+C` in the terminal
- Or use:
::: code-group

```shell [Windows]
$ ./abectl.exe stop
```
```shell [macOS]
$ sh start_abectl.sh stop
```
```shell [Linux]
$ sh start_abectl.sh stop
```
:::

### Restarting After Updates
When updating to a new version:
1. Stop the current node
2. Replace the binary files
3. Restart using the same configuration

## 5. Troubleshooting

### Common Issues

**Slow Synchronization:**
- Check Internet connection stability
- Ensure sufficient disk space
- Consider using SSD for better performance

**Connection Issues:**
- Verify firewall settings (port 8666 should be accessible)
- Check network connectivity
- Try different DNS servers

**High Resource Usage:**
- Consider switching to `normalnode` type
- Increase available RAM
- Monitor disk space regularly

### Log Files

Check log files for detailed error information:

::: code-group
```txt [Windows]
%USERPROFILE%\AppData\Local\Abec\logs\
```
```txt [macOS]
~/Library/Application Support/Abec/logs/
```
```txt [Linux]
~/.abec/logs/
```
:::

## 6. Security Best Practices

### Network Security
- **Firewall Configuration**: Only open necessary ports
- **RPC Security**: Use strong credentials and restrict access
- **Regular Updates**: Keep software updated to latest versions

### Operational Security
- **Backup Configuration**: Save your `abec.conf` file
- **Monitor Resources**: Watch disk space and memory usage
- **Log Monitoring**: Regularly check logs for unusual activity

## 7. Advanced Configuration

### Multi-Machine Setup

For running wallets or miners on different machines:

1. **Configure RPC listening:**
 ```ini
 rpclisten=0.0.0.0:8667
 ```
2. **Set up certificates** for secure communication
3. **Configure firewall rules** for RPC ports

### Performance Optimization

**For high-performance setups:**
- Use SSD storage
- Allocate more RAM
- Use dedicated network connection
- Consider running on dedicated hardware

## Next Steps

Once your node is running:

- **Set up a wallet**: Follow the [CLI Wallet Manual](/guide/wallet/cli-wallet-mlp)
- **Start mining**: Check the [GPU Mining Manual](/guide/mining/gpu-pool)
- **Join the community**: Visit our [Discord Server](https://discord.com/invite/5rrDxP29hx)

Your node will help secure and decentralize the Abelian network. Thank you for contributing! 🚀