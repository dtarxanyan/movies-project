import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";
import CalculateVolume from "./components/CalculateVolume/CalculateVolume";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <CalculateVolume width={100} length={100} />
            </Layout>
        );
    }
}

export default App;
