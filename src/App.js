import React from 'react';
import UserList from "./components/UserList/UserList";
import TextInput from './components/TextInput'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            text : ''
        }
    }
    changeInput(e){
        this.setState({
            text : e.target.value
        })
    }
    render() {
        return (
            <TextInput onChange = {this.changeInput}/>
        )
    }
}

export default App;
