import React from 'react';
import { Link } from 'react-router-dom';
import "./SocialPageHeader.css";

const SocialPageHeader = () => {
    return (
        <div className="social-NavBg mt-2">
            <div className="container  ">
        <nav className="navbar  navbar-expand-lg ">
            <div className="container-fluid">
                
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
                    className="collapse navbar-collapse "
                    id="navbarNavAltMarkup"
                >
                    <div className=""></div>
                    <div className="navbar-nav gap-sm-2 gap-md-4 navbar-nav-part">
                        <Link className="nav-link text-white" to="/yourPost">
                            Your Post
                        </Link>
                        <Link className="nav-link text-white" to="/socialMediaSubPages">
                            Pages
                        </Link>
                        <Link className="nav-link text-white" to="/profile">
                            Profile
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </nav>
    </div>
        </div>
        
    );
};

export default SocialPageHeader;