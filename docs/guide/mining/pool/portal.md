# Deploy a new portal

## Run MongoDB

```bash
$ mkdir -p ~/deploy/mongodb
$ vim ~/deploy/mongodb/docker-compose.yml
version: "3.9"

services:

  mongodb:
    image : mongo:6
    container_name: mongodb
    restart: always
    network_mode: host
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: 123456
    volumes: [ "./data:/data/db" ]
$ cd ~/deploy/mongodb
$ docker compose up -d
```

> Please change MONGO_INITDB_ROOT_PASSWORD to your own password.

## Run API

```bash
$ mkdir -p ~/deploy/abelapi
$ cd ~/deploy/abelapi
$ wget https://download.abelian.info/release/abelapi/abelapi-image-20240124.tar
$ docker load < abelapi-image-20240124.tar
$ rm -f abelapi-image-20240124.tar
$ docker tag 0e48c2fa3460 abelapi
$ vim docker-compose.yml
version: '3'

services:

  api:
    image: abelapi
    container_name: api
    network_mode: host
    restart: always
    volumes:
      - "./tmp:/opt/tmp"
    env_file: [ ".env" ]
    command: /bin/sh -c "node build/index.js >> /opt/tmp/logs/api.log 2>&1"

  syncer_mined:
    image: abelapi
    container_name: syncer_mined
    network_mode: host
    restart: always
    volumes: [ "./tmp:/opt/tmp" ]
    env_file: [ ".env" ]
    command: /bin/sh -c "node build/syncer/mined.js >> /opt/tmp/logs/syncer.mined.log 2>&1"
$ mkdir -p tmp/logs
$ cp ~/deploy/abel/data/abec/rpc.cert ./tmp/
$ vim .env
export EXPRESS_HOST="127.0.0.1"
export EXPRESS_PORT="3000"

export MONGO_URI="mongodb://127.0.0.1"
export MONGO_USER="root"
export MONGO_PASS="123456"
export MONGO_ABELSCAN_DBNAME="abelscan"
export MONGO_ABELPOOL_DBNAME="abelpool"

export ABEC_URL="https://127.0.0.1:8667"
export ABEC_CERT="/opt/tmp/rpc.cert"
export ABEC_RPC_USER="+U5XQRjdcO/qTHFX8RbsV/57ZQo="
export ABEC_RPC_PASS="d+pRr9F+4Lg+Ybp7qnLMSwQGKR0="

export JWT_SECRET="Ka1DYwunwu1yYrQr"
export POOL_DATABASE_URL="mysql://root:my-secret-pw@127.0.0.1:3306/abe_mining_pool"
```

> Please change JWT_SECRET to your own secret string(random string).

```bash
$ docker compose up -d
```

## Run Nginx

```bash
$ mkdir -p ~/deploy/nginx/{templates,html}
$ vim ~/deploy/nginx/docker-compose.yml
version: "3"

services:

  nginx:
    image: nginx:alpine
    container_name: nginx
    network_mode: host
    restart: always
    volumes:
      - ./templates:/etc/nginx/templates:ro
      - ./html:/usr/share/nginx/html:ro
$ cd ~/deploy/nginx/templates/
$ vim abelpool.conf.template
server_tokens off;
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=cache:10m max_size=1g;

server {
    listen 8081;
    server_name _;

    add_header X-Cache-Status $upstream_cache_status;

    underscores_in_headers on;

    add_header Access-Control-Allow-Origin * always;
    add_header Access-Control-Allow-Headers * always;
    add_header Access-Control-Allow-Methods * always;
    add_header 'Access-Control-Allow-Credentials' 'true';

    if ($request_method = OPTIONS ) {
        return 200;
    }

    location /v1/pool/user-mining-infos {
        proxy_cache cache;
        proxy_buffering on;
        proxy_cache_valid 200 10m;
        proxy_cache_key $scheme$request_method$host$request_uri$http_authorization;

        proxy_pass http://127.0.0.1:3000/pool/user-mining-infos;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 43200000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
    }

    location /v1/pool/mined-block-infos {
        proxy_cache cache;
        proxy_buffering on;
        proxy_cache_valid 200 10m;

        proxy_pass http://127.0.0.1:3000/pool/mined-block-infos;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 43200000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
    }

    location /v1/pool/user {
        proxy_cache cache;
        proxy_buffering on;
        proxy_cache_valid 200 5m;
        proxy_cache_key $scheme$request_method$host$request_uri$http_authorization;

        proxy_pass http://127.0.0.1:3000/pool/user;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 43200000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
    }

    location /v1/pool/ {
        proxy_pass http://127.0.0.1:3000/pool/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 43200000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
    }

    location / {
      root   /usr/share/nginx/html/abelpool;
      index  index.html index.htm;
      try_files $uri $uri/ /index.html;
    }
}
$ cd ../html/
$ wget https://download.abelian.info/release/pool/abelpool.tar.gz
$ tar xf abelpool.tar.gz
$ rm -f abelpool.tar.gz
$ docker compose up -d
```

Please Open Browser to visit http://IP:8081
