import React from 'react';
import Link from 'next/link'; // Perlu mengimpor komponen Link dari Next.js

const Navbar = () => {
    return (
        <div className='sticky top-0 w-full h-20 shadow-md z-[100] bg-white'>
        <div>
            {/* Menggunakan komponen Link dari Next.js */}
            <Link href="/">
            <a>
                <img
                src="/Logo_Binamulia_BPN.png" // Pastikan file Logo_Binamulia_BPN.png ada di direktori "public"
                alt=""
                width={100}
                height={100}
                className='w-16 h-16'
                />
            </a>
            </Link>
        </div>
        <div>
            <ul className='hidden md:flex items-center'>
            <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">
                {/* Menggunakan komponen Link dari Next.js */}
                <Link href='/'>
                <a>about</a>
                </Link>
            </li>
            {/* Tambahkan item menu lainnya di sini */}
            </ul>
        </div>
        </div>
    );
};

export default Navbar; // Nama komponen harus diawali dengan huruf besar (PascalCase)
