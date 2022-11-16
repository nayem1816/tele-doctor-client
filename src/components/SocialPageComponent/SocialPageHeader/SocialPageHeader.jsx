import React from 'react';
import teleDoctorLogo from '../../../images/logo/teleDoctorLogo.png';
import { Link } from 'react-router-dom';

const SocialPageHeader = () => {
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
                        <Link className="nav-link text-dark" to="/socialMediaPage">
                            Social Media
                        </Link>
                        <Link className="nav-link text-dark" to="/yourPost">
                            Your Post
                        </Link>
                        <Link className="nav-link text-dark" to="/socialMediaSubPages">
                            Pages
                        </Link>
                        <Link className="nav-link text-dark" to="/profile">
                            Profile
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </nav>
    </div>
    );
};

export default SocialPageHeader;