var cursor = db.users.find()
cursor.forEach(function(obj){
print(obj.name);
})


var mapUsers, mapComments, reduce;
db.users_comments.remove();

// setup sample data - wouldn't actually use this in production
db.users.remove();
db.comments.remove();
db.users.save({firstName:"Rich",lastName:"S",gender:"M",country:"CA",age:"18"});
db.users.save({firstName:"Rob",lastName:"M",gender:"M",country:"US",age:"25"});
db.users.save({firstName:"Sarah",lastName:"T",gender:"F",country:"US",age:"13"});
var users = db.users.find();
db.comments.save({userId: users[0]._id, "comment": "Hey, what up?", created: new ISODate()});
db.comments.save({userId: users[1]._id, "comment": "Not much", created: new ISODate()});
db.comments.save({userId: users[0]._id, "comment": "Cool", created: new ISODate()});
// end sample data setup

mapUsers = function() {
    var values = {
        country: this.country,
        gender: this.gender,
        age: this.age
    };
    emit(this._id, values);
};
mapComments = function() {
    var values = {
        commentId: this._id,
        comment: this.comment,
        created: this.created
    };
    emit(this.userId, values);
};
reduce = function(k, values) {
    var result = {}, commentFields = {
        "commentId": '', 
        "comment": '',
        "created": ''
    };
    values.forEach(function(value) {
        var field;
        if ("comment" in value) {
            if (!("comments" in result)) {
                result.comments = [];
            }
            result.comments.push(value);
        } else if ("comments" in value) {
            if (!("comments" in result)) {
                result.comments = [];
            }
            result.comments.push.apply(result.comments, value.comments);
        }
        for (field in value) {
            if (value.hasOwnProperty(field) && !(field in commentFields)) {
                result[field] = value[field];
            }
        }
    });
    return result;
};
db.users.mapReduce(mapUsers, reduce, {"out": {"reduce": "users_comments"}});
db.comments.mapReduce(mapComments, reduce, {"out": {"reduce": "users_comments"}});
db.users_comments.find().pretty(); // see the resulting collection



var mapUsers_Orders2 = function() {
    var values = {
		user_id: 11021,
        name: "fh",
        city: "h,",
        telephone: "+5",
		email: "+gerhr",
        id_o: 213,
		time: ISODate("2017-09-27T13:52:34.423Z"),
		amount:0
    };
	for(var i in this.order){
		values.amount=6;
		emit(1002, values);
	}
};


var reduce2 = function(key, values) {return values;}
db.users_orders.mapReduce(mapUsers_Orders2, reduce2, {"out": "users_orders_items"});
db.users_orders_items.find();