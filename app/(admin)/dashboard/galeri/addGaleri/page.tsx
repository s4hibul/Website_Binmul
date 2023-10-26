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
  const [images4, setImages4] = useState<File[]>([]);
  const [images5, setImages5] = useState<File[]>([]);
  const [images6, setImages6] = useState<File[]>([]);
  const [images7, setImages7] = useState<File[]>([]);
  const [images8, setImages8] = useState<File[]>([]);
  const [lokasi, setLokasi] = useState<string>("");
  const [tanggal, setTanggal] = useState<string>("");

  const saveData = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("lokasi", lokasi);
      formData.append("tanggal", tanggal);


      for (let i = 0; i < images1.length; i++) {
        formData.append("images", images1[i], images1[i].name);
      }
      for (let i = 0; i < images2.length; i++) {
        formData.append("images", images2[i], images2[i].name);
      }
      for (let i = 0; i < images3.length; i++) {
        formData.append("images", images3[i], images3[i].name);
      }
      for (let i = 0; i < images4.length; i++) {
        formData.append("images", images4[i], images4[i].name);
      }
      for (let i = 0; i < images5.length; i++) {
        formData.append("images", images5[i], images5[i].name);
      }
      for (let i = 0; i < images6.length; i++) {
        formData.append("images", images6[i], images6[i].name);
      }
      for (let i = 0; i < images7.length; i++) {
        formData.append("images", images7[i], images7[i].name);
      }
      for (let i = 0; i < images8.length; i++) {
        formData.append("images", images8[i], images8[i].name);
      }

      await axios.post("http://localhost:7000/galeri", formData, {
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

  const handleImageChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files);
      setImages4(selectedImages);
      console.log(selectedImages);
    }
  };

  const handleImageChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files);
      setImages5(selectedImages);
      console.log(selectedImages);
    }
  };

  const handleImageChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files);
      setImages6(selectedImages);
      console.log(selectedImages);
    }
  };

  const handleImageChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files);
      setImages7(selectedImages);
      console.log(selectedImages);
    }
  };

  const handleImageChange8 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files);
      setImages8(selectedImages);
      console.log(selectedImages);
    }
  };

  const handleLokasiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLokasi(event.target.value);
  };

  const handletanggalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTanggal(event.target.value);
  };

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <h1 className="text-2xl font-bold mb-4">
        Tambah Galeri
      </h1>
      <form onSubmit={saveData}>
        <div className="mb-4">
          <label htmlFor="gambar" className="block text-gray-600 font-medium">
            {" "}
            Gambar 1:{" "}
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
          <label htmlFor="gambar3" className="block text-gray-600 font-medium">
            {" "}
            Gambar 4:{" "}
          </label>
          <input
            type="file"
            id="gambar4"
            className="border border-gray-300 p-2 w-full"
            multiple
            onChange={handleImageChange4}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gambar3" className="block text-gray-600 font-medium">
            {" "}
            Gambar 5:{" "}
          </label>
          <input
            type="file"
            id="gambar5"
            className="border border-gray-300 p-2 w-full"
            multiple
            onChange={handleImageChange5}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gambar3" className="block text-gray-600 font-medium">
            {" "}
            Gambar 6:{" "}
          </label>
          <input
            type="file"
            id="gambar6"
            className="border border-gray-300 p-2 w-full"
            multiple
            onChange={handleImageChange6}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gambar3" className="block text-gray-600 font-medium">
            {" "}
            Gambar 7:{" "}
          </label>
          <input
            type="file"
            id="gambar7"
            className="border border-gray-300 p-2 w-full"
            multiple
            onChange={handleImageChange7}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gambar3" className="block text-gray-600 font-medium">
            {" "}
            Gambar 8:{" "}
          </label>
          <input
            type="file"
            id="gambar8"
            className="border border-gray-300 p-2 w-full"
            multiple
            onChange={handleImageChange8}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 font-medium">
            {" "}
            Tanggal:{" "}
          </label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 p-2 w-full"
            onChange={handletanggalChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 font-medium">
            {" "}
            Lokasi:{" "}
          </label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 p-2 w-full"
            onChange={handleLokasiChange}
          />
        </div>
        <button
          type="submit"
          className="bg-dark text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {" "}
          Simpan Galeri{" "}
        </button>
      </form>
    </div>
  );
}

export default FormBerita;
