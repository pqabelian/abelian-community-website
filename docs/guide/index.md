---
outline: deep
---

# Abelian Application Guide

Welcome to the comprehensive guide for Abelian applications!

This document serves as your essential starting point for understanding and using the Abelian software ecosystem.
Whether you're a new user, developer, or miner, this guide will help you choose the right tools and get started quickly.

## Overview

Abelian is a quantum-resistant and privacy-preserving blockchain platform that offers multiple applications for
different use cases. This guide covers the core applications, their relationships, and helps you determine which
tools you need for your specific requirements.

## 1. Application Architecture

The Abelian ecosystem consists of several main applications that work together to provide a complete blockchain
experience:

### Core Applications

- **abec** - The Abelian node running 24/7, communicating with other nodes to maintain the global Abelian network.
  It stores the blockchain ledger and validates all data. **abectl**, distributed with **abec**, is the command-line
  interface for managing the Abelian node, including query block, query transaction, and other node operations.

- **Desktop Wallet** - The GUI wallet software also available in two versions:
    - **Desktop Wallet Legacy** - The wallet supporting legacy addresses.
    - **Desktop Wallet Pro (MLP)** - The Multi-Layer Privacy wallet supporting fully-privacy and pseudo-privacy
      addresses.

- **abewallet** - The command-line wallet software also available in two versions:
    - **abewalletlegacy** - The wallet supporting legacy addresses. **abewalletlegacyctl**, distributed with
      **abewalletlegacy**, is the wallet control interface.
    - **abewalletmlp** - The Multi-Layer Privacy wallet supporting fully-privacy and pseudo-privacy addresses.
      **abewalletmlpctl**, distributed with **abewalletlegacy**, is the wallet control interface.

- **abelminer** - The GPU mining software that performs Proof-of-Work mining by receiving tasks from a node or pool,
  computing solutions, and submitting results.

### Application Relationships

```             
┌─────────────┐    ┌───────────────┐    ┌──────────────┐
│   abelminer │◄──►│     abec      │◄──►│   abewallet  │
│(GPU Mining) │    │(Abelian Node) │    │   (Wallet)   │
└─────────────┘    └───────────────┘    └──────────────┘
                           ▲                   ▲
                           │                   │
                           ▼                   ▼
                   ┌──────────────┐    ┌─────────────────┐
                   │    abectl    │    │  abewalletctl   │
                   │ (Node Ctrl)  │    │ (Wallet Ctrl)   │
                   └──────────────┘    └─────────────────┘
```

## 2. Network Communication

Understanding the network ports helps you configure firewalls and troubleshoot connectivity:

| Connection               | Port | Purpose                                 |
|--------------------------|------|-----------------------------------------|
| **abec <-> abec**        | 8666 | Peer-to-peer blockchain synchronization |
| **abec <-> abewallet**   | 8667 | Wallet synchronization with node        |
| **abec <-> abectl**      | 8667 | Node control and queries                |
| **abewallet <-> abectl** | 8665 | Wallet control and operations           |
| **abec <-> abelminer**   | 8668 | Mining task distribution                |

::: tip Network Configuration

- Port 8666 should be open for incoming connections if you want to help the network
- Other ports are typically used locally and don't need external access
- Use firewall rules to restrict access to RPC ports (8665, 8667, 8668) for security
  :::

## 3. Choose Your Setup

Select the setup that best matches your needs:

### Abelian Wallet

**For everyday users who want a simple, secure wallet with a graphical interface:**

⭐⭐⭐⭐⭐ **Desktop Wallet Pro (MLP)**

