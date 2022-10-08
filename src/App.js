import React from 'react';
import TextInput from "./components/TextInput/TextInput";
import DropDownInput from "./components/DropDown/DropDown";
import TableRow from "./components/Table/Table";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            users: [],
        }
    }

    componentDidMount() {
        fetch('/data/countries.json')
            .then(res => res.json())
            .then(countries => this.setState({ countries }))

        fetch('/data/users.json')
            .then(res => res.json())
            .then(users => this.setState({ users }))
    }

    onDelete = (id) => {
        this.setState({
            users: this.state.users.filter(user => user.id !== id)
        })
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

                <table>
                    <tr>
                        <th>N</th>
                        <th>Name</th>
                        <th>User type</th>
                        <th>Action</th>
                    </tr>
                        {
                            this.state.users.map(user =>
                                <TableRow onDelete = { this.onDelete } rows = { user }/>
                            )
                        }

                </table>
            </div>
        )
    }
}

export default App;
