import React from 'react';
import googleMaps from '/rise_above_homes/src/assets/google_maps.svg';
import facebook from '/rise_above_homes/src/assets/facebook.svg';
import instagram from '/rise_above_homes/src/assets/instagram.svg';

const Footer = () => {

    return (
        <footer className="bg-gray-700 mt-12">
            <div className='flex justify-center'>
                <p className="text-white text-lg m-4 hover:text-blue-400">
                    <a href='#home'>Home</a>
                </p>
                <p className="text-white text-lg m-4 hover:text-blue-400">
                    <a href='#about'>About</a>
                </p>
                <p className="text-white text-lg m-4 hover:text-blue-400">
                    <a href='#gallery'>Gallery</a>
                </p>
                <p className="text-white text-lg m-4 hover:text-blue-400">
                    <a href='#services'>Services</a>
                </p>
            </div>
            <div className='flex justify-center'>
                <a href='www.googlemaps.com'><img src={googleMaps} alt="Google Maps" className="h-8 m-4" /></a>
                <a href='www.facebook.com'><img src={facebook} alt="Facebook" className="h-8 m-4" /></a>
                <a href='www.instagram.com'><img src={instagram} alt="Instagram" className="h-8 m-4" /></a>
            </div>
            <div className="flex justify-center w-full p-2 mt-12 bg-gray-900">
                <p className="text-center text-white text-sm tracking-wide uppercase">Copyright &copy; 2024 Rise Above Homes LLC</p>
            </div>
        </footer>
    );
};

export default Footer;