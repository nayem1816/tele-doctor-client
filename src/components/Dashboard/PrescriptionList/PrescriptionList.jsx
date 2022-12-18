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
import DeleteIcon from '@mui/icons-material/Delete';
import { EditLocationAlt } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const columns = [
    {
        id: 'createdAt',
        label: 'Prescription Date and Time',
        minWidth: 250,
        align: 'left',
    },
];

const PrescriptionList = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [prescriptions, setPrescriptions] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    let count = 1;

    useEffect(() => {
        fetch(
            `http://localhost:5000/api/v1/ReadPrescriptionDoctorByEmail/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => setPrescriptions(data.data));
    }, [user?.email]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleAppointmentDelete = (id) => {
        fetch(`http://localhost:5000/api/v1/DeletePrescription/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    const remainingPrescription = prescriptions?.filter(
                        (appointment) => appointment._id !== id
                    );
                    setPrescriptions(remainingPrescription);
                    toast.success('Prescription Deleted Successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                }
            });
    };

    const handlePrescriptionDetails = (id) => {
        navigate(`/dashboard/prescription/prescription-details/${id}`);
    };

    return (
        <div>
            <h4>Prescriptions</h4>
            <div className="p-2">
                {prescriptions?.length > 0 ? (
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
                                        ?.slice(
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
                            count={prescriptions?.length}
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

export default PrescriptionList;
