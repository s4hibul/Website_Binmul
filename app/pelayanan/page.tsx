import NavbarLayanan from '@/components/navbar_layanan'
import React from 'react'
import Jenis_zakat from '@/components/jenis_zakat'

export default function pelaynan() {
  return (
    <div className="flex-col min-h-screen">
      <div className='relative'>
        <img src='/images/About Page bg.png ' className='object-cover bg-center h-full w-full bg-gradient-to-b from-black' />  
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl md:text-4xl lg:text-5xl'>Layanan</h1>
      </div>
      <NavbarLayanan />
      <div className='flex mx-12 lg:mx-24 mt-12 p-8 justify-center'>                
        <Jenis_zakat/>
      </div>
    </div>
  )
}
