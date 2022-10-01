import React from 'react';
import User from "./User";

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                users: [
                    {id: 1, name: 'Davit'},
                    {id: 2, name: 'John Doe'},
                    {id: 3, name: 'Jane Gatson'},
                ],
                isLoading: false,
            })
        }, 500)
    }

    onDelete = (id) => {
        const users = this.state.users.filter((user) => user.id !== id);
        this.setState({users})
    }

    onItemClick = (id) => {
        const newUsers = this.state.users.map((user) => {
            if (user.id === id) {
                user.name = 'Michael';
            }

            return user;
        })

        this.setState({users: newUsers});
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <span>Loading...</span>}
                {!this.state.isLoading && <ul>
                    {this.state.users.map((user) => {
                        return (
                            <User key={user.id} user={user} onItemClick={this.onItemClick} onDelete={this.onDelete}/>
                        )
                    })}
                </ul>}
            </div>
        )
    }
}

export default UserList;
