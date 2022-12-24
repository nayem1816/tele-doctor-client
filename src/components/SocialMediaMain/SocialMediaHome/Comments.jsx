import React from 'react';
import profile from '../../../images/icons/user1.png';
import './SocialMediaHome.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Comments = ({ postId, comments }) => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = (data) => {
        const commentData = {
            postId: postId,
            commentText: data.commentText,
            commentDate: new Date().toDateString(),
            commentTime: new Date().toLocaleTimeString(),
            commentUser: user?.displayName,
            commentEmail: user?.email,
            commentUserImage: user?.photoURL,
        };

        fetch('http://localhost:5000/api/v1/AddComment', {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    reset();
                }
            });
    };
    return (
        <div className="comment-section">
            <div className="comment my-3">
                <div className="name-image d-flex align-items-center">
                    <img
                        className="rounded-circle border"
                        style={{ width: '40px', height: '40px' }}
                        src={profile || user?.photoURL}
                        alt=""
                    />
                    <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            style={{
                                border: 'none',
                                outline: 'none',
                                backgroundColor: '#F0F2F5',
                            }}
                            className="w-100 ms-2 py-2 px-3 rounded-pill"
                            {...register('commentText')}
                            placeholder="Whats on your mind?"
                        />
                    </form>
                </div>
            </div>
            {comments.length > 0 && (
                <div className="comment-text my-3 mx-4">
                    {comments.map((comment) => (
                        <div
                            key={comment.commentDate && comment.commentTime}
                            className="d-flex align-items-center mb-3"
                        >
                            <img
                                className="rounded-circle border"
                                style={{
                                    width: '35px',
                                    height: '35px',
                                }}
                                src={profile}
                                alt=""
                            />
                            <div
                                style={{ backgroundColor: '#F0F2F5' }}
                                className="ms-2 px-4 py-2 rounded-4"
                            >
                                <Link to={`profile/${comment?.commentEmail}`}>
                                    <h6 className="mb-0 fw-bold">
                                        {comment?.commentUser}
                                    </h6>
                                </Link>
                                <p>{comment?.commentText}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comments;
