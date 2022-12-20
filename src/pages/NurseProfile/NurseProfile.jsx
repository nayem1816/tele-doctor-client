import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { Rating } from 'react-simple-star-rating';
import image from '../../images/icons/user.png';

const NurseProfile = () => {
    const [nurse, setNurse] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(
            `https://tele-doctor-server.vercel.app/api/v1/ReadNurseById/${id}`
        )
            .then((res) => res.json())
            .then((data) => setNurse(data.data));
    }, [id]);

    return (
        <div className="my-5">
            <div className="container">
                <div className="shadow my-5 rounded-3 p-3">
                    <div className="row">
                        <div className="col-lg-3 p-3 text-center text-lg-start">
                            <img
                                className="rounded"
                                style={{ width: '200px', height: '200px' }}
                                src={nurse?.image}
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6 p-3 text-center text-lg-start doctor-info">
                            <div className="d-flex gap-2 align-items-center justify-content-center justify-content-lg-start">
                                <h4 className="mb-3">{nurse?.name}</h4>
                            </div>
                            <p className="mb-2">{nurse?.email}</p>
                            <p className="mb-2 category-name">{nurse?.phone}</p>
                            <p className="mb-3">
                                <span className="text-muted">Working at</span>{' '}
                                <span className="fw-bold">
                                    Upazila Health Complex,Faridganj,Chandpur
                                </span>
                            </p>
                        </div>
                        <div className="col-lg-3 p-3 text-center text-lg-start profile-consultant">
                            <h5 className="mb-3">
                                <span className="text-muted">
                                    Consultant Fee
                                </span>{' '}
                            </h5>
                            <div className="d-flex mb-3 justify-content-center justify-content-lg-start">
                                <h2 className="text-center base-color">
                                    ৳ <span>2000</span>
                                </h2>
                                <p className="mt-2 mx-1 text-muted">
                                    (incl. VAT)
                                </p>
                            </div>
                            <a href={`tel:${nurse?.phone}`}>
                                <Button
                                    className="profile-btn"
                                    variant="contained"
                                >
                                    Book Now
                                </Button>
                            </a>
                        </div>
                        <hr style={{ borderTop: '2px dashed gray' }} />
                        <div className="d-block d-lg-flex gap-5 doctor-profile-bottom">
                            <div className="p-3 text-center text-lg-start">
                                <h3 className="mb-3">Total Experience</h3>
                                <h5 className="mb-3">
                                    <span>{nurse?.experience}</span>
                                </h5>
                            </div>
                            <div className="p-3 text-center text-lg-start">
                                <h3 className="mb-3">Total Patients</h3>
                                <h5 className="mb-3">
                                    <span>
                                        {nurse?.rating === null
                                            ? '0'
                                            : nurse?.totalPatient}
                                    </span>{' '}
                                    Patients
                                </h5>
                            </div>
                            <div className="p-3 text-center text-lg-start">
                                <h3 className="mb-3">Total Reviews</h3>
                                <h5 className="mb-3">
                                    <span>
                                        {nurse?.rating === null
                                            ? '0'
                                            : nurse?.totalReview}
                                    </span>{' '}
                                    Reviews
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <h2>Reviews</h2>
                    <div className="reviews-part my-4">
                        <div className="row">
                            {[...Array(5)].map((_, i) => (
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
                                                    <p className="">
                                                        01.04.2022
                                                    </p>
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
                                            style={{
                                                borderTop: '2px dashed gray',
                                            }}
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
        </div>
    );
};

export default NurseProfile;
