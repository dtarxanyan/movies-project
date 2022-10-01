import React from 'react';
import Sidebar from "./components/SideBar/Sidebar";
import InputBar from "./components/InputBar";


class App extends React.Component {
    constructor() {
        super();

    }


    hendelInput = (e) => {
        const value = e.target.value
    }


    render() {
        return (
            <>
            <Sidebar />

            <InputBar hendelInput={ this.hendelInput }/>


            </>
            )
    }
}

export default App;
