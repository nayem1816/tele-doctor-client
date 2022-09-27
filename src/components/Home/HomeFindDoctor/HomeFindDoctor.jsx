import React from 'react';
import './HomeFindDoctor.css';

import doctor from '../../../images/img/homeDoctor.jpg';
import Search from '../../common/Search/Search';

const HomeFindDoctor = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-7 my-5">
                    <div className="">
                        <h1 className="base-color">Find your doctor</h1>
                        <Search placeHolder="Search for a disease or doctor" />
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
