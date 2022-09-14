import React from 'react';
import LoginSignupBtn from './../../components/Login/LoginSignupBtn/LoginSignupBtn';
import SignupForm from './../../components/Login/Signup/SignupForm';

const Signup = () => {
    return (
        <div style={{ backgroundColor: '#A7DBDD' }} className="main h-100 py-4">
            <LoginSignupBtn />
            <SignupForm />
        </div>
    );
};

export default Signup;
