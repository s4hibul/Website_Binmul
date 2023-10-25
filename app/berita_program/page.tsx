import React from 'react';
import Navigasi_card from './navigasi_card';

function BeritaProgram() {
  return (
    <div className='flex-col min-h-screen'>
      <div className='relative z-40'>
        <img src='/images/news.png' className='object-cover bg-center h-full w-full bg-gradient-to-b from-black' />  
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl md:text-4xl lg:text-5xl text-center'>Berita & Program</h1>
      </div>
      <div className='mx-12 lg:mx-24 px-6 my-4 py-4 md:py-8 lg:py-12'>
        <Navigasi_card />
      </div>
    </div>
  );
}

export default BeritaProgram;

