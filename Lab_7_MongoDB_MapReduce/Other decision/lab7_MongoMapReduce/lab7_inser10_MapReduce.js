
sh.enableSharding("laba77");
use laba77;
/*
sh.addShardTag("shard0000", "Kiev")
//sh.addShardTag("shard0001", "Kiev")
//sh.removeShardTag("shard0001", "Kiev")
//sh.addShardTag("shard0002", "Kiev")
//sh.removeShardTag("shard0002", "Kiev")
sh.addShardTag("shard0001", "Lviv")
sh.addShardTag("shard0002", "Poltava")
sh.addShardTag("shard0003", "Odessa")
sh.addShardTag("shard0004", "Uzhgorod")
use config
db.tags.find({ tags: "Kiev" })
db.shards.find({ tags: "Kiev" })
use laba77
*/

db.items.ensureIndex({id_t: 1})
sh.shardCollection('laba77.items', { id_t: "hashed" } )


/*
db.users.ensureIndex({city: 1, id_t: 1})
sh.shardCollection('laba7.users', { city: 1, id_t: 1 } )
sh.addTagRange( "laba75.users", { "city" : "Kiev", "id_t" : MinKey }, { "city" : "Kiev", "id_t" : MaxKey  }, "Kiev" )
sh.addTagRange( "laba75.users", { "city" : "Lviv", "id_t" : MinKey }, { "city" : "Lviv", "id_t" : MaxKey  }, "Lviv" )
sh.addTagRange( "laba75.users", { "city" : "Poltava", "id_t" : MinKey }, { "city" : "Poltava", "id_t" : MaxKey  }, "Poltava" )
sh.addTagRange( "laba75.users", { "city" : "Odessa", "id_t" : MinKey }, { "city" : "Odessa", "id_t" : MaxKey  }, "Odessa" )
sh.addTagRange( "laba75.users", { "city" : "Uzhgorod", "id_t" : MinKey }, { "city" : "Uzhgorod", "id_t" : MaxKey  }, "Uzhgorod" )*/

db.orders.ensureIndex({id_k: 1})
sh.shardCollection('laba77.orders', { id_k: "hashed" } )





db.items.insert([
	{id_t:1001,	index:"39144",	category:"Phone",	brand:"Apple",	model: "Iphone 5",	price: 210},
	{id_t:1002,	index:"35534",	category:"Phone",	brand:"Apple",	model: "Iphone 5S",	price: 250},
	{id_t:1003,	index:"33754",	category:"Phone",	brand:"Apple",	model: "Iphone 6",	price: 320},
	{id_t:1004,	index:"39624",	category:"Phone",	brand:"Apple",	model: "Iphone 6S",	price: 430},
	{id_t:1005,	index:"32853",	category:"Phone",	brand:"Apple",	model: "Iphone 7",	price: 500},
	{id_t:1006,	index:"98347",	category:"Phone",	brand:"Apple",	model: "Iphone 7S",	price: 650},
	{id_t:1007,	index:"93741",	category:"Phone",	brand:"Apple",	model: "Iphone 8",	price: 700},
	{id_t:1008,	index:"51849",	category:"Phone",	brand:"Apple",	model: "Iphone X",	price: 750},
	{id_t:1009,	index:"71947",	category:"Laptop",	brand:"HP",	model: "Probook 450",	price: 900},
	{id_t:1010,	index:"82953",	category:"Laptop",	brand:"HP",	model: "Probook 4540",	price: 850},
	{id_t:1011,	index:"82747",	category:"Laptop",	brand:"HP",	model: "Probook 440",	price: 780},
	{id_t:1012,	index:"95352",	category:"Laptop",	brand:"HP",	model: "Probook 250",	price: 550},
	{id_t:1013,	index:"74048",	category:"Phone",	brand:"Samsung",	model: "Galaxy X",	price: 50},
	{id_t:1014,	index:"32382",	category:"Phone",	brand:"Samsung",	model: "Galaxy Note",	price: 70},
	{id_t:1015,	index:"91884",	category:"TV",	brand:"Phillips",	model: "TV",	price: 800},
	{id_t:1016,	index:"83624",	category:"Phone",	brand:"HTC",	model: "Desire 630",	price: 50},
	{id_t:1017,	index:"86468",	category:"Phone",	brand:"HTC",	model: "Desire 600",	price: 40},
	{id_t:1018,	index:"93751",	category:"Phone",	brand:"HTC",	model: "One",	price: 75},
	{id_t:1019,	index:"94612",	category:"Phone",	brand:"HTC",	model: "10",	price: 85},
	{id_t:1020,	index:"92312",	category:"TV",	brand:"Phillips",	model: "HD TV",	price: 850}
]);
db.orders.insert({id_k:100050,	total_sum:15210,	customer:{	name:"Adrey",	city:"Kiev",		telephone:"+380515486535",	email:"b2uuhe4u@gmail.com"},  time:ISODate("2016-02-30T09:12:32.525Z"),order:[
		{item_id:1014, amount:2 },
		{item_id:1009, amount:3 },
		{item_id:1006, amount:4 },
		{item_id:1002, amount:1 }
	]});
