import React, { useEffect, useState } from 'react';
import DoctorPageCard from './../DoctorPageCard/DoctorPageCard';
import { Pagination } from '@mui/material';
import { useParams } from 'react-router-dom';

const DoctorCard = () => {
    const [doctorsData, setDoctorsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { categoryName } = useParams();
    const [dcDataJson, setDcDataJson] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/ReadDoctors')
            .then((res) => res.json())
            .then((data) => setDcDataJson(data.data))
            .catch((err) => console.log(err));

        if (categoryName === 'all') {
            setDoctorsData(dcDataJson);
        } else if (categoryName === undefined) {
            setDoctorsData(dcDataJson);
        } else {
            const filteredDoctors = dcDataJson.filter(
                (doctor) => doctor.specialization === categoryName
            );
            setDoctorsData(filteredDoctors);
        }
    }, [categoryName, dcDataJson]);

    const doctorsPerPage = 12;
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = doctorsData.slice(
        indexOfFirstDoctor,
        indexOfLastDoctor
    );

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="container">
            {currentDoctors.length < 1 ? (
                <div
                    style={{ height: '200px' }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <h5 className="text-center text-danger">
                        This category has no doctors
                    </h5>
                </div>
            ) : (
                <div className="">
                    <div className="row mb-2">
                        {currentDoctors.map((doctor) => (
                            <div
                                key={doctor._id}
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4"
                            >
                                <DoctorPageCard doctor={doctor} />
                            </div>
                        ))}
                    </div>
                    {currentDoctors.length > 1 && (
                        <div className="d-flex justify-content-center">
                            <Pagination
                                count={Math.ceil(
                                    doctorsData.length / doctorsPerPage
                                )}
                                page={currentPage}
                                sx={{ li: { margin: '1px 5px' } }}
                                onChange={handlePageChange}
                                color="primary"
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DoctorCard;
