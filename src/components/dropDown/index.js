import React, {Component} from 'react';
import DropDownPage from "../dropDownPage";

class DropDown extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const{label, value, options, onChange} = this.props
        return (
            <div>
                {options.map(elem => <DropDownPage key={elem.id} value={value} label={label} onChange={onChange}/>)}
            </div>
        );
    }
}

export default DropDown;