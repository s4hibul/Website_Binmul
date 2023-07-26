import React from 'react';

interface CardNewsProps {
    imageUrl: string;
    heading: string;
    beritaUrl: string;
}

function CardNews({ imageUrl, heading, beritaUrl }: CardNewsProps) {
    return (
        <div className="bg-light sm:w-full rounded-lg drop-shadow-lg">
            <img className="rounded-t-lg" src={imageUrl} alt="" />
            <div className="p-5">
                <a href="#">
                    <h5 className="text-xs md:text-base lg:text-lg text-left font-bold tracking-tight text-gray-900 pb-4 ">{heading}</h5>
                </a>
                <a href={beritaUrl} className="inline-flex  p-2 text-sm font-medium bg-orange text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Selengkapnya
                </a>
            </div>
        </div>
    );
}

export default CardNews;
