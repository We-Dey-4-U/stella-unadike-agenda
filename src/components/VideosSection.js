import React from 'react';
import './VideosSection.css'; // Add CSS for styling if needed

const VideosSection = () => {
    return (
        <div className="videos">
            <h2>More Videos</h2>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/example3"
                title="YouTube video"
                allowFullScreen
            ></iframe>
            {/* Add more videos as needed */}
        </div>
    );
};

export default VideosSection;