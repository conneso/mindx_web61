import express from "express";
import { MongoClient } from "mongodb";
//import * as config from "./config.json";

const mongoUri = 'mongodb+srv://mXWeb61:lpilWrmQb192qNqY@cluster0.awgnvid.mongodb.net';
const client = new MongoClient(mongoUri);
const dbName = "mindx-web58";

const connectDB = async () => {
  await client.connect();
  const db = client.db(dbName);
  const restCollection = db.collection("restaurants");
  const restaurants = await restCollection.find().skip(1).limit(2).toArray();
  console.log('Danh sach nha hang',restaurants);
};

connectDB();

const port = 3000;

const app = express();

app.listen(port, () => console.log(`Server is listening on: ${port}`));
