import React from 'react';
import UserList from "./components/UserList/UserList";
import TextInput from './components/TextInput'
import Dropdown from './components/DropDomn';

class App extends React.Component {
    constructor(){
        super()
       
    }

   
    onchange(){
        console.log('text');
    }
   
 
    render() {
        return (
            <div><Dropdown label={'input'} placeholder={'text'} value={'USA'} onChange={this.onchange} /></div>
        )
    }
}

export default App;
