import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='grid place-items-center gap-1 h-screen'>
      <div className="error">
        <span>4</span>
        <div className="pill"></div>
        <span>4</span>
      </div>
      <Link href="/Home" className='bg-[#03e9f4] text-black font-semibold px-4  py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg'>Back to Home</Link>
    </div>
  )
}

export default NotFound
