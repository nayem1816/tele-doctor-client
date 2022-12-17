import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useEffect } from 'react';

const QADetails = () => {
    const [qa, setQa] = React.useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/ReadQuesAndAnsById/${id}`)
            .then((res) => res.json())
            .then((data) => setQa(data.data));
    }, [id]);

    return (
        <div>
            <h4>Question and Answer</h4>
            <div className="form my-5">
                <div className="my-3">
                    <strong>Question</strong>
                    <TextField
                        className="w-100 mt-1 text-dark"
                        id="filled-multiline-static"
                        multiline
                        rows={2}
                        variant="filled"
                        disabled={true}
                        defaultValue={qa?.question}
                        sx={{
                            '& .MuiInputBase-input.Mui-disabled': {
                                WebkitTextFillColor: '#000000',
                            },
                        }}
                    />
                </div>
                <div className="my-4">
                    <strong>Answer</strong>
                    <TextField
                        className="w-100 mt-1 text-dark"
                        id="filled-multiline-static"
                        multiline
                        rows={4}
                        variant="filled"
                        disabled={true}
                        defaultValue={qa?.answer}
                        sx={{
                            '& .MuiInputBase-input.Mui-disabled': {
                                WebkitTextFillColor: '#000000',
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default QADetails;
