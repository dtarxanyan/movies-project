import React from 'react';
import Table from "./Table";

class TableContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            users: [],
        }
    }

    componentDidMount() {
        fetch('/data/users.json')
            .then((resp) => resp.json())
            .then((users) => {
                this.setState({users, isLoading: false});
            })
    }

    removeUser = (user) => {
        this.setState({users: this.state.users.filter((u) => u.id !== user.id)})
    }

    render() {
        const {users, isLoading} = this.state;

        return (
            <Table
                rows={users}
                isLoading={isLoading}
                onDelete={this.removeUser}
            />
        )
    }
}

export default TableContainer;
