"use client"
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { usePathname } from 'next/navigation';

const Header = () => {
const HomePathname=usePathname()
const MedicinePathname=usePathname()
const UserPathname=usePathname()
const HistoryPathname=usePathname()
const HomeIsActive=HomePathname==="/"
const MedicinesIsActive=MedicinePathname==="/Medicines"
const UserIsActive=UserPathname==="/User"
const HistoryIsActive=HistoryPathname==="/History"

  return (
    <div className="items-center justify-items-center sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <header className="mx-3 flex bg-[linear-gradient(147deg,_#4B4E53_0%,_#000000_74%)] w-[100%] items-center justify-between rounded-2xl  px-[5%] h-18 shadow-2xl xl:px-12;">
        <Image
          src="/medicareLogo.png"
          height={32}
          width={162}
          alt="logo"
          className="h-8 w-fit"
        />
        <Link href="/" className="cursor-pointer">
            <span><p className={`hover:[text-shadow:0_0_5px_#03e9f4,0_0_5px_#03e9f4,0_0_10px_#03e9f4,0_0_10px_#03e9f4] transition-all duration-300 ${HomeIsActive ? "text-[#03e9f4]":""
          }`}>Home</p></span>
        
        </Link>
        <Link href="/User" className="cursor-pointer">
 <p className={`hover:[text-shadow:0_0_5px_#03e9f4,0_0_5px_#03e9f4,0_0_10px_#03e9f4,0_0_10px_#03e9f4] transition-all duration-300 ${UserIsActive ? "text-[#03e9f4]":""}`}>User</p>
        </Link>
        <Link href="/Medicines" className="cursor-pointer">
          <span><p className={`hover:[text-shadow:0_0_5px_#03e9f4,0_0_5px_#03e9f4,0_0_10px_#03e9f4,0_0_10px_#03e9f4] transition-all duration-300 ${MedicinesIsActive ? "text-[#03e9f4]":""
          }`}>Medicines</p></span>
        </Link>
        <Link href="/History" className="cursor-pointer">
          <span><p className={`hover:[text-shadow:0_0_5px_#03e9f4,0_0_5px_#03e9f4,0_0_10px_#03e9f4,0_0_10px_#03e9f4] transition-all duration-300 ${HistoryIsActive ? "text-[#03e9f4]":""
          }`}>History</p></span>
        </Link>
      </header>
    </div>
  )
}

export default Header
