import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import auth from './../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const GoogleButton = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        <p>Error!</p>;
    }

    return (
        <div className="google-login d-flex justify-content-center">
            <button
                onClick={() => signInWithGoogle()}
                style={{ cursor: 'pointer' }}
                className="d-flex border justify-content-between px-2 py-2 rounded"
            >
                <div className="d-flex align-items-center">
                    <BiUserCircle className="fs-2 base-color" />
                    <span className="ms-2">Continue with google</span>
                </div>
                <div className="ms-5">
                    <FcGoogle className="fs-2" />
                </div>
            </button>
        </div>
    );
};

export default GoogleButton;
