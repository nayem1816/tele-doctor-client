import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const RegistrationFormShow = () => {
    const [user] = useAuthState(auth);
    const [doctor, setDoctor] = React.useState({});

    React.useEffect(() => {
        fetch(`http://localhost:5000/api/v1/ReadDoctorByEmail/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.data.length > 0) {
                    setDoctor(data.data[0]);
                }
            });
    }, [user?.email]);

    return (
        <div>
            <h4>My Registration Form</h4>
            <hr className="my-3" />
            <div className="my-4">
                <h6 className="my-3">
                    <strong>Registration Date: </strong> {doctor?.createdAt}
                </h6>
                <h6 className="my-3">
                    <strong>Registration Status: </strong>{' '}
                    <span
                        className={
                            doctor?.verifiedStatus === 'verified'
                                ? `text-success`
                                : 'text-danger'
                        }
                    >
                        {doctor?.verifiedStatus}
                    </span>
                </h6>
            </div>
            <hr className="my-3" />
            <div className="my-4">
                <div className="appointment-details">
                    <h4>My Form</h4>
                    <div className="image text-center my-4">
                        <img
                            style={{ width: '200px', height: '200px' }}
                            className="img-fluid border border-2 border-primary rounded-circle p-1"
                            src={doctor?.profilePic}
                            alt="doctorImg"
                        />
                    </div>
                    <form>
                        <div className="row mb-4">
                            <div className="col-md-6 p-2">
                                <label htmlFor="dName" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dName"
                                    defaultValue={doctor?.name}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    defaultValue={doctor?.email}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label htmlFor="number" className="form-label">
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="number"
                                    defaultValue={doctor?.mobile}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label htmlFor="gender" className="form-label">
                                    Gender
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="gender"
                                    defaultValue={doctor?.gender}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label htmlFor="DOB" className="form-label">
                                    Date of Birth
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="DOB"
                                    defaultValue={doctor?.DOB}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label htmlFor="address" className="form-label">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    defaultValue={doctor?.address}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label
                                    htmlFor="education"
                                    className="form-label"
                                >
                                    Education
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="education"
                                    defaultValue={doctor?.education}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label
                                    htmlFor="registrationNumber"
                                    className="form-label"
                                >
                                    Registration Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="registrationNumber"
                                    defaultValue={doctor?.registrationNumber}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label
                                    htmlFor="specialization"
                                    className="form-label"
                                >
                                    Specialization
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="specialization"
                                    defaultValue={doctor?.specialization}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label
                                    htmlFor="workingAt"
                                    className="form-label"
                                >
                                    Working At
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="workingAt"
                                    defaultValue={doctor?.workingAt}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label htmlFor="fees" className="form-label">
                                    Total fees
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fees"
                                    defaultValue={doctor?.fees}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label
                                    htmlFor="experience"
                                    className="form-label"
                                >
                                    Experience
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="experience"
                                    defaultValue={doctor?.experience}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label
                                    htmlFor="consultationTime"
                                    className="form-label"
                                >
                                    Consultation Time
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="consultationTime"
                                    defaultValue={doctor?.consultationTime}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label
                                    htmlFor="communication"
                                    className="form-label"
                                >
                                    Communication Type
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="communication"
                                    defaultValue={doctor?.communication?.map(
                                        (type) =>
                                            type === false ? null : type + ' '
                                    )}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 p-2">
                                <label
                                    htmlFor="availableDays"
                                    className="form-label"
                                >
                                    Available Days
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="availableDays"
                                    defaultValue={doctor?.availableDays?.map(
                                        (day) =>
                                            day === false ? null : day + ' '
                                    )}
                                    disabled
                                />
                            </div>
                            <div className="col-md-12 p-2">
                                <label
                                    htmlFor="profileDesc"
                                    className="form-label"
                                >
                                    Description
                                </label>
                                <textarea
                                    rows="3"
                                    className="form-control"
                                    id="profileDesc"
                                    defaultValue={doctor?.profileDesc}
                                    disabled
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationFormShow;