db.orders.insert([
	{id_k:100009,	total_sum:7330,	customer:{	name:"Lyda",	city:"Poltava",		telephone:"+380684315168",	email:"8huvh4uf@gmail.com"},  time:ISODate("2016-01-26T14:45:51.345Z"),order:[
		{item_id:1015, amount:3 },
		{item_id:1016, amount:6 },
		{item_id:1013, amount:2 },
		{item_id:1014, amount:4 },
		{item_id:1009, amount:6 },
		{item_id:1006, amount:1 }
	]},
	{id_k:100010,	total_sum:6210,	customer:{	name:"Adrey",	city:"Kiev",		telephone:"+380515486535",	email:"b2uuhe4u@gmail.com"},  time:ISODate("2016-02-30T09:12:32.525Z"),order:[
		{item_id:1014, amount:3 },
		{item_id:1009, amount:4 },
		{item_id:1006, amount:1 },
		{item_id:1002, amount:7 }
	]},
	{id_k:100011,	total_sum:4050,	customer:{	name:"Stas",	city:"Uzhgorod",	telephone:"+380473522431",	email:"uh829hhu@gmail.com"},  time:ISODate("2016-03-14T10:18:01.823Z"),order:[
		{item_id:1002, amount:2 },
		{item_id:1005, amount:6 },
		{item_id:1012, amount:1 }
	]},
	{id_k:100012,	total_sum:4940,	customer:{	name:"Dima",	city:"Poltava",		telephone:"+380874561531",	email:"uh829hhu@gmail.com"},  time:ISODate("2016-04-12T15:00:20.029Z"),order:[
		{item_id:1005, amount:3 },
		{item_id:1012, amount:1 },
		{item_id:1011, amount:2 },
		{item_id:1009, amount:1 },
		{item_id:1004, amount:7 }
	]},
	{id_k:100013,	total_sum:7850,	customer:{	name:"Lyda",	city:"Poltava",		telephone:"+380684315168",	email:"8huvh4uf@gmail.com"},  time:ISODate("2016-05-16T21:31:20.723Z"),order:[
		{item_id:1011, amount:2 },
		{item_id:1009, amount:3 },
		{item_id:1004, amount:6 },
		{item_id:1015, amount:1 },
		{item_id:1001, amount:2 }
	]},
	{id_k:100014,	total_sum:7820,	customer:{	name:"Vlad",	city:"Kiev",		telephone:"+380681483652",	email:"ubkfweed@gmail.com"},  time:ISODate(" 2016-06-08T01:12:59.562Z"),order:[
		{item_id:1015, amount:7 },
		{item_id:1009, amount:2 },
		{item_id:1001, amount:2 }
	]},
	{id_k:100001,	total_sum:5035,	customer:{	name:"Vlad",	city:"Kiev",		telephone:"+380681483652",	email:"ubkfweed@gmail.com"},  time:ISODate("2016-07-15T03:24:31.824Z"),order:[
		{item_id:1001, amount:2 },
		{item_id:1004, amount:1 },
		{item_id:1019, amount:1 },
		{item_id:1008, amount:2 },
		{item_id:1006, amount:4 }
	]},
	{id_k:100002,	total_sum:4150,	customer:{	name:"Kolia",	city:"Lviv",		telephone:"+380682566248",	email:"gdgvdrde@gmail.com"},  time:ISODate("2016-08-14T08:51:43.421Z"),order:[
		{item_id:1019, amount:2 },
		{item_id:1008, amount:3 },
		{item_id:1006, amount:1 },
		{item_id:1017, amount:2 },
		{item_id:1002, amount:4 }
	]},
	{id_k:100003,	total_sum:2240,	customer:{	name:"Victor",	city:"Lviv",		telephone:"+380624523322",	email:"uhburk5v@gmail.com"},  time:ISODate("2016-09-27T13:52:34.423Z"),order:[
		{item_id:1017, amount:1 },
		{item_id:1002, amount:1 },
		{item_id:1015, amount:2 },
		{item_id:1016, amount:3 },
		{item_id:1013, amount:4 }
	]},
	{id_k:100018,	total_sum:8970,	customer:{	name:"Lyda",	city:"Poltava",		telephone:"+380684315168",	email:"8huvh4uf@gmail.com"},  time:ISODate("2017-01-26T14:45:51.345Z"),order:[
		{item_id:1015, amount:5 },
		{item_id:1016, amount:1 },
		{item_id:1013, amount:3 },
		{item_id:1014, amount:11 },
		{item_id:1009, amount:3 },
		{item_id:1006, amount:2 }
	]},
	{id_k:100004,	total_sum:8020,	customer:{	name:"Adrey",	city:"Kiev",		telephone:"+380515486535",	email:"b2uuhe4u@gmail.com"},  time:ISODate("2017-02-30T09:12:32.525Z"),order:[
		{item_id:1014, amount:1 },
		{item_id:1009, amount:7 },
		{item_id:1006, amount:1 },
		{item_id:1002, amount:4 }
	]},
	{id_k:100005,	total_sum:3850,	customer:{	name:"Stas",	city:"Uzhgorod",	telephone:"+380473522431",	email:"uh829hhu@gmail.com"},  time:ISODate("2017-03-14T10:18:01.823Z"),order:[
		{item_id:1002, amount:1 },
		{item_id:1005, amount:4 },
		{item_id:1012, amount:2 }
	]},
	{id_k:100006,	total_sum:10620,	customer:{	name:"Dima",	city:"Poltava",		telephone:"+380874561531",	email:"uh829hhu@gmail.com"},  time:ISODate("2017-04-12T15:00:20.029Z"),order:[
		{item_id:1005, amount:2 },
		{item_id:1012, amount:1 },
		{item_id:1011, amount:3 },
		{item_id:1009, amount:7 },
		{item_id:1004, amount:1 }
	]},
	{id_k:100007,	total_sum:17300,	customer:{	name:"Lyda",	city:"Poltava",		telephone:"+380684315168",	email:"8huvh4uf@gmail.com"},  time:ISODate("2017-05-16T21:31:20.723Z"),order:[
		{item_id:1011, amount:6 },
		{item_id:1009, amount:9 },
		{item_id:1004, amount:2 },
		{item_id:1015, amount:3 },
		{item_id:1001, amount:6 }
	]},
	{id_k:100008,	total_sum:13510,	customer:{	name:"Vlad",	city:"Kiev",		telephone:"+380681483652",	email:"ubkfweed@gmail.com"},  time:ISODate("2017-06-08T01:12:59.562Z"),order:[
		{item_id:1015, amount:2 },
		{item_id:1009, amount:13 },
		{item_id:1001, amount:1 }
	]},
	{id_k:100015,	total_sum:4975,	customer:{	name:"Vlad",	city:"Kiev",		telephone:"+380681483652",	email:"ubkfweed@gmail.com"},  time:ISODate("2017-07-15T03:24:31.824Z"),order:[
		{item_id:1001, amount:1 },
		{item_id:1004, amount:2 },
		{item_id:1019, amount:3 },
		{item_id:1008, amount:4 },
		{item_id:1006, amount:1 }
	]},
	{id_k:100016,	total_sum:5590,	customer:{	name:"Kolia",	city:"Lviv",		telephone:"+380682566248",	email:"gdgvdrde@gmail.com"},  time:ISODate("2017-08-14T08:51:43.421Z"),order:[
		{item_id:1019, amount:2 },
		{item_id:1008, amount:5 },
		{item_id:1006, amount:2 },
		{item_id:1017, amount:3 },
		{item_id:1002, amount:1 }
	]},
	{id_k:100017,	total_sum:3130,	customer:{	name:"Victor",	city:"Lviv",		telephone:"+380624523322",	email:"uhburk5v@gmail.com"},  time:ISODate("2017-09-27T13:52:34.423Z"),order:[
		{item_id:1017, amount:2 },
		{item_id:1002, amount:5 },
		{item_id:1015, amount:2 },
		{item_id:1016, amount:1 },
		{item_id:1013, amount:3 }
	]}
]);

