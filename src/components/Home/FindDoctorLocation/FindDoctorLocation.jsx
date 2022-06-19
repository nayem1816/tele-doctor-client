import React from 'react';
import Title from '../../common/Title/Title';
import './FindDoctorLocation.css';
import Search from './../../common/Search/Search';
import locations from './../../../services/data/location';
import { Link } from 'react-router-dom';

const FindDoctorLocation = () => {
    return (
        <div className="find-location py-5">
            <div className="container">
                <Title titleName="Find doctor by location" />
                <Search placeHolder="Search by location" />
                <div className="container d-flex justify-content-between suggestion-location">
                    {locations.slice(0, 8).map((location) => (
                        <Link
                            key={location.id}
                            className="text-black d-none d-sm-none d-md-none d-lg-block d-xl-block py-3"
                            to="/"
                        >
                            {location.locationName}
                        </Link>
                    ))}
                    {locations.slice(0, 6).map((location) => (
                        <Link
                            key={location.id}
                            className="text-black d-none d-sm-none d-md-block d-lg-none d-xl-none p-3"
                            to="/"
                        >
                            {location.locationName}
                        </Link>
                    ))}
                    {locations.slice(0, 3).map((location) => (
                        <Link
                            key={location.id}
                            className="text-black d-sm-block d-md-none d-lg-none d-xl-none me-5 py-3"
                            to="/"
                        >
                            {location.locationName}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FindDoctorLocation;
