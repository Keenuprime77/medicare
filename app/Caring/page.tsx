"use client"
import Header from "@/components/header";
import { Reminder } from "@/Interfaces/interface";
import { ReminderSchema } from "@/Schemas/yupSChemas";
import { useFormik } from "formik";
import Link from 'next/link'

const initialValues: Reminder = {
    reminder: "",
    date: "",
}
const Caring = () => {
    const { errors, values, touched, handleBlur, handleChange, handleSubmit } = useFormik<Reminder>({
        validationSchema:ReminderSchema,
        initialValues,
        onSubmit:()=>{
            console.log("working")
        }
    })

    return (
        <div>
            <Header></Header>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col bg-[linear-gradient(147deg,_#4B4E53_0%,_#000000_74%)] w-[28%] ml-11 items-center justify-between rounded-2xl h-[30%] shadow-2xl xl:px-12'>
                    <label htmlFor="reminder" className="mt-3 font-bold">Add Reminder For:</label>
                    <input type="text" value={values.reminder} onChange={handleChange} onBlur={handleBlur} className='bg-black placeholder-[#03e9f4] rounded-md border-2 border-[#03e9f4]' id="reminder" />
                    {errors.reminder && touched.reminder && <p className="text-red-500">{errors.reminder}</p>}

                    <select className="mt-3" name="" id="">
                        <option value="">After A Duration</option>
                        <option value="">Date</option>
                    </select>
                    <label htmlFor="date" className="mt-2 font-bold">Reminder Date:</label>
                    <input type="date" value={values.date} onChange={handleChange} onBlur={handleBlur} className='bg-black mb-2 placeholder-[#03e9f4] rounded-md border-2 border-[#03e9f4]' id="date" />
                    {errors.date && touched.date && <p className="text-red-500">{errors.date}</p> }

                    <button
                        type="submit"
                        className="bg-[#03e9f4] text-black font-semibold px-4 mb-6 my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg"
                    >Generate Reminder</button>
                    <Link
                        href="/Caring/Reminder"
                        className="bg-[#03e9f4] text-black font-semibold px-4 mb-6 my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg"
                    >Your Reminder</Link>
                </div>
            </form >
        </div >
    )
}

export default Caring;