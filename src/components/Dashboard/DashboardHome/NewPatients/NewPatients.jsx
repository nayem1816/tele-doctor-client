import React from 'react';
import userImg from '../../../../images/icons/user1.png';

const NewPatients = ({ patients }) => {
    return (
        <div className="border rounded h-100">
            <h4 className="p-3 fw-bold">New Patients</h4>
            <hr className="mt-3 mb-0" />
            {patients.map((patient) => (
                <div key={patient._id} className="">
                    <div
                        style={{ backgroundColor: '#F3F3F3' }}
                        className="d-flex align-items-center p-3 border-bottom"
                    >
                        <img
                            className="rounded-circle border"
                            style={{ width: '60px', height: '60px' }}
                            src={userImg}
                            alt=""
                        />
                        <h6 className="ms-5 fw-bold mb-0">
                            {patient.patientName}
                        </h6>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewPatients;
