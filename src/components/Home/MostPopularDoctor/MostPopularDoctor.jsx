import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import './MostPopularDoctor.css';
import Title from './../../common/Title/Title';

const MostPopularDoctor = () => {
    const [doctors, setDoctor] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/ReadDoctors')
            .then((res) => res.json())
            .then((data) => setDoctor(data.data));
    }, []);

    const mostPopularDoctor = doctors.filter(
        (doctor) => doctor?.totalReview > 500
    );

    return (
        <div className="popular-doctor py-5">
            <div className="container">
                <Title titleName="Most Popular Doctors" />
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
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {mostPopularDoctor.map((doctor) => (
                                <SwiperSlide key={doctor?._id}>
                                    <div className="doctor-card bg-white rounded shadow border">
                                        <div
                                            style={{ height: '170px' }}
                                            className="doctor-profile d-flex py-4 px-3 align-items-center"
                                        >
                                            <div className="doctor-image p-1 rounded-circle">
                                                <img
                                                    src={doctor?.profilePic}
                                                    alt="doctor"
                                                />
                                            </div>
                                            <div className="doctor-details ms-3 text-start">
                                                <h5 className="fw-bold">
                                                    {doctor?.name}
                                                </h5>
                                                <p>{doctor?.specialization}</p>
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

export default MostPopularDoctor;
