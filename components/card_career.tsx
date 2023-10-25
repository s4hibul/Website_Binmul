"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CareerData {
    photo: string;
    title: string;
    deadline: string;
}

const CardCareer = () => {
    const [careers, setCareers] = useState<CareerData[]>([]);

    useEffect(() => {
        getCareers();
    }, []);

    const getCareers = async () => {
        try {
            const response = await axios.get('http://localhost:7000/career');
            const careerData = response.data.data; // Gunakan response.data.data karena data berada di dalam properti "data"
            
            if (!Array.isArray(careerData)) {
                setCareers([]);
            } else {
                const simplifiedCareers: CareerData[] = careerData.map((career: any) => ({
                    photo: career.photo,
                    title: career.title,
                    deadline: formatDatetime(career.deadline),
                }));
                
                setCareers(simplifiedCareers);
                console.log(simplifiedCareers);
            }
        } catch (error) {
            console.error('Error fetching careers:', error);
        }
    };

    const formatDatetime = (datetime: string): string => {
        const dateObj = new Date(datetime);
        return `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
    };

    return (
        <div className="flex flex-col items-center">
            {careers.map((career) => (
                <div key={career.title} className="w-full md:w-2/3 bg-light flex flex-col space-y-2 p-3 rounded-xl shadow-lg mb-4">
                    <div className="max-w-1/3 grid place-items-center">
                        <img className="rounded-xl" src={career.photo} alt={career.title} />
                    </div>
                    <div className="w-full flex flex-col space-y-2 p-3">
                        <h3 className="font-black text-gray-800 md:text-3xl text-xl">{career.title}</h3>
                        <p className="text-sm font-boldk pb-4 text-gray-800">{career.deadline}</p>
                        <button className="bg-orange text-item  font-bold py-2 px-4 rounded mt-4">
                            Selengkapnya
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardCareer;
