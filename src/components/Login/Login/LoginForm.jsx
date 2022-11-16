import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../../images/logo/teleDoctorLogo.png';
import { useForm } from 'react-hook-form';
import CustomInput from './../../common/Form/CustomInput';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleButton from '../GoogleButton/GoogleButton';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useEffect } from 'react';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            window.location.reload();
        }
    });

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.log(error);
    }

    const onSubmit = (data) => {
        fetch('http://localhost:5000/api/v1/UserLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                EmailAddress: data.email,
            }),
        })
            .then((res) => res.json())
            .then((backData) => {
                if (backData.data.EmailAddress === data.email) {
                    signInWithEmailAndPassword(data.email, data.password);
                    localStorage.setItem(
                        'userToken',
                        JSON.stringify(backData.data.token)
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container">
            <div className="mx-md-5 my-5 bg-white p-5 rounded">
                <p className="text-center">
                    Do you have an account?{' '}
                    <Link className="base-color" to="/signup">
                        create an account
                    </Link>
                </p>
                <div className="login-form row d-flex align-items-center">
                    <div className="col-md-4 text-sm-center text-md-start">
                        <img className="img-fluid" src={Logo} alt="logo" />
                    </div>
                    <div className="col-md-8 mt-4">
                        <GoogleButton />
                        <div className="or-separator row container d-flex align-items-center my-3">
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="login-email mb-4">
                                <CustomInput
                                    Icon={MdEmail}
                                    type="email"
                                    label="email"
                                    register={register}
                                    placeHolder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="login-password mb-4">
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
                            <p className="m-0">
                                <Link className="base-color" to="#">
                                    Forget password
                                </Link>
                            </p>
                            <div className="submit-button text-center mt-4">
                                <input
                                    className="btn text-white px-4"
                                    style={{ backgroundColor: '#5921CF' }}
                                    type="submit"
                                    value="Login"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
