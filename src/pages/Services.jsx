import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import designImage from '../assets/design_build.png'
import floorPlans from '../assets/floor_plans.png'
import remodel from '../assets/remodel.png'

const Services = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
            const element = document.getElementById(hash);
            if(element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [useLocation]);

    return (
        <div className="w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-200">
                    <br id="design"></br>
                    <div>
                    <h1 className="flex justify-center items-center mt-96 text-3xl">Design/Build</h1>
                    <p className="p-16">
                        At Rise Above Homes, we specialize in a seamless design/build process
                        that caters to your unique vision from the ground up. Our integrated
                        approach combines architectural innovation with superior craftsmanship
                        to create custom homes that are not only aesthetically pleasing but
                        also functional and sustainable. We collaborate closely with you
                        every step of the way, from the initial concept to the final touches,
                        ensuring that every detail reflects your lifestyle and preferences.
                        <br/>
                        <br/>
                        With our team of skilled designers and builders, we streamline the
                        construction process, providing clear communication, coordinated
                        project management, and a commitment to quality and timeline adherence.
                        Our design/build service is a testament to our dedication to excellence,
                        where we transform your ideas into reality with precision and
                        transparency. Choose Rise Above Homes, where your dream home
                        awaits, meticulously crafted to meet your every need.
                    </p>
                    </div>
                    <div>
                        <img src={floorPlans} alt="Floor Plans" className="mt-72"/>
                    </div>
                    <br id="remodel"></br>
                    <div>
                        <h1 className="flex justify-center items-center mt-96 text-3xl">Remodeling & Renovation</h1>
                        <p className="p-16">
                            Revitalize your space with Rise Above Homes' Remodeling and Renovation 
                            Services. Whether you're looking to refresh a single room or undertake 
                            a comprehensive home transformation, our team brings expertise, 
                            innovation, and craftsmanship to every project. We understand that a 
                            renovation is not just about altering your living space—it's about 
                            enhancing your lifestyle.
                            <br/>
                            <br/>
                            Our services cover everything from kitchen and bath remodels to 
                            full-scale home renovations and additions. We blend timeless design 
                            principles with the latest trends to create spaces that are both 
                            beautiful and functional. Our meticulous attention to detail ensures 
                            that every aspect of your renovation is executed with precision.
                            <br/>
                            <br/>
                            We pride ourselves on our collaborative approach, working closely 
                            with you to understand your needs and preferences. Our goal is to
                            make the renovation process as smooth and stress-free as possible, 
                            with clear communication and a commitment to staying on schedule 
                            and within budget.
                            <br/>
                            <br/>
                            Choose Rise Above Homes for your next renovation project and 
                            experience the joy of a space reborn. Let's turn the home you 
                            have into the home you love.
                        </p>
                    </div>
                </div>
                <div className="second_column">
                    <div>
                    <img src={designImage} alt="Design and Build" className="h-2/3 w-full" />
                    </div>
                    <br id="floor_plans"></br>
                    <div>
                        <h1 className="flex justify-center items-center mt-96 text-3xl">Floor Plan Design</h1>
                        <p className="p-16">
                            Embark on the journey to your dream home with Rise Above Homes'
                            bespoke Home Plan Design services. Our approach is grounded in
                            the belief that every home should be as unique as its owner. We blend 
                            artistry with architecture to craft custom home plans that resonate 
                            with your desires and lifestyle. Our dedicated design team works with 
                            precision and passion, utilizing state-of-the-art CAD software 
                            alongside traditional drawing tools to bring precision to every line.
                            <br/>
                            <br/>
                            We offer a personalized design experience where your input is our 
                            inspiration. From the grandest ideas to the smallest details, your 
                            vision is carefully woven into every aspect of the home plan. With 
                            an extensive selection of material swatches and design elements at 
                            your disposal, we ensure that the finished plan aligns with both 
                            your aesthetic preferences and functional requirements.
                            <br/>
                            <br/>
                            Opt for Rise Above Homes' Home Plan Design services, where we turn 
                            the blueprint of your aspirations into a tangible reality, setting 
                            the foundation for a home that's built to last and loved to live in.
                        </p>
                        <div>
                            <img src={remodel} alt="Remodel Image" className="mt-[392px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;