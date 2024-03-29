"use client";
import useAuthentication from "@/hooks/useAuthentication";
import { navigateToLogin } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";

export function Header() {
    const auth = useAuthentication();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        auth.logout();
        navigateToLogin();
    };

    return (
        <div className='flex relative items-center justify-between w-full h-20 border-y-2 px-9'>
            <div className='flex items-center ml-10'>
                <SearchInput></SearchInput>
            </div>
            <div className='flex m-8 min-w-48'>
                <div className='flex items-center space-x-4 mr-6'>
                    <button className=''>
                        <Image src='/help.png' alt='Help' className='w-7 h-7 rounded-full' width={150} height={150} />
                    </button>
                    <button className=''>
                        <Image src='/notification.png' alt='Notification' className='w-7 h-7 rounded-full' width={150} height={150} />
                    </button>
                </div>
                <div className='flex items-center space-x-2' onClick={toggleDropdown}>
                    <Image src='/profile.png' alt='Profile' className='w-9 h-9 rounded-full' width={150} height={150} />
                    <span className='text-sm font-semibold mb-4'>Usuário</span>
                </div>
                {isOpen && (
                    <div className='absolute right-0 mt-12 w-48 z-20 bg-white rounded-md shadow-lg py-1'>
                        <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left' onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

function SearchInput() {
    return (
        <div className='flex items-center space-x-6 w-96 h-9 bg-[#f9f9f9] rounded-lg pl-2'>
            <Image src='/search.svg' alt='Profile' className='w-5 h-5 rounded-full' width={150} height={150} />
            <input
                type='text'
                placeholder='Procurar...'
                className=' h-[70%] w-[80%] bg-[#f9f9f9] placeholder-[#898989] placeholder-sx border-none focus:border-transparent focus:outline-none'
            />
        </div>
    );
}
