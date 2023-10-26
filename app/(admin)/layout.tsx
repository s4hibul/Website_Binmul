import '../globals.css';

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
    <div className="flex flex-grow">
        <div className="w-1/4 h-screen bg-light text-dark font-bold">
            <ul className="space-y-4">
            <li className="p-4 hover:bg-tosca hover:text-white"><a href="/">Home</a></li>
            <li className="p-4 hover:bg-tosca hover:text-white"><a href="/dashboard">Carrousel</a></li>
            <li className="p-4 hover:bg-tosca hover:text-white"><a href="/dashboard/berita">Berita & Program</a></li>
            <li className="p-4 hover:bg-tosca hover:text-white"><a href="">Carer</a></li>
            <li className="p-4 hover:bg-tosca hover:text-white"><a href="/dashboard/galeri">Galeri</a></li>
            <li className="p-4 hover:bg-tosca hover:text-white"><a href="/dashboard/akun">Akun</a></li>
            </ul>
        </div>
        <div className="w-3/4 p-4">
            {children}
        </div>
    </div>
    )
}
