import React from 'react';
import './SocialMainActiveUser.css';
import { Link } from 'react-router-dom';
import socialActiveUser from '../../../services/data/SocialActiveUser';
const SocialMainActiveUser = () => {
    return (
        <div>
            <div className="shadow p-4">
                <h5 className="fw-bold text-center pb-4">All Active User</h5>
                <div style={{ height: '600px' }} className=" ms-2">
                    <ul className="list-unstyled  ">
                        {socialActiveUser.map((user) => (
                            <div key={user.id} className="d-flex ">
                                <li className="ps-4 pb-3">
                                    <img
                                        src={user.img}
                                        alt=""
                                        className="profile-photo "
                                    />
                                </li>
                                <Link to={`/userProfile/${user.id}`}>
                                    <p className="p-3">{user.name}</p>
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SocialMainActiveUser;
