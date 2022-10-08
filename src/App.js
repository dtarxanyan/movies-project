import React from 'react';
import TextInput from "./components/TextInput/TextInput";
import Table from "./components/TableList"
import Dropdown from './components/Dropdown';

class App extends React.Component {
    constructor() {
        super();
        
    }
    
    render() {
        return (
            <div >
                <Dropdown/>
            </div>
        );
    }
}

export default App;
