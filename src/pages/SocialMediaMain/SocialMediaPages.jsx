import React, { useState, useEffect } from 'react';
import HomePagesList from '../../components/SocialMediaMain/SocialMediaHome/HomePagesList';
import ReadPages from '../../components/SocialMediaMain/SocialMediaPages/ReadPages';

const SocialMediaPages = () => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        fetch('https://tele-doctor-server.vercel.app/api/v1/ReadPages')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPages(data.data);
            });
    }, [pages, setPages]);

    return (
        <div className="row">
            <div className="col-lg-3">
                <HomePagesList pages={pages.slice(0, 8)} />
            </div>
            <div className="col-lg-9">
                <div className="row">
                    {pages.map((page) => (
                        <div key={page._id} className="col-md-4">
                            <ReadPages page={page} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMediaPages;
