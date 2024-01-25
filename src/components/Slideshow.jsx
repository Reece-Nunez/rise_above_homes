import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import'slick-carousel/slick/slick-theme.css';

const Slideshow = ({ images }) => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: false,
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
    <div id='home' className="slideshow-container">
        <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index} className='slides'>
                <img src={image} alt={`Slide ${index}`} className="w-full object-cover" />
            </div>
        ))}
        </Slider>
        <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -20 }
            }}
            transition={{ duration: 1.2 }}
            className='text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mt-20 mb-12 text-center'>

            Custom Home Builders in Forsyth, Missouri
        </motion.h1>
        <motion.hr
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, scaleX: 1},
                hidden: { opacity: 0, scaleX: 0 }
            }}
            transition={{ duration: .9, delay: 0.4 }}
            className="border-1 border-gray-600 mt-8 mb-36 mx-16" />
    </div>
    );
};

export default Slideshow;