- **Best for**: Users who want the latest features and faster sync
- **Download**: [Abelian Desktop Wallet Pro Edition (MLP)](/downloads/latest#desktop-wallet-pro-mlp)
- **Features**:
    - Multi-layer privacy (fully-private and pseudo-private addresses)
    - Support for multiple recipients (up to 5 fully-private, 100 pseudo-private)
    - Memo functionality for on-chain messages
    - Fast sync (~45 minutes)
    - Minimal storage (~100MB)
- **Manual**: [Desktop Wallet Pro Manual](/guide/wallet/desktop-wallet-pro)

⭐⭐⭐ **Desktop Wallet Legacy**

- **Best for**: Users who prefer the proven, stable wallet
- **Download**: [Abelian Desktop Wallet Legacy](/downloads/latest#desktop-wallet-legacy)
- **Features**: Legacy privacy, proven stability, full blockchain sync
- **Storage**: ~120GB for full blockchain (#TODO)
- **Sync time**: Several hours to days (first time)

**For advanced users, developers, or those who prefer CLI interfaces:**

::: tip Requirement

- **Applications**: `abec` + `abewallet` + `abewalletctl`
- **Recommended**: Run both on the same machine for simplicity
  :::

⭐⭐⭐ **MLP CLI Wallet**

- **Applications**: `abec` + `abewalletmlp` + `abewalletmlpctl`
- **Best for**: Users who want the latest privacy features
- **Download**: [CLI Wallet (MLP)](/downloads/latest#cli-wallet-mlp)
- **Features**: Multi-layer privacy, enhanced functionality
- **Manual**: [CLI Wallet (MLP) Manual](/guide/wallet/cli-wallet-mlp)

⭐ **Legacy CLI Wallet**

- **Applications**: `abec` + `abewalletlegacy` + `abewalletlegacyctl`
- **Best for**: Users familiar with the legacy wallet
- **Download**: [CLI Wallet Legacy](/downloads/latest#cli-wallet-legacy)
- **Manual**: [CLI Wallet Legacy Manual](/guide/wallet/cli-wallet-legacy)

### 🖥️ Abelian Node Operators

**For users who want to support the network by running an Abelian node:**

- **Application**: `abec` only
- **Purpose**: Maintain a complete copy of the Abelian blockchain
- **Benefits**: Helps decentralize the network, provides local blockchain access
- **Requirements**:
    - **Storage**: At least 2TB (current blockchain ~120GB, growing)
    - **RAM**: Minimum 8GB
    - **Network**: Stable internet connection
- **Manual**: [Abelian Node Manual](/guide/cli-node)

### ⛏️ Miners

#### GPU Solo Mining

- **Best for**: Miners with significant GPU power who want full rewards
- **Applications**: `abec` + `abelminer`
- **Manual**: [GPU Mining Manual](/guide/mining/gpu-mining)
- **Note**: Requires running an Abelian node

#### GPU/CPU Pool Mining

- **Best for**: Miners with limited GPU/CPU power who want consistent rewards
- **Application**: Mining pool client only
- **Download**:
  [GPU Mining Client](/downloads/latest#gpu-mining-client) / [CPU Mining Pool Client](/downloads/latest#cpu-mining-client)
- **Manual**:
  [GPU Mining Manual](/guide/mining/gpu-mining)/ [CPU Mining Manual](/guide/mining/cpu-mining)
- **Benefits**: Share rewards with other miners, no need to run Abelian node

#### CPU Solo Mining

- **Best for**: Miners who want to use CPU resources for mining
- **Applications**: `abec` with built-in CPU miner
- **Manual**: [CPU Mining Manual](/guide/mining/cpu-mining)
- **Note**: Requires running an Abelian node, lower hashrate compared to GPU mining

## 4. System Requirements

### Minimum Requirements

| Component   | Requirement | Notes                        |
|-------------|-------------|------------------------------|
| **Storage** | 2TB         | For Abelian node operation   |
| **RAM**     | 8GB         | Minimum for stable operation |
| **CPU**     | 2+ cores    | Modern processor recommended |
| **Network** | Broadband   | Stable connection required   |

### Recommended Requirements

| Component   | Requirement | Notes                                 |
|-------------|-------------|---------------------------------------|
| **Storage** | 4TB SSD     | SSD significantly improves sync speed |
| **RAM**     | 16GB+       | Better performance with more RAM      |
| **CPU**     | 4+ cores    | Faster sync and mining                |
| **Network** | High-speed  | Faster initial sync                   |

::: warning Storage Growth
The Abelian blockchain grows over time. Current size is ~120GB, but plan for future growth with adequate storage space.
:::

## 5. Getting Started

1. **Choose your setup** from the options above
2. **Download** the required applications from the [official download page](/downloads/latest)
3. **Follow the specific manual** for your chosen setup
4. **Join the community** on [Discord](https://discord.com/invite/5rrDxP29hx) for support

## 6. Security Best Practices

### Wallet Security

- **Backup your mnemonics** in multiple secure locations
- **Use strong, unique passphrases** for wallet encryption
- **Never share** your private keys or seed phrases
- **Verify downloads** from official sources only

### Network Security

- **Use firewall rules** to restrict RPC port access
- **Keep software updated** to the latest versions
- **Monitor logs** for unusual activity

## 7. Community and Support

### Get Help

- **Discord**: [Official Discord Server](https://discord.com/invite/5rrDxP29hx)
    - Visit the "how-to-mine-abel" channel after verification
    - Active community support and discussions
- **Documentation**: Comprehensive guides for all applications
- **GitHub**: Report issues and contribute to development

### Stay Updated

- **Download Page**: [Latest releases](/downloads/latest)
- **Release Notes**: Check for new features and security updates
- **Community Announcements**: Follow Discord for important updates

## 8. Advanced Topics

### Multi-Machine Setups

- Run `abec` on a dedicated server
- Connect wallets and miners from different machines
- Configure RPC connections and certificates

### Mining Optimization

- GPU selection and configuration
- Pool vs solo mining considerations
- Monitoring and maintenance

## Next Steps

Now that you understand the Abelian ecosystem, choose your path:

- **New to Abelian?** → Start with [Desktop Wallet Pro](/guide/wallet/desktop-wallet-pro)
- **Want to mine?** → Check the [GPU Mining Manual](/guide/mining/gpu-mining)
- **Need an Abelian node?** → Follow the [Abelian Node Manual](/guide/cli-node)
- **Prefer command line?** → Try the [CLI Wallet Manual](/guide/wallet/cli-wallet-mlp)

Welcome to the Abelian community! 🚀
