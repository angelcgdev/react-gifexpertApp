import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) =>{

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        // reviene que el navegadore se recargue cuando se presiona intro
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategory( cats=>[ inputValue, ...cats]);
            setInputValue('');
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}