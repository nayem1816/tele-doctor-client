import React from 'react';
import mission from '../../../images/img/homeDoctor.jpg';

const AboutMission = () => {
    return (
        <div class="card m-5 border-0 shadow-lg p-3 mb-5 bg-body rounded">
        <div class="row g-0 p-4">
        <div class="col-md-6">
        <img src={mission} class="img-fluid rounded w-75" alt="..."/>
        </div>
        <div class="col-md-6">
        <div class="card-body">
        <h5 class="card-title fw-bold fs-4 text-center">Our Mission</h5>
        <p class="card-text">TeleDoctor's mission is to create a platform that is easily accessible and trustworthy for both Doctors and Patients. We believing in constantly evolving and creating different services that will be a right fit for any user based on his requirements. We aim at making iCliniq the best at what it does in terms of both the quality of the service provided and the time of delivery of the service. We want to build a platform that is the right combination between viability, desirability and feasibility.</p>
        </div>
        </div>
        </div>
        </div>
    ); 
};

export default AboutMission;