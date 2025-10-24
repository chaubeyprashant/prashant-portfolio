import React from 'react';

const ContactUs = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzYvF_K4eW_ezd_r2fNXOWiixTPnlDYOLFD2b3bCgxZPVCOIx4QVidyu-G-Iot-a7Z2_g/exec';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    alert('Form submitted successfully!');
                    form.reset();
                } else {
                    alert('An error occurred. Please try again later.');
                }
            })
            .catch(error => console.error('Error!', error.message));
    };

    return (
        <div id="contact">
            <div class="container">
                <div class="row">
                    <div class="contact-left">
                        <h1 class="sub-title">Contact Me</h1>
                        <p><i class="fa-solid fa-envelope"></i>chaubeyprashant20@gmail.com</p>
                        <p><i class="fa-solid fa-phone"></i>7869861631</p>
                        <div class="social-icons">
                            <a href="https://github.com/chaubeyprashant"><i class="fa-brands fa-square-github"></i></a>
                            <a href="#!"><i class="fa-brands fa-twitter-square"></i></a>
                            <a href="https://www.instagram.com/chaubey_1/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/prashant-chaubey-24a62116b/"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                        <a href="#!" class="btn btn2">DownLoad CV</a>
                    </div>
                    <div class="contact-right">
                        <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <input type="tel" name="Phone" placeholder="Your Phone" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" class="btn btn2">Submit</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
            <div class="copyright">Copyright © Prashant. Made with <i class="fa-solid fa-heart"></i></div>
        </div>
    );
}

export default ContactUs;