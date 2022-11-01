import React, { useEffect, useState } from 'react';
import QansPageCard from "./../QansPageCard/QansPageCard";
import { Pagination } from '@mui/material';
import { useParams } from 'react-router-dom';
import qaData from "./../../../services/data/qansData.json"

const QansCard = () => {
    const [qansData, setQansData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { categoryName } = useParams();
    const [qaDataJson, setqaDataJson] = useState([]);

    useEffect(() => {
        setqaDataJson(qaData);
        if (categoryName === 'all') {
            setQansData(qaDataJson);
        } else if (categoryName === undefined) {
            setQansData(qaDataJson);
        } else {
            const filteredDiseases = qaDataJson.filter(
                (diseases) => diseases.specialization === categoryName
            );
            setQansData(filteredDiseases);
        }
    }, [categoryName, qaDataJson]);

    const diseasesPerPage = 4;
    const indexOfLastDiseases = currentPage * diseasesPerPage;
    const indexOfFirstDiseases = indexOfLastDiseases - diseasesPerPage;
    const currentDiseases = qansData.slice(
        indexOfFirstDiseases,
        indexOfLastDiseases
    );

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="container">
            {currentDiseases.length < 1 ? (
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
                        {currentDiseases.map((diseases) => (
                            <div
                                key={diseases.id}
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4"
                            >
                                <QansPageCard diseases={diseases} />
                            </div>
                        ))}
                    </div>
                    {currentDiseases.length > 1 && (
                        <div className="d-flex justify-content-center">
                            <Pagination
                                count={Math.ceil(
                                    qansData.length / diseasesPerPage
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

export default QansCard;