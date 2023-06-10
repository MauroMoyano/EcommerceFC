import React, {useState} from 'react';
// icons
import {FiSearch} from "react-icons/fi";
// useNavigate hook
import { useNavigate} from "react-router-dom";

const SearchForm = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(searchTerm.length > 0){
            navigate(`/search?query=${searchTerm}`)
            document.querySelector('input').value='';
        }else{
            console.log('Please search for something');
        }
    }

    return (
        <form onClick={handleSubmit} className='w-full relative '>
            <input
                onChange={handleSearchInput}
                className='input'
                type='text'
                placeholder='Search for product...'
            />
            <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
                <FiSearch className='text-xl'/>
            </button>
        </form>
    );
};

export default SearchForm;
