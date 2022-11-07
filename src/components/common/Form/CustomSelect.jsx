import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ setSelectType, options }) => {
    return (
        <Select
            defaultValue={null}
            onChange={setSelectType}
            options={options}
        />
    );
};

export default CustomSelect;
