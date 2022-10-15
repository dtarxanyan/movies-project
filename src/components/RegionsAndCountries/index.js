import { Component } from "react";
import DropDownComponent from "./DropDownComponent";

class RegionsAndCounties extends Component {
  constructor() {
    super();
    this.state = {
      countiesData: [],
      regionsData: [],
      currentID: "",
    };
    this.countries = [];
  }

  componentDidMount() {
    fetch("/data/countriesData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ countiesData: res });
        this.countries = res;
      });

    fetch("/data/regionsData.json")
      .then((res) => res.json())
      .then((res) => this.setState({ regionsData: res }));
  }

  countryID = (id) => {
    this.setState({
      currentID: +id,
    });
    console.log(this.state.currentID);
  };

  render() {
    return (
      <div className="container">
        <DropDownComponent
          countryID={this.countryID}
          countiesData={this.state.countiesData}
        />

        <DropDownComponent countiesData={this.state.countiesData} />
      </div>
    );
  }
}

export default RegionsAndCounties;
