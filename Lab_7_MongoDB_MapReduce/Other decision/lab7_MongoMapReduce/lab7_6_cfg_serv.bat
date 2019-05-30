goto start
rmdir /s/q E:\Have_Backup\ProgMongoDB\data\cfg
mkdir E:\Have_Backup\ProgMongoDB\data\cfg
echo " " >> "E:\Have_Backup\ProgMongoDB\data\cfg\configsvr.cfg"

"E:\Have_Backup\ProgMongoDB\data\cfg\configsvr.cfg"
:start
cd E:\Have_Backup\ProgMongoDB\MongoDB\Server4\3.4\bin
E:
mongod --configsvr --dbpath E:\Have_Backup\ProgMongoDB\data\cfg --replSet replset --port 27030 --logpath E:\Have_Backup\ProgMongoDB\data\cfg\log.log  --smallfiles --oplogSize 128 --config E:\Have_Backup\ProgMongoDB\data\configsvr.cfg