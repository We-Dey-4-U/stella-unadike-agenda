// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import BioSection from './BioSection'; // Import the BioSection component
import ProjectsSection from './ProjectsSection';
import AppreciationMessage from './AppreciationMessage';
//import VideosSection from './VideosSection';
import Footer from './Footer'; // Import the Footer component
import './Home.css'; // Global styles for the homepage
import '../styles/global.css'; // Import global styles
import Blog from './Blog/Blog'; // Import the Blog component

const Home = () => {
    return (
        <div>
           
            <HeroSection />
            <BioSection /> {/* Add BioSection here */}
            <AppreciationMessage />
            <ProjectsSection />
            <Blog /> {/* This will display the blog after the contact form */}
            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default Home;