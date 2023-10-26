"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormBerita() {
    const [images1, setImages1] = useState<File[]>([]);
    const [images2, setImages2] = useState<File[]>([]);
    const [images3, setImages3] = useState<File[]>([]);
    const [deskripsi, setDeskripsi] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    const saveData = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("deskripsi", deskripsi);

            for (let i = 0; i < images1.length; i++) {
                formData.append("images", images1[i], images1[i].name);
            }
            for (let i = 0; i < images2.length; i++) {
                formData.append("images", images2[i], images2[i].name);
            }
            for (let i = 0; i < images3.length; i++) {
                formData.append("images", images3[i], images3[i].name);
            }

            await axios.post("http://localhost:7000/berita&program", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success("Data berhasil diunggah ke database");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error("Gagal mengunggah data ke database");
            }
        }
    };

    const handleImageChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedImages = Array.from(event.target.files);
            setImages1(selectedImages);
            console.log(selectedImages);
        }
    };

    const handleImageChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedImages = Array.from(event.target.files);
            setImages2(selectedImages);
            console.log(selectedImages);
        }
    };

    const handleImageChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedImages = Array.from(event.target.files);
            setImages3(selectedImages);
            console.log(selectedImages);
        }
    };

    const handleDeskripsiChange = (value: string) => {
        setDeskripsi(value);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    return (
        <div>
            <ToastContainer position="bottom-right" />
            <h1 className="text-2xl font-bold mb-4">Welcome to the Berita dan program</h1>
            <form onSubmit={saveData}>
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
                        onChange={handleImageChange1}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="gambar2" className="block text-gray-600 font-medium">
                        {" "}
                        Gambar 2:{" "}
                    </label>
                    <input
                        type="file"
                        id="gambar2"
                        className="border border-gray-300 p-2 w-full"
                        multiple
                        onChange={handleImageChange2}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="gambar3" className="block text-gray-600 font-medium">
                        {" "}
                        Gambar 3:{" "}
                    </label>
                    <input
                        type="file"
                        id="gambar3"
                        className="border border-gray-300 p-2 w-full"
                        multiple
                        onChange={handleImageChange3}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-600 font-medium">
                        {" "}
                        title:{" "}
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="border border-gray-300 p-2 w-full"
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="deskripsi"
                        className="block text-gray-600 font-medium"
                    >
                        {" "}
                        Deskripsi Berita:{" "}
                    </label>
                    <div className="border h-80 pb-10 font-small overflow-hidden">
                        <ReactQuill
                            value={deskripsi}
                            onChange={handleDeskripsiChange}
                            className="h-full"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-dark text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    {" "}
                    Simpan{" "}
                </button>
            </form>
        </div>
    );
}

export default FormBerita;