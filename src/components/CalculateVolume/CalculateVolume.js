import React, {useState, useEffect} from 'react';

const CalculateVolume = ({width, length}) => {
    const [volume, setVolume] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setVolume(prev => width * height * length)
    }, [height]);

    const handleInput = (e) => {
        setHeight(e.target.value)
    }

    return (
        <div>
            <div>
                <label htmlFor="width">Width</label>
                <input id={'width'} type="number" defaultValue={width}/>
                <label htmlFor="length">Length</label>
                <input id={'length'} type="number" defaultValue={length}/>
                <span>Area: {width * length}</span>
            </div>
            <div>
                <label htmlFor="height">Height</label>
                <input onChange={handleInput} id={'height'} type="number"/>
                <span>Volume: {volume}</span>
            </div>
        </div>
    );
};

export default CalculateVolume;
