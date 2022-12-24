import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const ReadPages = ({ page }) => {
    return (
        <div className="card my-3">
            <Card>
                <div
                    sx={{ height: '160px', width: '100%' }}
                    className="text-center"
                >
                    <img
                        style={{ height: '160px', width: '100%' }}
                        className="img-fluid"
                        src={
                            page.pageImage ||
                            'https://i.ibb.co/dfVnftx/no-image.jpg'
                        }
                        alt="green iguana"
                    />
                </div>
                <CardContent>
                    <Typography
                        // style={{ minHeight: '60px' }}
                        className="fw-bold fs-6 mt-3"
                        gutterBottom
                        variant="h6"
                        component="div"
                    >
                        {page.pageName}
                    </Typography>
                    <Typography
                        style={{ textAlign: 'justify', minHeight: '100px' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {page.pageDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        className="w-100"
                        size="small"
                        variant="outlined"
                        color="error"
                    >
                        View Page
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ReadPages;
