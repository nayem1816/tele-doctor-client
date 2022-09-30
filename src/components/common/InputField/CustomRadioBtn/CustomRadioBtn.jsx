import React from 'react';
import { Radio, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';

const CustomRadioBtn = (props) => {
    const { titleName, selectOptions, register, regName } = props;
    return (
        <div className="ms-2">
            <FormLabel className="" component="legend">
                {titleName}
            </FormLabel>
            <RadioGroup row aria-label="position" name="position">
                {selectOptions.map((option, i) => (
                    <FormControlLabel
                        {...register(regName, { required: true })}
                        key={i}
                        value={option}
                        control={<Radio color="primary" />}
                        label={option}
                        labelPlacement="end"
                    />
                ))}
            </RadioGroup>
        </div>
    );
};

export default CustomRadioBtn;
