import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NurseDetails = () => {
    const [nurse, setNurse] = React.useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/ReadNurseById/${id}`)
            .then((res) => res.json())
            .then((data) => setNurse(data.data));
    }, [id]);

    console.log(nurse);

    return (
        <div>
            <h2>Nurse Details</h2>
            <div className="image text-center my-4">
                <img
                    style={{ width: '200px', height: '200px' }}
                    className="img-fluid border border-2 border-primary rounded-circle p-1"
                    src={nurse?.image}
                    alt="doctorImg"
                />
            </div>
            <form>
                <div className="row mb-4">
                    <div className="col-md-6 p-2">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            defaultValue={nurse?.name}
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
                            defaultValue={nurse?.email}
                            disabled
                        />
                    </div>
                    <div className="col-md-6 p-2">
                        <label htmlFor="phone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="phone"
                            defaultValue={nurse?.phone}
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
                            defaultValue={nurse?.experience}
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
                            defaultValue={nurse?.address}
                            disabled
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NurseDetails;
