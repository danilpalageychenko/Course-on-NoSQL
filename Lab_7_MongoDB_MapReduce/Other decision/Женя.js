Женя КПИ, [15.01.19 22:02]
In MongoDB, map-reduce operations use custom JavaScript functions to map, or associate, values to a key. If a key has multiple values mapped to it, 
the operation reduces the values for the key to a single object. 


./mongod --dbpath /Users/evgeniem/mongo-data12

 
 
use lab7 

 
db.items.insert([ 
 {item_id:1, category:"tvBox", producer:"Xaomi", model: "Mibox 3", price: 310, color: "black"}, 
 {item_id:2, category:"tvBox", producer:"Xaomi", model: "Mibox 3s", price: 300, color: "black"}, 
 {item_id:3, category:"tvBox", producer:"Xaomi", model: "Mibox 2", price: 190, color: "white"}, 
 {item_id:4, category:"tvBox", producer:"Xaomi", model: "Mibox 3 World", price: 330, color: "black"}, 
 {item_id:5, category:"tvBox", producer:"Xaomi", model: "Mibox 2 edition", price: 200, color: "white"}, 
 {item_id:6, category:"tvBox", producer:"Xaomi", model: "Mibox 1", price: 50, color: "black"}, 
 {item_id:7, category:"tvBox", producer:"Xaomi", model: "Mibox 2+", price: 100, color: "white"}, 
 {item_id:8, category:"tvBox", producer:"Xaomi", model: "Mibox 3 UA", price: 250, color: "black"}, 
 {item_id:9, category:"AppleTV",        producer:"Apple", model: "tv 1", price: 200, color: "white"}, 
 {item_id:10, category:"AppleTV", producer:"Apple", model: "tv 2", price: 250, color: "black"}, 
 {item_id:11, category:"AppleTV", producer:"Apple", model: "tv 3", price: 380, color: "white"}, 
 {item_id:12, category:"AppleTV", producer:"Apple", model: "tv 2a",  price: 250, color: "black"}, 
 {item_id:13, category:"AppleTV", producer:"Apple", model: "tv 3s",  price: 350, color: "white"}, 
 {item_id:14, category:"AppleTV", producer:"Apple", model: "tv 3+", price: 370, color: "black"}, 
 {item_id:15,      category:"AndroidTV", producer:"Samsung", model: "tv321", price: 80, color: "white"}, 
 {item_id:16, category:"AndroidTV", producer:"Samsung", model: "tv421", price: 150, color: "black"}, 
 {item_id:17, category:"AndroidTV", producer:"Samsung", model: "tv431", price: 140, color: "white"}, 
 {item_id:18,      category:"AndroidTV", producer:"Samsung", model: "tv531", price: 175, color: "black"}, 
 {item_id:19,      category:"AndroidTV", producer:"Samsung", model: "tv534", price: 185, color: "white"}, 
 {item_id:20,      category:"AndroidTV",  producer:"Samsung", model: "tv533", price: 250, color: "black"} 
]);
 

db.dbNew.insert({id_k:10, sum:1000, customer:{ name:"Victor", city:"Kiev",  telephone:"+3806165486500", email:"b2uuhe4u@gmail.com"},  time:"2017",order:[ 
  {item_id:14, amount:2 }, 
  {item_id:9, amount:3 }, 
  {item_id:6, amount:4 }, 
  {item_id:12, amount:1 } 
 ]}); 
