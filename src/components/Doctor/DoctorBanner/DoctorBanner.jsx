import React from 'react';
import Search from './../../common/Search/Search';
import Title from './../../common/Title/Title';
import doctorPageBanner from '../../../images/img/doctorPageBanner.png';

const DoctorBanner = () => {
    const bannerStyle = {
        backgroundImage: `url(${doctorPageBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        width: '100%',
    };
    const bannerTop = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
        width: '100%',
    };
    return (
        <div style={bannerStyle}>
            <div style={bannerTop} className="">
                <div className="container py-5 h-100">
                    <div
                        style={{
                            // border: '1px solid black',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        }}
                        className="row d-flex align-items-center h-100 mx-md-5 m-2 rounded"
                    >
                        <div className="col-md-6">
                            <h1 className="text-white">
                                Find your great{' '}
                                <span className="base-color2">
                                    doctors <br /> or specialists
                                </span>
                            </h1>
                        </div>
                        <div className="col-md-6">
                            <Title titleName="Find doctor by location" />
                            <Search placeHolder="Search by location" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorBanner;
