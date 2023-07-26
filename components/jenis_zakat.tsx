"use client"
import React, { useState } from 'react';
import Zakat_maalForm from './zakat_maalForm';
import Zakat_profesiForm from './zakat_profesiForm';

const Zakat_maal = () => {
    return (
        <Zakat_maalForm />
    );
    };

const Zakat_Profesi = () => {
    return (
        <Zakat_profesiForm />
    );
    };



const jenis_zakat = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };
    
    return (
        <div>
            <div className="inline-block relative w-64">
                <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={selectedOption}
                onChange={handleOptionChange}
                >
                <option value="">Pilih Jenis Zakat</option>
                <option value="option1">Zakat Maal</option>
                <option value="option2">Zakat Profesi</option>
                <option value="option3">Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>

            {/* Menampilkan form sesuai pilihan yang dipilih */}
            {selectedOption === 'option1' && <Zakat_maal />}
            {selectedOption === 'option2' && <Zakat_profesiForm/>}
        </div>
    );
};

export default jenis_zakat;
