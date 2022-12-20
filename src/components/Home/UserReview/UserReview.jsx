import React, { useEffect, useState } from 'react';
import Title from '../../common/Title/Title';
import { Rating } from 'react-simple-star-rating';
import './UserReview.css';
import CustomButton from '../../common/InputField/CustomButton/CustomButton';
import { Link } from 'react-router-dom';

const UserReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(
            'https://tele-doctor-server.vercel.app/api/v1/ReadApplicationReviews'
        )
            .then((res) => res.json())
            .then((data) => setReviews(data.data.reverse()));
    }, []);
    return (
        <div className="my-5">
            <div className="container">
                <Title titleName="User Reviews" />
                <div className="row mt-5">
                    {reviews?.slice(0, 4)?.map((review) => (
                        <div key={review?._id} className="col-md-6 mb-3">
                            <div className="row">
                                <div className="col-sm-2 col-md-4 col-lg-2 col-3">
                                    <div className="review-img">
                                        <img
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                            }}
                                            className="img-fluid rounded-circle"
                                            src={review?.userImg}
                                            alt="user-review"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-10 col-md-8 col-lg-10 col-9">
                                    <div className="review-img">
                                        <h4 className="fw-bold mb-0">
                                            {review?.name}
                                        </h4>
                                        <Rating
                                            allowHover={false}
                                            initialValue={0}
                                            size={20}
                                            readonly={true}
                                            ratingValue={review?.rating * 20}
                                        />
                                        <p className="mt-2">{review?.review}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="mx-3" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex text-center">
                <Link style={{ textDecoration: 'none' }} to="/reviews">
                    <CustomButton btnType={'button'} btnTxt={'View All'} />
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/review/website-review"
                >
                    <CustomButton btnType={'button'} btnTxt={'Review'} />
                </Link>
            </div>
        </div>
    );
};

export default UserReview;
