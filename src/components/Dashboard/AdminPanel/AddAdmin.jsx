import React from 'react';
import { useForm } from 'react-hook-form';
import CustomButton from '../../common/InputField/CustomButton/CustomButton';
import CustomInput from '../../common/InputField/CustomInput/CustomInput';
import { toast } from 'react-toastify';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const adminData = {
            email: data.email,
        };
        fetch('http://localhost:5000/api/v1/CreateAdminUsingEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(adminData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Admin Added Successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                    });
                    window.location.reload();
                }
            });
    };
    return (
        <div className="my-5">
            <h4>Add Admin</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 p-3">
                        <CustomInput
                            placeHolder={'Write admin email address...'}
                            inputType={'email'}
                            refs={register('email', {
                                required: true,
                            })}
                        />
                    </div>
                    <div className="col-md-12 p-3">
                        <CustomButton btnType={'submit'} btnTxt={'Submit'} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddAdmin;
