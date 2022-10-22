import React from "react";

export default function Form({ name, placeholder, value, onChange }) {
  return (
    <div>
      <div className="text-input">
        <input
          type="text"
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
