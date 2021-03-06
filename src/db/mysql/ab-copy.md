---
category: MySQL
---
# 8 AB复制

## MySQL AB简介

AB复制又称主从复制，实现的是数据同步。

如果要做MySQL AB复制，数据库版本尽量保持一致。如果版本不一致，从服务器版本高于主服务器，但是版本不一致不能做双向复制。

MySQL AB复制有什么好处呢？

* 解决宕机带来的数据不一致，因为MySQL AB复制可以实时备份数据；
* 减轻数据库服务器压力，多台服务器的性能一般比单台要好。但是MySQL AB复制不适用于大数据量，如果是大数据环境，推荐使用集群。

​    MySQL复制（replication）是一个异步的复制，从一个MySQL实例（Master）复制到另一个MySQL（Slave）。实现整个主从复制，需要由Master服务器上的IO进程，和Slave服务器上的Sql进程和IO进程共同完成。

## 主从复制的过程

​    要实现主从复制，首先必须打开Master端的binary log(bin-log)功能，因为整个MySQL复制过程实际上就是Slave从Master端获取相应的二进制日志，然后再在自己slave端完全顺序的执行日志中所有记录的各种操作。
主从复制的基本过程：
​    1）MySQL Slave端的IO进程连接上Master，向Master请求指定日志文件的指定位置（或者从最开始的日志）之后的日志内容；

​    2）Master接收到来自Slave的IO进程的请求后，负责复制的IO进程根据Slave的请求信息，读取相应日志内容，返回给Slave的IO的进程。并将本次请求读到的bin-log文件名及位置一起返回给Slave端。

​    3）Slave的IO进程接收到信息后，将接收到的日志内容依次添加Slave端的realy-log文件的最末端，并将读取到的Master端的bin-log的文件名和位置记录到master-info文件中，以便在下一次读取的时候能够清楚的告诉Master“我需要从某个bin-log的哪个位置开始往后的日志内容，请发给我；”

​    4）Slave的Sql进程监测到relay-log中新增了内容后，会马上解析relay-log的内容成为在Master端真实执行时候的那些可执行的内容，并在自身执行。

### 主服务器操作

#### 全备，并在从机恢复数据

#### 开启binlog日志

```
vim /etc/my.cnf
[mysqld]
log-bin = master
log-bin-index = master
server-id = 1
```
```
service mysqld restart
```
#### 授权从服务器

授权从服务器，可以传输binlog日志

```
grant replication slave on *.* to slave@'从服务器' identified by '123';
```
### 从服务器操作

#### 导入主服务器的数据

```
mysql -u root < all.sql
```

#### 改配置文件

```
vim /etc/my.cnf
[mysqld]
server-id = 2
```
#### 配置主服务器的信息

```
>stop slave;
>change master to
-> master_host = '主服务器'，
->master_user = 'slave',
->master_password = '123',
->master_port = 3306,
->master_log_file = 'mysql-bin.000001',
-> master_log_pos=120;
>start slave;
```
### 校验
```
> show slave status\G
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
```
表示成功


​    
