# Deploy an abec node for pool service

OS Information

```bash
$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 22.04.2 LTS
Release:	22.04
Codename:	jammy
```

Install the required software

```bash
$ sudo apt install curl vim -y
```

Creating a data directory

```bash
$ mkdir -p ~/deploy/abel/data/{abec,bin}
```

> ~/deploy/abel/data/abec is the datadir of abec

Download abec

```bash
$ cd ~/deploy/abel/data/bin
$ wget https://download.abelian.info/release/abec/abec-linux-amd64-v0.12.5.tar.gz
$ tar xf abec-linux-amd64-v0.12.5.tar.gz
$ rm -f abec-linux-amd64-v0.12.5.tar.gz
```

Create the `docker-compose.yaml` file

```bash
$ cd ~/deploy/abel/
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
```

Run abec

```bash
$ docker compose up -d
```

Add the following option in the abec.conf configuration file:

```bash
$ sudo vim ~/deploy/abel/data/abec/abec.conf
txindex=1
addpeer=gpool-service-charlie.abelian.info
addpeer=gpool-service-dior.abelian.info
addpeer=pool-service-alicia.abelian.info
addpeer=pool-service-baker.abelian.info
```

Restart abec

```bash
$ docker restart abec
```

View abec sync status

```bash
$ docker exec -it abec /root/.bin/abec-linux-amd64-v0.12.5/start_abectl.sh getinfo
{
  "version": 120500,
  "protocolversion": 70002,
  "blocks": 5407,
  "bestblockhash": "00000000e5ae492b5323acd3afeb84bc18a37326916471789b8936ee8afdb689",
  "worksum": "15638783944576",
  "timeoffset": 0,
  "connections": 3,
  "proxy": "",
  "difficulty": 1,
  "testnet": false,
  "relayfee": 0.000001,
  "errors": "",
  "nodetype": "SemiFullNode",
  "witnessserviceheight": 0
}
```

View abec log

```bash
$ sudo tail -f ~/deploy/abel/data/abec/logs/mainnet/abec.log
```

Stop abec

```bash
docker stop abec
```

Start abec

```bash
docker start abec
```
