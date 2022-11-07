import React from 'react';
import { useParams } from 'react-router-dom';
import DoctorInfo from '../../components/DoctorProfile/DoctorInfo/DoctorInfo';
import ProfileDetails from './../../components/DoctorProfile/ProfileDetails/ProfileDetails';

const DoctorProfile = () => {
    // const [doctor, setDoctor] = React.useState({});
    // const { id } = useParams();

    // React.useEffect(() => {
    //     fetch(`http://localhost:5000/doctors/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => setDoctor(data));
    // }, [id]);

    return (
        <div>
            <ProfileDetails />
            <DoctorInfo />
        </div>
    );
};

export default DoctorProfile;
