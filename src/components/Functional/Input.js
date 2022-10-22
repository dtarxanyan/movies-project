import React from 'react';

function Input(props) {
  const { label, placeholder, onChange, id, name, className, type, value } = props;

  return (
    <div className={'text-input'}>
      <label htmlFor={id}>{label} : </label>

      <input
        className={className}
        label={label}
        name={name}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={() => onChange(e, name)}
      />
    </div>
  );
}

export default Input;
