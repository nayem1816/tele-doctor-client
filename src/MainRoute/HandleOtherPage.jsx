import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../components/common/Header/Header';
import Footer from './../components/common/Footer/Footer';

const HandleOtherPage = () => {
    return (
        <div
            style={{ height: '100vh' }}
            className="body-container d-flex flex-column align-items-between"
        >
            <div className="">
                <div className="header">
                    <Header />
                </div>
                <div className="main">
                    <Outlet />
                </div>
            </div>
            <div className="footer mt-auto p-2">
                <Footer />
            </div>
        </div>
    );
};

export default HandleOtherPage;
