import React, { ReactNode } from 'react';

interface customLayoutProps {
    children: ReactNode;
}

const CustomLayout: React.FC<customLayoutProps> = ({children}) => {
    return (
        <div className="flex-col min-h-screen">
            <div className='relative'>
                <img src='/images/About Page bg.png ' className='object-cover bg-center h-full w-full bg-gradient-to-b from-black' />  
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl md:text-4xl lg:text-5xl  '>Tentang Kami</h1>
            </div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default CustomLayout;
