import React from 'react';
import AboutHead from './../../components/About/AboutHead/AboutHead';
import AboutDetails from './../../components/About/AboutDetails/AboutDetails';
import WhyTeleDoctor from '../../components/About/WhyTeleDoctor/WhyTeleDoctor';
import OurMission from '../../components/About/OurMission/OurMission';

const About = () => {
    return (
        <div>
            <AboutHead />
            <AboutDetails />
            <WhyTeleDoctor />
            <OurMission />
        </div>
    );
};

export default About;
