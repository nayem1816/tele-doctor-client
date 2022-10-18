import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorProfile = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Doctor Profile {id}</h2>
        </div>
    );
};

export default DoctorProfile;
