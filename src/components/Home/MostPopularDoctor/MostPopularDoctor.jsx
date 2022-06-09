import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import doctors from '../../../services/data/doctors.js';
import './MostPopularDoctor.css';

const MostPopularDoctor = () => {
    return (
        <div className="popular-doctor py-5">
            <div className="container">
                <h2 className="base-color2 fw-bold">Most Popular Doctors</h2>
                <div className="text-end py-1">
                    <Link className="nav-link d-inline" to="/">
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
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {doctors.map((doctor) => (
                                <SwiperSlide key={doctor.id}>
                                    <div className="doctor-card bg-white rounded shadow border">
                                        <div className="doctor-profile d-flex py-4 px-3 align-items-center">
                                            <div className="doctor-image p-1 rounded-circle">
                                                <img
                                                    src={doctor.image}
                                                    alt="doctor"
                                                />
                                            </div>
                                            <div className="doctor-details ms-3 text-start">
                                                <h5 className="fw-bold">
                                                    {doctor.name}
                                                </h5>
                                                <p>{doctor.category}</p>
                                            </div>
                                        </div>
                                        <button className="w-100 appointment-button-color py-2 rounded">
                                            View Profile
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostPopularDoctor;