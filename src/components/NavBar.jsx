import React, { useState, useEffect } from 'react';
import logo from '/rise_above_homes/src/assets/nav_image.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 400;
            console.log("Scroll position: " + window.scrollY);
            console.log("isScrolled:", isScrolled);
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full shadow-md z-50 px-2 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center ${scrolled ? 'bg-white' : 'bg-white bg-opacity-50'}`}>
            <div className="flex-shrink-0 flex items-center">
                <img src={logo} alt="Logo" className="h-20" />
            </div>
            <ul className="flex">
                <li className="mr-24">
                    <a href="#home" className="text-black hover:text-gray-700 text-2xl font-bold">Home</a>
                </li>
                <li className="mr-24">
                    <a href="#about" className="text-black hover:text-gray-700 text-2xl font-bold">About</a>
                </li>
                <li className="mr-24">
                    <a href="#gallery" className="text-black hover:text-gray-700 text-2xl font-bold">Gallery</a>
                </li>
                <li className="mr-24">
                    <a href="#services" className="text-black hover:text-gray-700 text-2xl font-bold">Services</a>
                </li>
                <li>
                    <a href="#contact" className="text-black hover:text-gray-700 text-2xl font-bold">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
