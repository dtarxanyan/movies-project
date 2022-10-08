import React, {Component} from 'react';
import UserListTable from "../userListTable";

class TableComponent extends Component {
constructor() {
    super();

    this.state= {
        users: [],
        isDelete: true,
    }
}

    componentDidMount() {
        fetch('/data/userTable.json')
            .then(res => res.json())
            .then(user => this.setState({
                user,
            }))
    }

    render() {
    const {users} = this.state;
        return (
            <div>
                {users.map(user => <UserListTable key={user.id} nam={user.name} age={user.age}/>)}
            </div>
        );
    }
}

export default TableComponent;