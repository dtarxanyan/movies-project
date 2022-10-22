import React from "react";

import InputField from "./components/VolumeadnArea";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <InputField area={15} />;
  }
}

export default App;
