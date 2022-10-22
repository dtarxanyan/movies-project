import React, {useState} from "react";


function TextInputF(props) {
    const [inputVal,setInputVal] = useState('')

    const handleChange = (e) => {
        const value = e.target.value;
        setInputVal(value);
        props.onChange(props.name, value);
    };


    const {label, placeholder, onChange} = props;

    return (

        <div className={"text-input"}>
            <label htmlFor={"text-input"}>{label} : </label>

            <input
                id={"text-input"}
                type={"text"}
                value={inputVal}
                placeholder={placeholder}
                onChange={(e)=>handleChange(e)}
            />
        </div>
    )

}

export default TextInputF