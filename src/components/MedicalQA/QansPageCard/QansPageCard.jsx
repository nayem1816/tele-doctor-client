import React from 'react';
import './QansPageCard.css';

const QansPageCard = ({ diseases }) => {
    return (
        <div>
            <div className="shadow p-3 mb-3">
                <div className="card-body">
                    <h5 className="card-title text-clr">{diseases?.qsn}</h5>
                    <p className="card-text p-3">{diseases?.ans}</p>
                </div>
            </div>
        </div>
    );
};

export default QansPageCard;
