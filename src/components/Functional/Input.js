import React, { useState } from 'react';

function Input(props) {
  const [value, setValue] = useState(props.value);
  const { label, placeholder, onChange, id, name, className, type } = props;

  const handleChange = (e) => {
    const targetValue = e.target.value;
    setValue(targetValue);
    onChange(props.name, value);
  };
  return (
    <div className={'text-input'}>
      <label htmlFor={id}>{label} : </label>

      <input
        className={className}
        name={name}
        id={id}
        type={type}
        value={props.value}
        placeholder={placeholder}
        onChange={() => handleChange()}
      />
    </div>
  );
}

export default Input;
