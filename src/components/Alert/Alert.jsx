import React from 'react';

const Alert = () => {
    return (
        <div
            className="alert alert-success d-flex align-items-center"
            role="alert"
        >
            <svg
                className="bi flex-shrink-0 me-2"
                role="img"
                aria-label="Success:"
            >
                <use xlink:href="#check-circle-fill" />
            </svg>
            <div>An example success alert with an icon</div>
        </div>
    );
};

export default Alert;
