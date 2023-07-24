"use client";
import React from 'react'
import { Link } from 'react-router-dom';

function berita_program() {
  return (
    <div className="flex-col min-h-screen">
            <div className='relative'>
                <img src='\images\News.png ' className='object-cover bg-center h-full w-full bg-gradient-to-b from-black' />  
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl md:text-4xl lg:text-5xl  '>Berita & Program</h1>
            </div>
        </div>
  )
}

export default berita_program

{/* <div>
      <a href='/berita_program/detail_berita'>ini detail</a>
    </div> */}
