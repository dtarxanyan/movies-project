import React, {useState} from 'react';
import Volume from "./volume";

const Index = () => {
    const [count, setCount] = useState(10)
    return (
        <div>
            <Volume count={count}/>
        </div>
    );
};

export default Index;