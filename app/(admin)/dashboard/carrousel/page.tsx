"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";


// interface DataItem {
//   id: number;
//   title: string;
//   deskripsi: string;
//   images: string;
// }

const Carrousel: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const router = usePathname().split("/");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:7000/banner");
            setData(response.data.data);
            // console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    console.log(data)


    const handleUpdate = (id: number) => {
        console.log(`Update item with id ${id}`);
        router.push(`/dashboard/carrousel/editCarousel/${id}`);
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await axios.delete(
                `http://localhost:7000/banner/${id}`
            );
            console.log(`Item with id ${id} has been deleted`, response.data);
            // Lakukan pembaruan data setelah menghapus
            fetchData();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to Carrousel</h1>
            <table className="min-w-max w-full table-auto">
            <thead>
                <tr className="bg-light border-b-4 text-dark-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Title</th>
                    <th className="py-3 px-6 text-center">Action</th>
                </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
                {data &&
                    data.map((item: any, index: number) => (
                        <tr
                            key={index}
                            className="border-b-2 border-dark-200 hover:bg-gray-100"
                        >
                            <td className="py-3 px-6 text-left">
                                <img
                                    src={item.banner}
                                    alt=""
                                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                                />
                            </td>
                            <td className="py-3 px-6 text-center">
                                <button
                                    className="bg-light hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mr-2"
                                    onClick={() => handleUpdate(item.id)}
                                >
                                    Update
                                </button>
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

export default Carrousel;
