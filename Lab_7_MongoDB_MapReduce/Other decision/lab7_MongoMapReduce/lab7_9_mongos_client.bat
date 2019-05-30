goto start

rmdir /s/q E:\Have_Backup\ProgMongoDB\data\host
mkdir E:\Have_Backup\ProgMongoDB\data\host

echo " " >> "E:\Have_Backup\ProgMongoDB\data\cfg\configsvr.cfg"
"E:\Have_Backup\ProgMongoDB\data\cfg\configsvr.cfg"

:start
cd E:\Have_Backup\ProgMongoDB\MongoDB\Server4\3.4\bin
E:
mongo --host localhost --port 27040