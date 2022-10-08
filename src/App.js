import React from 'react';
import TextInput from "./components/TextInput/TextInput";
import Table from "./components/TableList"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        fetch('/list/list.json')
            .then((res) => res.json())
            .then((users) =>
                this.setState({
                    users,
                }),
            );
    }
    deleteUser = (name) => {
        this.setState({
            users: this.state.users.filter((user) => {
                return user.name !== name;
            }),
        });
    };
    render() {
        return (
            <div >
                <Table
                    users={this.state.users}
                    onclick={this.deleteUser}
                />
            </div>
        );
    }
}

export default App;
