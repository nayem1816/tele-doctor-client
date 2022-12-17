import React from 'react';
import nayem from '../../../images/social-media/nayem.jpg';
import './SocialMediaMain.css';
const SocialMediaMain = () => {
    return (
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-7 col-sm-7">
                    <div className="form-grp d-flex ">
                        <img src={nayem} alt="" className="profile-photo-md " />
                        <textarea
                            name="texts"
                            id="exampleTextarea"
                            cols="30"
                            rows="1"
                            className="form-control"
                            placeholder="What's on your mind?"
                        />
                    </div>
                </div>
                <div className="col-md-5  col-sm-5">
                    <div className="tools pt-2 ">
                        <button className="btn social-CreateBtn">
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaMain;
