// db.js (singleton)
import { MongoClient } from "mongodb";

let client;
let db;

export const connectDB = async () => {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db(process.env.MONGODB_DBNAME);
    console.log("MongoDB connected.");
  }
  return db;
};

export const getDB = () => {
  if (!db) throw new Error("Database not connected");
  return db;
};

export const closeDB = async () => {
  if (client) await client.close();
};
