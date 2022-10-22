import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";



function App() {
    return (
        <div>
            <Layout>
                <RegistrationPage
                    allInputsColor={'green'}
                    disableAllInputs ={ false}
                    type={'text'}
                />
            </Layout>
        </div>
    );
}

export default App;
