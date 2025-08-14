"use client"
import { MedicineWithSchedule } from '@/Interfaces/interface'
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const MedicineTablePage = () => {
    const [medicineData, setMedicineData] = useState<MedicineWithSchedule>();
    console.log(medicineData, "checktype")
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        axios.get(`/api/medicareDB/68924581f7740bdab62ae0bc`)
            .then((response) => {
                setMedicineData(response.data.result)
                console.log(response.data.result, "data collected")
            }
            ).catch((error) => {
                console.log("Error:", error)
                toast.error("something went wrong")
            })

    }, [])
    return (
        <div>
            <div className='relative right-[0] mt-6'>
                <Link href="/Medicines" className='bg-[#03e9f4] text-black font-semibold px-4 mb-6 my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg'>Back</Link>
                <Link href="/Home" className='bg-[#03e9f4] text-black font-semibold px-4 mb-6 my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg'>Home</Link>
            </div>
            <div className="box box-2">
                {!medicineData ? (
                    <h1>No medicines found</h1>
                ) : (

                    <>
                        <h2>Your Medicine Schedule</h2>
                        <h3>{medicineData.medicine_name}</h3>
                        <p>Your medicine quantity:{medicineData.quantity}</p>
                        <p>Your schedule for {medicineData.number_days} days</p>
                        <div className="table-container">
                            <table className="table-ocean">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>no of Days</th>
                                        <th>Time</th>
                                        <th>Dose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {medicineData.schedule && medicineData.schedule.map((item, id: number) => (
                                        <tr key={id}>
                                            <td>{item.date}</td>
                                            <td>{item.day}</td>
                                            <td>
                                                {
                                                    item.doses.map((tim, idx: number) => (
                                                        <div key={idx} style={{ borderBottom: idx !== item.doses.length - 1 ? '1px solid #ccc' : "none" }} >{tim.time}</div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    item.doses.map((dos, idy: number) => (
                                                        <div key={idy} style={{ borderBottom: idy !== item.doses.length - 1 ? '1px solid #ccc' : "none" }}>{dos.dosage}</div>
                                                    ))
                                                }
                                            </td>

                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default MedicineTablePage