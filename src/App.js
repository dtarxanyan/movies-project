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
            value: 'Gago',
        }
    }

    onChange = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    render() {
        const { placeholder, label, value } = this.state
        const { onChange } = this

        return (
            <InputText
                placeholder = { placeholder }
                onChange = { onChange }
                label = { label }
                value = { value }
            />
            // <Sidebar />
        )
    }
}

export default App;
