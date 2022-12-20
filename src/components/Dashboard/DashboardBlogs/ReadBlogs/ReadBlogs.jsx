import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

const columns = [
    { id: 'title', label: 'Title', minWidth: 200 },
    { id: 'category', label: 'Category', minWidth: 200 },
];

const ReadBlogs = () => {
    let count = 1;
    const [blogDataList, setBlogDataList] = React.useState([]);

    React.useEffect(() => {
        fetch('https://tele-doctor-server.vercel.app/api/v1/ReadBlogs')
            .then((res) => res.json())
            .then((data) => setBlogDataList(data.data));
    }, [blogDataList]);

    const handleNurseDelete = (id) => {
        fetch(`https://tele-doctor-server.vercel.app/api/v1/DeleteBlog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const remainingData = blogDataList.filter(
                        (nurse) => nurse._id !== id
                    );
                    setBlogDataList(remainingData);
                }
                toast.success('Category Deleted Successfully', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            });
    };

    // ascending order
    // const sortData = blogDataList.sort((a, b) => {
    //     if (a.name < b.name) {
    //         return -1;
    //     }
    //     if (a.name > b.name) {
    //         return 1;
    //     }
    //     return 0;
    // });
    return (
        <div className="my-4">
            <h4>Blog List</h4>
            <div className="p-2">
                {blogDataList.length > 0 ? (
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
                                    {blogDataList.map((row) => {
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
                                                            align={column.align}
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
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
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

export default ReadBlogs;
