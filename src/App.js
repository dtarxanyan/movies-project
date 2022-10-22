import React from "react";
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
                <Volume area = {50}/>
            </Layout>
        );
    }
}

export default App;
