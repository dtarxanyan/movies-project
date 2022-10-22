import React from 'react'
import { useState } from 'react';

export default function Input(props) {

    const { label, placeholder, onChange } = props;
    const [state,setState] = useState(props.defaultValue); 
   


  return (
    <div className={"text-input"}>
        <label htmlFor={"text-input"}>{label} : </label>

        <input
          id={"text-input"}
          type={"text"}
          value={state}
          placeholder={placeholder}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
  )
}