db.orders.insert([ 
 {id_k:11, sum:4335, customer:{ name:"Karl Som", city:"Poltava",  telephone:"+380994314468", email:"test07@gmail.com"},  time:"2017",order:[ 
  {item_id:1, amount:3 }, 
  {item_id:2, amount:6 }, 
  {item_id:8, amount:2 }, 
  {item_id:9, amount:4 }, 
  {item_id:11, amount:6 }, 
  {item_id:18, amount:1 } 
 ]}, 
 {id_k:12, sum:2310, customer:{ name:"Adrey Ostin", city:"Kiev",  telephone:"+389432486535", email:"test06@gmail.com"},  time:"2017" ,order:[ 
  {item_id:14, amount:3 }, 
  {item_id:9, amount:4 }, 
  {item_id:16, amount:1 }, 
  {item_id:12, amount:7 } 
 ]}, 
 {id_k:13, sum:6180, customer:{ name:"Viktor Maznica", city:"Uzhgorod", telephone:"+380473522431", email:"test05@gmail.com"},  time:"2017",order:[ 
  {item_id:12, amount:2 }, 
  {item_id:5, amount:6 }, 
  {item_id:12, amount:1 } 
 ]}, 
 {id_k:14, sum:8290, customer:{ name:"Hleb Filip", city:"Poltava",  telephone:"+380874561531", email:"test04@gmail.com"},  time:"2018",order:[ 
  {item_id:15, amount:3 }, 
  {item_id:12, amount:1 }, 
  {item_id:11, amount:2 }, 
  {item_id:19, amount:1 }, 
  {item_id:14, amount:7 } 
 ]}, 
 {id_k:15, sum:5855, customer:{ name:"Sonya Sova", city:"Poltava",  telephone:"+380684315168", email:"test03@gmail.com"},  time:"2018",order:[ 
  {item_id:11, amount:2 }, 
  {item_id:9, amount:3 }, 
  {item_id:4, amount:6 }, 
  {item_id:5, amount:1 }, 
  {item_id:1, amount:2 } 
 ]},

{id_k:16, sum:4990, customer:{ name:"Vladislav Viktorivich", city:"Kiev",  telephone:"+380681483652", email:"test02@gmail.com"},  time:"2018",order:[ 
  {item_id:5, amount:7 }, 
  {item_id:9, amount:2 }, 
  {item_id:1, amount:2 } 
 ]}
]);




 
 {id_k:17, sum:8155, customer:{ name:"Erika Born", city:"Kiev",  telephone:"+380681483652", email:"test01@gmail.com"},  time:ISODate("2016-07-15T03:24:31.824Z"),order:[ 
  {item_id:11, amount:2 }, 
  {item_id:14, amount:1 }, 
  {item_id:19, amount:1 }, 
  {item_id:18, amount:2 }, 
  {item_id:16, amount:4 } 
 ]}, 
 {id_k:18, sum:9650, customer:{ name:"Alister Kornd", city:"Lviv",  telephone:"+380682566248", email:"test0@gmail.com"},  time:ISODate("2016-08-14T08:51:43.421Z"),order:[ 
  {item_id:19, amount:2 }, 
  {item_id:8, amount:3 }, 
  {item_id:6, amount:1 }, 
  {item_id:7, amount:2 }, 
  {item_id:2, amount:4 } 
 ]}, 
 {id_k:19, sum:2950, customer:{ name:"Sofia Lima", city:"Lviv",  telephone:"+380624523322", email:"test1@gmail.com"},  time:ISODate("2016-09-27T13:52:34.423Z"),order:[ 
  {item_id:17, amount:1 }, 
  {item_id:12, amount:1 }, 
  {item_id:15, amount:2 }, 
  {item_id:16, amount:3 }, 
  {item_id:13, amount:4 } 
 ]}, 
 {id_k:20, sum:5570, customer:{ name:"Oskar Tomphson", city:"Poltava",  telephone:"+380684315168", email:"test2@gmail.com"},  time:ISODate("2017-01-26T14:45:51.345Z"),order:[ 
  {item_id:15, amount:5 }, 
  {item_id:16, amount:1 }, 
  {item_id:13, amount:3 }, 
  {item_id:14, amount:11 }, 
  {item_id:9, amount:3 }, 
  {item_id:16, amount:2 } 
 ]}, 
 {id_k:21, sum:8670, customer:{ name:"Sulima Dasha", city:"Kiev",  telephone:"+380515486535", email:"test3@gmail.com"},  time:ISODate("2017-02-30T09:12:32.525Z"),order:[ 
  {item_id:14, amount:1 }, 
  {item_id:19, amount:7 }, 
  {item_id:16, amount:1 }, 
  {item_id:2, amount:4 } 
 ]}, 
 {id_k:22, sum:2500, customer:{ name:"Ban Jonson", city:"Uzhgorod", telephone:"+380473522431", email:"test4@gmail.com"},  time:ISODate("2017-03-14T10:18:01.823Z"),order:[ 
  {item_id:2, amount:1 }, 
  {item_id:5, amount:4 }, 
  {item_id:12, amount:2 } 
 ]}, 
 {id_k:23, sum:15620, customer:{ name:"Liza Kostina", city:"Poltava",  telephone:"+380874561531", email:"test5@gmail.com"},  time:ISODate("2017-04-12T15:00:20.029Z"),order:[ 
  {item_id:5, amount:2 }, 
  {item_id:2, amount:1 }, 
  {item_id:1, amount:3 }, 
  {item_id:19, amount:7 }, 
  {item_id:14, amount:1 } 
 ]}, 
 {id_k:24, sum:12650, customer:{ name:"Lynda Rembo", city:"Poltava",  telephone:"+380684315168", email:"test6@gmail.com"},  time:ISODate("2017-05-16T21:31:20.723Z"),order:[ 
  {item_id:11, amount:6 }, 
  {item_id:19, amount:9 }, 
  {item_id:14, amount:2 }, 
  {item_id:15, amount:3 }, 
  {item_id:11, amount:6 } 
 ]}, 
 {id_k:25, sum:13510, customer:{ name:"Vladislav Karen", city:"Kiev",  telephone:"+380681483652", email:"test7@gmail.com"},  time:ISODate("2017-06-08T01:12:59.562Z"),order:[ 
  {item_id:15, amount:2 }, 
  {item_id:19, amount:13 }, 
  {item_id:11, amount:1 } 
 ]}, 
 {id_k:26, sum:4975, customer:{ name:"Roman Ban", city:"Kiev",  telephone:"+380681483652", email:"test8@gmail.com"},  time:ISODate("2017-07-15T03:24:31.824Z"),order:[ 
  {item_id:11, amount:1 }, 
  {item_id:14, amount:2 }, 
  {item_id:19, amount:3 }, 
  {item_id:8, amount:4 }, 
  {item_id:6, amount:1 } 
 ]}, 
 {id_k:27, sum:3625, customer:{ name:"Inna Omand", city:"Dnetsk",  telephone:"+380972587222", email:"test9@gmail.com"},  time:ISODate("2017-08-14T08:51:43.421Z"),order:[ 
  {item_id:19, amount:1 }, 
  {item_id:18, amount:1 }, 
  {item_id:16, amount:1 }, 
  {item_id:17, amount:1 }, 
  {item_id:12, amount:5 } 
 ]}, 
 {id_k:28, sum:2670, customer:{ name:"Karen Diaz", city:"Dnipro",  telephone:"+380974523000", email:"test10@gmail.com"},  time:"2017",order:[ 
  {item_id:17, amount:1 }, 
  {item_id:2, amount:8 }, 
  {item_id:5, amount:1 }, 
  {item_id:6, amount:2 }, 
  {item_id:3, amount:4 } 
 ]} 
]);








