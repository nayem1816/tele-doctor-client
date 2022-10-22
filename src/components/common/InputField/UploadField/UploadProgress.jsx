import React from "react";

const UploadProgress = ({ uploadPercent }) => {
    console.log(`${uploadPercent}`);
    return (
        <div className="progress">
            <div
                className="progress-bar progress-bar-striped progress-bar-animated w-75"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: uploadPercent }}
            ></div>
        </div>
    );
};

export default UploadProgress;
