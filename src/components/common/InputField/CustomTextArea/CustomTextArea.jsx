import React from 'react';
import { TextField } from '@mui/material';

const CustomTextArea = ({ placeHolder, refs, ...otherProps }) => {
    return (
        <TextField
            className="w-100"
            id="filled-multiline-static"
            label={placeHolder}
            multiline
            rows={4}
            variant="filled"
            {...refs}
            {...otherProps}
        />
    );
};

export default CustomTextArea;
