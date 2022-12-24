import React, { useState } from 'react';
import profile from '../../../images/icons/user1.png';
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

const CreatePost = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit, reset } = useForm();
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
        const postData = {
            post: data.postText,
            postImage: image,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            userEmail: user?.email,
            postDate: new Date().toDateString(),
            postTime: new Date().toLocaleTimeString(),
        };

        fetch('https://tele-doctor-server.vercel.app/api/v1/CreatePost', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 'success') {
                    toast.success('Post has been Successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                    reset();
                    handleClose();
                }
            });
    };
    return (
        <div className="border rounded px-4 py-2 shadow">
            <div className="d-flex align-items-center my-1">
                <div className="image">
                    <img
                        className="rounded-circle"
                        style={{ width: '40px', height: '40px' }}
                        src={user?.photoURL || profile}
                        alt=""
                    />
                </div>
                <div className="post w-100">
                    <p
                        onClick={handleClickOpen}
                        style={{
                            backgroundColor: '#f5f5f5',
                            cursor: 'pointer',
                        }}
                        className="py-3 px-3 rounded-pill w-75 ms-3 text-muted"
                    >
                        Whats on your mind?
                    </p>
                </div>
            </div>
            <hr className="my-2" />
            <div className="icon ms-3">
                <button
                    onClick={handleClickOpen}
                    className="d-flex align-items-center px-5 rounded-pill btn"
                >
                    <FaImages style={{ color: '#45BD62' }} className="fs-4" />
                    <span className="fs-5 ms-2 text-muted">Photo</span>
                </button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className="text-center">
                        Create Post
                    </DialogTitle>
                    <DialogContentText className="mx-4">
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                    <hr className="my-2" />
                    <DialogContent>
                        <div className="name-image d-flex align-items-center">
                            <img
                                className="rounded-circle border"
                                style={{ width: '40px', height: '40px' }}
                                src={user?.photoURL || profile}
                                alt=""
                            />
                            <h6 className="ms-3 mb-0">{user?.displayName}</h6>
                        </div>
                        <div className="form my-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <textarea
                                    autoFocus
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                    }}
                                    rows="5"
                                    className="w-100"
                                    type="text"
                                    {...register('postText', {
                                        required: true,
                                    })}
                                    placeholder="Whats on your mind?"
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

                                <div className="image mt-3 d-flex justify-content-between">
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
                                            Photo
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
                                        className="btn btn-danger border px-5 rounded-pill fw-bold end-0"
                                        type="submit"
                                        value="Post"
                                    />
                                </div>
                            </form>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default CreatePost;
