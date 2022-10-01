import React from 'react';
import Sidebar from "./components/SideBar/Sidebar";
import InputText from "./components/Input/input";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: '',
            input: '',
            label: '',
            value: '',
        }
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    render() {
        const { placeholder, label, value } = this.state
        const { handleInput } = this

        return (
            <InputText
                placeholder = { placeholder }
                handleInput = { handleInput }
                label = { label }
                value = { value }
            />
            // <Sidebar />
        )
    }
}

export default App;
