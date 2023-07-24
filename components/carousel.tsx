import React, { useState, useEffect } from "react";

const images = ["image1.png", "image2.png"];

const Carousel: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 6000);

        return () => {
        clearInterval(interval);
        };
    }, []);

    return (
        <div className="relative bg-tosca">
        {images.map((image, index) => (
            <img
            key={index}
            src={`/carousel-images/${image}`}
            alt={`Image ${index + 1}`}
            className={`absolute top-0 left-0 transition-opacity ${
                index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
        ))}
        </div>
    );
};

export default Carousel;
