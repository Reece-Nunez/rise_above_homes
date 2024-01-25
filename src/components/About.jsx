import React from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import fatherAndSon from "/rise_above_homes/src/assets/father_and_son.png";

const About = () => {

    const controlsH1 = useAnimation();
    const [refH1, inViewH1] = useInView({ triggerOnce: true });

    const controlsImg = useAnimation();
    const [refImg, inViewImg] = useInView({ triggerOnce: true });

    const controlsP = useAnimation();
    const [refP, inViewP] = useInView({ triggerOnce: true });

    React.useEffect(() => {
        if (inViewH1) controlsH1.start('visible');
        if (inViewImg) controlsImg.start('visible');
        if (inViewP) controlsP.start('visible');
    }, [inViewH1, inViewImg, inViewP]);

    return (
        <div id="about" className="w-full bg-gray-700">
            <div className="container mx-auto mt-4 p-4 text-center">
                <motion.h1
                    ref={refH1}
                    initial="hidden"
                    animate={controlsH1}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0.8 }
                    }}
                    transition={{ duration: 1.3 }}
                    className="text-white text-7xl my-16">
                    About Us
                </motion.h1>
                <motion.img
                    ref={refImg}
                    initial="hidden"
                    animate={controlsImg}
                    variants={{
                        visible: { opacity:1 },
                        hidden: { opacity: 0 }
                    }}
                    transition={{ duration: 1.5 }}
                    src={fatherAndSon} alt="Father and Son" className="father_and_son mx-auto my-16">
                </motion.img>
                <motion.p
                    ref={refP}
                    initial="hidden"
                    animate={controlsP}
                    variants={{
                        visible: { opacity:1, y: 0 },
                        hidden: { opacity: 0, y: -20 }
                    }}
                    transition={{ duration: 1.8 }}
                    className="text-white mx-64 my-12">
                        For over 20 years, Rise Above Homes, a dedicated father and son team,
                        has been passionately crafting homes, not just houses, with a commitment
                        to perfection in their craft. With the ethos of "Standards Above Measure,"
                        this duo has built a legacy in the construction industry, priding themselves on
                        their precision and love for what they do. Their journey in transforming blueprints
                        into dream homes is fueled by a deep-seated passion for creating spaces where life’s
                        precious moments can unfold. At Rise Above Homes, every project is an opportunity
                        to deliver excellence and create a lasting testament to quality craftsmanship
                        and client satisfaction.
                </motion.p>
                <div id="gallery"></div>
            </div>
        </div>
    );
};

export default About;
