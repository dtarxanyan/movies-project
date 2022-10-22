import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";
import CalcVolume from "./components/calcVolume";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Layout>
            //     <RegistrationPage/>
            // </Layout>

            
            <CalcVolume area={200}/>
        );
    }
}

export default App;
