import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CustomInput from '../../common/InputField/CustomInput/CustomInput';
import { useForm } from 'react-hook-form';
import CustomButton from '../../common/InputField/CustomButton/CustomButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AppointmentDetails = ({ open, setOpen, appointment }) => {
    const { register, handleSubmit } = useForm();
    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {
        // console.log(data);
        fetch('http://localhost:5000/api/v1/SentAppointmentMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                appointmentId: appointment._id,
                message: data.message,
                sender: 'doctor',
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    console.log(appointment);
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative', backgroundColor: '#5921cf' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Appointment Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex my-5">
                        <CustomInput
                            placeHolder={'Send message to patient'}
                            inputType={'text'}
                            refs={register('message', { required: true })}
                        />
                        <CustomButton btnType={'submit'} btnTxt={'Send'} />
                    </div>
                </form>
                <Divider />
                <div className="appointment-details">
                    <h2>Details</h2>
                </div>
            </div>
        </Dialog>
    );
};

export default AppointmentDetails;
