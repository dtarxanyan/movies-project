import { Component } from "react";

import "./main.css";

class TableUsers extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("/data/tableUsers.json")
      .then((res) => res.json())
      .then((res) => this.setState({ users: res }));
  }

  deleteRow = (id) => {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    });
  };

  render() {
    return (
      <div>
        <table className="styled-table">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>LastName</th>
              <th>Delete</th>
            </tr>
          </tbody>
          <tfoot>
            {this.state.users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td
                  className="deleteBtn"
                  onClick={() => this.deleteRow(item.id)}
                >
                  X
                </td>
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    );
  }
}

export default TableUsers;
