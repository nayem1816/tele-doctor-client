import React from 'react';
import CustomInput from './../../common/InputField/CustomInput/CustomInput';
import UploadField from './../../common/InputField/UploadField/UploadField';
import CustomSelect from './../../common/InputField/CustomSelect/CustomSelect';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import CustomButton from './../../common/InputField/CustomButton/CustomButton';

const Create = () => {
    const [bannerImage, setBannerImage] = React.useState(null);
    const [categoryDataList, setCategoryDataList] = React.useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const latestData = {
            diseaseName: data.diseaseName,
            specialization: data.specialization,
            bannerImg: bannerImage,
            bannerHeading: data.bannerHeading,
            bannerText: data.bannerText,
        };

        axios
            .post(
                'https://tele-doctor-server.vercel.app/api/v1/CreateRecentDisease',
                latestData
            )
            .then((res) => {
                console.log(res);
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
            <h4>Edit Latest disease Page</h4>
            <div className="form my-5">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter Latest disease Title'}
                                inputType={'text'}
                                refs={register('diseaseName', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomSelect
                                placeHolder="Specialization"
                                regName={'specialization'}
                                selectOptions={sortData.map(
                                    (category) => category.name
                                )}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <UploadField
                                placeHolder={'Banner Image'}
                                setDoctorImage={setBannerImage}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter Banner Title'}
                                inputType={'text'}
                                refs={register('bannerHeading', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Enter Banner Text'}
                                inputType={'text'}
                                refs={register('bannerText', {
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

export default Create;
