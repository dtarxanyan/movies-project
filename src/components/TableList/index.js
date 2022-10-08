import {Component} from 'react'

class Table extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <table >
                    {this.props.users.map((user, index) => {
                        return (
                            <tr key={index} >
                                <td>
                                    {user.name}
                                    <button onClick={() => this.props.onclick(user.name)}>
                                        X
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </table>


            </div>
        )
    }
}
export default Table