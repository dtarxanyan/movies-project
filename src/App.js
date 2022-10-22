import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";
import Index from "./components/Functional/Area";



function App() {
    return (
        <div>
            <Layout>
                <Index
                height={'height'}
                white={'white'}
                length={'length'}
                />
            </Layout>
        </div>
    );
}

export default App;