db.orders.insert([

{id_k:1, customer: {name:"Yevh", city:"Kiev",  telephone:"+380667632541", email:"test1@gmail.com"}, date: ISODate("2017-09-24"), total_sum: 2222, order:[
  {item_id:1, amount:1 },
  {item_id:2, amount:2 },
  {item_id:17, amount:2 },
  {item_id:5, amount:3 },
  {item_id:8, amount:3 }
 ]},
 {id_k:2, customer: {name:"Ka So", city:"Kiev",  telephone:"+380683333243", email:"test2@gmail.com"}, date : ISODate("2017-08-26"), total_sum: 4450, order:[
  {item_id:20, amount:2 },
  {item_id:19, amount:3 },
  {item_id:18, amount:1 },
  {item_id:4, amount:2 },
  {item_id:3, amount:3 }
 ]},
 {id_k:3, customer:{name:"Ma Kro", city:"Minsk",  telephone:"+380662166200", email:"test3@gmail.com"}, date: ISODate("2017-03-02"), total_sum: 2240, order:[
  {item_id:16, amount:1 },
  {item_id:5, amount:1 },
  {item_id:6, amount:2 },
  {item_id:7, amount:3 },
  {item_id:2, amount:3 }
 ]},
 {id_k:4, customer:{name:"Ban Kra", city:"Dnipro",  telephone:"+380634315111", email:"test4@gmail.com"}, date: ISODate("2017-07-14") , total_sum: 3600, order:[
  {item_id:9, amount:5 },
  {item_id:8, amount:1 },
  {item_id:7, amount:3 },
  {item_id:1, amount:16 },
  {item_id:6, amount:3 },
  {item_id:4, amount:2 }
 ]}
]);

 {id_k:5, customer:{name:"Viktor Panteleev", city:"Poltava",  telephone:"+380982524444", email:"test5@gmail.com"}, date: ISODate("2018-06-04") , total_sum: 8020, order:[
  {item_id:13, amount:2 },
  {item_id:11, amount:4 },
  {item_id:16, amount:5 },
  {item_id:12, amount:4 }
 ]},
 {id_k:6, customer:{name:"Petr Oshanovich", city:"Dnipro",  telephone:"+3809725247021", email:"test6@gmail.com"}, date: ISODate("2018-04-05") , total_sum: 4100, order:[
  {item_id:2, amount:6 },
  {item_id:5, amount:4 },
  {item_id:12, amount:8 }
 ]},
 {id_k:7, customer:{name:"Erika Kocher", city:"Ternopil",  telephone:"+380954567817", email:"test7@gmail.com"}, date: ISODate("2018-05-17") , total_sum: 9350, order:[
  {item_id:15, amount:9 },
  {item_id:20, amount:5 },
  {item_id:19, amount:8 },
  {item_id:8, amount:7 },
  {item_id:3, amount:6 }
 ]},
 {id_k:8, customer:{name:"Petro Sagaydachnuy", city:"Zporizya",  telephone:"+380968454354", email:"test8@gmail.com"}, date: ISODate("2018-06-28") , total_sum: 15700, order:[
  {item_id:11, amount:6 },
  {item_id:9, amount:9 },
  {item_id:4, amount:2 },
  {item_id:15, amount:3 },
  {item_id:1, amount:6 }
 ]},
 {id_k:9, customer: {name:"Alex HolmsÃ¢â‚¬Å“, city:"Kiev",  telephone:"+380668780671", email:"test9@gmail.com"}, date: ISODate("2018-09-09") , total_sum: 3800, order:[
  {item_id:18, amount:2 },
  {item_id:17, amount:7 },
                 {item_id:1, amount:6 },
  {item_id:19, amount:1 }
 ]},
 {id_k:10, customer: {name:"Ulia Yankevich", city:"Kiev",  telephone:"+380667386312", email:"test10@gmail.com"}, date: ISODate("2018-08-02") , total_sum: 163550, order:[
  {item_id:6, amount:12 },
  {item_id:18, amount:12 },
                 {item_id:1, amount:6 },
  {item_id:5, amount:120 }
 ]}
]);

 
 
