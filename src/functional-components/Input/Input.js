import React, { useState } from "react";

function Input({id, className, type, placeholder, label, name, value, onChange}){
const [inputValue,setInputValue] = useState(`${value}`)

    const handelChange=(e)=>{
        setInputValue(e.target.value)
        onChange(name,inputValue)
    }


    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type}
                   id={id}
                   className={className}
                   placeholder={placeholder}
                   name={name}
                   defaultValue={inputValue}
                   onChange={handelChange}
            />
        </div>
    )
}

export default Input