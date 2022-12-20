import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from './../components/Dashboard/DashboardHeader/DashboardHeader';
import DashboardSidebar from './../components/Dashboard/DashboardSidebar/DashboardSidebar';
import './HandleDashboard.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const HandleDashboard = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [isDoctor, setIsDoctor] = React.useState(false);
    const [isAdmin, setIsAdmin] = React.useState(false);
    useEffect(() => {
        fetch(
            `https://tele-doctor-server.vercel.app/api/v1/ReadProfileByEmail/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.data[0]?.role === 'doctor') {
                    setIsDoctor(true);
                }
                if (data?.data[0]?.admin === 'admin') {
                    setIsAdmin(true);
                }
            });
    }, [user?.email]);
    return (
        <div className="">
            {isDoctor | isAdmin ? (
                <div className="dashboard-main-page">
                    <div
                        className={`dashboard-left-part ${
                            openSidebar === true
                                ? 'dashboard-left-part-open position-absolute'
                                : 'dashboard-left-part-close'
                        }`}
                    >
                        <div className="dashboard-sidebar">
                            <DashboardSidebar
                                openSidebar={openSidebar}
                                setOpenSidebar={setOpenSidebar}
                            />
                        </div>
                    </div>
                    <div className="dashboard-right-part">
                        <div className="dashboard-header">
                            <DashboardHeader
                                openSidebar={openSidebar}
                                setOpenSidebar={setOpenSidebar}
                            />
                        </div>
                        <div className="dashboard-main px-5">
                            <Outlet />
                        </div>
                    </div>
                </div>
            ) : loading ? (
                <div>Loading...</div>
            ) : (
                <div>Not Authorized</div>
            )}
        </div>
    );
};

export default HandleDashboard;
