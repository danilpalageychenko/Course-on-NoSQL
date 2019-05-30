goto start
rmdir /s/q E:\Have_Backup\ProgMongoDB\data\db6
mkdir E:\Have_Backup\ProgMongoDB\data\db6
:start
cd E:\Have_Backup\ProgMongoDB\MongoDB\Server\3.4\bin
E:
mongod --shardsvr --dbpath E:\Have_Backup\ProgMongoDB\data\db6 --port 27006 --logpath E:\Have_Backup\ProgMongoDB\data\db6\log.log  --smallfiles --oplogSize 128