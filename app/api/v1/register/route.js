import { NextResponse } from "next/server";
import { db } from "@/lib/mongodb";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    // TODO: You can do the further data validations here

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    if (result && result.acknowledged) {
      return NextResponse.json({
        success: true,
        user: {
          userId: result.insertedId,
          name,
          email,
        },
      });
    } else {
      return NextResponse.json(
        { error: "User registration failed!" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
