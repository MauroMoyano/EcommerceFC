import React, {useState, useEffect} from 'react';
// icons
import {FiSearch} from "react-icons/fi";
// useNavigate hook
import {useNavigate} from "react-router-dom";

const SearchForm = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAnimating(false)
        }, 1000);
        // clear timeout event
        return () => clearTimeout(timeout);
    })

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.length > 0) {
            navigate(`/search?query=${searchTerm}`)
            document.querySelector('input').value = '';
            setSearchTerm('')
        } else {
            // if input is empty set animation to true
            setIsAnimating(true);
        }
    }

    return (
        <form className={`${isAnimating ? 'animate-shake' : 'animate-none'} w-full relative`}>
            <input
                onChange={handleSearchInput}
                className='input'
                type='text'
                placeholder='Search for product...'
            />
            <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'
                    onClick={handleSubmit}
            >
                <FiSearch className='text-xl'/>
            </button>
        </form>
    );
};

export default SearchForm;