1. Підрахувати скільки одиниць товару є у кожного виробника ("producer")
 
var mapFunc = function() { emit(this.producer, 1); } 
 
var reduceFunc = function(key, values) { return Array.sum(values); } 
 
db.items.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE1" }).find() 
 


 
2. Підрахувати загальну вартість товарів у кожного виробника ("producer")
 
var mapFunc = function() { emit(this.producer, this.price); } 
 
var reduceFunc = function(key, values) { return Array.sum(values); } 
 
db.items.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE2" }).find() 
 
 

 
3. Підрахуйте сумарну вартостей замовлень зроблену кожним замовником
 
var mapFunc = function() { emit(this.customer.name, this.sum); } 
 
var reduceFunc = function(key, values) { return Array.sum(values); } 
 
db.orders.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE3" }).find() 
 
 
 
4. Підрахуйте сумарну вартість замовлень зроблену кожним замовником за певний період часу (використовуйте query condition)

var mapFunc = function() { emit(this.time, this.sum); }

var reduceFunc = function(key, values) { return Array.sum(values); }

db.orders.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE4", query: { time: { $gt: new Date('2016-02-30T09:12:32.525Z') }}, }).find() 
 
 
5. Підрахуйте середню вартість замовлення
 
var mapFunc = function() { emit(1, {sum: this.sum, count: 1}); } 
 
var reduceFunc = function(key, values) { 
 result = {sum : 0, count : 0, avg: 0}; 
 for(var i in values) 
 { 
  result.sum += values[i].sum; 
  result.count += values[i].count; 
 } 
        return result; 
} 
 
var finalRes = function (key, res) { 
 result.avg = result.sum / result.count 
 return result; 
} 
 
db.orders.mapReduce(mapFunc, reduceFunc, { finalize: finalRes, out: "EXAMPLE5" }).find() 
 

 
 
6. Підрахуйте середню вартість замовлення кожного покупця

 
var mapFunc = function() { 
 emit(this.customer.name, {sum: this.sum, count: 1}); 
} 
 
