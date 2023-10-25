import React from 'react';
import { useRouter } from 'next/router';

interface AuthPageProps {
    userRole: string;
    children: React.ReactNode;
    }

const AuthPage: React.FC<AuthPageProps> = ({ children, userRole }) => {
const router = useRouter();

    // Cek apakah pengguna memiliki hak akses ke halaman berdasarkan perannya.
if (userRole === 'public' && router.pathname === '/forum') {
    // Redirect ke halaman sign-in jika pengguna tidak memiliki akses.
    router.push('/login');
    return null;
    }

if (userRole === 'admin' && router.pathname === '/dashboard') {
    // Redirect ke halaman sign-in jika pengguna tidak memiliki akses.
    router.push('/login');
    return null;
    }

    // Tampilkan halaman jika pengguna memiliki akses.
return <>{children}</>;
};

export default AuthPage;



// pada halaman-halaman yang memerlukan otentikasi,
// Anda dapat menggunakan komponen AuthPage dengan meletakkan konten halaman sebagai "children" seperti ini:

// const ForumPage: React.FC<{ userRole: string }> = ({ userRole }) => {
//     return (
//       <AuthPage userRole={userRole}>
//         {/* Konten halaman Forum */}
//       </AuthPage>
//     );
//   };
