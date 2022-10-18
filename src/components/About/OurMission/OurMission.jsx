import React from 'react';
import mission from '../../../images/img/mission.png';

const OurMission = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row d-flex align-items-center shadow-lg rounded p-2">
                <div className="col-md-6">
                    <img className="img-fluid" src={mission} alt="mission" />
                </div>
                <div className="col-md-6">
                    <h2 className="text-center my-4">Our Mission</h2>
                    <p style={{ textAlign: 'justify' }}>
                        We want to create a system where doctors and patients
                        will be on the same platform, doctors will be able to
                        provide services here and patients will be able to
                        receive services. Here doctors will be able to earn in
                        return for their labor. Home nursing services have been
                        set up for the ongoing pandemic of Covid-19. Here
                        patients can find their location-based doctors if they
                        want. We also have social media options like Facebook to
                        keep our application unique from other applications.
                        Where we can post, comment, and create posts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
