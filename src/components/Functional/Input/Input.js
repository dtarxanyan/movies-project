import React from 'react';

const Input = ({id, className, type, label, placeholder, name, value, onChange}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                className={className}
                id={id}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                name={name}/>
        </div>
    );
};

export default Input;
