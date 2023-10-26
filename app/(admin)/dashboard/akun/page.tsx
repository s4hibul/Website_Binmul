"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { usePathname } from "next/navigation";
import Link from 'next/link';


interface Akun {
    id: number;
    name: string;
    email: string;
}

const AkunTable = () => {
    const [akunList, setAkunList] = useState<Akun[]>([]);
    const router = usePathname().split("/");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:7000/user");
            if (Array.isArray(response.data.data)) {
                console.log("Data received is an array:", response.data.data);
                setAkunList(response.data.data);
            } else {
                console.error("Data received is not an array:", response.data.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };



    // console.log(akunList)
    const handleUpdate = (id: number) => {
        console.log(`Update item with id ${id}`);
        router.push(`/dashboard/akun/editAkun/${id}`);
    };


    const handleDelete = async (id: number) => {
        try {
            const response = await axios.delete(`http://localhost:7000/user/${id}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Welcome to Daftar Akun</h1>
            <Link href={`/dashboard/akun/addAkun`}>
                <button className="bg-orange hover:bg-blue-700 mb-6 text-white font-bold py-2 px-4 rounded">
                    Tambah Akun
                </button>
            </Link>
            <table className="min-w-full ">
                <thead>
                    <tr className="bg-light border-b-2 my-4">
                        <th className="p-2">number</th>
                        <th className="p-2">Nama</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {akunList.map((akun, index) => (
                        <tr key={index} className='border-b-2 my-4'>
                            <td className="p-2 text-center">{akun.id}</td>
                            <td className="p-2 text-center pr-4">{akun.name}</td>
                            <td className="p-2 text-center px-6">{akun.email}</td>
                            <td className="p-2 text-center">
                                <div style={{ textAlign: "center" }}>
                                    <button
                                        className="bg-light hover:bg-blue-600 text-blue py-1 px-2 rounded mr-2"
                                        onClick={() => handleUpdate(akun.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-dark hover:bg-red-600 text-white py-1 px-2 rounded"
                                        onClick={() => handleDelete(akun.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AkunTable;
