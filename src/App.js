import React from "react";

import VolumeAndArea from "./components/VolumeAndArea";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <VolumeAndArea />
      </div>
    );
  }
}

export default App;
