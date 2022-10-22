import React, {useState,useEffect} from 'react';

function Index({width,length}) {

const [volume,setVolume] = useState(0)
    const [height,setHeight] =useState(0)
    const [area,setArea]= useState(0)


    useEffect(()=>{
        setVolume(width  * length)
    },[height])



    const handleInput = (e) => {
    setHeight(e.target.value)
    }


    return (
        <div>
            <div>
                <label id ={'Width'}></label>
                <input
                    id ={'Width'}
                    type={"number"}
                    defaultValue={'width'}
                />
                <label id ={'Height'}></label>
                <input
                    id ={'Height'}
                    type={"number"}
                    defaultValue={'Height'}
                />
                <span> Area: {area}</span>
            </div>
            <div>
                <label id ={'Length'}></label>
                <input
                    onChange={handleInput}
                    defaultValue={'Length'}
                    id ={'Length'}
                    type={"number"}
                />
                <span>Volume: {volume}</span>
            </div>
        </div >
    );
}

export default Index;