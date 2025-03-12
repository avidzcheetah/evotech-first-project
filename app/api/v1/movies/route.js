import { NextResponse } from "next/server";
import { db } from "@/lib/mongodb";

const MOVIES = [
  { id: 1, title: "Harry Potter" },
  { id: 2, title: "Dr. Doolittle" },
  { id: 3, title: "Intesteller" },
  { id: 4, title: "Awaken" },
  { id: 5, title: "The Martian" },
];

export const GET = async (req) => {
  return NextResponse.json({ success: true, movies: MOVIES });
};
