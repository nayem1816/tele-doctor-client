import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Avatar, Divider, Fade, Menu, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeaderLogin = () => {
    const [user, loading, error] = useAuthState(auth);
    const [isDoctor, setIsDoctor] = React.useState(false);
    const [isAdmin, setIsAdmin] = React.useState(false);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('userToken');
        // window.location.reload();
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/ReadProfileByEmail/${user?.email}`)
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

    if (loading) {
        return (
            <Avatar
                onClick={handleClick}
                alt="USER"
                sx={{
                    width: 44,
                    height: 44,
                    cursor: 'pointer',
                }}
            />
        );
    }
    if (error) {
        return <div>Error!</div>;
    }
    return (
        <>
            {user ? (
                <div className="d-flex justify-content-center user-menu-style">
                    <Avatar
                        onClick={handleClick}
                        alt={user.displayName}
                        src={
                            user.photoURL ||
                            'https://i.ibb.co/25kDrnr/user-1.png'
                        }
                        sx={{
                            width: 44,
                            height: 44,
                            cursor: 'pointer',
                        }}
                    />
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <div className="">
                            <div className="profile-header d-flex justify-content-center px-5 py-3 flex-column text-center">
                                <div className="user-image d-flex justify-content-center py-2">
                                    <Avatar
                                        alt={user.displayName}
                                        src={
                                            user.photoURL ||
                                            'https://i.ibb.co/25kDrnr/user-1.png'
                                        }
                                        sx={{
                                            width: 80,
                                            height: 80,
                                        }}
                                    />
                                </div>
                                <div className="user-name">
                                    <h5 className="text-center">
                                        {user.displayName}
                                    </h5>
                                </div>
                                <div className="user-id">
                                    <p className="text-center">{user.email}</p>
                                </div>
                            </div>
                            <Divider />
                            <div className="py-2">
                                {isDoctor | isAdmin ? (
                                    <MenuItem onClick={handleClose}>
                                        <a
                                            className="dropdown-item"
                                            href="/dashboard/home"
                                        >
                                            Dashboard
                                        </a>
                                    </MenuItem>
                                ) : null}
                                <MenuItem onClick={handleClose}>
                                    <a
                                        className="dropdown-item"
                                        href="/doctorRegistration"
                                    >
                                        Doctor registration
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <a
                                        className="dropdown-item"
                                        href="/my-profile"
                                    >
                                        Profile
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        onClick={logout}
                                        className="dropdown-item"
                                        to="#"
                                    >
                                        Logout
                                    </Link>
                                </MenuItem>
                            </div>
                        </div>
                    </Menu>
                </div>
            ) : (
                <div className="navbar-nav gap-2 navbar-login-part">
                    <Button variant="outlined" href="/login" color="inherit">
                        Login
                    </Button>
                </div>
            )}
        </>
    );
};

export default HeaderLogin;
