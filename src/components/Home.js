import React, { useState } from 'react';

const Home = () => {
    const [activeTab, setActiveTab] = useState('skills');
    return (
        <div>
            <div id="about">
                <div class="container">
                    <div class="row">
                        <div class="about-col-1">
                            <img src="images/pexels-tucă-bianca-848117.jpg" alt="" />
                        </div>
                        <div class="about-col-2">
                            <h1 class="subtitle">About Me</h1>
                            <p>
                                "I'm a passionate software developer with over 5 years of experience, dedicated to building scalable, intelligent, and high-performance solutions that seamlessly transition from development to deployment. My expertise spans across mobile, web, and cloud technologies — from crafting dynamic Flutter apps for Android and iOS to developing robust web platforms using React, Node.js, and Next.js.

                                I have a growing focus on AI-driven development, integrating machine learning APIs and automation tools to enhance user experiences and product capabilities. My experience also extends to Cloud and DevOps practices, leveraging platforms like AWS, Google Cloud, and Docker for deployment, monitoring, and CI/CD automation through GitHub Actions and GitLab CI/CD.

                                I thrive in Agile, cross-functional teams and am proficient with tools like Jira, Notion, and GitLab for streamlined collaboration. With a strong emphasis on UI/UX and performance optimization, I ensure every product I build is not only functional but also delightful to use.

                                From concept to deployment, I'm driven by innovation, leveraging modern technologies — AI, Cloud, and automation — to deliver impactful digital experiences that scale.”
                            </p>
                            <div className="tab-titles">
                                <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => setActiveTab('skills')}>Skills</p>
                                <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => setActiveTab('experience')}>Experience</p>
                                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => setActiveTab('education')}>Education</p>
                            </div>
                            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                                <ul>
                                    <li>App Development
                                        <span><br />Building high-performance Android and iOS apps using Flutter and native frameworks, focused on scalability and seamless UX</span>
                                    </li>
                                    <li>Web Development
                                        <span><br />Developing dynamic and responsive web applications using React, Next.js, and Node.js with modern design principles</span>
                                    </li>
                                    <li>Backend Development
                                        <span><br />Architecting secure and efficient APIs, microservices, and databases to support large-scale mobile and web applications</span>
                                    </li>
                                    <li>AI & Intelligent Systems
                                        <span><br />Building AI-powered solutions using LLMs, custom AI agents, and Retrieval-Augmented Generation (RAG) pipelines integrated with vector databases like Pinecone and FAISS</span>
                                    </li>
                                    <li>Cloud & DevOps
                                        <span><br />Implementing CI/CD pipelines, containerization, and scalable deployments using Docker, Kubernetes, AWS, and Google Cloud for smooth end-to-end delivery</span>
                                    </li>
                                </ul>

                            </div>
                            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                                <ul>
                                    <li><span>2024</span><br />Staff Engineer at <a
                                        href="https://www.careinsurance.com/">Care Health Insurance</a></li>
                                    <li><span>2023 - 2024</span><br />Senior Software Developer at <a
                                        href="https://softwaremathematics.com">Lindera Care</a></li>
                                    <li><span>2021 - 2023</span><br />Software Developer at <a
                                        href="https://www.stockdaddy.in">Stock Daddy</a></li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                                <ul>
                                    <li><span>2019-2021</span><br />MCA</li>
                                    <li><span>2016-2019</span><br />BCA</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services">
                <div class="container">
                    <h1 class="sub-title">My Services</h1>
                    <div class="services-list">
                        <div>
                            <i class="fa-solid fa-code"></i>
                            <h2>App Development</h2>
                            <p>Building high-performance mobile applications for iOS and Android using Flutter and native frameworks. I focus on creating seamless, scalable, and visually appealing user experiences from concept to deployment.</p>
                        </div>

                        <div>
                            <i class="fa-solid fa-crop"></i>
                            <h2>Web Development</h2>
                            <p>Developing modern, responsive, and high-performing web applications using React, Next.js, and Node.js. I ensure smooth front-end to back-end integration with a strong focus on speed, accessibility, and user engagement.</p>
                        </div>

                        <div>
                            <i class="fa-brands fa-app-store-ios"></i>
                            <h2>Backend Development & AI Integration</h2>
                            <p>Designing secure and scalable backend architectures with RESTful APIs, microservices, and databases. I also integrate AI agents, RAG (Retrieval-Augmented Generation) pipelines, and vector databases like Pinecone and FAISS to deliver intelligent, data-driven systems.</p>
                        </div>

                        <div>
                            <i class="fa-solid fa-cloud"></i>
                            <h2>Cloud & DevOps</h2>
                            <p>Implementing automated CI/CD pipelines, containerized environments, and cloud deployments using Docker, Kubernetes, AWS, and Google Cloud. I ensure smooth development workflows and scalable, reliable production systems.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="portfolio">
                <div class="container">
                    <h1 class="sub-title">My Work</h1>
                    <div class="work-list">
                        <div class="work">
                            <img src="images/work-1.png" alt="" />
                            <div class="layer">
                                <h3>Lindera Mobile App</h3>
                                <p>"Lindera Mobile App," a German-based mobility analysis tool for healthcare, assesses mobility
                                    and generates reports to enhance patient care.
                                </p>
                                <a href="https://play.google.com/store/apps/details?id=com.linderaredux&hl=en_IN&gl=US"><i
                                    class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div class="work">
                            <img src="images/work-2.png" alt="" />
                            <div class="layer">
                                <h3>LTech Challenge App</h3>
                                <p>Are you a Yoga Star? A Fitness Freak? Find out with the LTech Challenge app! Powered by Lindera's AI, this app measures your performance in fitness and yoga challenges, showcasing the capabilities of the Lindera SDK.</p>
                                <a href="https://play.google.com/store/apps/details?id=com.linderaredux&hl=en_IN&gl=US"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div class="work">
                            <img src="images/work-3.png" alt="" />
                            <div class="layer">
                                <h3>Lindera Website</h3>
                                <p>"Lindera Website" is the online platform showcasing Lindera Mobile App, a German-based
                                    healthcare tool analyzing mobility and improving patient care. Explore our site to discover
                                    how Lindera enhances healthcare practices.
                                </p>
                                <a href="https://lindera.de/en/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div class="work">
                            <img src="images/glitchh_ecommerce.jpeg" alt="" />
                            <div class="layer">
                                <h3>Stock Daddy App</h3>
                                <p>Stock Daddy is your go-to app for stock market learning and trading. Whether you're new to
                                    investing or an experienced trader, we've got you covered with:</p>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.easemytrades.stockdaddy&hl=en_IN&gl=US"><i
                                        class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div class="work">
                            <img src="images/glitchh_social_media.jpeg" alt="" />
                            <div class="layer">
                                <h3>Stock Daddy Website</h3>
                                <p>"Stock Daddy Website" is an educational platform for stock market trading, offering
                                    user-friendly resources for all levels of investors.</p>
                                <a href="https://www.stockdaddy.in/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div class="work">
                            <img src="images/stockdaddy_social.jpeg" alt="" />
                            <div class="layer">
                                <h3>Eyewa Online Eyewear Store</h3>
                                <p>Eyewa is the largest online eyewear store in the Middle East, offering affordable, high-quality prescription glasses, sunglasses, blue light glasses, and contact lenses.</p>
                                <a href="https://apps.apple.com/us/app/eyewa-eyewear-shopping-app/id1463605579"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div class="work">
                            <img src="images/lindera_website.jpeg" alt="" />
                            <div class="layer">
                                <h3>Stock Daddy Social</h3>
                                <p>"Stock Daddy Social" is a trader-focused social media app where users share news and insights
                                    on the stock market, create groups, and connect with fellow traders. Join the community and
                                    stay informed!
                                </p>
                                <a href="https://www.stockdaddy.in/login?redirect=/community"><i
                                    class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div class="work">
                            <img src="images/koko_bliss.jpeg" alt="" />
                            <div class="layer">
                                <h3>Glitch Social Media</h3>
                                <p>"Glitch Social Media" is a gaming-focused platform where users connect, complete missions,
                                    and earn rewards. Join the community and level up your gaming experience!
                                </p>
                                <a href="#!"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="#!" class="btn">See more</a>
                </div>
            </div>
            <div id="testimonial">
                <div class="testimonials-cotainer">
                    <h1 class="sub-title" style={{ padding: '20px 100px' }}>Testimonials</h1>
                    <div class="row justify-content-center" style={{ padding: '20px 100px' }}>
                        <div class="testimonial-card">
                            <div class="testimonial-image">
                                <img src="images/Ivana_client.jpeg" alt="profile-sample2" />
                            </div>
                            <div class="testimonial-details">
                                <blockquote>
                                    <p>"Working with Prashant on our project was an absolute pleasure. His attention to detail
                                        and
                                        commitment to delivering high-quality work were evident throughout the entire process.
                                        He
                                        exceeded our expectations and brought valuable insights to the table. We look forward to
                                        collaborating with him again in the future."</p>
                                </blockquote>
                                <h3>Ivana</h3>
                                <h5>CEO</h5>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-image">
                                <img src="images/jene_smith.jpeg" alt="profile-sample3" />
                            </div>
                            <div class="testimonial-details">
                                <blockquote>
                                    <p>"Prashant expertise and dedication were instrumental in the success of our project. Her
                                        strategic approach and attention to detail ensured that every aspect of the project was
                                        executed flawlessly. We were impressed by her ability to exceed our expectations and
                                        deliver results that truly made a difference. We look forward to working with Prashant
                                        again
                                        on future endeavors."</p>
                                </blockquote>
                                <h3>Jane Smith</h3>
                                <h5>Marketing Manager</h5>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-image">
                                <img src="images/mike_johnson.jpeg" alt="profile-sample4" />
                            </div>
                            <div class="testimonial-details">
                                <blockquote>
                                    <p>"Partnering with Prashant was like unleashing a software superhero on our project! His
                                        innovative thinking and problem-solving skills propelled our project to new heights.
                                        Prashant's dedication to excellence and knack for turning complex challenges into
                                        elegant
                                        solutions left us in awe. We're grateful for his invaluable contributions and eagerly
                                        anticipate future collaborations!"</p>
                                </blockquote>
                                <h3>Mike Johnson</h3>
                                <h5>Software Engineer</h5>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-image">
                                <img src="images/emily_brown.jpeg" alt="profile-sample5" />
                            </div>
                            <div class="testimonial-details">
                                <blockquote>
                                    <p>"Working with Prashant was an absolute game-changer for our project! His coding wizardry
                                        and
                                        problem-solving prowess turned our ideas into reality faster than we ever imagined.
                                        Prashant's passion for clean code and innovative solutions brought a fresh perspective
                                        to
                                        our team, and his infectious enthusiasm kept everyone motivated. We're thrilled with the
                                        results and can't wait to team up with him again!"</p>
                                </blockquote>
                                <h3>Emily Brown</h3>
                                <h5>Graphic Designer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Home;