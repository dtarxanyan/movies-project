import React, {useEffect, useState} from 'react';
import CalcVolume from "../CalcVolume/CalcVolume";

const CalculateAreaAndVolume = () => {
    const [area, setArea] = useState(0)
    const [widthInput, setWidthInput] = useState(0)
    const [lengthInput, setLengthInput] = useState(0)

    useEffect( () => {
        setArea(prev => widthInput * lengthInput)
    }, [])

    useEffect(() => {
        setArea(prev => widthInput * lengthInput )
    }, [widthInput, lengthInput]);

    const handleInputs = (name, e) => {
        switch (name) {
            case 'widthInput':
                setWidthInput(e.target.value);
                return;
            case 'lengthInput':
                setLengthInput(e.target.value);
                return;
        }
    }


    return (
        <div>
            <CalcVolume area = { area } />
            <div>
                <label htmlFor="width">Width</label>
                <input onChange={(e) => handleInputs('widthInput', e)} id={'width'} type="number" defaultValue={widthInput}/>
                <label htmlFor="length">Length</label>
                <input onChange={(e) => handleInputs('lengthInput', e)} id={'length'} type="number" defaultValue={lengthInput}/>
                <span>Area: {area}</span>
            </div>
        </div>
    );
};

export default CalculateAreaAndVolume;
