// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // interface Berita {
// //     id: number;
// //     title: string;
// //     image1: string;
// // }

// // interface CardNewsProps {
// //     currentPage: number;
// // }

// // const cardsPerPage = 8;

// // const CardNews: React.FC<CardNewsProps> = ({ currentPage }) => {
// // const [data, setData] = useState<Berita[]>([]);

// // useEffect(() => {
// // getNews();
// // }, [currentPage]);

// // const getNews = async () => {
// // try {
// //     const response = await axios.get('http://localhost:7000/berita&program');
// //     setData(response.data.data);
// // } catch (error) {
// //     console.error('Error fetching news:', error);
// // }
// // };

// // const startIndex = (currentPage - 1) * cardsPerPage;
// // const endIndex = startIndex + cardsPerPage;

// // return (
// // <div className='flex flex-row flex-wrap justify-evenly'>
// //     {data.slice(startIndex, endIndex).map((news) => (
// //     <div className='max-w-sm bg-light mb-8 rounded-lg shadow'>
// //         <div  key={news.id}>
// //             {news.image1 ? (
// //             <img className='rounded-t-lg' src={news.image1} alt={news.image1} />
// //             ) : (
// //             <img className='rounded-t-lg' src='placeholder-image-url' alt='Placeholder' />
// //             )}
// //             <div className='p-5'>
// //                 <a>
// //                     <h5 className='mb-4 text-lg md:text-2xl font-bold tracking-tight text-gray-900'>
// //                     {news.title}
// //                     </h5>
// //                 </a>
// //                 <a
// //                     href={`/berita_program/detail_berita/${news.id}`}
// //                     className='inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
// //                 >
// //                     Selengkapnya
// //                 </a>
// //             </div>
// //         </div>
// //     </div>
// //     ))}
// // </div>
// // );
// // };

// // export default CardNews;

"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Berita {
    id: number;
    title: string;
    image1: string;
}

interface CardNewsProps {
    currentPage: number;
}

const cardsPerPage = 8;

const CardNews: React.FC<CardNewsProps> = ({ currentPage }) => {
    const [data, setData] = useState<Berita[]>([]);

    useEffect(() => {
        getNews();
    }, [currentPage]);

    const getNews = async () => {
        try {
            const response = await axios.get('http://localhost:7000/berita&program');
            setData(response.data.data);
            console.log('Data from server:', response.data.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const totalPage = Math.ceil(data.length / cardsPerPage);

    return (
        <div className='flex flex-row flex-wrap justify-evenly'>
            {data.slice(startIndex, endIndex).map((news) => (
                <div className='max-w-sm bg-light mb-8 rounded-lg shadow' key={news.id}>
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
                            // href={`/berita_program/detail_berita/${news.id}`}
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

export default CardNews;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Berita {
//     id: number;
//     title: string;
//     image1: string;
// }

// interface CardNewsProps {
//     currentPage: number;
// }

// const cardsPerPage = 8;

// const CardNews: React.FC<CardNewsProps> = ({ currentPage }) => {
//     const [data, setData] = useState<Berita[]>([]);
//     const [totalPage, setTotalPage] = useState(0);

//     useEffect(() => {
//         getNews();
//     }, [currentPage]);

//     const getNews = async () => {
//         try {
//             const response = await axios.get('http://localhost:7000/berita&program');
//             setData(response.data.data);
//             setTotalPage(Math.ceil(response.data.data.length / cardsPerPage));
//         } catch (error) {
//             console.error('Error fetching news:', error);
//         }
//     };

//     const startIndex = (currentPage - 1) * cardsPerPage;
//     const endIndex = startIndex + cardsPerPage;

//     return (
//         <div className='flex flex-row flex-wrap justify-evenly'>
//             {data.slice(startIndex, endIndex).map((news) => (
//                 <div className='max-w-sm bg-light mb-8 rounded-lg shadow' key={news.id}>
//                     {news.image1 ? (
//                         <img className='rounded-t-lg' src={news.image1} alt={news.image1} />
//                     ) : (
//                         <img className='rounded-t-lg' src='placeholder-image-url' alt='Placeholder' />
//                     )}
//                     <div className='p-5'>
//                         <a>
//                             <h5 className='mb-4 text-lg md:text-2xl font-bold tracking-tight text-gray-900'>
//                                 {news.title}
//                             </h5>
//                         </a>
//                         <a
//                             href={`/berita_program/detail_berita/${news.id}`}
//                             className='inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
//                         >
//                             Selengkapnya
//                         </a>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CardNews;
