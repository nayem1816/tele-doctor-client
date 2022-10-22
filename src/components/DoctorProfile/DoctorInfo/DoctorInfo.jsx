import React from 'react';
import image from '../../../images/icons/user.png';
import { Rating } from 'react-simple-star-rating';
import './DoctorInfo.css';

const DoctorInfo = () => {
    return (
        <div className="container doctor-info">
            <div className="my-5">
                <h2>Info</h2>
                <div className="my-4 text-muted">
                    <h6 className="fw-bold">
                        Hey I am <span>Dr. Faysal Rana</span>,
                    </h6>
                    <p>
                        MBBS(Chittagong Medical College), BCS(Health),
                        FCPS(Final Part-Medicine),PGT(Medicine), CCD(BIRDEM)
                        MCGP(Pediatrics)(Reg-2103046002) Medical Officer:Upazila
                        Health Complex, Faridganj,Chandpur Ex-MO: Imperial
                        Hospital (COVID ICU),Chittagong Ex-MO:CSCR
                        Hospital,Chittagong Ex-MO:Surgiscope Hospital(NICU),
                        Chittagong Ex-EMO:Mirsarai Seba Hospital,Chittagong
                    </p>
                </div>
            </div>
            <div className="my-5">
                <h2>At a Glance</h2>
                <div className="row text-muted at-a-glance">
                    <div className="col-lg-6 p-3">
                        <h4>Consultation Fee</h4>
                        <h6>
                            ৳ <span>157.50</span>
                        </h6>
                    </div>
                    <div className="col-lg-6 p-3">
                        <h4>Total Patients</h4>
                        <h6>
                            <span>1000</span> Patients
                        </h6>
                    </div>
                    <div className="col-lg-6 p-3">
                        <h4>Availability Day</h4>
                        <h6>Sat, Sun, Mon, Tue, Wed, Thu, Fri</h6>
                    </div>
                    <div className="col-lg-6 p-3">
                        <h4>Consultation time</h4>
                        <h6>11:55 am - 11:50 pm</h6>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h2>Reviews</h2>
                <div className="reviews-part my-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="shadow p-4 rounded m-2">
                                <div className="top d-flex justify-content-between">
                                    <div className="d-flex gap-3">
                                        <img
                                            className="rounded-circle"
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                            }}
                                            src={image}
                                            alt=""
                                        />
                                        <div className="mt-2">
                                            <h6 className="fw-bold">
                                                Raisul Islam Rasal
                                            </h6>
                                            <p className="">01.04.2022</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className="text-end fw-bold">5</h3>
                                        <Rating
                                            allowHover={false}
                                            initialValue={0}
                                            size={20}
                                            ratingValue={100}
                                        />
                                    </div>
                                </div>
                                <hr style={{ borderTop: '2px dashed gray' }} />
                                <div className="review-text">
                                    <p className="text-muted">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Doloremque porro, fuga
                                        molestiae dignissimos odio maxime non
                                        provident beatae enim fugit?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shadow p-4 rounded m-2">
                                <div className="top d-flex justify-content-between">
                                    <div className="d-flex gap-3">
                                        <img
                                            className="rounded-circle"
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                            }}
                                            src={image}
                                            alt=""
                                        />
                                        <div className="mt-2">
                                            <h6 className="fw-bold">
                                                Raisul Islam Rasal
                                            </h6>
                                            <p>01.04.2022</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className="text-end fw-bold">5</h3>
                                        <Rating
                                            allowHover={false}
                                            initialValue={0}
                                            size={20}
                                            ratingValue={100}
                                        />
                                    </div>
                                </div>
                                <hr style={{ borderTop: '2px dashed gray' }} />
                                <div className="review-text">
                                    <p className="text-muted">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Doloremque porro, fuga
                                        molestiae dignissimos odio maxime non
                                        provident beatae enim fugit?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;
