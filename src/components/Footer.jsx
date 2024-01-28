import React from 'react';
import { Link } from 'react-router-dom';
import googleMaps from '../assets/google_maps.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import creditMark from '../assets/credit_mark.png';

const Footer = () => {

    const handleServicesClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="footer_container bg-gray-700 mt-12">
            <div className='flex justify-center'>
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
            <div className='flex justify-center'>
                <a href='www.googlemaps.com'><img src={googleMaps} alt="Google Maps" className="h-8 m-4" /></a>
                <a href='www.facebook.com'><img src={facebook} alt="Facebook" className="h-8 m-4" /></a>
                <a href='www.instagram.com'><img src={instagram} alt="Instagram" className="h-8 m-4" /></a>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className=' text-sm text-white'>Website Created By: </p>
                <a href='https://www.reece-nunez.com'><img src={creditMark} alt="Credit Mark" className="h-20 mt-3" /></a>
            </div>
            <div className="copy_right flex justify-center w-full p-2 mt-4 bg-gray-900">
                <p className="text-center text-white text-sm tracking-wide uppercase">| Copyright &copy; 2024 Rise Above Homes LLC &middot; All Rights Reserved |</p>
            </div>
        </footer>
    );
};

export default Footer;