db.items.find({});
db.orders.find({}).pretty();



//
//
//customer
//	$2017
//	$2016
//	Delta$2017 - 2016
//	top 2017 count
//	top 2016 count
//
//

var map100300 = function() {
	var year_t = this.time.getFullYear();
	var key = {
		name:this.customer.name,
		email:this.customer.email
	};
	var value = {
		total_sum:this.total_sum,
		year:year_t,
		item_id:0
	};
	for(var i in this.order){
		value.item_id = this.order[i].item_id;
		emit(key, value);
	}
};

var reduce100300 = function(key, values) {
	var res = {y2016:0,y2017:0,diff:0,top_items:[]};
	values.forEach(function(value){
		if("total_sum" in value){
			temp = value.total_sum;
			if(value.year==2016){
				res.y2016+=temp;
			}
			if(value.year==2017){
				res.y2017+=temp;
			}
			res.top_items.push({item_id:value.item_id,count:1,year:value.year});
		}
		else if ("diff" in value){
			for(var field in value){
				res.y2016 += value.y2016;
				res.y2017 += value.y2017;
			}
			for(var i in value.top_items){
				res.top_items.push(value.top_items[i]);
			}
		}
	});
    return res;
};
var fin100300 = function(key, value) {
	value.diff = value.y2017 - value.y2016;
	var temp;
	var res = {y2016:value.y2016,y2017:value.y2017,diff:0,top_items:[{year:2016,res:[]},{year:2017,res:[]}]};
	var temp_mas2016 = [], temp_mas2017 = [];
	for(var i in value.top_items){
		if(value.top_items[i].year == 2016){
			for(var j in temp_mas2016){
				temp = false;
				if(value.top_items[i].item_id == temp_mas2016[j].item_id){
					temp_mas2016[j].count+=1;
					temp = true;
				}
			}
			if(!temp){
				temp_mas2016.push(value.top_items[i]);
			}
		}
		if(value.top_items[i].year == 2017){
			for(var j in temp_mas2017){
				temp = false;
				if(value.top_items[i].item_id == temp_mas2017[j].item_id){
					temp_mas2017[j].count+=1;
					temp = true;
				}
			}
			if(!temp){
				temp_mas2017.push(value.top_items[i]);
			}
		}
	}
	function compareItem(itemA,itemB){return itemB.count - itemA.count}
	temp_mas2016.sort(compareItem);
	temp_mas2017.sort(compareItem);
	res.top_items[0].res=temp_mas2016;
	res.top_items[1].res=temp_mas2017;/*
	var t = 0;
	while(res.top_items[0].res[t].count == res.top_items[0].res[0].count){
		res.top_items[0].res.length = t;
		t++;
	}
	while(res.top_items[1].res[t].count == res.top_items[1].res[0].count){
		res.top_items[1].res.length = t;
		t++;
	}
	/*
	for(var i = 0; temp_mas2016[i].count == temp_mas2016[0].count; i++){
		res.top_items[0].res.push({item_id:temp_mas2016[i].item_id});
	}
	for(var i = 0; temp_mas2017[i].count == temp_mas2017[0].count; i++){
		res.top_items[1].res.push({item_id:temp_mas2017[i].item_id});
	}/**/
	res.diff = res.y2017 - res.y2016;
	return res;/**/
	/*return value;/**/
};
db.orders.mapReduce(map100300, reduce100300, {"out": "task_years",finalize:fin100300});

