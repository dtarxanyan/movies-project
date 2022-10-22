import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      const disableAllInputs = this.props.disableAllInputs
      const allInputsColor = this.props.allInputsColor
        return (
            <Layout>
                <RegistrationPage allInputsColor={allInputsColor} disableAllInputs={disableAllInputs}/>
            </Layout>
        );
    }
}

export default App;
