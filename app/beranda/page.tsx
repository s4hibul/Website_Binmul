import React from "react";
import Carousel from "@/components/carousel";
import LatestNews from "@/components/latest_news";
import Galeri from "@/components/homepage_galeri";

const Beranda: React.FC = () => {
    return (
        <div className="container">
            <section>
                <Carousel /> 
            </section>

            <section id="about-us" className="about_area bg-light relative">
                <div className="container py-16 px-8">
                    <div className="lg:flex">
                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <div className="about_image my-4">
                                <div className="image lg:pr-13">
                                    <img src="/images/Logo_Binamulia_BPN.png" alt="no image" className="lg:w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center p-8 justify-center">
                            <div className="my-4">
                                <div className="section_title font-extrabold text-3xl md:text-xl lg:text-4xl text-orange pb-4">
                                    <h4>Yayasan Bina Mulia Balikpapan</h4>
                                </div>
                                <div>
                                    <p className="paragraph_section text-xl md:text-lg lg:text-3xl">
                                        Bina Mulia Balikpapan adalah suatu badan hukum dalam bentuk yayasan sosial kemasyarakatan yang didirikan sebagai upaya membantu anak-anak yatim, fakir miskin, dhuafa, dan orang-orang yang membutuhkan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" className="work_area my-20">
                <div className="container mx-auto">
                    <div className="text-center font-extrabold text-3xl text-orange pb-6 mb-4">
                        <h5 className="sub_title">Berita dan Program Kami</h5>
                    </div>
                </div>
                <div className="container-fluid mx-auto">
                    <div className="work_wrapper relative">
                        <div className="flex justify-center flex-row">
                            <LatestNews currentPage={1} /> {/* Menampilkan komponen LatestNews */}
                        </div>
                        <div className="flex items-center justify-center mt-12 w-screen">
                            <a
                                href={`/berita_program`}
                                className='inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-orange rounded-lg text-center'
                            >
                                Lainnya
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light my-auto py-16">
                {/* Konten untuk Bagian Ketiga dengan Carousel */}
                <h1 className="text-center text-3xl font-extrabold text-orange pb-6 mb-4">Aksi Kami</h1>
                <div>
                    <Galeri />
                </div>
            </section>
        </div>
    );
};

export default Beranda;

