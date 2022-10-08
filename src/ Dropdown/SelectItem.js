import React from 'react';

class SelectItem extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <option  value={this.props.id} >{this.props.name}</option>
        )
    }
}

export default SelectItem;