import React, {useState} from 'react';

const Volume = ({count}) => {
    const [countValue, setCountValue] = useState(0)


    function handleInputValue(e) {
        const value = e.target.value
        setCountValue(+value + countValue)
    }


    return (
        <div>
            <input type="number"
                   onChange={handleInputValue}
            />

            <div>
                total : {countValue * count}
            </div>
        </div>
    );
};

export default Volume;