// import React from 'react';
// import { NextPage } from 'next';

// const SignUpForm: NextPage = () => {
//     return (
//         <section className="bg-gray-50 dark:bg-gray-900">
//             <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//                 <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//                     <img className="w-40 mr-2" src="/images/Logo_Binamulia_BPN.png" alt="logo" />
//                 </a>
//                 <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                     <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                             Create an account
//                         </h1>
//                         <form className="space-y-4 md:space-y-6" action="#">
//                             <div>
//                                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                                 <input name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                                 <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
//                                 <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//                             </div>
//                             <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
//                             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                                 Sudah Punya Akun? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SignUpForm;

"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';
import { Auth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import tipe Auth
import { getAuth } from 'firebase/auth'; // Import getAuth dari Firebase SDK
import { app } from '@/firebase-config';

// Inisialisasi Firebase (pastikan Anda sudah menginisialisasi Firebase di tempat lain dalam aplikasi Anda)
const auth: Auth = getAuth(app); // Pastikan Anda sudah menginisialisasi Firebase sebelumnya

const SignUpForm: NextPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const signUpWithEmailAndPassword = async () => {
        try {
            if (password !== confirmPassword) {
                console.error("Password tidak cocok");
                return;
            }

            await createUserWithEmailAndPassword(auth, email, password); // Menggunakan createUserWithEmailAndPassword dari Firebase
            router.push('/login');
        } catch (error) {
            console.error(error);
            // Tangani pesan kesalahan pendaftaran
        }
    };

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-40 mr-2" src="/images/Logo_Binamulia_BPN.png" alt="logo" />
                </a>
                <div className="w-full bg-light rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="name@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <button type="button" onClick={signUpWithEmailAndPassword} className="w-full text-white bg-dark hover:bg-opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                            <p className="text-sm font-light text-gray-500">
                                Sudah Punya Akun? <a href="/login" className="font-medium text-primary-600 hover:underline">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpForm;
