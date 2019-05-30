
1)
var map1 = function() {
	emit(this.producer, 1);
}

var reduce1 = function(key, values) {
	return Array.sum(values);
}

db.Lab7.mapReduce(map1, reduce1, { out: "map_reduce_example" })
db.map_reduce_example.find()



2)
var map2 = function() {
	emit(this.producer, this.price);
}

var reduce2 = function(key, values) {
	return Array.sum(values);
}

db.Lab7.mapReduce(map2, reduce2, { out: "map_reduce_2" })
db.map_reduce_2.find()




3)
var map3 = function() {
	emit(this.customer, this.total_sum);
}

var reduce3 = function(key, values) {
	return Array.sum(values);
}

db.orders.mapReduce(map3, reduce3, { out: "map_reduce_3" })
db.map_reduce_3.find()



4)
db.orders.mapReduce(map3, reduce3, { out: "map_reduce_4", query: { date: { $gt: new Date('10/04/2012') }}, })
db.map_reduce_4.find()



5)
var map5 = function() {
	emit(1, {sum: this.total_sum, count: 1});
}

var reduce5 = function(key, values) {
	res = {sum : 0, count : 0};
	for(var i in values)
	{
		res.sum += values[i].sum;
		res.count += values[i].count;
	}
        return res;
}

var final5 = function (key, res) {
	return res.sum / res.count;
}

db.orders.mapReduce(map5, reduce5, { finalize: final5, out: "map_reduce_5" })
db.map_reduce_5.find()



6)
var map6 = function() {
	for(item in this.order_items_id)
	{
		emit(this.order_items_id[item].id, 1);
	}
}

var reduce6 = function(key, values) {
	var sum = 0;
	for(var i in values) {
		sum += values[i];
	}
	return sum;
}


db.orders.mapReduce(map6, reduce6, { out: "map_reduce_6" })
db.map_reduce_6.find()



7)
var map7 = function() {
	for(item in this.order_items_id)
	{
		emit(this.order_items_id[item].id, this.customer);
	}
}

var fin = function(key,value) {
        for (var k in value) {
			if ( Object.prototype.toString.call( value[k] ) !== '[object Array]') {
				var replace = [];
				replace.push( value[k] );
				value[k] = replace;
			}
        }
        return value;
}

var reduce7 = function(key, values) {
	var reduced = {};

      values.forEach(function(value) {
        for ( var k in value ) {
		if ( !reduced.hasOwnProperty(k) ) {
			reduced[k] = [];
		}
          	if ( reduced[k].indexOf( value[k] ) == -1 ) {
			reduced[k].push( value[k] );
        	}
	}

      });

      return reduced;
}

db.orders.mapReduce(map7, reduce7, { out: "map_reduce_7" })
db.map_reduce_7.find()



8)
var map8 = function() {
	for(item in this.order_items_id)
	{
		emit(this.order_items_id[item].id, this.customer);
	}
}

var fin8 = function(key,value) {
        for (var k in value) {
			var res = [];
			if ( Object.prototype.toString.call( value[k] ) !== '[object Array]') {
				var replace = [];
				replace.push( value[k] );
				value[k] = replace;
			}
        }

        return value;
}


var reduce8 = function(key, values) {
	var count;
	var reduced = {};
	values.forEach(function(value) {
		for ( var k in value ) {
			if ( !reduced.hasOwnProperty(k) ) {
				reduced[k] = [];
			}
			reduced[k].push( value[k] );
		
		}
		for ( var k in value ) {
			count = 0;
			for (var i = 0; i < value[k].length; i++) {
				for (var j = i; i < value[k].lenght; j++) {
					if (value[k][i] == value[k][j]) {
						count += 1;
					}
				}
				if (count == 1) {
					reduced[k].pop(value[k][i]);
				}
			}
		}
	});
	return reduced;
}

db.orders.mapReduce(map8, reduce8, { finalize:fin8, out: "map_reduce_8" })
db.map_reduce_8.find()



9)
var map9 = function() {
            for(var i in this.order_items_id)
            emit(this.order_items_id[i].id,1);
                   };
var reduce9 = function(key,values) {
            return Array.sum(values);
                      };  
db.orders.mapReduce(map9,reduce9,{out:"map_reduce_9"}).find().sort({value:-1}).limit(6)

10)
db.orders.mapReduce(map6,reduce6,{query:{date:{$gte:new Date("11/12/2012")}},out:{reduce:"map_reduce_6"}}).find()








Різниця в продажі товару за один і той же період часу в різні роки

Товар - {month - year - difference}
Різниця по кількості проданих ітемів

var map11 = function() {
	for (var i in this.order_items_id)
	{
		emit({item_id: this.order_items_id[i].id, month: this.month, year: this.year}, 1)
	}
};

var reduce11 = function(key, values) {
	return Array.sum(values);
}

db.orders.mapReduce(map11, reduce11, { out: "map_reduce_11" })
db.map_reduce_11.find()

var map12 = function() {
	var v = {y1: 0, y0: 0, diff: 0};
	if (this._id.year == 2011)
	{
		v.y0 = this.value;
		emit({id: this._id.item_id, month: this._id.month}, v);
	}
	else if (this._id.year == 2012)
	{
		v.y1 = this.value;
		emit({id: this._id.item_id, month: this._id.month}, v);
	}
	emit({id: this._id.item_id, month: this._id.month}, v)
};

var reduce12 = function(key, values) {
	var v;
	for(var i = 0; i < values.length; i++)
	{
		values[i].diff = values[i].y1 - values[i].y0;
		v = values[i];
		return v;
	}
}

db.map_reduce_11.mapReduce(map12, reduce12, { out: "map_reduce_12" })
db.map_reduce_12.find()
