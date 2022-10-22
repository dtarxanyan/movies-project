import React from "react";
import Calc from "./components/Calc/Calc";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Layout>
                <Calc area={15}/>
            </Layout>
        );
    }
}

export default App;
