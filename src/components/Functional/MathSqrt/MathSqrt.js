import React, {useState} from 'react';
import CalcVolume from "../CalcVolume/CalcVolume";


function MathSqrt() {
    const [With, setWith] = useState(0);
    const [height, setHeight] = useState(0);
    const [mathSqrt,setMathSqrt] =useState(0)
    const MathSqrt=()=>{

      setMathSqrt(With *height )
    }

    return (

        <div>
            <label>With</label>
            <input
                type={'number'}
                onChange={(e) => setWith(e.target.value)}
            />
             <label>Height</label>
                <input
                type={'number'}
                onChange={(e) => setHeight(e.target.value)}
            />
            <button onClick={MathSqrt}>ADD</button>
            <CalcVolume area={mathSqrt}/>
        </div>


    )

}

export default MathSqrt