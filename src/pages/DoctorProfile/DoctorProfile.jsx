import React from 'react';
import { useParams } from 'react-router-dom';
import DoctorInfo from '../../components/DoctorProfile/DoctorInfo/DoctorInfo';
import ProfileDetails from './../../components/DoctorProfile/ProfileDetails/ProfileDetails';

const DoctorProfile = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <ProfileDetails />
            <DoctorInfo />
        </div>
    );
};

export default DoctorProfile;
