// src/components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
    return (
        <div className="projects">
            <h2>Honourable Stella's Transformative Projects</h2>
            <div className="project-cards">
                <div className="project-card">
                    <h3>Project Title 1</h3>
                    <iframe
                        src="https://www.youtube.com/embed/example1"
                        title="YouTube video 1"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="project-card">
                    <h3>Project Title 2</h3>
                    <iframe
                        src="https://www.youtube.com/embed/example2"
                        title="YouTube video 2"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="project-card">
                    <h3>Project Title 3</h3>
                    <iframe
                        src="https://www.youtube.com/embed/example3"
                        title="YouTube video 3"
                        allowFullScreen
                    ></iframe>
                </div>
                {/* Add more project cards as needed */}
            </div>
        </div>
    );
};

export default ProjectsSection;