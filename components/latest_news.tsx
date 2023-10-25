// "use client"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Berita {
//     id: number;
//     title: string;
//     image1: string;
// }

// interface LatestNewsProps {
//     currentPage: number;
// }

// const cardsPerPage = 3; // Ubah jumlah kartu yang ingin ditampilkan per halaman

// const LatestNews: React.FC<LatestNewsProps> = ({ currentPage }) => {
//     const [data, setData] = useState<Berita[]>([]);
//     const [page, setPage] = useState(currentPage); // Menyimpan halaman saat ini

//     useEffect(() => {
//         getLatestNews();
//     }, [page]); // Gunakan "page" sebagai dependensi useEffect

//     const getLatestNews = async () => {
//         try {
//             const response = await axios.get('http://localhost:7000/berita&program');
//             const sortedNews = response.data.data.sort((a: Berita, b: Berita) => b.id - a.id);
//             const startIdx = (page - 1) * cardsPerPage;
//             const endIdx = startIdx + cardsPerPage;
//             const latestNews = sortedNews.slice(startIdx, endIdx);
//             setData(latestNews);
//         } catch (error) {
//             console.error('Error fetching latest news:', error);
//         }
//     };

//     const nextPage = () => {
//         setPage(page + 1);
//     };

//     const prevPage = () => {
//         if (page > 1) {
//             setPage(page - 1);
//         }
//     };

//     return (
//         <div>
//             <div className='flex flex-row overflow-x-auto'>
//                 {data.map((news) => (
//                     <div className='max-w-sm bg-light mr-4 rounded-lg shadow flex-shrink-0' key={news.id}>
//                         {/* Kartu News seperti yang Anda miliki */}
//                     </div>
//                 ))}
//             </div>
//             <div className='mt-4 flex justify-center'>
//                 <button
//                     onClick={prevPage}
//                     className='mr-2 px-3 py-1 text-sm font-medium text-white bg-orange rounded-lg'
//                 >
//                     Previous
//                 </button>
//                 <button
//                     onClick={nextPage}
//                     className='px-3 py-1 text-sm font-medium text-white bg-orange rounded-lg'
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default LatestNews;


// ---- AWAL "kode ini berhasil mengambil card tetapi tampilan tidak sesuai yang diinginkan" ----

"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Berita {
    id: number;
    title: string;
    image1: string;
}

interface LatestNewsProps {
    currentPage: number;
}

const cardsPerPage = 3;

