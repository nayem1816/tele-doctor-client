import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Avatar, Divider, Fade, Menu, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeaderLogin = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <div className="d-flex justify-content-center">
                    <Avatar
                        onClick={handleClick}
                        alt="USER"
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
                                        alt="USER"
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
                                <MenuItem onClick={handleClose}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    My account
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
