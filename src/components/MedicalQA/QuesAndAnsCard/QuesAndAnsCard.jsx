import React from 'react';

const QuesAndAnsCard = ({ category }) => {
    return (
        <div>
            <div className="shadow p-4 rounded">
                <h5>
                    <span className="fw-bold">Question: </span>
                    <span className="text-muted">{category.qsn}</span>
                </h5>
                <p style={{ textAlign: 'justify' }}>
                    <span className="fw-bold">Answer: </span>
                    <span className="text-muted">{category.ans}</span>
                </p>
            </div>
        </div>
    );
};

export default QuesAndAnsCard;
