
sh.enableSharding("laba7");
use laba7;

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
use laba7


db.items.ensureIndex({id_t: 1})
sh.shardCollection('laba7.items', { id_t: "hashed" } )


db.users.ensureIndex({city: 1, id_t: 1})
sh.shardCollection('laba7.users', { city: 1, id_t: 1 } )
sh.addTagRange( "laba7.users", { "city" : "Kiev", "id_t" : MinKey }, { "city" : "Kiev", "id_t" : MaxKey  }, "Kiev" )
sh.addTagRange( "laba7.users", { "city" : "Lviv", "id_t" : MinKey }, { "city" : "Lviv", "id_t" : MaxKey  }, "Lviv" )
sh.addTagRange( "laba7.users", { "city" : "Poltava", "id_t" : MinKey }, { "city" : "Poltava", "id_t" : MaxKey  }, "Poltava" )
sh.addTagRange( "laba7.users", { "city" : "Odessa", "id_t" : MinKey }, { "city" : "Odessa", "id_t" : MaxKey  }, "Odessa" )
sh.addTagRange( "laba7.users", { "city" : "Uzhgorod", "id_t" : MinKey }, { "city" : "Uzhgorod", "id_t" : MaxKey  }, "Uzhgorod" )


db.orders.ensureIndex({id_k: 1})
sh.shardCollection('laba7.orders', { id_k: "hashed" } )





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


db.users.insert([
	{id_t:11020,	name:"Vlad",	city:"Kiev",		telephone:"+380681483652",	email:"ubkfweed@gmail.com"},
	{id_t:11021,	name:"Kolia",	city:"Lviv",		telephone:"+380682566248",	email:"gdgvdrde@gmail.com"},
	{id_t:11022,	name:"Victor",	city:"Lviv",		telephone:"+380624523322",	email:"uhburk5v@gmail.com"},
	{id_t:11023,	name:"Lyda",	city:"Poltava",		telephone:"+380684315168",	email:"8huvh4uf@gmail.com"},
	{id_t:11024,	name:"Adrey",	city:"Kiev",		telephone:"+380515486535",	email:"b2uuhe4u@gmail.com"},
	{id_t:11025,	name:"Kiril",	city:"Odessa",		telephone:"+380468454354",	email:"m2hj894f@gmail.com"},
	{id_t:11026,	name:"Danil",	city:"Poltava",		telephone:"+380142524795",	email:"83huhuih@gmail.com"},
	{id_t:11027,	name:"Vasya",	city:"Kiev",		telephone:"+380658986454",	email:"uiybh3d8@gmail.com"},
	{id_t:11028,	name:"Petya",	city:"Lviv",		telephone:"+380684846145",	email:"uih83ch9@gmail.com"},
	{id_t:11029,	name:"Dima",	city:"Poltava",		telephone:"+380874561531",	email:"uh829hhu@gmail.com"},
	{id_t:11030,	name:"Oleg",	city:"Odessa",		telephone:"+380848644565",	email:"iohfhfe8@gmail.com"},
	{id_t:11031,	name:"Andrey",	city:"Uzhgorod",	telephone:"+380658924154",	email:"uiybh3d8@gmail.com"},
	{id_t:11032,	name:"Dima",	city:"Lviv",		telephone:"+380662626145",	email:"uih83ch9@gmail.com"},
	{id_t:11033,	name:"Stas",	city:"Uzhgorod",	telephone:"+380473522431",	email:"uh829hhu@gmail.com"},
	{id_t:11034,	name:"Ira", 	city:"Uzhgorod",	telephone:"+380724645565",	email:"iohfhfe8@gmail.com"}
]);

