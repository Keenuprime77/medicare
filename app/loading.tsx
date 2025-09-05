import Image from "next/image";
import React from 'react'
import Logo from "../public/medicareLogo.png"

export default function Loading() {
  return (
    <section className='loading ring'>
        <Image src={Logo} width={85} alt="Logo" />
        <p>Medicare</p>
      </section>
  );
}
