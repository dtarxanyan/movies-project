import React, {useState, useEffect} from 'react';
import CatcVolum from "../CatcVolum";

function Index() {

    const [area, setArea] = useState(0)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)


    useEffect(() => {
        setArea(height * width)
    }, [])


    const heightInput = (e) => {
        setHeight(e.target.value)
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
                <label> Height </label>
                <input
                    type={"number"}
                    onChange={heightInput}
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