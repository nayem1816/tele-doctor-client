import React from 'react';
import diseasesList from '../../../services/data/diseasesList';

const DiseasesCategory = () => {
    return (
        <div>
        <div className=" shadow p-4">
            <h5 className="fw-bold">Categories</h5>
            <div
                style={{ height: '500px' }}
                className="categoriesName overflow-auto ms-2"
            >
                <ul className="list-unstyled ">
                    <li className="my-2 ">
                        <a
                            href="/diseases/all"
                            className="text-decoration-none"
                        >
                            <p className="m-0">All</p>
                        </a>
                    </li>
                    {diseasesList.map((category) => (
                        <li key={category.id} className="my-2">
                            <a
                                href={`/diseases/${category.name}`}
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

export default DiseasesCategory;