import React from 'react';
import error404 from '../../images/gif/404.gif';

const NotFound = () => {
    return (
        <div
            style={{ height: '100vh' }}
            className="d-flex align-items-center justify-content-center"
        >
            <img className="img-fluid" src={error404} alt="" />
        </div>
    );
};

export default NotFound;
