import React, { useState } from 'react';

const CustomInput = (props) => {
    const {
        label,
        register,
        required,
        placeholder,
        type,
        Icon,
        ShowPass,
        HidePass,
    } = props;
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className="input-group mb-3">
            <span
                className="input-group-text border-top-0 border-end-0 border-start-0 rounded-0 bg-white"
                id="basic-addon1"
            >
                <Icon />
            </span>
            <input
                className="custom-input form-control border-top-0 border-end-0 border-start-0 rounded-0"
                type={
                    type === 'password'
                        ? passwordShown
                            ? 'text'
                            : 'password'
                        : type
                }
                placeholder={placeholder}
                {...register(label, { required })}
            />
            {type === 'password' && (
                <span className="input-group-text border-top-0 border-end-0 border-start-0 rounded-0 bg-white">
                    <div className="">
                        {passwordShown ? (
                            <button
                                onClick={togglePassword}
                                className="rounded-pill btn btn-light d-flex justify-content-center align-items-center"
                            >
                                <HidePass />
                            </button>
                        ) : (
                            <button
                                onClick={togglePassword}
                                className="rounded-pill btn btn-light d-flex justify-content-center align-items-center"
                            >
                                <ShowPass />
                            </button>
                        )}
                    </div>
                </span>
            )}
        </div>
    );
};

export default CustomInput;
