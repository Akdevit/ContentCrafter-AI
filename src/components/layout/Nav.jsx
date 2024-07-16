import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='w-full h-[60px] fixed top-0 z-50 flex items-center justify-between px-4 bg-opacity-30 bg-white backdrop-blur-md'>
                <div className='text-xl font-bold'>
                    ContentCrafter AI
                </div>
                <nav className='hidden md:flex space-x-4 '>
                    <Link to='/' className='text-black hover:text-gray-700'>Home</Link>
                    <Link to='/templates' className='text-black hover:text-gray-700'>Templates</Link>
                    {/* Add more navigation links as needed */}
                </nav>
                <div className='md:hidden'>
                    <button className='text-black' onClick={toggleMenu}>
                        {/* Mobile menu icon (hamburger) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 z-40 left-0 w-full h-screen bg-white backdrop-filter backdrop-blur-md transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex flex-col items-center justify-center h-full'>
                    <Link to='/' className='text-black hover:text-gray-700'>Home</Link>
                    <Link to='/templates' className='text-black hover:text-gray-700'>Templates</Link>
                    {/* Add more mobile menu items as needed */}
                </div>
            </div>
        </>
    );
}

export default Nav;
