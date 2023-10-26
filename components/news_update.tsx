import React from "react";
import Link from 'next/link';

interface NewsUpdateProps {
    imageUrl: string;
    title: string;
    date: string;
    id: number;
}

const NewsUpdate: React.FC<NewsUpdateProps> = ({ imageUrl, title, date, id }) => {
    return (
        <Link href={`/berita_program/detail_berita/${id}`}>
            <div className="mt-6">
                <img src={imageUrl} alt="News Image" className="object-cover pb-2" />
                <h2 className="font-bold text-xs md:text-base lg:text-xl">
                    {title}
                </h2>
                <p className="italic text-slate-100   ">{date}</p>
            </div>
        </Link>
    );
};

export default NewsUpdate;
