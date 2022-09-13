var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var BSONRegExp = require("mongodb").BSONRegExp;

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

router.get("/", async (req, res) => {
  const restaurants = await db.collection("restaurants").find().toArray();
  res.json({ count: restaurants.length, data: restaurants });
});

router.get("/findByZipCode", async (req, res) => {
  let zipcode = req.query.zipcode;
  console.log("zipcode", zipcode);
  var query = {
    "address.zipcode": {
      $eq: zipcode,
    },
  };

  const restaurants = await db.collection("restaurants").find(query).toArray();
  res.json({ count: restaurants.length, data: restaurants });
});

//Viết api findByZipCode in
// var query = {
//     "address.zipcode": {
//         "$in": [
//             "11368",
//             "11223"
//         ]
//     }
// };
// var zipcodes = req.body.zipcodes
// POST api truyền params thông qua body
router.post("/findByZipCodeIn", async (req, res) => {
  var zipcodes = req.body.zipcodes;
  console.log("zipcodes", zipcodes);
  var query = {
    "address.zipcode": {
      $in: zipcodes,
    },
  };

  const restaurants = await db.collection("restaurants").find(query).toArray();
  res.json({ count: restaurants.length, data: restaurants });
});

router.get("/countBy", async (req, res) => {
  let coord = req.query.coord;
  let street = req.query.street;
  var pipeline = [
    {
      $match: {
        $and: [
          {
            "address.coord.1": {
              $gte: coord,
            },
          },
          {
            "address.street": new BSONRegExp(`.*${street}.*`, "i"),
          },
        ],
      },
    },
    {
      $count: "count_by_address",
    },
  ];
  const count = await db
    .collection("restaurants")
    .aggregate(pipeline)
    .toArray();
  res.json({ count: count });
});

module.exports = router;
