import React from 'react'
import Logo from "../../public/medicareLogo.png"
import Image from 'next/image'

const loading = () => {
  return (
    <section className='loading ring'>
      <Image src={Logo} width={85} alt="Logo" />
      <p>Medicare</p>
    </section>
  )
}

export default loading
