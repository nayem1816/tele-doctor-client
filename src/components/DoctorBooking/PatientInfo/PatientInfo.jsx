import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../common/InputField/CustomInput/CustomInput';
import CustomDatePicker from '../../common/InputField/CustomDatePicker/CustomDatePicker';
import CustomRadioBtn from '../../common/InputField/CustomRadioBtn/CustomRadioBtn';
import CustomButton from '../../common/InputField/CustomButton/CustomButton';
import { DoctorBookingContext } from '../../../pages/DoctorBooking/DoctorBookingContext';

const PatientInfo = () => {
    const { setBookingInfo } = useContext(DoctorBookingContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setBookingInfo(data);
    };
    return (
        <div className="container">
            <h4 className="text-center my-3">Enter your information</h4>
            <form
                className="mx-1 mx-md-3 mx-lg-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="row">
                    <div className="col-md-12 p-3">
                        <CustomInput
                            placeHolder={'Patient Full Name'}
                            inputType={'text'}
                            refs={register('patientName', { required: true })}
                        />
                    </div>
                    <div className="col-md-12 p-3">
                        <CustomDatePicker
                            placeHolder={'Date Of birth'}
                            refs={register('dateOfBirth', { required: true })}
                        />
                    </div>
                    <div className="col-md-12 p-3">
                        <CustomRadioBtn
                            titleName={'Gender'}
                            regName={'patientGender'}
                            defaultValue={false}
                            selectOptions={['Male', 'Female', 'Other']}
                            rules={{ required: true }}
                            register={register}
                        />
                    </div>
                    <div className="col-md-12 p-3">
                        <CustomInput
                            placeHolder={'Age'}
                            inputType={'text'}
                            refs={register('patientAge', { required: true })}
                        />
                    </div>
                    <div className="col-md-12 p-3">
                        <CustomInput
                            placeHolder={'Your Email'}
                            inputType={'email'}
                            refs={register('patientEmail', { required: true })}
                        />
                    </div>
                    <div className="col-md-12 p-3">
                        <CustomInput
                            placeHolder={'Your Phone Number'}
                            inputType={'text'}
                            refs={register('patientPhone', { required: true })}
                        />
                    </div>
                    <div className="col-md-12 p-3">
                        <CustomDatePicker
                            placeHolder={'Appointment Date'}
                            refs={register('appointmentDate', {
                                required: true,
                            })}
                        />
                    </div>
                    <div className="col-md-12 p-3 button d-flex justify-content-end">
                        <CustomButton btnType={'submit'} btnTxt={'Next'} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PatientInfo;
