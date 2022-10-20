import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import quesAnsData from '../../../services/data/qansData.json';
import { Pagination } from '@mui/material';
import QuesAndAnsCard from './../QuesAndAnsCard/QuesAndAnsCard';

const QuestionAndAns = () => {
    const [qaAnData, setQaAnData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { categoryName } = useParams();
    const [quesAndAnsJson, setQuesAndAnsJson] = useState([]);

    useEffect(() => {
        setQuesAndAnsJson(quesAnsData);
        if (categoryName === 'all') {
            setQaAnData(quesAndAnsJson);
        } else if (categoryName === undefined) {
            setQaAnData(quesAndAnsJson);
        } else {
            const filteredCategory = quesAndAnsJson.filter(
                (category) => category.DiseasesCategory === categoryName
            );
            setQaAnData(filteredCategory);
        }
    }, [categoryName, quesAndAnsJson]);

    const quesAndAnsPerPage = 5;
    const indexOfLastQuesAndAns = currentPage * quesAndAnsPerPage;
    const indexOfFirstQuesAndAns = indexOfLastQuesAndAns - quesAndAnsPerPage;
    const currentQuesAndAns = qaAnData.slice(
        indexOfFirstQuesAndAns,
        indexOfLastQuesAndAns
    );

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="container">
            {categoryName === undefined ? (
                <h2
                    style={{ backgroundColor: '#D9F0F1' }}
                    className="p-3 mb-4 rounded base-color2"
                >
                    All
                </h2>
            ) : (
                <h2
                    style={{ backgroundColor: '#D9F0F1' }}
                    className="p-3 mb-4 rounded base-color2"
                >
                    {categoryName.toUpperCase()}
                </h2>
            )}

            {currentQuesAndAns.length < 1 ? (
                <div
                    style={{ height: '200px' }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <h5 className="text-center text-danger">
                        This category has no question and answer
                    </h5>
                </div>
            ) : (
                <div className="">
                    <div className="row mb-2">
                        {currentQuesAndAns.map((category) => (
                            <div key={category.id} className="col-12 mb-4">
                                <QuesAndAnsCard category={category} />
                            </div>
                        ))}
                    </div>
                    {currentQuesAndAns.length > 1 && (
                        <div className="d-flex justify-content-center">
                            <Pagination
                                count={Math.ceil(
                                    qaAnData.length / quesAndAnsPerPage
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

export default QuestionAndAns;
