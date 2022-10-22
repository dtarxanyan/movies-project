import React, {useState} from 'react';

const Input = ({id, className, type, label, placeholder, name, value, onChange, disableInput, inputColor}) => {
    const [inputValue, setInputValue] = useState(`${value}`)

    const handleChange = (e) => {
        setInputValue(e.target.value)
        onChange(name, e.target.value)
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input

                style={{color: inputColor}}
                disabled={disableInput}
                className={className}
                id={id}
                defaultValue={inputValue}
                onChange={handleChange}
                type={type}
                placeholder={placeholder}
                name={name}/>
        </div>
    );
};

export default Input;
