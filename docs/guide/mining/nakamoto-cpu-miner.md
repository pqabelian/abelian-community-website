# Abel-Nakamoto CPU Mining Client User Guide

Welcome to Abel-Nakamoto CPU Mining Client! This document will help you quickly understand, install and use this mining software.

---

## 1. Product Introduction

### What is Abel-Nakamoto CPU Mining Client?

Abel-Nakamoto CPU Mining Client is an efficient mining software specially designed for CPU mining, which uses the Abel-Nakamoto mining algorithm and supports mining through mining pools.

### Core Features

| Feature | Description |
| ------- | ----------- |
| **CPU Mining Algorithm** | Uses Abel-Nakamoto algorithm, optimized for CPU |
| **Mining Pool Protocol** | Based on Stratum V1.0 standard protocol |
| **Multi-threading Support** | Fully utilizes multi-core CPU performance |
| **Daemon Mode** | Supports background operation on Linux/MacOS |
| **Memory Safety** | Developed with Rust, no `unsafe` code |
| **Ready to Use** | Single executable file, no additional dependencies |

---

## 2. Installation Guide

### System Requirements

- **Operating System**: Windows 10/11, MacOS 10.15+, Linux (mainstream distributions)
- **Processor**: CPU supporting x86_64 or ARM64 architecture
- **Memory**: Recommended 2GB or more
- **Network**: Stable internet connection

### Version Selection Guide

Select the corresponding version based on your operating system and CPU architecture:

#### Windows Users

| Version File | Applicable Scenario |
| ------------ | ------------------- |
| `abel-nakamoto-cpu-miner-windows-amd64-v<version>.exe` | **Recommended**, suitable for most Windows systems |

#### MacOS Users

| Version File | Applicable Scenario |
| ------------ | ------------------- |
| `abel-nakamoto-cpu-miner-macos-arm64-v<version>` | Suitable for Mac with M1/M2/M3 series chips |
| `abel-nakamoto-cpu-miner-macos-amd64-v<version>` | Suitable for Mac with Intel chips |

#### Linux Users

| Version File | Applicable Scenario |
| ------------ | ------------------- |
| `abel-nakamoto-cpu-miner-linux-amd64-v<version>` | **Recommended**, suitable for x86_64 architecture |
| `abel-nakamoto-cpu-miner-linux-arm64-v<version>` | Suitable for ARM64 architecture |

> **Note**: In the following text, `ABEL-MINER` represents the name of your downloaded executable file.

### Installation Verification

After downloading, open the terminal (Windows users use PowerShell, MacOS/Linux users use Terminal) to verify the installation:

```bash
ABEL-MINER version
```

**Expected output**:

```text
Abel Nakamoto CPU Miner version <version>
```

If the version number is displayed, the installation was successful!

---

## 3. Usage Tutorial

### Quick Start

#### Step 1: Get Mining Pool Information

Before starting mining, you need:
- Mining pool server address (e.g., `pool.abel-nakamoto.xyz:3333`)
- Your mining pool account username
- Your mining pool account password

> **Note**: You can visit the Abelian Nakamoto Pool official website https://abel-nakamoto.xyz to get mining pool information and register an account.

#### Step 2: Start Mining

Use the following command to start mining:

```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333
```

**Actual example**:

```bash
ABEL-MINER start -p stratum://miner001:mypassword@pool.abel-nakamoto.xyz:3333
```

#### Step 3: Check Mining Status

After startup, the terminal will display mining logs, including:
- Mining pool connection status
- Number of worker threads
- Current hashrate
- Submitted work

**Example output**:

```text
2025-12-31T13:30:00.123456Z  INFO  Connected to pool: pool.abel-nakamoto.xyz:3333
2025-12-31T13:30:00.234567Z  INFO  Worker threads: 8
2025-12-31T13:30:05.345678Z  INFO  Current hashrate: 1.23 MH/s
2025-12-31T13:30:10.456789Z  INFO  Share accepted
```

### Command Parameter Description

#### View Help

```bash
ABEL-MINER help
```

#### View Subcommand Help

```bash
ABEL-MINER help start
```

#### Common Parameters

| Parameter | Description | Example |
| --------- | ----------- | ------- |
| `-p, --primary` | Primary mining pool address | `-p stratum://user:pass@pool.com:3333` |
| `-s, --secondary` | Backup mining pool address | `-s stratum://user:pass@backup.com:3333` |
| `-t, --threads` | Number of worker threads | `-t 8` (use 8 threads) |
| `-l, --log-dir` | Log directory | `-l ./my-logs` |
| `-d, --daemon` | Daemon mode (Linux/MacOS only) | `-d` |
| `-v, --verbose` | Increase log verbosity | `-v` or `-vv` |
| `-q, --quiet` | Reduce log output | `-q` |

### Daemon Mode (Linux/MacOS)

> **Note**: Windows does not support daemon mode, Windows users please skip this section.

#### Start Daemon

```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333 -d
```

After startup, the following will be displayed:

```text
2025-12-31T13:30:00.123456Z  INFO  starting Abel Nakamoto CPU Miner...
2025-12-31T13:30:00.234567Z  INFO  running in daemon mode
2025-12-31T13:30:00.345678Z  INFO  after daemon started, you can check logs in ./logs directory
```

