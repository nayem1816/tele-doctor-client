import React from 'react';
import TextField from '@mui/material/TextField';

const CustomInput = ({ placeHolder, inputType, refs, defaultValue, error }) => {
    return (
        <TextField
            className="w-100"
            type={inputType}
            label={placeHolder}
            variant="filled"
            defaultValue={defaultValue}
            error={error ? error : false}
            {...refs}
        />
    );
};

export default CustomInput;
