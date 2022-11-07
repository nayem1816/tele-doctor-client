import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';

const Search = ({ placeHolder }) => {
    return (
        <div className="search-input mt-4 w-75">
            <div className="p-1 rounded-4 shadow-sm mb-1 search-input-bg">
                <div className="input-group">
                    <input
                        type="search"
                        placeholder={placeHolder}
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
    );
};

export default Search;
