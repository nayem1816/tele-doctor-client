import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LoginSignupBtn.css';

const LoginSignupBtn = () => {
    const location = useLocation().pathname;
    let loginPath = location === '/login' ? true : false;
    let signupPath = location === '/signup' ? true : false;

    return (
        <div className="my-5 text-center">
            <Link to="/login">
                <button
                    className={`${
                        loginPath ? 'active-btn' : ''
                    } btn-style px-5 shadow rounded-start`}
                >
                    Login
                </button>
            </Link>
            <Link to="/signup">
                <button
                    className={`${
                        signupPath ? 'active-btn' : ''
                    } btn-style px-5 shadow rounded-end`}
                >
                    Signup
                </button>
            </Link>
        </div>
    );
};

export default LoginSignupBtn;
