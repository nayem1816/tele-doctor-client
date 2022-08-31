import React from 'react';
import teleDoctorLogo from '../../../images/logo/teleDoctorLogo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            className="logo-image"
                            src={teleDoctorLogo}
                            alt=""
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarNavAltMarkup"
                    >
                        <div className=""></div>
                        <div className="navbar-nav gap-sm-2 gap-md-4 navbar-nav-part">
                            <Link className="nav-link text-dark" to="/home">
                                Home
                            </Link>
                            <Link className="nav-link text-dark" to="/doctor">
                                Doctor
                            </Link>
                            <Link className="nav-link text-dark" to="/about">
                                About Us
                            </Link>
                            <Link
                                className="nav-link text-dark"
                                to="/medicalQa"
                            >
                                Medical Q&#38;A
                            </Link>
                            <Link className="nav-link text-dark" to="/covid19">
                                Covid 19
                            </Link>
                        </div>
                        {user ? (
                            <button
                                onClick={logout}
                                className="btn btn-primary"
                            >
                                Logout
                            </button>
                        ) : (
                            <div className="navbar-nav gap-2 navbar-login-part">
                                <Link
                                    className="nav-link text-dark"
                                    to="/login"
                                >
                                    Login
                                </Link>
                                <Link
                                    className="nav-link text-dark"
                                    to="/signup"
                                >
                                    Signup
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
