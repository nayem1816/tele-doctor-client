import React from 'react';
import './HomeFindDoctor.css';
import { FaSearch } from 'react-icons/fa';
import doctor from '../../../images/img/homeDoctor.jpg';

const HomeFindDoctor = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-7 my-5">
                    <div className="">
                        <h1 className="base-color">Find your doctor</h1>
                        <div className="search-input mt-4 w-75">
                            <div className="p-1 rounded-4 shadow-sm mb-1 search-input-bg">
                                <div className="input-group">
                                    <input
                                        type="search"
                                        placeholder="Search for a disease or doctor"
                                        aria-describedby="button-addon1"
                                        className="form-control border-0 search-input-bg search-input text-white"
                                    />
                                    <div className="input-group-append">
                                        <button
                                            id="button-addon1"
                                            type="submit"
                                            className="btn btn-link text-white"
                                        >
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
