goto start
rmdir /s/q E:\Have_Backup\ProgMongoDB\data\db7
mkdir E:\Have_Backup\ProgMongoDB\data\db7
:start
cd E:\Have_Backup\ProgMongoDB\MongoDB\Server\3.4\bin
E:
mongod --shardsvr --dbpath E:\Have_Backup\ProgMongoDB\data\db7 --port 27007 --logpath E:\Have_Backup\ProgMongoDB\data\db7\log.log  --smallfiles --oplogSize 128