import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactUs = () => {
    // Use production API URL if available, otherwise fallback to localhost for development
    const API_URL = process.env.REACT_APP_API_URL || 
        (process.env.NODE_ENV === 'production' 
            ? 'https://your-backend-url.railway.app/api/contact/submit' // Replace with your actual backend URL
            : 'http://localhost:5000/api/contact/submit');
    const contactRef = useRef(null);
    const contactInView = useInView(contactRef, { once: true, amount: 0.3 });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            name: form.Name.value,
            email: form.email.value,
            phone: form.Phone.value,
            message: form.Message.value || ''
        };

        setSubmitStatus({ type: 'loading', message: 'Submitting...' });

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus({ type: 'success', message: data.message || 'Form submitted successfully!' });
                form.reset();
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus({ type: '', message: '' });
                }, 5000);
            } else {
                setSubmitStatus({ type: 'error', message: data.message || 'An error occurred. Please try again later.' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div 
            id="contact"
            ref={contactRef}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
        >
            <div class="container">
                <div class="row">
                    <motion.div 
                        class="contact-left"
                        variants={fadeInLeft}
                        initial="hidden"
                        animate={contactInView ? "visible" : "hidden"}
                    >
                        <motion.h1 
                            class="sub-title"
                            initial={{ opacity: 0, y: -20 }}
                            animate={contactInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            Contact Me
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={contactInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <i class="fa-solid fa-envelope"></i>chaubeyprashant20@gmail.com
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={contactInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <i class="fa-solid fa-phone"></i>7869861631
                        </motion.p>
                        <motion.div 
                            class="social-icons"
                            initial={{ opacity: 0 }}
                            animate={contactInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <motion.a 
                                href="https://github.com/chaubeyprashant"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i class="fa-brands fa-square-github"></i>
                            </motion.a>
                            <motion.a 
                                href="#!"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i class="fa-brands fa-twitter-square"></i>
                            </motion.a>
                            <motion.a 
                                href="https://www.instagram.com/chaubey_1/"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i class="fa-brands fa-instagram"></i>
                            </motion.a>
                            <motion.a 
                                href="https://www.linkedin.com/in/prashant-chaubey-24a62116b/"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i class="fa-brands fa-linkedin"></i>
                            </motion.a>
                        </motion.div>
                        <motion.a 
                            href="#!" 
                            class="btn btn2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={contactInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            DownLoad CV
                        </motion.a>
                    </motion.div>
                    <motion.div 
                        class="contact-right"
                        variants={fadeInRight}
                        initial="hidden"
                        animate={contactInView ? "visible" : "hidden"}
                    >
                        <motion.form 
                            name="submit-to-google-sheet" 
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0 }}
                            animate={contactInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <motion.input 
                                type="text" 
                                name="Name" 
                                placeholder="Your Name" 
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.input 
                                type="tel" 
                                name="Phone" 
                                placeholder="Your Phone" 
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.textarea 
                                name="Message" 
                                rows="6" 
                                placeholder="Your Message"
                                whileFocus={{ scale: 1.02 }}
                            ></motion.textarea>
                            <motion.button 
                                type="submit" 
                                class="btn btn2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit
                            </motion.button>
                        </motion.form>
                        {submitStatus.message && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`submit-message ${submitStatus.type}`}
                            >
                                {submitStatus.type === 'loading' && <i class="fa-solid fa-spinner fa-spin"></i>}
                                {submitStatus.type === 'success' && <i class="fa-solid fa-check-circle"></i>}
                                {submitStatus.type === 'error' && <i class="fa-solid fa-exclamation-circle"></i>}
                                <span>{submitStatus.message}</span>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
            <motion.div 
                class="copyright"
                initial={{ opacity: 0 }}
                animate={contactInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                Copyright © Prashant. Made with <motion.i 
                    class="fa-solid fa-heart"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                ></motion.i>
            </motion.div>
        </motion.div>
    );
}

export default ContactUs;