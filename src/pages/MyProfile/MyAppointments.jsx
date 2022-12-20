import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyAppointmentMsg from '../../components/MyProfile/MyProfileMain/MyAppointmentMsg';
import { Link } from 'react-router-dom';

const MyAppointments = () => {
    const [appointmentData, setAppointmentData] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(
            `https://tele-doctor-server.vercel.app/api/v1/ReadAppointmentByEmail/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => setAppointmentData(data.data));
    }, [user?.email, appointmentData]);

    return (
        <div>
            <h3>My Appointments</h3>
            <hr className="my-3" />
            <div className="appointments-card">
                {appointmentData?.map((appointment) => (
                    <div
                        key={appointment._id}
                        className="card my-4 border-success"
                    >
                        <div className="head row mx-2">
                            <div className="col-md-7 left d-flex gap-2 align-items-center my-4">
                                <img
                                    style={{ width: '50px', height: '50px' }}
                                    className="img-fluid rounded-circle shadow p-1"
                                    src={appointment?.doctorProfilePic}
                                    alt=""
                                />
                                <h5>{appointment?.doctorName}</h5>
                            </div>
                            <div className="col-md-5 right d-flex align-items-center text-success my-4">
                                <strong>Appointment Date: </strong>
                                <span className="ms-2">
                                    {appointment.appointmentDate}
                                </span>
                            </div>
                        </div>
                        <div className="my-4 mx-3 row">
                            <div className="col-md-6">
                                <h4 className="fw-bold">Doctor</h4>
                                <hr className="my-3 me-5" />
                                <h6 className="mb-2">
                                    <strong>Name: </strong>
                                    <span className="ms-2">
                                        {appointment.doctorName}
                                    </span>
                                </h6>
                                <h6 className="mb-2">
                                    <strong>Email: </strong>
                                    <span className="ms-2">
                                        {appointment.doctorEmail}
                                    </span>
                                </h6>
                                <h6 className="mb-2">
                                    <strong>Phone: </strong>
                                    <span className="ms-2">
                                        {appointment.doctorPhone}
                                    </span>
                                </h6>
                            </div>
                            <div className="col-md-6 mt-5 mt-md-0">
                                <h4 className="fw-bold">Patient</h4>
                                <hr className="my-3 me-5" />
                                <h6 className="mb-2">
                                    <strong>Name: </strong>
                                    <span className="ms-2">
                                        {appointment.patientName}
                                    </span>
                                </h6>
                                <h6 className="mb-2">
                                    <strong>Email: </strong>
                                    <span className="ms-2">
                                        {appointment.patientEmail}
                                    </span>
                                </h6>
                                <h6 className="mb-2">
                                    <strong>Phone: </strong>
                                    <span className="ms-2">
                                        {appointment.patientPhone}
                                    </span>
                                </h6>
                                <h6 className="mb-2">
                                    <strong>Gender: </strong>
                                    <span className="ms-2">
                                        {appointment.patientGender}
                                    </span>
                                </h6>
                                <h6 className="mb-2">
                                    <strong>Date of birth: </strong>
                                    <span className="ms-2">
                                        {appointment.patientDateOfBirth}
                                    </span>
                                </h6>
                            </div>
                        </div>
                        <div className="row mx-3">
                            <div className="col-md-6 mt-5 mt-md-0">
                                <h4 className="fw-bold">Payment Information</h4>
                                <hr className="my-3 me-5" />
                                <h6 className="mb-2">
                                    <strong>Payment Type: </strong>
                                    <span className="ms-2">
                                        {appointment.paymentInfo.paymentType}
                                    </span>
                                </h6>
                                <h6 className="mb-2">
                                    <strong>Total Payment: </strong>
                                    <span className="ms-2">
                                        {appointment.doctorFee} Tk.
                                    </span>
                                </h6>
                                <div className="mt-2 mt-md-5">
                                    <p className="fw-bold mt-2 mt-md-5">
                                        Go to review this doctor{' '}
                                        <strong>
                                            <Link
                                                className="text-danger"
                                                to={`/review/doctor/${appointment.doctorEmail}`}
                                            >
                                                here
                                            </Link>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5 mt-md-0">
                                <h4 className="fw-bold">Messages</h4>
                                <hr className="my-3 me-5" />
                                <div className="border p-2 rounded my-2">
                                    <MyAppointmentMsg
                                        appointment={appointment}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointments;
