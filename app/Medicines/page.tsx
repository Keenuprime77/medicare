"use client"
import Header from '@/components/header'
import { MedicineSchema } from '@/Schemas/yupSChemas';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import toast from 'react-hot-toast';
import { FaInfoCircle } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { ScheduleEntry, Medicines, Dose } from '../../Interfaces/interface';
import axios from 'axios';

const initialValues: Medicines = {
  medicine_name: "",
  quantity: "",
  frequency: "",
  dosage_pattern: "",
  times_days: "",
  number_days: "",
  startdate: "",
}

const MedicinePage = () => {

  const { errors, values, handleBlur, touched, handleChange, handleSubmit } = useFormik<Medicines>({
    validationSchema: MedicineSchema,
    initialValues,
    onSubmit: (values, { resetForm }) => {
      const result = getSchedule();
      console.log(result, values)
      axios.post('api/medicareDB', { ...values, schedule: result })
        .then(() => {
          toast.success("Your schedule generated")
          resetForm()
        }).catch((error) => {
          console.log("Error:", error)
          toast.error("something went wrong")
        })
    }
  })


  const getSchedule = () => {
    const { frequency, dosage_pattern, times_days, number_days, startdate, } = values;

    const dosagePattern = dosage_pattern.split(",").map(p => parseFloat(p.trim()))
    const timesOfDays = times_days.split(",").map(p => p.trim())
    const freq = parseInt(frequency)
    const noOFDays = parseInt(number_days)

    const startDate = new Date(startdate);
    if (timesOfDays.length !== freq) {
      toast.error("frequancy and times of days are not making reasonable logic")
    }

    const result: ScheduleEntry[] = []

    for (let i = 0; i < noOFDays; i++) {
      const currentDate = new Date(startDate)
      currentDate.setDate(startDate.getDate() + i)

      let doses: Dose[] = []
      if (freq == 1) {
        const index = i % dosagePattern.length
        doses.push({
          time: timesOfDays[0],
          dosage: dosagePattern[index] + "mg"
        })
      } else {
        doses = timesOfDays.map((time, j) => ({
          time: time,
          dosage: dosagePattern[j % dosagePattern.length] + "mg"
        }))
      }
      result.push({
        day: i + 1,
        date: currentDate.toISOString().split("T")[0],
        doses
      })
    }
    return result
  }

  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className='flex flex-col bg-[linear-gradient(147deg,_#4B4E53_0%,_#000000_74%)] w-[28%] ml-11 items-center justify-between rounded-2xl h-[30%] shadow-2xl xl:px-12'  >
            <label htmlFor="medicine_name" className='mt-3 font-bold'>Medicine Name:</label>
            <input className='bg-black placeholder-[#03e9f4] rounded-md border-2 border-[#03e9f4]' type='text' placeholder='Enter Medicine name' name='medicine_name' onBlur={handleBlur} value={values.medicine_name} onChange={handleChange} id='medicine_name' />
            {errors.medicine_name && touched.medicine_name && <p className='text-red-500'>{errors.medicine_name}</p>}

            <label htmlFor="quantity" className='mt-3 font-bold'>Quantity:</label>
            <input onChange={handleChange} value={values.quantity} onBlur={handleBlur} className='bg-black placeholder-[#03e9f4] rounded-md border-2 border-[#03e9f4]' type='number' id='quantity' min="0" max="99" maxLength={2} placeholder='30' name='quantity' />
            {errors.quantity && touched.quantity && <p className='text-red-500'>{errors.quantity}</p>}

            <div className='flex'>
              <label htmlFor="frequency" className='mt-3 font-bold'>Frequency(Times Per Day)</label>
              <FaInfoCircle data-tooltip-id="my-tooltip-3" className='relative left-[29%] top-[17px]'></FaInfoCircle>
              <ReactTooltip
                id='my-tooltip-3'
                place='top'
                className="max-w-xs whitespace-pre-line"
              >
                <div>
                  <strong>Instructions:</strong>
                  <p>Enter how many times you need to take the medicine each day.</p>
                </div>
              </ReactTooltip>
            </div>
            <input onChange={handleChange} onBlur={handleBlur} value={values.frequency} className='bg-black placeholder-[#03e9f4]  rounded-md border-2 border-[#03e9f4]' pattern='^[0-9]+$' type='number' min="0" max="9" id='frequency' name='frequency' maxLength={1} placeholder='1' />
            {errors.frequency && touched.frequency && <p className='text-red-500'>{errors.frequency}</p>}

            <div className='flex'>
              <label htmlFor="dosage_pattern" className='mt-3 font-bold'>Dorage Pattern(e.g.2,3,3):</label>
              <FaInfoCircle data-tooltip-id="my-tooltip-2" className='relative left-[32%] top-[17px]'></FaInfoCircle>
              <ReactTooltip
                id="my-tooltip-2"
                place="top"
                className="max-w-xs whitespace-pre-line"
              >
                <div>
                  <strong>Instructions:</strong>
                  <ol className="list-decimal list-inside">
                    <li>
                      If you want to enter the same medicine dose daily like 2mg,
                      enter your dosage pattern like: <code>2</code>
                    </li>
                    <li>
                      If you have different doses like Monday 2mg, Tuesday 3mg, Wednesday 2mg,
                      enter pattern like: <code>2,3,2</code>
                    </li>
                  </ol>
                </div>
              </ReactTooltip>
            </div>
            <input onChange={handleChange} onBlur={handleBlur} value={values.dosage_pattern} className='bg-black placeholder-[#03e9f4] rounded-md border-2 border-[#03e9f4]' name='dosage_pattern' id='dosage_pattern' type='text' placeholder='2,3,3' />
            {errors.dosage_pattern && touched.dosage_pattern && <p className='text-red-500'>{errors.dosage_pattern}</p>}

            <div className='flex'>
              <label htmlFor="times_days" className='mt-3 font-bold'>Time(e.g.,Evening,Morning,10:00AM):</label>
              <FaInfoCircle data-tooltip-id="my-tooltip-1" className='relative left-[7%] top-[17px]'></FaInfoCircle>
              <ReactTooltip
                id="my-tooltip-1"
                place="top"
                className="max-w-xs whitespace-pre-line"
              >
                <div>
                  <strong>Instructions:</strong>
                  <ol className="list-decimal list-inside">
                    <li>
                      If you want to enter specific time then enter like Ex. <code>10:00PM</code>
                    </li>
                    <li>
                      If you want to enter part of day then enter like Evening
                    </li>
                    <li>
                      If you want to enter any time or part of day more then one
                      Like you have to take a medicine two times in a day then you have to enter your time details like Ex. 10:00AM,08:00PM
                      Or morning, evening
                    </li>
                  </ol>
                </div>

              </ReactTooltip>
            </div>
            <input onChange={handleChange} onBlur={handleBlur} value={values.times_days} className='bg-black placeholder-[#03e9f4] rounded-md border-2 border-[#03e9f4]' type='text' placeholder='Evening' id='times_days' name='times_days' />
            {errors.times_days && touched.times_days && <p className='text-red-500'>{errors.times_days}</p>}

            <label htmlFor="number_days" className='mt-3 font-bold'>Numbers of the Days:</label>
            <input onChange={handleChange} onBlur={handleBlur} value={values.number_days} className='bg-black placeholder-[#03e9f4] rounded-md border-2 border-[#03e9f4]' name='number_days' id='number_days' type='number' placeholder='15' />
            {errors.number_days && touched.number_days && <p className='text-red-500'>{errors.number_days}</p>}

            <label htmlFor="startdate" className='mt-3 font-bold'>Start Date:</label>
            <input onChange={handleChange} value={values.startdate} onBlur={handleBlur} className='bg-black placeholder-[#03e9f4] mb-2 rounded-md border-2 border-[#03e9f4]' name='startdate' id='startdate' type='date' />
            {errors.startdate && <p className='text-red-500'>{errors.startdate}</p>}

            <button
              type="submit"
              className="bg-[#03e9f4] text-black font-semibold px-4 mb-6 my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg"
            >Generate Schedule</button>
          </div>
          <div className='flex flex-col w-[24%] bg-[#27272acc] ml-6 items-center justify-between rounded-2xl h-[30%]'>
            <div className='bg-[linear-gradient(147deg,_#4B4E53_0%,_#000000_74%)] py-2 mb-1 text-center rounded-2xl h-[30%]  xl:px-12 w-[100%] font-bold'>
              <h1>Your Medicines</h1>
            </div>
            <p>Medicine Name</p>
            <Link className='bg-[#03e9f4] text-black font-semibold px-2 mb-2 py-1 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg' href="/Medicines/MedicineTable" >See Schedule</Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default MedicinePage