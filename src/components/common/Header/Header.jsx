import React from 'react';
import teleDoctorLogo from '../../../images/logo/teleDoctorLogo.png';
import userIcon from '../../../images/icons/user.png';
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

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error!</div>;
    }
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
                                Medical Q&#38;Link
                            </Link>
                            <Link className="nav-link text-dark" to="/covid19">
                                Covid 19
                            </Link>
                        </div>
                        {user ? (
                            <div className="d-flex justify-content-center">
                                <div className="dropdown">
                                    <button
                                        className="btn dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            width="35px"
                                            height="35px"
                                            className="img-fluid rounded-circle border border-1 p-1 dropdown-toggle"
                                            src={userIcon}
                                            alt=""
                                        />
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-lg-end">
                                        <li className="text-center">
                                            <p className="dropdown-item m-0 text-center">
                                                <b>
                                                    {user.displayName ||
                                                        user.email}
                                                </b>
                                            </p>
                                            <small className="text-muted">
                                                Student ID: P-0001
                                            </small>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                            >
                                                Request Doctor
                                            </Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link
                                                onClick={logout}
                                                className="dropdown-item"
                                                to="#"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            // </button>
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
