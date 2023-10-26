// "use client"
// import React, { useState } from 'react';

// const Zakat_maalForm = () => {
//     return (
//         <div className='flex pt-8 lg:space-x-10 md:space-x-5 flex-col md:flex-row'>
//             <div className='max-w-sm'>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Harga Emas</label>
//                     <input id="harga_emas"
//                         className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Harta Tabungan / Deposito</label>
//                     <input id="nilai_tabungan/depo"
//                         className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Harta Rumah, Properti, Kendaraan</label>
//                     <input id="nilai_rumahPropKendaraan"
//                         className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900 w-40">Nilai Harta Emas, Perak</label>
//                     <input id="Nilai_emasPerak"
//                         className="shadow-sm bg-red-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-80 p-2.5" required />
//                 </div>
//                 <button className="mb-6 text-white bg-orange hover:border-tosca focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centera">Hitung Zakat</button>
//             </div>
//             <div className="flex-grow p-6 border bg-light border-dark rounded-lg shadow">
//                 <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Zakat Anda</h1>
//                 <h2 className='font-medium text-base'>Nisab: </h2>
//                 <h2 className=' font-medium text-base pb-4'>Nisab Zakat Anda: </h2>
//                 <h1 className='font-bold text-orange text-center  '>Anda Wajib Zakat</h1>
//                 <h1 className='font-bold text-orange text-center'>Anda Tidak Wajib Zakat</h1>
//             </div>
//         </div>
//     );
// };

// const Zakat_emasForm = () => {
//     return (
//         <div className='flex pt-8 lg:space-x-10 md:space-x-5 flex-col md:flex-row'>
//             <div className='max-w-sm'>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Harga Emas</label>
//                     <input id="harga_emas"
//                         className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Berat Emas Yang Dimiiliki selama 1 Tahun (gram)</label>
//                     <input id="berat_emas"
//                         className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <button className="mb-6 text-white bg-orange hover:border-tosca focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centera">Hitung Zakat</button>
//             </div>
//             <div className="flex-grow p-6 border bg-light border-dark rounded-lg shadow">
//                 <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Zakat Anda</h1>
//                 <h2 className='font-medium text-base'>Nisab: 85 Gram Emas </h2>
//                 <h2 className=' font-medium text-base pb-4'>Nilai Zakat Anda: </h2>
//                 <h1 className='font-bold text-orange text-center  '>Anda Wajib Zakat</h1>
//                 <h1 className='font-bold text-orange text-center'>Anda Tidak Wajib Zakat</h1>
//             </div>
//         </div>
//     );
// };

// const Zakat_profesiForm = () => {
//     return (
//         <div className='flex pt-8 lg:space-x-10 md:space-x-5 flex-col md:flex-row '>
//             <div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Harga Beras</label>
//                     <input id="harga_beras" className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Penghasilan Perbulan / Deposito</label>
//                     <input id="nilai_penghasilanPerbulan" className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Pendapatan Lain</label>
//                     <input id="Pendapatan Lain" className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Pengeluaran Perbulan dan Hutang</label>
//                     <input id="Nilai_pengeluaranDanHutang" className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <button className="mb-6 text-white bg-orange hover:border-tosca focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centera">Hitung Zakat</button>
//             </div>
//             <div className="flex-grow p-6 border bg-light border-dark rounded-lg shadow">
//                 <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Zakat Anda</h1>
//                 <h2 className='font-medium text-base'>Nisab: </h2>
//                 <h2 className=' font-medium text-base pb-4'>Nisab Zakat Anda: </h2>
//                 <h1 className='font-bold text-orange text-center  '>Anda Wajib Zakat</h1>
//                 <h1 className='font-bold text-orange text-center'>Anda Tidak Wajib Zakat</h1>
//             </div>
//         </div>
//     );
// };

// const Zakat_perdaganganForm = () => {
//     return (
//         <div className='flex pt-8 lg:space-x-10 md:space-x-5 flex-col md:flex-row '>
//             <div className='md:max-w-xm'>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Harga Emas</label>
//                     <input id="Harga_emas" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Modal</label>
//                     <input id="nilai_modal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Keuntungan</label>
//                     <input id="nilai_keuntungan" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Hutang</label>
//                     <input id="nilai_hutang" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Kerugian</label>
//                     <input id="nilai_kerugian" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
//                 </div>
//                 <button className="mb-6 text-white bg-orange hover:border-tosca focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centera">Hitung Zakat</button>
//             </div>
//             <div className="flex-grow p-6 border bg-light border-dark rounded-lg shadow">
//                 <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Zakat Anda</h1>
//                 <h2 className='font-medium text-base'>Nisab: </h2>
//                 <h2 className=' font-medium text-base pb-4'>Nisab Zakat Anda: </h2>
//                 <h1 className='font-bold text-orange text-center  '>Anda Wajib Zakat</h1>
//                 <h1 className='font-bold text-orange text-center'>Anda Tidak Wajib Zakat</h1>
//             </div>
//         </div>
//     );
// };


// const jenis_zakat = () => {
//     const [selectedOption, setSelectedOption] = useState('');

