import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ReadPost from '../../components/SocialMediaMain/SocialMediaHome/ReadPost';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import profile from '../../images/icons/user1.png';

const SocialMediaSingleUser = () => {
    const [posts, setPosts] = useState([]);
    const { email } = useParams();
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(
            `https://tele-doctor-server.vercel.app/api/v1/ReadPostByEmail/${email}`
        )
            .then((res) => res.json())
            .then((data) => setPosts(data.data.reverse()));
    }, [posts, email]);
    return (
        <div>
            <div className="profile d-flex align-items-center border rounded shadow p-4">
                <img
                    style={{ width: '150px', height: '150px' }}
                    className="rounded-circle border img-fluid"
                    src={posts?.[0]?.userImage || profile}
                    alt=""
                />
                <div className="">
                    <h2 className="ms-4">{user?.displayName}</h2>
                    {posts?.[0]?.userEmail === user.email && (
                        <div className="button ms-4">
                            <Button className="" variant="contained">
                                Add Post
                            </Button>
                            <Button
                                className="ms-2"
                                variant="contained"
                                color="error"
                            >
                                Edit Profile
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            {posts.length > 0 ? (
                <div className="read-post my-5">
                    {posts.map((post) => (
                        <ReadPost
                            post={post}
                            key={post._id}
                            type={post?.userEmail === user.email && 'personal'}
                        />
                    ))}
                </div>
            ) : (
                <h1 className="text-center mt-5">No Post Found!</h1>
            )}
        </div>
    );
};

export default SocialMediaSingleUser;
