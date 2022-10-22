import React, {useState} from 'react';

const Volume = ({count}) => {
    const [volume, setVolume] = useState(0)


    function handleInputValue(e) {
        const value = e.target.value
        setVolume(+value + volume)
    }


    return (
        <div>
            <input type="number"
                   onChange={handleInputValue}
            />

            <div>
                total : {volume * count}
            </div>
        </div>
    );
};

export default Volume;