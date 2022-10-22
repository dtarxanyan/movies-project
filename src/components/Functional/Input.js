import React, { useState } from 'react';

function Input(props) {
  const { label, placeholder, onChange, id, name, className, type } = props;

  const [value, setValue] = useState(props.value);

  const handleChange = (e) => {
    const targetValue = e.target.value;
    setValue({ value: targetValue });
    onChange(name, value);
  };

  return (
    <div className={'text-input'}>
      <label htmlFor={id}>{label} : </label>

      <input
        className={className}
        label={label}
        name={name}
        id={id}
        type={type}
        value={value2}
        placeholder={placeholder}
        onChange={() => handleChange(e)}
      />
    </div>
  );
}

export default Input;
