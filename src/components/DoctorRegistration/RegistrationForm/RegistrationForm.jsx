import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../common/InputField/CustomInput/CustomInput';
import CustomRadioBtn from '../../common/InputField/CustomRadioBtn/CustomRadioBtn';
import UploadField from '../../common/InputField/UploadField/UploadField';
import CustomDatePicker from '../../common/InputField/CustomDatePicker/CustomDatePicker';
import CustomSelect from '../../common/InputField/CustomSelect/CustomSelect';
import CustomButton from '../../common/InputField/CustomButton/CustomButton';
import { toast } from 'react-toastify';
import CustomCheckbox from './../../common/InputField/CustomCheckbox/CustomCheckbox';
import {
    FormLabel,
    FormControl,
    InputLabel,
    OutlinedInput,
    MenuItem,
    Checkbox,
    ListItemText,
} from '@mui/material';
import Select from '@mui/material/Select';
import CustomTextArea from './../../common/InputField/CustomTextArea/CustomTextArea';
import CustomDateAndTime from './../../common/CustomDateAndTime/CustomDateAndTime';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import districtData from '../../../services/data/districtData';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
];

const RegistrationForm = () => {
    const [categoryDataList, setCategoryDataList] = React.useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [doctorImage, setDoctorImage] = useState(null);
    const dateAndTime = CustomDateAndTime();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const onSubmit = (data) => {
        const doctorFullData = {
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            profilePic: doctorImage,
            DOB: data.DOB,
            gender: data.gender,
            district: data.district.toLowerCase(),
            address: data.address,
            specialization: data.specialization,
            profileDesc: data.description,
            education: data.education,
            experience: data.experience,
            registrationNumber: data.registrationNumber,
            fees: data.fees,
            workingAt: data.workingAt,
            availableDays: personName,
            consultationTime: data.consultationTime,
            communication: [data.audio, data.video, data.message],
            createdAt: dateAndTime,
            userInfo: {
                name: user.displayName,
                email: user.email,
            },
        };

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(doctorFullData),
            redirect: 'follow',
        };

        fetch(
            'https://tele-doctor-server.vercel.app/api/v1/CreateDoctor',
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                if (result) {
                    toast.success('Doctor Registration Successful', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                    navigate('/');
                } else {
                    toast.error('Doctor Registration Failed', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                }
            })
            .catch((error) => {
                console.log('error', error);
                toast.error('Doctor Registration Failed', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
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
        <div className="container my-4">
            <div className="">
                <h4>Enter your information</h4>
            </div>
            <div className="">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <CustomInput
                                error={errors.name && 'true'}
                                placeHolder={'Enter your name *'}
                                inputType={'text'}
                                refs={register('name', { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                error={errors.email && 'true'}
                                placeHolder={'Enter your email *'}
                                inputType={'email'}
                                refs={register('email', {
                                    required: true,
                                })}
                            />
                            {errors.email ? (
                                <span className="text-danger">
                                    Please enter valid email address
                                </span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                error={errors.mobile && 'true'}
                                placeHolder={'Enter your mobile *'}
                                inputType={'text'}
                                refs={register('mobile', {
                                    required: true,
                                    minLength: 11,
                                    maxLength: 11,
                                })}
                            />
                            {errors.mobile ? (
                                <span className="text-danger">
                                    Please enter valid Phone number(11 digits)
                                </span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="col-md-6 p-3">
                            <UploadField
                                placeHolder={'Doctor Image'}
                                setDoctorImage={setDoctorImage}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomDatePicker
                                placeHolder={'Date Of birth *'}
                                refs={register('DOB', { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomRadioBtn
                                titleName={'Gender *'}
                                regName={'gender'}
                                defaultValue={false}
                                selectOptions={['Male', 'Female', 'Other']}
                                rules={{ required: true }}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomSelect
                                placeHolder="Enter district name *"
                                regName={'district'}
                                selectOptions={districtData.map(
                                    (district) => district.name
                                )}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                error={errors.address && 'true'}
                                placeHolder={'Enter your address *'}
                                inputType={'text'}
                                refs={register('address', { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomSelect
                                placeHolder="Department *"
                                regName={'specialization'}
                                selectOptions={sortData.map(
                                    (category) => category.name
                                )}
                                register={register}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                error={errors.education && 'true'}
                                placeHolder={'Enter your degree *'}
                                inputType={'text'}
                                refs={register('education', { required: true })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                error={errors.registrationNumber && 'true'}
                                placeHolder={'Enter your registration number *'}
                                inputType={'text'}
                                refs={register('registrationNumber', {
                                    required: true,
                                })}
                            />
                            {errors.registrationNumber ? (
                                <span className="text-danger">
                                    Please enter DOCTOR REGISTRATION ID
                                </span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                error={errors.experience && 'true'}
                                placeHolder={
                                    'Enter your experience (1 Years) *'
                                }
                                inputType={'text'}
                                refs={register('experience', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                error={errors.fees && 'true'}
                                placeHolder={
                                    'Enter your visiting fee in taka(1000) *'
                                }
                                inputType={'number'}
                                refs={register('fees', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Working at'}
                                inputType={'text'}
                                refs={register('workingAt')}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <CustomInput
                                placeHolder={'Consultation time'}
                                inputType={'text'}
                                refs={register('consultationTime')}
                            />
                        </div>
                        <div className="col-md-6 p-3">
                            <FormLabel className="" component="legend">
                                Select communication type
                            </FormLabel>
                            <CustomCheckbox
                                regName={'audio'}
                                selectOption={'Audio'}
                                rules={{ required: true }}
                                register={register}
                            />
                            <CustomCheckbox
                                regName={'video'}
                                selectOption={'Video'}
                                rules={{ required: true }}
                                register={register}
                            />
                            <CustomCheckbox
                                regName={'message'}
                                selectOption={'Message'}
                                rules={{ required: true }}
                                register={register}
                            />
                        </div>
                        <div className="col-md-12 p-3">
                            <FormControl
                                style={{
                                    backgroundColor: '#E8E8E8',
                                    border: '0px',
                                }}
                                className="w-100"
                                variant="filled"
                            >
                                <InputLabel id="demo-multiple-checkbox-label">
                                    Availability Day
                                </InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) =>
                                        selected.join(', ')
                                    }
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox
                                                checked={
                                                    personName.indexOf(name) >
                                                    -1
                                                }
                                            />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-12 p-3">
                            <CustomTextArea
                                placeHolder={'Enter your Description'}
                                refs={register('description')}
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

export default RegistrationForm;
