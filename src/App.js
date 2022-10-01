import React from 'react';
import Input from './components/Input/Input';
import Sidebar from "./components/SideBar/Sidebar";

class App extends React.Component {
    render() {
        return (
            <>
                <Sidebar />
                <Input
                   placeholder='write here'
                 />
            </>
        )
    }
}

export default App;
