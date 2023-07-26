import React from 'react'
import Navbar_about from '@/components/navbar_about'

function budaya_lembaga() {
    return (
        <div className="flex-col min-h-screen">
            <div className='relative'>
                <img src='/images/About Page bg.png ' className='object-cover bg-center h-full w-full bg-gradient-to-b from-black' />  
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl md:text-4xl lg:text-5xl  '>Tentang Kami</h1>
            </div>
            <Navbar_about />
            <div className='px-6 mx-12 lg:mx-24 mb-12 lg:mb-24'>
                <h1 className='mt-12 lg:mt-24 text-orange font-bold text-base md:text-xl lg:text-3xl'>
                    Budaya Lembaga
                </h1>
                <p className='pt-4 text-justify text-sm md:text-base lg:text-xl'>
                Standar budaya kerja Yayasan Bina Mulia bagi seluruh karyawan sebagai bentuk profesionalitas dan tanggungjawab lembaga terhadap masyarakat.
                </p>
                <ol className='list-decimal pl-4 pt-4 space-y-6 text-sm md:text-base lg:text-xl'>
                    <li>Amanah</li>
                    <span>Mengelola dana dan menyalurkannya sesuai dengan peruntukan.</span>
                    <li>Profesional</li>
                    <span>Melakukan segala proses dengan tolak ukur dan standart keberhasilan terbaik</span>
                    <li>Sinergi</li>
                    <span>Menjunjung semangat kebersamaan dan silaturahm dalam rangka meraih dan menebarkan manfaat sebesar-besarnya dan sebanyak banyaknya.</span>
                </ol>
            </div>
        </div>
    )
}

export default budaya_lembaga