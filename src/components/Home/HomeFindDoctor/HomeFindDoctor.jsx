import React, { useEffect } from 'react';
import './HomeFindDoctor.css';

import doctor from '../../../images/img/homeDoctor.jpg';
import Search from '../../common/Search/Search';
import { useNavigate } from 'react-router-dom';

const HomeFindDoctor = () => {
    const [searchValue, setSearchValue] = React.useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if (searchValue) {
            navigate(`/search-doctors/${searchValue}`);
        }
    }, [searchValue, navigate]);
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-7 my-5">
                    <div className="">
                        <h1 className="base-color">Find your doctor</h1>
                        <Search
                            setSearchValue={setSearchValue}
                            placeHolder="Search for a disease or doctor"
                        />
                        <p className="ms-2">Disease or Doctor name</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <img className="img-fluid" src={doctor} alt="doctor" />
                </div>
            </div>
        </div>
    );
};

export default HomeFindDoctor;
