import React from 'react';
import userImage from "../../../images/img/founding-team/nayem.jpg";
import "./SocialMediaMain.css";
const SocialMediaMain = () => {
    return (
       
            
            <div className="container pt-5 pb-5">
                <div class="row">
            		<div class="col-md-7 col-sm-7">
                  <div class="form-grp d-flex ">
                    <img src={userImage} alt="" class="profile-photo-md " />
                    <textarea name="texts" id="exampleTextarea" cols="30" rows="1" class="form-control" placeholder="What's on your mind?"></textarea>
                  </div>
                </div>
            		<div class="col-md-5  col-sm-5">
                  <div class="tools pt-2 ">
                    <button class="btn btn-primary">Publish</button>
                  </div>
                </div>
            	</div>
            </div>
        
    );
};

export default SocialMediaMain;