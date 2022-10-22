import React, {useEffect, useState} from "react";
import Input from "../Input/Input";

const CalcVolume = (props) => {
    const {area} = props;
    const [volume, setVolume] = useState(0);
    const [height,setHeigth] = useState(0);

    useEffect(() => {
        setVolume(area * height)
    },[height,area])

    return (
        <>
            <input
                type={'number'}
                onChange={(e) => setHeigth(+e.target.value)}
            />

            <p>
                Volume: {volume}
            </p>
        </>
    )
}

export default CalcVolume;