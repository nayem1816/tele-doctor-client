import React from 'react';
import nayem from '../../../images/img/founding-team/nayem.jpg';
import rony from '../../../images/img/founding-team/rony.jpg';
import './FoundingTeam.css';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const FoundingTeam = () => {
    return (
        <div className="my-5 py-5">
            <h2 className="text-center">Founding Team</h2>
            <div className="container">
                <div className="row founding-team">
                    <div className="col-md-4 text-center p-3">
                        <img src={nayem} alt="" />
                        <div className="details p-3">
                            <h4>Nayem Hossain</h4>
                            <div className="icon d-flex gap-3 justify-content-center">
                                <a href="/">
                                    <BsFacebook />
                                </a>
                                <a href="/">
                                    <AiFillInstagram />
                                </a>
                                <a href="/">
                                    <BsGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center p-3">
                        <img src={rony} alt="" />
                        <div className="details p-3">
                            <h4>Nayem Hossain</h4>
                            <div className="icon d-flex gap-3 justify-content-center">
                                <a href="/">
                                    <BsFacebook />
                                </a>
                                <a href="/">
                                    <AiFillInstagram />
                                </a>
                                <a href="/">
                                    <BsGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center p-3">
                        <img src={rony} alt="" />
                        <div className="details p-3">
                            <h4>Nayem Hossain</h4>
                            <div className="icon d-flex gap-3 justify-content-center">
                                <a href="/">
                                    <BsFacebook />
                                </a>
                                <a href="/">
                                    <AiFillInstagram />
                                </a>
                                <a href="/">
                                    <BsGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center p-3">
                        <img src={nayem} alt="" />
                        <div className="details p-3">
                            <h4>Nayem Hossain</h4>
                            <div className="icon d-flex gap-3 justify-content-center">
                                <a href="/">
                                    <BsFacebook />
                                </a>
                                <a href="/">
                                    <AiFillInstagram />
                                </a>
                                <a href="/">
                                    <BsGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center p-3">
                        <img src={rony} alt="" />
                        <div className="details p-3">
                            <h4>Nayem Hossain</h4>
                            <div className="icon d-flex gap-3 justify-content-center">
                                <a href="/">
                                    <BsFacebook />
                                </a>
                                <a href="/">
                                    <AiFillInstagram />
                                </a>
                                <a href="/">
                                    <BsGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoundingTeam;
