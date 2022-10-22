import { useState } from "react";

const TextInput = ({ label, placeholder, onChange, value, name, id }) => {
  const [valueText, setValueText] = useState(value);

  const handleChange = (e) => {
    const valueInput = e.target.value;

    setValueText(valueInput);
    onChange(name, valueText);
  };

  return (
    <div className={"text-input"}>
      <label htmlFor={"text-input"}> {label} : </label>

      <input
        id={id}
        type={"text"}
        value={valueText}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default TextInput;
