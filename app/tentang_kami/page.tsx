import React from 'react'
import Navbar_about from '@/components/navbar_about'

export default function about() {
    return (
        <div className="flex-col min-h-screen">
            <div className="relative z-40">
                <img src="/images/About Page bg.png" className="object-cover bg-center h-full w-full" />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl md:text-4xl lg:text-5xl z-50">
                    Tentang Kami
                </h1>
            </div>

        
            <Navbar_about />
            <div className='px-6 mx-12 lg:mx-24 mb-12 lg:mb-24'>
                <div>
                    <h1 className='mt-12 lg:mt-24 text-orange font-bold text-base md:text-xl lg:text-3xl '>Tentang Kami</h1>
                    <p className='pt-4 text-justify'>
                    Yayasan Bina Mulia (Yabimu) adalah suatu badan hukum dalam bentuk yayasan sosial
kemasyarakatan yang didirikan sebagai upaya membantu anak-anak yatim, fakir miskin,
dhuafa dan orang-orang yang membutuhkan. Beberapa program lain yang dikembangkan
adalah peningkatan kesejahteraan rumah ibadah, program lingkungan hidup, program
kesehatan, pemberdayaan ekonomi, penyaluran zakat, renovasi sekolah, klinik, fasilitas
umum dan wakaf infrastruktur sosial di Indonesia dan mancanegara melalui penggalangan
donasi publik dan/atau pengelolaan dana sosial pelaku usaha. Adapun kegiatan insidentil
yang lain adalah bantuan bagi para korban bencana kemanusiaan (bencana alam dan
bencana sosial). Yayasan Bina Mulia berpusat di Bojonegoro dan terdaftar secara legal
dengan pengesahan Menteri Hukum dan HAM No. AHU-AH.01.06-0040059 Tahun 2022.
Yayasan Bina Mulia Balikpapan Merupakan bagian manajemen operasional yayasan Bina
Mulia yang berdomisili di Balikpapan dengan Nomor SK:004/A/YBM/VI/2023. Program yang
dilaksanakan berdasar atas pilah yayasan yakni Keagamaan, kesehatan, Kebencanaan,
Pendidikan dan Sosial yang biasa disingkat dengan Komitmen K3-PS. 
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row space-y-12 lg:space-x-12'>
                    <div className='w-1/5'>
                        <h1 className='pt-10 font-bold'>Kontak Kami :</h1>
                        <ul className='ul_custom'>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.6882353117629!2d116.88833729881972!3d-1.1884017962137896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14977e1865a49%3A0xf9e5c3900639868b!2sYayasan%20Binamulia%20Balikpapan!5e0!3m2!1sid!2sid!4v1690169137387!5m2!1sid!2sid"
                                // className="w-full h-full"
                                width="100%" height="450"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer">
                            </iframe>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}