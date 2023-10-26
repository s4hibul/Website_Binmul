"use client"
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

interface Akun {
    id: number;
    nama: string;
    email: string;
    }

    const AkunTable = () => {
    const [akunList, setAkunList] = useState<Akun[]>([]);
    const [editedAkun, setEditedAkun] = useState<Akun | null>(null);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);

    useEffect(() => {
        // Mengambil data akun dari server menggunakan Axios
        Axios.get('http://localhost:7000/user') // Ganti URL_API_ANDA dan endpoint sesuai dengan API Anda
        .then((response) => {
            setAkunList(response.data); // Menyimpan data akun ke dalam state
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const handleOpenEditForm = (akun: Akun) => {
        setEditedAkun(akun);
        setIsEditFormOpen(true);
    };

    const handleCloseEditForm = () => {
        setEditedAkun(null);
        setIsEditFormOpen(false);
    };

    const handleUpdateAkun = () => {
        if (editedAkun) {
        // Logika untuk menyimpan perubahan ke server (menggunakan Axios)
        Axios.put(`http://localhost:7000/PUT/role/${editedAkun.id}`, editedAkun)
            .then((response) => {
            // Perbarui data akun setelah berhasil disimpan ke server
            setAkunList((prevAkunList) =>
                prevAkunList.map((akun) =>
                akun.id === editedAkun.id ? editedAkun : akun
                )
            );
            handleCloseEditForm();
            })
            .catch((error) => {
            console.error('Error updating akun:', error);
            });
        }
    };

    const handleDeleteAkun = (id: number) => {
        // Logika untuk menghapus akun dari database menggunakan Axios
        Axios.delete(`http://localhost:7000/DELETE/role/${id}`)
        .then((response) => {
            // Hapus akun dari state setelah berhasil dihapus dari database
            setAkunList(akunList.filter((akun) => akun.id !== id));
        })
        .catch((error) => {
            console.error('Error deleting akun:', error);
        });
    };

    return (
        <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome to Daftar Akun</h1>
        {isEditFormOpen && editedAkun && (
            <div className="bg-white p-4 border">
            <h2 className="text-xl font-semibold mb-2">Edit Akun</h2>
            <form>
                <input
                type="text"
                placeholder="Nama"
                value={editedAkun.nama}
                onChange={(e) =>
                    setEditedAkun({ ...editedAkun, nama: e.target.value })
                }
                />
                <input
                type="email"
                placeholder="Email"
                value={editedAkun.email}
                onChange={(e) =>
                    setEditedAkun({ ...editedAkun, email: e.target.value })
                }
                />
                <button
                className="bg-blue-500 text-white py-1 px-2 rounded"
                onClick={(e) => {
                    e.preventDefault();
                    handleUpdateAkun();
                }}
                >
                Simpan
                </button>
                <button
                className="bg-gray-300 text-gray-700 py-1 px-2 rounded ml-2"
                onClick={() => handleCloseEditForm()}
                >
                Batal
                </button>
            </form>
            </div>
        )}
        <table className="min-w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-100">
                <th className="border p-2">number</th>
                <th className="border p-2">Nama</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Aksi</th>
            </tr>
            </thead>
            <tbody>
            {akunList.map((akun) => (
                <tr key={akun.id}>
                <td className="border p-2">{akun.id}</td>
                <td className="border p-2">{akun.nama}</td>
                <td className="border p-2">{akun.email}</td>
                <td className="border p-2">
                    <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2"
                    onClick={() => handleOpenEditForm(akun)}
                    >
                    Edit
                    </button>
                    <button
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                    onClick={() => handleDeleteAkun(akun.id)}
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

export default AkunTable;
