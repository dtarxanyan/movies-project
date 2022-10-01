import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";

class App extends React.Component {
  render() {
    return (
      <>
        <Input 
                label = 'Test Label'
                value = 'Test Value'
                placeholder = 'Test Placeholder'
                callback = {(value) => {console.log(value)}}></Input>
        <Sidebar />
      </>
    );
  }
}

export default App;
