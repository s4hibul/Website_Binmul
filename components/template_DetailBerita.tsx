// "use client"
// import React, { useEffect, useState } from "react";
// import 
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import NewsUpdate from "@/components/news_update";
// import axios from "axios";



// const Template_DetailBerita: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const [berita, setBerita] = useState<any>(null);

//     // useEffect(() => {
//     //     const fetchBeritaById = async () => {
//     //         try {
//     //             const response = await axios.get(`http://localhost:7000/berita&program/${id}`);
//     //             const data = response.data.data;
//     //             setBerita(data);
//     //         } catch (error) {
//     //             console.error('Error fetching berita by ID:', error);
//     //         }
//     //     };
//     //     fetchBeritaById();
//     // }, [id]);

//     useEffect(() => {
//         const fetchBeritaById = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:7000/berita&program/${id}`);
//                 const data = response.data.data;
//                 setBerita(data);
//             } catch (error) {
//                 console.error('Error fetching berita by ID:', error);
//             }
//         };
//         fetchBeritaById();
//     }, [id]);

//     if (!berita) {
//         return <div>Loading...</div>;
//     }

//     const { title, deskripsi, images1, images2, images3, userId, createdAt } = berita;

//     return (
//         <div>
//             <div className="border-b-4 lg:border-b-8 border-dark px-6 mx-12 lg:mx-24">
//                 <h1 className="pt-4 md:pt-6 lg:pt-8 font-bold text-base md:text-xl lg:text-4xl">
//                     {title}
//                 </h1>
//                 <div className="flex space-x-4 pt-2 md:pt-3 lg:pt-4 pb-4 md:pb-6 lg:pb-8 text-xs md:text-base lg:text-xl">
//                     <div className="flex space-x-1  items-center">
//                         <CalendarMonthIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-orange" />
//                         <h1>Tanggal</h1> {/* Ganti dengan data tanggal dari database */}
//                     </div>
//                     <div className="flex space-x-1 items-center">
//                         <EditNoteIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-orange" />
//                         <h1>Penulis</h1> {/* Ganti dengan data penulis dari database */}
//                     </div>
//                 </div>
//             </div>
//             {/* bagian isi */}
//             <div className="flex flex-auto flex-col mx-12 lg:mx-24 px-6 lg:flex-row space-y-12 lg:space-x-12 text-xs md:text-base lg:text-xl pt-4 md:pt-6 lg:pt-8">
//             <div className="lg:w-2/3">
//                 <img src={images1} alt="Image1" className="bg-cover bg-center pb-4" />
//                 {deskripsi &&
//                     deskripsi.map((paragraf: string, index: number) => (
//                         <div key={index}>
//                             <p className="text-left">{paragraf}</p>
//                             {(index + 1) % 2 === 0 && index !== deskripsi.length - 1 && (
//                                 <img
//                                     src={index === 1 ? images2 : images3}
//                                     alt={`Image${index + 2}`}
//                                     className="bg-cover bg-center pb-4"
//                                 />
//                             )}
//                         </div>
//                     ))}
//             </div>
//                 <div className="lg:w-1/3">
//                     <div className="bg-light p-6">
//                         <h1 className="font-bold text-base md:text-xl lg:text-2xl border-b-4 p-3">
//                             Berita Terbaru
//                         </h1>
//                         <div className="spac-x-4">
//                             {/* Tambahkan berita terbaru dari database */}
//                             <NewsUpdate
//                                 imageUrl="/carousel-images/image2.png"
//                                 title="Lorem ipsum dolor sit amet consectetur.aRutrum pellentesque ac tellus ullamcorper gravida nibh."
//                                 date="00 Jun 0000"
//                             />
//                             <NewsUpdate
//                                 imageUrl="/carousel-images/image2.png"
//                                 title="Lorem ipsum dolor sit amet consectetur.aRutrum pellentesque ac tellus ullamcorper gravida nibh."
//                                 date="00 Jun 0000"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Template_DetailBerita;

"use client"

import { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditNoteIcon from "@mui/icons-material/EditNote";
import NewsUpdate from "@/components/news_update";
import axios from "axios";
import { usePathname } from "next/navigation";

interface NewsItem {
    image1: string;
    title: string;
    updatedAt: string;
  }


const Template_DetailBerita: React.FC = () => {
    const router = usePathname().split("/");
    const id = router[router.length - 1]
    const [berita, setBerita] = useState<any>(null);
    const [latestnew, setlatestnew] = useState<any>(null);


    useEffect(() => {
        const fetchlatestnew = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/berita&program`);
                const latest = response.data.data;
                setlatestnew(latest);
                console.log(latest)
            } catch (error) {
                console.error("Error fetching latest news:", error);
            }
        };

        fetchlatestnew();
    }, []);

    useEffect(() => {
        const fetchBeritaById = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/berita&program/${id}`);
                const data = response.data.data;
                setBerita(data);
            } catch (error) {
                console.error('Error fetching berita by ID:', error);
            }
        };
        if (id) {
            fetchBeritaById();
        }
    }, [id]);

    if (!berita) {
        return <div>Loading...</div>;
    }

    console.log(berita)
    const { title, deskripsi, image1, image2, image3, userId, updatedAt } = berita;

    return (
        <div>
            <div className="border-b-4 lg:border-b-8 border-dark px-6 mx-12 lg:mx-24">
                <h1 className="pt-4 md:pt-6 lg:pt-8 font-bold text-base md:text-xl lg:text-4xl">
                    {title}
                </h1>
                <div className="flex space-x-4 pt-2 md:pt-3 lg:pt-4 pb-4 md:pb-6 lg:pb-8 text-xs md:text-base lg:text-xl">
                    <div className="flex space-x-1  items-center">
                        <CalendarMonthIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-orange" />
                        <h1>{new Date(updatedAt).toLocaleDateString()}</h1>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <EditNoteIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-orange" />
                        <h1>{userId}</h1>
                    </div>
                </div>
            </div>
            {/* bagian isi */}
            <div className="flex flex-auto flex-col mx-12 lg:mx-24 px-6 lg:flex-row space-y-12 lg:space-x-12 text-xs md:text-base lg:text-xl pt-4 md:pt-6 lg:pt-8">
                <div className="lg:w-2/3">
                    <img src={image1} alt="Image1" className="bg-cover bg-center pb-4" />
                    {deskripsi && (
                        <div>
                            <p>{deskripsi.slice(0)}</p>
                            <img src={image2} alt="Image2" className="bg-cover bg-center pb-4" />
                            <p>{deskripsi.slice(1)}</p>
                            <img src={image3} alt="Image3" className="bg-cover bg-center pb-4" />
                            <p>{deskripsi.slice(3)}</p>
                        </div>
                    )}
                </div>
                <div className="lg:w-1/3">
                    <div className="bg-light p-6">
                        <h1 className="font-bold text-base md:text-xl lg:text-2xl border-b-4 p-3">
                            Berita Terbaru
                        </h1>
                        <div className="spac-x-4">
                            {latestnew.slice(0, 3).map((newsItem) => (
                                <NewsUpdate
                                    imageUrl={newsItem.image1}
                                    title={newsItem.title}
                                    date={new Date(newsItem.updatedAt).toLocaleDateString()}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template_DetailBerita;
