var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const mongoUri =
  "mongodb+srv://mXWeb61:lpilWrmQb192qNqY@cluster0.awgnvid.mongodb.net/mindx-web58?retryWrites=true&w=majority";
const client = new MongoClient(mongoUri);
const dbName = "mindx-web58";
var db;
const connectDB = async () => {
  await client.connect();
  db = client.db(dbName);
  console.log("Connected to the database");
};

connectDB();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const users = await db.collection("users").find().skip(1).limit(2).toArray();
  console.log("Danh sach nha hang", users);

  res.json(users);
});

module.exports = router;
