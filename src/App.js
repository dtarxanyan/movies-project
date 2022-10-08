import React from 'react';
import TableContainer from "./components/Table/TableContainer";
import DropDown from "./components/DropDown/DropDown";

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
            .then(countries => this.setState({ countries }))
    }

    onChange = () => {
        console.log('barev')
    }

    render() {
        return (
            // <TableContainer/>
            <DropDown
                label = {'Country'}
                value = { {id: 2, name: 'Germany'} }
                options = { this.state.countries }
                onChange = { this.onChange }
            />
        )
    }
}

export default App;