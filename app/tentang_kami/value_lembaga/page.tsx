import React from 'react'
import Navbar_about from '@/components/navbar_about'

function value_lembaga() {
    return (
        <div className="flex-col min-h-screen">
            <div className='relative'>
                <img src='/images/About Page bg.png ' className='object-cover bg-center h-full w-full bg-gradient-to-b from-black' />  
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl md:text-4xl lg:text-5xl  '>Tentang Kami</h1>
            </div>
            <Navbar_about />
            <div className='px-6 mx-12 lg:mx-24 mb-12 lg:mb-24'>
                <h1 className='mt-12 lg:mt-24 text-orange font-bold text-base md:text-xl lg:text-3xl'>
                    Value Lembaga
                </h1>
                <ol className='list-decimal pl-4 pt-4 space-y-6 text-sm md:text-base lg:text-xl'>
                    <li>Humanitarian</li>
                    <span>Memfasilitasi segala upaya kegiatan sosial dengan tulus untuk seluruh masyarakat.</span>
                    <li>Trusted</li>
                    <span>Menjalankan lembaga dengan profesional, transparan dan jujur.</span>
                    <li>Collaborative</li>
                    <span>Bekerjasama untuk menciptakan kehidupan yang lebih baik.</span>
                </ol>
            </div>
        </div>
    )
}

export default value_lembaga;
