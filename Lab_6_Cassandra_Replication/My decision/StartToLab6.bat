@echo off
color 17
cd "C:\Program Files\DataStax Community\apache-cassandra\bin"
start "Casandra server" cassandra -f
::timeout -t 10
pause
start "Console Casandra" cqlsh 192.168.105.1
start nodetool status