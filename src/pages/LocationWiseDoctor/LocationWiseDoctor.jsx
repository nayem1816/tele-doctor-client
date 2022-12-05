import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LocationWiseDoctor = () => {
    const [locationWiseData, setLocationWiseData] = useState([]);
    const { location } = useParams();
    console.log(locationWiseData);

    useEffect(() => {
        fetch(
            `http://localhost:5000/api/v1/FindDoctorByLocation/?location=${location.toLowerCase()}`
        )
            .then((res) => res.json())
            .then((data) => setLocationWiseData(data.data));
    }, [location]);

    return (
        <div>
            <h2>Location wise doctor</h2>
        </div>
    );
};

export default LocationWiseDoctor;
