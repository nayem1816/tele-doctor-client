import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../common/InputField/CustomInput/CustomInput';
import CustomButton from '../../../common/InputField/CustomButton/CustomButton';

const CreateCategory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/api/v1/CreateCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    };
    return (
        <div className="my-4">
            <h4>Create a new Category</h4>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 p-3">
                        <CustomInput
                            placeHolder={'Make a new Category'}
                            inputType={'text'}
                            refs={register('category', {
                                required: true,
                            })}
                        />
                    </div>
                    <div className="col-md-12 p-3 button">
                        <CustomButton btnType={'submit'} btnTxt={'Submit'} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateCategory;
