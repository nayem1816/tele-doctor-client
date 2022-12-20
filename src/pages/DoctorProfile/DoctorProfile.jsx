import React from 'react';
import { useParams } from 'react-router-dom';
import DoctorInfo from '../../components/DoctorProfile/DoctorInfo/DoctorInfo';
import ProfileDetails from './../../components/DoctorProfile/ProfileDetails/ProfileDetails';

const DoctorProfile = () => {
    const [doctor, setDoctor] = React.useState({});
    const { id } = useParams();

    React.useEffect(() => {
        fetch(
            `https://tele-doctor-server.vercel.app/api/v1/ReadDoctorById/${id}`
        )
            .then((res) => res.json())
            .then((data) => setDoctor(data.data));
    }, [id]);

    return (
        <div>
            <ProfileDetails doctor={doctor} />
            <DoctorInfo doctor={doctor} />
        </div>
    );
};

export default DoctorProfile;
