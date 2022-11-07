import React from 'react';
import CreateBlog from '../CreateBlog/CreateBlog';
import ReadBlogs from '../ReadBlogs/ReadBlogs';

const DashboardBlog = () => {
    return (
        <div>
            <CreateBlog />
            <ReadBlogs />
        </div>
    );
};

export default DashboardBlog;
