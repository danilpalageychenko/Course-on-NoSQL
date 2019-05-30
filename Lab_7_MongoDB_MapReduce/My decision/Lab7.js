
https://habr.com/ru/post/184130/

- Map-Reduce - Уменьшение карты

- Ограничение 16 мегабайт

- Блок finali опционален

- Возращать значение можно как в строку так и в колекцию

- Aggregation Pipeline - более оптимален и оптимизирован, он рекомендуються но не 
обеспечивает такой гибкости как map-reduce

- MongoDB поддерживает операции уменьшения карты для sharded collections.

- Операции сокращения карты также могут выводить результаты в sharded collections.

- Представления(Views) не поддерживают операции уменьшения карты.

- MapReduce — модель распределённых вычислений, представленная компанией Google, 
используемая для параллельных вычислений над очень большими, вплоть до нескольких 
петабайт,[1] наборами данных в компьютерных кластерах.


################################################################################################################################################
1. Підрахувати скільки одиниць товару є у кожного виробника ("producer")
var mapFunc = function() { emit(this.producer, 1); }  
var reduceFunc = function(key, values) { return Array.sum(values); } 
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE1" }).find() 


################################################################################################################################################
2. Підрахувати загальну вартість товарів у кожного виробника ("producer")
var mapFunc = function() { emit(this.producer, this.price); } 
var reduceFunc = function(key, values) { return Array.sum(values); } 
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE2" }).find() 


################################################################################################################################################
3. Підрахуйте сумарну вартостей замовлень зроблену кожним замовником
var mapFunc = function() { emit(this.customer, this.total_sum); } 
var reduceFunc = function(key, values) { return Array.sum(values); } 
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE3" }).find() 
--------------------------------------------------------------------------------------------------------------------------------------------
var mapFunc = function() 
{ 
    if (this.customer != null)
    {
        emit(this.payment.card_owner, this.total_sum);
    }
} 
var reduceFunc = function(key, values) { return Array.sum(values); } 
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE3" }).find() 
--------------------------------------------------------------------------------------------------------------------------------------------
var mapFunc = function() { emit(this.customer.name, this.total_sum); } 
var reduceFunc = function(key, values) { return Array.sum(values); } 
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE3", query : { order_number: {$exists : true}} }).find()


################################################################################################################################################
4. Підрахуйте сумарну вартість замовлень зроблену кожним замовником за певний період часу (використовуйте query condition)
var mapFunc = function() { if (this.date != null) {emit(this.date, this.total_sum);} }
var reduceFunc = function(key, values) { return Array.sum(values); }
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE4", query: { date: { $gt: new Date('2017-03-15T00:34:20.201Z') }}, }).find() 


################################################################################################################################################
5. Підрахуйте середню вартість замовлення
var mapFunc = function() { emit(1, {sum: this.total_sum, count: 1}); } 
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
db.lab1.mapReduce(mapFunc, reduceFunc, { finalize: finalRes, out: "EXAMPLE5", query : { order_number: {$exists : true}} }).find() 
--------------------------------------------------------------------------------------------------------------------------------------------
var mapFunc = function() { emit(1, this.total_sum ); } 
var reduceFunc = function(key, values) { 
    var j = 0;
    var result = 0;
    for(var i in values) 
    { 
        result += values[i]; 
        j++; 
    } 
    return result / j; 
} 
var finalRes = function (key, res) { 
    result.avg = result.sum / result.count 
    return result; 
} 
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE5", query : { order_number: {$exists : true}} }).find() 


################################################################################################################################################
6. Підрахуйте середню вартість замовлення кожного покупця
var mapFunc = function() { 
    emit(this.payment.card_owner, {sum: this.total_sum, count: 1}); 
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
db.lab1.mapReduce(mapFunc, reduceFunc, { finalize: finalRes, out: "EXAMPLE6", query : {order_number: {$exists : true}} }).find()
--------------------------------------------------------------------------------------------------------------------------------------------
var mapFunc = function() {emit(this.payment.card_owner, this.total_sum)}; 
var reduceFunc = function(key, values) { 
    var j = 0;
    var result = 0;
    for(var i in values) 
    { 
        result += values[i]; 
        j++; 
    } 
    return result / j; 
}  
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE5", query : { order_number: {$exists : true}} }).find() 


################################################################################################################################################
7. Підрахуйте в скількох замовленнях зустрічався кожен товар (скільки разів він був куплений)
var mapFunc = function(){ 
    for(i in this.order_items_id)
    { 
        emit(this.order_items_id[i].$id, 1); 
    } 
} 
var reduceFunc = function(key, values) { 
    var sum = 0; 
    for(var i in values) 
    { 
        sum += values[i]; 
    } 
    return sum; 
}  
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE7", query : { order_items_id: {$exists : true}} }).find() 


################################################################################################################################################
8. Для кожного товару отримаєте список всіх замовників які купили його
var mapFunc = function(){ 
    for(i in this.order_items_id)
    { 
        emit(this.order_items_id[i].$id, this.payment.card_owner); 
    } 
} 
var reduceFunc = function(key, values) { 
    var arr = [];
    for(var i in values) 
    {
        arr.push(values[i]);
    } 
    
    function unique(arr) {
        var result = [];
        nextInput:
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i]; // для каждого элемента
            for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
                if (result[j] == str) continue nextInput; // если да, то следующий
            }
            result.push(str);
        }
        return result;
    }
    return unique(arr).join(', ')
}  
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE7", query : { order_items_id: {$exists : true}} }).find() 
--------------------------------------------------------------------------------------------------------------------------------------------
var mapFunc = function(){ 
    for(i in this.order_items_id)
    { 
        emit(this.order_items_id[i].$id, this.payment.card_owner); 
    } 
} 
var reduceFunc = function(key, values) { 
    var res = []
    for (i in values)
    {
        if (res.indexOf(values[i]) == -1)
        {
            res.push(values[i])
        }
    }
    return res.join(', ')
}  
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE7", query : { order_items_id: {$exists : true}} }).find() 


