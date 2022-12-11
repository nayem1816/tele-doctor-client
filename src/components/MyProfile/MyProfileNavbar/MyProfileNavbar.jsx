import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
import './MyProfileNavbar.css';

const MyProfileNavbar = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className="user mt-5">
                <div className="user-img d-flex justify-content-center">
                    <img
                        className="rounded-circle"
                        src={user.photoURL}
                        alt="user"
                    />
                </div>
            </div>
            <hr className="my-4 px-5" />
            <div className="my-profile-navbar-items p-0 m-0">
                <Link to="/my-profile" className="my-profile-navbar-item ">
                    My Profile
                </Link>
                <Link
                    to="/my-profile/appointments"
                    className="my-profile-navbar-item"
                >
                    My Appointment
                </Link>
                <Link to="/my-profile/chats" className="my-profile-navbar-item">
                    Chats
                </Link>
            </div>
        </div>
    );
};

export default MyProfileNavbar;
