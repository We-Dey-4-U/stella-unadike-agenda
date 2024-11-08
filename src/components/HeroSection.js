import React from 'react';
import Slider from 'react-slick';
import './HeroSection.css'; // Import your CSS file for styles

const HeroSection = () => {
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        fade: true, // Fade effect for transition
        cssEase: 'ease-in-out', // Easing for the transition
    };

    const images = [
        '/images/honpics.JPG',
        '/images/honpics.JPG',
        '/images/elder lady home care.JPG',
        // Add more images as needed
    ];

    return (
        <div className="hero">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`Slide ${index + 1}`} />
                        <div className="hero-text">
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroSection;