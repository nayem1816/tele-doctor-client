import React from 'react';
import Title from '../../common/Title/Title';
import ReactReadMoreReadLess from 'react-read-more-read-less';

const Blog = ({ title }) => {
    const [blogDataList, setBlogDataList] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/api/v1/ReadBlogs')
            .then((res) => res.json())
            .then((data) => setBlogDataList(data.data));
    }, [blogDataList]);
    return (
        <div className="container my-5">
            <Title titleName={`${title} Blogs`} />
            <div className="blog-list my-4">
                <div className="row card-group gap-3">
                    {blogDataList?.map((blog) => (
                        <div
                            key={blog?._id}
                            className="col-md-2 col-lg-4 card shadow rounded p-3 border-0"
                        >
                            <div className="blog-card">
                                <div className="blog-image">
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                        }}
                                        className="img-fluid rounded"
                                        src={blog?.image}
                                        alt="blog"
                                    />
                                </div>
                                <div className="blog-details">
                                    <h5 className="fw-bold my-2">
                                        {blog?.title}
                                    </h5>
                                    <ReactReadMoreReadLess
                                        charLimit={170}
                                        readMoreText="...Read more..."
                                        readLessText="...Read less..."
                                    >
                                        {blog?.description}
                                    </ReactReadMoreReadLess>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
