import React from 'react';
import qansCategory from './../../../services/data/qansCategory';

const MedicalQACategory = () => {
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
                            <a
                                href="/medicalQa/all"
                                className="text-decoration-none"
                            >
                                <p className="m-0">All</p>
                            </a>
                        </li>
                        {qansCategory.map((category) => (
                            <li key={category.id} className="my-2">
                                <a
                                    href={`/medicalQa/${category.categoryName}`}
                                    className={`text-decoration-none `}
                                >
                                    <p className="m-0">
                                        {category.categoryName}
                                    </p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MedicalQACategory;
