
sh.enableSharding("laba71");
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
sh.shardCollection('laba71.items', { id_t: "hashed" } )


db.users.ensureIndex({city: 1, id_t: 1})
sh.shardCollection('laba7.users', { city: 1, id_t: 1 } )
sh.addTagRange( "laba71.users", { "city" : "Kiev", "id_t" : MinKey }, { "city" : "Kiev", "id_t" : MaxKey  }, "Kiev" )
sh.addTagRange( "laba71.users", { "city" : "Lviv", "id_t" : MinKey }, { "city" : "Lviv", "id_t" : MaxKey  }, "Lviv" )
sh.addTagRange( "laba71.users", { "city" : "Poltava", "id_t" : MinKey }, { "city" : "Poltava", "id_t" : MaxKey  }, "Poltava" )
sh.addTagRange( "laba71.users", { "city" : "Odessa", "id_t" : MinKey }, { "city" : "Odessa", "id_t" : MaxKey  }, "Odessa" )
sh.addTagRange( "laba71.users", { "city" : "Uzhgorod", "id_t" : MinKey }, { "city" : "Uzhgorod", "id_t" : MaxKey  }, "Uzhgorod" )


db.orders.ensureIndex({id_k: 1})
sh.shardCollection('laba71.orders', { id_k: "hashed" } )





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
	{id_k:100009,	user_id:11023,  time:ISODate(" 2016-01-26T14:45:51.345Z"),order:[
		{item_id:1015, amount:3 },
		{item_id:1016, amount:6 },
		{item_id:1013, amount:2 },
		{item_id:1014, amount:4 },
		{item_id:1009, amount:6 },
		{item_id:1006, amount:1 }
	]},
	{id_k:100010,	user_id:11024,  time:ISODate(" 2016-02-30T09:12:32.525Z"),order:[
		{item_id:1014, amount:3 },
		{item_id:1009, amount:4 },
		{item_id:1006, amount:1 },
		{item_id:1002, amount:7 }
	]},
	{id_k:100011,	user_id:11033,  time:ISODate(" 2016-03-14T10:18:01.823Z"),order:[
		{item_id:1002, amount:2 },
		{item_id:1005, amount:6 },
		{item_id:1012, amount:1 }
	]},
	{id_k:100012,	user_id:11029,  time:ISODate(" 2016-04-12T15:00:20.029Z"),order:[
		{item_id:1005, amount:3 },
		{item_id:1012, amount:1 },
		{item_id:1011, amount:2 },
		{item_id:1009, amount:1 },
		{item_id:1004, amount:7 }
	]},
	{id_k:100013,	user_id:11023,  time:ISODate(" 2016-05-16T21:31:20.723Z"),order:[
		{item_id:1011, amount:2 },
		{item_id:1009, amount:3 },
		{item_id:1004, amount:6 },
		{item_id:1015, amount:1 },
		{item_id:1001, amount:2 }
	]},
	{id_k:100014,	user_id:11020,  time:ISODate(" 2016-06-08T01:12:59.562Z"),order:[
		{item_id:1015, amount:7 },
		{item_id:1009, amount:2 },
		{item_id:1001, amount:2 }
	]},
	{id_k:100001,	user_id:11020,  time:ISODate("2016-07-15T03:24:31.824Z"),order:[
		{item_id:1001, amount:2 },
		{item_id:1004, amount:1 },
		{item_id:1019, amount:1 },
		{item_id:1008, amount:2 },
		{item_id:1006, amount:4 }
	]},
	{id_k:100002,	user_id:11021,  time:ISODate("2016-08-14T08:51:43.421Z"),order:[
		{item_id:1019, amount:2 },
		{item_id:1008, amount:3 },
		{item_id:1006, amount:1 },
		{item_id:1017, amount:2 },
		{item_id:1002, amount:4 }
	]},
	{id_k:100003,	user_id:11022,  time:ISODate("2016-09-27T13:52:34.423Z"),order:[
		{item_id:1017, amount:1 },
		{item_id:1002, amount:1 },
		{item_id:1015, amount:2 },
		{item_id:1016, amount:3 },
		{item_id:1013, amount:4 }
	]},
	{id_k:100018,	user_id:11023,  time:ISODate("2017-01-26T14:45:51.345Z"),order:[
		{item_id:1015, amount:5 },
		{item_id:1016, amount:1 },
		{item_id:1013, amount:3 },
		{item_id:1014, amount:11 },
		{item_id:1009, amount:3 },
		{item_id:1006, amount:2 }
	]},
	{id_k:100004,	user_id:11024,  time:ISODate(" 2017-02-30T09:12:32.525Z"),order:[
		{item_id:1014, amount:1 },
		{item_id:1009, amount:7 },
		{item_id:1006, amount:1 },
		{item_id:1002, amount:4 }
	]},
	{id_k:100005,	user_id:11033,  time:ISODate(" 2017-03-14T10:18:01.823Z"),order:[
		{item_id:1002, amount:1 },
		{item_id:1005, amount:4 },
		{item_id:1012, amount:2 }
	]},
	{id_k:100006,	user_id:11029,  time:ISODate(" 2017-04-12T15:00:20.029Z"),order:[
		{item_id:1005, amount:2 },
		{item_id:1012, amount:1 },
		{item_id:1011, amount:3 },
		{item_id:1009, amount:7 },
		{item_id:1004, amount:1 }
	]},
	{id_k:100007,	user_id:11023,  time:ISODate(" 2017-05-16T21:31:20.723Z"),order:[
		{item_id:1011, amount:6 },
		{item_id:1009, amount:9 },
		{item_id:1004, amount:2 },
		{item_id:1015, amount:3 },
		{item_id:1001, amount:6 }
	]},
	{id_k:100008,	user_id:11020,  time:ISODate(" 2017-06-08T01:12:59.562Z"),order:[
		{item_id:1015, amount:2 },
		{item_id:1009, amount:13 },
		{item_id:1001, amount:1 }
	]},
	{id_k:100015,	user_id:11020,  time:ISODate("2017-07-15T03:24:31.824Z"),order:[
		{item_id:1001, amount:1 },
		{item_id:1004, amount:2 },
		{item_id:1019, amount:3 },
		{item_id:1008, amount:4 },
		{item_id:1006, amount:1 }
	]},
	{id_k:100016,	user_id:11021,  time:ISODate("2017-08-14T08:51:43.421Z"),order:[
		{item_id:1019, amount:2 },
		{item_id:1008, amount:5 },
		{item_id:1006, amount:2 },
		{item_id:1017, amount:3 },
		{item_id:1002, amount:1 }
	]},
	{id_k:100017,	user_id:11022,  time:ISODate("2017-09-27T13:52:34.423Z"),order:[
		{item_id:1017, amount:2 },
		{item_id:1002, amount:5 },
		{item_id:1015, amount:2 },
		{item_id:1016, amount:1 },
		{item_id:1013, amount:3 }
	]}
]);

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

