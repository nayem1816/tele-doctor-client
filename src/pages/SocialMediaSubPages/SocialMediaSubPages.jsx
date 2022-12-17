import React from 'react';
import SocialMediaSubPagesBanner from '../../components/SocialPageComponent/SocialMediaSubPages/SocialMediaSubPagesBanner/SocialMediaSubPagesBanner';
import SocialMediaSubPagesCard from '../../components/SocialPageComponent/SocialMediaSubPages/SocialMediaSubPagesCard/SocialMediaSubPagesCard';
import SocialMediaSubPagesMiddlePart from '../../components/SocialPageComponent/SocialMediaSubPages/SocialMediaSubPagesMiddlePart/SocialMediaSubPagesMiddlePart';
import SocialPageHeader from '../../components/SocialPageComponent/SocialPageHeader/SocialPageHeader';

const SocialMediaSubPages = () => {
    return (
        
        <div >
            <div>
            <SocialPageHeader />
            <SocialMediaSubPagesBanner />
            <SocialMediaSubPagesMiddlePart />
            <SocialMediaSubPagesCard />
            </div>
            
    </div>
    );
};

export default SocialMediaSubPages;


        