import React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Tooltip } from '@mui/material';
import userIcon from '../../../images/icons/user.png';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';

const AppointmentDetails = () => {
    const [appointment, setAppointment] = React.useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/ReadAppointmentById/${id}`)
            .then((res) => res.json())
            .then((data) => setAppointment(data.data));
    }, [id, appointment]);

    const { register, handleSubmit, reset, formState } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/api/v1/SentAppointmentMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                appointmentId: appointment._id,
                message: data.message,
                sender: 'doctor',
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ message: '' });
        }
    }, [formState, reset]);

    return (
        <div>
            <h2>Appointment Details</h2>
            <div>
                <div className="appointment-message my-5">
                    <div className="row mb-4">
                        <h4>Appointment date and message</h4>
                        <div className="col-md-6">
                            <div className="border p-3 rounded">
                                <div
                                    style={{ height: '250px' }}
                                    className="overflow-auto"
                                >
                                    {appointment?.message?.map((msg) => (
                                        <div key={msg?.time} className="">
                                            {msg?.sender === 'patient' && (
                                                <div className="d-flex align-items-center">
                                                    <Tooltip
                                                        title={
                                                            appointment?.patientName
                                                        }
                                                    >
                                                        <img
                                                            style={{
                                                                width: '20px',
                                                                height: '20px',
                                                            }}
                                                            className="rounded-circle border border-primary"
                                                            src={userIcon}
                                                            alt=""
                                                        />
                                                    </Tooltip>
                                                    <BiCaretRight />
                                                    <p
                                                        style={{
                                                            backgroundColor:
                                                                '#E4E6EB',
                                                        }}
                                                        className="py-1 px-2 rounded mb-1"
                                                    >
                                                        {msg?.message}
                                                    </p>
                                                </div>
                                            )}
                                            {msg?.sender === 'doctor' && (
                                                <div className="d-flex flex-row-reverse align-items-center">
                                                    <Tooltip
                                                        title={
                                                            appointment?.doctorName
                                                        }
                                                    >
                                                        <img
                                                            style={{
                                                                width: '20px',
                                                                height: '20px',
                                                            }}
                                                            className="rounded-circle border border-primary"
                                                            src={
                                                                appointment?.doctorProfilePic
                                                            }
                                                            alt=""
                                                        />
                                                    </Tooltip>
                                                    <BiCaretLeft />
                                                    <p
                                                        style={{
                                                            backgroundColor:
                                                                '#E4E6EB',
                                                        }}
                                                        className="py-1 px-2 rounded mb-1"
                                                    >
                                                        {msg?.message}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="message-send mt-3">
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="d-flex"
                                    >
                                        <input
                                            {...register('message', {
                                                required: true,
                                            })}
                                            placeholder="Type a message..."
                                            className="form-control"
                                            type="text"
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12 p-2">
                                    <label
                                        htmlFor="appointmentDate"
                                        className="form-label"
                                    >
                                        Appointment Date
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="appointmentDate"
                                        defaultValue={
                                            appointment?.appointmentDate
                                        }
                                        disabled
                                    />
                                </div>
                                <div className="col-12 p-2">
                                    <label
                                        htmlFor="userName"
                                        className="form-label"
                                    >
                                        User Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        defaultValue={appointment?.userName}
                                        disabled
                                    />
                                </div>
                                <div className="col-12 p-2">
                                    <label
                                        htmlFor="userEmail"
                                        className="form-label"
                                    >
                                        User Email
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userEmail"
                                        defaultValue={appointment?.userEmail}
                                        disabled
                                    />
                                </div>
                                <div className="col-12 p-2 mt-3">
                                    <Link
                                        to={`/dashboard/prescription/${appointment?._id}`}
                                    >
                                        <button className="btn btn-danger fw-bold fs-5">
                                            Make prescription
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="doctor-info my-5">
                    <div className="row mb-4">
                        <h4>Doctor Information</h4>
                        <div className="col-md-6 p-2">
                            <label htmlFor="dName" className="form-label">
                                Doctor Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="dName"
                                defaultValue={appointment?.doctorName}
                                disabled
                            />
                        </div>
                        <div className="col-md-6 p-2">
                            <label htmlFor="dEmail" className="form-label">
                                Doctor Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="dEmail"
                                defaultValue={appointment?.doctorEmail}
                                disabled
                            />
                        </div>
                        <div className="col-md-6 p-2">
                            <label htmlFor="dPhone" className="form-label">
                                Doctor Phone
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="dPhone"
                                defaultValue={appointment?.doctorPhone}
                                disabled
                            />
                        </div>
                        <div className="col-md-6 p-2">
                            <label htmlFor="doctorFee" className="form-label">
                                Doctor Fee
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="doctorFee"
                                defaultValue={appointment?.doctorFee}
                                disabled
                            />
                        </div>
                    </div>
                </div>
                <div className="patient-info my-4">
                    <div className="row mb-4">
                        <h4>Patient Information</h4>
                        <div className="col-md-6 p-2">
                            <label htmlFor="patientName" className="form-label">
                                Patient Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="patientName"
                                defaultValue={appointment?.patientName}
                                disabled
                            />
                        </div>
                        <div className="col-md-6 p-2">
                            <label
                                htmlFor="patientEmail"
                                className="form-label"
                            >
                                Patient Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="patientEmail"
                                defaultValue={appointment?.patientEmail}
                                disabled
                            />
                        </div>
                        <div className="col-md-6 p-2">
                            <label
                                htmlFor="patientPhone"
                                className="form-label"
                            >
                                Patient Phone
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="patientPhone"
                                defaultValue={appointment?.patientPhone}
                                disabled
                            />
                        </div>
                        <div className="col-md-6 p-2">
                            <label htmlFor="patientAge" className="form-label">
                                Patient Age
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="patientAge"
                                defaultValue={appointment?.patientAge}
                                disabled
                            />
                        </div>
                        <div className="col-md-6 p-2">
                            <label
                                htmlFor="patientGender"
                                className="form-label"
                            >
                                Patient Gender
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="patientGender"
                                defaultValue={appointment?.patientGender}
                                disabled
                            />
                        </div>
                    </div>
                </div>
                <div className="payment-info my-4">
                    <div className="row mb-4">
                        <h4>Payment Information</h4>
                        <div className="col-md-6 p-2">
                            <label htmlFor="paymentType" className="form-label">
                                Payment Type
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="paymentType"
                                defaultValue={
                                    appointment?.paymentInfo?.paymentType
                                }
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetails;
