#!/bin/bash


#https://docs.mongodb.com/manual/tutorial/deploy-replica-set-for-testing/


#в 5_6_ запустить:
#mongo --host localhost --port 27030 
#rs.initiate({_id:"replset",configsvr:true,members:[{_id:0,host:"localhost:27030"}]})

#в 5_8_ запустить:
#mongo --host localhost --port 27040
#sh.addShard("localhost:27006")
#sh.addShard("localhost:27007")
#sh.addShard("localhost:27008")
#sh.addShard("localhost:27009")

#sh.enableSharding('laba')

#sh.status()


SRV_PATH="/srv/mongodb/"
IP="93.75.18.68"
LOG_FILE="/var/log/mongodb/"


SHARD_NAME="replset"

CONFIG_SERV_0_PATH="${SRV_PATH}${SHARD_NAME}-C0"
CONFIG_SERV_0_PORT="27030"
CONFIG_SERV_0_LOG="${LOG_FILE}${SHARD_NAME}-C0"


SHARD_0_PATH="${SRV_PATH}${SHARD_NAME}-0"
SHARD_0_PORT="27006"
SHARD_0_LOG="${LOG_FILE}${SHARD_NAME}-0"
SHARD_1_PATH="${SRV_PATH}${SHARD_NAME}-1"
SHARD_1_PORT="27007"
SHARD_1_LOG="${LOG_FILE}${SHARD_NAME}-1"
SHARD_2_PATH="${SRV_PATH}${SHARD_NAME}-2"
SHARD_2_PORT="27008"
SHARD_2_LOG="${LOG_FILE}${SHARD_NAME}-2"
SHARD_3_PATH="${SRV_PATH}${SHARD_NAME}-3"
SHARD_3_PORT="27009"
SHARD_3_LOG="${LOG_FILE}${SHARD_NAME}-3"


MONGOS_0_PORT="27040"


help() {
	echo "LOCAL IP IS: $IP"
	echo "Lab4.sh [param]"
	echo "  show  - show mongod process"
	echo "  start - "
	echo "  stop  - killall mongod"
	echo "  clean - $BD_0_PATH, $BD_1_PATH, $BD_2_PATH"
}

show_mongod() {
	ps aux | grep -E "mongod|mongos"

	echo show ok
}

start_env() {
	echo "update: $CONFIG_SERV_0_PATH"
	mkdir -p $CONFIG_SERV_0_PATH
	mkdir -p $SHARD_0_PATH
	mkdir -p $SHARD_1_PATH
	mkdir -p $SHARD_2_PATH
	mkdir -p $SHARD_3_PATH
}

clean_env() {
	echo "	clean - $CONFIG_SERV_0_PATH $SHARD_0_PATH $SHARD_1_PATH $SHARD_2_PATH $SHARD_3_PATH"
	rm -rf $CONFIG_SERV_0_PATH
	rm -rf $SHARD_0_PATH
	rm -rf $SHARD_1_PATH
	rm -rf $SHARD_2_PATH
	rm -rf $SHARD_3_PATH
	echo clean ok
}


check_root() {
	# Make sure only root can run our script
	if [ "$(id -u)" != "0" ]; then
	   echo "This script must be run as root" 1>&2
	   help
	   exit 1
	fi
}

stop_mongod() {
	killall mongod
	killall mongos
	echo stop ok
}

start_mongod() {
	echo "START:"
	
	echo [DEBUG]: mongod --configsvr --dbpath "$CONFIG_SERV_0_PATH" --replSet "$SHARD_NAME" --port "$CONFIG_SERV_0_PORT"  --bind_ip localhost,"$IP" --logpath "$CONFIG_SERV_0_LOG"  --smallfiles --oplogSize 128
	echo [DEBUG]: mongod --shardsvr --dbpath "$SHARD_0_PATH" --port "$SHARD_0_PORT" --bind_ip localhost,"$IP" --logpath "$SHARD_0_LOG" --smallfiles --oplogSize 128
	echo [DEBUG]: mongod --shardsvr --dbpath "$SHARD_1_PATH" --port "$SHARD_1_PORT" --bind_ip localhost,"$IP" --logpath "$SHARD_1_LOG" --smallfiles --oplogSize 128
	echo [DEBUG]: mongod --shardsvr --dbpath "$SHARD_2_PATH" --port "$SHARD_2_PORT" --bind_ip localhost,"$IP" --logpath "$SHARD_2_LOG" --smallfiles --oplogSize 128
	echo [DEBUG]: mongod --shardsvr --dbpath "$SHARD_3_PATH" --port "$SHARD_3_PORT" --bind_ip localhost,"$IP" --logpath "$SHARD_3_LOG" --smallfiles --oplogSize 128
	echo you should start MONGOS
	echo [DEBUG]: mongos --configdb "$SHARD_NAME"/"$IP":"$CONFIG_SERV_0_PORT" --port "$MONGOS_0_PORT"

	#Config Server
	mongod --configsvr --dbpath "$CONFIG_SERV_0_PATH" --replSet "$SHARD_NAME" --port "$CONFIG_SERV_0_PORT"  --bind_ip localhost,"$IP" --logpath "$CONFIG_SERV_0_LOG"  --smallfiles --oplogSize 128 &
	#SHARD
	mongod --shardsvr --dbpath "$SHARD_0_PATH" --port "$SHARD_0_PORT" --bind_ip localhost,"$IP" --logpath "$SHARD_0_LOG" --smallfiles --oplogSize 128 &
	mongod --shardsvr --dbpath "$SHARD_1_PATH" --port "$SHARD_1_PORT" --bind_ip localhost,"$IP" --logpath "$SHARD_1_LOG" --smallfiles --oplogSize 128 &
	mongod --shardsvr --dbpath "$SHARD_2_PATH" --port "$SHARD_2_PORT" --bind_ip localhost,"$IP" --logpath "$SHARD_2_LOG" --smallfiles --oplogSize 128 &
	mongod --shardsvr --dbpath "$SHARD_3_PATH" --port "$SHARD_3_PORT" --bind_ip localhost,"$IP" --logpath "$SHARD_3_LOG" --smallfiles --oplogSize 128 &
	

	echo
	echo '
	#в 5_6_ запустить:
mongo --host localhost --port 27030 
rs.initiate({_id:"replset",configsvr:true,members:[{_id:0,host:"localhost:27030"}]})

в 5_8_ запустить:
mongo --host localhost --port 27040
sh.addShard("localhost:27006")
sh.addShard("localhost:27007")
sh.addShard("localhost:27008")
sh.addShard("localhost:27009")

sh.enableSharding("laba")

sh.status()'

	echo start ok
}



main() {
	check_root
	if [ "$1" = "show" ]
	then
		show_mongod
		exit 0
	fi	
	if [ "$1" = "stop" ]
	then
		stop_mongod
		exit 0
	fi
	check_root
	if [ "$1" = "clean" ]
	then
		stop_mongod
		clean_env
		exit 0
	fi
	if [ "$1" = "start" ]
	then
		start_env
		start_mongod
		exit 0
	fi
	help
}

main $@