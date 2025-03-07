import { MongoClient } from "mongodb";

const OPTIONS = {};
const MONGODB_URI = process.env.MONGODB_URI;

const client = new MongoClient(MONGODB_URI, OPTIONS);

// Database instance
export const db = client.db("sample_mflix");

// Mongodb client
export const clientPromise = () => {
  if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  const client = new MongoClient(MONGODB_URI, OPTIONS);
  return client.connect();
};
