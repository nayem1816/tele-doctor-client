import React from 'react';
import AboutMission from '../../components/About/AboutMission/AboutMission';
import AboutUs from '../../components/About/AboutUs/AboutUs';
import Count from '../../components/About/Count/Count';
import FoundingTeam from '../../components/About/FoundingTeam/FoundingTeam';
import SubHead from '../../components/About/SubHead/SubHead';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';

const About = () => {
    return (
        <div className="body-container d-flex flex-column">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <SubHead/>
                <AboutUs/>
                <Count/>
                <AboutMission/>
                <FoundingTeam/>
            </div>
            <div className="footer mt-auto p-2">
                <Footer />
            </div>
        </div>
    );
};

export default About;