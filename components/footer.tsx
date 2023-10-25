"use client";
import React, { Component } from 'react';
import Image from 'next/image';
import Youtube from "../public/icon_sosmed/youtube.png";
import Whatsapp from "../public/icon_sosmed/whatsapp.png";
import Instagram from "../public/icon_sosmed/instagram.png";
import Facebook from "../public/icon_sosmed/facebook.png";


class Footer extends Component {
    render() {
        return (
            <footer className="w-full z-50">
                <div className='flex justify-between py-4 h-1/5 bg-dark'>
                    <div className='mx-12 lg:mx-24 text-white font-semibold'>
                        Bina Mulia Balikpapan
                    </div>
                    <div className='mx-12 lg:mx-24 flex space-x-4'>
                        <a href="https://wa.me/6281346301543" target="_blank" rel="noopener noreferrer">
                            <div className="rounded-full bg-blue-500 cursor-pointer h-4 w-4 lg:h-6 lg:w-6">
                                <Image
                                    src={Whatsapp}
                                    alt="Button Image"
                                />
                            </div>
                        </a>
                        <a href="https://youtube.com/BinaMuliaBalikpapan" target="_blank" rel="noopener noreferrer">
                            <div className="rounded-full bg-blue-500 cursor-pointer h-4 w-4 lg:h-6 lg:w-6">
                                <Image
                                    src={Youtube}
                                    alt="Button Image"
                                />
                            </div>
                        </a>
                        <a href="https://instagram.com/binamulia.bpn?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
                            <div className="rounded-full bg-blue-500 cursor-pointer h-4 w-4 lg:h-6 lg:w-6">
                                <Image
                                    src={Instagram}
                                    alt="Button Image"
                                />
                            </div>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100077064070855" target="_blank" rel="noopener noreferrer">
                            <div className="rounded-full bg-blue-500 cursor-pointer h-4 w-4 lg:h-6 lg:w-6">
                                <Image
                                    src={Facebook}
                                    alt="Button Image"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
