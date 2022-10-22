import React, { useState } from 'react';

const Input = ({id, className, type, label, placeholder, name, value, onChange,color, disabled}) => {
    const [inputValue, setInputValue] = useState(`${value}`)

    const handleChange = (e) => {
        setInputValue(e.target.value)
        onChange(name, e.target.value)
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                style={{backgroundColor: color}}
                disabled = {disabled ? true : false}
                className={className}
                id={id}
                defaultValue={inputValue}
                onChange={ handleChange }
                type={type}
                placeholder={placeholder}
                name={name}/>
        </div>
    );
};

export default Input;
