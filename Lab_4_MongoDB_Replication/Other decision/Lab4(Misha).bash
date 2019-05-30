#!/bin/bash


#https://docs.mongodb.com/manual/tutorial/deploy-replica-set-for-testing/


INDEX="0"
SRV_PATH="/srv/mongodb/"
IP="93.75.18.68"
LOG_FILE="/var/log/mongodb/"

RP_NAME="rs${INDEX}"

BD_0_PATH="${SRV_PATH}${RP_NAME}-0"
BD_0_PORT="27017"
BD_0_LOG="${LOG_FILE}${RP_NAME}-0"

BD_1_PATH="${SRV_PATH}${RP_NAME}-1"
BD_1_PORT="27018"
BD_1_LOG="${LOG_FILE}${RP_NAME}-1"

BD_2_PATH="${SRV_PATH}${RP_NAME}-2"
BD_2_PORT="27019"
BD_2_LOG="${LOG_FILE}${RP_NAME}-2"

help() {
	echo "LOCAL IP IS: $IP"
	echo "Lab4.sh [param]"
	echo "  show  - show mongod process"
	echo "  start - mongod --replSet $RP_NAME --port $BD_0_PORT --bind_ip localhost,$IP --dbpath $BD_0_PATH --smallfiles --oplogSize 128 --logpath $BD_0_LOG &"
	echo "          mongod --replSet $RP_NAME --port $BD_1_PORT --bind_ip localhost,$IP --dbpath $BD_1_PATH --smallfiles --oplogSize 128 --logpath $BD_1_LOG &"
	echo "          mongod --replSet $RP_NAME --port $BD_2_PORT --bind_ip localhost,$IP --dbpath $BD_2_PATH --smallfiles --oplogSize 128 --logpath $BD_2_LOG &"
	echo "  stop  - killall mongod"
	echo "  clean - $BD_0_PATH, $BD_1_PATH, $BD_2_PATH"
}

show_mongod() {
	ps aux | grep mongod
	echo show ok
}

start_env() {
	echo "update: $BD_0_PATH, $BD_1_PATH, $BD_2_PATH"
	mkdir -p $BD_0_PATH
	mkdir -p $BD_1_PATH
	mkdir -p $BD_2_PATH
}

clean_env() {
	echo "	clean - $BD_0_PATH, $BD_1_PATH, $BD_2_PATH"
	rm -rf $BD_0_PATH $BD_1_PATH $BD_2_PATH
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
	echo stop ok
}

start_mongod() {
	echo "START:"
	echo "mongod --replSet $RP_NAME --port $BD_0_PORT --bind_ip localhost,$IP --dbpath $BD_0_PATH --smallfiles --oplogSize 128 --logpath $BD_0_LOG &"
	echo "mongod --replSet $RP_NAME --port $BD_1_PORT --bind_ip localhost,$IP --dbpath $BD_1_PATH --smallfiles --oplogSize 128 --logpath $BD_1_LOG &"
	echo "mongod --replSet $RP_NAME --port $BD_2_PORT --bind_ip localhost,$IP --dbpath $BD_2_PATH --smallfiles --oplogSize 128 --logpath $BD_2_LOG &"
	mongod --replSet "$RP_NAME" --port "$BD_0_PORT" --bind_ip localhost,"$IP" --dbpath "$BD_0_PATH" --smallfiles --oplogSize 128 --logpath "$BD_0_LOG" &
	mongod --replSet "$RP_NAME" --port "$BD_1_PORT" --bind_ip localhost,"$IP" --dbpath "$BD_1_PATH" --smallfiles --oplogSize 128 --logpath "$BD_1_LOG" &
	mongod --replSet "$RP_NAME" --port "$BD_2_PORT" --bind_ip localhost,"$IP" --dbpath "$BD_2_PATH" --smallfiles --oplogSize 128 --logpath "$BD_2_LOG" &
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