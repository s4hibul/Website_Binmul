"use client";
import React, { useState, useEffect } from 'react';
import CardNews from '@/components/card_news';
import axios from 'axios';

const Navigasi_card: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1); // Tambah state untuk total halaman

    const handleNextPage = () => {
        if (currentPage < totalPage) {
        setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const cardsPerPage = 8;

    useEffect(() => {
        // Mendapatkan total halaman saat data berubah
        const getTotalPages = async () => {
        try {
            const response = await axios.get('http://localhost:7000/berita&program');
            const total = Math.ceil(response.data.data.length / cardsPerPage);
            setTotalPage(total);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
        };

        getTotalPages();
    }, [currentPage]);

    return (
        <div >
            <div>
                <CardNews currentPage={currentPage} />
            </div>
            <div className='flex justify-center'>
                <div>
                    {currentPage > 1 && (
                    <button onClick={handlePrevPage} className='bg-orange text-white font-bold py-2 px-4 rounded mt-4 mr-2'>
                        Prev
                    </button>
                    )}

                    {/* Nomor halaman */}
                    {Array.from({ length: Math.min(5, totalPage) }, (_, i) => currentPage + i).map((pageNumber) => (
                    pageNumber <= totalPage && (
                        <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`mx-2 font-bold py-2 px-4 rounded mt-4 ${
                            pageNumber === currentPage ? 'bg-orange text-white' : 'bg-orange text-black opacity-50'
                        }`}
                        style={pageNumber === currentPage ? { opacity: 1 } : { opacity: 0.4 }}
                        >
                        {pageNumber}
                        </button>
                    )
                    ))}

                    {currentPage < totalPage && (
                    <button onClick={handleNextPage} className='bg-orange text-white font-bold py-2 px-4 rounded mt-4'>
                        Next
                    </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigasi_card;