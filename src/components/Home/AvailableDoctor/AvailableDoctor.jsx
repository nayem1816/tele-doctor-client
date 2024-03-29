import React, { useEffect } from 'react';
import './AvailableDoctor.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import Title from '../../common/Title/Title';

const AvailableDoctor = () => {
    const [doctors, setDoctor] = React.useState([]);

    useEffect(() => {
        fetch('https://tele-doctor-server.vercel.app/api/v1/AvailableDoctor')
            .then((res) => res.json())
            .then((data) => setDoctor(data.data));
    }, []);

    return (
        <div className="available-doctor mt-2 py-5">
            <div className="container">
                <Title titleName="Available Doctors" />
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
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {doctors.map((doctor) => (
                                <SwiperSlide key={doctor._id}>
                                    <div className="doctor-card bg-white rounded">
                                        <div className="doctor-profile d-flex py-4 px-3 align-items-center">
                                            <div className="doctor-image p-2 rounded-circle position-relative">
                                                <img
                                                    src={doctor?.profilePic}
                                                    alt="doctor"
                                                />
                                                <span className="position-absolute bottom-0 translate-middle p-2 bg-success border border-light rounded-circle">
                                                    <span className="visually-hidden">
                                                        New alerts
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="doctor-details ms-3 text-start">
                                                <h5 className="fw-bold">
                                                    {doctor?.name}
                                                </h5>
                                                <p>{doctor?.category}</p>
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
    );
};

export default AvailableDoctor;
