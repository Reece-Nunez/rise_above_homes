import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import kitchen1 from '../assets/kitchen1.jpg';
import kitchen2 from '../assets/kitchen2.webp';
import kitchen3 from '../assets/kitchen3.jpg';
import kitchen4 from '../assets/kitchen4.jpg';
import kitchen5 from '../assets/kitchen5.jpg';
import kitchen6 from '../assets/kitchen6.jpg';


const ImageGallery = () => {

    const images = [
        kitchen1,
        kitchen2,
        kitchen3,
        kitchen4,
        kitchen5,
        kitchen6
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
                    Kitchens
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
                    slidesPerView={3}
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
                                <img className='h-[400px] w-full' src={image} alt={`Slide ${index}`} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default ImageGallery