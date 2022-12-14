import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './MobileBanking.css';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../common/InputField/CustomInput/CustomInput';
import CustomButton from '../../../common/InputField/CustomButton/CustomButton';
import { DoctorBookingContext } from '../../../../pages/DoctorBooking/DoctorBookingContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const MobileBanking = () => {
    const { register, handleSubmit } = useForm();
    const [bKashActive, setBKashActive] = React.useState(true);
    const [rocketActive, setRocketActive] = React.useState(false);
    const [nogadActive, setNogadActive] = React.useState(false);
    const { bookingInfo, doctor } = useContext(DoctorBookingContext);
    const [user] = useAuthState(auth);

    const handleBKashActive = () => {
        setBKashActive(true);
        setRocketActive(false);
        setNogadActive(false);
    };
    const handleRocketActive = () => {
        setBKashActive(false);
        setRocketActive(true);
        setNogadActive(false);
    };
    const handleNogadActive = () => {
        setBKashActive(false);
        setRocketActive(false);
        setNogadActive(true);
    };

    const onSubmit = (data) => {
        const bookingInformation = {
            paymentInfo: {
                paymentType: 'Mobile Banking',
                paymentBrand: bKashActive
                    ? 'bkash'
                    : rocketActive
                    ? 'Rocket'
                    : 'Nogad',
                paymentPhone: data.paymentPhone,
                trxId: data.trxID,
            },
            userName: user.displayName,
            userEmail: user.email,
            doctorId: doctor._id,
            doctorName: doctor.name,
            doctorEmail: doctor.email,
            doctorPhone: doctor.mobile,
            doctorFee: doctor.fees,
            doctorProfilePic: doctor.profilePic,
            appointmentDate: bookingInfo.appointmentDate,
            patientName: bookingInfo.patientName,
            patientEmail: bookingInfo.patientEmail,
            patientPhone: bookingInfo.patientPhone,
            patientAge: bookingInfo.patientAge,
            patientGender: bookingInfo.patientGender,
            patientDateOfBirth: bookingInfo.dateOfBirth,
        };
        fetch('http://localhost:5000/api/v1/CreateAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingInformation),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Appointment Created Successfully');
            });
    };

    return (
        <div>
            <div className="row">
                <div className="col-4 banking-type">
                    <Link onClick={() => handleBKashActive()} to="">
                        <div
                            className={`banking-card ${
                                bKashActive && 'banking-card-active'
                            }`}
                        >
                            <h5 className="text-center">Bkash</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-4 banking-type">
                    <Link onClick={() => handleRocketActive()} to="">
                        <div
                            className={`banking-card ${
                                rocketActive && 'banking-card-active'
                            }`}
                        >
                            <h5 className="text-center">Rocket</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-4 banking-type">
                    <Link onClick={() => handleNogadActive()} to="">
                        <div
                            className={`banking-card ${
                                nogadActive && 'banking-card-active'
                            }`}
                        >
                            <h5 className="text-center">Nogad</h5>
                        </div>
                    </Link>
                </div>
            </div>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="p-3">
                    <CustomInput
                        placeHolder={'Phone Number'}
                        inputType={'text'}
                        refs={register('paymentPhone', { required: true })}
                    />
                </div>
                <div className="p-3">
                    <CustomInput
                        placeHolder={'Total Amount'}
                        inputType={'number'}
                        defaultValue={doctor?.fees}
                    />
                </div>
                <div className="p-3">
                    <CustomInput
                        placeHolder={'Transaction ID'}
                        inputType={'text'}
                        refs={register('trxID', { required: true })}
                    />
                </div>
                <div className="p-3 button">
                    <CustomButton btnType={'submit'} btnTxt={'Confirm'} />
                </div>
            </form>
        </div>
    );
};

export default MobileBanking;