//     const handleSelectChange = (event) => {
//         setSelectedOption(event.target.value);
//     };

//     return (
//         <div className=' mx-8 mt-6 md:mx-16 md:pt-12 lg:mx-28 lg:pt-20 mb-20'>
//             {/* <div className="inline-block relative">
//                 <select
//                 className="block appearance-none bg-light border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
//                 value={selectedOption}
//                 onChange={handleOptionChange}
//                 >
//                 <option value="">Pilih Jenis Zakat</option>
//                 <option value="option1">Zakat Maal</option>
//                 <option value="option2">Zakat Profesi</option>
//                 <option value="option3">Zakat Emas</option>
//                 <option value="option4">Zakat  Perdagangan</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                     <svg
//                         className="fill-current h-4 w-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                     >
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                     </svg>
//                 </div>
//             </div> */}
//             <label htmlFor="pilih_zakat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                 Pilih Jenis Zakat
//             </label>
//             <select
//                 id="pilih_zakat"
//                 value={selectedOption}
//                 onChange={handleSelectChange}
//                 className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
//             >
//                 <option value="">Jenis Zakat</option>
//                 <option value="option1">Zakat Maal</option>
//                 <option value="option2">Zakat Profesi</option>
//                 <option value="option3">Zakat Emas</option>
//                 <option value="option4">Zakat Perdagangan</option>
//             </select>

//             {/* Menampilkan form sesuai pilihan yang dipilih */}
//             {selectedOption === 'option1' && <Zakat_maalForm />}
//             {selectedOption === 'option2' && <Zakat_profesiForm />}
//             {selectedOption === 'option3' && <Zakat_emasForm />}
//             {selectedOption === 'option4' && <Zakat_perdaganganForm />}
//         </div>
//     );
// };

// export default jenis_zakat;

"use client"
import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const formatRupiah = (number: number | null) => {
    if (!number) return "";
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
};

const ZakatMaalForm = () => {
    const [hargaEmas, setHargaEmas] = useState<number | null>(null);
    const [nilaiTabungan, setNilaiTabungan] = useState<number | null>(null);
    const [nilaiRumahPropKendaraan, setNilaiRumahPropKendaraan] = useState<number | null>(null);
    const [nilaiEmasPerak, setNilaiEmasPerak] = useState<number | null>(null);

    const handleHitungZakat = () => {
        // Implement your calculation logic here
    };

    return (
        <div className='flex place-items-start justify-center pt-8 lg:space-x-10 md:space-x-5 flex-col md:flex-row'>
            <div className='max-w-sm'>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Harga Emas</label>
                    <input id="harga_emas"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Harta Tabungan / Deposito</label>
                    <input id="nilai_tabungan/depo"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Harta Rumah, Properti, Kendaraan</label>
                    <input id="nilai_rumahPropKendaraan"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 w-40">Nilai Harta Emas, Perak</label>
                    <input id="Nilai_emasPerak"
                        className="shadow-sm bg-red-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-80 p-2.5" required />
                </div>
                <button className="mb-6 w-80 text-white bg-orange hover:border-tosca focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centera">Hitung Zakat</button>
            </div>
            <div className="flex-grow max-w-2xl max-h-sm p-6 items-center bg-light rounded-lg shadow">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Zakat Anda</h1>
                <h2 className='font-medium text-base'>Nisab: </h2>
                <h2 className=' font-medium text-base pb-4'>Nisab Zakat Anda: </h2>
                <h1 className='font-bold text-orange text-center  '>Anda Wajib Zakat</h1>
                <h1 className='font-bold text-orange text-center'>Anda Tidak Wajib Zakat</h1>
            </div>
        </div>
    );
};

const ZakatEmasForm = () => {
    const [hargaEmas, setHargaEmas] = useState<number | null>(null);
    const [beratEmas, setBeratEmas] = useState<number | null>(null);
    const [nilaiZakat, setNilaiZakat] = useState<number | null>(null);

    const handleHitungZakat = () => {
        if (hargaEmas && beratEmas) {
            const nilaiHargaEmas = hargaEmas * beratEmas;
            const nilaiZakatEmas = (nilaiHargaEmas * 2.5) / 100;
            setNilaiZakat(nilaiZakatEmas);
        }
    };

    return (
        <div className="flex justify-center pt-8 lg:space-x-10 md:space-x-5 flex-col md:flex-row">
            <div className="max-w-sm">
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Harga Emas
                    </label>
                    <input id="harga_emas"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 "
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Berat Emas Yang Dimiliki selama 1 Tahun (gram)
                    </label>
                    <input
                        type="number"
                        id="beratEmas"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-80 p-2.5"
                        onChange={(e) => setBeratEmas(parseFloat(e.target.value))}
                        required
                    />
                </div>
                <button
                    className="mb-6 w-80 text-white bg-orange hover:bg-tosca focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={handleHitungZakat}
                >
                    Hitung Zakat
                </button>
            </div>
            <div className="flex-grow max-w-2xl max-h-sm p-6 items-center bg-light rounded-lg shadow">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                    Zakat Anda
                </h1>
                <h2 className="font-medium text-base">Nisab: 85 Gram Emas </h2>
                <h2 className="font-medium text-base pb-4">
                    Nilai Zakat Anda: {formatRupiah(nilaiZakat)}
                </h2>
                <h1 className="font-bold text-orange text-center">
                    {nilaiZakat ? (nilaiZakat > 85 ? "Anda Wajib Zakat" : "Anda Tidak Wajib Zakat") : ""}
                </h1>
            </div>
        </div>
    );
};

