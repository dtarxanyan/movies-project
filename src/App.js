import React from 'react';
import Sidebar from "./components/SideBar/Sidebar";
import InputBar from "./components/inputBar";

class App extends React.Component {

    constructor() {
        super();
        this.state={
            inputValue: "",
        }
    }

    handelInput = (e) => {
        const value = e.target.value
        this.setState({
            inputValue: value,
        })
    }

    render() {
        const {value} = this.state;
        return (
            <>
            <Sidebar />
                <h2>{value}</h2>
            <InputBar handelInput ={this.handelInput}/>
            </>
        )
    }
}
export default App;
