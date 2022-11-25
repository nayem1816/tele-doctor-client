import React from 'react';
import AllPostMain from '../../components/SocialPageComponent/AllPostMain/AllPostMain';
import SocialMediaMain from '../../components/SocialPageComponent/SocialMediaMain/SocialMediaMain';

import SocialPageHeader from '../../components/SocialPageComponent/SocialPageHeader/SocialPageHeader';

const SocialMediaPage = () => {
    return (
        <div>
            <SocialPageHeader />
            <SocialMediaMain />
            <AllPostMain />
        </div>
    );
};

export default SocialMediaPage;