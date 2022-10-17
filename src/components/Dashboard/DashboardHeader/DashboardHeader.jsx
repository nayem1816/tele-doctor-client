import React from 'react';
import { AiOutlineMenuFold, AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import HeaderLogin from '../../common/Header/HeaderLogin';
import './DashboardHeader.css';

const DashboardHeader = ({ openSidebar, setOpenSidebar }) => {
    return (
        <>
            <div className="mx-4 d-flex justify-content-between align-items-center dashboard-header">
                <div className="dashboard-head-left d-flex gap-4">
                    <div className="dashboard-menu">
                        <button
                            onClick={() => setOpenSidebar(!openSidebar)}
                            className="dashboard-menu-btn"
                        >
                            <AiOutlineMenuFold className="head-menu-icon" />
                        </button>
                    </div>
                    <div className="">
                        <button>
                            <AiOutlineSearch className="head-search-icon" />
                        </button>
                    </div>
                </div>
                <div className="dashboard-head-right d-flex gap-4 align-items-center">
                    <button>
                        <IoMdNotifications className="head-search-icon" />
                    </button>
                    <HeaderLogin />
                </div>
            </div>
        </>
    );
};

export default DashboardHeader;
