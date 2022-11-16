import TextField from '@mui/material/TextField';

const CustomDatePicker = ({ placeHolder, refs }) => {
    return (
        <TextField
            className="w-100"
            id="date"
            label={placeHolder}
            type="date"
            variant="filled"
            InputLabelProps={{
                shrink: true,
            }}
            {...refs}
        />
    );
};

export default CustomDatePicker;
