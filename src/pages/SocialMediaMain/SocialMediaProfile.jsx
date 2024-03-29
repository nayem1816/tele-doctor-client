import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ReadPost from '../../components/SocialMediaMain/SocialMediaHome/ReadPost';
import { Button } from '@mui/material';

const SocialMediaProfile = () => {
    const [posts, setPosts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(
            `https://tele-doctor-server.vercel.app/api/v1/ReadPostByEmail/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => setPosts(data.data.reverse()));
    }, [posts, user?.email]);

    return (
        <div>
            <div className="profile d-md-flex align-items-md-center border rounded shadow p-4 text-center text-md-start">
                <img
                    style={{ width: '150px', height: '150px' }}
                    className="rounded-circle border img-fluid "
                    src={user?.photoURL}
                    alt=""
                />
                <div className="text-center text-md-start">
                    <h2 className="ms-4">{user?.displayName}</h2>
                    <div className="button ms-4 text-center text-md-start">
                        <Button className="" variant="contained">
                            Add Post
                        </Button>
                        <Button
                            className="ms-md-2 ms-0 mt-2 mt-md-0"
                            variant="contained"
                            color="error"
                        >
                            Edit Profile
                        </Button>
                    </div>
                </div>
            </div>
            {posts.length > 0 ? (
                <div className="read-post my-5">
                    {posts.map((post) => (
                        <ReadPost
                            post={post}
                            key={post._id}
                            type={'personal'}
                        />
                    ))}
                </div>
            ) : (
                <h1 className="text-center mt-5">No Post Found!</h1>
            )}
        </div>
    );
};

export default SocialMediaProfile;
