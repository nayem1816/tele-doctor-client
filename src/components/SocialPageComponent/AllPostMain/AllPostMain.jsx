import React from 'react';
import rony from "../../../images/img/founding-team/rony.jpg"
import "./AllPostMain.css";
import {BiComment ,BiLike} from "react-icons/bi"
import {FaShare} from "react-icons/fa"

const AllPostMain = () => {
    return (
        <div className="container">
              <div class="card mb-5 ">
  <div class="card-body">
<div className='d-flex pb-3'>
<img src={rony} alt="" class="profile-photo-md   " />
<div className=" ">
    <h3 class="card-title ">Al Amin</h3>
    <p class="card-text"><small class="text-muted">Last actived 3 mins ago</small></p>
  </div>
  
</div>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    
  </div>
  <div className='text-center  ' >
  <img src={rony} class="card-img-bottom postImage " alt="..." />
  <div class="post-react ">
                                        <div className='d-flex justify-content-around'>
                                            <div className='p-3'>
                                            <div>
                                                   <BiLike />  Like
                                                </div>
                                            </div>
                                            <div className='p-3'>
                                            <div >                 <BiComment />   Comment
                                                 </div>
                                            </div>
                                            <div className='p-3'>
                                            <div >
                                                 <FaShare />    Share
                                            </div>
                                            </div>
                                        </div>
                                    </div>
  </div>
</div>
<div class="card mb-5 ">
  <div class="card-body">
<div className='d-flex pb-3'>
<img src={rony} alt="" class="profile-photo-md   " />
<div className=" ">
    <h3 class="card-title ">Al Amin</h3>
    <p class="card-text"><small class="text-muted">Last actived 3 mins ago</small></p>
  </div>
  
</div>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ut suscipit laudantium temporibus dolorum voluptate dolor consectetur amet at modi provident aliquid blanditiis, quibusdam similique dolores, adipisci placeat eius maiores, illum in voluptatum unde inventore? Velit a fugiat maxime magni debitis vero aperiam ex blanditiis nam, perferendis asperiores deserunt aliquam.</p>
    
  </div>
  <div className='text-center  ' >
  <img src={rony} class="card-img-bottom postImage " alt="..." />
  <div class="post-react ">
                                        <div className='d-flex justify-content-around'>
                                            <div className='p-3'>
                                            <div>
                                                   <BiLike />  Like
                                                </div>
                                            </div>
                                            <div className='p-3'>
                                            <div >                 <BiComment />   Comment
                                                 </div>
                                            </div>
                                            <div className='p-3'>
                                            <div >
                                                 <FaShare />    Share
                                            </div>
                                            </div>
                                        </div>
                                    </div>
  </div>
</div>
<div class="card mb-5">
  <div class="card-body">
<div className='d-flex pb-3'>
<img src={rony} alt="" class="profile-photo-md   " />
<div className=" ">
    <h3 class="card-title ">Al Amin</h3>
    <p class="card-text"><small class="text-muted">Last actived 3 mins ago</small></p>
  </div>
  
</div>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat recusandae ratione corrupti, tenetur, explicabo nulla eum ipsam dolores, similique sunt! Dolor perferendis ipsam sint eveniet architecto beatae qui reprehenderit quae, nisi asperiores enim ullam corrupti et velit. Alias esse voluptates facilis reprehenderit quasi voluptatum hic voluptate, quis dolores illum quisquam quo accusamus nulla debitis totam magni ullam quibusdam, tenetur sint? Rem illo, excepturi alias suscipit repellendus omnis officiis eligendi ad quam earum ducimus debitis vero fugit id est hic eveniet magnam aliquid et. Ea possimus accusantium sequi. Tempora dignissimos quibusdam est atque amet exercitationem iure repellendus et labore alias!</p>
    
  </div>
  <div className='text-center  ' >
  <img src={rony} class="card-img-bottom postImage " alt="..." />
  <div class="post-react ">
                                        <div className='d-flex justify-content-around'>
                                            <div className='p-3'>
                                            <div>
                                                   <BiLike />  Like
                                                </div>
                                            </div>
                                            <div className='p-3'>
                                            <div >                 <BiComment />   Comment
                                                 </div>
                                            </div>
                                            <div className='p-3'>
                                            <div >
                                                 <FaShare />    Share
                                            </div>
                                            </div>
                                        </div>
                                    </div>
  </div>
</div>
        </div>
          
        
    );
};

export default AllPostMain;