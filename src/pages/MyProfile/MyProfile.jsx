import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h3>My Profile</h3>
            <hr className="me-5 my-3" />
            <div className="row">
                <div className="col-3">
                    <div className="image text-center">
                        <img
                            style={{ width: '120px', height: '120px' }}
                            className="rounded-circle my-2"
                            src={user.photoURL}
                            alt="user"
                        />
                        <br />
                        <button className="btn btn-danger">Edit Profile</button>
                    </div>
                </div>
                <div className="col-9">
                    <div className="my-3">
                        <h6>Name</h6>
                        <input
                            className="form-control w-75"
                            type="text"
                            defaultValue={user.displayName}
                            disabled
                        />
                    </div>
                    <div className="my-3">
                        <h6>Email</h6>
                        <input
                            className="form-control w-75"
                            type="text"
                            defaultValue={user.email}
                            disabled
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
