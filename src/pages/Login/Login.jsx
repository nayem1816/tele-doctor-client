import React from 'react';
import LoginSignupBtn from './../../components/Login/LoginSignupBtn/LoginSignupBtn';
import LoginForm from '../../components/Login/Login/LoginForm';

const Login = () => {
    return (
        <div style={{ backgroundColor: '#A7DBDD' }} className="main h-100 py-4">
            <LoginSignupBtn />
            <LoginForm />
        </div>
    );
};

export default Login;
