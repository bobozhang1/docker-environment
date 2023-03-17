# MYSQL

> 本文档的目的是快速的利用容器技术搭建mysql数据服务

## 创建网络

```php
docker network create --subnet=172.16.0.0/24 web
```
## 创建容器

```shell
docker run -d \
    --name mysql8.0 \
    --env MYSQL_ROOT_HOST=% \
    --env MYSQL_ROOT_PASSWORD=Ab123456 \
    --network web \
    --ip 172.16.0.33 \
    -p 3306:3306 \
    -v ~/web/service/mysql8.0:/var/lib/mysql \
    --restart always \
    mysql:8
```
docker-compose.yml

```shell
version: "3"
services:
  mysql8.0:
    image: mysql:8
    container_name: mysql8.0
    privileged: true
    networks:
      web:
        ipv4_address: 172.16.0.33
    ports:
      - "3306:3306"
    volumes:
      - mysql8.0:/var/lib/mysql
    environment:
      - MYSQL_ROOT_HOST=%
      - MYSQL_ROOT_PASSWORD=Ab123456
volumes:
  mysql8.0:
    name: mysql8.0
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/service/mysql8.0

```
docker-compose.yml

```shell
version: "3"
services:
  mysql5.7:
    image: mysql:8
    container_name: mysql5.7
    privileged: true
    networks:
      web:
        ipv4_address: 172.16.0.33
    ports:
      - "3306:3306"
    volumes:
      - mysql5.7:/var/lib/mysql
    environment:
      - MYSQL_ROOT_HOST=%
      - MYSQL_ROOT_PASSWORD=Ab123456
volumes:
  mysql5.7:
    name: mysql5.7
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/service/mysql5.7
```
修改配置信息

```shell
docker exec mysql echo "sql_mode=STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION" >> /etc/mysql/conf.d/mysql.cnf
```
## 数据库备份

backup.sh

```shell
#!/bin/bash
# database
database=${1}
backup_path=/var/web/backup/database
# 文件名称
file=$backup_path/${database}_$(date "+%Y_%m_%d_%H_%M_%S").sql
# 备份
docker exec mysql mysqldump -u root -paiguangjii $database > $file
# 打包
tar -czf $file.tar.gz $file
# 删除旧文件
rm $file
echo "数据库\"${database}\"备份成功"

#!/bin/bash

# Database name
database=${1}
path=/var/lib/postgresql/backup
# Backup file name
filename=${database}_$(date "+%Y%m%d-%H%M%S").bak

# Backing up
docker exec mysql mysqldump -u root -paiguangjii $database > ${path}/$file
echo "The ${database} database backup was successful!"
```

## Mysql数据库自动备份

### 1、编写.sh脚本 另存为 backup.sh
```shell
#!/bin/bash
count=0
# 文件路径
path=/home/web/backup/

# 循环
for db in xyun1688 xyuntest
do
	# 文件名称
	file=$path${db}_$(date "+%Y_%m_%d_%H_%M_%S").sql
	# 备份
	mysqldump -u root -paiguangjii $database > $file
	# 打包
	tar -czvf $file.tar.gz $file
	# 删除旧文件
	/bin/rm $file
	((count++))
	echo "数据库\"${db}\"备份成功"
done
# 备份完成
echo "已完成$count个数据库的备份"

# 删除超过时间的备份文件
day=3
find $path -mtime +$day -type f -name '*.gz' -exec rm -f {} \;
echo "$day天前的备份数据已删除"
```

### 2.使脚本具有执行权限
```shell
chmod +x /data/sh/db/backup.sh
# 或cd到当前脚本命令目录运行：
chmod +x ./backup.sh
```
### 3.添加计划任务

```shell
crontab -e
# 每天 3 点钟执行备份
01   3 * * * root/home/backup/DatabaseName.sh
```
### 4、常见问题

1、sh脚本报错“^M: bad interpreter”解决方法
这时因为这个sh脚本可能是在Windows电脑上写的，或是在Windows电脑上复制了一些内容到脚本中，或进行了一些不正确的操作，必须将脚本格式由dos改为unix才能解决问题

第一步：首先在Terminal中输入“vim 脚本”命令。 这时会看到文件最下方显示的是“[dos]”，这就表示这个脚本是dos格式的啦。如果没有看到，可以输入“:set ff”，按下Enter键，查看脚本格式。

第二步 输入“:set ff=unix”后按Enter，将格式更改为unix格式。 然后再输入“:set ff”，按下Enter键，这时如果看到“fileformat=unix”，这表明格式修改正确啦。

第三步 输入“:wq”，保存并退出脚本。 再次运行脚本，看，不再出错啦。

注意，编辑sh脚本前，一定要将输入法切换为英文半角符号状态。