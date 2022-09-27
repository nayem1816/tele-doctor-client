import React from "react";
import { TextField } from "@material-ui/core";

const CustomTextArea = ({ placeHolder, ...otherProps }) => {
    return (
        <TextField
            className="w-100"
            id="filled-multiline-static"
            label={placeHolder}
            multiline
            rows={4}
            variant="filled"
            {...otherProps}
        />
    );
};

export default CustomTextArea;
