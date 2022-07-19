import React, { useState } from 'react';
import CustomSelect from './../../common/Form/CustomSelect';
import { useForm } from 'react-hook-form';
import CustomInput from './../../common/Form/CustomInput';
import { FaUser, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa';
import { MdEmail, MdHealthAndSafety } from 'react-icons/md';
import { AiOutlineNumber } from 'react-icons/ai';
import GoogleButton from './../GoogleButton/GoogleButton';

const options = [
    { value: 'patient', label: 'Patient' },
    { value: 'doctor', label: 'Doctor' },
];

const SignupForm = () => {
    const [selectType, setSelectType] = useState(null);
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
                <div className="select-area w-50">
                    <CustomSelect
                        setSelectType={setSelectType}
                        options={options}
                    />
                </div>
                {selectType?.value === 'doctor' ? null : (
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
                )}
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
                        {selectType?.value === 'doctor' && (
                            <div className="doctor-registration-code">
                                <CustomInput
                                    Icon={AiOutlineNumber}
                                    type="number"
                                    label="doctorRegistration"
                                    register={register}
                                    placeHolder="BDMC number"
                                    required
                                />
                            </div>
                        )}
                        {selectType?.value === 'doctor' && (
                            <div className="specialist">
                                <CustomInput
                                    Icon={MdHealthAndSafety}
                                    type="text"
                                    label="specialist"
                                    register={register}
                                    placeHolder="Specialist"
                                    required
                                />
                            </div>
                        )}
                        <div className="submit-button text-center mt-4">
                            <input
                                className="btn text-white px-4"
                                style={{ backgroundColor: '#5921CF' }}
                                type="submit"
                                value="Signup"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
