import React, {useState} from 'react';

const FunctionalInput = () => {


    const [inputValue, setInputValue] = useState("")

function handleInputValue (e) {
    setInputValue(e.target.value)
}


    return (
        <div>

            <input
                onChange={handleInputValue}
                type="password"
                value={inputValue}
                placeholder={"write code"}

            />
        </div>
    );
};

export default FunctionalInput;