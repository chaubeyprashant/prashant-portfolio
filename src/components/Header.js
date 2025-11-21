import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {

    function openmenu() {
        const sidemenu = document.getElementById("sidemenu");
        sidemenu.style.right = "0";
    }

    function closemenu() {
        const sidemenu = document.getElementById("sidemenu");
        sidemenu.style.right = "-200px";
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div id="header">
            <div class="container">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.h1 
                        id="logo"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        Prashant.
                    </motion.h1>
                    <ul id="sidemenu">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <i class="fas fa-times" onClick={closemenu}></i>
                    </ul>
                    <i class="fas fa-bars" onClick={openmenu}></i>
                </motion.nav>

                <motion.div 
                    class="header-text"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants}>Software Developer & AI Engineer</motion.p>
                    <motion.h1 variants={itemVariants}>
                        Hi, I'm <motion.span 
                            animate={{ 
                                textShadow: [
                                    "0 0 0px #ff004f",
                                    "0 0 20px #ff004f",
                                    "0 0 0px #ff004f"
                                ]
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >Prashant</motion.span>
                    </motion.h1>
                </motion.div>
            </div>
        </div>
    );
}

export default Header;