@echo off
cd "C:\Program Files\MongoDB\Server\4.0\bin\"

::Starting Instances:
start "Run Instance Server 1" /MIN mongod --shardsvr --dbpath lab5\Instance1 --logpath lab5\Instance1\log --bind_ip localhost --port 1001
start "Run Instance Server 2" /MIN mongod --shardsvr --dbpath lab5\Instance2 --logpath lab5\Instance2\log --bind_ip localhost --port 1002
start "Run Instance Server 3" /MIN mongod --shardsvr --dbpath lab5\Instance3 --logpath lab5\Instance3\log --bind_ip localhost --port 1003
::Starting Config Server:
start "Run Config Server" /MIN mongod --configsvr --replSet replset --dbpath lab5\Config --logpath lab5\Config\log --port 1004
REM Выполнить только один раз:
REM mongo --ports 1004
REM rs.initiate({_id:"replset",configsvr:true,members:[{_id:0,host:"localhost:1004"}]})

::Starting Mongos:
start "Run Mongos Server" /MIN mongos --configdb replset/127.0.0.1:1004 --logpath lab5\Mongos\log --port 1005

TIMEOUT /T 10
start "Console Mongos" call mongo --port 1005

REM Віполнить только один раз:
REM sh.addShard('localhost:1001')
REM sh.addShard('localhost:1002')
REM sh.addShard('localhost:1003')
REM Включаем балансировку для БД "shop"
REM sh.enableSharding('shop')

::PAUSE

::Проверить статус шардинга
::sh.status()

