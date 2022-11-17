import React from 'react';
import nayem from '../../../images/img/founding-team/nayem.jpg';
import rony from '../../../images/img/founding-team/rony.jpg';
import './FoundingTeam.css';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

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
                                <a href="https://www.facebook.com/nayem1816/">
                                    <BsFacebook />
                                </a>
                                <a href="https://www.linkedin.com/in/md-nayem-hossain-nym//">
                                    <AiFillLinkedin />
                                </a>
                                <a href="https://github.com/nayem1816/">
                                    <BsGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center p-3">
                        <img src={rony} alt="" />
                        <div className="details p-3">
                            <h4>Ayesha Akter Sayma</h4>
                            <div className="icon d-flex gap-3 justify-content-center">
                                <a href="https://www.facebook.com/ayesha.sayma.1/">
                                    <BsFacebook />
                                </a>
                                <a href="https://www.linkedin.com/in/ayesha-shayma-085275227//">
                                <AiFillLinkedin />
                                </a>
                                <a href="https://github.com/AyeshaAktar/">
                                    <BsGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center p-3">
                        <img src={rony} alt="" />
                        <div className="details p-3">
                            <h4>Jeba Tahsin</h4>
                            <div className="icon d-flex gap-3 justify-content-center">
                                <a href="https://www.facebook.com/tahsin.jeba.94/">
                                    <BsFacebook />
                                </a>
                                <a href="https://www.linkedin.com/in/jeba-tahsin-062275227//">
                                <AiFillLinkedin />
                                </a>
                                <a href="https://github.com/Jeba-tahsin/">
                                    <BsGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center p-3">
                        <img src={nayem} alt="" />
                        <div className="details p-3">
                            <h4>Somaya Sayma</h4>
                            <div className="icon d-flex gap-3 justify-content-center">
                                <a href="https://www.facebook.com/somaya.sayma.1/">
                                    <BsFacebook />
                                </a>
                                <a href="https://www.linkedin.com/in/somaya-sayma-5a5273227//">
                                <AiFillLinkedin />
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
                            <h4>Md. Alamin Rony</h4>
                            <div className="icon d-flex gap-3 justify-content-center">
                                <a href="https://www.facebook.com/md.alamin.rony.898/">
                                    <BsFacebook />
                                </a>
                                <a href="https://www.linkedin.com/in/md-al-amin-rony-394a29136//">
                                <AiFillLinkedin />
                                </a>
                                <a href="https://github.com/Rony696-dotcom/">
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
