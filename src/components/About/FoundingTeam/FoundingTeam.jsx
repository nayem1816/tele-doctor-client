import React from 'react';
import nayem from '../../../images/img/founding-team/nayem.jpg';
import rony from '../../../images/img/founding-team/rony.jpg';
import sayma from '../../../images/img/founding-team/sayma.png';
// import jeba from '../../../images/img/founding-team/jeba.jpg';
import ayesha from '../../../images/img/founding-team/ayesha.jpg';
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
                        <div
                            style={{ width: '100%', height: '250px' }}
                            className=""
                        >
                            <img
                                className="img-fluid border rounded-top"
                                src={nayem}
                                alt=""
                            />
                        </div>
                        <div className="details p-3 border rounded-bottom">
                            <h4>Md Nayem Hossain</h4>
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
                        <div
                            style={{ width: '100%', height: '250px' }}
                            className=""
                        >
                            <img
                                className="img-fluid border rounded-top"
                                src={rony}
                                alt=""
                            />
                        </div>
                        <div className="details p-3 border rounded-bottom">
                            <h4>All Amin Rony</h4>
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
                        <div
                            style={{ width: '100%', height: '250px' }}
                            className=""
                        >
                            <img
                                className="img-fluid border rounded-top"
                                src={ayesha}
                                alt=""
                            />
                        </div>
                        <div className="details p-3 border rounded-bottom">
                            <h4>Ayesha Akter Sayma</h4>
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
                        <div
                            style={{ width: '100%', height: '250px' }}
                            className=""
                        >
                            <img
                                style={{ backgroundColor: 'gray' }}
                                className="img-fluid border rounded-top"
                                src={sayma}
                                alt=""
                            />
                        </div>
                        <div className="details p-3 border rounded-bottom">
                            <h4>Jeba Tahsin</h4>
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
                        <div
                            style={{ width: '100%', height: '250px' }}
                            className=""
                        >
                            <img
                                style={{ backgroundColor: 'gray' }}
                                className="img-fluid border rounded-top"
                                src={sayma}
                                alt=""
                            />
                        </div>
                        <div className="details p-3 border rounded-bottom">
                            <h4>Somaya sayma</h4>
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
