import React from 'react';
import DoctorBanner from './../../components/Doctor/DoctorBanner/DoctorBanner';
import DoctorCategory from './../../components/Doctor/DoctorCategory/DoctorCategory';
import { Outlet } from 'react-router-dom';

const Doctor = () => {
    return (
        <div>
            <DoctorBanner />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <DoctorCategory />
                    </div>
                    <div className="col-lg-9 col-md-12 mt-lg-0 mt-md-4 mt-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
