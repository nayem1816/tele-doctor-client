import React from 'react';
import TextField from '@mui/material/TextField';

const CustomInput = ({ placeHolder, inputType, refs, defaultValue }) => {
    return (
        <TextField
            className="w-100"
            type={inputType}
            label={placeHolder}
            variant="filled"
            defaultValue={defaultValue}
            {...refs}
        />
    );
};

export default CustomInput;
