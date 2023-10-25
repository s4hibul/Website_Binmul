// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Carousel: React.FC<> = () => {
// const [imageUrls, setImageUrls] = useState<string[]>([]);
// const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

// useEffect(() => {
//     // Fetch the image URLs from the API
//     const fetchImageUrls = async () => {
//         try {
//             const response = await axios.get ('http://localhost:7000/banner');
//             const urls = response.data.map((item) => item.imageUrl);
//             setImageUrls(urls);
//         } catch (error) {
//             console.error("Error fetching image URLs:", error);
//         }
//         };

//         fetchImageUrls();
//     }, [apiUrl]);

//     // Function to switch to the next image
//     const nextImage = () => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//     };

//     // Automatically switch to the next image every 1 second
//     useEffect(() => {
//         const interval = setInterval(nextImage, 1000);

//         return () => {
//         clearInterval(interval);
//         };
//     }, [currentImageIndex]);

//     return (
//         <div className="carousel">
//         {imageUrls.map((url, index) => (
//             <div
//             key={index}
//             className={`carousel-item ${index === currentImageIndex ? "active" : ""}`}
//             >
//             <img src={url} className="w-full object-contain" alt={`Image ${index}`} />
//             </div>
//         ))}
//         </div>
//     );
// };

// export default Carousel;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface CarouselProps {
//     apiUrl: string;
// }

// const Carousel: React.FC<CarouselProps> = ({ apiUrl }) => {
//     const [imageUrls, setImageUrls] = useState<string[]>([]);
//     const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

// useEffect(() => {
//     // Fetch the image URLs from the API
//     const fetchImageUrls = async () => {
//         try {
//         const response = await axios.get(apiUrl);
//         const urls = response.data.data.map((item: any) => item.banner);
//         setImageUrls(urls);
//         console.log(urls)
//         } catch (error) {
//         console.error("Error fetching image URLs:", error);
//         }
//     };

// fetchImageUrls();
// }, [apiUrl]);

// // Function to switch to the next image
// const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
// };

// // Automatically switch to the next image every 1 second
// useEffect(() => {
//     const interval = setInterval(nextImage, 1000);

//     return () => {
//         clearInterval(interval);
//     };
// }, [currentImageIndex]);

//     return (
//         <div className="carousel">
//             {imageUrls.map((url, index) => (
//                 <div
//                     key={index}
//                     className={`carousel-item ${index === currentImageIndex ? "active" : ""}`}
//                 >
//                     <img src={url} className="w-full object-contain" alt={`Image ${index}`} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Carousel;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Banner = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [bannerImages, setBannerImages] = useState<string[]>([]); // Menggunakan tipe string[] untuk data banner

//     useEffect(() => {
//         // Mengambil data gambar dari server menggunakan Axios
//         axios.get<string[]>('http://localhost:7000/banner') // Ganti URL dengan URL yang sesuai
//         .then((response) => {
//             setBannerImages(response.data);
//             console.log(response.data);
//         })
//         .catch((error) => {
//             console.error('Error fetching banner images:', error);
//         });
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) =>
//                 prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
//             );
//         }, 5000); // Ganti gambar setiap 5 detik

//         return () => clearInterval(interval);
//     }, [bannerImages]);

//     console.log("Nilai bannerImages[currentImageIndex]:", bannerImages[currentImageIndex]);

//     return (
//         <div>
//             {bannerImages.length > 0 && (
//                 <img src={bannerImages[currentImageIndex]} alt="Banner" /> // Menggunakan bannerImages[currentImageIndex] sebagai URL gambar
//             )}
//             {bannerImages.length === 0 && <p>No banner images found</p>}
//         </div>
//     );
// };

// export default Banner;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // Membuat tipe data untuk objek gambar
// interface Image {
//     imageUrl: string;
// }

//     const Carousel: React.FC = () => {
//     const [imageUrls, setImageUrls] = useState<string[]>([]);
//     const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

//     useEffect(() => {
//         // Fetch the image URLs from the specific server URL
//         const fetchImageUrls = async () => {
//         try {
//             const response = await axios.get<Image[]>('http://example.com/api/banner'); // Ganti URL server sesuai kebutuhan Anda
//             const urls = response.data.map((item) => item.imageUrl);
//             setImageUrls(urls);
//         } catch (error) {
//             console.error("Error fetching image URLs:", error);
//         }
//         };

//         fetchImageUrls();
//     }, []);

//     // Function to switch to the next image
//     const nextImage = () => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//     };

//     // Automatically switch to the next image every 1 second
//     useEffect(() => {
//         const interval = setInterval(nextImage, 1000);

//         return () => {
//         clearInterval(interval);
//         };
//     }, [currentImageIndex]);

