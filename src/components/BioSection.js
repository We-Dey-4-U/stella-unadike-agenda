// src/components/BioSection.js
import React from 'react';
import './BioSection.css';

const BioSection = () => {
    return (
        <div className="bio-section">
            <div className="bio-image">
                <img src='/images/mum2.JPG' alt="Honourable Stella Unadike" />
            </div>
            <div className="bio-text">
                <h2>About Honourable Stella Unadike</h2>
                
                {/* Introduction Section */}
                <p>
                    Honourable Evangelist Stella Unadike Nonyerem is a dedicated public servant with a deep commitment to improving her community. Born and raised in Ubakuru Mbieri, the heart of the Unadike family, she has a strong connection to the people she serves and a profound understanding of the unique challenges facing her community.
                </p>

                {/* Educational Background */}
                <h3>Educational Background</h3>
                <p>
                    Honourable Stella Unadike completed her secondary education at Owerri Girls Secondary School, where she was known for her academic excellence and leadership qualities. She then went on to pursue her higher education at the prestigious University of Port Harcourt, where she earned degrees in Sociology and Psychology. Her academic background has provided her with the tools to understand and address the social issues affecting her community and beyond.
                </p>

                {/* Career and Teaching Service */}
                <h3>Career and Teaching Service</h3>
                <p>
                    Before entering public office, Honourable Evangelist Stella Unadike served as a teacher, using her skills to shape the future of many young minds. Through her work in education, she fostered a nurturing environment for her students, teaching not only academic lessons but also the values of responsibility, respect, and community engagement. Her years of service in education gave her invaluable insight into the needs of families and the aspirations of the youth in her community.
                </p>

                {/* Community Leadership and Achievements */}
                <h3>Community Leadership and Achievements</h3>
                <p>
                    Honourable Stella Unadike's transition into public service was driven by a desire to make a lasting impact on her community. Throughout her time in office, she has been instrumental in initiating and supporting projects that have enhanced the lives of residents in Ubakuru Mbieri and surrounding areas. Some of her key achievements include:
                </p>
                <ul>
                    <li>Spearheading community programs focused on youth development, public health, and local empowerment.</li>
                    <li>Advocating for the improvement of local infrastructure, which led to the successful completion of projects such as road repairs and the renovation of public spaces.</li>
                    <li>Championing local businesses by promoting small enterprise grants and organizing community-building events.</li>
                </ul>

                {/* Dedication to the Community */}
                <h3>Dedication to the Community</h3>
                <p>
                    Honourable Stella Unadike is known for her transparent approach to leadership. She regularly holds town halls to engage directly with constituents, ensuring that their voices are heard and their concerns addressed. Her unwavering dedication to public service is reflected in her consistent efforts to work for the betterment of her people, advocating for policies that improve their daily lives and ensure long-term sustainability for future generations.
                </p>

                {/* Vision for the Future */}
                <h3>A Vision for the Future</h3>
                <p>
                    As she continues her work in public service, Honourable Stella Unadike remains focused on enhancing education, economic growth, and public safety in her community. Her vision for the future is one of inclusivity, prosperity, and resilience, where every resident of Ubakuru Mbieri has the opportunity to thrive. She believes that by empowering individuals, fostering collaboration, and prioritizing sustainable development, her community will continue to grow stronger and more united.
                </p>
            </div>
        </div>
    );
};

export default BioSection;