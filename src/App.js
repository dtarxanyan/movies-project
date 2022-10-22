import React from "react";
import Area from "./components/Functional/Area/Area";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";
import Volume from "./components/Functional/Volume/Volume";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Layout>
            <Area></Area>
          </Layout>
        );
    }
}

export default App;
