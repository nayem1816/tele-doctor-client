import React from 'react';
import socialSubPageBanner from "../../../../images/logo/social-media-banner.jpg";
const SocialMediaSubPagesBanner = () => {
    return (
        <div className="container mt-4">
    <div className="w-80 shadow-lg rounded p-2">
            <div className="">
                <img className="w-100 img-fluid" src={socialSubPageBanner} alt="banner" />
            </div>
            
        </div>
    </div>
    );
};

export default SocialMediaSubPagesBanner;