import React, { useState } from "react";

function TextInput(props) {
    const [inputValue, setInputValue] = useState(props.defultValue)

    const handleInputChang = e => {
        setInputValue(e.target.value)
    }


    return (
        <div>
            <label htmlFor="text-input" >{props.label} :</label>


            <input value={inputValue} onChange={handleInputChang} id={Math.random()} type='password' placeholder={props.placeholder} />

        </div>
    )
}
export default TextInput