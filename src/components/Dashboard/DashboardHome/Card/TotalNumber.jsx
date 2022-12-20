import React from 'react';

const TotalNumber = ({ title, Icon, number, color }) => {
    return (
        <div style={{ backgroundColor: color }} className="py-4 px-3 rounded">
            <div className="d-flex text-white">
                <Icon style={{ fontSize: '50px' }} />
                <div className="ms-4">
                    <p>{title}</p>
                    <h5>{number}</h5>
                </div>
            </div>
        </div>
    );
};

export default TotalNumber;
