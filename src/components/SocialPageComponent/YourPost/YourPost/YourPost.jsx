import React from 'react';
import { MdSend } from 'react-icons/md';

const YourPost = ({ findUser }) => {
    return (
        <div className="container mt-5">
            <div className="">
                {findUser.allPost.map((post) => (
                    <div key={post.id} className="mt-5 card">
                        <div className="card-body">
                            <div className="d-flex ">
                                <img
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                    }}
                                    src={findUser.img}
                                    alt=""
                                    className="profile-photo-md"
                                />

                                <div className="">
                                    <div className="d-flex">
                                        <h4 className=" fw-bold ">
                                            {findUser.name}
                                        </h4>
                                    </div>

                                    <p className="card-text">
                                        <small className="text-muted">
                                            22 Aug 2022
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="card-text p-4">{post.description}</p>
                        <img
                            src={post.postImg}
                            style={{ height: '700px' }}
                            className="img-fluid"
                            alt="..."
                        />
                        <div className="post-react ">
                            <div className="row p-4">
                                <div className="col-md-7 col-sm-7">
                                    <div className="form-grp d-flex ">
                                        <img
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                            }}
                                            src={findUser.img}
                                            alt=""
                                            className="profile-photo-md "
                                        />
                                        <textarea
                                            name="texts"
                                            id="exampleTextarea"
                                            cols="30"
                                            rows="1"
                                            className="form-control"
                                            placeholder="Write a comment...."
                                        />
                                    </div>
                                </div>
                                <div className="col-md-5  col-sm-5">
                                    <div className="tools  ">
                                        <MdSend className="mt-2 send-btn" />
                                    </div>
                                </div>
                            </div>
                            <hr className="m-3 " />
                            {post.comments.map((comment) => (
                                <div key={comment.id} className="d-flex p-4">
                                    <img
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                        }}
                                        src={comment.commentUser}
                                        alt=""
                                        className="profile-photo-md"
                                    />
                                    <div className=" card ">
                                        <div className="p-2">
                                            <h5 className="card-title fw-bold ">
                                                {comment.name}
                                            </h5>
                                            <p className="card-text">
                                                <small>{comment.comment}</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YourPost;
