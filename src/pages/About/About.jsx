import React from 'react';
import AboutHead from './../../components/About/AboutHead/AboutHead';
import AboutDetails from './../../components/About/AboutDetails/AboutDetails';
import WhyTeleDoctor from '../../components/About/WhyTeleDoctor/WhyTeleDoctor';
import OurMission from '../../components/About/OurMission/OurMission';
import FoundingTeam from '../../components/About/FoundingTeam/FoundingTeam';

const About = () => {
    return (
        <div>
            <AboutHead />
            <AboutDetails />
            <WhyTeleDoctor />
            <OurMission />
            <FoundingTeam />
        </div>
    );
};

export default About;
