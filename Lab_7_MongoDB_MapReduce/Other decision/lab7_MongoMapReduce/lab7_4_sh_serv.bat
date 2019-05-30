goto start
rmdir /s/q E:\Have_Backup\ProgMongoDB\data\db9
mkdir E:\Have_Backup\ProgMongoDB\data\db9
:start
cd E:\Have_Backup\ProgMongoDB\MongoDB\Server3\3.4\bin
E:
mongod --shardsvr --dbpath E:\Have_Backup\ProgMongoDB\data\db9 --port 27009 --logpath E:\Have_Backup\ProgMongoDB\data\db9\log.log  --smallfiles --oplogSize 128