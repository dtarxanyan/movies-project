import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";
import CalculateAreaAndVolume from "./components/Functional/CalculateAreaAndVolume/CalculateAreaAndVolume";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <CalculateAreaAndVolume />
            </Layout>
        );
    }
}

export default App;
