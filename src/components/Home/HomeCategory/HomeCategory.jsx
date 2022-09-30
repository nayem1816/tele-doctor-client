import React from 'react';
import './HomeCategory.css';
import { Link } from 'react-router-dom';
import './HomeCategory.css';
import categories from '../../../services/data/categories.js';

const HomeCategory = () => {
    return (
        <div className="home-category">
            <div className="container d-flex justify-content-between scroll-category">
                {categories.slice(0, 8).map((category) => (
                    <Link
                        key={category.id}
                        className="text-white d-none d-sm-none d-md-none d-lg-block d-xl-block py-3"
                        to={`/doctor/${category.name}`}
                    >
                        {category.name}
                    </Link>
                ))}
                {categories.slice(0, 6).map((category) => (
                    <Link
                        key={category.id}
                        className="text-white d-none d-sm-none d-md-block d-lg-none d-xl-none p-3"
                        to={`/doctor${category.name}`}
                    >
                        {category.name}
                    </Link>
                ))}
                {categories.slice(0, 10).map((category) => (
                    <Link
                        key={category.id}
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
