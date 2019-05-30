/*	db.books.find({});	*/
{
    "isbn": "978-3-16-148410-0",
    "title": "Some cool book",
    "author": "John Doe"
}
{
    "isbn": "978-3-16-148999-9",
    "title": "Another awesome book",
    "author": "Jane Roe"
}

/*	db.books.find({});	*/
{
    "_id": ObjectId("56e31bcf76cdf52e541d9d26"),
    "isbn": "978-3-16-148410-0",
    "copies_sold": 12500
}
{
    "_id": ObjectId("56e31ce076cdf52e541d9d28"),
    "isbn": "978-3-16-148999-9",
    "copies_sold": 720050
}
{
    "_id": ObjectId("56e31ce076cdf52e541d9d29"),
    "isbn": "978-3-16-148999-9",
    "copies_sold": 1000
}

/*	db.books.aggregate([{
    $lookup: {
            from: "books_selling_data",
            localField: "isbn",
            foreignField: "isbn",
            as: "copies_sold"
        }
}])	/* */


{
    "isbn": "978-3-16-148410-0",
    "title": "Some cool book",
    "author": "John Doe",
    "copies_sold": [
        {
            "_id": ObjectId("56e31bcf76cdf52e541d9d26"),
            "isbn": "978-3-16-148410-0",
            "copies_sold": 12500
        }
    ]
}
{
    "isbn": "978-3-16-148999-9",
    "title": "Another awesome book",
    "author": "Jane Roe",
    "copies_sold": [
        {
            "_id": ObjectId("56e31ce076cdf52e541d9d28"),
            "isbn": "978-3-16-148999-9",
            "copies_sold": 720050
        },
        {
            "_id": ObjectId("56e31ce076cdf52e541d9d28"),
            "isbn": "978-3-16-148999-9",
            "copies_sold": 1000
        }
    ]
}