"use client"
import Link from 'next/link'
import React from 'react'

const MedicineTablePage = () => {
  return (
    <div>
    <div className='relative right-[0] mt-6'> 
    <Link href="/Medicines" className='bg-[#03e9f4] text-black font-semibold px-4 mb-6 my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg'>Back</Link>
    <Link href="/Home" className='bg-secondary text-black font-semibold px-4 mb-6 my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg'>Home</Link>
    </div>
       <div className="box box-2">
    <h2>Your Medicine Schedule</h2>
    <div className="table-container">
      <table className="table-ocean">
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Dose</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Acitrom</td>
            <td>2mg</td>
            <td>Evening</td>
            <td>17-8-2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </div>
  )
}

export default MedicineTablePage