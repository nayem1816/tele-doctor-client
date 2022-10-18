import React from 'react';
import aboutDoctor from '../../../images/img/aboutDoctor.jpg';

const AboutDetails = () => {
    return (
        <div className="container my-5">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                    <h3>Who we are?</h3>
                    <p style={{ textAlign: 'justify' }}>
                        Health care is one of the fastest-growing industries all
                        over the world. Before the last few years, medical
                        appointments were usually taken on phone calls or by
                        visiting the hospitals in person. This process needed
                        the involvement of individuals so, the ability to take
                        appointments was restricted to the availability of
                        schedulers, phone lines or the physical presence of a
                        person. TeleDoctor is a general term that covers all of
                        the ways you and your doctor can use technology to
                        communicate. It includes phone calls, video chats,
                        emails, and text messages. The main objective of this
                        project is to develop an Online Doctor's Appointment and
                        Medical Database Management System. The application is
                        successfully implemented by using famous technologies
                        and programming languages. This application is developed
                        by using HTML, CSS, JavaScript, and React Js on the
                        client-side while Node Js and MongoDB on the
                        server-side. Nowadays there are many kinds of online
                        appointment tools available in the market which are easy
                        to set up and not too much expensive. Online scheduling
                        system offers value-added services and lots of benefits
                        to doctors and patients. It makes the patient
                        appreciated by eliminating the hassle of long waiting
                        times. Online appointment systems are also getting
                        popular because of their low-cost availability.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src={aboutDoctor} alt="doctor" />
                </div>
            </div>
        </div>
    );
};

export default AboutDetails;
