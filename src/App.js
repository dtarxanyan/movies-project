import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import Calculate from "./components/calculate";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
            <Calculate/>
            </Layout>
        );
    }
}

export default App;
