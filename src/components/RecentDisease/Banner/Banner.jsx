import React from 'react';

const Banner = ({ recentDisease }) => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${recentDisease.bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '500px',
    };

    return (
        <div style={backgroundStyle}>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-6 d-flex align-items-center">
                        <h1
                            style={{
                                fontSize: '72px',

                                fontWeight: '700',
                            }}
                            className="text-white"
                        >
                            {recentDisease?.bannerHeading}
                        </h1>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <p
                            style={{ fontSize: '24px', lineHeight: '2' }}
                            className="text-white"
                        >
                            {recentDisease?.bannerText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
