import React, { useEffect } from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { EditLocationAlt } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const columns = [
    {
        id: 'doctorName',
        label: 'Doctor Name',
        minWidth: 190,
        align: 'left',
    },
    {
        id: 'patientName',
        label: 'Patient Name',
        minWidth: 180,
        align: 'left',
    },
    {
        id: 'appointmentDate',
        label: 'Appointment Date',
        minWidth: 160,
        align: 'left',
    },
];

const MyPrescription = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [prescriptions, setPrescriptions] = useState([]);
    const navigate = useNavigate();
    let count = 1;
    const [user] = useAuthState(auth);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        fetch(
            `https://tele-doctor-server.vercel.app/api/v1/ReadPrescriptionByEmail/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => setPrescriptions(data.data));
    }, [user?.email]);

    const handlePrescriptionDetails = (id) => {
        navigate(`/my-profile/prescription/${id}`);
    };

    return (
        <div>
            <h4>My Prescriptions</h4>
            <div className="p-2 my-5">
                {prescriptions.length > 0 ? (
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
                                    {prescriptions
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
                                                            'doctorName'
                                                        ) {
                                                            value = `${row.appointment.doctorName}`;
                                                        } else if (
                                                            column.id ===
                                                            'appointmentDate'
                                                        ) {
                                                            value = `${row.appointment.appointmentDate}`;
                                                        } else if (
                                                            column.id ===
                                                            'patientName'
                                                        ) {
                                                            value = `${row.appointment.patientName}`;
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
                                                            color="secondary"
                                                            variant="outlined"
                                                            startIcon={
                                                                <EditLocationAlt />
                                                            }
                                                            onClick={() =>
                                                                handlePrescriptionDetails(
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
                            count={prescriptions.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                ) : (
                    <div className="my-5">
                        <h5 className="text-center">No Prescription Found</h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPrescription;