const LatestNews: React.FC<LatestNewsProps> = ({ currentPage }) => {
    const [data, setData] = useState<Berita[]>([]);

    useEffect(() => {
        getLatestNews();
    }, [currentPage]);

    const getLatestNews = async () => {
        try {
            const response = await axios.get('http://localhost:7000/berita&program');
            const sortedNews = response.data.data.sort((a : Berita, b : Berita) => b.id - a.id);
            const latestNews = sortedNews.slice(0, 3);
            setData(latestNews);
        } catch (error) {
            console.error('Error fetching latest news:', error);
        }
    };

    return (
        <div className='flex flex-col xl:flex-row  overflow-x-auto'>
            {data.map((news) => (
                <div className='max-w-sm bg-light xl:mr-12 mt-12 rounded-lg shadow flex-shrink-0' key={news.id}>
                    {news.image1 ? (
                        <img className='rounded-t-lg' src={news.image1} alt={news.image1} />
                    ) : (
                        <img className='rounded-t-lg' src='placeholder-image-url' alt='Placeholder' />
                    )}
                    <div className='p-5'>
                        <a>
                            <h5 className='mb-4 text-lg md:text-2xl font-bold tracking-tight text-gray-900 truncate'>
                                {news.title}
                            </h5>
                        </a>
                        <a
                            href={`/berita_program/detail_berita/${news.id}`}
                            className='inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
                        >
                            Selengkapnya
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LatestNews;

// ---- AKHIR "kode ini berhasil mengambil card tetapi tampilan tidak sesuai yang diinginkan" ----

// "use client"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Berita {
//     id: number;
//     title: string;
//     image1: string;
// }

// interface LatestNewsProps {
//     currentPage: number;
// }

// const cardsPerPage = 8;
// const cardsPerSlide = 3;

// const LatestNews: React.FC<LatestNewsProps> = ({ currentPage }) => {
//     const [data, setData] = useState<Berita[]>([]);
//     const [scrollPosition, setScrollPosition] = useState<number>(0);
//     const [activeSlide, setActiveSlide] = useState<number>(0);

//     useEffect(() => {
//         getLatestNews();
//     }, [currentPage]);

//     const getLatestNews = async () => {
//         try {
//             const response = await axios.get('http://localhost:7000/berita&program');
//             const sortedNews = response.data.data.sort((a: Berita, b: Berita) => b.id - a.id);
//             const latestNews = sortedNews.slice(0, cardsPerPage);
//             setData(latestNews);
//         } catch (error) {
//             console.error('Error fetching latest news:', error);
//         }
//     };

//     const handleScroll = (scrollValue: number) => {
//         const newScrollPosition = scrollPosition + scrollValue;
//         if (newScrollPosition >= 0 && newScrollPosition <= data.length * 200) {
//             setScrollPosition(newScrollPosition);
//             const newActiveSlide = Math.floor(newScrollPosition / (cardsPerSlide * 200));
//             setActiveSlide(newActiveSlide);
//         }
//     };

//     const renderDotNavigation = () => {
//         const totalSlides = Math.ceil(data.length / cardsPerSlide);
//         const dots = [];

//         for (let i = 0; i < totalSlides; i++) {
//             dots.push(
//                 <button
//                     key={i}
//                     className={`h-2 w-2 mx-1 rounded-full ${
//                         i === activeSlide ? 'bg-blue-500' : 'bg-gray-300'
//                     }`}
//                     onClick={() => goToSlide(i)}
//                 ></button>
//             );
//         }

//         return (
//             <div className='flex justify-center mt-4'>
//                 {dots}
//             </div>
//         );
//     };

//     const goToSlide = (slideIndex: number) => {
//         const newScrollPosition = slideIndex * cardsPerSlide * 200;
//         setScrollPosition(newScrollPosition);
//         setActiveSlide(slideIndex);
//     };

//     return (
//         <div className='relative'>
//             <div className='flex flex-row overflow-hidden'>
//                 <div
//                     className='flex flex-row'
//                     style={{ transform: `translateX(-${scrollPosition}px)` }}
//                 >
//                     {data.map((news) => (
//                         <div className='max-w-sm bg-light mr-4 rounded-lg shadow flex-shrink-0' key={news.id}>
//                             {news.image1 ? (
//                                 <img className='rounded-t-lg' src={news.image1} alt={news.image1} />
//                             ) : (
//                                 <img className='rounded-t-lg' src='placeholder-image-url' alt='Placeholder' />
//                             )}
//                             <div className='p-5'>
//                                 <a>
//                                     <h5 className='mb-4 text-lg md:text-2xl font-bold tracking-tight text-gray-900 truncate'>
//                                         {news.title}
//                                     </h5>
//                                 </a>
//                                 <a
//                                     href={`/berita_program/detail_berita/${news.id}`}
//                                     className='inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
//                                 >
//                                     Selengkapnya
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {renderDotNavigation()}
//             <div className='absolute top-1/2 transform -translate-y-1/2'>
//                 <button
//                     className='text-gray-500 hover:text-gray-700 mr-4'
//                     onClick={() => handleScroll(-cardsPerSlide * 200)}
//                 >
//                     &#8592; {/* Tanda panah ke kiri */}
//                 </button>
//                 <button
//                     className='text-gray-500 hover:text-gray-700'
//                     onClick={() => handleScroll(cardsPerSlide * 200)}
//                 >
//                     &#8594; {/* Tanda panah ke kanan */}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default LatestNews;