//     return (
//         <div className="carousel">
//         {imageUrls.map((url, index) => (
//             <div
//             key={index}
//             className={`carousel-item ${index === currentImageIndex ? "active" : ""}`}
//             >
//             <img src={url} className="w-full object-contain" alt={`Image ${index}`} />
//             </div>
//         ))}
//         </div>
//     );
// };

// export default Carousel;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // Membuat tipe data untuk objek gambar
// interface Image {
//     imageUrl: string;
// }

// const Carousel: React.FC = ({ images }: { images: Image[] }) => {
//     const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

//     useEffect(() => {
//         // Function to switch to the next image
//         const nextImage = () => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         };

//         // Automatically switch to the next image every 1 second
//         const interval = setInterval(nextImage, 1000);

//         return () => {
//             clearInterval(interval);
//         };
//     }, [images, currentImageIndex]);

//     return (
//         <div className="carousel">
//             {images.map((image, index) => (
//                 <div
//                     key={index}
//                     className={`carousel-item ${index === currentImageIndex ? "active" : ""}`}
//                 >
//                     <img src={image.imageUrl} className="w-full object-contain" alt={`Image ${index}`} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// const App: React.FC = () => {
//     const [imageUrls, setImageUrls] = useState<Image[]>([]);

//     useEffect(() => {
//         // Fetch the image URLs from the specific server URL
//         const fetchImageUrls = async () => {
//             try {
//                 const response = await axios.get<Image[]>('http://example.com/api/banner'); // Ganti URL server sesuai kebutuhan Anda
//                 setImageUrls(response.data);
//             } catch (error) {
//                 console.error("Error fetching image URLs:", error);
//             }
//         };

//         fetchImageUrls();
//     }, []);

//     return (
//         <div>
//             <h1>Data dari Database:</h1>
//             <pre>{JSON.stringify(imageUrls, null, 2)}</pre>
//             <Carousel images={imageUrls} />
//         </div>
//     );
// };

// export default App;

// import React from 'react'

// function carousel() {
// return (
//     <div>
//         <div id="default-carousel" className="relative w-full bg-tosca" data-carousel="slide">
//             {/* <!-- Carousel wrapper --> */}
//             <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                 {/* <!-- Item 1 --> */}
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="./carousel-images/image1.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="no images" />
//                 </div>
//                 {/* <!-- Item 2 --> */}
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="/carousel-images/image1.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>
//                 {/* <!-- Item 3 --> */}
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="/carousel-images/image1.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>
//                 {/* <!-- Item 4 --> */}
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="/carousel-images/image1.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>
//                 {/* <!-- Item 5 --> */}
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="/carousel-images/image1.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>
//             </div>
//             {/* <!-- Slider indicators --> */}
//             <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//             </div>
//             {/* <!-- Slider controls --> */}
// <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//         <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
//         </svg>
//         <span className="sr-only">Previous</span>
//     </span>
// </button>
// <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//         <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
//         </svg>
//         <span className="sr-only">Next</span>
//     </span>
// </button>
//         </div>
//     </div>
//     )
// }

// export default carousel

// "use client"
// import React, { useState, useEffect } from "react";

// const images = [
//     "/carousel-images/image1.png",
//     "https://via.placeholder.com/1920x640",
//     "https://via.placeholder.com/1920x640",
//     // Tambahkan URL gambar lainnya di sini
//     ];

// function carousel() {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//         }, 8000); // Ganti gambar setiap 5 detik (5000 milidetik)

//         return () => clearInterval(interval);
//     }, []);

//     const nextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prevSlide) =>
//         prevSlide === 0 ? images.length - 1 : prevSlide - 1
//         );
//     };

//     return (
//         <div className="relative h-96">
//             <img
//                 src={images[currentSlide]}
//                 alt={`Slide ${currentSlide + 1}`}
//                 className="object-cover object-center w-full h-full transition-opacity duration-500"
//             />
// <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
//     <button className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide}>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
//             </svg>
//             <span className="sr-only">Previous</span>
//         </span>
//     </button>
//     <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
//             </svg>
//             <span className="sr-only">Next</span>
//         </span>
//     </button>
// </div>
//         </div>
//     );
// }

// export default carousel;

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface BannerItem {
  banner: string; // Assuming 'banner' is the property containing the image URL
}

function Carousel() {
  const [images, setImages] = useState<string[]>([]); // State to store the image URLs
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Make an HTTP GET request to fetch images from the server
    axios
      .get<{ data: BannerItem[] }>("http://localhost:7000/banner")
      .then((response) => {
        const data = response.data.data;
        if (data && data.length > 0) {
          // Extract image URLs from the response
          const imageUrls = data.map((item) => item.banner);
          setImages(imageUrls);
        }
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative h-96">
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="object-cover object-center w-full h-full transition-opacity duration-500"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
        <button
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
