import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const DoctorDetails = ({ open, setOpen, doctor }) => {
    const handleClose = () => {
        setOpen(false);
    };
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
                        Doctor Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="appointment-details">
                <h2>Details</h2>
            </div>
        </Dialog>
    );
};

export default DoctorDetails;