const ZakatProfesiForm = () => {
    const [hargaBeras, setHargaBeras] = useState<number | null>(null);
    const [nilaiPenghasilanPerbulan, setNilaiPenghasilanPerbulan] = useState<number | null>(null);
    const [pendapatanLain, setPendapatanLain] = useState<number | null>(null);
    const [nilaiPengeluaranDanHutang, setNilaiPengeluaranDanHutang] = useState<number | null>(null);

    const handleHitungZakat = () => {
        // Implement your calculation logic here
    };

    return (
        <div className='flex place-items-start justify-center pt-8 lg:space-x-10 md:space-x-5 flex-col md:flex-row '>
            <div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Harga Beras</label>
                    <input id="harga_beras" className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Penghasilan Perbulan / Deposito</label>
                    <input id="nilai_penghasilanPerbulan" className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Pendapatan Lain</label>
                    <input id="Pendapatan Lain" className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Pengeluaran Perbulan dan Hutang</label>
                    <input id="Nilai_pengeluaranDanHutang" className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <button className="mb-6 w-80 text-white bg-orange hover:border-tosca focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centera">Hitung Zakat</button>
            </div>
            <div className="flex-grow max-w-2xl max-h-sm p-6 items-center bg-light rounded-lg shadow">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Zakat Anda</h1>
                <h2 className='font-medium text-base'>Nisab: </h2>
                <h2 className=' font-medium text-base pb-4'>Nisab Zakat Anda: </h2>
                <h1 className='font-bold text-orange text-center  '>Anda Wajib Zakat</h1>
                <h1 className='font-bold text-orange text-center'>Anda Tidak Wajib Zakat</h1>
            </div>
        </div>
    );
};

const ZakatPerdaganganForm = () => {
    const [hargaEmas, setHargaEmas] = useState<number | null>(null);
    const [nilaiModal, setNilaiModal] = useState<number | null>(null);
    const [nilaiKeuntungan, setNilaiKeuntungan] = useState<number | null>(null);
    const [nilaiHutang, setNilaiHutang] = useState<number | null>(null);
    const [nilaiKerugian, setNilaiKerugian] = useState<number | null>(null);

    const handleHitungZakat = () => {
        // Implement your calculation logic here
    };

    return (
        <div className='flex place-items-start justify-center pt-8 lg:space-x-10 md:space-x-5 flex-col md:flex-row '>
            <div className='md:max-w-xm'>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Harga Emas</label>
                    <input id="Harga_emas" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Modal</label>
                    <input id="nilai_modal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Keuntungan</label>
                    <input id="nilai_keuntungan" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Hutang</label>
                    <input id="nilai_hutang" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Kerugian</label>
                    <input id="nilai_kerugian" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required />
                </div>
                <button className="mb-6 w-80 text-white bg-orange hover:border-tosca focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centera">Hitung Zakat</button>
            </div>
            <div className="flex-grow max-w-2xl max-h-sm p-6 items-center bg-light rounded-lg shadow">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Zakat Anda</h1>
                <h2 className='font-medium text-base'>Nisab: </h2>
                <h2 className=' font-medium text-base pb-4'>Nisab Zakat Anda: </h2>
                <h1 className='font-bold text-orange text-center  '>Anda Wajib Zakat</h1>
                <h1 className='font-bold text-orange text-center'>Anda Tidak Wajib Zakat</h1>
            </div>
        </div>
    );
};

const JenisZakat = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className=' mx-8 mt-6 md:mx-16 md:pt-12 lg:mx-28 lg:pt-20 mb-20'>
            <header className="text-center bg-light rounded-lg text-dark p-4 mb-6">
                <h1 className="text-3xl font-bold">Kalkulator Zakat</h1>
                <p className="mt-2">Hitung Zakat Anda dengan Mudah</p>
            </header>
            <label htmlFor="pilih_zakat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Pilih Jenis Zakat
            </label>
            <select
                id="pilih_zakat"
                value={selectedOption}
                onChange={handleSelectChange}
                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">Jenis Zakat</option>
                <option value="option1">Zakat Maal</option>
                <option value="option2">Zakat Profesi</option>
                <option value="option3">Zakat Emas</option>
                <option value="option4">Zakat Perdagangan</option>
            </select>

            {/* Menampilkan form sesuai pilihan yang dipilih */}
            {selectedOption === 'option1' && <ZakatMaalForm />}
            {selectedOption === 'option2' && <ZakatProfesiForm />}
            {selectedOption === 'option3' && <ZakatEmasForm />}
            {selectedOption === 'option4' && <ZakatPerdaganganForm />}
        </div>
    );
};

export default JenisZakat;
