"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Membuat interface untuk menggambarkan struktur data gambar dari backend
interface ImageData {
    gambar1: string;
  // Tambahkan properti gambar lainnya sesuai dengan struktur data aktual
}

function Galeri() {
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        // Panggil API backend Anda untuk mengambil data gambar dari database menggunakan Axios
        axios.get<{ data: ImageData[] }>('http://localhost:7000/galeri')
        .then((response) => {
            const data = response.data.data;
            if (data && data.length > 0) {
            // Setel data gambar ke dalam state
            setImages(data);
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
            {images.slice(0, 6).map((image, index) => (
            <div className="w-1/2 p-1 md:p-2" key={index}>
                <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={image.gambar1} // Ganti dengan properti gambar yang sesuai
                />
            </div>
            ))}
        </div>
        </div>
    );
}

export default Galeri;


