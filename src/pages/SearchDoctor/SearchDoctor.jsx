import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DoctorPageCard from '../../components/Doctor/DoctorPageCard/DoctorPageCard';

const SearchDoctor = () => {
    const { value } = useParams();
    const [doctors, setDoctor] = React.useState([]);
    const lastPath = value.split('/').pop();

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/ReadDoctors')
            .then((res) => res.json())
            .then((data) => setDoctor(data.data));
    }, []);

    const filteredDoctors = doctors.filter((doctor) => {
        return (
            doctor.name.toLowerCase().includes(lastPath.toLowerCase()) ||
            doctor.specialization.toLowerCase().includes(lastPath.toLowerCase())
        );
    });

    return (
        <div className="container">
            <nav aria-label="breadcrumb" className="my-3">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Home</li>
                    <li className="breadcrumb-item active">Doctor</li>
                    <li className="breadcrumb-item active">
                        Search value: {lastPath}
                    </li>
                </ol>
            </nav>
            <div className="doctors-list">
                {filteredDoctors.length === 0 ? (
                    <div className="d-flex justify-content-center align-items-center my-5">
                        <div
                            className="alert alert-danger w-75 text-center"
                            role="alert"
                        >
                            No doctor found in this location
                        </div>
                    </div>
                ) : (
                    <div className="row my-5">
                        {filteredDoctors.map((doctor) => (
                            <div key={doctor._id} className="col-md-4 p-2">
                                <DoctorPageCard doctor={doctor} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchDoctor;
