// "use client";
// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// // import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function FormBerita() {
//     const [images, setImages] = useState<File[]>([]);
//     const [deskripsi, setDeskripsi] = useState<string>("");
//     // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//     const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files) {
//             const selectedImages = Array.from(event.target.files).slice(0, 3); // Maksimal 3 gambar
//             setImages(selectedImages);
//         }
//     };

//     const handleDeskripsiChange = (value: string) => {
//         setDeskripsi(value);
//     };

//     // const handleDateChange = (date: Date | null) => {
//     //     setSelectedDate(date);
//     // };

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append("deskripsi", deskripsi);
//             // if (selectedDate) {
//             //     formData.append("selectedDate", selectedDate.toISOString());
//             // }
//             if (images.length > 0) {
//                 formData.append("image1", images[0]);
//                 if (images.length > 1) {
//                     formData.append("image2", images[1]);
//                     if (images.length > 2) {
//                         formData.append("image3", images[2]);
//                     }
//                 }
//             }
//             // Append other form data as needed

//             const response = await axios.post(
//                 "http://localhost:7000/berita&program",
//                 formData,
//                 {
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );

//             console.log("Response data:", response.data);
//             // Menampilkan notifikasi sukses
//             toast.success('Data berhasil diunggah ke database', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });

//         } catch (error) {
//             console.error("Error posting data:", error);
//             // Menampilkan notifikasi kesalahan
//             toast.error('Gagal mengunggah data ke database', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//         }
//     };

//     return (
//         <div>
//             <h1 className="text-2xl font-bold mb-4">
//                 Welcome to the Berita dan program
//             </h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="gambar" className="block text-gray-600 font-medium">
//                         {" "}
//                         Gambar Thumbnail:{" "}
//                     </label>
//                     <input
//                         type="file"
//                         id="gambar"
//                         className="border border-gray-300 p-2 w-full"
//                         multiple
//                         onChange={handleImageChange}
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="gambar" className="block text-gray-600 font-medium">
//                         {" "}
//                         Gambar 2:{" "}
//                     </label>
//                     <input
//                         type="file"
//                         id="gambar"
//                         className="border border-gray-300 p-2 w-full"
//                         multiple
//                         onChange={handleImageChange}
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="gambar" className="block text-gray-600 font-medium">
//                         {" "}
//                         Gambar 3:{" "}
//                     </label>
//                     <input
//                         type="file"
//                         id="gambar"
//                         className="border border-gray-300 p-2 w-full"
//                         multiple
//                         onChange={handleImageChange}
//                     />
//                 </div>
//                 {/* <div className="mb-4">
//                     <label htmlFor="lokasi" className="block text-gray-600 font-medium">
//                         {" "}
//                         Lokasi:{" "}
//                     </label>
//                     <input
//                         type="text"
//                         id="lokasi"
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                 </div> */}
//                 {/* <div className="mb-4">
//                     <label htmlFor="tanggal" className="block text-gray-600 font-medium">
//                         {" "}
//                         Tanggal:{" "}
//                     </label>
//                     <DatePicker
//                         id="tanggal"
//                         selected={selectedDate}
//                         onChange={handleDateChange}
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                 </div> */}
//                 <div className="mb-4">
//                     <label htmlFor="judul" className="block text-gray-600 font-medium">
//                         {" "}
//                         Judul:{" "}
//                     </label>
//                     <input
//                         type="text"
//                         id="judul"
//                         className="border border-gray-300 p-2 w-full"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label
//                         htmlFor="deskripsi"
//                         className="block text-gray-600 font-medium"
//                     >
//                         {" "}
//                         Deskripsi Berita:{" "}
//                     </label>
//                     <div className="border h-80 pb-10 font-small overflow-hidden">
//                         <ReactQuill
//                             value={deskripsi}
//                             onChange={handleDeskripsiChange}
//                             className="h-full"
//                         />
//                     </div>
//                 </div>
//                 <button
//                     type="submit"
//                     className="bg-dark text-white py-2 px-4 rounded hover:bg-blue-600"
//                 >
//                     {" "}
//                     Simpan{" "}
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default FormBerita;

"use client"

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormBerita() {
    const [images, setImages] = useState<File[]>([]);
    const [deskripsi, setDeskripsi] = useState<string>("");
    const [judul, setJudul] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedImages = Array.from(event.target.files).slice(0, 3); // Maksimal 3 gambar
            setImages(selectedImages);
        }
    };

    const handleDeskripsiChange = (value: string) => {
        setDeskripsi(value);
    };

    const handleJudulChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJudul(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            setLoading(true); // menunjukkan bahwa proses loading dimulai
            const formData = new FormData();
            formData.append("deskripsi", deskripsi);
            formData.append("judul", judul);

            if (images.length > 0) {
                for (let i = 0; i < images.length; i++) {
                    formData.append(`image${i + 1}`, images[i]);
                }
            }

            const response = await axios.post("http://localhost:7000/berita&program", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Response data:", response.data);
            toast.success("Data berhasil diunggah ke database", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.error("Error posting data:", error);
            toast.error("Gagal mengunggah data ke database", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setLoading(false); // menunjukkan bahwa proses loading selesai
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to the Berita dan program</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="gambar" className="block text-gray-600 font-medium">
                        {" "}
                        Gambar Thumbnail:{" "}
                    </label>
                    <input
                        type="file"
                        id="gambar"
                        className="border border-gray-300 p-2 w-full"
                        multiple
                        onChange={handleImageChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="judul" className="block text-gray-600 font-medium">
                        {" "}
                        Judul:{" "}
                    </label>
                    <input
                        type="text"
                        id="judul"
                        className="border border-gray-300 p-2 w-full"
                        onChange={handleJudulChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="deskripsi" className="block text-gray-600 font-medium">
                        {" "}
                        Deskripsi Berita:{" "}
                    </label>
                    <div className="border h-80 pb-10 font-small overflow-hidden">
                        <ReactQuill value={deskripsi} onChange={handleDeskripsiChange} className="h-full" />
                    </div>
                </div>
                <button type="submit" className="bg-dark text-white py-2 px-4 rounded hover:bg-blue-600">
                    {" "}
                    Simpan{" "}
                </button>
            </form>
        </div>
    );
}

export default FormBerita;
