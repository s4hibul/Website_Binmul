import React from 'react';
import Navbar_about from '@/components/navbar_about';

function visi_misi() {
    return (
        <div className="flex-col min-h-screen">
            <div className='relative'>
                <img src='/images/About Page bg.png ' className='object-cover bg-center h-full w-full bg-gradient-to-b from-black' />  
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl md:text-4xl lg:text-5xl  '>Tentang Kami</h1>
            </div>
            <Navbar_about />
            <div className='px-6 mx-12 lg:mx-24 mb-12 lg:mb-24'>
                <div>
                <h1 className='mt-12 lg:mt-24 text-orange font-bold text-base md:text-xl lg:text-3xl'>
                    Visi Yayasan
                </h1>
                <p className='pt-4 text-justify text-xs md:text-base lg:text-xl'>
                    Membangun sumberdaya manusia yang unggul dalam intelektualitas dan moralitas serta
                    berdaya saing global berdasarkan iman dan taqwa.
                </p>

                <h1 className='mt-12 lg:mt-24 text-orange font-bold text-base md:text-xl lg:text-3xl'>
                    Misi Yayasan
                </h1>
                    <div className='pt-4 pl-4 text-justify text-xs md:text-base lg:text-xl'>
                        <ol className='list-decimal space-y-6'>
                            <li>
                                Berproses secara maksimal dalam membina generasi muda menuju keunggulan
                                sumberdaya berdasar iman dan taqwa.
                            </li>
                            <li>
                                Berkarya dengan semangat jiwa dan raga untuk membangun masyarakat yang berkualitas dalam keilmuan dan berakhlaq mulia.
                            </li>
                            <li>
                                Bergerak dengan semangat kekeluargaan dalam meningkatkan peran aktif masyarakat menuju kemandirian dan kesejahteraan bangsa.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default visi_misi;
