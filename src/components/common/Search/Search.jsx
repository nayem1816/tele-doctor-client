import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';
import { useForm } from 'react-hook-form';

const Search = ({ placeHolder, setSearchValue }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        setSearchValue(data.value);
    };
    return (
        <div className="search-input mt-4 w-75">
            <div className="p-1 rounded-4 shadow-sm mb-1 search-input-bg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <input
                            type="search"
                            placeholder={placeHolder}
                            {...register('value')}
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
                </form>
            </div>
        </div>
    );
};

export default Search;
