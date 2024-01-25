import React, { useState }from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name ||!formData.email ||!formData.subject ||!formData.message) {
            alert('Please fill out all fields');
            return;
        } else {
            console.log('Form submitted', formData);

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            alert('Thanks for reaching out!');
        }
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

    const variants = {
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
        hidden: { opacity: 0, y: -70 }
    };

    const controlName = useAnimation();
    const [refName, inViewName] = useInView({triggerOnce: true});
    const controlEmail = useAnimation();
    const [refEmail, inViewEmail] = useInView({triggerOnce: true});
    const controlSubject = useAnimation();
    const [refSubject, inViewSubject] = useInView({triggerOnce: true});
    const controlMessage = useAnimation();
    const [refMessage, inViewMessage] = useInView({triggerOnce: true});
    const controlSubmit = useAnimation();
    const [refSubmit, inViewSubmit] = useInView({triggerOnce: true});
    const controlContact = useAnimation();
    const [refContact, inViewContact] = useInView({triggerOnce: true});
    const controlPhone = useAnimation();
    const [refPhone, inViewPhone] = useInView({triggerOnce: true});
    const controlTitle = useAnimation();
    const [refTitle, inViewTitle] = useInView({triggerOnce: true});


    React.useEffect(() => {
        if (inViewName) controlName.start('visible');
        else controlName.start('hidden');

        if (inViewEmail) controlEmail.start('visible');
        else controlEmail.start('hidden');

        if (inViewSubject) controlSubject.start('visible');
        else controlSubject.start('hidden');

        if (inViewMessage) controlMessage.start('visible');
        else controlMessage.start('hidden');

        if (inViewSubmit) controlSubmit.start('visible');
        else controlSubmit.start('hidden');

        if (inViewContact) controlContact.start('visible');
        else controlContact.start('hidden');

        if (inViewPhone) controlPhone.start('visible');
        else controlPhone.start('hidden');

        if (inViewTitle) controlTitle.start('visible');
        else controlTitle.start('hidden');

    }, [controlContact,
        controlPhone,
        controlTitle,
        controlName,
        controlEmail,
        controlSubject,
        controlMessage,
        controlSubmit,
        inViewPhone,
        inViewTitle,
        inViewContact,
        inViewName,
        inViewEmail,
        inViewSubject,
        inViewMessage,
        inViewSubmit]);

    return (
        <div id='contact'>
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
            <div>
                <div>
                    <motion.h1
                    className='text-center text-4xl my-12'
                    ref={refContact}
                    animate={controlContact}
                    initial="hidden"
                    variants={variants}>
                        Contact Us
                    </motion.h1>
                    <motion.h3
                    className='text-center text-xl mb-12'
                    ref={refPhone}
                    animate={controlPhone}
                    initial="hidden"
                    variants={variants}>
                        Phone:
                        <br />
                        <a className='font-bold transition duration-300 ease-in-out hover:text-blue-500 hover:scale-105 inline-block' href="tel:816-222-2222">(816) 222-2222</a>
                    </motion.h3>
                    <motion.h3
                    className='text-center text-xl mb-8'
                    ref={refTitle}
                    animate={controlTitle}
                    initial="hidden"
                    variants={variants}>
                        Or Fill Out the Form:
                    </motion.h3>
                </div>
                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <motion.div
                            className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                            ref={refName}
                            animate={controlName}
                            initial="hidden"
                            variants={variants}>
                                <label className="required: block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Name
                                </label>
                                <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-first-name"
                                type="text"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jane Doe" />
                            </motion.div>
                            <motion.div
                            className="w-full md:w-1/2 px-3"
                            ref={refEmail}
                            animate={controlEmail}
                            initial="hidden"
                            variants={variants}>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                    Email
                                </label>
                                <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-email"
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="email@example.com" />
                            </motion.div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <motion.div
                            className="w-full px-3"
                            ref={refSubject}
                            animate={controlSubject}
                            initial="hidden"
                            variants={variants}>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-subject">
                                    Subject
                                </label>
                                <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-subject"
                                type="text"
                                name='subject'
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Enter subject" />
                            </motion.div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <motion.div
                            className="w-full px-3"
                            ref={refMessage}
                            animate={controlMessage}
                            initial="hidden"
                            variants={variants}>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                                    Message
                                </label>
                                <textarea
                                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                id="grid-message"
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message">
                                </textarea>
                            </motion.div>
                        </div>
                        <div className="flex flex-wrap mx-3 mb-6">
                            <div
                            className="w-full px-3 flex justify-center">
                                <motion.button
                                className="bg-gray-700 hover:bg-gray-900 text-white font-semi py-2 px-12 rounded"
                                type="submit"
                                ref={refSubmit}
                                animate={controlSubmit}
                                initial="hidden"
                                variants={variants}>
                                    Send
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ContactForm;