################################################################################################################################################
9. Отримайте товар та список замовників, які купували його більше одного (двох) разу(ів)
var mapFunc = function(){ 
    for(i in this.order_items_id)
    { 
        emit(this.order_items_id[i].$id, this.payment.card_owner); 
    } 
} 
var reduceFunc = function(key, values) { 
    var res = []
    //var res2 = []
    var arr = []
    for (i in values)
    {      
        if (arr.indexOf(values[i]) >= 0 && res.indexOf(values[i]) == -1 )
        {
            res.push(values[i])
        }
        //else if (arr.indexOf(values[i]) >= 0 && res.indexOf(values[i]) >= 1 && res2.indexOf(values[i]) == -1 ) res2.push(values[i])
        arr.push(values[i])
    }
    //return res2.join(', ')
    return res.join(', ')
}  
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE7", query : { order_items_id: {$exists : true}} }).find() 


################################################################################################################################################
10. Отримайте топ N товарів за популярністю (тобто топ товарів, які куплялись найчастіше) (функцію sort не застосовувати)

var mapFunc = function(){ 
    var top = 2;
    for(i in this.order_items_id)
    { 
        emit(top, this.order_items_id[i].$id); 
    } 
} 
var reduceFunc = function(key, values) {   
var result = {};
var check = 0;
for(var iter = 0; iter < values.length; iter++) 
{
  var count = result[values[iter]];
  if (count) {
    result[values[iter]] = count + 1;
  } else {
    result[values[iter]] = 1;
  }
}
keysSorted = Object.keys(result).sort(function(a,b){return result[a]-result[b]})
return keysSorted.reverse().slice(0,key).join(', ');
}  
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE7", query : { order_items_id: {$exists : true}} }).find() 
 
 
################################################################################################################################################
11. Для завдання 4) реалізуйте інкрементальний Map / Reduce використовуючи out і action 
var mapFunc = function() { if (this.date != null) {emit(this.date, this.total_sum);} }
var reduceFunc = function(key, values) { return Array.sum(values); }
db.lab1.mapReduce(mapFunc, reduceFunc, { out: "EXAMPLE4", query: { date: { $ts: new Date('2017-03-15T00:34:20.201Z') }}, }).find() 


################################################################################################################################################
12. Для кожного користувача, визначить на яку суму їм було зроблено замовлень за кожен місяць цього року та за аналогічний місяць минулого року та динаміку збільшення/зменшення замовлень.
var map121 = function() {
  emit({name: this.payment.card_owner, year: this.date.getFullYear()}, this.total_sum)
};
var reduce121 = function(key, values) {
  return Array.sum(values);
}
db.lab1.mapReduce(map121, reduce121, { out: "map_reduce_121" , query : { order_items_id: {$exists : true}}}).find()
//------------------------------------------------------------
var map122 = function() {
  var v = {y2018: 0, y2017: 0, diff: 0};
  if (this._id.year == 2017)
  {
    v.y2017 = this.value;
    emit({name: this._id.name}, v);
  }
  else if (this._id.year == 2018)
  {
    v.y2018 = this.value;
    emit({name: this._id.name}, v);
  }
};

var reduce122 = function(key, values) {
  var v = {y2017: 0, y2018: 0, diif : 0}
  //for(var i = 0; i < values.length; i++)
  //{
  if (values[0].y2018 != 0){v.y2018 = values[0].y2018}
  if (values[0].y2017 != 0){v.y2017 = values[0].y2017}  
  if (values[1].y2018 != 0){v.y2018 = values[1].y2018}
  if (values[1].y2017 != 0){v.y2017 = values[1].y2017} 
  v.diif = v.y2018 - v.y2017
    //    v.y2018 = values.y2018
  //}
 // return Array.sum(v)/2
   return v
}

db.map_reduce_121.mapReduce(map122, reduce122, { out: "map_reduce_122" }).find()





























































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