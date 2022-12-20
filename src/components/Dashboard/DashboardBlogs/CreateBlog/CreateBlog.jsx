import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomSelect from '../../../common/InputField/CustomSelect/CustomSelect';
import CustomInput from '../../../common/InputField/CustomInput/CustomInput';
import UploadField from '../../../common/InputField/UploadField/UploadField';
import CustomButton from '../../../common/InputField/CustomButton/CustomButton';

const CreateBlog = () => {
    const [blogImage, setBlogImage] = useState(null);
    const [categoryDataList, setCategoryDataList] = React.useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const blogData = {
            category: data.specialization,
            title: data.title,
            description: data.description,
            image: blogImage,
        };

        fetch('https://tele-doctor-server.vercel.app/api/v1/CreateBlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Blog Added Successfully');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    React.useEffect(() => {
        fetch('https://tele-doctor-server.vercel.app/api/v1/ReadCategories')
            .then((res) => res.json())
            .then((data) => setCategoryDataList(data.data));
    }, [categoryDataList]);

    const sortData = categoryDataList.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    return (
        <div className="my-4">
            <h4>Create a new blog</h4>
            <div className="create-blog">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <CustomSelect
                                placeHolder="Category"
                                regName={'specialization'}
                                selectOptions={sortData.map(
                                    (category) => category.name
                                )}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Blog Title'}
                                inputType={'text'}
                                refs={register('title', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <UploadField
                                placeHolder={'Blog Image'}
                                setDoctorImage={setBlogImage}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Blog Description'}
                                inputType={'text'}
                                refs={register('description', {
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

export default CreateBlog;
