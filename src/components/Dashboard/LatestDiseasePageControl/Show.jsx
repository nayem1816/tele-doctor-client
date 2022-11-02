import React from 'react';
import { useEffect } from 'react';
import { MdDelete } from 'react-icons/md';

const Show = () => {
    const [latestDisease, setLatestDisease] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/ReadRecentDiseases')
            .then((res) => res.json())
            .then((data) => {
                setLatestDisease(data);
            });
    }, [latestDisease]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/v1/DeleteRecentDisease`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log('deleted successfully');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="my-4">
            <h4>Show Latest diseases information</h4>
            {latestDisease.data?.map((disease) => (
                <div
                    key={disease?._id}
                    className="mx-1 my-5 p-4 rounded-5 show-latest-disease-style"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>
                            <strong>Title: </strong>
                            {disease?.diseaseName}
                        </h5>
                        <button
                            onClick={() => handleDelete(disease?._id)}
                            className="delete-btn"
                        >
                            <MdDelete />
                        </button>
                    </div>
                    <div className="row my-2">
                        <div className="col-md-6 my-2">
                            <h6>
                                <strong>Specialization: </strong>
                                {disease?.specialization}
                            </h6>
                        </div>
                        <div className="col-md-6 my-2">
                            <h6>
                                <strong>Banner Heading: </strong>
                                {disease?.bannerHeading}
                            </h6>
                        </div>
                        <div className="col-md-6 my-2">
                            <h6>
                                <strong>Banner Text: </strong>
                                {disease?.bannerText}
                            </h6>
                        </div>
                        <div className="col-md-12 my-2">
                            <h6>
                                <strong>Banner Image: </strong>
                            </h6>
                            <img
                                style={{ width: '100%', height: '300px' }}
                                className="img-fluid rounded"
                                src={disease?.bannerImg}
                                alt="img"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Show;
