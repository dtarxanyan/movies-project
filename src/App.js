import React from 'react';
import Sidebar from "./components/SideBar/Sidebar";
import InputBar from "./components/inputBar";

class App extends React.Component {

    constructor() {
        super();
        this.state={
            value: "",
        }
    }

    onChange = (e) => {
        const value = e.target.value
        this.setState({ value })
    }

    render() {
        const {value, label, placeHolder} = this.state;
        return (
            <>
            <Sidebar />
                <h2>{value}</h2>
            <InputBar
                        value={value}
                      onChange={this.onChange}
            />
            </>
        )
    }
}
export default App;
