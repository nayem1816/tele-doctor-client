import React from 'react';

const Banner = ({ recentBanner }) => {
    return (
        <div>
            <img
                style={{ width: '100%', height: '500px' }}
                src={recentBanner}
                alt=""
            />
        </div>
    );
};

export default Banner;
