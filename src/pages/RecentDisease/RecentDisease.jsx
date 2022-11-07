import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Nurses from '../../components/RecentDisease/Nurses/Nurses';
import Banner from './../../components/RecentDisease/Banner/Banner';
import SpecialistDoctor from './../../components/RecentDisease/SpecialistDoctor/SpecialistDoctor';
import Blog from '../../components/RecentDisease/Blogs/Blog';

const RecentDisease = () => {
    const [recentDisease, setRecentDisease] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/ReadRecentDiseases')
            .then((res) => res.json())
            .then((data) => setRecentDisease(data.data[0]));
    }, []);

    // console.log(recentDisease);
    return (
        <>
            <Banner recentDisease={recentDisease} />
            <SpecialistDoctor
                diseaseName={recentDisease?.diseaseName}
                specialization={recentDisease?.specialization}
            />
            <Nurses />
            <Blog title={recentDisease?.diseaseName} />
        </>
    );
};

export default RecentDisease;
