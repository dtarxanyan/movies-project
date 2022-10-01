import React from 'react';
import Sidebar from "./components/SideBar/Sidebar";
import InputBar from "./components/inputBar";

class App extends React.Component {


    handelInput = (e) => {
        const value = e.target.value

    }


    render() {
        return (
            <>
            <Sidebar />
            <InputBar handelInput ={this.handelInput}/>
            </>
        )
    }
}

export default App;
