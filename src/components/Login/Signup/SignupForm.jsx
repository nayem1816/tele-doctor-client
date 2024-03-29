import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from './../../common/Form/CustomInput';
import { FaUser, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import GoogleButton from './../GoogleButton/GoogleButton';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    // submit form
    const onSubmit = (submitData) => {
        if (submitData.password === submitData.confirmPassword) {
            // create user
            fetch(
                'https://tele-doctor-server.vercel.app/api/v1/CreateProfile',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Name: submitData.name,
                        EmailAddress: submitData.email,
                    }),
                }
            )
                .then((res) => res.json())
                .then(async (data) => {
                    if (data.data.EmailAddress === submitData.email) {
                        await createUserWithEmailAndPassword(
                            submitData.email,
                            submitData.password
                        );
                        await updateProfile({ displayName: submitData.name });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });

            // login user
            fetch('https://tele-doctor-server.vercel.app/api/v1/UserLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    EmailAddress: submitData.email,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem(
                        'userToken',
                        JSON.stringify(data.data.token)
                    );
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            toast.error('Passwords do not match!', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    useEffect(() => {
        if (user) {
            navigate('/', { replace: true });
            window.location.reload();
        }
    }, [user, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        toast.error(error.message, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className="container">
            <div className="mx-md-5 my-5 bg-white p-5 rounded">
                <div className="google-signup mt-5">
                    <GoogleButton />
                    <div className="or-separator row container d-flex align-items-center mb-2 mt-4">
                        <div className="col-5">
                            <hr className="w-50 float-end" />
                        </div>
                        <div className="col-2 text-center">
                            <span className="text-center">Or</span>
                        </div>
                        <div className="col-5">
                            <hr className="w-50" />
                        </div>
                    </div>
                </div>
                <div className="form-area mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="full-name">
                            <CustomInput
                                Icon={FaUser}
                                type="text"
                                label="name"
                                register={register}
                                placeHolder="Enter your name"
                                required
                            />
                        </div>
                        <div className="email">
                            <CustomInput
                                Icon={MdEmail}
                                type="email"
                                label="email"
                                register={register}
                                placeHolder={'Enter your email'}
                                required
                            />
                        </div>
                        <div className="password row">
                            <div className="col-md-6">
                                <CustomInput
                                    Icon={FaLock}
                                    ShowPass={FaEye}
                                    HidePass={FaEyeSlash}
                                    type="password"
                                    label="password"
                                    register={register}
                                    placeHolder="Password"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <CustomInput
                                    Icon={FaLock}
                                    ShowPass={FaEye}
                                    HidePass={FaEyeSlash}
                                    type="password"
                                    label="confirmPassword"
                                    register={register}
                                    placeHolder="Confirm password"
                                    required
                                />
                            </div>
                        </div>
                        <div className="submit-button text-center mt-4">
                            <input
                                className="btn text-white px-4"
                                style={{ backgroundColor: '#5921CF' }}
                                type="submit"
                                value="Signup"
                            />
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
