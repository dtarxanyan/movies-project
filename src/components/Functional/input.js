import React,{useState} from "react";
const Input=({id,className,type,label,placeholder,name,value,onChange})=>{
    const[inputValue , setInputValue]=useState(`${value}`)
    const handleChange =(e)=>{
        setInputValue(e.target.value)
        onChange(name,inputValue)
    }
    return(
        <div>
            <label htmlfor={id}>{label}</label>
            <input
            className={className}
            id={id}
            defaultValue={inputValue}
            onChange={handleChange}
            type={type}
            placeholder={placeholder}
            name={name}/>
        </div>
    )
}

export  default Input