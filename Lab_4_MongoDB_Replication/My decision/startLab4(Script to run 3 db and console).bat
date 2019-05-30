@echo off
::cmd \k
cd "C:\Program Files\MongoDB\Server\4.0\bin\"
rem Скрывает процесы и запускает в фоне
rem start "Run Server 1" /b /MIN mongod --replSet rs0 --dbpath node1 --logpath node1\log --bind_ip localhost --port 1001 >NUL 2>&1
rem start "Run Server 2" /b /MIN mongod --replSet rs0 --dbpath node2 --logpath node2\log --bind_ip localhost --port 1002 >NUL 2>&1
rem start "Run Server 3" /b /MIN mongod --replSet rs0 --dbpath node3 --logpath node3\log --bind_ip localhost --port 1003 >NUL 2>&1

start "Run Server 1" /MIN mongod --replSet rs0 --dbpath node1 --logpath node1\log --bind_ip localhost --port 1001
start "Run Server 2" /MIN mongod --replSet rs0 --dbpath node2 --logpath node2\log --bind_ip localhost --port 1002
start "Run Server 3" /MIN mongod --replSet rs0 --dbpath node3 --logpath node3\log --bind_ip localhost --port 1003

TIMEOUT /T 4 > NUL
start "Console Server 1" call mongo --port 1001
start "Console Server 2" call mongo --port 1002
start "Console Server 3" call mongo --port 1003
::PAUSE
