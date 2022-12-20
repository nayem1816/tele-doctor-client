import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MyProfileNavbar from './../../components/MyProfile/MyProfileNavbar/MyProfileNavbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Profile = () => {
    const [appointmentData, setAppointmentData] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(
            `https://tele-doctor-server.vercel.app/api/v1/ReadAppointmentByEmail/${user.email}`
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
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
