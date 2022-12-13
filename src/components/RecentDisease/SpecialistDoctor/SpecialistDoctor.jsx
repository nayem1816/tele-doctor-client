import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { useState } from 'react';
import { useEffect } from 'react';
import './SpecialistDoctor.css';
import Title from '../../common/Title/Title';

const SpecialistDoctor = ({ diseaseName, specialization }) => {
    const [specialistDoctor, setSpecialistDoctor] = useState([]);

    useEffect(() => {
        fetch(
            `http://localhost:5000/api/v1/FindRecentDoctor/?specialist=${specialization}`
        )
            .then((res) => res.json())
            .then((data) => setSpecialistDoctor(data.data));
    }, [specialization]);

    return (
        <div className="container my-5">
            <div className="specialist-doctor">
                <div className="specialist-available-doctor mt-2 py-5">
                    <div className="container">
                        <Title titleName={`${diseaseName} Specialist`} />
                        <div className="text-end py-1">
                            <Link className="nav-link d-inline" to="/doctor">
                                see all
                            </Link>
                            <div className="swiper-slider-part mt-2">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    navigation={true}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        },
                                        1280: {
                                            slidesPerView: 4,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    {specialistDoctor?.map((doctor) => (
                                        <SwiperSlide key={doctor?._id}>
                                            <div className="specialist-doctor-card bg-white rounded">
                                                <div className="doctor-profile d-flex py-4 px-3 align-items-center">
                                                    <div className="doctor-image p-2 rounded-circle position-relative">
                                                        <img
                                                            src={
                                                                doctor?.profilePic
                                                            }
                                                            alt="doctor"
                                                        />
                                                    </div>
                                                    <div className="specialist-doctor-details ms-3 text-start">
                                                        <h5 className="fw-bold">
                                                            {doctor.name}
                                                        </h5>
                                                        <p>
                                                            {
                                                                doctor.specialization
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <Link
                                                    to={`/doctorProfile/${doctor?._id}`}
                                                >
                                                    <button className="w-100 appointment-button-color py-2 rounded">
                                                        Book Appointment
                                                    </button>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialistDoctor;
