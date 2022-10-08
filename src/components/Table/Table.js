import React, {Component} from 'react';

class Table extends Component {
    render() {
        const { rows, onDelete } = this.props;

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>N</th>
                            <th>Name</th>
                            <th>User type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(user =>
                            <tr key = { user.id }>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.type}</td>
                                <td><button onClick={() => onDelete(user.id) }>Delete</button></td>
                            </tr>
                        )}
                    </tbody>

                </table>

            </div>
        );
    }
}

export default Table;