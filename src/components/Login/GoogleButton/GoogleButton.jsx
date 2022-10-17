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
            console.log(user.user.email);
            fetch('http://localhost:5000/api/v1/CreateProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Name: user.user.displayName,
                    EmailAddress: user.user.email,
                    ProfilePic: user.user.photoURL,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log('User Created Successfully');
                })
                .catch((err) => {
                    console.log(err);
                });

            fetch('http://localhost:5000/api/v1/UserLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    EmailAddress: user.user.email,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem(
                        'userToken',
                        JSON.stringify(data.token)
                    );
                    navigate(from, { replace: true });
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });
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
