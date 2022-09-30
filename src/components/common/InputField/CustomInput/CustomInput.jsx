import React from 'react';
import TextField from '@mui/material/TextField';

const CustomInput = ({ placeHolder, inputType, refs }) => {
    return (
        <TextField
            className="w-100"
            type={inputType}
            label={placeHolder}
            variant="filled"
            {...refs}
        />
    );
};

export default CustomInput;
