import React from 'react';
import loadingImg from '../../images/gif/loading-img.gif';

const Loading = () => {
    return (
        <div
            style={{ height: '100vh' }}
            className="d-flex align-items-center justify-content-center"
        >
            <img className="img-fluid" src={loadingImg} alt="" />
        </div>
    );
};

export default Loading;
