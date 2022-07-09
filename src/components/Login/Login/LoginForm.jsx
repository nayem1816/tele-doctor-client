import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo/teleDoctorLogo.png';
import { useForm } from 'react-hook-form';
import CustomInput from './../../common/Form/CustomInput';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleButton from '../GoogleButton/GoogleButton';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
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
                                    placeholder="Enter your email"
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
                                    placeholder="Password"
                                    required
                                />
                            </div>
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
