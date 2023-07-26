"use client";
import React, { useState } from 'react';
import CardNews from './card_news'; // Komponen CardNews yang sudah Anda buat

const cardsPerPage = 8; // Jumlah card yang ingin ditampilkan di setiap halaman
const totalCards = 20; // Total jumlah card yang ada

// data dummy untuk card
const data_dummy = [
    {
        id: 1,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 1",
        beritaUrl: "/berita_program/detail_berita",
        },
        {
        id: 2,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 2",
        beritaUrl: "/berita_program/detail_berita",
        },
        {
        id: 3,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 3",
        beritaUrl: "/berita_program/detail_berita",
        },
        {
        id: 4,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 4",
        beritaUrl: "/berita_program/detail_berita",
        },
        {
        id: 5,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 5",
        beritaUrl: "/berita_program/detail_berita",
        },
        {
        id: 6,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 6",
        beritaUrl: "/berita_program/detail_berita",
        },
        {
        id: 7,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 7",
        beritaUrl: "/berita_program/detail_berita",
        },
        {
        id: 8,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 8",
        beritaUrl: "/berita_program/detail_berita",
        },
        {
        id: 9,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 6",
        beritaUrl: "/berita_program/detail_berita",
        },
        {
        id: 10,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 7",
        beritaUrl: "/berita_program/detail_berita/7",
        },
        {
        id: 11,
        imageUrl: "/carousel-images/image2.png",
        heading: "Lorem ipsum dolor sit amet 8",
        beritaUrl: "/berita_program/detail_berita",
        },
    ];

const navigasi_cardBerita = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    // Menghitung indeks awal dan akhir card yang akan ditampilkan di halaman saat ini
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

  // Mengambil bagian data card yang sesuai dengan halaman saat ini
    const currentCards = data_dummy.slice(startIndex, endIndex);

    return (
        <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 mx-12 lg:mx-24 px-6 mt-4 pt-4 md:pt-8 lg:pt-12">
            {currentCards.map((cardData) => (
            <CardNews key={cardData.id} {...cardData} />
            ))}
        </div>

        {/* Tampilkan tombol navigasi jika ada lebih dari 1 halaman */}
        {totalPages > 1 && (
            <div className="pt-8 flex justify-center my-4">
                {currentPage > 1 && (
                <button
                    onClick={handlePrevPage}
                    className="mr-2 px-4 py-2 border bg-orange text-white"
                >
                    Halaman Sebelumnya
                </button>
                )}

                {/* Menampilkan tombol nomor halaman */}
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`mx-1 px-3 py-1 border ${
                    currentPage === pageNumber ? 'bg-orange text-white' : 'bg-orange text-white'
                    }`}
                >
                    {pageNumber}
                </button>
                ))}

                {currentPage < totalPages && (
                <button
                    onClick={handleNextPage}
                    className="ml-2 px-4 py-2 border bg-orange text-white"
                >
                    Halaman Berikutnya
                </button>
                )}
            </div>
        )}
        </div>
    );
};

export default navigasi_cardBerita;
