import React, {useEffect, useState} from "react";
import Input from "../Input/Input";

const CalcVolume = (props) => {
    const {area} = props;
    const [volume, setVolume] = useState(0);
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setVolume(prev => area * height)
    }, [area])

    const calcVolume = (area, height) => {
        return area * height;
    };

    const onChange = (height) => {
        const vol = calcVolume(area, height);
        setVolume(vol);
        setHeight(height)
    }

    return (
        <>
            <Input
                type={'number'}
                label={'Height'}
                onChange={(name, value) => onChange(value || 0)}
            />

            <p>
                Volume: {volume}
            </p>
        </>
    )
}

export default CalcVolume;