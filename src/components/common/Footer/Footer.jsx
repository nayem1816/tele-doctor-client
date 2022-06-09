import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from '../../../images/icons/SocialMedia/facebook.png';
import google from '../../../images/icons/SocialMedia/google-plus.png';
import instagram from '../../../images/icons/SocialMedia/instagram.png';
import linkedin from '../../../images/icons/SocialMedia/linkedin.png';
import twitter from '../../../images/icons/SocialMedia/twitter.png';

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-3 text-md-start text-center text-lg-start">
                    <h2>
                        <Link className="base-color footer-logo-text" to="/">
                            TeleDoctor
                        </Link>
                    </h2>
                    <p className="pe-2">
                        Health care is one of the fastest-growing industries all
                        over the world.
                    </p>
                </div>
                <div className="col-md-3 d-flex justify-content-md-end justify-content-center text-md-start text-center text-lg-start">
                    <div className="">
                        <h4>ABOUT</h4>
                        <p>
                            <Link to="/about">TeleDoctor</Link>
                        </p>
                        <p>
                            <Link to="/about">Team</Link>
                        </p>
                        <p>
                            <Link to="/about">Career</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-md-end justify-content-center text-md-start text-center text-lg-start">
                    <div className="">
                        <h4>FOLLOW US</h4>
                        <p>
                            <Link to="/about">Blogs</Link>
                        </p>
                        <p>
                            <Link to="/about">Trams and Condition</Link>
                        </p>
                        <p>
                            <Link to="/about">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-md-end justify-content-center text-md-start text-center text-lg-start">
                    <div className="">
                        <h4>LEGAL</h4>
                        <p>
                            <Link to="/about">Partners</Link>
                        </p>
                        <p>
                            <Link to="/about">Newsroom</Link>
                        </p>
                        <p>
                            <Link to="/about">Help</Link>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-end">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-start justify-content-lg-start align-items-center">
                        <p>
                            &copy; {year}
                            <Link className="base-color" to="/">
                                TeleDoctor.
                            </Link>
                            <span className="ms-1">All rights reserved.</span>
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end justify-content-lg-end gap-3">
                        <Link to="/">
                            <img src={facebook} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={google} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={instagram} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={linkedin} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={twitter} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
