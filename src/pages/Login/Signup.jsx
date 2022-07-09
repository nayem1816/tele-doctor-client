import React from 'react';
import Header from './../../components/common/Header/Header';
import Footer from './../../components/common/Footer/Footer';
import LoginSignupBtn from './../../components/Login/LoginSignupBtn/LoginSignupBtn';
import SignupForm from './../../components/Login/Signup/SignupForm';

const Signup = () => {
    return (
        <div className="body-container d-flex flex-column">
            <div className="header">
                <Header />
            </div>
            <div style={{ backgroundColor: '#A7DBDD' }} className="main h-100">
                <LoginSignupBtn />
                <SignupForm />
            </div>
            <div className="footer mt-auto p-2">
                <Footer />
            </div>
        </div>
    );
};

export default Signup;
