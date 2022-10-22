import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const CustomCheckbox = (props) => {
    const { selectOption, register, regName } = props;
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <FormControlLabel
            {...register(regName)}
            value={selectOption}
            control={<Checkbox {...label} />}
            label={selectOption}
            labelPlacement="end"
        />
    );
};

export default CustomCheckbox;
