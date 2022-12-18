import React, { useMemo, useState, useEffect, useContext } from 'react';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
} from '@stripe/react-stripe-js';
import './CardInfo.css';
import { DoctorBookingContext } from '../../../../pages/DoctorBooking/DoctorBookingContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function useResponsiveFontSize() {
    const getFontSize = () => (window.innerWidth < 450 ? '16px' : '18px');
    const [fontSize, setFontSize] = useState(getFontSize);

    useEffect(() => {
        const onResize = () => {
            setFontSize(getFontSize());
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    });

    return fontSize;
}

const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: '#424770',
                    letterSpacing: '0.025em',
                    fontFamily: 'Source Code Pro, monospace',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
            },
        }),
        [fontSize]
    );

    return options;
};

const CardInfo = () => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const { bookingInfo, doctor } = useContext(DoctorBookingContext);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.log('Stripe.js has not loaded yet.');
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement),
        });
        if (payload.error) {
            console.log(payload.error.message);
        } else {
            console.log('Payment Successfully');
        }

        if (payload.paymentMethod.id) {
            const bookingInformation = {
                paymentInfo: {
                    paymentType: 'Card',
                    paymentBrand: payload.paymentMethod.card.brand,
                    cardNumber: payload.paymentMethod.card.last4,
                },
                userName: user.displayName,
                userEmail: user.email,
                doctorId: doctor._id,
                doctorName: doctor.name,
                doctorEmail: doctor.email,
                doctorPhone: doctor.mobile,
                doctorFee: doctor.fees,
                doctorProfilePic: doctor.profilePic,
                appointmentDate: bookingInfo.appointmentDate,
                patientName: bookingInfo.patientName,
                patientEmail: bookingInfo.patientEmail,
                patientPhone: bookingInfo.patientPhone,
                patientAge: bookingInfo.patientAge,
                patientGender: bookingInfo.patientGender,
                patientDateOfBirth: bookingInfo.dateOfBirth,
            };

            fetch('http://localhost:5000/api/v1/CreateAppointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingInformation),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        toast.success('Appointment Created Successfully', {
                            position: 'top-right',
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                        });
                        navigate('/my-profile/appointments');
                    }
                });
        }
    };
    return (
        <form className="payment" onSubmit={handleSubmit}>
            <div className="m-2">
                <label>Card number</label>
                <CardNumberElement
                    options={options}
                    onReady={() => {
                        console.log('CardNumberElement [ready]');
                    }}
                    onChange={(event) => {
                        console.log('CardNumberElement [change]', event);
                    }}
                    onBlur={() => {
                        console.log('CardNumberElement [blur]');
                    }}
                    onFocus={() => {
                        console.log('CardNumberElement [focus]');
                    }}
                />
            </div>
            <div className="m-2">
                <label>Expiration date</label>
                <CardExpiryElement
                    className="w-25"
                    options={options}
                    onReady={() => {
                        console.log('CardNumberElement [ready]');
                    }}
                    onChange={(event) => {
                        console.log('CardNumberElement [change]', event);
                    }}
                    onBlur={() => {
                        console.log('CardNumberElement [blur]');
                    }}
                    onFocus={() => {
                        console.log('CardNumberElement [focus]');
                    }}
                />
            </div>
            <div className="m-2">
                <label>CVC</label>
                <CardCvcElement
                    className="w-25"
                    options={options}
                    onReady={() => {
                        console.log('CardNumberElement [ready]');
                    }}
                    onChange={(event) => {
                        console.log('CardNumberElement [change]', event);
                    }}
                    onBlur={() => {
                        console.log('CardNumberElement [blur]');
                    }}
                    onFocus={() => {
                        console.log('CardNumberElement [focus]');
                    }}
                />
            </div>
            <div className="m-2">
                <button type="submit" disabled={!stripe}>
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default CardInfo;
