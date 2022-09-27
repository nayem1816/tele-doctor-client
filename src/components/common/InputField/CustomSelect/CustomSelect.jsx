import { FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';

const CustomSelect = ({ placeHolder, selectOptions, register, regName }) => {
    return (
        <FormControl className="w-100" variant="filled">
            <InputLabel htmlFor="filled-native-simple">
                {placeHolder}
            </InputLabel>
            <Select {...register(regName, { required: true })} native>
                <option aria-label="None" value="" />
                {selectOptions.map((options, i) => (
                    <option key={i} value={options}>
                        {options}
                    </option>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomSelect;
