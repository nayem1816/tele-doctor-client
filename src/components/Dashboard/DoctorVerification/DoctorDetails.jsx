import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const DoctorDetails = () => {
    const [selectDoctor, setSelectDoctor] = React.useState([]);
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch(`http://localhost:5000/api/v1/ReadDoctorById/${id}`)
            .then((res) => res.json())
            .then((data) => setSelectDoctor(data.data));
    }, [id]);

    const onSubmit = (data) => {
        const verifyData = {
            id: selectDoctor._id,
            verifiedStatus: data.verifiedStatus,
        };
        fetch(`http://localhost:5000/api/v1/updateVerifiedStatus`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(verifyData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast('Doctor Verified Successfully', {
                        type: 'success',
                        position: 'top-right',
                        autoClose: 1000,
                    });
                    navigate('/dashboard/verification');
                }
            });
    };

    return (
        <div className="appointment-details">
            <h2>Doctor Details</h2>
            <div className="image text-center my-4">
                <img
                    className="img-fluid border border-2 border-primary rounded-circle p-1"
                    src={selectDoctor?.profilePic}
                    alt="doctorImg"
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-4">
                    {selectDoctor?.verifiedStatus === 'not-verified' && (
                        <div className="col-md-12 p-2 mb-3">
                            <label className="form-label">Verify Status</label>
                            <select
                                {...register('verifiedStatus')}
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option
                                    defaultValue={selectDoctor?.verifiedStatus}
                                >
                                    {selectDoctor?.verifiedStatus}
                                </option>
                                <option defaultValue="verified">
                                    verified
                                </option>
                            </select>
                        </div>
                    )}
                    {selectDoctor?.verifiedStatus === 'not-verified' && (
                        <div className="col-md-12 p-2 mb-5">
                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Verify"
                            />
                        </div>
                    )}
                    <div className="col-md-6 p-2">
                        <label htmlFor="dName" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="dName"
                            defaultValue={selectDoctor?.name}
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
                            defaultValue={selectDoctor?.email}
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
                            defaultValue={selectDoctor?.mobile}
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
                            defaultValue={selectDoctor?.gender}
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
                            defaultValue={selectDoctor?.DOB}
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
                            defaultValue={selectDoctor?.address}
                            disabled
                        />
                    </div>
                    <div className="col-md-6 p-2">
                        <label htmlFor="education" className="form-label">
                            Education
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="education"
                            defaultValue={selectDoctor?.education}
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
                            defaultValue={selectDoctor?.registrationNumber}
                            disabled
                        />
                    </div>
                    <div className="col-md-6 p-2">
                        <label htmlFor="specialization" className="form-label">
                            Specialization
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="specialization"
                            defaultValue={selectDoctor?.specialization}
                            disabled
                        />
                    </div>
                    <div className="col-md-6 p-2">
                        <label htmlFor="workingAt" className="form-label">
                            Working At
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="workingAt"
                            defaultValue={selectDoctor?.workingAt}
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
                            defaultValue={selectDoctor?.fees}
                            disabled
                        />
                    </div>
                    <div className="col-md-6 p-2">
                        <label htmlFor="experience" className="form-label">
                            Experience
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="experience"
                            defaultValue={selectDoctor?.experience}
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
                            defaultValue={selectDoctor?.consultationTime}
                            disabled
                        />
                    </div>
                    <div className="col-md-6 p-2">
                        <label htmlFor="communication" className="form-label">
                            Communication Type
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="communication"
                            defaultValue={selectDoctor?.communication?.map(
                                (type) => (type === false ? null : type + ' ')
                            )}
                            disabled
                        />
                    </div>
                    <div className="col-md-6 p-2">
                        <label htmlFor="availableDays" className="form-label">
                            Available Days
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="availableDays"
                            defaultValue={selectDoctor?.availableDays?.map(
                                (day) => (day === false ? null : day + ' ')
                            )}
                            disabled
                        />
                    </div>
                    <div className="col-md-12 p-2">
                        <label htmlFor="profileDesc" className="form-label">
                            Description
                        </label>
                        <textarea
                            rows="3"
                            className="form-control"
                            id="profileDesc"
                            defaultValue={selectDoctor?.profileDesc}
                            disabled
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DoctorDetails;
