import Image from "next/image";
import React from 'react'
import Logo from "../public/medicareLogo.png"

const loading = () => {
  return (
    <section className='loading'>
      <div className='ring'>
      <Image src={Logo} width={85} className='imageLoader' alt="Logo" />
      <p className='textLoader'>Medicare</p>
      </div>
    </section>
  )
}

export default loading
