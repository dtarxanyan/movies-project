import React from 'react';
import TextInput from "./components/TextInput/TextInput";
import DropDownInput from "./components/DropDown/DropDown";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        fetch('/data/countries.json')
            .then(res => res.json())
            .then(countries => this.setState({
                countries: countries,
            }))
    }

    render() {
        return (
            <div>
                <TextInput
                    label={'First Name'}
                    placeholder={'Enter Your Name'}
                    value={'Initial Value'}
                    onChange={(newValue) => {
                        console.log(newValue)
                    }}
                />

                <DropDownInput
                    label = {'Country'}
                    value = { {id: 2, name: 'Germany'} }
                    options = { this.state.countries }
                />

            </div>


        )
    }
}

export default App;
