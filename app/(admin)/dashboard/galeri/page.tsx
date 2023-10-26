"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

interface DataItem {
    id: number;
    gambar1: string;
}

const GaleriTable: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:7000/galeri");
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

    console.log(data);

    const handleUpdate = (id: number) => {
        console.log(`Update item with id ${id}`);
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await axios.delete(`http://localhost:7000/galeri/${id}`);
            console.log(`Item with id ${id} has been deleted`, response.data);
            fetchData();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to Galeri</h1>
            <Link href={`/dashboard/galeri/addGaleri`} passHref>
                <button className="bg-orange hover:bg-blue-700 mb-6 text-white font-bold py-2 px-4 rounded">
                    Tambah Galeri
                </button>
            </Link>
            <table className="min-w-max w-full table-auto">
                <thead>
                    <tr className="bg-light border-b-4 text-dark-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Gambar</th>
                        <th className="py-3 px-6 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="border-b-2 text-gray-600 text-sm font-light">
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            className="border-b border-dark-200 hover:bg-gray-100"
                        >
                            <td className="py-3 px-6 text-left">
                                <img
                                    src={item.gambar1}
                                    alt=""
                                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                                />
                            </td>
                            <td className="py-3 px-6 text-center">
                                <Link href={`/dashboard/galeri/editGaleri/${item.id}`} passHref>
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

export default GaleriTable;
