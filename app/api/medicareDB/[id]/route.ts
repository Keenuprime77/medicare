import { MedicineSchema } from "@/Schemas/MedicinsSchema";
import mongoose, { Types } from "mongoose";
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

// const medicine = await MedicineSchema.findOne();


export async function DELETE(
  request: NextRequest,
  params: { params: { id: string } }
) {
  try {
    const { id } = await params.params;
    await mongoose.connect(MONGO_DB_URL!);

    const objectId = new Types.ObjectId(id);
    
    const result = await MedicineSchema.updateOne(
      { "schedule.doses._id": objectId },
      { $pull: { "schedule.$[].doses": { _id: objectId } } }
    );
    
    const result2 = await MedicineSchema.updateMany(
      {},
      { $pull: { schedule: { doses: { $size: 0 } } } }
    )
    
    const deletedMedicineResult = await MedicineSchema.deleteMany({
      schedule: { $size: 0 }
    })

    return NextResponse.json({
      message: "Dose deleted successfully",
      success: true,
      result,
      result2,
      deletedMedicineResult
    });
  } catch (err) {
    console.error("Error", err);
    return NextResponse.json(
      { message: "Failed to delete dose", error: String(err) },
      { status: 500 }
    );
  }
}

