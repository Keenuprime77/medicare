import { MedicineSchema } from "@/Schemas/MedicinsSchema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

//for id based fetching
const MONGO_DB_URL = process.env.ConnectionURl

export async function GET(request: NextRequest, params: { params: { id: string } }) {
  let data = []

  try {
    const { id } = await params.params
    await mongoose.connect(MONGO_DB_URL!)
    data = await MedicineSchema.findById(id)
  } catch (err) {
    console.log("Error", err)
  }
  return NextResponse.json({ result: data, succes: true })
}
