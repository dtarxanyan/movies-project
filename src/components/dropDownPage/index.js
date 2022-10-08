import React, {Component} from 'react';

class DropDownPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { label,key, value, options} = this.props;
        return (
            <div>


                <label htmlFor="Country">{label}</label>
            </div>
        );
    }
}

export default DropDownPage;