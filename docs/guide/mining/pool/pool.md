---
outline: deep
---

# Deploy a new pool service

## Run MySQL

```bash
$ mkdir ~/deploy/mysql
$ cd ~/deploy/mysql
$ vim docker-compose.yaml
version: '3.9'

services:

  mysql:
    image: mysql:8.0
    container_name: mysql
    network_mode: host
    restart: always
    volumes:
      - ./data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: my-secret-pw

$ docker compose up -d
```

> Please change the password `my-secret-pw` to your own password.

## Run pool-server

Create Pool directory

```bash
$ mkdir -p ~/deploy/pool/data/home-data
```

Download pool-server software

```bash
$ cd ~/deploy/pool/data
$ wget https://download.abelian.info/release/pool-server/abe-miningpool-server-linux-amd64-v0.12.0.tar.gz
$ tar xf abe-miningpool-server-linux-amd64-v0.12.0.tar.gz
$ rm -f abe-miningpool-server-linux-amd64-v0.12.0.tar.gz
```

Get the rpcuser, rpcpassword of abec and abewallet

```bash
$ sudo egrep "rpcuser=|rpcpass=" ~/deploy/abel/data/abec/abec.conf
rpcuser=+U5XQRjdcO/qTHFX8RbsV/57ZQo=
rpcpass=d+pRr9F+4Lg+Ybp7qnLMSwQGKR0=

$ sudo egrep "rpcuser=|rpcpass=" ~/deploy/abel/data/abewallet/abewallet.conf
rpcuser=HoMo0HZJroccUqUGK3c/v+B2O4c=
rpcpass=fmHws0tm/J9tQSu1btB1uumdeb0=
```

Copy the abec and abewallet certificates

```bash
$ cd abe-miningpool-server-linux-amd64-v0.12.0
$ sudo cp ~/deploy/abel/data/abec/rpc.cert ./abec.cert
$ sudo cp ~/deploy/abel/data/abewallet/rpc.cert ./abewallet.cert
```

Configuring the pool-server

```bash
$ vim miningpool-server.conf
dbaddress=127.0.0.1:3306
dbusername=root
dbpassword=my-secret-pw
abecrpcuser=+U5XQRjdcO/qTHFX8RbsV/57ZQo=
abecrpcpass=d+pRr9F+4Lg+Ybp7qnLMSwQGKR0=
miningaddr=<youraddress>
servermanagefeeaddr=<yourmanangefeeaddress>
usewallet=true
walletrpcuser=HoMo0HZJroccUqUGK3c/v+B2O4c=
walletrpcpass=fmHws0tm/J9tQSu1btB1uumdeb0=
enabletcpsocket=true
```

> The above example configuration

Create docker-compose.yml configuration

```bash
$ cd ~/deploy/pool
$ vim docker-compose.yml
version: "3.9"

services:

  pool:
    image: debian:12
    container_name: pool
    restart: always
    network_mode: host
    working_dir: /data/abe-miningpool-server-linux-amd64-v0.12.0
    volumes:
      - ./data:/data
      - ./data/home-data:/root/.abe-miningpool-server
    tty: true
$ docker compose up -d
```

View IP address

```bash
$ curl ip.sb
35.223.77.84
```

Generate certificate and admin password，Certificates can only be generated when running for the first time

