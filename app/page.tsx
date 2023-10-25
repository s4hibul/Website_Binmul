// import React from "react";
// // import Carousel from "@/components/carousel";
// import Navbar from "@/components/navbar";

// const Beranda: React.FC = () => {
//     return (
//         <div className="container">
//             <Navbar />
//             {/* <Carousel /> */}
//         </div>
//     );
// };

// export default Beranda;

"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function HomePage() {
    const router = useRouter();

    useEffect(() => {
        router.push('/beranda');
    }, [router]);
}


export default HomePage;