db.orders.insert([
	{id_k:100009,	user_id:11023,  time_y:2016, time_m:1, time_d:26, time:"14:45:51.345",order:[
		{item_id:1015, amount:3 },
		{item_id:1016, amount:6 },
		{item_id:1013, amount:2 },
		{item_id:1014, amount:4 },
		{item_id:1009, amount:6 },
		{item_id:1006, amount:1 }
	]},
	{id_k:100010,	user_id:11024,  time_y: 2016, time_m:2, time_d:30, time:"09:12:32.525",order:[
		{item_id:1014, amount:3 },
		{item_id:1009, amount:4 },
		{item_id:1006, amount:1 },
		{item_id:1002, amount:7 }
	]},
	{id_k:100011,	user_id:11033,  time_y: 2016, time_m:3, time_d:14, time:"10:18:01.823",order:[
		{item_id:1002, amount:2 },
		{item_id:1005, amount:6 },
		{item_id:1012, amount:1 }
	]},
	{id_k:100012,	user_id:11029,  time_y: 2016, time_m:4, time_d:12, time:"15:00:20.029",order:[
		{item_id:1005, amount:3 },
		{item_id:1012, amount:1 },
		{item_id:1011, amount:2 },
		{item_id:1009, amount:1 },
		{item_id:1004, amount:7 }
	]},
	{id_k:100013,	user_id:11023,  time_y: 2016, time_m:5, time_d:16, time:"21:31:20.723",order:[
		{item_id:1011, amount:2 },
		{item_id:1009, amount:3 },
		{item_id:1004, amount:6 },
		{item_id:1015, amount:1 },
		{item_id:1001, amount:2 }
	]},
	{id_k:100014,	user_id:11020,  time_y: 2016, time_m:6, time_d:8, time:"01:12:59.562",order:[
		{item_id:1015, amount:7 },
		{item_id:1009, amount:2 },
		{item_id:1001, amount:2 }
	]},
	{id_k:100001,	user_id:11020,  time_y:2016, time_m:7, time_d:15, time:"03:24:31.824",order:[
		{item_id:1001, amount:2 },
		{item_id:1004, amount:1 },
		{item_id:1019, amount:1 },
		{item_id:1008, amount:2 },
		{item_id:1006, amount:4 }
	]},
	{id_k:100002,	user_id:11021,  time_y:2016, time_m:8, time_d:14, time:"08:51:43.421",order:[
		{item_id:1019, amount:2 },
		{item_id:1008, amount:3 },
		{item_id:1006, amount:1 },
		{item_id:1017, amount:2 },
		{item_id:1002, amount:4 }
	]},
	{id_k:100003,	user_id:11022,  time_y:2016, time_m:9, time_d:27, time:"13:52:34.423",order:[
		{item_id:1017, amount:1 },
		{item_id:1002, amount:1 },
		{item_id:1015, amount:2 },
		{item_id:1016, amount:3 },
		{item_id:1013, amount:4 }
	]},
	{id_k:100003,	user_id:11023,  time_y:2017, time_m:1, time_d:26, time:"14:45:51.345",order:[
		{item_id:1015, amount:5 },
		{item_id:1016, amount:1 },
		{item_id:1013, amount:3 },
		{item_id:1014, amount:11 },
		{item_id:1009, amount:3 },
		{item_id:1006, amount:2 }
	]},
	{id_k:100004,	user_id:11024,  time_y: 2017, time_m:2, time_d:30, time:"09:12:32.525",order:[
		{item_id:1014, amount:1 },
		{item_id:1009, amount:7 },
		{item_id:1006, amount:1 },
		{item_id:1002, amount:4 }
	]},
	{id_k:100005,	user_id:11033,  time_y: 2017, time_m:3, time_d:14, time:"10:18:01.823",order:[
		{item_id:1002, amount:1 },
		{item_id:1005, amount:4 },
		{item_id:1012, amount:2 }
	]},
	{id_k:100006,	user_id:11029,  time_y: 2017, time_m:4, time_d:12, time:"15:00:20.029",order:[
		{item_id:1005, amount:2 },
		{item_id:1012, amount:1 },
		{item_id:1011, amount:3 },
		{item_id:1009, amount:7 },
		{item_id:1004, amount:1 }
	]},
	{id_k:100007,	user_id:11023,  time_y: 2017, time_m:5, time_d:16, time:"21:31:20.723",order:[
		{item_id:1011, amount:6 },
		{item_id:1009, amount:9 },
		{item_id:1004, amount:2 },
		{item_id:1015, amount:3 },
		{item_id:1001, amount:6 }
	]},
	{id_k:100008,	user_id:11020,  time_y: 2017, time_m:6, time_d:8, time:"01:12:59.562",order:[
		{item_id:1015, amount:2 },
		{item_id:1009, amount:13 },
		{item_id:1001, amount:1 }
	]},
	{id_k:100015,	user_id:11020,  time_y:2017, time_m:7, time_d:15, time:"03:24:31.824",order:[
		{item_id:1001, amount:1 },
		{item_id:1004, amount:2 },
		{item_id:1019, amount:3 },
		{item_id:1008, amount:4 },
		{item_id:1006, amount:1 }
	]},
	{id_k:100016,	user_id:11021,  time_y:2017, time_m:8, time_d:14, time:"08:51:43.421",order:[
		{item_id:1019, amount:2 },
		{item_id:1008, amount:5 },
		{item_id:1006, amount:2 },
		{item_id:1017, amount:3 },
		{item_id:1002, amount:1 }
	]},
	{id_k:100017,	user_id:11022,  time_y:2017, time_m:9, time_d:27, time:"13:52:34.423",order:[
		{item_id:1017, amount:2 },
		{item_id:1002, amount:5 },
		{item_id:1015, amount:2 },
		{item_id:1016, amount:1 },
		{item_id:1013, amount:3 }
	]}
]);


