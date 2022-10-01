import React from "react";
import DropDown from "./components/dropDown";

class App extends React.Component {
  render() {
    return <DropDown label="Country" value={{ id: 1, name: "USA" }} />;
  }
}

export default App;
