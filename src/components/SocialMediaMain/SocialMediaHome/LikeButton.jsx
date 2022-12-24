import React, { useState } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { FaRegCommentAlt, FaShareAlt } from 'react-icons/fa';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const handleLikeBtn = () => {
        setLiked(!liked);
    };

    return (
        <div className="row footer d-flex justify-content-between like-comment-share">
            <div className="col-4">
                <button
                    onClick={handleLikeBtn}
                    className="btn w-100 text-muted fw-bold d-flex align-items-center justify-content-center"
                >
                    {liked === true ? (
                        <>
                            <AiFillLike
                                style={{ color: '#0571ED' }}
                                className="fs-5"
                            />
                            <span style={{ color: '#0571ED' }} className="ms-1">
                                Liked
                            </span>
                        </>
                    ) : (
                        <>
                            <AiOutlineLike className="fs-5" />
                            <span className="ms-1">Like</span>
                        </>
                    )}
                </button>
            </div>
            <div className="col-4">
                <button className="btn w-100 text-muted fw-bold">
                    <FaRegCommentAlt className="fs-6" />
                    <span className="ms-1">Comment</span>
                </button>
            </div>
            <div className="col-4">
                <button className="btn w-100 text-muted fw-bold">
                    <FaShareAlt className="fs-6" />
                    <span className="ms-1">Share</span>
                </button>
            </div>
        </div>
    );
};

export default LikeButton;
