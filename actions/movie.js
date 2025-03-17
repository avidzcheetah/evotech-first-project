"use server";
import clientPromise from "@/app/libs/mongodb";
import { ObjectId } from "mongodb";

// Server action to create movie in mongodb
export const createMovie = async (doc) => {
  try {
    const client = await clientPromise();
    const db = client.db("sample_mflix");
    const result = await db.collection("movies").insertOne(doc);

    console.log(`A movie was inserted with the _id: ${result.insertedId}`);

    if (result.acknowledged) {
      return { success: true };
    } else {
      return undefined;
    }
  } catch {
    console.log("Mongodb insert failed!");
  }
};

// Server action to update movie in the mongodb
export const updateMovie = async (docId, doc) => {
  try {
    const client = await clientPromise();
    const db = client.db("sample_mflix");
    const result = await db
      .collection("movies")
      .updateOne({ _id: new ObjectId(docId) }, { $set: doc }, { upsert: true });

    console.log(`A movie was updated with the _id: ${result.upsertedId}`);

    if (result.acknowledged) {
      return { success: true };
    } else {
      return undefined;
    }
  } catch (error) {
    console.log("Mongodb update failed!", error);
  }
};

// Server action to delete movie in the mongodb
export const deleteMovie = async (docId) => {
  try {
    const client = await clientPromise();
    const db = client.db("sample_mflix");
    const result = await db
      .collection("movies")
      .deleteOne({ _id: new ObjectId(docId) });

    console.log(`A documents deleted: ${result.deletedCount}`);

    if (result.acknowledged) {
      return { success: true };
    } else {
      return undefined;
    }
  } catch (error) {
    console.log("Mongodb delete failed!", error);
  }
};
