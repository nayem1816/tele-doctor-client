import React from 'react';
import alex from "../../../images/social-media/alex.jpg";
import rony from "../../../images/social-media/rony.jpg";
import alena from "../../../images/social-media/alena.jpg";
import aziz from "../../../images/social-media/aziz.jpg";
import femaleDrOne from "../../../images/social-media/women-doctor-1.jpg";
import maleDrOne from "../../../images/social-media/male-doctor-1.jpg";
import maleDrTwo from "../../../images/social-media/male-doctor-2.jpg";
import femaleDrTwo from "../../../images/social-media/women-doctor-2.jpg";
import {Link} from "react-router-dom";
import "./SocialMainActiveUser.css"



const SocialMainActiveUser = () => {
    return (
        <div>
            <div className="shadow p-4">
                <h5 className="fw-bold text-center pb-4">All Active User</h5>
                <div
                    style={{ height: '600px' }}
                    className=" ms-2"
                >
                    <ul className="list-unstyled  ">
                        <div className="d-flex ">
                        <li className="ps-4 pb-3 ">
                        <img src={alex} alt="" class="profile-photo " />
                        </li>
                        <Link to=""><p className="p-3">Alex</p></Link>
                        </div>
                        <div className="d-flex ">
                        <li className="ps-4 pb-3">
                        <img src={rony} alt="" class="profile-photo " />
                        </li>
                        <p className="p-3">Al Amin</p>
                        </div>
                        <div className="d-flex ">
                        <li className="ps-4 pb-3">
                        <img src={alena} alt="" class="profile-photo " />
                        </li>
                        <p className="p-3">Alena Jolly</p>
                        </div>
                        <div className="d-flex ">
                        <li className="ps-4 pb-3">
                        <img src={aziz} alt="" class="profile-photo " />
                        </li>
                        <p className="p-3">Aziz</p>
                        </div>
                        <div className="d-flex ">
                        <li className="ps-4 pb-3">
                        <img src={femaleDrOne} alt="" class="profile-photo " />
                        </li>
                        <p className="p-3">Dr. Tina </p>
                        </div>
                        <div className="d-flex ">
                        <li className="ps-4 pb-3">
                        <img src={maleDrOne} alt="" class="profile-photo " />
                        </li>
                        <p className="p-3">Dr. Bryn </p>
                        </div>
                        <div className="d-flex ">
                        <li className="ps-4 pb-3">
                        <img src={maleDrTwo} alt="" class="profile-photo " />
                        </li>
                        <p className="p-3">Dr. John</p>
                        </div>
                        <div className="d-flex ">
                        <li className="ps-4 pb-3">
                        <img src={femaleDrTwo} alt="" class="profile-photo " />
                        </li>
                        <p className="p-3">Dr. Elisa </p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SocialMainActiveUser;