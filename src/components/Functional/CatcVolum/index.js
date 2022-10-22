import React, {useEffect, useState} from 'react';

function Calc({area}) {
    console.log(area)
    const [length, setLength] = useState(0)
    const [volumes, setVolumes] = useState(0)

    useEffect(() => {
        setVolumes(length * area)
    }, [])

    const lengthInput = (e) => {
        setLength(e.target.value)
    }

    return (

        <div>
            <label> Length </label>
            <input
                onChange={lengthInput}
                type={"number"}
            />
            <span>Volume: {volumes}</span>
        </div>


    );
}

export default Calc;