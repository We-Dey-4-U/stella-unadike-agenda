import React, { useEffect } from 'react';
import './AdComponent.css';

const AdComponent = () => {
    useEffect(() => {
        const insertAdSenseAd = () => {
            const adContainer = document.createElement('ins');
            adContainer.className = 'adsbygoogle';
            adContainer.style = 'display:block';
            adContainer.setAttribute('data-ad-client', 'YOUR_AD_CLIENT'); // Replace with your AdSense client ID
            adContainer.setAttribute('data-ad-slot', 'YOUR_AD_SLOT'); // Replace with your AdSense ad slot ID
            adContainer.setAttribute('data-ad-format', 'auto');
            document.getElementById('ad-container').appendChild(adContainer);
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        };
        
        insertAdSenseAd();
    }, []);

    return <div id="ad-container" className="ad-container"></div>;
};

export default AdComponent;