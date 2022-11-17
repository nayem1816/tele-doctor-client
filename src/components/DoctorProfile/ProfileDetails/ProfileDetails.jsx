import React, { useEffect, useState } from 'react';
import { MdAddCall, MdMessage, MdOutlineVideoCall } from 'react-icons/md';
import './ProfileDetails.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfileDetails = ({ doctor }) => {
    const [onlineStatus, setOnlineStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (navigator.onLine) {
            setOnlineStatus(true);
        } else {
            setOnlineStatus(false);
        }

        window.addEventListener('offline', (e) => {
            setOnlineStatus(false);
        });

        window.addEventListener('online', (e) => {
            setOnlineStatus(true);
        });
    }, [onlineStatus]);

    const handleBookAppointment = (id) => {
        navigate(`/doctor-booking/${id}`);
    };

    return (
        <div className="container my-5">
            <div className="shadow my-5 rounded-3 p-3">
                <div className="row">
                    <div className="col-lg-3 p-3 text-center text-lg-start">
                        <img
                            className="rounded"
                            style={{ width: '200px', height: '200px' }}
                            src={doctor?.profilePic}
                            alt=""
                        />
                    </div>
                    <div className="col-lg-6 p-3 text-center text-lg-start doctor-info">
                        <div className="d-flex gap-2 align-items-center justify-content-center justify-content-lg-start">
                            <h4 className="mb-3">{doctor?.name}</h4>
                            {doctor?.activeStatus === 'active' ? (
                                <span className="mb-3 px-2 rounded-2 text-white online">
                                    Online
                                </span>
                            ) : (
                                <span className="mb-3 px-2 rounded-2 text-white offline">
                                    Offline
                                </span>
                            )}
                        </div>
                        <p className="mb-2">{doctor?.education}</p>
                        <p className="mb-2 category-name">
                            {doctor?.specialization}
                        </p>
                        <p className="mb-3">
                            <span className="text-muted">Working at</span>{' '}
                            <span className="fw-bold">{doctor?.workingAt}</span>
                        </p>
                        <div className="doctor-profile-contract-icon d-flex align-items-center justify-content-center justify-content-lg-start">
                            <span>
                                <MdAddCall className="audio icon" />
                            </span>
                            <span>
                                <MdOutlineVideoCall className="video icon" />
                            </span>
                            <span>
                                <MdMessage className="message icon" />
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 p-3 text-center text-lg-start profile-consultant">
                        <h5 className="mb-3">Consultation Fee</h5>
                        <div className="d-flex mb-3 justify-content-center justify-content-lg-start">
                            <h2 className="text-center base-color">
                                ৳ <span>{doctor?.fees}</span>
                            </h2>
                            <p className="mt-2 mx-1 text-muted">(incl. VAT)</p>
                        </div>
                        {/* <button className="btn mb-3 profile-btn">
                            Book Appointment
                        </button> */}
                        <Button
                            onClick={() => handleBookAppointment(doctor?._id)}
                            className="profile-btn"
                            variant="contained"
                        >
                            Book Appointment
                        </Button>
                    </div>
                </div>
                <hr style={{ borderTop: '2px dashed gray' }} />
                <div className="d-block d-lg-flex gap-5 doctor-profile-bottom">
                    <div className="p-3 text-center text-lg-start">
                        <h3 className="mb-3">Total Experience</h3>
                        <h5 className="mb-3">
                            <span>{doctor?.experience}</span>
                        </h5>
                    </div>
                    <div className="p-3 text-center text-lg-start">
                        <h3 className="mb-3">BMDC Number</h3>
                        <h5 className="mb-3">
                            <span>{doctor?.registrationNumber}</span>
                        </h5>
                    </div>
                    <div className="p-3 text-center text-lg-start">
                        <h3 className="mb-3">Total Patients</h3>
                        <h5 className="mb-3">
                            <span>
                                {doctor?.totalPatient === null
                                    ? 0
                                    : doctor?.totalPatient}
                            </span>{' '}
                            Patients
                        </h5>
                    </div>
                    <div className="p-3 text-center text-lg-start">
                        <h3 className="mb-3">Total Reviews</h3>
                        <h5 className="mb-3">
                            <span>
                                {doctor?.totalPatient === null
                                    ? 0
                                    : doctor?.totalReview}
                            </span>{' '}
                            Reviews
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
