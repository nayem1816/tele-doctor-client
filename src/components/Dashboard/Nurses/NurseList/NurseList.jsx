import React from 'react';
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
    { id: 'phone', label: 'Phone', minWidth: 200 },
    {
        id: 'experience',
        label: 'Experience',
        minWidth: 250,
        align: 'left',
    },
];

const NurseList = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [nurseDataList, setNurseDataList] = React.useState([]);
    const navigate = useNavigate();
    let count = 1;

    React.useEffect(() => {
        fetch('https://tele-doctor-server.vercel.app/api/v1/ReadNurses')
            .then((res) => res.json())
            .then((data) => {
                setNurseDataList(data.data);
            });
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleNurseDelete = (id) => {
        fetch(`https://tele-doctor-server.vercel.app/api/v1/DeleteNurse`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    const remainingNurses = nurseDataList.filter(
                        (nurse) => nurse._id !== id
                    );
                    setNurseDataList(remainingNurses);
                    toast.success('Nurse Deleted Successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                }
            });
    };

    const handleNurseDetails = (id) => {
        navigate(`/dashboard/nurse/nurse-details/${id}`);
    };

    return (
        <div className="my-5">
            <h4>Nurse List</h4>
            <div className="p-2">
                {nurseDataList.length > 0 ? (
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
                                    {nurseDataList
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
                                                                handleNurseDelete(
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
                                                            onClick={() =>
                                                                handleNurseDetails(
                                                                    row._id
                                                                )
                                                            }
                                                            color="secondary"
                                                            variant="outlined"
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
                            count={nurseDataList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                ) : (
                    <div className="my-5">
                        <h5 className="text-center">
                            No Nurse Found. Please Add Nurse to see the list
                        </h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NurseList;
