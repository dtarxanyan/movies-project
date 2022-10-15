import React from "react";
import Gender from "../Gender/Gender";
import OptionList from "../OptionList/OptionList";
import SingnUpList from "../SingnUpList/SingnUpList";

class SingnUp extends React.Component {
  render() {
    return (
      <form>
        <SingnUpList placeholder={"first name"} />
        <SingnUpList placeholder={"Last name"} />
        <SingnUpList placeholder={"Mobil number or email"} />
        <SingnUpList placeholder={"New passvord"} />
        <OptionList />
        <Gender/>
      </form>
    );
  }
}

export default SingnUp;
