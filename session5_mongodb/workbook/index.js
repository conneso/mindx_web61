import express from 'express';
import { MongoClient } from 'mongodb';
import * as config from './config.json'

const mongoUri = config.db_conn//'mongodb://localhost:27017';
const client = new MongoClient(mongoUri);
const dbName = 'web61';

const connectDB = async () => {
  await client.connect();
  const db = client.db(dbName);
  const restCollection = db.collection('restaurants');
  const restaurants = await restCollection.find().toArray();
  console.log(restaurants);
};

connectDB();

const port = 3000;

const app = express();

app.listen(port, () => console.log(`Server is listening on: ${port}`));