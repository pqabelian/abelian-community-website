---
outline: deep
version_abelcpuminer: v0.13.2
---

# Abelian CPU Mining User Guide

This document explains how to run CPU mining for the Abelian blockchain, covering both solo mining using the built-in
CPU miner and pool mining options.

Please refer to the [Abelian Applications Basics](/guide/) to understand the software architecture and choose between
solo mining or joining a mining pool.

Visit the Abelian official website's download page to download the appropriate mining client.

All operations are performed via the Command Line Interface (CLI). For Linux, open the Terminal; for Windows, open
PowerShell or any shell application of your choice.

## Overview

CPU mining on Abelian can be performed in two ways:

- **Solo Mining**: Mine independently using your own Abelian node with built-in CPU miner
- **Pool Mining**: Join a mining pool using a dedicated CPU mining client

## Prerequisites

### System Requirements

| Component   | Solo Mining               | Pool Mining         |
|-------------|---------------------------|---------------------|
| **CPU**     | 4+ cores (8+ recommended) | 2+ cores            |
| **Storage** | 160GB+ (for normal node)  | 100MB (client only) |
| **RAM**     | 8GB+                      | 4GB+                |
| **Network** | Stable broadband          | Stable broadband    |

### Choose Your Mining Method

**Solo Mining:**

- ✅ Keep 100% of block rewards
- ✅ Support network decentralization
- ✅ Uses built-in CPU miner in `abec`
- ❌ Requires running an Abelian node
- ❌ Irregular rewards (high variance)
- ❌ Lower hashrate compared to GPU mining
- **Best for**: Users who want to support the network while running a node

**Pool Mining:**

- ✅ Regular, predictable rewards
- ✅ No need to run an Abelian node
- ✅ Lower hardware requirements
- ✅ Optimized CPU mining client
- ❌ Share rewards with other miners
- ❌ Pool fees (typically 1-3%)
- **Best for**: Users with limited resources who want consistent rewards

## Solo Mining Setup

### 1. Install Abelian Node

You need a running Abelian node with CPU mining enabled. Follow the [Abelian Node (abec) Manual](/guide/abelian-node)
to set up `abec`.

**Key configuration for CPU mining in `abec.conf`:**

```ini
# Node Type
# Note that the Normal Node is sufficient for mining
nodetype=normalnode 

# Enable CPU mining
generate=1

# Set your mining reward address
miningaddr=[your wallet address]
```

### 2. Create a Wallet Address

