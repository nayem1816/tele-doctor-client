import React from 'react';
import './BookingPayment.css';
import CardInfo from './CardInfo/CardInfo';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import MobileBanking from './MobileBanking/MobileBanking';

const stripePromise = loadStripe(
    `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
);

const BookingPayment = () => {
    const [cardActive, setCardActive] = React.useState(true);
    const [mobileBankingActive, setMobileBankingActive] = React.useState(false);

    const handleCardActive = () => {
        setCardActive(true);
        setMobileBankingActive(false);
    };
    const handleMobileBankingActive = () => {
        setCardActive(false);
        setMobileBankingActive(true);
    };

    return (
        <div className="container">
            <h4 className="text-center my-5">Payment information</h4>
            <div className="row my-5">
                <div className="col-md-4">
                    <div
                        onClick={handleCardActive}
                        className={`payment-card border p-5 ${
                            cardActive ? 'active' : ''
                        }`}
                    >
                        <h5 className="text-center p-3">Card</h5>
                    </div>
                    <div
                        onClick={handleMobileBankingActive}
                        className={`payment-card border p-5 ${
                            mobileBankingActive ? 'active' : ''
                        }`}
                    >
                        <h5 className="text-center p-3">Mobile Banking</h5>
                    </div>
                </div>
                <div className="col-md-8">
                    {cardActive && (
                        <div className="card-info ms-1 ms-md-5">
                            <div className="">
                                <Elements stripe={stripePromise}>
                                    <CardInfo />
                                </Elements>
                            </div>
                        </div>
                    )}
                    {mobileBankingActive && (
                        <div className="mobile-banking-info">
                            <MobileBanking />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingPayment;
