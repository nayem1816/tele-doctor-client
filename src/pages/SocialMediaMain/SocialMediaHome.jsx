import React, { useEffect, useState } from 'react';
import CreatePost from '../../components/SocialMediaMain/SocialMediaHome/CreatePost';
import HomePagesList from '../../components/SocialMediaMain/SocialMediaHome/HomePagesList';
import ReadPost from '../../components/SocialMediaMain/SocialMediaHome/ReadPost';

const SocialMediaHome = () => {
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/ReadPosts')
            .then((res) => res.json())
            .then((data) => setPosts(data.data.reverse()));

        fetch('http://localhost:5000/api/v1/ReadPages')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPages(data.data);
            });
    }, [posts, setPosts, pages, setPages]);

    return (
        <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
                <HomePagesList pages={pages.slice(0, 8)} />
            </div>
            <div className="col-lg-9">
                <div className="create-post">
                    <CreatePost />
                </div>
                <div className="read-post my-5">
                    {posts.map((post) => (
                        <ReadPost post={post} key={post._id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMediaHome;
