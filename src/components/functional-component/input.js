import { useState } from "react"

export default function TextInput({ label, placeholder }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="text-input">
            <label htmlFor="text-input">{label} :</label>
            <input
              type="text"
              id="text-input"
              value={value}
              placeholder={placeholder}
              onChange={handleChange}
            />
        </div>
    )
}