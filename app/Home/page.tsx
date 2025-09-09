"use client"
import Header from "@/components/header";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {  Dose, MedicineWithSchedule } from "@/Interfaces/interface";
import Loading from "../loading";
import Image from "next/image";

export default function HomePage() {
  const [medicineData, setMedicineData] = useState<MedicineWithSchedule[]>([])
  console.log(medicineData)
  const [checkDoses, setCheckDoses] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [buttonLoading, setButtonLoading] = useState<string | null | undefined>(null);
  console.log(checkDoses)
  useEffect(() => {
    setLoading(true);
    axios.get("/api/medicareDB")
      .then((response) => {
        setMedicineData(response.data.result)
        console.log(response.data.result)
      }).catch((err) => {
        console.log("Error:", err)
        toast.error("something when wrong")
      }).finally(() => {
        setLoading(false);
      })
  }, [])

  const handleCheckbox = (doseId: string) => {
    setCheckDoses((prev) =>
      prev.includes(doseId)
        ? prev.filter((id: string) => id !== doseId)
        : [...prev, doseId]
    );
  };

  const handleDeleteDose = (doseId: string, medicineId: string) => {
    setButtonLoading(doseId);
    axios
      .delete(`/api/medicareDB/${doseId}`)
      .then(() => {
        setMedicineData((prev) =>
          prev.map((med) =>
            med._id === medicineId
              ? {
                ...med,
                schedule: med.schedule.map((sch) => ({
                  ...sch,
                  doses: sch.doses.filter((d) => d._id !== doseId),
                })).filter((sch) => sch.doses.length > 0)
              }
              : med
          ).filter((med) => med.schedule.length > 0)
        );
      })
      .then(() => {
        setCheckDoses((prev) => prev.filter((id) => id !== doseId));
        toast.success("Dose marked as done!");
      })
      .catch((err) => {
        toast.error("Failed to update Dose");
        console.log("Error", err);
      }).finally(() => {
        setButtonLoading(null);
      })
  };

  if (loading === true) {
    return (<Loading />)
  }

  return (
    <div className="">
      <Header />
      <div className="gap-5 flex flex-wrap justify-start ml-[4%]">
        {
          loading === false && medicineData.length === 0 ? <div className="flex items-center justify-center gap-1 h-[72vh] mx-auto">
            <Image
              src="/not_found.png"
              height={62}
              width={162}
              alt="logo"
            />
            <h1 className="font-mono text-5xl">No medicines found</h1>
          </div>


            : (medicineData.map((item, id) => {
              const dose: Dose = item.schedule[0].doses[0]

              if(!dose){
                return null
              }

              return (       
                <div key={id} className="flex flex-col bg-[linear-gradient(147deg,_#4B4E53_0%,_#000000_74%)] 
        w-full sm:w-[48%] md:w-[30%] lg:w-[22%] rounded-2xl shadow-2xl p-4">
                  <div className="flex items-center gap-2">
                    <h1 className="text-wrap font-semibold">Today you have to give {item.medicine_name} at {item.schedule[0]?.doses[0]?.time} of {item.schedule[0]?.doses[0]?.dosage} at Day {item.schedule[0]?.day} of Date {item.schedule[0]?.date} <input className="w-4 ml-2 relative top-[2px] accent-[#03e9f4] h-4" onChange={() => { handleCheckbox(dose._id!) }} checked={dose._id ? checkDoses.includes(dose._id) : false} type="checkbox" /></h1>
                  </div>
                  <button onClick={() => { handleDeleteDose(dose._id!, item._id) }} className="flex gap-2 bg-[#03e9f4] mx-auto items-center justify-center  text-black font-semibold w-[44%] my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg">
                    {buttonLoading === dose?._id && <div
                      className="h-[23px] w-[23px] animate-spin rounded-full border-4 border-solid border-black border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    >
                    </div>}
                    Done
                  </button>
                </div>
              )
            })
            )}
      </div>
    </div>
  );
}
