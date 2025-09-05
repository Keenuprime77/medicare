import Header from '@/components/header'
import React from 'react'

const UserPage = () => {
  return (
    <div className="">
      <Header></Header>
      <div className="flex flex-col gap-4">
        <div className="grid place-items-center gap-4 bg-[linear-gradient(147deg,_#4B4E53_0%,_#000000_74%)] mx-auto w-[28%] rounded-2xl h-[30%] shadow-2xl p-4">
          <h1>UserName</h1>
          <button
            type="submit"
            className="bg-[#03e9f4] text-black font-semibold  w-40 h-10 rounded"
          >
            Update Password
          </button>
        </div>

        <div className="grid place-items-center gap-4 bg-[linear-gradient(147deg,_#4B4E53_0%,_#000000_74%)] mx-auto w-[28%] rounded-2xl h-[30%] shadow-2xl p-4">
          <h1>UserName</h1>
          <button
            type="submit"
            className="bg-[#03e9f4] text-black font-semibold  w-40 h-10 grid place-items-center  rounded"
          >
            Update Password
          </button>
        </div>

      </div>
    </div>

  )
}

export default UserPage