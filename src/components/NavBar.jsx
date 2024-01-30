import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/nav_image.png";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);

    const toggleGalleryDropdown = () => {
        setShowGalleryDropdown(!showGalleryDropdown);
        if(showServicesDropdown) {
            setShowServicesDropdown(false);
        }
    }

    const toggleServicesDropdown = () => {
        setShowServicesDropdown(!showServicesDropdown);
        if(showGalleryDropdown) {
            setShowGalleryDropdown(false);
        }
    }

    const handleServicesClick = (sectionId) => {
        window.scrollTo(0, 0);
        setShowGalleryDropdown(false);
        setShowServicesDropdown(false);

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
                        <a href="/#home" onClick={() => handleServicesClick('home')} className="text-black hover:text-blue-700 text-2xl">Home</a>
                    </li>
                    <li className="mr-24">
                        <a href="/#about" className="text-black hover:text-blue-700 text-2xl">About</a>
                    </li>
                    <li className="mr-24 relative">
                        <button onClick={toggleGalleryDropdown} className='flex text-black hover:text-blue-700 text-2xl'>
                            Gallery <ChevronDownIcon className={`flex mt-2 w-5 h-5 ml-2 transform transition duration-300 ease-in-out ${showGalleryDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        {showGalleryDropdown && (
                            <div className='absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20'>
                                <Link to="/exteriors" onClick={() => handleServicesClick('exteriors')} className="block px-4 py-2 text-black hover:text-blue-700 text-sm">
                                    Exteriors
                                </Link>
                                <Link to="/interiors" onClick={() => handleServicesClick('interiors')} className='block px-4 py-2 text-black hover:text-blue-700 text-sm'>
                                    Interiors
                                </Link>
                                <Link to="/kitchens "onClick={() => handleServicesClick('kitchens')} className='block px-4 py-2 text-black hover:text-blue-700 text-sm'>
                                    Kitchens
                                </Link>
                                <Link to="/bathrooms "onClick={() => handleServicesClick('bathrooms')} className='block px-4 py-2 text-black hover:text-blue-700 text-sm'>
                                    Bathrooms
                                </Link>
                            </div>
                        )}
                    </li>
                    <li className="mr-24 relative">
                        <button onClick={toggleServicesDropdown} className='flex text-black hover:text-blue-700 text-2xl'>
                            Services <ChevronDownIcon className={`flex mt-2 w-5 h-5 ml-2 transform transition duration-300 ease-in-out ${showServicesDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        {showServicesDropdown && (
                            <div className='absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20'>
                                <Link to="/services#design" onClick={() => handleServicesClick('design')} className="block px-4 py-2 text-black hover:text-blue-700 text-sm">
                                    Design/Build
                                </Link>
                                <Link to="/services#floor_plans" onClick={() => handleServicesClick('floor_plans')} className='block px-4 py-2 text-black hover:text-blue-700 text-sm'>
                                    Floor Plans
                                </Link>
                                <Link to="/services#remodel "onClick={() => handleServicesClick('remodel')} className='block px-4 py-2 text-black hover:text-blue-700 text-sm'>
                                    Remodeling
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="/#contact" className="text-black hover:text-blue-700 text-2xl">Contact Us</a>
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
                            <a href="/#home" className="text-black hover:text-blue-500 text-sm">Home</a>
                        </li>
                        <li className="my-4">
                            <a href="/#about" className="text-black hover:text-blue-500 text-sm ">About</a>
                        </li>
                        <li className="my-4">
                            <a href="/#gallery" className="text-black hover:text-blue-500 text-sm ">Gallery</a>
                        </li>
                        <li className="my-4">
                            <Link to="/services#design" className="text-black hover:text-blue-500 text-sm ">Services</Link>
                        </li>
                        <li className='my-4'>
                            <a href="/#contact" className="text-black hover:text-blue-500 text-sm ">Contact Us</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
