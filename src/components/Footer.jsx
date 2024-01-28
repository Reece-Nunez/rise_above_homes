import React from 'react';
import { Link } from 'react-router-dom';
import googleMaps from '../assets/google_maps.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import creditMark from '../assets/credit_mark.png';
import logo from '../assets/transparent_white.png';

const Footer = () => {

    const handleServicesClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="footer_container bg-gray-700 mt-12">
            <div className='flex justify-between items-center'>
                <div className='flex flex-col pl-2'>
                    {/* Menu Items */}
                    <div className='flex'>
                        <p className="text-white text-lg m-4 hover:text-blue-400">
                            <a href='/#home'>Home</a>
                        </p>
                        <p className="text-white text-lg m-4 hover:text-blue-400">
                            <a href='/#about'>About</a>
                        </p>
                        <p className="text-white text-lg m-4 hover:text-blue-400">
                            <a href='/#gallery'>Gallery</a>
                        </p>
                        <p className="text-white text-lg m-4 hover:text-blue-400">
                            <Link to="/services" onClick={handleServicesClick}>Services</Link>
                        </p>
                    </div>
                    {/* Social Media Links */}
                    <div className='flex'>
                        <a href='http://www.googlemaps.com'><img src={googleMaps} alt="Google Maps" className="h-8 m-4" /></a>
                        <a href='http://www.facebook.com'><img src={facebook} alt="Facebook" className="h-8 m-4" /></a>
                        <a href='http://www.instagram.com'><img src={instagram} alt="Instagram" className="h-8 m-4" /></a>
                    </div>
                </div>
                {/* Logo */}
                <div className='flex-grow flex justify-center'>
                    <img src={logo} className='h-24' alt="Logo" />
                </div>
                {/* Credit Mark */}
                <div className='flex flex-col justify-center items-center px-24'>
                    <p className='text-sm text-white'>Website Created By:</p>
                    <a href='https://www.reece-nunez.com'><img src={creditMark} alt="Credit Mark" className="h-14 mt-3" /></a>
                </div>
            </div>
            <div className="copy_right flex justify-center w-full p-2 bg-gray-900">
                <p className="text-center text-white text-sm tracking-wide uppercase">| Copyright &copy; 2024 Rise Above Homes LLC &middot; All Rights Reserved |</p>
            </div>
        </footer>
    );
};

export default Footer;