db.task_years.find().pretty();
db.task_years.remove({});


var map100301 = function() {
	var value = 1;
    var key = 0;
	for(var i in this.order){
		key = this.order[i].item_id;
		emit(key, value);
	}
};

var reduce100301 = function(key, values) {
    return Array.sum(values);
};
/*
var fin100301 = function(key,value){
	return value/2;
}

/*, finalize:fin10009*/
db.orders.mapReduce(map100301, reduce100301, {"out": "task_top"});

db.task9.find().sort({value:-1}).limit(10).pretty();
db.task9.remove({});

//
//1) Подсчитать сколько единиц товара есть у каждого производителя
var map1001 = function(){
	var key = this.brand;
	var value = {
		model:this.model
	};
	emit(key,value);
};
var reduce1001 = function(key,values){
	var res = {count_m:0,models:[]};
	values.forEach(function(value){
		if("model" in value){
			res.models.push(value.model);
		}
		else if ("models" in value){
			for(var i in value.models){
				res.models.push(value.models[i]);
			}
		}
	})
	res.count_m = res.models.length;
	return res;
};
db.items.mapReduce(map1001,reduce1001,{"out":"task1"});
db.task1.find();
db.task1.remove({});


//2) Подсчитать общую стоимость товаров у каждого производителя

var map1002 = function(){
	var key = this.brand;
	var value = this.price;
	emit(key,value);
};
var reduce1002 = function(key,values){
	return Array.sum(values);
};
db.items.mapReduce(map1002,reduce1002,{"out":"task2"});
db.task2.find();
db.task2.remove({});


