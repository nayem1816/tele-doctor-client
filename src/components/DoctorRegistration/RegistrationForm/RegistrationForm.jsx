import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../common/InputField/CustomInput/CustomInput';
import CustomRadioBtn from '../../common/InputField/CustomRadioBtn/CustomRadioBtn';
import UploadField from '../../common/InputField/UploadField/UploadField';
import CustomDatePicker from '../../common/InputField/CustomDatePicker/CustomDatePicker';
import CustomSelect from '../../common/InputField/CustomSelect/CustomSelect';
import categories from './../../../services/data/categories';
import CustomButton from '../../common/InputField/CustomButton/CustomButton';

const RegistrationForm = () => {
    const { register, handleSubmit } = useForm();
    const [doctorImage, setDoctorImage] = useState(null);

    const onSubmit = (data) => {
        const doctorsData = data;
        const doctorFullData = { ...doctorsData, profilePic: doctorImage };
        console.log(doctorFullData);
    };

    return (
        <div className="container my-4">
            <div className="">
                <h4>Enter your information</h4>
            </div>
            <div className="">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter your name'}
                                inputType={'text'}
                                refs={register('name', { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter your email'}
                                inputType={'email'}
                                refs={register('email', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'invalid email address',
                                    },
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter your mobile'}
                                inputType={'text'}
                                refs={register('mobile', {
                                    required: true,
                                    minLength: 11,
                                    maxLength: 11,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <UploadField
                                placeHolder={'Doctor Image'}
                                setDoctorImage={setDoctorImage}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomDatePicker
                                placeHolder={'Date Of birth'}
                                refs={register('DOB', { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomRadioBtn
                                titleName={'Gender'}
                                regName={'gender'}
                                defaultValue={false}
                                selectOptions={['Male', 'Female', 'Other']}
                                rules={{ required: true }}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter district name'}
                                inputType={'text'}
                                refs={register('district', { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter your address'}
                                inputType={'text'}
                                refs={register('address', { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomSelect
                                placeHolder="Department"
                                regName={'specialization'}
                                selectOptions={categories.map(
                                    (category) => category.name
                                )}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter your degree'}
                                inputType={'text'}
                                refs={register('education', { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter your registration number'}
                                inputType={'text'}
                                refs={register('registrationNumber', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={
                                    'Enter your experience (in years or months)'
                                }
                                inputType={'text'}
                                refs={register('experience', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={
                                    'Enter your visiting fee (in taka)'
                                }
                                inputType={'number'}
                                refs={register('fees', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-12 p-3 button">
                            <CustomButton
                                btnType={'btn'}
                                btnTxt={'Reset'}
                                color="secondary"
                            />
                            <CustomButton
                                btnType={'submit'}
                                btnTxt={'Submit'}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
