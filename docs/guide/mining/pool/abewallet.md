# Deploy an abewallet instance for pool service

Please make sure the abec sync is complete

```bash
$ docker exec -it abec /root/.bin/abec-linux-amd64-v0.12.5/start_abectl.sh getinfo
{
  "version": 120500,
  "protocolversion": 70002,
  "blocks": 235724,
  "bestblockhash": "94b703f9245a5e23791ad45cd59e913bea6f0d692aabba17d13bbf827cb1c2a3",
  "worksum": "9931285817077682975",
  "timeoffset": 1,
  "connections": 4,
  "proxy": "",
  "difficulty": 358412.68100879,
  "testnet": false,
  "relayfee": 0.000001,
  "errors": "",
  "nodetype": "NormalNode",
  "witnessserviceheight": 235695
}
```

Create abewallet data directory

```bash
$ mkdir ~/deploy/abel/data/abewallet
```

Download abewallet

```bash
$ cd ~/deploy/abel/data/bin
$ wget https://download.abelian.info/release/abewallet/abewallet-linux-amd64-v0.12.5.tar.gz
$ tar xf abewallet-linux-amd64-v0.12.5.tar.gz
$ rm -f abewallet-linux-amd64-v0.12.5.tar.gz
```

`docker-compose.yml` append abewallet configuration

```bash
$ cd ~/deploy/abel
$ vim docker-compose.yml
version: "3.9"

services:

  abec:
    image: debian:12
    container_name: abec
    restart: always
    network_mode: host
    volumes:
      - ./data/abec:/root/.abec
      - ./data/bin:/root/.bin
    command: /bin/bash -c '/root/.bin/abec-linux-amd64-v0.12.5/start_abec.sh > /dev/null 2>&1'

  abewallet:
    image: debian:12
    container_name: abewallet
    restart: always
    network_mode: host
    volumes:
      - ./data/abewallet:/root/.abewallet
      - ./data/bin:/root/.bin
    tty: true
```

Run the abewallet container

```bash
$ docker compose up -d abewallet
```

Enter the container

```bash
$ docker exec -it abewallet bash
```

Creating a wallet inside a container

```bash
$ /root/.bin/abewallet-linux-amd64-v0.12.5/start_abewallet.sh --create
Creating configuration file at /root/.abewallet/abewallet.conf
Enter the private passphrase for your new wallet:
Confirm passphrase:
Enter the public passphrase for your new wallet:
Confirm passphrase:
Are you sure want to use the same passphrase for public and private data? (n/no/y/yes) [no]: y
NOTE: Use the --walletpass option to configure your public passphrase.
Do you have an existing wallet seed you want to use? (n/no/y/yes) [no]:
Your wallet generation seed is:
f13c50564955661989298f41ab503d370f83bf84d0cba20e4d308e05c69e9844
the crypto version is 0
Your wallet mnemonic list is:
van,tip,better,naive,filter,art,caution,cradle,double,fold,aunt,host,wealth,thank,battle,bonus,pear,include,equip,bright,fragile,exercise,genre,page
IMPORTANT: Keep the version and seed in a safe place as you
will NOT be able to restore your wallet without it.
Please keep in mind that anyone who has access
to the seed can also restore your wallet thereby
giving them access to all your funds, so it is
imperative that you keep it in a secure location.
Once you have stored the seed in a safe and secure location, enter "OK" to continue: OK
Creating the wallet...
Please remember the initial address:
XXXXXXXXXX
2023-06-12 06:45:11.198 [INF] WLLT: Opened wallet
The wallet has been created successfully.
```

> Please save the `private passphrase`、`public passphrase`、`wallet mnemonic`、`initial address`.

Exit container

```bash
$ exit
```

Get abec's rpcuser and rpcpass

```bash
$ sudo egrep "rpcuser=|rpcpass=" data/abec/abec.conf
rpcuser=+U5XQRjdcO/qTHFX8RbsV/57ZQo=
rpcpass=d+pRr9F+4Lg+Ybp7qnLMSwQGKR0=
```

Copy abec certificate to abewallet

```bash
$ cp data/abec/rpc.cert data/abewallet/abec.cert
```

Modify abewallet configuration

```bash
$ sudo vim data/abewallet/abewallet.conf
abecrpcuser=+U5XQRjdcO/qTHFX8RbsV/57ZQo=
abecrpcpass=d+pRr9F+4Lg+Ybp7qnLMSwQGKR0=
recordrequest=true
```

Modify docker-compose.yml

```bash
$ vim docker-compose.yml
version: "3.9"

services:

  abec:
    image: debian:12
    container_name: abec
    restart: always
    network_mode: host
    volumes:
      - ./data/abec:/root/.abec
      - ./data/bin:/root/.bin
    command: /bin/bash -c '/root/.bin/abec-linux-amd64-v0.12.5/start_abec.sh > /dev/null 2>&1'

  abewallet:
    image: debian:12
    container_name: abewallet
    restart: always
    network_mode: host
    volumes:
      - ./data/abewallet:/root/.abewallet
      - ./data/bin:/root/.bin
    command: /bin/bash -c '/root/.bin/abewallet-linux-amd64-v0.12.5/start_abewallet.sh --walletpass=abelian.info > /dev/null 2>&1'
```

> Please change `--walletpass=abelian.info` to `--walletpass=<public passphrase>`

Delete abewallet container

```bash
$ docker rm -f abewallet
```

Run abewallet container

```bash
$ docker compose up -d abewallet
```

View abewallet logs

```bash
$ sudo tail -f data/abewallet/logs/mainnet/abewallet.log
```

When the following message appears, it means that abewallet has finished synchronizing

```
2023-06-12 07:16:27.449 [INF] WLLT: Done catching up block hashes
```

Get account balance

```bash
$ docker exec -it abewallet /root/.bin/abec-linux-amd64-v0.12.5/start_abectl.sh --wallet getbalancesabe
{"current_time":"2023-12-22 06:55:12.197470094 +0000 UTC m=+1227.233625353","current_height":235733,"current_block_hash":"f549e76cbc4d62dd3e399b2c7b6f2a38d122120ba8ee02423597ea59f8080e47","total_balance":0,"spendable_balance":0,"immature_cb_balance":0,"immature_tr_balance":0,"unconfirmed_balance":0}
```

Get Account Max No

```bash
$ docker exec -it abewallet /root/.bin/abewallet-linux-amd64-v0.12.5/start_abewalletctl.sh addressmaxsequencenumber
0
```

> This value is required to recover the wallet.
