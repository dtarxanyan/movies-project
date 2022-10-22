import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";
import CalcVolume from "./components/Functional/CalcVolume/CalcVolume";
import MathSqrt from "./components/Functional/MathSqrt/MathSqrt";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
               <MathSqrt/>
            </Layout>
        );
    }
}

export default App;
