import React from 'react';
import Navbar_about from '@/components/navbar_about';

function visi_misi() {
    return (
        <div className="flex-col min-h-screen">
            <div className='relative'>
                <img src='/images/About Page bg.png ' className='object-cover bg-center h-full w-full bg-gradient-to-b from-black' />  
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl md:text-4xl lg:text-5xl  '>Tentang Kami</h1>
            </div>
            <Navbar_about />
            <div className='px-6 mx-12 lg:mx-24 mb-12 lg:mb-24'>
                <div>
                <h1 className='mt-12 lg:mt-24 text-orange font-bold text-base md:text-xl lg:text-3xl'>
                    Visi Yayasan
                </h1>
                <p className='pt-4 text-justify text-xs md:text-base lg:text-xl'>
                    Membangun sumberdaya manusia yang unggul dalam intelektualitas dan moralitas serta
                    berdaya saing global berdasarkan iman dan taqwa.
                </p>

                <h1 className='mt-12 lg:mt-24 text-orange font-bold text-base md:text-xl lg:text-3xl'>
                    Misi Yayasan
                </h1>
                    <div className='pt-4 pl-4 text-justify text-xs md:text-base lg:text-xl'>
                        <ol className='list-decimal space-y-6'>
                            <li>
                                Berproses secara maksimal dalam membina generasi muda menuju keunggulan
                                sumberdaya berdasar iman dan taqwa.
                            </li>
                            <li>
                                Berkarya dengan semangat jiwa dan raga untuk membangun masyarakat yang berkualitas dalam keilmuan dan berakhlaq mulia.
                            </li>
                            <li>
                                Bergerak dengan semangat kekeluargaan dalam meningkatkan peran aktif masyarakat menuju kemandirian dan kesejahteraan bangsa.
                            </li>
                        </ol>
                    </div>
                    <h1 className='mt-12 lg:mt-24 font-bold text-base md:text-lg lg:text-xl'>
                    Kegiatan
                    </h1>
                    <div className='text-xs md:text-base lg:text-xl'>
                        <p>
                        Kegiatan yang telah dilaksanakan yayasan Bina Mulia dalam kurun waktu 1 (satu) tahun
                        terakhir diantaranya sebagai berikut
                        </p>
                        <ol className='list-decimal pl-4 pt-4 space-y-6'>
                            <li>Gebyar Ramadhan dan Buka Bersama</li>
                            <span>Gebyar ramadhan merupakah salah satu program yayasan Bina Mulia yang diselenggarakan dalam rangka menghidupkan dan memeriahkan Ramadhan 1443 H/2022 M. Kegiatan ini dilaksanakan dalam bentuk kegiatan Kajian, Santunan kepada anak yatim, dan buka bersama. Sasaran kegiatan ini adalah masyarakat dan anak yatim di sekitar Masjid Baitul Muttaqin, KM 14.</span>
                            <li>Diklatsar Korsa dan Bina Mulia Mengabdi 1</li>
                            <span>Pendidikan dan Pelatihan Dasar Korsa merupakan kegiatan pembentukan dan pengembangan organisasi KORSA agar berkembang dan memberikan dampak nyata di masyarakat. Dalam kegiatan ini, relawan dibekali berbagai keterampilan dasar sebagai seorang relawan, terutama dalam bidang kebencanaan. Materi yang disampaikan antara lain, First Aids, Navigasi Darat, SAR Air, dan Dasar Pemadam Kebakaran. Dalam kegiatan ini, relawan juga diajak untuk terjun langsung ke masyarakat dengan terlibat dalam perawatan dan renovasi masjid di sekitar lokasi pelatihan.</span>
                            <li>Jum’at Berkah Yayasan Bina Mulia</li>
                            <span>Kegiatan ini merupakan kegiatan pembagian makan gratis untuk para pejuang keluarga. Kegiatan ini dilaksanakan setiap 2 (dua) bulan sekali.</span>
                            <li>Bina Mulia Mengabdi 2</li>
                            <span>Bina Mulia MEngabdi 2 merupakan kegiatan pengabdian dengan sasaran lansia produktif di kelurahan Teritip. Dalam kegiatan ini, relawan didistribusikan untuk membersamai dan membantu kegiatan lansia. </span>
                            <li>Cek Kesehatan Gratis</li>
                            <span>Kegiatan ini merupakan salah satu program yang dilaksanakan sebagai salah satu bentuk kepedulian terhadap kesehatan. </span>
                            <li>Upgrading Korsa</li>
                            <span>Kegiatan ini merupakan kegiatan peningkatan pengetahuan dan kemampuan relawan Korsa dalam bidang kerelawanan. Kegiatan ini juga dilaksanakan dalam rangka silaturahmi antar sesama anggota, pengurus, pembina yayasan serta komunitas sosial eksternal</span>
                            <li>Bina Mulia Mengabdi 3</li>
                            <span>Bina Mulia Mengabdi 3 merupakan kegiatan pengabdian dengan sasaran lansia produktif di kelurahan Lamaru. Dalam kegiatan ini, relawan didistribusikan untuk membersamai dan membantu kegiatan lansia.</span>
                            <li>Festival Ramadhan</li>
                            <span>Festival Ramadhan merupakan kegiatan yang dilaksankan dalam rangka menghidupkan dan memeriahkan bulan ramadhan. Kegiatan ini dilaksanakan dalam bentuk kegiatan kajian, belanja bersama anak yatim, dan buka bersama. Kegiatan ini dilaksanakan dalam rangka agar anak-anak yatim merasakan senangnya memilih dan membeli baju lebaran mereka.</span>
                            <li className='font-italic'>Motivtion class</li>
                            <span>Kegiatan ini dilaksanakan dalam rangka meningkatkan semangat adik-adik di kawasan pemulung tumaritis untuk belajar dan mengejar cita-cita</span>
                            <li>Qurban Mulia</li>
                            <span>Qurban Mulia merupakan kegiatan pemotongan dan pendistribusian daging qurban ke pelosok desa.</span>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default visi_misi;
