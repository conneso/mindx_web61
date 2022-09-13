const MongoClient = require("mongodb").MongoClient;
var MindXWeb61DB;

if(MindXWeb61DB == undefined) MongoClient.connect(
  "mongodb+srv://mXWeb61:lpilWrmQb192qNqY@cluster0.awgnvid.mongodb.net/mindx-web58?retryWrites=true&w=majority",
  (err, db) => {
    if (err) throw err;
    console.log("It's connected to the database");
    MindXWeb61DB = db;
  }
);

module.exports = MindXWeb61DB;
