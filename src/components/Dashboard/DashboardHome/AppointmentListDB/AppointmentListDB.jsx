import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { EditLocationAlt } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const columns = [
    { id: 'doctorName', label: 'Doctor Name', minWidth: 200 },
    { id: 'patientName', label: 'Patient Name', minWidth: 200 },
    {
        id: 'appointmentDate',
        label: 'Appointment Date',
        minWidth: 250,
        align: 'left',
    },
    {
        id: 'paymentInfo',
        label: 'Payment Type',
        minWidth: 150,
        align: 'left',
    },
];

const AppointmentListDB = ({ appointments }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    let count = 1;
    const navigate = useNavigate();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleAppointmentDelete = (id) => {
        fetch(`http://localhost:5000/api/v1/DeleteAppointment/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Doctor Deleted Successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                    window.location.reload();
                }
            });
    };
    const handleAppointmentDetails = (id) => {
        navigate(`/dashboard/appointment/appointment-details/${id}`);
    };
    return (
        <div>
            <h4>Appointment List</h4>
            <div className="p-2">
                {appointments.length > 0 ? (
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 700 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            align={'left'}
                                            style={{
                                                minWidth: 70,
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {'#ID'.toUpperCase()}
                                        </TableCell>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                    minWidth: column.minWidth,
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {column.label.toUpperCase()}
                                            </TableCell>
                                        ))}
                                        <TableCell
                                            align={'right'}
                                            style={{
                                                minWidth: 200,
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {'Action'.toUpperCase()}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {appointments
                                        .slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        .map((row) => {
                                            return (
                                                <TableRow
                                                    hover
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                    key={row._id}
                                                >
                                                    <TableCell align={'left'}>
                                                        {count++}
                                                    </TableCell>
                                                    {columns.map((column) => {
                                                        let value = '';
                                                        if (
                                                            column.id ===
                                                            'paymentInfo'
                                                        ) {
                                                            value =
                                                                row[column.id]
                                                                    .paymentType;
                                                        } else {
                                                            value =
                                                                row[column.id];
                                                        }
                                                        return (
                                                            <TableCell
                                                                key={column.id}
                                                                align={
                                                                    column.align
                                                                }
                                                            >
                                                                {value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                    <TableCell
                                                        sx={{
                                                            display: 'flex',
                                                            gap: '10px',
                                                        }}
                                                        align={'right'}
                                                    >
                                                        <Button
                                                            onClick={() =>
                                                                handleAppointmentDelete(
                                                                    row._id
                                                                )
                                                            }
                                                            color="error"
                                                            variant="outlined"
                                                            startIcon={
                                                                <DeleteIcon />
                                                            }
                                                        >
                                                            Delete
                                                        </Button>
                                                        <Button
                                                            color="secondary"
                                                            variant="outlined"
                                                            startIcon={
                                                                <EditLocationAlt />
                                                            }
                                                            onClick={() =>
                                                                handleAppointmentDetails(
                                                                    row._id
                                                                )
                                                            }
                                                        >
                                                            Details
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={appointments.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                ) : (
                    <div className="my-5">
                        <h5 className="text-center">
                            No Appointment Found....
                        </h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppointmentListDB;
