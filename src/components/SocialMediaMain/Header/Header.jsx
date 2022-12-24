import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ backgroundColor: '#5921cf' }} className="py-3 my-4">
            <div className="container">
                <Link
                    className="me-4 text-white fw-bold fs-4"
                    to="/social-media"
                >
                    Home
                </Link>
                <Link
                    className="me-4 text-white fw-bold fs-4"
                    to="/social-media/pages"
                >
                    Pages
                </Link>
                <Link
                    className="me-4 text-white fw-bold fs-4"
                    to="/social-media/profile"
                >
                    Profile
                </Link>
            </div>
        </div>
    );
};

export default Header;
