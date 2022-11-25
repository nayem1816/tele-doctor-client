import React from 'react';
import "./SocialMediaSubPagesMiddlePart.css"

const SocialMediaSubPagesMiddlePart = () => {
    return (
        
            <div className="container my-5 py-5">
                <div className="row text-center shadow-lg  mx-md-5 rounded">
                    <div className="col-md-4 my-4">
                        <button className="btn  button">Your Post</button>
                    </div>
                    <div className="col-md-4 my-4">
                        <button className="btn button">All Post</button>
                    </div>
                    <div className="col-md-4 my-4">
                        <button className="btn button">Create Post        </button>
                    </div>
                </div>
            </div>
       
    );
};

export default SocialMediaSubPagesMiddlePart;