import React from 'react';
import { FaPhone, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const DoctorPageCard = ({ doctor }) => {
    return (
        <div className="shadow rounded">
            <div className="row p-3 pb-0">
                <div className="col-5">
                    <div
                        style={{ width: '70px', height: '70px' }}
                        className="img rounded-circle bg-light d-flex align-items-center justify-content-center"
                    >
                        <img
                            src={doctor?.profilePic}
                            alt=""
                            className="img-fluid p-2"
                        />
                    </div>
                    <div className="ms-2 icon d-flex mt-2">
                        <Link to="" className="me-2">
                            <FaPhone className="base-color fs-5" />
                        </Link>
                        <Link to="" className="">
                            <FaVideo className="base-color fs-5" />
                        </Link>
                    </div>
                    <div className="fees mt-3 mb-4">
                        <p style={{ fontSize: '14px' }} className="text-center">
                            Fees: {doctor?.fees} Tk.
                        </p>
                    </div>
                </div>
                <div className="col-7">
                    <div className="doctor-info mt-2">
                        <h6 className=" m-0 base-color">{doctor?.name}</h6>
                        <span className="d-flex align-items-center">
                            <Rating
                                allowHover={false}
                                initialValue={0}
                                size={16}
                                ratingValue={parseFloat(doctor?.rating) * 20}
                            />
                        </span>
                        <div className="details mt-2">
                            <p
                                style={{ fontSize: '14px' }}
                                className="text-secondary p-0 m-0"
                            >
                                {doctor?.specialization}
                            </p>
                            <p
                                style={{ fontSize: '14px' }}
                                className="text-secondary p-0 m-0 mt-2"
                            >
                                Experience: {doctor?.experience}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Link
                style={{ backgroundColor: '#5921cf' }}
                to={`/doctorProfile/${doctor?.id}`}
                className="btn btn-primary w-100 border-0"
            >
                Book Appointment
            </Link>
        </div>
    );
};

export default DoctorPageCard;
