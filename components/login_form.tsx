"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { app } from '@/firebase-config';

interface FirebaseError {
    code: string;
    message: string;
}

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null); // Inisialisasi dengan null
    const auth: Auth = getAuth(app);
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const signInWithEmailAndPasswordHandler = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Sign in berhasil, arahkan pengguna ke halaman '/beranda'
            router.push('/beranda');
        } catch (error) {
            // Tangani kesalahan otentikasi
            if (error !== null && typeof error === 'object' && 'code' in error) {
                // Periksa kode kesalahan Firebase
                if (error.code === 'auth/user-not-found') {
                    setError('Email tidak ditemukan. Silakan coba lagi atau daftar.');
                } else if (error.code === 'auth/wrong-password') {
                    setError('Password salah. Silakan coba lagi.');
                } else if (error.code === 'auth/invalid-email') {
                    setError('Format email tidak valid. Silakan periksa kembali.');
                } else {
                    setError('Terjadi kesalahan saat masuk. Silakan coba lagi.');
                    console.error(error);
                }

            } else {
                closeModal();
            }
        }
    };

    const googleAuth = new GoogleAuthProvider();

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuth);
            console.log(result);
            router.push('/beranda');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-40 mr-2"
                        src="/images/Logo_Binamulia_BPN.png"
                        alt="logo" />
                </a>
                <div className="w-full bg-light rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>

                        {error !== null && typeof error === 'string' && (<div className="text-red">{error}</div>)}

                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                {error !== null && typeof error === 'string' && error.includes('auth/wrong-password') && (
                                    <p className="text-red-500 text-sm">{error}</p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                {error !== null && typeof error === 'string' && error.includes('auth/invalid-email') && (
                                    <p className="text-red-500 text-sm">{error}</p>
                                )}
                            </div>
                            <div className="flex items-center justify-between">
                                <a
                                    href="/"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Lupa password?
                                </a>
                            </div>
                            <button
                                type="button"
                                onClick={signInWithEmailAndPasswordHandler}
                                className="w-full text-white bg-dark hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                            <button
                                onClick={signInWithGoogle}
                                className="w-full bg-red-600 hover:bg-dark hover:bg-opacity-30  text-dark border-2 border-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                                Sign in with Google
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Belum Punya Akun?{" "}
                                <a
                                    href="/signup" // Perbaikan: Menggunakan /signup sebagai tautan
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;
