import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoctorPageCard from '../../components/Doctor/DoctorPageCard/DoctorPageCard';

const LocationWiseDoctor = () => {
    const [locationWiseData, setLocationWiseData] = useState([]);
    const { location } = useParams();

    useEffect(() => {
        fetch(
            `http://localhost:5000/api/v1/FindDoctorByLocation/?location=${location.toLowerCase()}`
        )
            .then((res) => res.json())
            .then((data) => setLocationWiseData(data.data));
    }, [location]);

    // get last path
    const lastPath = location.split('/').pop();

    return (
        <div className="container">
            <nav aria-label="breadcrumb" className="my-3">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Home</li>
                    <li className="breadcrumb-item active">Doctor</li>
                    <li className="breadcrumb-item active">
                        Location: {lastPath}
                    </li>
                </ol>
            </nav>
            <div className="doctors-list">
                {locationWiseData.length === 0 ? (
                    <div className="d-flex justify-content-center align-items-center my-5">
                        <div
                            className="alert alert-danger w-75 text-center"
                            role="alert"
                        >
                            No doctor found in this location
                        </div>
                    </div>
                ) : (
                    <div className="row my-5">
                        {locationWiseData.map((doctor) => (
                            <div key={doctor._id} className="col-md-4 p-2">
                                <DoctorPageCard doctor={doctor} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LocationWiseDoctor;
