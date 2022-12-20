import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../images/logo/teleDoctorLogo.png';
// import './PrescriptionDetails.css';
import { TextField } from '@mui/material';
import { useState } from 'react';
import Pdf from 'react-to-pdf';

const MyPrescriptionDetails = () => {
    const [appointment, setAppointment] = useState([]);
    const [selectPrescription, setSelectPrescription] = useState([]);
    const { id } = useParams();
    const ref = React.createRef();

    useEffect(() => {
        fetch(
            `https://tele-doctor-server.vercel.app/api/v1/ReadPrescriptionById/${id}`
        )
            .then((res) => res.json())
            .then((data) => {
                setSelectPrescription(data.data);
                setAppointment(data.data.appointment);
            });
    }, [id]);

    return (
        <div className="">
            <div className="download-pdf-btn text-end mb-2 me-4 py-2">
                <Pdf targetRef={ref} filename="prescription.pdf">
                    {({ toPdf }) => (
                        <button className="btn btn-success" onClick={toPdf}>
                            Download PDF
                        </button>
                    )}
                </Pdf>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <div
                    ref={ref}
                    style={{ width: '770px' }}
                    className="prescription"
                >
                    <div className="border rounded">
                        <div className="row d-flex align-items-center p-3">
                            <div className="col-6">
                                <img
                                    style={{ width: '200px', height: '160px' }}
                                    className="logo"
                                    src={logo}
                                    alt="logo"
                                />
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
                        <div className="row p-3">
                            <div className="col-4">
                                <div className="symptom">
                                    <div className="bg-success p-1">
                                        <p className="text-white text-center fw-bold">
                                            Symptoms
                                        </p>
                                    </div>
                                    <TextField
                                        className="w-100 mt-1 text-dark"
                                        id="filled-multiline-static"
                                        multiline
                                        rows={5}
                                        placeholder="Symptoms...."
                                        variant="filled"
                                        disabled={true}
                                        defaultValue={
                                            selectPrescription?.symptoms
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
                                        className="w-100 mt-1"
                                        id="filled-multiline-static"
                                        multiline
                                        rows={5}
                                        placeholder="Tests...."
                                        variant="filled"
                                        disabled={true}
                                        defaultValue={selectPrescription?.test}
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
                                        className="w-100 mt-1"
                                        id="filled-multiline-static"
                                        multiline
                                        rows={5}
                                        placeholder="Advice...."
                                        variant="filled"
                                        disabled={true}
                                        defaultValue={
                                            selectPrescription?.advice
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
                                            className="w-100 mt-1"
                                            id="filled-multiline-static"
                                            multiline
                                            rows={23}
                                            placeholder="Medicine...."
                                            variant="filled"
                                            disabled={true}
                                            defaultValue={
                                                selectPrescription?.medicineName
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPrescriptionDetails;
