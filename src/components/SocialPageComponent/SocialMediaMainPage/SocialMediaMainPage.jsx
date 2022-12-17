import React from 'react';
import AllPostMain from '../AllPostMain/AllPostMain';
import SocialMainActiveUser from '../SocialMainActiveUser/SocialMainActiveUser';
import SocialMediaMain from '../SocialMediaMain/SocialMediaMain';

const SocialMediaMainPage = () => {
    return (
        <div>
            <SocialMediaMain />
           <div className="container py-5">
               <div className="row">
                   <div className="col-lg-3 col-md-12">
                       <SocialMainActiveUser />
                    </div>
                    <div className="col-lg-9 col-md-12 mt-lg-0 mt-md-4 mt-4">
                        <AllPostMain />
                    </div>
                </div>
             </div>  
        </div>
    );
};

export default SocialMediaMainPage;