import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Nurses from '../../components/RecentDisease/Nurses/Nurses';
import Banner from './../../components/RecentDisease/Banner/Banner';
import SpecialistDoctor from './../../components/RecentDisease/SpecialistDoctor/SpecialistDoctor';

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
            <Banner recentBanner={recentDisease?.bannerImg} />
            <SpecialistDoctor
                diseaseName={recentDisease?.diseaseName}
                specialization={recentDisease?.specialization}
            />
            <Nurses />
        </>
    );
};

export default RecentDisease;