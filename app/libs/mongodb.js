import { MongoClient } from "mongodb";

const clientPromise = () => {
  const MONGODB_URI = process.env.NEXT_PUBLIC_DATABASE_URI;
  const OPTIONS = {};

  if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  const client = new MongoClient(MONGODB_URI, OPTIONS);
  return client.connect();
};

export default clientPromise;