//	1)	Подсчитать сколько единиц товара есть у каждого производителя ("brand")

var mapFunction1 = function(){
	var key = this.brand;
	emit (key, 1);
};
var reduceFunction1 = function(key, count){
	return Array.sum(count);
};
var finalizeFunction1 = function(reduceObj){
	return reduceObj.ids,/*reduceObj.count,*/reduceObj.model
};
db.items.mapReduce(
	mapFunction1,
	reduceFunction1,
	{
		out:"count model in brand",
		/* finalize: finalizeFunction1 */
	}
).find({});

//	2)	Подсчитать общую стоимость товаров у каждого производителя ("producer")

var mapFunction1 = function(){
	var key = this.brand;
	var value = this.price;
	emit (key, value);
};
var reduceFunction1 = function(key, count){
	return Array.sum(count);
};
var finalizeFunction1 = function(reduceObj){
	return reduceObj.ids,/*reduceObj.count,*/reduceObj.model
};
db.items.mapReduce(
	mapFunction1,
	reduceFunction1,
	{
		out:"count model in brand",
		/* finalize: finalizeFunction1 */
	}
).find({});

//	3)	Подсчитайте суммарную стоимостей заказов сделанную каждым заказчиком

var mapFunction1 = function(){
	var key = this.brand;
	var value = this.price;
	emit (key, value);
};
var reduceFunction1 = function(key, value){
	return Array.sum(value);
};
var finalizeFunction1 = function(reduceObj){
	return reduceObj.ids,/*reduceObj.count,*/reduceObj.model
};
db.orders.mapReduce(
	mapFunction1,
	reduceFunction1,
	{
		out:"count model in brand",
		/* finalize: finalizeFunction1 */
	}
).find({});




// 1) Задание 
/*
ключ 
- товар  
	- месяц+год
		- разница в количестве

	сначала товар количество месяц год
	
*/

var mapFunction_1 = function(){
	for( var i in this.order){
		emit ({ids: this.order[i].item_id,time_year:this.time_y,time_month:this.time_m}, this.order[i].amount);
	}
};
var reduceFunction_1 = function(key, value_amount){
	return Array.sum(value_amount);
};
db.orders.mapReduce(
	mapFunction_1,
	reduceFunction_1,
	{
		out:"task1"
	}
).find();



var mapFunction_2 = function(){
	var v = {y1: 0, y0: 0, diff: 0};
	if (this._id.time_year == 2016)
	{
		v.y0 = this.value;
		emit({id: this._id.ids, month: this._id.time_month}, v);
	}
	else (this._id.time_year == 2017)
	{
		v.y1 = this.value;
		emit({id: this._id.ids, month: this._id.time_month}, v);
	}
};
var reduceFunction_2 = function(key, values){
	v = {y1: 0, y0: 0, diff: 0};
	for(var i = 0; i < values.length; i++)
	{
		v.y1 += values[i].y1;
		v.y0 += values[i].y0;
		
	}/* */
	v.diff = v.y1 - v.y0;
	return v;
};

db.task1.mapReduce(
	mapFunction_2,
	reduceFunction_2,
	{
		out:"task1_1",
	}
).find({});


//
//

var mapFunction1 = function(){
	var v;
	for(var i = 0; i < this.order.lenght; i++){
		var key_mapObj = {
			ids: this.order[i].item_id;
			time_year:this.time_y
			time_month:this.time_m
		};
		var value_amount =  this.order[i].amount;
		emit (key_mapObj, value_amount);
	}
};
var reduceFunction1 = function(key, value){
	return Array.sum(value);
};

db.orders.mapReduce(
	mapFunction1,
	reduceFunction1,
	{
		out:"count model in brand"
	}
).find({});