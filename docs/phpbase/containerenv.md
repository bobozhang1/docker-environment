# PHP本地开发环境

## 构建镜像

php8.2/latest

```shell
docker pull dev:php8.2
```
php8.1

```shell
docker pull dev:php8.1
```

php8.0

```shell
docker pull dev:php8.0
```

php7.4

```shell
docker pull dev:php7.4
```

## 创建网络

```shell
docker network create --subnet=172.16.0.0/24 web
```
## 运行容器

```shell
docker run -d \
--name web \
--network web \
-p 80:80 \
-v /var/web/project:/var/web/project \
-v /var/web/service/nginx/conf.d:/etc/nginx/conf.d \
--restart always \
wangqifei/dev
```
## Nginx

站点配置 /etc/nginx/conf.d

可用模板 /etc/nginx/sites-available

基础命令

```shell
docker exec web nginx -s {stop|quit|reopen|reload}
```

## Laravel Octane

安装依赖
```shell
npm install --save-dev chokidar
```
代码热加载
```shell
php artisan octane:start --server=swoole --host=0.0.0.0 --port=8000 --watch
```
## Docker Compose

```shell
version: "3"
services:
  web:
    image: wangqifei/dev:php8.2
    container_name: web
    privileged: true
    volumes:
      - project:/var/web/project
      - nginx:/etc/nginx/conf.d
    networks:
      web:
        ipv4_address: 172.16.0.80
    ports:
      - "80:80"
    restart: always
  pgsql:
    image: postgres:13-alpine
    container_name: pgsql
    privileged: true
    networks:
      web:
        ipv4_address: 172.16.0.54
    ports:
      - "5432:5432"
    volumes:
      - pgsql:/etc/postgresql
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=Ab123456
networks:
  web:
    name: web
    ipam:
      driver: default
      config:
        - subnet: 172.16.0.0/24
volumes:
  project:
    name: project
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/project
  nginx:
    name: nginx
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/service/nginx/conf.d
  pgsql:
    name: pgsql
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/service/pgsql

```