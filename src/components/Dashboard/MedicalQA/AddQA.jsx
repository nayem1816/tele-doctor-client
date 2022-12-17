import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../common/InputField/CustomInput/CustomInput';
import CustomTextArea from '../../common/InputField/CustomTextArea/CustomTextArea';
import CustomButton from '../../common/InputField/CustomButton/CustomButton';
import { toast } from 'react-toastify';

const AddQA = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const qaData = {
            question: data.question,
            answer: data.answer,
        };

        fetch('http://localhost:5000/api/v1/CreateQuesAndAns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(qaData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Question and answer Added Successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="my-5">
            <h4>Add Question and answer</h4>
            <div className="form my-3">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-12 p-3">
                            <CustomInput
                                placeHolder={'Write the Question'}
                                inputType={'text'}
                                refs={register('question', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-12 p-3">
                            <CustomTextArea
                                placeHolder={'Write the answer'}
                                refs={register('answer', {
                                    required: true,
                                })}
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

export default AddQA;
