import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from './../../../common/InputField/CustomInput/CustomInput';
import UploadField from './../../../common/InputField/UploadField/UploadField';
import CustomButton from './../../../common/InputField/CustomButton/CustomButton';

const AddNurses = () => {
    const [nurseImage, setNurseImage] = React.useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const nurseData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            image: nurseImage,
            address: data.address,
            experience: data.experience,
        };

        fetch('http://localhost:5000/api/v1/CreateNurse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nurseData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h4>Add Nurse</h4>
            <div className="form my-5">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter Nurse Name'}
                                inputType={'text'}
                                refs={register('name', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Email'}
                                inputType={'email'}
                                refs={register('email', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Phone Number'}
                                inputType={'text'}
                                refs={register('phone', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <UploadField
                                placeHolder={'Nurse Image'}
                                setDoctorImage={setNurseImage}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Address'}
                                inputType={'text'}
                                refs={register('address', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Experience'}
                                inputType={'text'}
                                refs={register('experience', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-12 p-3 button">
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

export default AddNurses;
