import React from "react";

interface NewsUpdateProps {
    imageUrl: string;
    title: string;
    date: string;
}

const NewsUpdate: React.FC<NewsUpdateProps> = ({ imageUrl, title, date }) => {
    return (
        <div className="m-4">
        <img src={imageUrl} alt="News Image" className="object-cover pb-2" />
        <h2 className="font-bold text-xs md:text-base lg:text-xl">
            {title}
        </h2>
        <p className="italic text-slate-100   ">{date}</p>
        </div>
    );
};

export default NewsUpdate;
