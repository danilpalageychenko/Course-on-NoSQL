goto start
rmdir /s/q E:\Have_Backup\ProgMongoDB\data\db10
mkdir E:\Have_Backup\ProgMongoDB\data\db10
:start
cd E:\Have_Backup\ProgMongoDB\MongoDB\Server3\3.4\bin
E:
mongod --shardsvr --dbpath E:\Have_Backup\ProgMongoDB\data\db10 --port 27010 --logpath E:\Have_Backup\ProgMongoDB\data\db10\log.log  --smallfiles --oplogSize 128