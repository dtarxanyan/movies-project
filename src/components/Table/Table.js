import React from "react";

class Table extends React.Component {
    render() {
        const {rows, isLoading, onDelete} = this.props;

        return (
            <>
                {isLoading && <p>Loading ...</p>}
                {!isLoading && <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((row) => {
                        return (<tr key={row.id}>
                            <td>{row.firstName} {row.lastName}</td>
                            <td>
                                <button onClick={() => onDelete(row)}>Remove</button>
                            </td>
                        </tr>)
                    })}
                    </tbody>
                </table>}
            </>
        )

    }
}

export default Table;