```bash
$ docker exec -it pool bash
$ ./abe-miningpool-server
Use config file: miningpool-server.conf
2023-06-12 09:20:56.253 [INF] POOL: Version 0.12.0
2023-06-12 09:20:56.253 [INF] POOL: Enable TCP socket server
2023-06-12 09:20:56.253 [INF] POOL: Delay interval: 50
2023-06-12 09:20:56.253 [INF] POOL: Reward per blocks: 100
2023-06-12 09:20:56.253 [INF] POOL: Reward maturity: 200
2023-06-12 09:20:56.253 [INF] POOL: Manage fee: 20%
2023-06-12 09:20:56.253 [INF] POOL: Generating TLS certificates of mining pool...
Please enter the ip address of your server (press enter if you just test on local area network): 35.223.77.84 # Please fill in the domain name or IP.
2023-06-12 09:21:06.240 [INF] POOL: Done generating TLS certificates
2023-06-12 09:21:06.240 [INF] POOL: Find 1 mining address in total
2023-06-12 09:21:06.240 [INF] POOL: Find 1 server management fee address in total
2023-06-12 09:21:06.240 [INF] DAL: Creating database abe_mining_pool...
2023-06-12 09:21:06.247 [INF] DAL: Creating table meta_infos...
2023-06-12 09:21:06.271 [INF] DAL: Creating table user_infos...
2023-06-12 09:21:06.290 [INF] DAL: Creating table detailed_share_infos...
2023-06-12 09:21:06.313 [INF] DAL: Creating table mined_block_infos...
2023-06-12 09:21:06.341 [INF] DAL: Creating table allocation_infos...
2023-06-12 09:21:06.359 [INF] DAL: Creating table user_share_infos...
2023-06-12 09:21:06.384 [INF] DAL: Creating table order_infos...
2023-06-12 09:21:06.404 [INF] DAL: Creating table order_transaction_infos...
2023-06-12 09:21:06.436 [INF] DAL: Creating table config_infos...
2023-06-12 09:21:06.453 [INF] DAL: Connecting to database abe_mining_pool at 127.0.0.1:3306...
2023-06-12 09:21:06.454 [INF] DAL: Successfully connect to database
It seems that it is the first time you start the server, please specify the password for admin: abelian.info # Please enter admin password
2023-06-12 09:21:17.152 [INF] POOL: Successfully generate account for admin, please use this password for RPC authentication
```

> Please save the admin password

Now you can ctrl+c to exit the program and modify docker-compose.yml

```bash
$ docker rm -f pool
$ vim docker-compose.yml
version: "3.9"

services:

  pool:
    image: debian:12
    container_name: pool
    restart: always
    network_mode: host
    working_dir: /data/abe-miningpool-server-linux-amd64-v0.12.0
    volumes:
      - ./data:/data
      - ./data/home-data:/root/.abe-miningpool-server
    command: /bin/bash -c './abe-miningpool-server >> server.log 2>&1'
$ docker compose up -d
```
View log

```bash
$ sudo tail -f data/home-data/logs/abe-miningpool-server.log
```

Modify poolctl.conf

```bash
$ vim data/abe-miningpool-server-linux-amd64-v0.12.0/poolctl.conf
rpcuser=admin
rpcpass=abelian.info
```

> Please change the password `abelian.info` to your own admin password.

View pool status

```bash
$ docker exec -it pool ./poolctl getstatus
{
  "user_num": 1,
  "miner_num": 0,
  "mined_block_num": 0,
  "unfinished_order_num": 0,
  "enable_auto_flag": true,
  "auto_flag": false
}
```

Enable the fund-transfer function

$ docker exec -it pool ./poolctl walletpassphrase "abelian.info"
{
  "success": true,
  "detail": ""
}
$ docker exec -it pool ./poolctl getstatus
{
  "user_num": 1,
  "miner_num": 0,
  "mined_block_num": 0,
  "unfinished_order_num": 0,
  "enable_auto_flag": true,
  "auto_flag": true
}

> Please change the password `abelian.info` to your own wallet [private passphrase].

If there is a firewall, please open port 27778.

## Make a client package

Download abelminer client

```bash
$ mkdir ~/dist && cd ~/dist
$ wget https://download.abelian.info/release/pool/abelminer-linux-amd64-v2.0.2.tar.gz
$ tar xf abelminer-linux-amd64-v2.0.2.tar.gz
$ rm -f abelminer-linux-amd64-v2.0.2.tar.gz
```

Copy certificate

```bash
$ cd abelminer-linux-amd64-v2.0.2
$ rm -f poolcerts/gpool-service-charlie.abelian.info.cert
$ rm -f poolcerts/gpool-service-dior.abelian.info.cert
$ cp ~/deploy/pool/data/abe-miningpool-server-linux-amd64-v0.12.0/pool.cert ./poolcerts/35.223.77.84.cert
```

> Please change the `35.223.77.84` to your own domain name or IP.

After packaging, it can be distributed to users

```bash
$ cd ../
$ tar zcf abelminer-linux-amd64-v2.0.2.tar.gz abelminer-linux-amd64-v2.0.2
$ rm -fr abelminer-linux-amd64-v2.0.2
```

For client use, refer to the README in abelminer-linux-amd64-v2.0.2, and change the domain name to your own IP or domain name.
