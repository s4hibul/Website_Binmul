"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

interface DataItem {
    id: number;
    title: string;
}

const CareerTable: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:7000/career");
            if (Array.isArray(response.data.data)) {
                setData(response.data.data);
                //   console.log(response.data.data);
            } else {
                console.error("Data received is not an array:", response.data.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };



    console.log(data)

    const handleUpdate = (id: number) => {
        console.log(`Update item with id ${id}`);
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await axios.delete(
                `http://localhost:7000/career/${id}`
            );
            console.log(`Item with id ${id} has been deleted`, response.data);
            fetchData();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to Career</h1>
            <Link href={`/dashboard/carer/addCareer`} passHref>
                                    <button className="bg-orange hover:bg-blue-700 mb-6 text-white font-bold py-2 px-4 rounded">
                                        Tambah Loker
                                    </button>
                                </Link>
            <table className="min-w-max w-full table-auto">
                <thead>
                    <tr className="bg-light text-dark-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Title</th>
                        <th className="py-3 px-6 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            className="border-b border-dark-200 hover:bg-gray-100"
                        >
                            <td className="py-3 px-6 text-left">{item.title}</td>
                            <td className="py-3 px-6 text-center">
                                <Link href={`/dashboard/carer/editCareer/${item.id}`} passHref>
                                    <button className="bg-light hover:bg-blue-700 text-black font-bold py-2 px-4 mr-2 rounded">
                                        Update
                                    </button>
                                </Link>
                                <button
                                    className="bg-dark hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CareerTable;
