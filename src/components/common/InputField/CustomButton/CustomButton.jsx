import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({ btnType, btnTxt, ...otherProps }) => {
    return (
        <Button
            style={{ width: '120px' }}
            type={btnType}
            variant="contained"
            className="me-2"
            {...otherProps}
        >
            {btnTxt}
        </Button>
    );
};

export default CustomButton;
