"use client";
import React from "react";
import Carousel from "@/components/carousel";

const Beranda: React.FC = () => {
    return (
        <div className="flex-grow flex-col min-h-screen">
            <Carousel />
            <div>Ini adalah konten lain yang ingin ditampilkan di halaman beranda.</div>
        </div>
    );
};

export default Beranda;