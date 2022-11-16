import React from 'react';
import image from '../../../images/icons/user.png';
import { Rating } from 'react-simple-star-rating';
import './DoctorInfo.css';

const DoctorInfo = ({ doctor }) => {
    return (
        <div className="container doctor-info">
            <div className="my-5">
                <h2>Info</h2>
                <div className="my-4 text-muted">
                    <h6 className="fw-bold">
                        Hey I am <span>{doctor?.name}</span>,
                    </h6>
                    <p>{doctor?.profileDesc}</p>
                </div>
            </div>
            <div className="my-5">
                <h2>At a Glance</h2>
                <div className="row text-muted at-a-glance">
                    <div className="col-lg-6 p-3">
                        <h4>Consultation Fee</h4>
                        <h6>
                            ৳ <span>{doctor?.fees}</span>
                        </h6>
                    </div>
                    <div className="col-lg-6 p-3">
                        <h4>Total Patients</h4>
                        <h6>
                            <span>
                                {doctor?.totalPatient === null
                                    ? 0
                                    : doctor?.totalPatient}
                            </span>{' '}
                            Patients
                        </h6>
                    </div>
                    <div className="col-lg-6 p-3">
                        <h4>Availability Day</h4>
                        <h6>
                            {doctor.availableDays?.map((day) => (
                                <span key={day}>{day}, </span>
                            ))}
                        </h6>
                    </div>
                    <div className="col-lg-6 p-3">
                        <h4>Consultation time</h4>
                        <h6>{doctor?.consultationTime}</h6>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h2>Reviews</h2>
                <div className="reviews-part my-4">
                    <div className="row">
                        {[1, 2, 3, 4, 5].map((review, index) => (
                            <div key={index} className="col-md-6">
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
                                            <h3 className="text-end fw-bold">
                                                5
                                            </h3>
                                            <Rating
                                                allowHover={false}
                                                initialValue={0}
                                                size={20}
                                                ratingValue={100}
                                                readonly={true}
                                            />
                                        </div>
                                    </div>
                                    <hr
                                        style={{ borderTop: '2px dashed gray' }}
                                    />
                                    <div className="review-text">
                                        <p className="text-muted">
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Doloremque porro, fuga molestiae
                                            dignissimos odio maxime non
                                            provident beatae enim fugit?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;
