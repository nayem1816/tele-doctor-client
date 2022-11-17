import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingHeader from '../../components/DoctorBooking/BookingHeader/BookingHeader';
import PatientInfo from '../../components/DoctorBooking/PatientInfo/PatientInfo';
import { DoctorBookingContext } from './DoctorBookingContext';
import BookingPayment from '../../components/DoctorBooking/BookingPayment/BookingPayment';

const DoctorBooking = () => {
    const [bookingInfo, setBookingInfo] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/ReadDoctorById/${id}`)
            .then((res) => res.json())
            .then((data) => setDoctor(data.data))
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <DoctorBookingContext.Provider
            value={{
                bookingInfo,
                doctor,
                setBookingInfo,
            }}
        >
            <BookingHeader />
            {bookingInfo.length === 1 ? <PatientInfo /> : <BookingPayment />}
        </DoctorBookingContext.Provider>
    );
};

export default DoctorBooking;
