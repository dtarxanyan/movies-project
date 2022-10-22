import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";
import CalculateAreaAndVolume from "./components/Functional/CalculateAreaAndVolume/CalculateAreaAndVolume";

const menuItems = [
    {
        name: 'Առարկաներ',
        items: [
            {
                name: 'Ֆիզիկա',
            },
            {
                name: 'Մաթեմ',
            },
            {
                name: 'Հայոց',
            }
        ]
    },
    {
        name: 'Դասարաններ',
        items: [
            {
                name: '10 Ա',
            },
            {
                name: '9 Բ',
            },
            {
                name: '11 Գ',
            }
        ]
    }
]

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout menuItems={menuItems}>
                <CalculateAreaAndVolume />
            </Layout>
        );
    }
}

export default App;
