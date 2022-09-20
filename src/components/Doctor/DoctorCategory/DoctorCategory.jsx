import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../../../services/data/categories';

const DoctorCategory = () => {
    return (
        <div>
            <div className="shadow p-4">
                <h5 className="fw-bold">Categories</h5>
                <div
                    style={{ height: '700px' }}
                    className="categoriesName overflow-auto ms-2"
                >
                    <ul className="list-unstyled">
                        <li className="my-2">
                            <Link
                                to="/doctor/all"
                                className="text-decoration-none"
                            >
                                <p className="m-0">All</p>
                            </Link>
                        </li>
                        {categories.map((category) => (
                            <li key={category.id} className="my-2">
                                <a
                                    href={`/doctor/${category.name}`}
                                    className={`text-decoration-none `}
                                >
                                    <p className="m-0">{category.name}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DoctorCategory;
