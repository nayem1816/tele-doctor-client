import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo/teleDoctorLogo.png';
import './PrescriptionDetails.css';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import CustomDateAndTime from '../../common/CustomDateAndTime/CustomDateAndTime';
import { toast } from 'react-toastify';

const PrescriptionDetails = () => {
    const { register, handleSubmit } = useForm();
    const [appointment, setAppointment] = useState([]);
    const [selectPrescription, setSelectPrescription] = useState([]);
    const { id } = useParams();
    let dateAndTime = CustomDateAndTime();
    const navigate = useNavigate();
    const path = window.location.pathname;

    let newPrescription = `/dashboard/prescription/${id}`;

    useEffect(() => {
        if (path === newPrescription) {
            fetch(`http://localhost:5000/api/v1/ReadAppointmentById/${id}`)
                .then((res) => res.json())
                .then((data) => setAppointment(data.data));
        } else {
            fetch(`http://localhost:5000/api/v1/ReadPrescriptionById/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setSelectPrescription(data.data);
                    setAppointment(data.data.appointment);
                });
        }
    }, [id, path, newPrescription]);

    const onSubmit = (data) => {
        const prescription = {
            medicineName: data.medicine,
            symptoms: data.symptom,
            test: data.test,
            advice: data.advice,
            appointmentId: appointment._id,
            createdAt: dateAndTime,
            appointment: appointment,
        };
        fetch('http://localhost:5000/api/v1/CreatePrescription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prescription),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Prescription Created Successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                    });
                    navigate('/dashboard/appointments');
                }
            });
    };

    return (
        <div className="d-flex justify-content-center mb-4">
            <div className="prescription">
                <div className="border rounded">
                    <div className="row d-flex align-items-center p-3">
                        <div className="col-6">
                            <img className="logo" src={logo} alt="logo" />
                        </div>
                        <div className="col-6">
                            <h4 className="">
                                <strong>{appointment?.doctorName}</strong>
                            </h4>
                            <p>TeleDoctor</p>
                            <p className="mt-3">
                                <strong>Address:</strong>{' '}
                                <a href="www.tele-doctor.com">
                                    www.tele-doctor.com
                                </a>
                            </p>
                            <p>
                                <strong>Phone:</strong>{' '}
                                {appointment?.doctorPhone}
                            </p>
                        </div>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row p-3">
                            <div className="col-4">
                                <div className="symptom">
                                    <div className="bg-success p-1">
                                        <p className="text-white text-center fw-bold">
                                            Symptoms
                                        </p>
                                    </div>
                                    <TextField
                                        {...register('symptom')}
                                        className="w-100 mt-1 text-dark"
                                        id="filled-multiline-static"
                                        multiline
                                        rows={5}
                                        placeholder="Symptoms...."
                                        variant="filled"
                                        disabled={
                                            path === newPrescription
                                                ? false
                                                : true
                                        }
                                        defaultValue={
                                            path === newPrescription
                                                ? null
                                                : selectPrescription?.symptoms
                                        }
                                        sx={{
                                            '& .MuiInputBase-input.Mui-disabled':
                                                {
                                                    WebkitTextFillColor:
                                                        '#000000',
                                                },
                                        }}
                                    />
                                </div>
                                <div className="test mt-5">
                                    <div className="bg-success p-1">
                                        <p className="text-white text-center fw-bold">
                                            Tests
                                        </p>
                                    </div>
                                    <TextField
                                        {...register('test')}
                                        className="w-100 mt-1"
                                        id="filled-multiline-static"
                                        multiline
                                        rows={5}
                                        placeholder="Tests...."
                                        variant="filled"
                                        disabled={
                                            path === newPrescription
                                                ? false
                                                : true
                                        }
                                        defaultValue={
                                            path === newPrescription
                                                ? null
                                                : selectPrescription?.test
                                        }
                                        sx={{
                                            '& .MuiInputBase-input.Mui-disabled':
                                                {
                                                    WebkitTextFillColor:
                                                        '#000000',
                                                },
                                        }}
                                    />
                                </div>
                                <div className="advice mt-5">
                                    <div className="bg-success p-1">
                                        <p className="text-white text-center fw-bold">
                                            Advice
                                        </p>
                                    </div>
                                    <TextField
                                        {...register('advice')}
                                        className="w-100 mt-1"
                                        id="filled-multiline-static"
                                        multiline
                                        rows={5}
                                        placeholder="Advice...."
                                        variant="filled"
                                        disabled={
                                            path === newPrescription
                                                ? false
                                                : true
                                        }
                                        defaultValue={
                                            path === newPrescription
                                                ? null
                                                : selectPrescription?.advice
                                        }
                                        sx={{
                                            '& .MuiInputBase-input.Mui-disabled':
                                                {
                                                    WebkitTextFillColor:
                                                        '#000000',
                                                },
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-8 ps-4">
                                <div className="medicine border-start h-100 ps-4">
                                    <h1>
                                        R
                                        <small>
                                            <sub>X</sub>
                                        </small>
                                    </h1>
                                    <hr />
                                    <div className="">
                                        <TextField
                                            {...register('medicine', {
                                                required: true,
                                            })}
                                            className="w-100 mt-1"
                                            id="filled-multiline-static"
                                            multiline
                                            rows={23}
                                            placeholder="Medicine...."
                                            variant="filled"
                                            disabled={
                                                path === newPrescription
                                                    ? false
                                                    : true
                                            }
                                            defaultValue={
                                                path === newPrescription
                                                    ? null
                                                    : selectPrescription?.medicineName
                                            }
                                            sx={{
                                                '& .MuiInputBase-input.Mui-disabled':
                                                    {
                                                        WebkitTextFillColor:
                                                            '#000000',
                                                    },
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            {path === newPrescription ? (
                                <div className="text-center mt-3">
                                    <button
                                        style={{ width: '150px' }}
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        Confirm
                                    </button>
                                </div>
                            ) : null}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PrescriptionDetails;
