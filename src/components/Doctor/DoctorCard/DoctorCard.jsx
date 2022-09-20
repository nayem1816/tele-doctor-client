import React, { useEffect, useState } from 'react';
import DoctorPageCard from './../DoctorPageCard/DoctorPageCard';
import { Pagination } from '@mui/material';
import { useParams } from 'react-router-dom';
import doctors from './../../../services/data/doctors';

const DoctorCard = () => {
    const [doctorsData, setDoctorsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { categoryName } = useParams();

    useEffect(() => {
        if (categoryName === 'all') {
            setDoctorsData(doctors);
        } else if (categoryName === undefined) {
            setDoctorsData(doctors);
        } else {
            const filteredDoctors = doctors.filter(
                (doctor) => doctor.category === categoryName
            );
            setDoctorsData(filteredDoctors);
        }
    }, [categoryName]);

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

    console.log(currentDoctors.length);

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
                                key={doctor.id}
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
