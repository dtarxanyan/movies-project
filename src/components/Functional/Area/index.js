import React, {useState, useEffect} from 'react';
import CatcVolum from "../CatcVolum";

function Index() {

    const [area, setArea] = useState(0)
    const [length, setLength] = useState(0)
    const [width, setWidth] = useState(0)


    useEffect(() => {
        setArea(length * width)
    }, [width,length])


    const lengthInput = (e) => {
        setLength(e.target.value)
    }
    const widthInput = (e) => {
        setWidth(e.target.value)
    }


    return (
        <div>
            <div>
                <label> Width </label>
                <input
                    type={"number"}
                    onChange={widthInput}
                /><br/>
                <label> length </label>
                <input
                    type={"number"}
                    onChange={lengthInput}
                /><br/>
            </div>
            <span>Area: {area}</span>


            <CatcVolum
                area={area}
            />

        </div>
    );
}

export default Index;