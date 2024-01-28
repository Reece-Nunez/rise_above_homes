import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/nav_image.png";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showDropDown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropDown);
    }

    const handleServicesClick = (sectionId) => {
        window.scrollTo(0, 0);
        setShowDropdown(false);

        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            
            }
        }, 0);
    };

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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-0 w-full shadow-md z-50 px-2 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center ${scrolled ? 'bg-white' : 'bg-white bg-opacity-50'}`}>
            <div className="flex-shrink-0 flex items-center">
                <a href='/#home'><img src={logo} alt="Logo" className="h-20" /></a>
            </div>
            <div className='hidden sm:flex'>
                <ul className="menu_items flex">
                    <li className="mr-24">
                        <a href="/#home" className="text-black hover:text-gray-700 text-2xl font-bold">Home</a>
                    </li>
                    <li className="mr-24">
                        <a href="/#about" className="text-black hover:text-gray-700 text-2xl font-bold">About</a>
                    </li>
                    <li className="mr-24">
                        <a href="/#gallery" className="text-black hover:text-gray-700 text-2xl font-bold">Gallery</a>
                    </li>
                    <li className="mr-24 relative">
                        <button onClick={toggleDropdown} className='flex text-black hover:text-gray-700 text-2xl font-bold'>
                            Services <ChevronDownIcon className={`flex mt-2 w-5 h-5 ml-2 transform ${showDropDown ? 'rotate-180' : ''}`} />
                        </button>
                        {showDropDown && (
                            <div className='absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20'>
                                <Link to="/services#design" onClick={() => handleServicesClick('design')} className="block px-4 py-2 text-black hover:text-gray-700 text-sm">
                                    Design/Build
                                </Link>
                                <Link to="/services#floor_plans" onClick={() => handleServicesClick('floor_plans')} className='block px-4 py-2 text-black hover:text-gray-700 text-sm'>
                                    Floor Plans
                                </Link>
                                <Link to="/services#remodel "onClick={() => handleServicesClick('remodel')} className='block px-4 py-2 text-black hover:text-gray-700 text-sm'>
                                    Remodeling
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="/#contact" className="text-black hover:text-gray-700 text-2xl font-bold">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className='block sm:hidden'>
                <button onClick={toggleMenu}>
                    {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" /> }
                </button>
            </div>
            {isOpen && (
                <div className='absolute top-0 right-0 w-2/3 h-screen bg-white shadow-xl z-40 flex flex-col'>
                    <Link onClick={toggleMenu} className='self-start p-4'>
                        <XMarkIcon className="h-6 w-6" />
                    </Link>
                    <ul className="flex flex-col items-center justify-center">
                        <li className="my-4">
                            <a href="#home" className="text-black hover:text-blue-500 text-sm">Home</a>
                        </li>
                        <li className="my-4">
                            <a href="#about" className="text-black hover:text-blue-500 text-sm ">About</a>
                        </li>
                        <li className="my-4">
                            <a href="#gallery" className="text-black hover:text-blue-500 text-sm ">Gallery</a>
                        </li>
                        <li className="my-4">
                            <a href="#services" className="text-black hover:text-blue-500 text-sm ">Services</a>
                        </li>
                        <li className='my-4'>
                            <a href="#contact" className="text-black hover:text-blue-500 text-sm ">Contact Us</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
