import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [loginUser, setLoginUser] = useState();
    const [user] = useAuthState(auth);
    const [active, setActive] = useState(true);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(
            `https://tele-doctor-server.vercel.app/api/v1/ReadProfileByEmail/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                setLoginUser(data.data[0]);
            });
    }, [user]);

    const handleUpdate = () => {
        setActive(!active);
    };
    const onSubmit = (data) => {
        const updateData = {
            id: loginUser._id,
            phone: data.phone,
            dateOfBirth: data.dateOfBirth,
            address: data.address,
        };

        fetch(`https://tele-doctor-server.vercel.app/api/v1/UpdateProfile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setActive(true);
                    toast.success('Profile Updated Successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                    });
                }
            });
    };

    return (
        <div>
            <h3>My Profile</h3>
            <hr className="me-5 my-3" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-3">
                        <div className="image text-center">
                            <img
                                style={{ width: '120px', height: '120px' }}
                                className="rounded-circle my-2"
                                src={user?.photoURL}
                                alt="user"
                            />
                            <br />
                            <button
                                type="button"
                                onClick={() => handleUpdate()}
                                className="btn btn-danger"
                            >
                                {active === true ? 'Edit Profile' : 'Cancel'}
                            </button>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="my-3">
                            <h6>Name</h6>
                            <input
                                className="form-control w-75"
                                type="text"
                                defaultValue={loginUser?.Name}
                                disabled
                            />
                        </div>
                        <div className="my-3">
                            <h6>Email</h6>
                            <input
                                className="form-control w-75"
                                type="text"
                                defaultValue={loginUser?.EmailAddress}
                                disabled
                            />
                        </div>
                        <div className="my-3">
                            <h6>Phone</h6>
                            <input
                                {...register('phone', { required: true })}
                                className="form-control w-75"
                                type="text"
                                placeholder="Enter your phone number"
                                defaultValue={loginUser?.MobileNumber}
                                disabled={active}
                            />
                        </div>
                        <div className="my-3">
                            <h6>Date Of Birth</h6>
                            <input
                                {...register('dateOfBirth', { required: true })}
                                className="form-control w-75"
                                type="date"
                                defaultValue={loginUser?.DateOfBirth}
                                disabled={active}
                            />
                        </div>
                        <div className="my-3">
                            <h6>Address</h6>
                            <input
                                {...register('address', { required: true })}
                                className="form-control w-75"
                                type="text"
                                placeholder="Enter your address"
                                defaultValue={loginUser?.Address}
                                disabled={active}
                            />
                        </div>
                        {active === false && (
                            <div className="my-3">
                                <input
                                    className="btn btn-success"
                                    type="submit"
                                    value="Save"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MyProfile;