var reduceFunc = function(key, values) { 
 result = {sum : 0, count : 0}; 
 for(var i in values) 
 { 
  result.sum += values[i].sum; 
  result.count += values[i].count; 
 } 
        return result; 
} 
 
var finalRes = function (key, result) { 
 return result.sum / result.count; 
} 
 
db.orders.mapReduce(mapFunc, reduceFunc, { finalize: finalRes, out: "EXAMPLE6" }).find() 
 
 


 
7. Підрахуйте в скількох замовленнях зустрічався кожен товар (скільки разів він був куплений)

 
var mapFunc = function() { 
 for(item in this.order){ 
  emit(this.order[item].item_id, 1); 
 } 
} 
 
var reduceFunc = function(key, values) { 
        var sum = 0; 
 for(var i in values) { 
  sum += values[i]; 
 } 
 return sum; 
} 
 
db.orders.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE7" }).find() 
 
 
 
8. Для кожного товару отримаєте список всіх замовників які купили його
 
var mapFunc = function() { 
 var value = {name:this.customer.name}; 
        var key = 0; 
 for(var i in this.order){ 
  key = this.order[i].item_id; 
  emit(key, value); 
 } 
}; 
 
var reduceFunc = function(key, values) { 
 var temp; 
 var res = {customers : []}; 
 values.forEach(function(value){ 
  temp = false; 
  for(var i = 0; i < res.customers.length; i++){ 
   if(res.customers[i].name == value.name){ temp = true }; 
  } 
  if(!temp){ 
   res.customers.push(value); 
  } 
 }) 
    return res; 
}; 
db.orders.mapReduce(mapFunc, reduceFunc, {"out": "EXAMPLE8"}).find().pretty(); 
 
 
 
9. Отримайте товар та список замовників, які купували його більше одного (двох) разу(ів)
 
var mapFunc91 = function() { 
 var value = 1; 
        var key = {item_id:0, name:this.customer.name}; 
 for(var i in this.order){ 
  key.item_id = this.order[i].item_id; 
  emit(key, value); 
 } 
}; 
var reduceFunc91 = function(key, values) { 
 return Array.sum(values); 
} 
 
db.orders.mapReduce(mapFunc91, reduceFunc91, {"out": "EXAMPLE91"}).find(); 


var mapFunc2 = function(){
emit(1,this._id);
}

var reduceFunc2 = function(){
         emit("customers", this._id);
}

var reduceFunc3 = function(key, values){
         return {"result", values); }
}

Db.m19.mapReduce(mapFunc2, reduceFunc3, {out: “M20”}).find()

 
var mapFunc2 = function() { 
 var value1 = {name: this._id.name, count:this.value}; 
        var key = this._id.item_id; 
 emit(key, value1); 
}; 
var reduceFunc2 = function(key, values) { 
 var res = {customers : []}; 
 res.customers = values; 
 return res; 
}; 
db.map_reduce_91.mapReduce(mapFunc2, reduceFunc2, {"out": "EXAMPLE92", query:{ value:{$gt: 1}}}).find(); 
 
 
 
10. Отримайте топ N товарів за популярністю (тобто топ товарів, які куплялись найчастіше) (функцію sort не застосовувати)

 
var mapFunc1 = function() { 
            for(var i in this.orders) 
            emit(this.orders[I].item_id,1); 
                   }; 
var reduceFunc1 = function(key,values) { 
            return Array.sum(values); 
                      };  
 
db.orders.mapReduce(mapFunc1,reduceFunc1,{out:"EXAMPLE10_1"}).find()

 

var reduceFuncD = function(key, values) { return Array.sum(values); }
var mapFuncD = function() { emit(this.time, this.sum); }

db.orders.mapReduce(mapFuncD, reduceFuncD, { out: "EXAMPLE4", query: { time: { $gt: new Date('2016-02-30T09:12:32.525Z') }}, }).find()


 
var mapFunc1 = function() {
            var key = [month:0, _id: 0] 
            for(var i in this.order){ 
            key.id = this.order




emit(key,1); }
 };




 
var reduceFunc1 = function(key,values) { 
            return Array.sum(values); 
                      };   
db.orders.mapReduce(mapFunc1,reduceFunc1,{out:"EXAMPLE10_1"}).find()



 
var mapFunc2 = function(){ 
    emit(this.value, this._id); 
};
 
