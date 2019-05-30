goto start

rmdir /s/q E:\Have_Backup\ProgMongoDB\data\host
mkdir E:\Have_Backup\ProgMongoDB\data\host

echo " " >> "E:\Have_Backup\ProgMongoDB\data\cfg\configsvr.cfg"
"E:\Have_Backup\ProgMongoDB\data\cfg\configsvr.cfg"

:start
cd E:\Have_Backup\ProgMongoDB\MongoDB\Server4\3.4\bin
E:
mongos --configdb replset/localhost:27006,localhost:27007,localhost:27008,localhost:27009,localhost:27010,localhost:27030 --port 27040