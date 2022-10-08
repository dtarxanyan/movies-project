import React, {Component} from 'react';

class TableRow extends Component {
    render() {
        const {rows, onDelete} = this.props;

        return (
            <>
                {rows.map(user =>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.type}</td>
                        <td><button onClick={() => onDelete(user.id) }>Delete</button></td>
                    </tr>
                )}
            </>

        );
    }
}

export default TableRow;