var reduceFunc2 = function(key,values) { 
     return values.join(","); 
}; 
db.map_reduce_10.mapReduce(mapFunc2, reduceFunc2, {out:"EXAMPLE10_2"}).find().sort({_id: -1}) 
 
 
 
11. Для завдання 4) реалізуйте інкрементальний Map / Reduce використовуючи out і action 

var mapFunc = function() { emit(this.time, this.sum); } 
 
var reduceFunc = function(key, values) { return Array.sum(values); }

db.orders.mapReduce(mapFunc, reduceFunc, { out: {reduce: "EXAMPLE11"}, query: { time: { $gt: new Date('2016-02-30T09:12:32.525Z') }}, }).find()

 
12. Для кожного користувача, визначить на яку суму їм було зроблено замовлень за кожен місяць цього року та за аналогічний місяць минулого року та динаміку збільшення/зменшення замовлень.

var map121 = function() { 
 emit({name: this.customer.name, year: this.time}, this.sum)
         v.push(values[i].diff); 
}; 
 
var reduce121 = function(key, values) { 
 return Array.sum(values); 
} 
 
db.dbNew.mapReduce(map121, reduce121, { out: "map_reduce_121" }).find() 
 
var map122 = function() { 
 var v = {y2018: 0, y2017: 0, diff: 0}; 
 if (this._id.date == 2017) 
 { 
  v.y2017 = this.value; 
  emit({name: this._id.name}, v); 
 } 
 else if (this._id.date == 2018) 
 { 
  v.y2018 = this.value; 
  emit({name: this._id.name}, v); 
 } 
 emit({name: this._id.name}, v) 
}; 
 
var reduce122 = function(key, values) { 
 var v = [] 
 for(var i = 0; i < values.length; i++) 
 { 
  values[i].diff = values[i].y2018 - values[i].y2017; 
  v.push(values[i].diff); 
 } 
 return Array.sum(v)/2 
} 
 
db.map_reduce_121.mapReduce(map122, reduce122, { out: "map_reduce_122" }).find()
























var map = function(){
  emit({customer:this.customer.name, year: this.time.getFullYear()}, this.total_sum);
}

var reduce = function(key, value) {
  return Array.sum(value);
};

db.orders.mapReduce(map,reduce,{out:"task121"}).find({});

var map = function(){
  v = {last_year:0, cur_year:0,diff: 0};
  if(this._id.year == 2017){
    v.cur_year = this.value;
  }
  if(this._id.year == 2016){
    v.last_year = this.value;
  }
  emit({customer: this._id.customer}, v);
  
}

var reduce = function(key, value) {
  var v = {last_year:[], cur_year:[], diff: []}; 
  for(var i = 0; i < value.length; i++){
    var diff = value[i].cur_year - value[i].last_year;
    v.last_year.push(value[i].last_year);
    v.cur_year.push(value[i].cur_year);
    v.diff.push(diff);
  }
  v.diff = Array.sum(v.diff);
  v.last_year = Array.sum(v.last_year);
  v.cur_year = Array.sum(v.cur_year);
  return v;
};

db.task121.mapReduce(map,reduce,{out:"task122"}).find({});



var map = function(){
  emit({customer:this.customer.name, year: this.time.getFullYear()}, this.total_sum);
}

var reduce = function(key, value) {
  return Array.sum(value);
};

db.orders.mapReduce(map,reduce,{out:"task121"}).find({});

var map = function(){
  v = {last_year:0, cur_year:0,diff: 0};
  if(this._id.year == 2017){
    v.cur_year = this.value;
  }
  if(this._id.year == 2016){
    v.last_year = this.value;
  }
  emit({customer: this._id.customer}, v);
  
}

var reduce = function(key, value) {
  var v = {last_year:0, cur_year:0, diff: 0}; 
  for(var i = 0; i < value.length; i++){
  v.last_year = v.last_year + value[i].last_year;
  v.cur_year = v.cur_year + value[i].cur_year;
   }
  v.diff =  v.last_year - v.cur_year;
   return v;
};

db.task121.mapReduce(map,reduce,{out:"task122"}).find({});

















var map = function(){

emit({customer:this.customer.name, year: this.time.getFullYear()}, this.total_sum);
}

var reduce = function(key, value) {
  return Array.sum(value);
};

db.orders.mapReduce(map,reduce,{out:"task121"}).find({});

