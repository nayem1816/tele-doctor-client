import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import CustomInput from '../../components/common/InputField/CustomInput/CustomInput';
import UploadField from '../../components/common/InputField/UploadField/UploadField';
import CustomTextArea from '../../components/common/InputField/CustomTextArea/CustomTextArea';
import CustomButton from '../../components/common/InputField/CustomButton/CustomButton';
import CustomDateAndTime from '../../components/common/CustomDateAndTime/CustomDateAndTime';
import { toast } from 'react-toastify';

const DoctorReview = () => {
    const { register, handleSubmit } = useForm();
    const [doctor, setDoctor] = useState([]);
    const [rating, setRating] = useState(0);
    const [userImg, setUserImg] = useState(
        'https://i.ibb.co/25kDrnr/user-1.png'
    );
    const { email } = useParams();
    const date = CustomDateAndTime();
    const navigate = useNavigate()

    const handleRating = (rate) => {
        setRating(rate);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/ReadDoctorByEmail/${email}`)
            .then((res) => res.json())
            .then((data) => setDoctor(data.data[0]));
    }, [email]);

    const onSubmit = (data) => {
        const reviewData = {
            name: data.name,
            email: data.email,
            review: data.review,
            rating: rating / 20,
            userImg: userImg,
            doctorEmail: doctor.userInfo.email,
            createAt: date.split(' ')[0],
        };

        fetch('http://localhost:5000/api/v1/AddReviewUsingEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Review added successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                    });
                }
                navigate(`/`)
            });
    };

    return (
        <div>
            <div
                style={{ backgroundColor: '#5921cf' }}
                className="py-5 text-center"
            >
                <h2 className="text-white">Doctor review</h2>
            </div>
            <div className="container my-5">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6">
                            <CustomInput
                                placeHolder={'Enter your name'}
                                inputType={'text'}
                                refs={register('name', { required: true })}
                            />
                        </div>
                        <div className="col-md-6">
                            <CustomInput
                                placeHolder={'Enter your email'}
                                inputType={'email'}
                                refs={register('email', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-12 my-4">
                            <UploadField
                                placeHolder={'Upload your Image'}
                                setDoctorImage={setUserImg}
                            />
                        </div>
                        <div className="col-md-12 my-4 text-center">
                            <Rating
                                allowHover={true}
                                size={50}
                                readonly={false}
                                ratingValue={0 * 20}
                                onClick={handleRating}
                                initialValue={rating}
                            />
                            <p className="my-2">Rated hare</p>
                        </div>
                        <div className="col-md-12 p-3">
                            <CustomTextArea
                                placeHolder={'Enter your review'}
                                refs={register('review', { required: true })}
                            />
                        </div>
                        <div className="col-md-12 p-3">
                            <CustomButton
                                btnType={'submit'}
                                btnTxt={'Submit'}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DoctorReview;
