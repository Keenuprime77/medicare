import Header from '@/components/header'
import React from 'react'

const UserPage = () => {
  return (
    <div className="">
      <Header></Header>
      
      <div className='flex flex-col bg-[linear-gradient(147deg,_#4B4E53_0%,_#000000_74%)] w-[28%] mx-auto items-center justify-between rounded-2xl h-[30%] shadow-2xl xl:px-12'>
        <h1 className='mt-6 my-3 rounded-md '>UserNAme</h1>
        <button
          type="submit"
          className="bg-[#03e9f4] text-black font-semibold px-4 mb-6 my-2 py-2 rounded"
          >Update Password</button>
      </div>
      <div className='flex flex-col bg-[linear-gradient(147deg,_#4B4E53_0%,_#000000_74%)] w-[28%] mx-auto mt-10 items-center justify-between rounded-2xl h-[30%] shadow-2xl xl:px-12'>
        <h1 className='mt-6 my-3 rounded-md '>UserNAme</h1>
        <button
          type="submit"
          className="bg-[#03e9f4] text-black font-semibold px-4 mb-6 my-2 py-2 rounded"
          >Update Password</button>
          </div>
      </div>
    
  )
}

export default UserPage