var map = function(){
  v = {last_year:0, cur_year:0,diff: 0};
  if(this._id.year == 2017){
    v.cur_year = this.value;
  }
  if(this._id.year == 2016){
    v.last_year = this.value;
  }
  emit({customer: this._id.customer}, v);
  
}

var reduce = function(key, value) {
  var v = {last_year:0, cur_year:0, diff: 0}; 

  v.last_year = value[0].last_year + value[1].last_year;
  v.cur_year = value[0].cur_year + value[1].cur_year;
   
  v.diff =  v.last_year - v.cur_year;
   return v;
};

db.task121.mapReduce(map,reduce,{out:"task122"}).find({});




















var map = function(){
  emit({customer:this.customer.name, year: this.time.getFullYear()}, this.total_sum);
}

var reduce = function(key, value) {
  return Array.sum(value);
};

db.orders.mapReduce(map,reduce,{out:"task121"}).find({});

var map = function(){
  v = {last_year:0, cur_year:0,diff: 0};
  if(this._id.year == 2017){
    v.cur_year = this.value;
  }
  if(this._id.year == 2016){
    v.last_year = this.value;
  }
  emit({customer: this._id.customer}, v);
}


var reduce = function(key, value) {
  var v = {last_year:0, cur_year:0, diff: 0}; 
    var diff = value.cur_year - value.last_year;
    v.last_year = value.last_year;
    v.cur_year = value.cur_year;
    v.diff = diff;
 
  return v;
};

db.task121.mapReduce(map,reduce,{out:"task122"}).find({});






v.diff = Array.sum(v.diff);
  v.last_year = Array.sum(v.last_year);
  v.cur_year = Array.sum(v.cur_year);





 
var map121 = function() { 
 emit({name: this.customer.name, year: this.time}, this.sum)
         v.push(values[i].diff); 
}; 
 
var reduce121 = function(key, values) { 
 return Array.sum(values); 
} 
 
db.dbNew.mapReduce(map121, reduce121, { out: "map_reduce_121" }).find() 
 
var map122 = function() { 
 var v = {y2018: 0, y2017: 0, diff: 0}; 
 if (this._id.date == 2017) 
 { 
  v.y2017 = this.value; 
  emit({name: this._id.name}, v); 
 } 
 else if (this._id.date == 2018) 
 { 
  v.y2018 = this.value; 
  emit({name: this._id.name}, v); 
 } 
 emit({name: this._id.name}, v) 
}; 
 
var reduce122 = function(key, values) { 
 var v = [] 
 for(var i = 0; i < values.length; i++) 
 { 
  values[i].diff = values[i].y2018 - values[i].y2017; 
  v.push(values[i].diff); 
 } 
 return Array.sum(v)/2 
} 
 
db.map_reduce_121.mapReduce(map122, reduce122, { out: "map_reduce_122" }).find() 
 
 
 ----------------------------------------------------------------------------------------------------------------------------------------
DOPS: 
1) Func12 
2) db.orders.mapReduce(map5, reduce5, { out: {reduce: "map_reduce_151"}}).find() 
3) Func10







var map = function() {
  for(var i in this.order){
    emit({item:this.order[i].item_id, month:this.time}, 1);
  }
};

var reduce = function(key, value) {
    return Array.sum(value);
};

db.orders.mapReduce(map,reduce,{out:"task"}).find({});



var map = function() {
  emit({month: this._id.month, pop: this.value*(-1)}, this._id.item);
};

var reduce = function(key, value) {
  var res = {result:[]};
    for(var i = 0; i < value.length; i++){
    res.result.push(value[i]);
  }
  return res;
};

db.task.mapReduce(map,reduce,{out:"tasknew"}).find({}).pretty();


var map = function() {
  emit(this._id.month, {pop: this._id.pop, item:this.value.result});
};

var reduce = function(key, value) {

  var res = {pop:value[0].pop, item: value[0].item};
  return res;
};

db.tasknew.mapReduce(map,reduce,{out:"tasknewnew"}).find({});










Var reduceFunc = function(key, values){
return {"result”:values}; 
}

Db.orders.mapReduce()









var map = function() {
  emit(this.customer.name, 1);
};

var reduce = function(key, values) {
  return {"result":values};
};

db.orders.mapReduce(map, reduce, {"out": "task81"}).find({});


var map = function() {
 













var map = function() {
  emit(this.customer.name, 1);
};

var reduce = function(key, values) {
  return {"result":values};
};

db.orders.