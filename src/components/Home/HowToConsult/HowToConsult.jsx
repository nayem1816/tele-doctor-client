import React from 'react';
import Title from './../../common/Title/Title';
import howToConsult from '../../../images/img/booking-help.PNG';

const HowToConsult = () => {
    return (
        <div className="bg-base">
            <div className="how-to-consult container py-5 text-center">
                <Title titleName="How to book consultations" />
                <img className="img-fluid mt-5" src={howToConsult} alt="" />
            </div>
        </div>
    );
};

export default HowToConsult;