//3) Подсчитайте суммарную стоимостей заказов сделанную каждым заказчиком


var map10003 = function() {
    var key = {
		name:this.customer.name,
		email:this.customer.email
	}, 
	value = this.total_sum;
	emit(key, value);
};

var reduce10003 = function(key, values) {
    return Array.sum(values);
};

db.orders.mapReduce(map10003, reduce10003, {"out": "task3"});

db.task3.find();
db.task3.find().sort({value:-1}).limit(7);
/*db.task3.remove({});*/



//4)Подсчитайте суммарную стоимости заказов сделанную каждым заказчиком за определенный период времени

db.orders.mapReduce(map10003, reduce10003, {"out": "task4", query: { time: { $gt: ISODate("2017-01-01T00:00:00.000Z") }}});
db.task4.find();
db.task4.find().sort({value:-1}).limit(7);
/*db.task4.remove({});*/

//5)Подсчитайте среднюю стоимость заказа

var map10005 = function() {
    var key = 1,
	value = this.total_sum;
	emit(key, value);
};

var reduce10005 = function(key, values) {
	var res = {sum : 0, count : 0};
	values.forEach(function(value){
		if(value.sum != undefined){
			res.sum+=value.sum;
			res.count+=value.count;
		}
		else {
			res.sum+=value;
			res.count+=1;
		}
	})
    return res;
};
var fin10005 = function(key, value) {
    return (value.sum)/(value.count);
};
db.orders.mapReduce(map10005, reduce10005, {"out": "task5",finalize:fin10005});

db.task5.find();
/*db.task5.remove({});*/

//6) Подсчитайте в скольких заказах встречался каждый товар (сколько раз он был куплен)

var map10006 = function() {
	var value = 1;
    var key = 0;
	for(var i in this.order){
		key = this.order[i].item_id;
		emit(key, value);
	}
};

var reduce10006 = function(key, values) {
    return Array.sum(values);
};
/*
var fin10006 = function(key, value) {
    return value/2;
};	,finalize:fin10006	*/

db.orders.mapReduce(map10006, reduce10006, {"out": "task6"});

db.task6.find();


//7) Для каждого товара получите список всех заказчиков покупавших его

var map10007 = function() {
	var value = {name:this.customer.name, email:this.customer.email};
    var key = 0;
	for(var i in this.order){
		key = this.order[i].item_id;
		emit(key, value);
	}
};

