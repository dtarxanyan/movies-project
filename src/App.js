import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";
import CalcVolume from "./components/Functional/CalcVolume/CalcVolume";
import CalcAreaAndVolume from "./components/CalcAreaAndVolume/CalcAreaAndVolume";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <CalcAreaAndVolume />
            </Layout>
        );
    }
}

export default App;
