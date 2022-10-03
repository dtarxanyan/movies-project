import React from "react";
import TableUsers from "./components/TableUsers";
import "./App.css";

class App extends React.Component {
  render() {
    return <TableUsers row={3} />;
  }
}

export default App;
