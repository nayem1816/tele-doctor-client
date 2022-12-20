import React, { useState } from 'react';
import './DashboardHome.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import TotalNumber from '../../components/Dashboard/DashboardHome/Card/TotalNumber';
import { useEffect } from 'react';
import {
    FaUserMd,
    FaUserCheck,
    FaAdn,
    FaFilePrescription,
} from 'react-icons/fa';
import { HiCurrencyBangladeshi } from 'react-icons/hi';
import Cart from '../../components/Dashboard/DashboardHome/Cart/Cart';
import NewPatients from '../../components/Dashboard/DashboardHome/NewPatients/NewPatients';
import AppointmentListDB from '../../components/Dashboard/DashboardHome/AppointmentListDB/AppointmentListDB';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [greeting, setGreeting] = useState('Good Morning');
    const [roleBaseUser, setRoleBaseUser] = useState([]);
    const [totalDoctor, setTotalDoctor] = useState(0);
    const [totalPatients, setTotalPatients] = useState(0);
    const [totalEarns, setTotalEarns] = useState(0);
    const [totalAdminAppointments, setTotalAdminAppointments] = useState(0);

    const [totalPatientsInDoctor, setTotalPatientsInDoctor] = useState(0);
    const [totalDoctorEarns, setTotalDoctorEarns] = useState(0);
    const [totalPrescriptions, setTotalPrescriptions] = useState(0);
    const [totalDoctorAppointments, setTotalDoctorAppointments] = useState(0);

    const [newAdminAppointments, setAdminAppointments] = useState([]);
    const [newDoctorAppointments, setDoctorAppointments] = useState([]);

    useEffect(() => {
        let today = new Date();
        let curHr = today.getHours();
        if (curHr < 12) {
            setGreeting('Good Morning');
        } else if (curHr < 17) {
            setGreeting('Good Afternoon');
        } else if (curHr < 21) {
            setGreeting('Good Evening');
        } else {
            setGreeting('Good Night');
        }

        fetch(`http://localhost:5000/api/v1/ReadProfileByEmail/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setRoleBaseUser(data.data[0]);
            });

        // Admin
        fetch('http://localhost:5000/api/v1/ReadDoctors')
            .then((res) => res.json())
            .then((data) => {
                setTotalDoctor(data.data.length);
            });

        fetch(`http://localhost:5000/api/v1/ReadAppointments`)
            .then((res) => res.json())
            .then((data) => {
                setTotalPatients(data.data.length);
                setTotalAdminAppointments(data.data.length);
                const totalEarns = data.data.reduce((total, appointment) => {
                    return total + appointment.doctorFee;
                }, 0);
                setTotalEarns(totalEarns);
                setAdminAppointments(data.data.reverse().slice(0, 5));
            });

        // Doctor
        fetch(
            `http://localhost:5000/api/v1/ReadAppointmentDoctorByEmail/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                setTotalPatientsInDoctor(data.data.length);
                setTotalDoctorAppointments(data.data.length);
                const totalEarns = data.data.reduce((total, appointment) => {
                    return total + appointment.doctorFee;
                }, 0);
                setTotalDoctorEarns(totalEarns);
                setDoctorAppointments(data.data.reverse().slice(0, 5));
            });
        fetch(
            `http://localhost:5000/api/v1/ReadPrescriptionDoctorByEmail/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                setTotalPrescriptions(data.data.length);
            });
    }, [user?.email]);

    return (
        <div className="sidebar-container my-3">
            <h4 className="base-color2 mb-5">
                {greeting} <strong>{roleBaseUser?.Name}</strong>
            </h4>
            <div className="my-4 card-part-DB">
                <div className="row">
                    {roleBaseUser?.admin === 'admin' && (
                        <div className="col-md-3 mb-3 mb-md-0">
                            <TotalNumber
                                title={'Doctors'}
                                number={totalDoctor}
                                color={'#5921cf'}
                                Icon={FaUserMd}
                            />
                        </div>
                    )}
                    {roleBaseUser?.admin === 'admin' && (
                        <div className="col-md-3 mb-3 mb-md-0">
                            <TotalNumber
                                title={'Patients'}
                                number={totalPatients}
                                color={'#DC3545'}
                                Icon={FaUserCheck}
                            />
                        </div>
                    )}
                    {roleBaseUser?.role === 'doctor' && (
                        <div className="col-md-3 mb-3 mb-md-0">
                            <TotalNumber
                                title={'Patients'}
                                number={totalPatientsInDoctor}
                                color={'#DC3545'}
                                Icon={FaUserCheck}
                            />
                        </div>
                    )}
                    {roleBaseUser?.admin === 'admin' && (
                        <div className="col-md-3 mb-3 mb-md-0">
                            <TotalNumber
                                title={'Earns'}
                                number={totalEarns}
                                color={'#5921cf'}
                                Icon={HiCurrencyBangladeshi}
                            />
                        </div>
                    )}
                    {roleBaseUser?.role === 'doctor' && (
                        <div className="col-md-3 mb-3 mb-md-0">
                            <TotalNumber
                                title={'Earns'}
                                number={totalDoctorEarns}
                                color={'#5921cf'}
                                Icon={HiCurrencyBangladeshi}
                            />
                        </div>
                    )}
                    {roleBaseUser?.admin === 'admin' && (
                        <div className="col-md-3 mb-3 mb-md-0">
                            <TotalNumber
                                title={'Appointments'}
                                number={totalAdminAppointments}
                                color={'#DC3545'}
                                Icon={FaAdn}
                            />
                        </div>
                    )}
                    {roleBaseUser?.role === 'doctor' && (
                        <div className="col-md-3 mb-3 mb-md-0">
                            <TotalNumber
                                title={'Appointments'}
                                number={totalDoctorAppointments}
                                color={'#DC3545'}
                                Icon={FaAdn}
                            />
                        </div>
                    )}
                    {roleBaseUser?.role === 'doctor' && (
                        <div className="col-md-3 mb-3 mb-md-0">
                            <TotalNumber
                                title={'Perception'}
                                number={totalPrescriptions}
                                color={'#5921cf'}
                                Icon={FaFilePrescription}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="row my-5 chart-part">
                <div className="col-md-8">
                    <div className="border rounded">
                        <h4 className="p-3 fw-bold">Activity</h4>
                        <hr className="my-3" />
                        <div className="cart p-3">
                            <Cart />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <NewPatients patients={newAdminAppointments} />
                </div>
            </div>
            {roleBaseUser?.admin === 'admin' && (
                <div className="appointment-list-admin my-5">
                    <AppointmentListDB appointments={newAdminAppointments} />
                </div>
            )}
            {roleBaseUser?.role === 'doctor' && (
                <div className="appointment-list-doctor my-5">
                    <AppointmentListDB appointments={newDoctorAppointments} />
                </div>
            )}
        </div>
    );
};

export default Dashboard;
