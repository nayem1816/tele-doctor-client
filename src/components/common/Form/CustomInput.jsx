import React, { useState } from 'react';
import './CustomInput.css';

const CustomInput = (props) => {
    const {
        label,
        register,
        required,
        placeHolder,
        type,
        Icon,
        ShowPass,
        HidePass,
    } = props;
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePass = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className="input-group flex-nowrap mb-3">
            <span
                className="input-group-text border-top-0 border-end-0 border-start-0 rounded-0 bg-white"
                id="addon-wrapping"
            >
                <Icon />
            </span>
            <div className="form-floating w-100">
                <input
                    className="custom-input form-control border-top-0 border-end-0 border-start-0 rounded-0"
                    id={label}
                    placeholder={placeHolder}
                    type={
                        type === 'password'
                            ? passwordShown
                                ? 'text'
                                : 'password'
                            : type
                    }
                    {...register(label, { required })}
                />
                <label htmlFor={label}>{placeHolder}</label>
            </div>
            {type === 'password' && (
                <span className="input-group-text border-top-0 border-end-0 border-start-0 rounded-0 bg-white">
                    <div className="">
                        {passwordShown ? (
                            <div
                                onClick={togglePass}
                                className="rounded-pill btn btn-light d-flex justify-content-center align-items-center"
                            >
                                <HidePass />
                            </div>
                        ) : (
                            <div
                                onClick={togglePass}
                                className="rounded-pill btn btn-light d-flex justify-content-center align-items-center"
                            >
                                <ShowPass />
                            </div>
                        )}
                    </div>
                </span>
            )}
        </div>
    );
};

export default CustomInput;
