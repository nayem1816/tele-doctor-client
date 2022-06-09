import React from 'react';
import './Home.css';
import Header from '../../components/common/Header/Header';
import Footer from './../../components/common/Footer/Footer';
import HomeCategory from './../../components/Home/HomeCategory/HomeCategory';
import HomeFindDoctor from '../../components/Home/HomeFindDoctor/HomeFindDoctor';
import AvailableDoctor from '../../components/Home/AvailableDoctor/AvailableDoctor';
import MostPopularDoctor from '../../components/Home/MostPopularDoctor/MostPopularDoctor';

const Home = () => {
    return (
        <div className="body-container d-flex flex-column">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <HomeCategory />
                <HomeFindDoctor />
                <AvailableDoctor />
                <MostPopularDoctor />
            </div>
            <div className="footer mt-auto p-2">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
