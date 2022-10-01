import React from 'react';

class User extends React.Component {
    handleRemoveClick = (e, user) => {
        e.stopPropagation();
        this.props.onDelete(user.id);
    }

    render() {
        const {user, onItemClick} = this.props;

        return (
            <li onClick={() => onItemClick(user.id)}>
                id = {user.id}, name = {user.name}
                <button onClick={e => this.handleRemoveClick(e, user)}>X</button>
            </li>
        )
    }
}

export default User;