You need a wallet address to receive mining rewards. The easiest way is to
use [Abelian Pro](/downloads/latest#abelian-pro-mobile):

1. Download and install Abelian Pro mobile wallet
2. Create a new wallet or import existing one
3. Navigate to `Profile → Account Details`
4. Click the eye icon next to the address field
5. Copy your wallet address

### 3. Start Solo Mining

Navigate to your `abec` directory and start the node with CPU mining:

::: code-group

```shell [Windows]
$ .\abec.exe
```

```shell [macOS/Linux]
$ sh start_abec.sh
```
:::

**Alternative: Enable mining on running node:**

If `abec` is already running, you can enable CPU mining using `abectl`:

```shell
# Start CPU mining with 4 cores
$ sh start_abectl.sh setgenerate true 4

# Check mining status
$ sh start_abectl.sh getmininginfo

# Stop CPU mining
$ sh start_abectl.sh setgenerate false
```

## Pool Mining Setup

### 1. Choose a Mining Pool

**Official Maxpool (Recommended):**

- Website: https://maxpool.org/
- Supports both legacy and MLP addresses
- Multiple server locations
- Comprehensive guides and scripts

> [!IMPORTANT] Legacy Pool Notice
> The original [Abelian Foundation Pool](https://legacy.maxpool.org/home) has ceased operations. All miners should
> migrate
> to the new [Maxpool](https://maxpool.org/).

### 2. Follow the Guide

Follow detailed instructions in Pool's Guide, such as [Quick Start Guide for Maxpool](https://maxpool.org/home/guide),
starting your CPU mining.

## Monitoring and Optimization

### Performance Metrics

Monitor these key metrics while CPU mining:

- **Hashrate**: Your mining speed (H/s, KH/s)
- **CPU Usage**: Should be manageable for system stability
- **CPU Temperature**: Keep below 80°C
- **Accepted Shares**: Successfully submitted work (pool mining)
- **Rejected Shares**: Should be minimal (<2%)

### Optimization Tips

**Hardware Optimization:**

- Ensure adequate CPU cooling
- Monitor CPU temperatures during mining
- Consider undervolting for better efficiency
- Use high-performance CPU cooling solutions

**Software Optimization:**

- Adjust thread count based on CPU cores
- Leave 1-2 cores free for system operations
- Use mining intensity settings to balance performance
- Monitor system responsiveness

**System Optimization:**

- Close unnecessary applications
- Set mining process to appropriate priority
- Ensure stable power supply
- Monitor system stability during extended mining

### CPU Mining Performance Expectations

**Typical hashrates by CPU type:**

- **Entry-level (2-4 cores)**: 100-500 H/s
- **Mid-range (4-8 cores)**: 500-2000 H/s
- **High-end (8+ cores)**: 2000-5000+ H/s

::: warning Performance Note
CPU mining typically yields much lower hashrates compared to GPU mining. Consider it primarily for network support
rather than profit maximization.
:::

## Troubleshooting

### Common Issues

**High CPU Usage:**

- Reduce mining cores
- Lower mining intensity
- Ensure adequate cooling
- Monitor system stability

**Low Hashrate:**

- Check CPU temperature throttling
- Verify thread count settings
- Update system and drivers
- Ensure sufficient power supply

**Connection Problems (Pool Mining):**

- Verify pool server addresses and credentials
- Check network connectivity
- Try different pool servers
- Confirm firewall settings

**System Instability:**

- Reduce CPU mining intensity
- Lower thread count
- Check system temperatures
- Ensure adequate power supply

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

### System Security

- **Monitor system resources** to prevent overheating
- **Use firewall rules** to restrict unnecessary access
- **Keep software updated** to latest versions
- **Monitor mining activity** for unusual behavior

### Operational Security

- **Start with low intensity** to test system stability
- **Monitor temperatures** continuously during mining
- **Have cooling solutions** in place before extended mining
- **Plan for system maintenance** and updates

## Economics and Profitability

### Factors Affecting Profitability

- **CPU Hashrate**: Your mining speed
- **Network Difficulty**: Adjusts every 200 blocks
- **Block Rewards**: Currently 64 ABEL per block (Era 2)
- **Electricity Costs**: Major operational expense
- **CPU Efficiency**: Hash per watt ratio

### Calculating Returns

**Solo Mining:**

- Rewards = (Your Hashrate / Network Hashrate) × Block Reward × Blocks per Day
- Very high variance - may not find blocks for extended periods

**Pool Mining:**

- Rewards = Your Contribution × Pool Rewards × (1 - Pool Fee)
- Lower variance - small but regular payouts

::: tip Profitability Reality
CPU mining is generally not profitable due to low hashrates and electricity costs. Consider it primarily as a way to
support the network while learning about mining.
:::

Use online calculators and monitor network statistics at [AbelScan](https://explorer.pqabelian.io)

## Advanced Topics

### Multi-Core Optimization

- Configure optimal thread count per CPU
- Use CPU affinity for dedicated cores
- Balance mining with system responsiveness

### Hybrid Mining Setup

- Combine CPU and GPU mining on same system
- Optimize resource allocation between miners
- Monitor total system power consumption

### Mining Farm CPU Integration

- Use CPU mining on GPU mining rigs
- Implement centralized monitoring
- Optimize power and cooling for mixed setups

---

## Next Steps

**New to CPU Mining?**

1. Start with pool mining for consistent rewards
2. Begin with low intensity to test system stability
3. Join the Discord community for support
4. Monitor your setup and optimize gradually

**Experienced Miners?**

1. Consider CPU mining as supplementary to GPU mining
2. Experiment with optimization techniques
3. Contribute to network decentralization

**Want Better Performance?**

1. Consider upgrading to GPU mining for higher hashrates
2. Optimize your CPU cooling and power setup
3. Explore hybrid CPU+GPU mining configurations

Happy mining ⛏ and welcome to the Abelian network! 🚀