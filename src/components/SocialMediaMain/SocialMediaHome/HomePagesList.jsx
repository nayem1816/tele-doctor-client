import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SocialMediaHome.css';
import { Tooltip, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { FaImages } from 'react-icons/fa';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import './SocialMediaHome.css';
import axios from 'axios';
import { toast } from 'react-toastify';

// const pages = [
//     {
//         id: 1,
//         name: 'Dhaka Medical College and Hospital',
//     },
//     {
//         id: 2,
//         name: 'Sir Salimullah Medical College (SSMC)',
//     },
//     {
//         id: 3,
//         name: 'Mymensingh Medical College',
//     },
//     {
//         id: 4,
//         name: 'Rajshahi Medical College (RMC)',
//     },
//     {
//         id: 5,
//         name: 'Chittagong Medical College (CMC)',
//     },
//     {
//         id: 6,
//         name: 'Cumilla Medical College',
//     },
// ];

const HomePagesList = ({ pages }) => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleImageUpload = (e) => {
        const fileInput = document.getElementById('file-upload-input');
        // const filename = fileInput.files[0].name;

        const imgData = new FormData();
        imgData.set('key', '94e8e908997cb2f7fead68d619169951');
        imgData.append('image', fileInput.files[0]);

        axios
            .post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImage(response.data.data.image.url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onSubmit = (data) => {
        const pageData = {
            pageName: data.pageName,
            pageImage: image,
            pageAdmin: user.displayName,
            pageAdminEmail: user.email,
            pageAdminImage: user.photoURL,
        };
        fetch('https://tele-doctor-server.vercel.app/api/v1/CreatePage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pageData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Page created successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                    handleClose();
                }
            });
    };

    return (
        <div>
            <h2 className="fw-bold">Pages</h2>
            <hr className="mt-3 me-5" />
            <div className="create-new-page">
                <Button
                    onClick={handleClickOpen}
                    variant="outlined"
                    className="w-75 d-flex align-items-center"
                >
                    <AddIcon />
                    <span>Create new page</span>
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className="text-center">
                        Create New Page
                    </DialogTitle>
                    <DialogContentText className="mx-4">
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                    <hr className="my-2" />
                    <DialogContent>
                        <div className="name-image d-flex align-items-center">
                            <h5>Enter your page name</h5>
                        </div>
                        <div className="form my-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    autoFocus
                                    className="w-100 mb-4 form-control"
                                    type="text"
                                    {...register('pageName', {
                                        required: true,
                                    })}
                                    placeholder="Enter your page name"
                                />

                                {image !== null && (
                                    <div className="shoe-image border rounded text-center my-4">
                                        <img
                                            style={{
                                                height: '250px',
                                                width: '100%',
                                            }}
                                            className="img-fluid rounded"
                                            src={image}
                                            alt=""
                                        />
                                    </div>
                                )}

                                <div className="image mt-3 d-md-flex justify-content-md-between text-center text-md-start">
                                    <button
                                        type="button"
                                        // onClick={handleImageUpload}
                                        className="d-flex align-items-center px-5 rounded-pill btn border social-upload-btn"
                                    >
                                        <FaImages
                                            style={{ color: '#45BD62' }}
                                            className="fs-4"
                                        />
                                        <span className="fs-5 ms-2 text-muted">
                                            Cover Photo
                                        </span>
                                        <input
                                            onChange={handleImageUpload}
                                            className=""
                                            name="file-upload-input"
                                            id="file-upload-input"
                                            type="file"
                                        />
                                    </button>
                                    <input
                                        className="btn btn-danger border px-5 rounded-pill fw-bold end-md-0 mt-3 mt-md-0"
                                        type="submit"
                                        value="Create"
                                    />
                                </div>
                            </form>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            {pages.map((page) => (
                <div className="page-style" key={page._id}>
                    <Tooltip title={page.pageName} placement="right">
                        <Link
                            className="d-block text-dark fw-bold fs-6 d-flex align-items-center"
                            to={''}
                        >
                            <img
                                style={{ width: '40px', height: '40px' }}
                                className="rounded-circle border"
                                src={page.pageImage}
                                alt=""
                            />
                            <span className="ms-2">
                                {page.pageName.slice(0, 20)}..
                            </span>
                        </Link>
                    </Tooltip>
                </div>
            ))}
        </div>
    );
};

export default HomePagesList;
