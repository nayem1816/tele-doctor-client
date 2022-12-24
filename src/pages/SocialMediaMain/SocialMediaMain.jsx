import React from 'react';
import Header from '../../components/SocialMediaMain/Header/Header';
import { Outlet } from 'react-router-dom';

const SocialMediaMain = () => {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default SocialMediaMain;
