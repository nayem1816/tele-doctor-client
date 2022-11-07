import React from 'react';
import Title from '../../common/Title/Title';
import reviewsData from '../../../services/data/reviews';
import { Rating } from 'react-simple-star-rating';
import './UserReview.css';

const UserReview = () => {
    // const { data, loading, error } = useFetch(reviewsData);
    // console.log(data);
    // console.log(loading);
    // console.log(error);

    return (
        <div className="my-5">
            <div className="container">
                <Title titleName="User Reviews" />
                <div className="row mt-5">
                    {reviewsData.map((review) => (
                        <div key={review.id} className="col-md-6 mb-3">
                            <div className="row">
                                <div className="col-sm-2 col-md-4 col-lg-2 col-3">
                                    <div className="review-img">
                                        <img
                                            className="img-fluid"
                                            src={review.image}
                                            alt="user-review"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-10 col-md-8 col-lg-10 col-9">
                                    <div className="review-img">
                                        <h4 className="fw-bold mb-0">
                                            {review.name}
                                        </h4>
                                        <Rating
                                            allowHover={false}
                                            initialValue={0}
                                            size={20}
                                            readonly={true}
                                            ratingValue={review.rating * 20}
                                        />
                                        <p className="mt-2">{review.comment}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="mx-3" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserReview;
