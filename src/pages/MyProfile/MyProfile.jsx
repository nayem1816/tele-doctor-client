import React, { useEffect, useState } from 'react';
import MyProfileNavbar from '../../components/MyProfile/MyProfileNavbar/MyProfileNavbar';
import MyProfileMain from '../../components/MyProfile/MyProfileMain/MyProfileMain';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [appointmentData, setAppointmentData] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(
            `http://localhost:5000/api/v1/ReadAppointmentByEmail/${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setAppointmentData(data));
    }, [user.email]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="border p-2 rounded">
                        <MyProfileNavbar appointmentData={appointmentData} />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="border p-2 rounded">
                        <MyProfileMain />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
