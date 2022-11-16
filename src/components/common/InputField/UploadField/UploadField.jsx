import React from 'react';
import { useState } from 'react';
import './UploadField.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

const UploadField = ({ placeHolder, setDoctorImage }) => {
    const [fileText, setFileText] = useState(placeHolder);

    const fileSelect = () => {
        const fileInput = document.getElementById('file-upload-input');
        fileInput.click();
    };

    const fileNameChange = () => {
        const fileInput = document.getElementById('file-upload-input');
        const filename = fileInput.files[0].name;
        setFileText(filename);

        const imgData = new FormData();
        imgData.set('key', '94e8e908997cb2f7fead68d619169951');
        imgData.append('image', fileInput.files[0]);

        axios
            .post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setDoctorImage(response.data.data.image.url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="file-upload">
            <div onClick={fileSelect} className="file-upload-select">
                <div className="file-select-button px-4">
                    <CloudUploadIcon />
                </div>
                <div className="file-select-name">{fileText}</div>
                <input
                    onChange={fileNameChange}
                    type="file"
                    name="file-upload-input"
                    id="file-upload-input"
                />
            </div>
        </div>
    );
};

export default UploadField;
