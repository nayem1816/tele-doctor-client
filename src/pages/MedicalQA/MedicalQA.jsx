import React from 'react';
import MedicalQAHeader from './../../components/MedicalQA/MedicalQAHeader/MedicalQAHeader';
import MedicalQACategory from './../../components/MedicalQA/MedicalQACategory/MedicalQACategory';
import { Outlet } from 'react-router-dom';

const MedicalQA = () => {
    return (
        <div>
            <MedicalQAHeader />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <MedicalQACategory />
                    </div>
                    <div className="col-lg-9 col-md-12 mt-lg-0 mt-md-4 mt-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalQA;
