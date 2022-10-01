import React from 'react';
import UserList from "./components/UserList/UserList";
import TextInput from './components/TextInput'

class App extends React.Component {
    onchange = () =>{
        console.log('text');
    }
 
    render() {
        return (
            <div><TextInput label={'input'} placeholder={'text'} value={100} onChange={this.onchange} /></div>
        )
    }
}

export default App;
