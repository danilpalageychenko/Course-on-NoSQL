goto start
rmdir /s/q E:\Have_Backup\ProgMongoDB\data\db8
mkdir E:\Have_Backup\ProgMongoDB\data\db8
:start
cd E:\Have_Backup\ProgMongoDB\MongoDB\Server2\3.4\bin
E:
mongod --shardsvr --dbpath E:\Have_Backup\ProgMongoDB\data\db8 --port 27008 --logpath E:\Have_Backup\ProgMongoDB\data\db8\log.log  --smallfiles --oplogSize 128