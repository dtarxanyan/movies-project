import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Input from "./components/Input/Input";

class App extends React.Component {
  render() {
    return (
      <>
        <Input 
                label = 'Test Label'
                value = 'Test Value'
                placeholder = 'Test Placeholder'
                callback = {() => console.log(1)}></Input>
        <Sidebar />
      </>
    );
  }
}

export default App;
