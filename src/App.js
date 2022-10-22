import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";
import Index from "./components/Functional/Area";



function App() {
    return (
        <div>
            <Layout>
                <Index
                height={200}
                white={200}
                />
            </Layout>
        </div>
    );
}

export default App;
