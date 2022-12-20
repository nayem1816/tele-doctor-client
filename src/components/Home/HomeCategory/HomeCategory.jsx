import React from 'react';
import './HomeCategory.css';
import { Link } from 'react-router-dom';
import './HomeCategory.css';

const HomeCategory = () => {
    const [categoryDataList, setCategoryDataList] = React.useState([]);

    React.useEffect(() => {
        fetch('https://tele-doctor-server.vercel.app/api/v1/ReadCategories')
            .then((res) => res.json())
            .then((data) => setCategoryDataList(data.data));
    }, [categoryDataList]);
    return (
        <div className="home-category">
            <div className="container d-flex justify-content-between scroll-category">
                {categoryDataList?.slice(0, 8).map((category) => (
                    <Link
                        key={category._id}
                        className="text-white d-none d-sm-none d-md-none d-lg-block d-xl-block py-3"
                        to={`/doctor/${category.name}`}
                    >
                        {category.name}
                    </Link>
                ))}
                {categoryDataList?.slice(0, 6).map((category) => (
                    <Link
                        key={category._id}
                        className="text-white d-none d-sm-none d-md-block d-lg-none d-xl-none p-3"
                        to={`/doctor${category.name}`}
                    >
                        {category.name}
                    </Link>
                ))}
                {categoryDataList?.slice(0, 10).map((category) => (
                    <Link
                        key={category._id}
                        className="text-white d-sm-block d-md-none d-lg-none d-xl-none me-5 py-3"
                        to={`/doctor${category.name}`}
                    >
                        {category.name}
                    </Link>
                ))}
                <Link className="text-white py-3" to="/doctor">
                    see all categories &#8594;
                </Link>
            </div>
        </div>
    );
};

export default HomeCategory;
