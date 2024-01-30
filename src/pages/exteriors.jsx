import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import exterior1 from '../assets/exterior1.jpg';
import exterior2 from '../assets/exterior2.jpg';
import exterior3 from '../assets/exterior3.webp';
import exterior4 from '../assets/exterior4.webp';
import exterior5 from '../assets/exterior5.jpg';
import exterior6 from '../assets/exterior6.jpg';



const ImageGallery = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);

    const updateSlidesPerView = () => {
        if (window.innerWidth < 768) {
            setSlidesPerView(1);
        } else {
            setSlidesPerView(3);
        }
    };

    useEffect(() => {
        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);

        return () => window.removeEventListener('resize', updateSlidesPerView);
    },[]);

    const images = [
        exterior1,
        exterior2,
        exterior3,
        exterior4,
        exterior5,
        exterior6
    ];

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

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <div>
            <div className='text-center mt-32 text-5xl'>
                <motion.h1
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -20 }
                }}
                transition={{ duration: 2 }}
                >
                    Exteriors
                </motion.h1>
                <motion.hr 
                className="mx-96 border-1 border-gray-600 mt-8 mb-12" 
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, scaleX: 1},
                    hidden: { opacity: 0, scaleX: 0 }
                }}
                transition={{ duration: 4, delay: .2 }}/>
            </div>
            <>
                <Swiper
                    className='swiper-container mt-12 mb-32 mx-20'
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                            transition={{ duration: 3 }}>
                                <img className='image h-[400px] w-full' src={image} alt={`Slide ${index}`} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default ImageGallery;