var reduce10007 = function(key, values) {
	var temp;
	var res = {customers : []};
	values.forEach(function(value){
		if("name" in value){
			temp = false;
			for(var i = 0; i < res.customers.length; i++){
				if(res.customers[i].email==value.email){ temp = true};
			}
			if(!temp){
				res.customers.push(value);
			}
		}
		else if ("customers" in value){
			for(var i in value.customers){
				res.customers.push(value.customers[i]);
			}
		}
	})
    return res;
};
db.orders.mapReduce(map10007, reduce10007, {"out": "task7"});

db.task7.find().pretty();


//8) Получите товар и список заказчиков, покупавших его больше одного раза

var map10008 = function() {
	var value = {name:this.customer.name, email:this.customer.email};
    var key = 0;
	for(var i in this.order){
		key = this.order[i].item_id;
		emit(key, value);
	}
};

var reduce10008 = function(key, values) {
	var temp;
	var res = {customers : []};
	values.forEach(function(value){
		if("name" in value){/*
			temp = false;
			for(var i = 0; i < res.customers.length; i++){
				if(res.customers[i].email==value.email){ res.customers[i].count+=value.customers.count;temp = true;}
			}
			if(!temp){*/
				res.customers.push({name:value.name, email:value.email,count:1});/*
			}*/
		}
		else if ("customers" in value)
		{
			for(var i in value.customers){
				/*temp = false;
				for(var i = 0; i < res.customers.length; i++){
					if(res.customers[i].email==value.email){ res.customers[i].count+=value.count;temp = true};
				}
				if(!temp){*/
					res.customers.push({
						name:value.customers[i].name,
						email:value.customers[i].email,
						count:value.customers[i].count
					});/* *//*
				}*/
			}
		}/**/
	})
    return res;
};
var fin10008 = function(key, values){
	var temp;
	var res = {customers : []}, gets = {g:[]};
	for(var i in values.customers){
		temp = 0, temp2 = false;
		for(var j in values.customers){
			if(values.customers[i].email==values.customers[j].email){
				temp++;
			}
		}
		for(var j in gets.g){
			if(gets.g[j].email==values.customers[i].email){temp2= true;}
		}
		gets.g.push({email:values.customers[i].email});
		if(!temp2){ 
			if(temp>1){
				res.customers.push({
					name:values.customers[i].name,
					email:values.customers[i].email,
					count:temp
				});
			}
		}
	}/*
	for(var i in values.customers){
		if(values.customers[i].count > 1){
			res.customers.push(values.customers[i]);
		}
	}*/
	return res;/**/
	/*return values;/**/
};
db.orders.mapReduce(map10008, reduce10008, {"out": "task8", finalize:fin10008});

db.task8.find().pretty();
db.task8.remove({});


//-----------------------------//--------------///

var map100081 = function() {
	var value = 1;
    var key = {item_id:0, name:this.customer.name, email:this.customer.email};
	for(var i in this.order){
		key.item_id = this.order[i].item_id;
		emit(key, value);
	}
};
var reduce100081 = function(key, values) {
	return Array.sum(values);
}

db.orders.mapReduce(map100081, reduce100081, {"out": "task81"});
db.task81.find().pretty();

var map100082 = function() {
	var value1 = {name:this._id.name, email:this._id.email,count:this.value};
    var key = this._id.item_id;
	/*if(value1.count>1){*/
		emit(key, value1);/*
	}*/
};
var reduce100082 = function(key, values) {
	var res = {customers : []};
	res.customers = values;/*
	values.forEach(function(value2){
		if("email" in value2){
			res.customers.push(value2);
		}/*
		if("customers" in value2){
			for(var i in value2.customer){
				res.customers.push(value2.customer[i]);
			}
		}*//*
	});*/
	return res;
};
db.task81.mapReduce(map100082, reduce100082, {"out": "task82",query:{ value:{$gt: 1}}});
db.task82.find().pretty();
//9) Получите топ N товаров по популярности
var map10009 = function() {
	var value = 1;
    var key = 0;
	for(var i in this.order){
		key = this.order[i].item_id;
		emit(key, value);
	}
};

