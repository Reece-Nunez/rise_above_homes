import { Swiper, SwiperSlide } from 'swiper/react';
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

    const images = [
        exterior1,
        exterior2,
        exterior3,
        exterior4,
        exterior5,
        exterior6
    ];


    return (
        <div>
            <div className='text-center mt-32 text-5xl'>
                <h1>Exteriors</h1>
                <hr className="mx-96 border-1 border-gray-600 mt-8 mb-12" />
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
                            <img className='h-[400px] w-full' src={image} alt={`Slide ${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default ImageGallery;