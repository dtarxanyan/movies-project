import React, {useState, useEffect} from 'react';

const CalculateVolume = ({width, length}) => {
    const [volume, setVolume] = useState(0)
    const [height, setHeight] = useState(0)
    const [area, setArea] = useState(0)

    useEffect(() => {
        setArea(width * length)
    }, []);


    useEffect(() => {
        setVolume(prev => area * height)
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
                <span>Area: {area}</span>
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
