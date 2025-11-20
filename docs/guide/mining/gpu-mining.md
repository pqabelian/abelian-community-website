---
outline: deep
version_abelminer: v2.0.3
---

# Abelian GPU Mining User Guide

This document explains how to run GPU mining software for the Abelian blockchain, covering both solo mining and pool mining options.

Please refer to the [Abelian Applications Guide](/guide/) to understand the software architecture and choose between solo mining or joining a mining pool.

Visit the Abelian official website's download page to download the appropriate mining client.

All operations are performed via the Command Line Interface (CLI). For Linux, open the Terminal; for Windows, open PowerShell or any shell application of your choice.

## Overview

GPU mining on Abelian can be performed in two ways:

- **Solo Mining**: Mine independently using your own Abelian node, keeping all block rewards
- **Pool Mining**: Join a mining pool to share computational work and rewards with other miners

## Prerequisites

### System Requirements

| Component   | Solo Mining                   | Pool Mining                   |
|-------------|-------------------------------|-------------------------------|
| **GPU**     | NVIDIA/AMD GPU with 8GB+ VRAM | NVIDIA/AMD GPU with 4GB+ VRAM |
| **Storage** | 200GB+ (for Abelian node)     | 100MB (client only)           |
| **RAM**     | 8GB+                          | 4GB+                          |
| **Network** | Stable broadband              | Stable broadband              |

### Choose Your Mining Method

**Solo Mining:**

- ✅ Keep 100% of block rewards
- ✅ Support network decentralization
- ❌ Requires running an Abelian node
- ❌ Irregular rewards (high variance)
- **Best for**: Miners with significant GPU power

**Pool Mining:**

- ✅ Regular, predictable rewards
- ✅ No need to run an Abelian node
- ✅ Lower hardware requirements
- ❌ Share rewards with other miners
- ❌ Pool fees (typically 1-3%)
- **Best for**: Miners with limited GPU power

## Solo Mining Setup

### 1. Install Abelian Node

First, you need a running Abelian node. Follow the [Abelian Node (abec) Manual](/guide/abelian-node) to set up `abec`.

**Key configuration for mining in `abec.conf`:**

```ini
# Node Type
# Note that the Normal Node is sufficient for mining
nodetype=normalnode 

# Enable mining support
enablegetwork=1

# Allow remote mining connections (if needed)
rpclistengetwork=:8668

# Set your mining reward address
miningaddr=[your wallet address]
```

**Make sure the Abelian nodes are synchronized.**

### 2. Install GPU Mining Client

