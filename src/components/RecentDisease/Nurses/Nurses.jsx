import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { useState } from 'react';
import Title from '../../common/Title/Title';
import { useEffect } from 'react';
import './Nurses.css';

const Nurses = () => {
    const [nurses, setNurses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/ReadNurses')
            .then((res) => res.json())
            .then((data) => setNurses(data.data));
    }, []);

    return (
        <div className="available-doctor mt-2 py-5">
            <div className="container">
                <Title titleName="Nurses" />
                <div className="text-end py-1">
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
                            {nurses.map((nurse) => (
                                <SwiperSlide key={nurse?._id}>
                                    <div className="doctor-card bg-white rounded">
                                        <div className="doctor-profile d-flex py-4 px-3 align-items-center">
                                            <div className="doctor-image p-2 rounded-circle position-relative">
                                                <img
                                                    src={nurse?.image}
                                                    alt="doctor"
                                                />
                                            </div>
                                            <div className="doctor-details ms-3 text-start">
                                                <h5 className="fw-bold">
                                                    {nurse?.name}
                                                </h5>
                                                <p>{nurse?.experience}</p>
                                            </div>
                                        </div>
                                        <button className="w-100 appointment-button-color py-2 rounded">
                                            Book Appointment
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

export default Nurses;
