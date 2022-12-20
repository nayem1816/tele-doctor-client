import React from 'react';
import teleDoctorLogo from '../../../images/logo/teleDoctorLogo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import HeaderLogin from './HeaderLogin';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [recentDisease, setRecentDisease] = React.useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('https://tele-doctor-server.vercel.app/api/v1/ReadRecentDiseases')
            .then((res) => res.json())
            .then((data) => {
                setRecentDisease(data.data[0].diseaseName);
            });
    }, []);

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
                            {user?.email && (
                                <Link
                                    className="nav-link text-dark"
                                    to="/socialMediaPage"
                                >
                                    Social Media
                                </Link>
                            )}
                            {recentDisease === null ? (
                                ''
                            ) : (
                                <Link
                                    className="nav-link text-dark"
                                    to="/recent-disease"
                                >
                                    {recentDisease}
                                </Link>
                            )}
                        </div>
                        <HeaderLogin />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
