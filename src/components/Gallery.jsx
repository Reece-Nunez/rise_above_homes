import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import exteriorImage from "../assets/exteriors.jpg";
import interiorImage from "../assets/interiors.jpg";
import kitchenImage from "../assets/kitchens.jpg";
import bathroomImage from "../assets/bathrooms.jpg";

const Gallery = () => {
    const controls = useAnimation(); // Initialize the animation controls

    const [ref, inView] = useInView({
        threshold: 0.3, // 80% of the item must be visible before triggering
        triggerOnce: true // Animation will only occur once
    });

    // React Hook for handling the animation on scroll
    React.useEffect(() => {
        if (inView) {
            controls.start('show');
        }
    }, [controls, inView]); // Dependencies array includes controls and inView

    const images = [
        { title: 'Exteriors', url: '/exteriors', img: exteriorImage },
        { title: 'Interiors', url: '/interiors', img: interiorImage },
        { title: 'Kitchens', url: '/kitchens', img: kitchenImage },
        { title: 'Bathrooms', url: '/bathrooms', img: bathroomImage }
    ];

    const galleryVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Children animations are staggered by 0.6 seconds
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <motion.div
            ref={ref} // Attach the ref to the motion.div to track its visibility
            className="gallery_grid grid-cols-4 gap-32 my-32 mx-32"
            variants={galleryVariants}
            initial="hidden"
            animate={controls}>
            {images.map(({ title, url, img }) => (
                <motion.a
                    key={title}
                    href={url}
                    className="group flex flex-col items-center"
                    variants={itemVariants}
                >
                    <img src={img} alt={title} className="gallery_images w-full h-96 rounded-lg transform group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                    <p className="text-center my-12 text-xl ">{title}</p>
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Gallery;
