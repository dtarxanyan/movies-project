import React, {useState}from 'react';


function TextInput({id,className,label,onChange,type,placeholder,name}) {
  const [inputValue,setInputValue]=useState()

  const handleChange = (e)=>{
    setInputValue( e.target.value)
    onChange( name ,inputValue)
  }

    return (
        <div>
          <label htmlFor={id}>{label}</label>
          <input
          id={id}
          className={className}
          defaultValue={inputValue}
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          name={name}
          />
        </div>

    );
}

export default TextInput;