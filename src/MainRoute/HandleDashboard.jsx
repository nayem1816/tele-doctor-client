import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from './../components/Dashboard/DashboardHeader/DashboardHeader';
import DashboardSidebar from './../components/Dashboard/DashboardSidebar/DashboardSidebar';
import './HandleDashboard.css';

const HandleDashboard = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    // console.log(openSidebar);
    return (
        <div className="">
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
        </div>
    );
};

export default HandleDashboard;
