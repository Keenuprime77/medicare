import mongoose from "mongoose"


const DoseModel = new mongoose.Schema({
    time: String,
    dosage: String,
})

const ScheduleEntryModel = new mongoose.Schema({
    day: Number,
    date: String,
    doses: [DoseModel],
})

const MedicinesModel = new mongoose.Schema({
    medicine_name: String,
    quantity: String,
    frequency: String,
    dosage_pattern: String,
    times_days: String,
    number_days: String,
    startdate: String,
    schedule:[ScheduleEntryModel]
})

export const MedicineSchema= mongoose.models.medicare || mongoose.model("medicare",MedicinesModel)