import React from 'react';

const Header = () => {

    function openmenu() {
        const sidemenu = document.getElementById("sidemenu");
        sidemenu.style.right = "0";
    }

    function closemenu() {
        const sidemenu = document.getElementById("sidemenu");
        sidemenu.style.right = "-200px";
    }

    return (
        <div id="header">
            <div class="container">
                <nav>
                    <h1 id="logo">Prashant.</h1>
                    <ul id="sidemenu">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <i class="fas fa-times" onClick={closemenu}></i>
                    </ul>
                    <i class="fas fa-bars" onClick={openmenu}></i>
                </nav>

                <div class="header-text">
                    <p>Software Developer</p>
                    <h1>Hi, I'm <span>Prashant</span></h1>
                </div>
            </div>
        </div>
    );
}

export default Header;