The program will run in the background. You can close the terminal, and mining will continue.

#### View Logs

```bash
tail -f ./logs/latest-log-file
```

#### Stop Daemon

```bash
ABEL-MINER stop
```

### Stop Mining

#### Non-daemon Mode

Press `Ctrl + C` in the terminal to stop mining.

#### Daemon Mode

Use the stop command:

```bash
ABEL-MINER stop
```

Or use system tools:

```bash
# Find process
ps aux | grep abel-nakamoto

# Stop process (replace PID with actual process ID)
kill PID
```

---

## 4. Configuration Optimization

### Multi-threading Configuration

#### Automatic Configuration (Recommended)

By default, the program will use all your CPU cores as the number of worker threads.

#### Manual Configuration

If you want to customize the number of threads:

```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333 -t 8
```

**Recommendations**:
- **Full mining**: Number of threads = Number of CPU cores
- **Daily use**: Number of threads = Number of CPU cores - 2 (reserve resources for other programs)
- **Testing**: Number of threads = 1 or 2

#### Check CPU Core Count

**Windows**:
```powershell
echo $env:NUMBER_OF_PROCESSORS
```

**MacOS/Linux**:
```bash
nproc
# Or
sysctl -n hw.ncpu  # MacOS
```

### Log Management

#### Custom Log Directory

```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333 -l /path/to/logs
```

#### Adjust Log Verbosity

**Increase verbosity** (for debugging):
```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333 -v
```

**Reduce log output** (show only important information):
```bash
ABEL-MINER start -p stratum://username:password@pool.abel-nakamoto.xyz:3333 -q
```

### Performance Optimization Tips

#### 1. Heat Dissipation Optimization
- Ensure good CPU heat dissipation to avoid thermal throttling
- Consider using better cooling systems

#### 2. Power Settings
- Windows: Set to "High Performance" power plan
- MacOS: Disable "Power Saver" mode in "Energy Saver" settings
- Linux: Use `performance` CPU governor

#### 3. Background Programs
- Close unnecessary background programs to free up CPU resources
- Avoid running other CPU-intensive tasks simultaneously

#### 4. Backup Mining Pool
Use a backup mining pool to improve stability:

```bash
ABEL-MINER start \
  -p stratum://username:password@pool.abel-nakamoto.xyz:3333 \
  -s stratum://username:password@backup.abel-nakamoto.xyz:3333
```

---

## 5. Frequently Asked Questions

### Installation and Runtime Issues

#### Q1: "Cannot open program" or "Permission denied" error

**Windows**:
- Right-click the file → Properties → Unblock
- Or run in PowerShell: `Unblock-File .\ABEL-MINER.exe`

**MacOS**:
```bash
chmod +x ABEL-MINER
```

If you get "Cannot verify developer" error:
- System Preferences → Security & Privacy → Click "Open Anyway"

**Linux**:
```bash
chmod +x ABEL-MINER
```

#### Q2: "Command not found" error

Make sure you run the command in the directory where the executable file is located, or use the full path:

```bash
# Windows
.\abel-nakamoto-cpu-miner-windows-amd64-v<version>.exe version

# MacOS/Linux
./abel-nakamoto-cpu-miner-macos-arm64-v<version> version
```

#### Q3: Cannot run due to incorrect version selection

**Symptoms**: Program cannot start or crashes immediately

**Solution**:
- Confirm your CPU architecture (x86_64 or ARM64)
- Try other versions for the same platform

### Connection and Performance Issues

#### Q4: Cannot connect to mining pool

**Checklist**:
1. Confirm the mining pool address, port, username, and password are correct
2. Check if the network connection is normal
3. Check if the firewall is blocking the program
4. Try using the backup mining pool address

#### Q5: Abnormally low hashrate

**Possible causes**:
1. CPU thermal throttling → Improve heat dissipation
2. Too few threads set → Increase the number of threads
3. Background programs occupying CPU → Close unnecessary programs
4. Power mode is power saving → Switch to high-performance mode

#### Q6: Frequent "Share rejected" errors

**Possible causes**:
1. High network latency → Choose a mining pool with lower latency
2. Inaccurate system time → Synchronize system time
3. Mining pool server issues → Contact the mining pool administrator

### Troubleshooting Methods

#### Program Crash

1. **View logs**: Check log files in the `./logs` directory
2. **Increase log verbosity**: Re-run with `-v` or `-vv` parameters
3. **Check system resources**: Ensure sufficient memory and CPU resources
4. **Update version**: Check if a new version is available

#### Cannot Stop Daemon

```bash
# Find process ID
ps aux | grep abel-nakamoto

# Force stop (replace PID)
kill -9 PID
```

#### Log Files Too Large

Periodically clean up old logs:

```bash
# Linux/MacOS
rm -rf ./logs/*.log.old

# Windows PowerShell
Remove-Item .\logs\*.log.old
```

---

## Get Help

If you encounter problems not covered in this document, you can:

- Visit the  Abelian Nakamoto Pool official website: https://abel-nakamoto.xyz
- Check detailed log files for error information
- Contact the technical support team

---

**Happy Mining!** 🚀