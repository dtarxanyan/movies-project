import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <RegistrationPage/>
            </Layout>
        );
    }
}

export default App;
