import React from 'react';
import userImage from '../../../images/icons/male-doctor.png';
import { MdAddCall, MdMessage, MdOutlineVideoCall } from 'react-icons/md';
import './ProfileDetails.css';

const ProfileDetails = () => {
    return (
        <div className="container my-5">
            <div className="shadow my-5 rounded-3 p-3">
                <div className="row">
                    <div className="col-lg-3 p-3 text-center text-lg-start">
                        <img
                            className="rounded"
                            style={{ width: '200px', height: '200px' }}
                            src={userImage}
                            alt=""
                        />
                    </div>
                    <div className="col-lg-6 p-3 text-center text-lg-start doctor-info">
                        <div className="d-flex gap-2 align-items-center justify-content-center justify-content-lg-start">
                            <h4 className="mb-3">Dr. Faysal Rana</h4>
                            <span className="mb-3 px-2 rounded-2 text-white online">
                                Online
                            </span>
                        </div>
                        <p className="mb-2">MBBS, FCPS, MD</p>
                        <p className="mb-2 category-name">Cardiologist</p>
                        <p className="mb-3">
                            <span className="text-muted">Working at</span>{' '}
                            <span className="fw-bold">
                                Upazila Health Complex,Faridganj,Chandpur
                            </span>
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
                                ৳ <span>157.50</span>
                            </h2>
                            <p className="mt-2 mx-1 text-muted">(incl. VAT)</p>
                        </div>
                        <button className="btn mb-3 profile-btn">
                            Book Appointment
                        </button>
                    </div>
                </div>
                <hr style={{ borderTop: '2px dashed gray' }} />
                <div className="d-block d-lg-flex gap-5 doctor-profile-bottom">
                    <div className="p-3 text-center text-lg-start">
                        <h3 className="mb-3">Total Experience</h3>
                        <h5 className="mb-3">
                            <span>10</span> Years
                        </h5>
                    </div>
                    <div className="p-3 text-center text-lg-start">
                        <h3 className="mb-3">BMDC Number</h3>
                        <h5 className="mb-3">
                            <span>123456</span>
                        </h5>
                    </div>
                    <div className="p-3 text-center text-lg-start">
                        <h3 className="mb-3">Total Patients</h3>
                        <h5 className="mb-3">
                            <span>1000</span> Patients
                        </h5>
                    </div>
                    <div className="p-3 text-center text-lg-start">
                        <h3 className="mb-3">Total Reviews</h3>
                        <h5 className="mb-3">
                            <span>100</span> Reviews
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
