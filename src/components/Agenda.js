// src/components/AgendaSection.js
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
import './AgendaSection.css';

const AgendaSection = () => {
    return (
        <div>
            <Navbar /> {/* Add the Navbar here */}

            {/* Hero Section */}
            <div className="hero-section">
                <img 
                    src='/images/mum2.JPG'// Replace with the path to your image
                    alt="Hero Banner"
                    className="hero-image" 
                />
            </div>

            <div className="agenda-section">
                <h2>Agenda of Honourable Stella Unadike</h2>
                <p>As a newly elected councilor, Honourable Stella Unadike is committed to fostering positive change in our community. Her agenda focuses on key areas that will directly impact and improve the lives of residents. Here’s what she intends to achieve during her time in office:</p>
                
                {/* Community Development */}
                <section className="agenda-item">
                    <h3>1. Community Development</h3>
                    <p>Honourable Stella aims to bring substantial infrastructure improvements to the area, ensuring all residents have access to clean, safe, and efficient public spaces. Key initiatives include:</p>
                    <ul>
                        <li>Providing free boreholes in strategic locations to ensure access to clean water for all neighborhoods.</li>
                        <li>Upgrading and maintaining roads, bridges, and public utilities to enhance connectivity and safety.</li>
                        <li>Building and renovating recreational centers, parks, and community halls to encourage social gatherings and community bonding.</li>
                    </ul>
                </section>
                
                {/* Education */}
                <section className="agenda-item">
                    <h3>2. Education</h3>
                    <p>Recognizing education as the foundation of a prosperous society, Honourable Stella will work toward creating accessible and quality educational opportunities for all. Her focus includes:</p>
                    <ul>
                        <li>Establishing ICT (Information and Communication Technology) centers in schools within her ward, providing students with essential computer skills and digital literacy training.</li>
                        <li>Supporting local schools through funding for better facilities, libraries, and educational materials.</li>
                        <li>Launching scholarship programs to assist talented students who face financial challenges.</li>
                        <li>Introducing adult literacy and skill development programs to empower the community.</li>
                    </ul>
                </section>

                {/* Economic Growth */}
                <section className="agenda-item">
                    <h3>3. Economic Growth</h3>
                    <p>To build a resilient economy, Honourable Stella is committed to stimulating local businesses and creating employment opportunities. Her economic agenda includes:</p>
                    <ul>
                        <li>Providing grants and low-interest loans for small businesses and startups to encourage entrepreneurship.</li>
                        <li>Organizing business fairs, markets, and trade exhibitions to boost local businesses and attract investments.</li>
                        <li>Collaborating with industries to create vocational training programs and apprenticeships, particularly for the youth.</li>
                    </ul>
                </section>

                {/* Health and Safety */}
                <section className="agenda-item">
                    <h3>4. Health and Safety</h3>
                    <p>Ensuring the health and safety of her constituents is a top priority for Honourable Stella. Her health and safety agenda includes:</p>
                    <ul>
                        <li>Enhancing healthcare facilities and ensuring residents have access to quality medical care.</li>
                        <li>Running public health awareness campaigns focusing on hygiene, disease prevention, and mental health support.</li>
                        <li>Collaborating with law enforcement to improve security, reduce crime rates, and ensure safe public spaces.</li>
                    </ul>
                </section>

                {/* Youth Empowerment */}
                <section className="agenda-item">
                    <h3>5. Youth Empowerment</h3>
                    <p>Honourable Stella understands the importance of empowering young people and providing them with opportunities for personal and professional growth. Her plans include:</p>
                    <ul>
                        <li>Launching programs focused on skill development, mentoring, and entrepreneurship for young people.</li>
                        <li>Establishing youth centers where young residents can engage in educational, social, and sports activities.</li>
                        <li>Supporting initiatives that encourage youth involvement in community service and leadership development.</li>
                    </ul>
                </section>

                {/* Transparency and Accountability */}
                <section className="agenda-item">
                    <h3>6. Transparency and Accountability</h3>
                    <p>To build trust and foster an inclusive government, Honourable Stella is committed to operating transparently. Her steps towards transparency include:</p>
                    <ul>
                        <li>Hosting regular town hall meetings to keep constituents informed and address their concerns.</li>
                        <li>Publishing periodic reports on her office’s accomplishments, budget allocations, and ongoing projects.</li>
                        <li>Implementing an accessible feedback system to ensure community members can voice their opinions and ideas.</li>
                    </ul>
                </section>
                
                {/* Vision for a Brighter Future */}
                <section className="agenda-item">
                    <h3>Vision for a Brighter Future</h3>
                    <p>Honourable Stella Unadike’s vision is to build a community where all residents have the resources, support, and opportunities needed to thrive. She believes in fostering a sustainable future, guided by compassion, resilience, and unity. By empowering individuals and enhancing local infrastructure, her goal is to create a legacy of progress, inclusivity, and prosperity for the generations to come.</p>
                </section>
            </div>

            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default AgendaSection;