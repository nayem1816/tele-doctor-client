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
    { id: 'name', label: 'Name', minWidth: 200 },
    { id: 'specialization', label: 'Specialization', minWidth: 200 },
    {
        id: 'registrationNumber',
        label: 'Registration Number',
        minWidth: 250,
        align: 'left',
    },
    {
        id: 'fees',
        label: 'Visiting Fee',
        minWidth: 150,
        align: 'left',
    },
];

const DoctorsList = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [doctorDataList, setDoctorDataList] = React.useState([]);
    const navigate = useNavigate();
    let count = 1;

    React.useEffect(() => {
        fetch('http://localhost:5000/api/v1/VerifiedDoctors')
            .then((res) => res.json())
            .then((data) => setDoctorDataList(data.data.reverse()));
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDoctorDelete = (id) => {
        fetch(`http://localhost:5000/api/v1/DeleteDoctor/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const remainingDoctors = doctorDataList.filter(
                        (doctor) => doctor._id !== id
                    );
                    setDoctorDataList(remainingDoctors);
                    toast.success('Doctor Deleted Successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                }
            });
    };
    const handleDoctorDetails = (id) => {
        navigate(`/dashboard/doctor/doctor-details/${id}`);
    };

    return (
        <div>
            <h1>Doctors List</h1>
            <div className="p-2">
                {doctorDataList.length > 0 ? (
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
                                    {doctorDataList
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
                                                        const value =
                                                            row[column.id];
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
                                                                handleDoctorDelete(
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
                                                            onClick={() =>
                                                                handleDoctorDetails(
                                                                    row._id
                                                                )
                                                            }
                                                            startIcon={
                                                                <EditLocationAlt />
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
                            count={doctorDataList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                ) : (
                    <div className="my-5">
                        <h5 className="text-center">
                            No Doctors Found. Please Add Doctors to see the list
                        </h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorsList;
