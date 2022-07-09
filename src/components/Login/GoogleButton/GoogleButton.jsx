import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';

const GoogleButton = () => {
    return (
        <div className="google-login d-flex justify-content-center">
            <button
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