Download the [Abelian GPU Mining Client](/downloads/latest.html#abelian-gpu-mining-client) and extract it:

```txt-vue
~/abel/abelminer-linux-amd64-{{ $frontmatter.version_abelminer }}/
```

### 3. Create a Wallet Address

You need a wallet address to receive mining rewards. The easiest way is to use [Abelian Pro](/downloads/latest.html#abelian-pro-mobile):

1. Download and install Abelian Pro
2. Create a new wallet or import existing one
3. Navigate to ` Profile → Account Details `
4. Click the eye icon next to the address field
5. Copy your wallet address

### 4. Start Solo Mining

Navigate to the mining client directory and run:

::: code-group

```shell [Windows]
$ .\abelminer.exe -P http://localhost:8668
```

```shell [macOS/Linux]
$ ./abelminer -P http://localhost:8668
```
:::

**For remote Abelian node connection:**
::: code-group

```shell [Windows]
$ .\abelminer.exe -P http://[node-ip]:8668
```

```shell [macOS/Linux]
$ ./abelminer -P http://[node-ip]:8668
```
:::

## Pool Mining Setup

### 1. Choose a Mining Pool

**Official Maxpool (Recommended):**

- Website: https://maxpool.org/
- Supports both legacy and MLP addresses
- Multiple server locations
- Comprehensive guides and scripts

> [!IMPORTANT] Legacy Pool Notice
> The original [Abelian Foundation Pool](https://legacy.maxpool.org/home) has ceased operations. All miners should
> migrate to the new [Maxpool](https://maxpool.org/).

### 2. Follow the Guide

Follow detailed instructions in Pool's Guide, such as [Quick Start Guide for Maxpool](https://maxpool.org/home/guide),
starting your CPU mining.

## Mining Client Configuration

### Basic Parameters

**Connection Options:**

- `-P http://host:port` - HTTP connection (solo mining)
- `-P stratums://user:pass@host:port` - Secure stratum connection (pool mining)

**GPU Selection:**

- `--cuda-devices 0,1,2` - Select specific CUDA devices
- `--opencl-devices 0,1` - Select specific OpenCL devices

**Performance Tuning:**

- `--cuda-grid-size 8192` - Adjust CUDA grid size
- `--cuda-block-size 256` - Adjust CUDA block size

### Example Configurations

**Solo mining with specific GPU:**

```shell
$ ./abelminer -P http://localhost:8668 --cuda-devices 0,1
```

**Pool mining with performance tuning:**

```shell
$ ./abelminer -P stratums://user:pass@emily-service.abelian.info:27778 --cuda-grid-size 8192
```

## Monitoring and Optimization

### Performance Metrics

Monitor these key metrics while mining:

- **Hashrate**: Your mining speed (H/s, KH/s, MH/s)
- **Accepted Shares**: Successfully submitted work
- **Rejected Shares**: Should be minimal (<2%)
- **GPU Temperature**: Keep below 80°C
- **Power Consumption**: Monitor for efficiency

### Optimization Tips

**Hardware Optimization:**

- Ensure adequate cooling for GPUs
- Use dedicated mining rigs when possible
- Consider undervolting for better efficiency
- Monitor GPU memory temperatures

**Software Optimization:**

- Update GPU drivers regularly
- Use latest mining client version
- Experiment with grid/block sizes
- Monitor system resource usage

**Network Optimization:**

- Use stable internet connection
- Consider multiple pool servers for redundancy
- Monitor latency to pool servers

## Troubleshooting

### Common Issues

**Connection Problems:**

- Verify Abelian node is running and make sure the synchronized completed (solo mining).
- Check firewall settings for port 8668
- Confirm pool server addresses and credentials

**Low Hashrate:**

- Update GPU drivers
- Check GPU temperature and throttling
- Adjust mining parameters
- Verify sufficient power supply

**High Rejection Rate:**

- Check network stability
- Verify system time synchronization
- Monitor GPU stability
- Consider reducing overclock settings

### Getting Help

**Community Support:**

- Join [official Discord server](https://discord.com/invite/5rrDxP29hx)
- Visit the "how-to-mine-abel" channel after verification
- Check [Maxpool guides](https://maxpool.org/home/guide)
- Watch [YouTube tutorials](https://www.youtube.com/@PQAbelian)

## Security Considerations

### Wallet Security

- **Never share** your private keys or seed phrases
- **Use dedicated mining addresses** separate from main wallet
- **Backup wallet** before starting mining operations
- **Verify pool authenticity** before providing credentials

### Network Security

- **Secure RPC connections** when mining remotely
- **Use firewall rules** to restrict mining port access
- **Monitor mining activity** for unusual behavior
- **Keep software updated** to latest versions

## Economics and Profitability

### Factors Affecting Profitability

- **Hashrate**: Your mining speed
- **Network Difficulty**: Adjusts every 200 blocks
- **Block Rewards**: Currently 64 ABEL per block (Era 2)
- **Electricity Costs**: Major operational expense
- **Hardware Efficiency**: Hash per watt ratio

### Calculating Returns

**Solo Mining:**

- Rewards = (Your Hashrate / Network Hashrate) × Block Reward × Blocks per Day
- High variance - may find blocks irregularly

**Pool Mining:**

- Rewards = Your Contribution × Pool Rewards × (1 - Pool Fee)
- Lower variance - regular payouts

Use online [Hashrate Calculator](https://maxpool.org/home/hash-rate-calculator) and monitor network statistics at [AbelScan](https://explorer.pqabelian.io)

## Advanced Topics

### Multi-GPU Setup

- Configure multiple GPUs for increased hashrate
- Balance power consumption and cooling
- Use GPU-specific optimization parameters

### Remote Mining

- Set up dedicated mining rigs
- Configure secure remote connections
- Monitor mining operations remotely

### Mining Farm Management

- Implement monitoring and alerting systems
- Automate restart and recovery procedures
- Optimize power and cooling infrastructure


## Next Steps

**New to Mining?**

1. Start with pool mining for consistent rewards
2. Join the [Discord](https://discord.com/invite/5rrDxP29hx) community for support
3. Monitor your setup and optimize gradually

**Experienced Miners?**

1. Consider solo mining if you have significant hashrate
2. Experiment with advanced optimization techniques
3. Contribute to network decentralization

**Ready to Scale?**

1. Plan multi-GPU or multi-rig deployments
2. Implement proper monitoring and management
3. Consider dedicated mining infrastructure

Happy mining ⛏ and welcome to the Abelian network! ️🚀