"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

const NavbarLayanan = () => {
    const pathname = usePathname();

    const isActiveLink = (href: string) => {
        return pathname === href ? 'text-dark font-bold border-b-4 bg-gray-500' : '';
    };

    return (
        <div className="text-sm lg:text-base font-medium text-center border-b-2 border-dark ">
        <ul className="flex flex-wrap place-content-center -mb-px mr-2">
            <li className={isActiveLink('/pelayanan/forum')}>
            <a href="/pelayanan/forum" className="inline-block p-4 text-gray-500 ">Forum</a>
            </li>
            <li className={isActiveLink('/pelayanan')}>
            <a href="/pelayanan" className="inline-block p-4 text-gray-500 ">Kalkulator Zakat</a>
            </li>
        </ul>
        </div>
    );
}

export default NavbarLayanan; 




