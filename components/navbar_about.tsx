"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

const NavbarAbout = () => {
    const pathname = usePathname();

    const isActiveLink = (href: string) => {
        return pathname === href ? 'text-dark font-bold border-b-4 bg-gray-500' : '';
    };

    return (
        <div className="text-sm lg:text-base font-medium text-center border-b-2 border-dark ">
        <ul className="flex flex-wrap place-content-center -mb-px mr-2">
            <li className={isActiveLink('/tentang_kami')}>
            <a href="/tentang_kami" className="inline-block p-4 text-gray-500 ">Tentang Kami</a>
            </li>
            <li className={isActiveLink('/tentang_kami/visi_misi')}>
            <a href="/tentang_kami/visi_misi" className="inline-block p-4 text-gray-500 ">Visi & Misi</a>
            </li>
            <li className={isActiveLink('/tentang_kami/budaya_lembaga')}>
            <a href="/tentang_kami/budaya_lembaga" className="inline-block p-4 text-gray-500 ">Budaya Lembaga</a>
            </li>
            <li className={isActiveLink('/tentang_kami/value_lembaga')}>
            <a href="/tentang_kami/value_lembaga" className="inline-block p-4 text-gray-500 ">Value Lembaga</a>
            </li>
        </ul>
        </div>
    );
}

export default NavbarAbout;




