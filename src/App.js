import "./App.css";
import { Component } from "react";
import RegionData from "./components/regions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      regions: [],
    };
  }

  componentDidMount() {
    fetch("/data/users.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ regions: res });
      });
  }
handleSelected=(e)=>{
  console.log(e.target.value)
}

  render() {
    return (
      <>
        <select onChange={this.handleSelected} >
          {this.state.regions.map((region) => {
           return  <RegionData key={region.name} name={region.name} />;
          })}
        </select>
      </>
    );
  }
}

export default App;
