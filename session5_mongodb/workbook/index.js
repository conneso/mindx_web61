import express from "express";
import { MongoClient } from "mongodb";
//import * as config from "./config.json";

const mongoUri = 'mongodb://localhost:27017';
const client = new MongoClient(mongoUri);
const dbName = "web61";

const connectDB = async () => {
  console.log("Dòng này để đặt breakpoint");
  await client.connect();
  const db = client.db(dbName);
  const restCollection = db.collection("restaurants");
  const restaurants = await restCollection.find().toArray();
  console.log(restaurants); //code loằng ngoằng

  console.log("code lởm");

  //đây là dòng code không đúng format
};

connectDB();

const port = 3000;

const app = express();

app.listen(port, () => console.log(`Server is listening on: ${port}`));
