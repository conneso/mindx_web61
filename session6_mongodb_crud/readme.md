show dbs - List all databases
use <db_name> - Create/switch to database
db.getCollectionNames() - Get all collection names
db.<collection_name>.find(<query>) - Query documents
db.teachers.insertOne(<data>) - Create a document
db.teachers.updateOne(<query>, <action>) - Update a document
db.teachers.updateMany(<query>, <action>) - Update many documents
db.teachers.deleteOne(<query>) - Delete a document
db.teachers.deleteMany(<query>) - Delete many documents

#operators:
$exists
$lt - less than
$gt - greater than
$lte - less than or equal
$gte - greater than or equal
$in
More at: https://www.mongodb.com/docs/v5.0/reference/operator/query/

#aggregation:
https://www.mongodb.com/docs/v5.0/reference/operator/aggregation-pipeline/

Link bài giảng:
- https://mindxschool.notion.site/df6d906bda6349a9b8b3f54fba7a3305?v=c932b622e82f44e7ad23433f35c9b6ad&p=594fbaa008d54aac8c5b6d6882d4a14a&pm=s

// Requires official Node.js MongoDB Driver 3.0.0+
var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url = "mongodb://host:port/";

client.connect(url, function (err, client) {
    
    var db = client.db("mindx-web58");
    var collection = db.collection("restaurants");
    
    var query = {
        "address.zipcode": {
            "$eq": "11368"
        }
    };
    
    var cursor = collection.find(query);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );
    
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
    
});


var query = {
        "address.zipcode": {
            "$in": [
                "11368",
                "11223"
            ]
        }
    };
	
	
var query = {
	"address.zipcode": {
		"$nin": [
			"11368",
			"11223"
		]
	}
};


// Requires official Node.js MongoDB Driver 3.0.0+
var mongodb = require("mongodb");
var BSONRegExp = mongodb.BSONRegExp;

var client = mongodb.MongoClient;
var url = "mongodb://host:port/";

client.connect(url, function (err, client) {
    
    var db = client.db("mindx-web58");
    var collection = db.collection("restaurants");
    
    var options = {
        allowDiskUse: false
    };
    
    var pipeline = [
        {
            "$match": {
                "$or": [
                    {
                        "address.coord.1": {
                            "$gte": 40.767461
                        }
                    },
                    {
                        "address.street": new BSONRegExp(".*A.*", "i")
                    }
                ]
            }
        }, 
        {
            "$count": "count_by_address"
        }
    ];
    
    var cursor = collection.aggregate(pipeline, options);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );
    
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
    
});
