import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import './DashboardSidebar.css';
import logo from '../../../images/logo/teleDoctorLogo.png';
import sidebarMenuData from './../../../services/data/sidebarMenuData';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import userImg from '../../../images/img/avatar_default.jpg';
import { BiLogOut } from 'react-icons/bi';

const DashboardSidebar = ({ openSidebar, setOpenSidebar }) => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error...</h1>;
    }

    return (
        <div className="my-3">
            <div className="sidebar-header d-flex justify-content-between px-2">
                <Link to="/">
                    <img
                        src={logo}
                        alt="LOGO"
                        width={'100px'}
                        height={'100px'}
                        className="img-fluid"
                    />
                </Link>
                <div className="sidebar-close-btn">
                    <button
                        onClick={() => setOpenSidebar(!openSidebar)}
                        className=""
                    >
                        <IoCloseSharp />
                    </button>
                </div>
            </div>
            <div className="dashboard-user my-4 px-3">
                <div className="user">
                    <img src={userImg} alt="USER" />
                    <p className="mb-0 ms-2">{user?.displayName}</p>
                </div>
            </div>
            <ul className="list-group list-group-flush px-2 py-3">
                {sidebarMenuData.map((item) => (
                    <li
                        key={item.id}
                        className="list-group-item bg-transparent border-0 my-1 p-0"
                    >
                        <NavLink
                            to={item.link}
                            className={({ isActive }) =>
                                (isActive
                                    ? 'dashboard-item-active'
                                    : undefined) +
                                ' d-block align-items-center dashboard-sidebar-item'
                            }
                        >
                            <span className="item-icon">{item.icon}</span>
                            <span className="ms-2">{item.name}</span>
                        </NavLink>
                    </li>
                ))}
                {/* <li className="list-group-item bg-transparent border-0 my-1 p-0">
                    <a
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        className="d-block align-items-center dashboard-sidebar-item"
                    >
                        <span className="item-icon">
                            <BiLogOut />
                        </span>
                        <span className="ms-2 w-100">Page Control</span>
                    </a>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Some placeholder content for the collapse component.
                            This panel is hidden by default but revealed when
                            the user activates the relevant trigger.
                        </div>
                    </div>
                </li> */}
                <li className="list-group-item bg-transparent border-0 my-1 p-0">
                    <NavLink
                        to="/"
                        className="d-block align-items-center dashboard-sidebar-item"
                    >
                        <span className="item-icon">
                            <BiLogOut />
                        </span>
                        <span className="ms-2">Logout</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default DashboardSidebar;
