import React from 'react'
import Link from 'next/link'

const Reminder = () => {
    return (
        <div>
            <div className='relative right-[0] mt-6'>
                <Link href="/Caring" className='bg-[#03e9f4] text-black font-semibold px-4 mb-6 my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg'>Back</Link>
                <Link href="/Home" className='bg-secondary text-black font-semibold px-4 mb-6 my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg'>Home</Link>
            </div>
            <div className="box box-2">
                <h2>Your Medicine Schedule</h2>
                <div className="table-container">
                    <table className="table-ocean">
                        <thead>
                            <tr>
                                <th>Your reminder</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cathder change</td>
                                <td>17-8-2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-primary text-white">Hello</div>
<div className="text-secondary">World</div>

        </div>
    )
}

export default Reminder
