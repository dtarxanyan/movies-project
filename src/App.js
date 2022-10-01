import React from 'react';
import Sidebar from "./components/SideBar/Sidebar";
import InputText from "./components/Input/input";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        }
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    render() {
        return (
            <InputText handleInput = { this.handleInput } />
            // <Sidebar />
        )
    }
}

export default App;
