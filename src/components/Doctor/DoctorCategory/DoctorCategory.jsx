import React from 'react';

const DoctorCategory = () => {
    const [categoryDataList, setCategoryDataList] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/api/v1/ReadCategories')
            .then((res) => res.json())
            .then((data) => setCategoryDataList(data.data));
    }, [categoryDataList]);

    const sortData = categoryDataList.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

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
                                href="/doctor/all"
                                className="text-decoration-none"
                            >
                                <p className="m-0">All</p>
                            </a>
                        </li>
                        {sortData.map((category) => (
                            <li key={category._id} className="my-2">
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
