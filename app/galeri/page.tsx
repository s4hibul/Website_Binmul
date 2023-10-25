// "use client"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// type GalleryDataItem = {
//   id?: number;
//   title: string;
//   lokasi: string;
//   tanggal: string;
//   gambar1: string | null;
//   gambar2: string | null;
//   gambar3: string | null;
//   gambar4: string | null;
//   gambar5: string | null;
//   gambar6: string | null;
//   gambar7: string | null;
//   gambar8: string | null;
// };

// type DynamicGalleryDataItem = GalleryDataItem & {
//   [key: string]: string | null;
// };

// function Gallery() {
//   const [galleryData, setGalleryData] = useState<GalleryDataItem[]>([]);

//   useEffect(() => {
//     const apiUrl = 'http://localhost:7000/galeri';

//     // Menggunakan Axios untuk mengambil data
//     axios.get(apiUrl)
//       .then((response) => {
//         // Data dari API akan tersedia di sini
//         setGalleryData(response.data.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
//       <h2 className="text-center text-xl lg:text-3xl text-orange mt-10 font-bold">Aksi Kami</h2>
//       <div className="-m-1 flex flex-wrap md:-m-2">
//         {galleryData.map((item) => (
//           <GalleryItem key={item.id} data={item as DynamicGalleryDataItem} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function GalleryItem({ data }: { data: DynamicGalleryDataItem }) {
//   return (
//     <div className="flex bg-light w-full mt-10 mx-20 p-6 rounded-xl flex-wrap">
//       <div className="w-full p-1 md:p-2">
//         <h3 className="text-lg lg:text-2xl font-bold pb-2">{data.title}</h3>
//         <p className=" text-sm lg:text-lg text-gray-500 pb-4">{data.lokasi}  {data.tanggal}</p>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//           {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
//             <img
//               key={index}
//               alt={`gallery-${index}`}
//               className="block h-full w-full rounded-lg object-cover object-center"
//               src={data[`gambar${index}`] ?? ''}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Gallery;

"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type GalleryDataItem = {
  id?: number;
  title: string;
  lokasi: string;
  tanggal: string;
  gambar1: string | null;
  gambar2: string | null;
  gambar3: string | null;
  gambar4: string | null;
  gambar5: string | null;
  gambar6: string | null;
  gambar7: string | null;
  gambar8: string | null;
};

type DynamicGalleryDataItem = GalleryDataItem & {
  [key: string]: string | null;
};

function Gallery() {
  const [galleryData, setGalleryData] = useState<GalleryDataItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4); // Jumlah gallery item per halaman
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const apiUrl = 'http://localhost:7000/galeri';

    // Menggunakan Axios untuk mengambil data
    axios.get(apiUrl)
      .then((response) => {
        const data = response.data.data;

        // Menghitung total halaman berdasarkan jumlah item per halaman
        const total = Math.ceil(data.length / cardsPerPage);
        setTotalPages(total);

        // Memfilter data untuk tampilan halaman saat ini
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const filteredData = data.slice(startIndex, endIndex);

        setGalleryData(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [currentPage, cardsPerPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <h2 className="text-center text-xl lg:text-3xl text-orange mt-10 font-bold">Aksi Kami</h2>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {galleryData.map((item) => (
          <GalleryItem key={item.id} data={item as DynamicGalleryDataItem} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {currentPage > 1 && (
          <button onClick={handlePrevPage} className='bg-orange text-white font-bold py-2 px-4 rounded mx-2'>
            Prev
          </button>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`mx-2 font-bold py-2 px-4 rounded ${
              pageNumber === currentPage ? 'bg-orange text-white' : 'bg-orange text-black opacity-50'
            }`}
            style={pageNumber === currentPage ? { opacity: 1 } : { opacity: 0.4 }}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={handleNextPage} className='bg-orange text-white font-bold py-2 px-4 rounded mx-2'>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

function GalleryItem({ data }: { data: DynamicGalleryDataItem }) {
  return (
    <div className="flex bg-light w-full mt-10 mx-20 p-6 rounded-xl flex-wrap">
      <div className="w-full p-1 md:p-2">
        <h3 className="text-lg lg:text-2xl font-bold pb-2">{data.title}</h3>
        <p className=" text-sm lg:text-lg text-gray-500 pb-4">{data.lokasi}  {data.tanggal}</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <img
              key={index}
              alt={`gallery-${index}`}
              className="block h-full w-full rounded-lg object-cover object-center"
              src={data[`gambar${index}`] ?? ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
