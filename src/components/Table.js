import React from 'react';

class Table extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <table className="wrapper">
        {this.props.users.map((user, index) => {
          return (
            <tr key={index} className="userName">
              <td>
                {user.name}
                <button className="removeBtn" onClick={() => this.props.onclick(user.name)}>
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default Table;