var reduce10009 = function(key, values) {
    return Array.sum(values);
};
/*
var fin10009 = function(key,value){
	return value/2;
}

/*, finalize:fin10009*/
db.orders.mapReduce(map10009, reduce10009, {"out": "task9"});

db.task9.find().sort({value:-1}).limit(10).pretty();
db.task9.remove({});


//10) Для залания 6) реализуйте инкрементальный Map/Reduse используя out и action


db.orders.mapReduce(map10006, reduce10006, {"out": {"reduce": "task10"}});
db.task10.find().pretty();

















































//-----------------------------
var mapUsers_Orders_Items4 = function() {
    var key = {}
	, values = {
		order_id:this._id,
		index: this.value.index,
		category: this.value.category,
		brand: this.value.brand,
		model: this.value.model,
		price: this.value.price,
		item_id: this.item_id,
		user_id:0,
        name: '',
        city: '',
        telephone: '',
		email: '',
		time: '',
		amount:0
    };
	for(var i in this.value.customer){
		key = this.value.customer[i].id_o;
		values.user_id = this.value.customer[i].user_id;
		values.name = this.value.customer[i].name;
		values.city = this.value.customer[i].city;
		values.telephone = this.value.customer[i].telephone;
		values.email = this.value.customer[i].email;
		values.time = this.value.customer[i].time;
		values.amount = this.value.customer[i].amount;
		emit(key, values);
	}
};
var reduce2 = function(key, values) {
    var result = {}, orderFields = {
        "item_id": '', 
        "amount": ''
    };
    values.forEach(function(value) {
        if ("index" in value) {
            if (!("order" in result)) {
                result.order = [];
            }
            result.order.push(value);
        } 
		else if ("user_id" in value) {
            if (!("order" in result)) {
                result.order = [];
            }
            /*result.order.push.apply(result.order, value.order);*/
            /**/result.order.push(value.order);/* */
        }
        for (var field in value) {
            if (value.hasOwnProperty(field) && !(field in orderFields)) {
                result[field] = value[field];
            }
        }
    });
    return result;
};

db.items.mapReduce(mapItems2, reduce2, {"out": {"reduce": "users_orders_items"}});
db.users_orders.mapReduce(mapUsers_Orders2, reduce2, {"out": {"reduce": "users_orders_items"}});
db.users_orders_items.find().pretty();

////---------------------------


var reduce2 = function(key, values) {
    var result = {}, orderFields = {
        "item_id": '', 
        "amount": ''
    };
    values.forEach(function(value) {
        if ("index" in value) {
            if (!("order" in result)) {
                result.order = [];
            }
            result.order.push(value);
        } 
		else if ("user_id" in value) {
            if (!("order" in result)) {
                result.order = [];
            }
            /*result.order.push.apply(result.order, value.order);*/
            /**/result.order.push(value.order);/* */
        }
        for (var field in value) {
            if (value.hasOwnProperty(field) && !(field in orderFields)) {
                result[field] = value[field];
            }
        }
    });
    return result;
};

db.items.mapReduce(mapItems2, reduce2, {"out": {"reduce": "users_orders_items"}});
db.users_orders.mapReduce(mapUsers_Orders2, reduce2, {"out": {"reduce": "users_orders_items"}});
db.users_orders_items.find().pretty();












//------------------------------
var temp_cust = db.users.find();
var temp_items = db.items.find();
var map100 = function(){
	var temp1, temp2;
	for( var i in this.order){
		users.forEach(function(obj){
			if(obj.id_t = this.order[i].user_id){temp1 = obj.name;print(obj.name)}
		});
		items.forEach(function(obj){
			if(obj.id_t = this.order[i].item_id){temp2 = obj.price}
		});
		var value =  this.order[i].amount*temp2;
		emit ({user:temp1,time_year:this.time_y}, value);
	}
};
var reduce100 = function(key, value){
	return Array.sum(value);
};

db.orders.mapReduce(
	map100,
	reduce100,
	{
		out:"amount_of_dolars"
	}
).find({});
//-----------------------------------
