import React from 'react';
import './Home.css';
import HomeCategory from './../../components/Home/HomeCategory/HomeCategory';
import HomeFindDoctor from '../../components/Home/HomeFindDoctor/HomeFindDoctor';
import AvailableDoctor from '../../components/Home/AvailableDoctor/AvailableDoctor';
import MostPopularDoctor from '../../components/Home/MostPopularDoctor/MostPopularDoctor';
import FindDoctorLocation from '../../components/Home/FindDoctorLocation/FindDoctorLocation';
import UserReview from './../../components/Home/UserReview/UserReview';
import HowToConsult from './../../components/Home/HowToConsult/HowToConsult';

const Home = () => {
    return (
        <div className="main">
            <HomeCategory />
            <HomeFindDoctor />
            <AvailableDoctor />
            <MostPopularDoctor />
            <FindDoctorLocation />
            <UserReview />
            <HowToConsult />
        </div>
    );
};

export default Home;
