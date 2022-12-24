import React from 'react';
import profile from '../../../images/icons/user1.png';
import './SocialMediaHome.css';
import MoreIcon from '@mui/icons-material/MoreVert';
import Comments from './Comments';
import LikeButton from './LikeButton';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const ReadPost = ({ post, type }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeletePost = () => {
        fetch(`http://localhost:5000/api/v1/DeletePost`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: post._id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Post deleted successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                    handleClose();
                }
            });
    };

    return (
        <div className="">
            <div className="border rounded px-4 py-2 shadow mb-4">
                <div className="header my-2">
                    <div className="name-image d-flex align-items-center">
                        <img
                            className="rounded-circle border"
                            style={{ width: '40px', height: '40px' }}
                            src={profile}
                            alt=""
                        />
                        <div className="">
                            <Link to={`profile/${post?.userEmail}`}>
                                <h6 className="ms-1 mb-0 fw-bold">
                                    {post?.userName}
                                </h6>
                            </Link>

                            <p
                                style={{ fontSize: '12px' }}
                                className="ms-1 mb-0 text-muted"
                            >
                                {post?.postDate} {post?.postTime}
                            </p>
                        </div>
                        {type === 'personal' && (
                            <>
                                <IconButton
                                    className="ms-auto"
                                    size="large"
                                    aria-label="display more actions"
                                    edge="end"
                                    color="inherit"
                                    // id="basic-button"
                                    aria-controls={
                                        open ? 'basic-menu' : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <MoreIcon />
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem
                                        className="d-flex align-items-center"
                                        onClick={handleDeletePost}
                                    >
                                        <DeleteIcon className="me-2" />
                                        <span className="fs-5">Delete</span>
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </div>
                </div>
                <div className="post-text my-3">
                    <p
                        style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}
                        className=""
                    >
                        {post?.post}
                    </p>
                    {post?.postImage !== null && (
                        <img
                            style={{ width: '100%', maxHeight: '500px' }}
                            className="my-3 img-fluid"
                            src={post?.postImage}
                            alt=""
                        />
                    )}
                </div>
                <hr className="mb-2 mt-3" />
                <LikeButton />
                <hr className="mb-2 mt-2" />
                <Comments postId={post._id} comments={post.comments} />
            </div>
        </div>
    );
};

export default ReadPost;
