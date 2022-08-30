import express from 'express';
import { MongoClient } from 'mongodb';

const mongoUri = 'mongodb://localhost:27017';
const client = new MongoClient(mongoUri);
const dbName = 'web61';

const connectDB = async () => {
  await client.connect();
  const db = client.db(dbName);
  const teacherCollection = db.collection('teachers');
  const teachers = await teacherCollection.find().toArray();
  console.log(teachers);
};

connectDB();

const port = 3000;

const app = express();

app.listen(port, () => console.log(`Server is listening on: ${port}`));