var mapUsers1 = function() {
    var values = {
        name: this.name,
        city: this.city,
        telephone: this.telephone,
		email: this.email
    };
    emit(this.id_t, values);
};
var mapOrders1 = function() {
    var values = {
        id_o: this.id_k,
		time: this.time,
		order:[]
    };
	for(var i in this.order){
		values.order.push({item_id:this.order[i].item_id,amount:this.order[i].amount})
	}
    emit(this.user_id, values);
};
var reduce1 = function(key, values) {
    var result = {"order":[]}, orderFields = {
        "item_id": '', 
        "amount": ''
    };
    values.forEach(function(value) {
		/*if (!("customer" in result)) {
			result[].customer = [];
		}*/
        if ("user_id" in value) {
			result.order.push(value.order);
        }
        for (var field in value) {
            if (value.hasOwnProperty(field) && !(field in orderFields)) {
                result[field] = value[field];
            }
        }
    });
    return result;
};
db.users.mapReduce(mapUsers1, reduce1, {"out": {"reduce": "users_orders"}});
db.orders.mapReduce(mapOrders1, reduce1, {"out": {"reduce": "users_orders"}});
db.users_orders.find().pretty();




var mapItems2 = function() {
    var key = this.id_t;
    var values = {
		index: this.index,
		category: this.category,
		brand: this.brand,
		model: this.model,
		price: this.price,
		order:[]
    };
    emit(key, values);
};
var mapUsers_Orders2 = function() {
    var key = 0, values = {
		user_id: this._id,
        name: this.value.name,
        city: this.value.city,
        telephone: this.value.telephone,
		email: this.value.email,
        id_o: this.value.id_o,
		time: this.value.time,
		amount:0
    };
	for(var i in this.value.order){
		values.amount = this.value.order[i].amount;
		key = this.value.order[i].item_id; 
		emit(key, values);
	}
};

var reduce2 = function(key, values) {
    var result = {"customer":[]}, customerFields = {
        "id_o": '', 
        "user_id": '',
        "name": '',
        "city": '',
        "telephone": '',
        "email": '',
        "time": '',
        "amount": ''
    };
    values.forEach(function(value9) {
		/*if (!("customer" in result)) {
			result.customer = [];
		}*/
		if ("user_id" in value9) {
			result.customer.push(value9);
            /*result.push(value);*/
        } 
		/*else if ("index" in value9) {
            result.order.push.apply(result.order, value.order);
        }*/
        for (var field in value9) {
            if (value9.hasOwnProperty(field) && !(field in customerFields)) {
                result[field] = value9[field];
            }
        }
    });
    return result;
};

db.items.mapReduce(mapItems2, reduce2, {"out": {"reduce": "users_orders_items"}});
db.users_orders.mapReduce(mapUsers_Orders2, reduce2, {"out": {"reduce": "users_orders_items"}});
db.users_orders_items.find().pretty();
/*db.users_orders_items.remove({});*/

var mapUsers_Orders_Items3 = function() {
    var key = 0, values = {
		index: this.value.index,
		category: this.value.category,
		brand: this.value.brand,
		model: this.value.model,
		price: this.value.price,
		item_id: this._id,
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

var reduce3 = function(key, values) {
    var result = {"order":[]}, orderFields = {
        "item_id": '', 
        "amount": '',
		"index":'',
		"category":'',
		"brand":'',
		"model":'',
		"price":''
    };
    values.forEach(function(value9) {
		result.order.push({item_id:value9.item_id,amount:value9.amount,index:value9.index,category:value9.category,brand:value9.brand,model:value9.model,price:value9.price});
        for (var field in value9) {
            if (value9.hasOwnProperty(field) && !(field in orderFields)) {
                result[field] = value9[field];
            }
        }
    });
    return result;
};

db.users_orders_items.mapReduce(mapUsers_Orders_Items3, reduce3, {"out": {"reduce": "orders_by"}});

db.orders_by.find().pretty();

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
